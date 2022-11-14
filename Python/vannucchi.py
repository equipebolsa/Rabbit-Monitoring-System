import psutil as ps
import mysql.connector
import os

processos = []
precisaAtualizar = False

def matarProcesso(pid):
    print("matando o processo: "+ itemProcesso['name'])
    os.system('TASKKILL /PID ' + str(pid) + ' /F')

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


connection = mysql.connector.connect(host="localhost", user="root", password="sptech", database="teste", auth_plugin='mysql_native_password')
cursor = connection.cursor()
#cursor.execute("insert into blacklist values (null, 'teste')")
#connection.commit()

#cursor.execute("select * from blacklist")
#linha = cursor.fetchone()
#print("Conectado ao banco de dados ",linha) 

############################################################
############################################################
############################################################
############################################################

#listando processos

listarProcessos()

#verificando black/whitelist atual

cursor.execute("select * from blacklist")
blacklist = cursor.fetchall()

cursor.execute("select * from whitelist")
whitelist = cursor.fetchall()

#verificando se há algum processo que está na whitelist
print('blacklist')
for itemProcesso in processos:
    estaNaLista = False
    for itemList in blacklist:
        if itemList[1] == itemProcesso['name']:
            estaNaLista = True
    if estaNaLista == True:
        matarProcesso(itemProcesso['pid'])

print('whitelist')
#verificando se há algum processo que não está na whitelist
for itemProcesso in processos:
    estaNaLista = False
    for itemList in whitelist:
        if itemList[1] == itemProcesso['name']:
            estaNaLista = True
    if estaNaLista == False:
        resposta = ""
        if(estaNaBlack(itemProcesso['name']) == False):
            while resposta.lower() != "y" and resposta.lower() != "n":
                print("O processo "+itemProcesso['name']+" não está na lista, deseja adiciona-lo?(Y/N)")
                resposta = input()
            if resposta.lower() == 'y':
                cursor.execute("insert into whitelist values (null, '"+itemProcesso['name']+"')")
            if resposta.lower() == 'n':
                cursor.execute("insert into blacklist values (null, '"+itemProcesso['name']+"')")
                matarProcesso(itemProcesso['pid'])
                connection.commit()




# print(processos[0]['name'])