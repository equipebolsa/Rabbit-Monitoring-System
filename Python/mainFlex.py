from time import sleep
from getmac import get_mac_address as gma
import os
import sys
import mysql.connector
import hashlib
import psutil


connection = mysql.connector.connect(
    host="localhost", user="root", password="sptech", database="bolsa")
cursor = connection.cursor()


def getMachine_addr():
    os_type = sys.platform.lower()
    if "win" in os_type:
        command = "wmic bios get serialnumber"
    elif "linux" in os_type:
        command = "hal-get-property --udi /org/freedesktop/Hal/devices/computer --key system.hardware.uuid"
    return os.popen(command).read().replace("\n", "").replace("	", "").replace(" ", "")


def typeOS():
    os_type = sys.platform.lower()
    if "win" in os_type:
        comandos = ["cls", "Windows"]
    elif "linux" in os_type:
        comandos = ["clear", "Linux"]
    return comandos


def verificar(email, senha):
    hash = hashlib.sha512(str(senha).encode("utf-8")).hexdigest()
    query = ('SELECT * FROM usuario  WHERE emailUsuario = %s AND senhaUsuario = %s;')
    params = (email, hash)
    cursor.execute(query, params)
    if (cursor.fetchall()):
        return True



def executarMonitoramento(resposta):
    while True:
        script = ""
        i = 1
        for row in resposta:

            script += f"""
def executar_{i}(fkServidor, fkComponente, fkMetrica):

    query = ("SELECT * FROM metrica WHERE idMetrica = %s")
    cursor.execute(query, [fkMetrica])    

    resposta = cursor.fetchall() 
    comando = resposta[0][2]
    isTupla = resposta[0][5]

    if(resposta[0][4] !=None): 
        leitura = eval(resposta[0][2]+resposta[0][4])
    else:
        leitura = eval(comando)   



    if isTupla == "0":
        query = ("INSERT INTO leitura(horarioLeitura,valorLeitura,fkComponenteFisico,fkMetrica) VALUES(NOW(), %s, %s, %s)")    
        val = (str(leitura),str(fkComponente),str(fkMetrica))
        cursor.execute(query, val)
        connection.commit()
 
    
    
executar_{i}({row[2]}, {row[0]}, {row[1]})
    """
        i += 1
        if script: exec(script)
        print("Executando...")
        sleep(5)
        os.system(comandos[0])









def captura():
    query = ("SELECT * from parametro INNER JOIN servidor ON fkServidor = idServidor WHERE macAddress = %s")
    cursor.execute(query, [gma()])
    resposta = cursor.fetchall()

    if (len(resposta) > 0):
        executarMonitoramento(resposta)
    else:
        print(
            "Nenhuma componente cadastrado para monitoramento, cadastre na sua dashboard!")
        sleep(2)
        exit()


def cadastrarParametro(fkServidor, fkComponente, fkMetrica):
    query = "INSERT INTO parametro (fkServidor,fkComponenteFisico,fkMetrica) VALUES (%s,%s, %s)"
    params = (fkServidor, fkComponente, fkMetrica)
    cursor.execute(query, params)
    connection.commit()


def cadastrarComponente(fkServidor, componente):
    query = "INSERT INTO componenteFisico (fkServidor,tipoComponente) VALUES (%s, %s)"
    params = (fkServidor, componente)
    cursor.execute(query, params)
    connection.commit()


def cadastar():
    entrada = str(input(
        "A presente maquina não está cadastrada no sistema, deseja cadastar (y/n) "))
    if (entrada.lower() == "n"):
        return False
    elif (entrada.lower() == "y"):
        setor = str(
            input("Por favor digite o id do setor que deseja cadastar a maquina "))
        query = "INSERT INTO servidor(fkSetor,sistemaOperacional,macAddress,serialNumber) VALUES (%s, %s, %s, %s);"
        params = (setor, comandos[1], str(gma()), str(getMachine_addr()))
        cursor.execute(query, params)
        connection.commit()
        fkServidor = cursor.lastrowid
        cadastrarComponente(fkServidor, "CPU")
        cadastrarParametro(fkServidor, cursor.lastrowid, 1)
        cadastrarComponente(fkServidor, "RAM")
        cadastrarParametro(fkServidor, cursor.lastrowid, 2)
        cadastrarComponente(fkServidor, "DISCO")
        cadastrarParametro(fkServidor, cursor.lastrowid, 3)
        captura()
    else:
        cadastar()


def estado():
    query = ('SELECT * FROM servidor WHERE serialNumber = %s;')
    params = (getMachine_addr(),)
    cursor.execute(query, params)
    if (cursor.fetchall()):
        return captura()
    else:
        return cadastar()


comandos = typeOS()
while (True):
    print("Bem Vindo ao Rabbit Monitoring System")
    print("Por favor insira eu Email & Senha (Digite 0 para os dois sair)")
    email = str(input("Email:"))
    senha = str(input("Senha:"))
    if (email == "0" and senha == "0"):
        exit()
    elif (verificar(email, senha)):
        estado()
        break
    else:
        print("Usuario Não Identificado")
        sleep(3)
        os.system(comandos[0])
