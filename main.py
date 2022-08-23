
import psutil as ps 
import platform
import math  
import os 
import time 
import socket
import subprocess
import pymysql ; 
from datetime import date
today = date.today()


dataAtual = today.strftime("%Y/%m/%d %H/%M/%S")

connection = pymysql.connect( host='localhost',
                user='root', 
                password='akemih32',
                database='projetoBolsa') 

cursor = connection.cursor() 
        
dados_os =  { 
        'SISTEMA_NOME' : platform.freedesktop_os_release()["NAME"],
        'SISTEMA_TIPO' : platform.system(), 
        'SISTEMA_URL'  : platform.freedesktop_os_release()["HOME_URL"]
      
}
dados_ram = {
            'RAM_DISPONIVEL':ps.virtual_memory().available >>30 , 
            'RAM_TOTAL':ps.virtual_memory()[0] ,
}

dados_cpu = { 
    'CPU_NOME' : platform.processor(),
    'CPU_FREQ_MINIMA':  ps.cpu_freq().min,
    'CPU_FREQ_MAX' :  ps.cpu_freq().max,
}

def sistemaOperacional(): 

    
    print("\033[1;36m Sistema Operacional  \n ================= \033[0m\n  ")
    print("Nome do sistema: " + str(dados_os["SISTEMA_NOME"]))
    print(dados_os["SISTEMA_URL"])
    print("Tipo do sistema: " + str(dados_os["SISTEMA_TIPO"]))
    print("Horário atual: ") 
    os.system('date')
    print('\n')

def memoriaRam() : 
    sqlFlex = "INSERT INTO tbRam (capacidadeRam, espacoLivreRam, espacoUsadoRam, dataRam, fkRam) VALUES (%s,%s,%s,%s,1) "

    print(ps.virtual_memory())
    total = ps.virtual_memory().total / pow(10,9)
    uso_ram = ps.virtual_memory().used / pow(10,9)
    livre_ram = ps.virtual_memory().free / pow(10,9)
    percent = round((uso_ram*100/total)) 
    
    print("\033[1;36m MEMÓRIA RAM \n ================= \033[0m\n  ") 
    print("Uso atual da Ram: "+str(percent) + "%/100%")

    print("Uso em memória da Ram: "+ str(round(uso_ram),2)+"GB/" +str(round(dados_ram['RAM_TOTAL']/pow(10,9),2))+"GB")

    print('\n')


    cursor.execute(sqlFlex, (total , livre_ram,  (uso_ram ) , dataAtual, 1  ))

def cpu() :


    print("\033[1;36mCPU \n ================= \n \033[0m ")


     
    cpu_modelo = os.popen("lscpu").read()
    cpu_modelo = cpu_modelo.split("\n")
    temp = ps.sensors_temperatures()['coretemp'].current 
    sqlFixo = "INSERT INTO tbCpu (qtdNucleos,qtdThreads, tecnologiaCpu, modeloCpu, fkServidor) VALUES (%s, %s,%s,%s,1) "

    sqlFlex = "INSERT INTO tbDadosCpu (freqAtualCpu, temperaturaAtualCpu, dataCpu, fkCpu) VALUES (%s,%s,%s,%s,1) "
    freqAtualCpu = round(ps.cpu_freq().current * pow(2,13) / ps.cpu_freq().max,2)
    for i in range(len(cpu_modelo)) : 
        cpu_modelo[i] = cpu_modelo[i].strip()
   
        cpu_modelo[i] = cpu_modelo[i].split(':')

 
    for i in range(len(cpu_modelo)) : 
        for j in range(0,1) : 
            if (cpu_modelo[i][j] == "Núcleo(s) por soquete"): 
                nuc  = cpu_modelo[i][j+1]
            elif(cpu_modelo[i][j] == "Nome do modelo") : 
                nom = cpu_modelo[i][j+1]
            elif(cpu_modelo[i][j] == "Arquitetura") : 
                arq = cpu_modelo[i][j+1]
            elif(cpu_modelo[i][j] == "Thread(s) per núcleo"): 
                thr = cpu_modelo[i][j+1]

            

    index_cpu ={"NOME": nom , "ARQUITETURA" : arq , "NUCLEO": nuc, "THREAD" : thr}
    
    cpu_modelo_nome = index_cpu["NOME"]
    cpu_tecnologia = index_cpu['ARQUITETURA']
    cpu_qtd_nucleos = index_cpu["NUCLEO"]
    cpu_qtd_threads = index_cpu["THREAD"]

    print("Nome da CPU: " + str(cpu_modelo_nome).strip()) 
    print("Arquitetura possível da CPU: " + str(cpu_tecnologia).strip() )
    print("Quantidade de núcleos: " + str(cpu_qtd_nucleos).strip())
    print("Quantidade de Thread: " + str(cpu_qtd_threads).strip())
    print("Frequência mínima da CPU: "+ str(dados_cpu['CPU_FREQ_MINIMA']) + "GHz")

    print("Frequência máxima da CPU: " + str(dados_cpu['CPU_FREQ_MAX']) + "GHz")

    print("Frequência atual da  CPU: " + str(freqAtualCpu ) + "%/100% ") 
    print("Arquitetura do processador: " + platform.machine())
    print('\n')



    cursor.execute(sqlFixo, (str(cpu_qtd_nucleos).strip() , str(cpu_qtd_threads).strip() , str(cpu_tecnologia).strip(), str(cpu_modelo_nome).strip()) )
    cursor.execute(sqlFlex, (freqAtualCpu, temp, dataAtual))



def disco() :  
     

    sqlFixo = "INSERT INTO tbDisco (capacidadeDisco,espacoLivreDisco,espacoUsadoDisco,dataDisco, fkServidor) VALUES (%s, %s,%s,%s, %s, 1) "

    print("\033[1;36mDisco \n ================= \n \033[0m ")


    disco_total = ps.disk_usage('/').total >> 30
    disco_livre = ps.disk_usage('/').free >> 30
    disco_percent = round(disco_total * 100 / disco_livre/100,2)
    tempo_leitura = ps.disk_io_counters().read_time >> 30 
    tempo_escrita = ps.disk_io_counters().write_time >> 30 
    particoes_disco = ps.disk_partitions()
    
    print("Uso do Disco: " + str(round(disco_total-disco_livre))  + "GB/" + str(disco_total) + "GB"  +  " ("+str(disco_percent)+"%)")

    print("Tempo de escrita: " + str(tempo_escrita)+"ms")
    print("Tempo de leitura "+ str(tempo_leitura)+"ms")
    print('\n')


    print("Partições do disco: \n")
    for i in range(1,len(ps.disk_partitions())+1):
        if(i%2==0) : 
            print(ps.disk_partitions()[i][0])
    print('\n')

    cursor.execute(sqlFixo, disco_total, disco_livre, (disco_total - disco_livre) , dataAtual)  


def network() : 
    print("\033[1;36mInternet \n ================= \033[0m\n")
    bytes_recebidos = ps.net_io_counters()[0]
    bytes_enviados = ps.net_io_counters()[1]
    nome_internet = socket.gethostname()
    # internet tá com problema na conversão => ver com a Marise
    ip_internet = socket.gethostbyname(socket.gethostname())
    print("ip: " + str(ip_internet))
    print("Hostname: " + str(nome_internet))
    print("Velocidade de Download: " + str(round( bytes_enviados/10000000 ,2 ))  + "mb")

    print("Velocidade de Upload: " + str(round(bytes_recebidos/1000000,2) ) + "mb")




def processoTotal() : 
    cursor.commit() 
    os.system("clear")
    sistemaOperacional()
    memoriaRam() 
    cpu()
    disco()
    network()
    time.sleep(30)
    processoTotal()



    
processoTotal()
