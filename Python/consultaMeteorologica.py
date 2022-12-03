import requests
import json
import pymssql
from time import sleep

#Conexão com o banco
connection = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
cursor = connection.cursor()

#Requisição teste
token = "46bc970a78b6076254b762689ed71788"
url = "http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token="+str(token)
req = requests.request("GET", url)
resp = json.loads(req.text)
data = resp["data"]
temp = data["temperature"]
print(temp)

#Requisições enviadas para o banco
while(True):
    req = requests.request("GET", url)
    resp = json.loads(req.text)
    data = resp["data"]
    temp = int(data["temperature"])
    #SP
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('SP',"+str(temp)+",CURRENT_TIMESTAMP);")
    #RJ
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('RJ',"+str(temp+4)+",CURRENT_TIMESTAMP);")
    #MG
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('MG',"+str(temp+3)+",CURRENT_TIMESTAMP);")
    #ES
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('ES',"+str(temp+1)+",CURRENT_TIMESTAMP);")
    #DF
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('DF',"+str(temp+2)+",CURRENT_TIMESTAMP);")
    #GO
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('GO',"+str(temp+2)+",CURRENT_TIMESTAMP);")
    #MT
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('MT',"+str(temp+9)+",CURRENT_TIMESTAMP);")
    #MS
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('MS',"+str(temp+8)+",CURRENT_TIMESTAMP);")
    #SC
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('SC',"+str(temp-2)+",CURRENT_TIMESTAMP);")
    #PR
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('PR',"+str(temp-3)+",CURRENT_TIMESTAMP);")
    #RS
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('RS',"+str(temp-5)+",CURRENT_TIMESTAMP);")
    #RN
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('RN',"+str(temp+8)+",CURRENT_TIMESTAMP);")
    #CE
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('CE',"+str(temp+4)+",CURRENT_TIMESTAMP);")
    #BA
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('BA',"+str(temp+4)+",CURRENT_TIMESTAMP);")
    #MA
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('MA',"+str(temp+9)+",CURRENT_TIMESTAMP);")
    #SE
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('SE',"+str(temp+6)+",CURRENT_TIMESTAMP);")
    #PA
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('PA',"+str(temp+5)+",CURRENT_TIMESTAMP);")
    #PB
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('PB',"+str(temp+5)+",CURRENT_TIMESTAMP);")
    #PE
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('PE',"+str(temp+5)+",CURRENT_TIMESTAMP);")
    #PI
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('PI',"+str(temp+6)+",CURRENT_TIMESTAMP);")
    #RO
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('RO',"+str(temp+7)+",CURRENT_TIMESTAMP);")
    #RR
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('RR',"+str(temp+4)+",CURRENT_TIMESTAMP);")
    #AC
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('AC',"+str(temp+9)+",CURRENT_TIMESTAMP);")
    #AL
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('AL',"+str(temp+5)+",CURRENT_TIMESTAMP);")
    #AM
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('AM',"+str(temp+5)+",CURRENT_TIMESTAMP);")
    #TO
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('TO',"+str(temp+4)+",CURRENT_TIMESTAMP);")
    #AP
    cursor.execute("insert into clima(estado, temperatura, horaClima) values('AP',"+str(temp+6)+",CURRENT_TIMESTAMP);")
    connection.commit()

    #Sleep de 15 minutos
    sleep(900)
    