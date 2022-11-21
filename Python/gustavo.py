from operator import ne
from psutil import net_if_stats, net_connections, net_io_counters, net_if_addrs
from time import sleep
import pymssql
import mysql.connector

connection = mysql.connector.connect(host="localhost", user="aluno", password="sptech", database="bolsa")
cursor = connection.cursor()

connection2 = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
cursor2 = connection2.cursor(as_dict=True)

#print(net_if_addrs())
#print(net_if_stats())
#print(net_io_counters())
#print(net_connections)

def inserir():
    query = "INSERT INTO parametro (fkServidor,fkComponenteFisico,fkMetrica) VALUES (%s,%s, %s)"
    params = (fkServidor, fkComponente, fkMetrica)
    cursor.execute(query, params)
    connection.commit()
while(True):
    base = (net_io_counters().bytes_sent)
    sleep(1)
    agora = (((net_io_counters().bytes_sent) - base)/1024,2)
    inserir(sent,recv,packets_sent,packets_recv)
    print(agora)    