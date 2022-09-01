import pymysql
import socket
import time
import os # shell zsh 5.4 
import platform
import psutil as ps
from datetime import datetime
today = datetime.now()

# cria arquivo logs.txt
f = open("logs.txt", "w")
f.write("=====")
f.write("LOGS DE CAPTURA DE DADOS")
f.write("===== \n\n")
#define o modo que os horarios serao utilizados 
dataAtual = today.strftime("%Y-%m-%d ")

# define as propriedades de acesso do banco de dados

connection = pymysql.connect(host='localhost',
                             user='root',
                             password='akemih32',
                             database='dbProjetoBolsa')

# cursor, que nos auxilia a adentrar o banco de dados e inserir no mesmo
cursor = connection.cursor()


# dicionario 1 com os dados fixos do sistema operacional
dados_os = {
    'SISTEMA_NOME': platform.freedesktop_os_release()["NAME"],
    'SISTEMA_TIPO': platform.system(),
    'SISTEMA_URL': platform.freedesktop_os_release()["HOME_URL"]

}
# dicionario 2, com os dados fixos da CPU
dados_cpu = {
    'CPU_NOME': platform.processor(),
    'CPU_FREQ_MINIMA':  ps.cpu_freq().min,
    'CPU_FREQ_MAX':  ps.cpu_freq().max,
}

# funcao que colhe os dados do sistema operacional e apresenta os mesmos


def sistemaOperacional():
    f.write("""
        Horário atual: {0} 
        Nome do S.O : {1} 
        Tipo do sistema : {2}  

""".format(os.popen("date").read().split()[4], dados_os['SISTEMA_NOME'], dados_os['SISTEMA_TIPO']))
    print("\033[1;36m Sistema Operacional  \n ================= \033[0m\n  ")
    print(os.popen("date").read().split()[4])  # horario do sistema atual (visto no shell)
    print("Nome do sistema: " + str(dados_os["SISTEMA_NOME"]))
    print(dados_os["SISTEMA_URL"])
    print("Tipo do sistema: " + str(dados_os["SISTEMA_TIPO"]))
    print('\n')


def memoriaRam():
    # calculo de conversão de bytes para gb, 10^9
    total = round(ps.virtual_memory().total / pow(10, 9), 0)
    uso_ram = round(ps.virtual_memory().used / pow(10, 9), 2)
    livre_ram = round(ps.virtual_memory().free / pow(10, 9), 2)
    percent = round((uso_ram*100/total))

    print("\033[1;36m MEMÓRIA RAM \n ================= \033[0m\n  ")
    print("Uso atual da Ram: "+str(percent) + "%/100%")
    print("Uso em memória da Ram: " + str(uso_ram)+"GB/" + str(total)+"GB")
    print('\n')

    f.write("""
        Total Ram : {0}GB
        Uso atual : {1} GB
        Porcentagem : {2}% / 100% 
        Data: {3} 

    """.format(total, uso_ram, percent, dataAtual))
    sql = "INSERT INTO tbRam(capacidadeRam, espacoLivreRam, espacoUsadoRam, dataRam, fkServidor) \
         VALUES ('"+str(total)+"','"+str(livre_ram)+"','"+str(uso_ram)+"','"+str(dataAtual + os.popen("date").read().split()[4])+"',1);"

    cursor.execute(sql)

# funcao que insere dados na cpu e apresenta os mesmos


def cpu():
    
    print("\033[1;36mCPU \n ================= \n \033[0m ")
    # pega os dados da cpu (nome, etc) pelo comando shell lscpu
    cpu_dados = os.popen("lscpu").read()
    cpu_dados = cpu_dados.split("\n")
    temp = ps.sensors_temperatures()['coretemp'][0].current
    freqAtualCpu = round(ps.cpu_freq().current *
                         pow(2, 13) / ps.cpu_freq().max, 2)

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
            nuc = cpu_dados[i][1]
        elif (cpu_dados[i][0] == "Nome do modelo" or cpu_dados[i][0] == "Model name"):
            nom = cpu_dados[i][1]
        elif (cpu_dados[i][0] == "Arquitetura" or cpu_dados[i][0] == "Architecture"):
            arq = cpu_dados[i][1]
        elif (cpu_dados[i][0] == "Thread(s) per núcleo" or cpu_dados[i][0] == "Thread(s) per core"):
            thr = cpu_dados[i][1]
 
    # guarda as variáveis anteriores em novas, para melhor trabalhar o nome
    cpu_modelo_nome = nom
    cpu_tecnologia = arq
    cpu_qtd_nucleos = nuc
    cpu_qtd_threads = thr

    # formatacao
    cpu_qtd_nucleos = str(cpu_qtd_nucleos).strip()
    cpu_qtd_threads = str(cpu_qtd_threads).strip()
    cpu_tecnologia = str(cpu_tecnologia).strip()
    cpu_modelo_nome = str(cpu_modelo_nome).strip()

    select_nome_cpu = 'SELECT * from tbCpu WHERE modeloCpu="{}"'.format(cpu_modelo_nome)
    
    cursor_select_cpu_count = cursor.execute(select_nome_cpu)
    
    print("Nome da CPU: " + cpu_modelo_nome)
    print("Arquitetura possível da CPU: " + cpu_tecnologia)
    print("Quantidade de núcleos: " + cpu_qtd_nucleos)
    print("Quantidade de Thread: " + cpu_qtd_threads)
    print("Frequência mínima da CPU: " +
          str(dados_cpu['CPU_FREQ_MINIMA']) + "GHz")
    print("Frequência máxima da CPU: " +
          str(dados_cpu['CPU_FREQ_MAX']) + "GHz")
    print("Frequência atual da  CPU: " + str(freqAtualCpu) + "%/100% ")
    print("Arquitetura do processador: " + platform.machine())
    print('\n')

    f.write("""
        Freq. Atual CPU : {0}% / 100% 
        Freq. Minima CPU : {1} GhZ
        Freq. Maxima CPU : {2} GhZ
        Temperatura da CPU : {3}°C

    """.format(freqAtualCpu, dados_cpu['CPU_FREQ_MINIMA'], dados_cpu['CPU_FREQ_MAX'], temp))
    # insere no sql
    sqlFixo = "INSERT INTO tbCpu (qtdNucleos,qtdThreads, tecnologiaCpu, modeloCpu, fkServidor) VALUES \
            ("+cpu_qtd_nucleos+","+cpu_qtd_threads+",'"+cpu_tecnologia+"','"+cpu_modelo_nome+"',1) "
    if(cursor_select_cpu_count < 1 ) :  
         cursor.execute(sqlFixo)

    sqlFlex = "INSERT INTO tbDadosCpu (freqAtualCpu, temperaturaAtualCpu, dataCpu, fkCpu) VALUES \
         ("+str(freqAtualCpu)+","+str(temp)+",'"+str(dataAtual + os.popen("date").read().split()[4])+"',1) "
    

    cursor.execute(sqlFlex)


def disco():
    print("\033[1;36mDisco \n ================= \n \033[0m ")

    # Colhe os dados e converte para GB, >> 30 é a conversão, descobri isso depois.
    # manipulacao de bits = >>
    # para virar gb
    disco_total = round(ps.disk_usage('/').total >> 30)
    disco_livre = round(ps.disk_usage('/').free >> 30)
    disco_usado = disco_total-disco_livre
    disco_percent =ps.disk_usage('/').percent
    tempo_leitura = ps.disk_io_counters().read_time >> 15
    tempo_escrita = ps.disk_io_counters().write_time >> 15
    particoes_disco = ps.disk_partitions()

    print("Uso do Disco: " + str(round(disco_total-disco_livre)) +
          "GB/" + str(disco_total) + "GB" + " ("+str(disco_percent)+"%)")
    print("Tempo de escrita: " + str(tempo_escrita)+"ms")
    print("Tempo de leitura " + str(tempo_leitura)+"ms")
    print('\n')
    print("Partições do disco: \n")

    # roda o sistema e apresenta todas as partições
    for i in range(1, len(ps.disk_partitions())+1):
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

    sql = "INSERT INTO tbDisco (capacidadeDisco,espacoLivreDisco,espacoUsadoDisco,porcentagemUsoDisco , dataDisco, fkServidor) VALUES \
        ("+str(disco_total)+", "+str(disco_livre)+","+str(disco_usado)+","+str(disco_percent)+",'"+str(dataAtual + os.popen("date").read().split()[4])+"', 1) "

    cursor.execute(sql)


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


def processoTotal():
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
