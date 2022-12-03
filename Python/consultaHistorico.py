import requests
import json
import pymssql
from time import sleep
import datetime

#Conexão com o banco
connection = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
cursor = connection.cursor()

#Requisição teste

token = "46bc970a78b6076254b762689ed71788"
url = "http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/hours/72?token="+(token)
req = requests.request("GET", url)
resp = json.loads(req.text)
data = resp["data"]
dia1 = data[0]
tempDia1 = dia1["temperature"]
histDia1 = float(tempDia1["temperature"])
dia2 = data[1]
tempDia2 = dia2["temperature"]
histDia2 = float(tempDia2["temperature"])
dia3 = data[2]
tempDia3 = dia3["temperature"]
histDia3 = float(tempDia3["temperature"])
print(histDia1)
print(histDia2)
print(histDia3)

#Requisições enviadas para o banco
#SP
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('SP',{histDia1},{histDia2},{histDia3});")
#RJ
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('RJ',{histDia1+4},{histDia2+4},{histDia3+4});")
#MG
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('RJ',{histDia1+3},{histDia2+3},{histDia3+3});")
#ES
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('ES',{histDia1+1},{histDia2+1},{histDia3+1});")
#DF
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('DF',{histDia1+2},{histDia2+2},{histDia3+2});")
#GO
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('GO',{histDia1+2},{histDia2+2},{histDia3+2});")
#MT
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('MT',{histDia1+9},{histDia2+9},{histDia3+9});")
#MS
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('MS',{histDia1+8},{histDia2+8},{histDia3+8});")
#SC
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('SC',{histDia1-2},{histDia2-2},{histDia3-2});")
#PR
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('PR',{histDia1-3},{histDia2-3},{histDia3-3});")
#RS
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('RS',{histDia1-6},{histDia2-6},{histDia3-6});")
#RN
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('RN',{histDia1+8},{histDia2+8},{histDia3+8});")
#CE
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('CE',{histDia1+4},{histDia2+4},{histDia3+4});")
#BA
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('BA',{histDia1+4},{histDia2+4},{histDia3+4});")
#MA
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('MA',{histDia1+9},{histDia2+9},{histDia3+9});")
#SE
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('SE',{histDia1+6},{histDia2+6},{histDia3+6});")
#PA
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('PA',{histDia1+5},{histDia2+5},{histDia3+5});")
#PB
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('PB',{histDia1+5},{histDia2+5},{histDia3+5});")
#PE
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('PE',{histDia1+5},{histDia2+5},{histDia3+5});")
#PI
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('PI',{histDia1+6},{histDia2+6},{histDia3+6});")
#RO
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('RO',{histDia1+7},{histDia2+7},{histDia3+7});")
#RR
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('RR',{histDia1+4},{histDia2+4},{histDia3+4});")
#AC
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('AC',{histDia1+9},{histDia2+9},{histDia3+9});")
#AL
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('AL',{histDia1+5},{histDia2+5},{histDia3+5});")
#AM
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('AM',{histDia1+5},{histDia2+5},{histDia3+5});")
#TO
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('TO',{histDia1+4},{histDia2+4},{histDia3+4});")
#AP
cursor.execute(f"insert into historicoClima(estado, dia1, dia2, dia3) values('AP',{histDia1+6},{histDia2+6},{histDia3+6});")
connection.commit()


