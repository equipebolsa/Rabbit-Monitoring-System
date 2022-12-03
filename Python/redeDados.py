from psutil import net_io_counters
from time import sleep
from getmac import get_mac_address as gma
import pymssql
import mysql.connector


connection = mysql.connector.connect(host="localhost", user="aluno", password="sptech", database="bolsa")
cursor = connection.cursor()
connection2 = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
cursor2 = connection2.cursor(as_dict=True)

def salvar(resposta,fkRedePar):
    query = "INSERT INTO dadosRede (fkRede,packetsRecv,packetsSent,bytesSent,bytesRecv,horarioLeitura) VALUES (%s,%s, %s,%s, %s, NOW())"
    query2 = "INSERT INTO dadosRede (fkRede,packetsRecv,packetsSent,bytesSent,bytesRecv,horarioLeitura) VALUES (%s,%s, %s,%s, %s, CURRENT_TIMESTAMP)"
    params = (fkRedePar,net_usage(resposta)[0],net_usage(resposta)[1],net_usage(resposta)[2],net_usage(resposta)[3])
    cursor.execute(query, params)
    cursor2.execute(query2,params)
    connection.commit()
    connection2.commit()
    print("Executando")

def net_usage(inf):   #change the inf variable according to the interface
    net_stat = net_io_counters(pernic=True, nowrap=True)[inf]
    net_in_1 = net_stat.bytes_recv
    net_out_1 = net_stat.bytes_sent
    net_in_packets_1 =  net_stat.packets_recv
    net_out_packets_1 =  net_stat.packets_sent
    sleep(1)
    net_stat = net_io_counters(pernic=True, nowrap=True)[inf]
    net_in_2 = net_stat.bytes_recv
    net_out_2 = net_stat.bytes_sent
    net_in_packets_2 =  net_stat.packets_recv
    net_out_packets_2 =  net_stat.packets_sent

    net_in = (net_in_2 - net_in_1) / 1024
    net_out = (net_out_2 - net_out_1) / 1024
    net_in_packets = int(net_in_packets_2 - net_in_packets_1)
    net_out_packets = int(net_out_packets_2 - net_out_packets_1)

    print(f"DOWNLOAD: {net_in} KB/s, UPLOAD: {net_out} KB/s")
    print(f"PACKRECV: {net_in_packets}, PACKSENT: {net_out_packets}")
    #print(f"DOWNLOAD DELAY:\nIN: {net_in/1}, UPLOAD DELAY: {net_out/1}")
    valores = [net_in_packets,net_out_packets,net_out,net_in]
    return valores

query = ("SELECT idRede,tipoConexao FROM rede INNER JOIN servidor ON fkServidor = idServidor WHERE macAddress = %s")
a = cursor2.execute(query, gma())
b = cursor.execute(query, [gma(),])
solucaoA = cursor.fetchall()
solucao = str(solucaoA[0][0])
solucaoB = cursor2.fetchall()
solucao = str(solucaoB[0]['idRede'])
if(solucao==solucao):
    while(True):
        salvar(solucaoA[0][1],solucao)