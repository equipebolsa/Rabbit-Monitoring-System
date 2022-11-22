import psutil as ps
import mysql.connector
import os
import sys
from time import sleep
import time
import datetime 

blacklist = []
whitelist = []
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
    print('Lista de processos em execução:')
    for proc in ps.process_iter():
        info = proc.as_dict(attrs=['pid', 'name'])
        #cursor.execute("insert into whitelist values (null, '"+info['name']+"')")
        
        processos.append(info)
        print('Processo: {} (PID: {})'.format(info['pid'], info['name']))

def estaNaBlack(processo):
    for itemList in blacklist:
        if itemList[1] == processo:
            return True
    return False

def estaNaWhite(processo):
    for itemList in whitelist:
        if itemList == processo:
            return True
    return False

def estaNaPreList(processo):
    for itemList in prelist:
        if itemList == processo:
            return True
    return False

def estaEmAlertas(processo):
    for itemList in alertas:
        if itemList[1] == processo:
            return True
    return False

def atualizarListas():
    global whitelist
    global blacklist
    global alertas

    cursor.execute("select * from alertaProcesso")
    alertas = cursor.fetchall()
   
    #for itemList in alertas:
    #    if itemList[3] == 'y':
    #        #whitelist
    #        cursor.execute("insert into whitelist values (null, '"+itemList[1]+"')")
    #        cursor.execute("update alertaProcesso set estado = 'd' where id = "+ str(itemList[0]))
    #        connection.commit()
    #    elif itemList[3] == 'n':
    #        #blacklist
    #        cursor.execute("insert into blacklist values (null, '"+itemList[1]+"')")
    #        cursor.execute("update alertaProcesso set estado = 'd' where id = "+ str(itemList[0]))
    #        connection.commit()
    
    cursor.execute("select * from blacklist")
    blacklist = cursor.fetchall()
    cursor.execute("select * from whitelist")
    whitelist = cursor.fetchall()

def atualizarAlertas():
    global alertas
    cursor.execute("select * from alertaProcesso where estado != 'd'")
    alertas = cursor.fetchall()

connection = mysql.connector.connect(host="localhost", user="root", password="sptech", database="bolsa", auth_plugin='mysql_native_password')
cursor = connection.cursor()
#cursor.execute("insert into blacklist values (null, 'teste')")
#connection.commit()

#cursor.execute("select * from blacklist")
#linha = cursor.fetchone()
#print("Conectado ao banco de dados ",linha) 

############################################################
############################################################

atualizarListas()

tempo = int(datetime.datetime.now().strftime('%M'))

#verificando black/whitelist atual
while True:
    #atualização a cada 5 min:
    cdParaRequisicao = 1
    tempoAgora = int(datetime.datetime.now().strftime('%M'))
    tempoFuturo = tempo + cdParaRequisicao

    if tempoFuturo > 60:
        tempoFuturo = tempoFuturo - 60

    if tempoAgora >= tempoFuturo:
        tempo = tempoAgora
        blacklist = []
        whitelist = []
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

    #verificando se há algum processo está na whitelist
    for itemProcesso in processos:
        estaNaLista = False
        for itemList in whitelist:
            if itemList[1] == itemProcesso['name']:
                estaNaLista = True
        if estaNaLista == False:
            resposta = ""
            print(itemProcesso['name'])
            processo = itemProcesso['name']
            if estaNaBlack(processo) == False and estaNaWhite(processo) == False and estaNaPreList(processo) == False and estaEmAlertas(processo) == False:
                atualizarAlertas()
                if estaEmAlertas(processo) == False:
                    print("enviando alerta")
                    sn = getMachine_addr()
                    print(sn)

                    prelist.append(itemProcesso['name'])
                    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    cursor.execute("insert into alertaProcesso values (null, '"+ itemProcesso['name'] + "','" + sn+"', 'w', '"+now+"');")
                    

    connection.commit()
    
    print(tempo)
    print(tempoFuturo)
    print(tempoAgora)
    sleep(3)