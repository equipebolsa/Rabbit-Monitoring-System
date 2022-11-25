from operator import ne
from psutil import net_if_stats, net_connections, net_io_counters, net_if_addrs
from time import sleep
import pymssql
import mysql.connector

#connection = mysql.connector.connect(host="localhost", user="aluno", password="sptech", database="bolsa")
#cursor = connection.cursor()
#connection2 = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
#cursor2 = connection2.cursor(as_dict=True)

print(net_if_addrs())
#print(net_if_stats())
#print(net_io_counters())
#print(net_connections)

def getBytesSent():
    base = (net_io_counters().bytes_sent)
    sleep(1)
    agora = (((net_io_counters().bytes_sent) - base)/1024,2)
    print(agora)    

def getBytesRecv():
    base = (net_io_counters().bytes_recv)
    sleep(1)
    agora = (((net_io_counters().bytes_recv) - base)/1024,2)
    print(agora)  

def getPacketsSent():
    base = (net_io_counters().packets_sent)
    sleep(1)
    agora = (((net_io_counters().packets_sent) - base)/1024,2)
    print(agora)  


def getPacketsRecv():
    base = (net_io_counters().packets_recv)
    sleep(1)
    agora = (((net_io_counters().packets_recv) - base)/1024,2)
    print(agora)  
