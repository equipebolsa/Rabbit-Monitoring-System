import psutil as ps
import mysql.connector
import os
import sys
from time import sleep
import time
import datetime 
import pymssql

#ambiente = 'producao'
ambiente = 'desenvolvimento'

blacklist = []
allowlist = []
filterlist = []
prelist = []
processos = []
precisaAtualizar = False

def getMachine_addr():
    os_type = sys.platform.lower()
    if "win" in os_type:
        import wmi
        SN = wmi.WMI()
        return SN.Win32_BaseBoard()[0].SerialNumber
    elif "linux" in os_type:
        command = "hal-get-property --udi /org/freedesktop/Hal/devices/computer --key system.hardware.uuid"
        return os.popen(command).read().replace("\n", "").replace("	", "").replace(" ", "")

def matarProcesso(pid):
    os_type = sys.platform.lower()
    
    print("matando o processo: "+ str(pid))
    if "win" in os_type:
        os.system('TASKKILL /PID ' + str(pid) + ' /F')
    elif "linux" in os_type:
        os.system('kill '+str(pid))    

def listarProcessos():
    global processos
    print('Lista de processos em execução:')
    for proc in ps.process_iter():
        info = proc.as_dict(attrs=['pid', 'name', 'username'])
        #testar isso no windows
        if info['username'] != 'root':
            processos.append(info)
        ##print('Processo: {} (PID: {})'.format(info['pid'], info['name']))

def estaNaBlack(processo):
    for itemList in blacklist:
        if itemList[1] == processo:
            return True
    return False

def estaNaAllow(processo):
    for itemList in allowlist:
        if itemList == processo:
            return True
    return False

def estaNaPreList(processo):
    for itemList in prelist:
        if itemList == processo:
            return True
    return False

def estaEmAlertas(processo):
    print("ASDASDDASDSADSADSD")
    print(alertas)
    for itemList in alertas:
        if itemList[1] == processo:
            return True
    return False

########
def receberFilterlist():
    global filterlist
    cursor.execute("select * from filterlist")
    filterlist = cursor.fetchall()
    
    if ambiente == 'producao':
        templist = []
        for processo in filterlist:
            templist.append([processo['id'],processo['nome']])
        filterlist = templist
        
def atualizarListas():
    global allowlist
    global blacklist
    global alertas

    cursor.execute("select * from alertaProcesso")
    alertas = cursor.fetchall()
    cursor.execute("select * from blacklist")
    blacklist = cursor.fetchall()
    cursor.execute("select * from allowlist")
    allowlist = cursor.fetchall()
    print("ANTES")
    print(alertas)
    if ambiente == 'producao':
        templist = []
        for processo in alertas:
            templist.append([processo['id'],processo['nome']])
        alertas = templist
        templist = []
        for processo in blacklist:
            templist.append([processo['id'],processo['nome']])
        blacklist = templist
        templist = []
        for processo in allowlist:
            templist.append([processo['id'],processo['nome']])
        allowlist = templist
    print("DEPOIS")
    print(alertas)

def atualizarAlertas():
    global alertas
    cursor.execute("select * from alertaProcesso")
    alertas = cursor.fetchall()
    if ambiente == 'producao':
        templist = []
        for processo in alertas:
            templist.append([processo['id'],processo['nome']])
        alertas = templist

def conectarBanco():
    global connection
    global cursor
    
    if(ambiente == 'producao'):
        connection = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
        cursor = connection.cursor(as_dict=True)
    elif(ambiente == 'desenvolvimento'):
        connection = mysql.connector.connect(host="localhost", user="aluno", password="sptech", database="bolsa", auth_plugin='mysql_native_password')
        cursor = connection.cursor()

conectarBanco()

#cursor.execute("insert into blacklist values (null, 'teste')")
#connection.commit()

#cursor.execute("select * from blacklist")
#linha = cursor.fetchone()
#print("Conectado ao banco de dados ",linha) 

############################################################
############################################################

atualizarListas()
receberFilterlist()
tempo = int(datetime.datetime.now().strftime('%M'))

#print("GALO")
#print(filterlist)
#print("SNIPER")
#print(processos)
#print(type(filterlist))

#verificando black/allowlist atual
while True:
    #atualização a cada 5 min:
    cdParaRequisicao = 0
    tempoAgora = int(datetime.datetime.now().strftime('%M'))
    tempoFuturo = tempo + cdParaRequisicao

    if tempoFuturo > 60:
        tempoFuturo = tempoFuturo - 60

    if tempoAgora >= tempoFuturo:
        tempo = tempoAgora
        blacklist = []
        allowlist = []
        atualizarListas()

    #listando processos
    processos = []
    listarProcessos()

    #verificando se há algum processo que está na blacklist
    for itemProcesso in processos:
        estaNaLista = False
        for itemList in blacklist:
            if itemList[1] == itemProcesso['name']:
                print("achou: ", itemProcesso['name'])
                estaNaLista = True
        if estaNaLista == True:
            matarProcesso(itemProcesso['pid'])

    #verificando se há algum processo está na allowlist
    for itemProcesso in processos:
        estaNaLista = False
        for itemList in allowlist:
            if itemList[1] == itemProcesso['name']:
                estaNaLista = True
        for itemList in filterlist:
            if itemList[1][-1] == "*":
                itemToStr = itemList[1]
                itemToStr = ''.join(itemList[1])
                itemToStr = itemToStr[:-1]
                if str(itemProcesso).find(itemToStr) > 0:
                    estaNaLista = True
            else:
                if itemList[1] == itemProcesso['name']:
                    estaNaLista = True
        if estaNaLista == False:
            resposta = ""
            print(itemProcesso['name'])
            processo = itemProcesso['name']
            if estaNaBlack(processo) == False and estaNaAllow(processo) == False and estaNaPreList(processo) == False and estaEmAlertas(processo) == False:
                atualizarAlertas()
                if estaEmAlertas(processo) == False:
                    print("enviando alerta")
                    sn = getMachine_addr()
                    print(sn)

                    prelist.append(itemProcesso['name'])
                    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    cursor.execute("insert into alertaProcesso(nome) values ('"+ itemProcesso['name'] + "')")
                    

    connection.commit()
    
    print(tempo)
    print(tempoFuturo)
    print(tempoAgora)
    sleep(3)