import pymysql
import socket
import time
import sys,os
import platform
import psutil as ps
from datetime import datetime
import wmi;

# define os dados para leitura do horário, que é pego pela função "date" do shell
today = datetime.now()
today_time = today.strftime("%Y-%m-%d ")




# define as propriedades da conexão do banco de dados
connection = pymysql.connect(host='localhost',user='aluno',password='sptech',database='bolsa')

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

    print("\033[1;36m Sistema Operacional  \n ================= \033[0m\n  ")
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

    
    run_sql_command("INSERT INTO tbLeitura(capacidadeRam, espacoLivreRam, espacoUsadoRam, dataColetaDadosRam, fkServidor, fkSetor) \
         VALUES ('"+str(total)+"','"+str(livre_ram)+"','"+str(uso_ram)+"','"+str(today_time)+"',1,1);")


def get_cpu():
    print("\033[1;36mCPU \n ================= \n \033[0m ")
    total = ps.cpu_freq().max
    uso_cpu = ps.cpu_freq().current
    percent = ps.cpu_percent(interval=1)
    print(str(total) + " hz")
    print(str(uso_cpu) + " hz")
    print(str(percent) +" %")

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
        get_disk()
        get_cpu()
        network()
        time.sleep(1)



processo_total()
