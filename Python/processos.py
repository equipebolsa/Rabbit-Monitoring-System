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

blocklist = []
allowlist = []
filterlist = []
prelist = []
processos = []
precisaAtualizar = False


def conectarBanco():
    global connection
    global cursor
    
    if(ambiente == 'producao'):
        connection = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
        cursor = connection.cursor(as_dict=True)
    elif(ambiente == 'desenvolvimento'):
        connection = mysql.connector.connect(host="localhost", user="aluno", password="sptech", database="bolsa", auth_plugin='mysql_native_password')
        cursor = connection.cursor()


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

def estaNaBlock(processo):
    for itemList in blocklist:
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

def estaNaWait(processo):
    for itemList in waitlist:
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
    global blocklist
    global waitlist

    cursor.execute("select * from waitlist")
    waitlist = cursor.fetchall()
    cursor.execute("select * from blocklist")
    blocklist = cursor.fetchall()
    cursor.execute("select * from allowlist")
    allowlist = cursor.fetchall()
    if ambiente == 'producao':
        templist = []
        for processo in waitlist:
            templist.append([processo['id'],processo['nome']])
        waitlist = templist
        templist = []
        for processo in blocklist:
            templist.append([processo['id'],processo['nome']])
        blocklist = templist
        templist = []
        for processo in allowlist:
            templist.append([processo['id'],processo['nome']])
        allowlist = templist

def atualizarAlertas():
    global waitlist
    cursor.execute("select * from waitlist")
    waitlist = cursor.fetchall()
    if ambiente == 'producao':
        templist = []
        for processo in waitlist:
            templist.append([processo['id'],processo['nome']])
        waitlist = templist

conectarBanco()

#cursor.execute("insert into blocklist values (null, 'teste')")
#connection.commit()

#cursor.execute("select * from blocklist")
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
        blocklist = []
        allowlist = []
        atualizarListas()

    #listando processos
    processos = []
    listarProcessos()

    #verificando se há algum processo que está na blocklist
    for itemProcesso in processos:
        estaNaLista = False
        for itemList in blocklist:
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
            if estaNaBlock(processo) == False and estaNaAllow(processo) == False and estaNaPreList(processo) == False and estaNaWait(processo) == False:
                atualizarAlertas()
                if estaNaWait(processo) == False:
                    print("enviando alerta")
                    sn = getMachine_addr()
                    print(sn)

                    prelist.append(itemProcesso['name'])
                    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    cursor.execute("insert into waitlist(nome) values ('"+ itemProcesso['name'] + "')")
                    

    connection.commit()
    
    print(tempo)
    print(tempoFuturo)
    print(tempoAgora)
    sleep(3)