
import psutil as ps 
import platform
import math  
import os 
import time 
import socket
import subprocess
import pymysql ; 
from datetime import datetime
today = datetime.now()

horaSistema = os.popen("date").read()
horaSistema = horaSistema.split()
dataAtual = today.strftime("%Y-%m-%d "+horaSistema[4])



connection = pymysql.connect( host='localhost',
                user='root', 
                password='akemih32',
                database='dbProjetoBolsa') 

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
    print(horaSistema[4])
    print("Nome do sistema: " + str(dados_os["SISTEMA_NOME"]))
    print(dados_os["SISTEMA_URL"])
    print("Tipo do sistema: " + str(dados_os["SISTEMA_TIPO"]))
    print('\n')

def memoriaRam() : 
  

    total = round(ps.virtual_memory().total / pow(10,9),0)
    uso_ram = round(ps.virtual_memory().used / pow(10,9),2)
    livre_ram = round(ps.virtual_memory().free / pow(10,9),2)
    percent = round((uso_ram*100/total)) 
    
    print("\033[1;36m MEMÓRIA RAM \n ================= \033[0m\n  ") 
    print("Uso atual da Ram: "+str(percent) + "%/100%")
    print("Uso em memória da Ram: "+ str(uso_ram)+"GB/" +str(round(dados_ram['RAM_TOTAL']/pow(10,9),2))+"GB")
    print('\n')

    sql = "INSERT INTO tbRam(capacidadeRam, espacoLivreRam, espacoUsadoRam, dataRam, fkServidor) \
         VALUES ('"+str(total)+"','"+str(livre_ram)+"','"+str(uso_ram)+"','"+str(dataAtual)+"',1);"

    
    
    cursor.execute(sql)

#INSERT INTO tbRam(capacidadeRam, espacoLivreRam, espacoUsadoRam, dataRam, fkServidor) VALUES (%s,%s,%s,'%s',1); (8.0, 2.81, 2.73, '2022-08-23 19:26:38', 1)

def cpu() :


    print("\033[1;36mCPU \n ================= \n \033[0m ")


     
    cpu_dados = os.popen("lscpu").read()
    cpu_dados = cpu_dados.split("\n")
    temp = ps.sensors_temperatures()['coretemp'][0].current
    freqAtualCpu = round(ps.cpu_freq().current * pow(2,13) / ps.cpu_freq().max,2)


    for i in range(len(cpu_dados)) : 
        cpu_dados[i] = cpu_dados[i].strip()
   
        cpu_dados[i] = cpu_dados[i].split(':')

 
    for i in range(len(cpu_dados)) : 
        for j in range(0,1) : 
            if (cpu_dados[i][j] == "Núcleo(s) por soquete"): 
                nuc  = cpu_dados[i][j+1]
            elif(cpu_dados[i][j] == "Nome do modelo") : 
                nom = cpu_dados[i][j+1]
            elif(cpu_dados[i][j] == "Arquitetura") : 
                arq = cpu_dados[i][j+1]
            elif(cpu_dados[i][j] == "Thread(s) per núcleo"): 
                thr = cpu_dados[i][j+1]

            

    index_cpu ={"NOME": nom , "ARQUITETURA" : arq , "NUCLEO": nuc, "THREAD" : thr}
    
    cpu_modelo_nome = index_cpu["NOME"]
    cpu_tecnologia = index_cpu['ARQUITETURA']
    cpu_qtd_nucleos = index_cpu["NUCLEO"]
    cpu_qtd_threads = index_cpu["THREAD"]

    #formatacao
    cpu_qtd_nucleos =  str(cpu_qtd_nucleos).strip()
    cpu_qtd_threads = str(cpu_qtd_threads).strip()
    cpu_tecnologia = str(cpu_tecnologia).strip()
    cpu_modelo_nome = str(cpu_modelo_nome).strip() 

    print("Nome da CPU: " +cpu_modelo_nome) 
    print("Arquitetura possível da CPU: " + cpu_tecnologia) 
    print("Quantidade de núcleos: " + cpu_qtd_nucleos) 
    print("Quantidade de Thread: " +cpu_qtd_threads) 
    print("Frequência mínima da CPU: "+ str(dados_cpu['CPU_FREQ_MINIMA']) + "GHz")
    print("Frequência máxima da CPU: " + str(dados_cpu['CPU_FREQ_MAX']) + "GHz")
    print("Frequência atual da  CPU: " + str(freqAtualCpu ) + "%/100% ") 
    print("Arquitetura do processador: " + platform.machine())
    print('\n')



    sqlFixo = "INSERT INTO tbCpu (qtdNucleos,qtdThreads, tecnologiaCpu, modeloCpu, fkServidor) VALUES \
         ("+cpu_qtd_nucleos+","+cpu_qtd_threads+",'"+cpu_tecnologia+"','"+cpu_modelo_nome+"',1) "

    sqlFlex = "INSERT INTO tbDadosCpu (freqAtualCpu, temperaturaAtualCpu, dataCpu, fkCpu) VALUES \
         ("+str(freqAtualCpu)+","+str(temp)+",'"+str(dataAtual)+"',1) "
    cursor.execute(sqlFixo)



def disco() :  
    print("\033[1;36mDisco \n ================= \n \033[0m ")


    disco_total = round(ps.disk_usage('/').total >> 30) 
    disco_livre = round( ps.disk_usage('/').free >> 30)
    disco_usado = disco_total-disco_livre
    disco_percent = round(disco_total * 100 / disco_livre/100)
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

    sql = "INSERT INTO tbDisco (capacidadeDisco,espacoLivreDisco,espacoUsadoDisco,porcentagemUsoDisco , dataDisco, fkServidor) VALUES \
        ("+str(disco_total)+", "+str(disco_livre)+","+str(disco_usado)+","+str(disco_percent)+",'"+str(dataAtual)+"', 1) "
   
    cursor.execute(sql)  


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
   
    horaSistema = os.popen("date").read()
    horaSistema = horaSistema.split()
    os.system("clear")
    sistemaOperacional()
    memoriaRam() 
    cpu()
    disco()
    network()
    time.sleep(1)
    connection.commit() 

    processoTotal()
processoTotal()
