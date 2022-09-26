import pymysql
import socket
import time
import sys,os
import platform
import psutil as ps
from datetime import datetime
import numpy as np 
import subprocess
import wmi;


# cria arquivo logs.txt
f = open("logs.txt", "w")
# Inicia o Log
f.write("=====")
f.write("LOGS DA APLICAÇÃO")
f.write("===== \n\n")

# define os dados para leitura do horário, que é pego pela função "date" do shell
system_time = (os.popen("date").read().split() ) 
today = datetime.now()
today_time = today.strftime("%Y-%m-%d ")




print( os.popen("date").read().split())
# define as propriedades da conexão do banco de dados
connection = pymysql.connect(host='localhost',
                             user='aluno',
                             password='sptech',
                             database='dbProjetoRms')

# cursor, que nos auxilia a adentrar o banco de dados e inserir no mesmo
cursor = connection.cursor()

# dicionario 1 com os dados fixos do sistema operacional
dados_os = {
    'SISTEMA_NOME': platform.system(),
    'SISTEMA_TIPO': platform.system(),
    'SISTEMA_URL': platform.release()
}

# dicionario 2, com os dados fixos da CPU
dados_cpu = {
    'CPU_NOME': platform.processor(),
    'CPU_FREQ_MINIMA':  ps.cpu_freq().min,
    'CPU_FREQ_MAX':  ps.cpu_freq().max,
}

# cat /proc/meminfo  
def run_sql_command(sql_command):
    return cursor.execute(sql_command)

def transform_to_gb(value, n_decimal=0):
    return round(value / pow(1024, 3), n_decimal)

def get_current_date() : 
    return os.popen("date").read().split()[3]

def get_directory(): 
    directory = os.popen('pwd').read()
    return directory

def execute_chart(directory): 
    os.system('python {}/grafics.py'.format(directory))

def get_system_type():
    f.write("""
        Horário atual: {0} 
        Nome do S.O : {1} 
        Tipo do sistema : {2}  
    """.format(get_current_date(), dados_os['SISTEMA_NOME'], dados_os['SISTEMA_TIPO']))
    print("\033[1;36m Sistema Operacional  \n ================= \033[0m\n  ")
    print(get_current_date())  # horario do sistema atual (visto no shell)
    print("Nome do sistema: " + str(dados_os["SISTEMA_NOME"]))
    print(dados_os["SISTEMA_URL"])
    print("Tipo do sistema: " + str(dados_os["SISTEMA_TIPO"]) + "\n")



def get_memory_ram():
    # calculo de conversão de bytes para gb, 10^9
    total = transform_to_gb(ps.virtual_memory().total)
    uso_ram = transform_to_gb(ps.virtual_memory().used, 2)
    livre_ram = transform_to_gb(ps.virtual_memory().free, 2)
    percent = ps.virtual_memory().percent

    print("\033[1;36m MEMÓRIA RAM \n ================= \033[0m\n  ")
    print("Uso atual da Ram: "+ str(percent) + "%/100%")
    print("Uso em memória da Ram: " + str(uso_ram) +"GB/" + str(total)+"GB")
    print('\n')

    f.write("""
        Total Ram : {0}GB
        Uso atual : {1} GB
        Porcentagem : {2}% / 100% 
        Data: {3} 
    """.format(total, uso_ram, percent, today_time))

    run_sql_command("INSERT INTO tbRam(capacidadeRam, espacoLivreRam, espacoUsadoRam, dataColetaDadosRam, fkServidor, fkSetor) \
         VALUES ('"+str(total)+"','"+str(livre_ram)+"','"+str(uso_ram)+"','"+str(today_time)+"',1,1);")

def get_cpu():
    
    print("\033[1;36mCPU \n ================= \n \033[0m ")
    # pega os dados da cpu (nome, etc) pelo comando shell lscpu
    cpu_dados = os.popen("lscpu").read()
    cpu_dados = cpu_dados.split("\n")
    temp = ps.sensors_temperatures()['coretemp'][0].current
    freqAtualCpu = round(ps.cpu_freq().current * 100 / ps.cpu_freq().max, 2)

    # separa os dados pegos da lscpu e separa em uma array, sendo a divisão dos elementos " : "
    for i in range(len(cpu_dados)):
        cpu_dados[i] = cpu_dados[i].strip()
        cpu_dados[i] = cpu_dados[i].split(':')
        # exemplo do split:

        # " nome: pedro "
        # [ nome, pedro ]

    # recebe os dados do lscpu e armazena em uma variável, rodando o vetor e procurando palavras predefinidas
    for i in range(len(cpu_dados)):

        # matriz na matematica
        #0 == pergunta , 1 == resposta

        if (cpu_dados[i][0] == "Núcleo(s) por soquete" or cpu_dados[i][0] == "Core(s) per socket"):
            cpu_qtd_nucleos = cpu_dados[i][1]
        elif (cpu_dados[i][0] == "Nome do modelo" or cpu_dados[i][0] == "Model name"):
            cpu_modelo_nome = cpu_dados[i][1]
        elif (cpu_dados[i][0] == "Arquitetura" or cpu_dados[i][0] == "Architecture"):
            cpu_tecnologia = cpu_dados[i][1]
        elif (cpu_dados[i][0] == "Thread(s) per núcleo" or cpu_dados[i][0] == "Thread(s) per core"):
            cpu_qtd_threads = cpu_dados[i][1]
    # formatacao
    cpu_qtd_nucleos = str(cpu_qtd_nucleos).strip()
    cpu_qtd_threads = str(cpu_qtd_threads).strip()
    cpu_tecnologia = str(cpu_tecnologia).strip()
    cpu_modelo_nome = str(cpu_modelo_nome).strip()

    cursor_select_cpu_count = run_sql_command('SELECT * from tbCpu WHERE modeloCpu="{}"'.format(cpu_modelo_nome))

    print("Nome da CPU: " + cpu_modelo_nome)
    print("Arquitetura possível da CPU: " + cpu_tecnologia)
    print("Quantidade de núcleos: " + cpu_qtd_nucleos)
    print("Quantidade de Thread: " + cpu_qtd_threads)
    print("Frequência mínima da CPU: " +
          str(dados_cpu['CPU_FREQ_MINIMA']) + "GHz")
    print("Frequência máxima da CPU: " +
          str(dados_cpu['CPU_FREQ_MAX']) + "GHz")
    print("Frequência atual da CPU: " + str(freqAtualCpu) + "%/100% ")
    print("Arquitetura do processador: " + platform.machine())
    print('\n')

    f.write("""
        Freq. Atual CPU : {0}% / 100% 
        Freq. Minima CPU : {1} GhZ
        Freq. Maxima CPU : {2} GhZ
        Temperatura da CPU : {3}°C
    """.format(freqAtualCpu, dados_cpu['CPU_FREQ_MINIMA'], dados_cpu['CPU_FREQ_MAX'], temp))

    # insere no sql
    if(cursor_select_cpu_count < 1 ) :  
        run_sql_command("INSERT INTO tbCpu (qtdNucleos,qtdThreads, tecnologiaCpu, modeloCpu, fkServidor, fkSetor) VALUES \
            ("+cpu_qtd_nucleos+","+cpu_qtd_threads+",'"+cpu_tecnologia+"','"+cpu_modelo_nome+"',1,1) ")
        
        print("Enviado ao Banco de Dados")
        print("\n")




    a = today_time
    print(freqAtualCpu)
    run_sql_command("INSERT INTO tbDadosCpu (freqAtualCpu, temperaturaAtualCpu, dataColetaDadosCpu, fkCpu) VALUES ({0},{1},'{2}',1) ".format(freqAtualCpu, temp, a))




def get_disk():
    print("\033[1;36mDisco \n ================= \n \033[0m ")

    # Colhe os dados e converte para GB, >> 30 é a conversão, descobri isso depois.
    # manipulacao de bits = >>
    # para virar gb
    disco_total = transform_to_gb(ps.disk_usage('/').total, 2)
    disco_livre = transform_to_gb(ps.disk_usage('/').free, 2)
    disco_usado = disco_total-disco_livre
    disco_percent = round(ps.disk_usage('/').percent)
    tempo_leitura = ps.disk_io_counters().read_time >> 15
    tempo_escrita = ps.disk_io_counters().write_time >> 15
    particoes_disco = ps.disk_partitions()

    print("Uso do Disco: " + str(round(disco_usado)) +
          "GB/" + str(disco_total) + "GB" + " ("+str(disco_percent)+"%)")
    print("Tempo de escrita: " + str(tempo_escrita)+"ms")
    print("Tempo de leitura " + str(tempo_leitura)+"ms")
    print('\n')
    print("Partições do disco: \n")

    # roda o sistema e apresenta todas as partições
    for i in range(1, len(particoes_disco) -1 ):
        if (i % 2 == 0):  # i%2 pq o psutil estava repetindo partições, a cada 2 muda.
            print(ps.disk_partitions()[i][0])
    print('\n')

    f.write("""
       Capacidade do disco : {} GB
       Tempo de leitura : {} ms 
       Tempo de escrita : {} ms 
       Porcentagem de uso do disco: {}%/100% 
    
    ====================================================
    """.format(disco_total, tempo_leitura, tempo_escrita, disco_percent))
    run_sql_command("INSERT INTO tbDisco (capacidadeDisco,espacoLivreDisco,espacoUsadoDisco,porcentagemUsoDisco , dataDisco, fkServidor) VALUES \
        ("+str(disco_total)+", "+str(disco_livre)+","+str(disco_usado)+","+str(disco_percent)+",'"+str(today_time)+"', 1) ")

def network():
    print("\033[1;36mInternet \n ================= \033[0m\n")
    bytes_recebidos = ps.net_io_counters()[0]
    bytes_enviados = ps.net_io_counters()[1]
    nome_internet = socket.gethostname()
    ip_internet = socket.gethostbyname(socket.gethostname())
    print("ip: " + str(ip_internet))
    print("Hostname: " + str(nome_internet))
    print("Velocidade de Download: " +
          str(round(bytes_enviados/10000000, 2)) + "mb")

    print("Velocidade de Upload: " +
          str(round(bytes_recebidos/1000000, 2)) + "mb")


def processo_total():
    while True : 
        connection.commit()
        get_system_type()
        get_memory_ram()
        get_cpu()
        get_disk()
        network()
        time.sleep(1)



processo_total()
