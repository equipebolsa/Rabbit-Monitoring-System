from time import sleep
from getmac import get_mac_address as gma
import os
import sys
import dicionarioComandos
import mysql.connector
import hashlib
import pymssql
import psutil
import pipefyCard
from datetime import datetime

def alertarComponente(tipo,fkMysql,fkAzure):
    query = "INSERT INTO alerta(tipoAlerta,fkLeitura) VALUES(%s, %s)"
    val1 = (str(tipo),str(fkMysql))
    val2 = (str(tipo),str(fkAzure))
    cursor.execute(query, val1)
    cursor2.execute(query, val2)
    connection.commit()
    connection2.commit()
    data_e_hora_atuais = datetime.now()
    data_e_hora_em_texto = data_e_hora_atuais.strftime('%d/%m/%Y %H:%M')
    msg = "Consumo " +tipo+" - " + data_e_hora_em_texto
    #pipefyCard.enviarWorldCloud(msg)

def alertarRAM(fkMysql,fkAzure):
    if(psutil.virtual_memory().percent>50):
        alertarComponente("RAM",fkMysql,fkAzure)

def alertarCPU(fkMysql,fkAzure):
    if(psutil.cpu_percent(interval=None, percpu=False)>1):
        alertarComponente("CPU",fkMysql,fkAzure)


def cadastrarRede(fkServidor1,fkServidor2,tipo):
    query = "INSERT INTO rede (fkServidor,tipoConexao,address) VALUES (%s,%s,%s)"
    print(tipo)
    address =  psutil.net_if_addrs()[tipo][0].address
    params1 = (fkServidor1,tipo,address)
    params2 = (fkServidor2,tipo,address)
    cursor.execute(query, params1)
    cursor2.execute(query,params2)
    connection.commit()
    connection2.commit()

connection = mysql.connector.connect(host="localhost", user="aluno", password="sptech", database="bolsa",auth_plugin='mysql_native_password')
cursor = connection.cursor()

connection2 = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
cursor2 = connection2.cursor(as_dict=True)


def getMachine_addr():
    command=""
    os_type = sys.platform.lower()
    if "win" in os_type:
        command = "wmic bios get serialnumber"
    elif "linux" in os_type:
        command = "hal-get-property --udi /org/freedesktop/Hal/devices/computer --key system.hardware.uuid"
    return os.popen(command).read().replace("\n", "").replace(" ", "").replace(" ", "")


def typeOS():
    comandos=""
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
            lastIDAZURE = cursor2.lastrowid
            lastIDMYSQL = cursor.lastrowid
            print(resultado)
            if(resultado[0]['idMetrica']==3):
                alertarRAM(lastIDMYSQL,lastIDAZURE)
            if(resultado[0]['idMetrica']==1):
                alertarCPU(lastIDMYSQL,lastIDAZURE)
            print("Executando")
            sleep(1)
            os.system(comandos[0])


def captura():
    query = ("SELECT * from parametro INNER JOIN servidor ON fkServidor = idServidor WHERE macAddress = %s and parametroAtivo = 1")
    cursor.execute(query, [gma(),])
    resposta1 = cursor.fetchall()
    cursor2.execute(query, gma())
    resposta2 = cursor2.fetchall()

    if (len(resposta1) > 0 and (len(resposta2) > 0)):
        executarMonitoramento()
    else:
        cadastar()
        sleep(2)

def cadastrarParametro(fkServidor1,fkServidor2, fkComponente1,fkComponente2, fkMetrica):
    query = "INSERT INTO parametro (fkServidor,fkComponenteFisico,fkMetrica, parametroAtivo) VALUES (%s,%s, %s, 1)"
    params1 = (fkServidor1, fkComponente1, fkMetrica)
    params2 = (fkServidor2, fkComponente2, fkMetrica)
    cursor.execute(query, params1)
    cursor2.execute(query, params2)
    connection.commit()
    connection2.commit()


def cadastrarComponente(fkServidor1,fkServidor2, componente):
    query = "INSERT INTO componenteFisico (fkServidor,tipoComponente) VALUES (%s, %s)"
    params1 = (fkServidor1, componente)
    params2 = (fkServidor2, componente)
    cursor.execute(query, params1)
    cursor2.execute(query,params2)
    connection.commit()
    connection2.commit()


def cadastar():
    interfaceNet=""
    entrada = str(input(
        "A presente maquina não está cadastrada no sistema, deseja cadastar (y/n) "))
    if (entrada.lower() == "n"):
        return False
    elif (entrada.lower() == "y"):
        setor = str(input("Por favor digite o id do setor que deseja cadastar a maquina "))
        rede = str(input("Servidor utiliza Wi-Fi(1) ou Ethernet(2)"))
        if(rede=="1"):
            if(comandos[1] == "Linux"):
                rede = "/sbin/ip -4 -o a | cut -d ' ' -f 2,7 | cut -d '/' -f  1 | grep w | cut -d ' ' -f 1"
                interfaceNet = os.popen(rede).read().replace("\n", "").replace(" ", "").replace(" ", "")
            else:
                interfaceNet = "Wi-Fi"
        elif(rede=="2"):
            if(comandos[1] == "Linux"):
                interfaceNet = "eth0"
            else:
                interfaceNet = "Ethernet"
        else:
            cadastar()
        query = "INSERT INTO servidor(fkSetor,sistemaOperacional,macAddress,serialNumber) VALUES (%s, %s, %s, %s);"
        params = (setor, comandos[1], str(gma()), str(getMachine_addr()))
        cursor.execute(query, params)
        cursor2.execute(query,params)
        connection.commit()
        connection2.commit()
        fkServidor1 = cursor.lastrowid
        fkServidor2 = cursor2.lastrowid
        cadastrarRede(fkServidor1,fkServidor2,interfaceNet)
        cadastrarComponente(fkServidor1,fkServidor2, "CPU")
        cadastrarParametro(fkServidor1,fkServidor2,(cursor.lastrowid),(cursor2.lastrowid),1)
        cadastrarComponente(fkServidor1,fkServidor2, "RAM")
        cadastrarParametro(fkServidor1,fkServidor2,(cursor.lastrowid),(cursor2.lastrowid),3)
        cadastrarComponente(fkServidor1,fkServidor2,"DISCO")
        cadastrarParametro(fkServidor1,fkServidor2,(cursor.lastrowid),(cursor2.lastrowid),2)
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