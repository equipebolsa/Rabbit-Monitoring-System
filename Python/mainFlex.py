from time import sleep
from unittest import result
from getmac import get_mac_address as gma
import os
import sys
import dicionarioComandos
import mysql.connector
import hashlib
import pymssql
import psutil


def cadastrarRede(fkServidor,tipo):
    query = "INSERT INTO rede (fkServidor,tipoConexao,address) VALUES (%s,%s,%s)"
    address =  psutil.net_if_addrs()[tipo][0].address
    params = (fkServidor,tipo,address)
    cursor.execute(query, params)
    cursor2.execute(query,params)
    connection.commit()
    connection2.commit()

connection = mysql.connector.connect(host="localhost", user="aluno", password="sptech", database="bolsa",auth_plugin='mysql_native_password')
cursor = connection.cursor()

connection2 = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
cursor2 = connection2.cursor(as_dict=True)


def getMachine_addr():
    os_type = sys.platform.lower()
    if "win" in os_type:
        command = "wmic bios get serialnumber"
    elif "linux" in os_type:
        command = "hal-get-property --udi /org/freedesktop/Hal/devices/computer --key system.hardware.uuid"
    return os.popen(command).read().replace("\n", "").replace(" ", "").replace(" ", "")


def typeOS():
    os_type = sys.platform.lower()
    if "win" in os_type:
        comandos = ["cls", "Windows",'Ethernet','Loopback Pseudo-Interface 1']
    elif "linux" in os_type:
        comandos = ["clear", "Linux", 'eth0','lo']
    return comandos


def verificar(email, senha):
    hash = hashlib.sha512(str(senha).encode("utf-8")).hexdigest()
    query = ('SELECT * FROM usuario  WHERE emailUsuario = %s AND senhaUsuario = %s;')
    params = (email, hash)
    cursor2.execute(query, params)
    if (cursor2.fetchall()):
        return True


def executarMonitoramento():
    while True:
        query = ("SELECT * from parametro INNER JOIN servidor ON fkServidor = idServidor WHERE macAddress = %s and parametroAtivo = 1")
        cursor2.execute(query, gma())
        resposta = cursor2.fetchall()
        print(resposta)
        for row in resposta:

            query = ("SELECT * FROM metrica WHERE idMetrica = %s")
            cursor2.execute(query, row['fkMetrica'])
            resultado = cursor2.fetchall()
            leitura = dicionarioComandos.comando(resultado[0]['idMetrica'],comandos[1])
            query = ("INSERT INTO leitura(horarioLeitura,valorLeitura,fkComponenteFisico,fkMetrica) VALUES(NOW(), %s, %s, %s)")
            query2 = ("INSERT INTO leitura(horarioLeitura,valorLeitura,fkComponenteFisico,fkMetrica) VALUES(CURRENT_TIMESTAMP, %s, %s, %s)")
            val = (str(leitura),str(row['fkComponenteFisico']),str(row['fkMetrica']))
            cursor.execute(query, val)
            cursor2.execute(query2, val)
            connection.commit()
            connection2.commit()
            print("Executando")
            sleep(1)
            os.system(comandos[0])


def captura():
    query = ("SELECT * from parametro INNER JOIN servidor ON fkServidor = idServidor WHERE macAddress = %s and parametroAtivo = 1")
    cursor2.execute(query, gma())
    resposta = cursor2.fetchall()

    if (len(resposta) > 0):
        executarMonitoramento()
    else:
        cadastar()
        sleep(2)

def cadastrarParametro(fkServidor, fkComponente, fkMetrica):
    query = "INSERT INTO parametro (fkServidor,fkComponenteFisico,fkMetrica, parametroAtivo) VALUES (%s,%s, %s, 1)"
    params = (fkServidor, fkComponente, fkMetrica)
    cursor.execute(query, params)
    cursor2.execute(query, params)
    connection.commit()
    connection2.commit()


def cadastrarComponente(fkServidor, componente):
    query = "INSERT INTO componenteFisico (fkServidor,tipoComponente) VALUES (%s, %s)"
    params = (fkServidor, componente)
    cursor.execute(query, params)
    cursor2.execute(query,params)
    connection.commit()
    connection2.commit()


def cadastar():
    entrada = str(input(
        "A presente maquina não está cadastrada no sistema, deseja cadastar (y/n) "))
    if (entrada.lower() == "n"):
        return False
    elif (entrada.lower() == "y"):
        setor = str(input("Por favor digite o id do setor que deseja cadastar a maquina "))
        rede = str(input("Servidor utiliza Wi-Fi(1) ou Ethernet(2)"))
        if(rede=="1"):
            rede = "Wi-Fi"
        elif(rede=="2"):
            rede = "Ethernet"
        else:
            cadastar()
        query = "INSERT INTO servidor(fkSetor,sistemaOperacional,macAddress,serialNumber) VALUES (%s, %s, %s, %s);"
        params = (setor, comandos[1], str(gma()), str(getMachine_addr()))
        cursor.execute(query, params)
        cursor2.execute(query,params)
        connection.commit()
        connection2.commit()
        fkServidor = cursor.lastrowid
        fkServidor = cursor2.lastrowid
        cadastrarRede(fkServidor,rede)
        cadastrarComponente(fkServidor, "CPU")
        cadastrarParametro(fkServidor, cursor.lastrowid, 1)
        cadastrarComponente(fkServidor, "RAM")
        cadastrarParametro(fkServidor, cursor.lastrowid, 3)
        cadastrarComponente(fkServidor, "DISCO")
        cadastrarParametro(fkServidor, cursor.lastrowid, 2)
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
    print("Por favor insira eu Email & Senha (Digite 0 para os dois para sair)")
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