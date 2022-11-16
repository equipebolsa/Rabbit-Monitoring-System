import requests
import word
import json
import psutil
import pymysql

#TODO: Fazer a condicional para que o chamado tiver com a SLA esgotada remandar o chamado 
#TODO: Utilizar os pacotes da Microsoft para salvar a imagem do wordcloud na nuvem e não no nosso local 

connection = pymysql.connect(host='localhost',user='aluno',password='sptech',database='bolsa')
cursor = connection.cursor()

def reportarAlerta():
    url = "https://api.pipefy.com/graphql"
    payload = {"query": "query{   phase(id:317148281){     cards{       edges{         node{           id  title         }       }     }   } }"}
    #payload = {"query": "mutation {createCard(input: {pipe_id: 302754703,title: \"New card\",fields_attributes:[{field_id: \"what_is_your_request\", field_value: \"Fernando diz que houve um erro na mémoria RAM\"}]}) {card {title}}}"}
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxODI2ODUsImVtYWlsIjoiZ3VzdGF2by5hbnRvbmlvQHNwdGVjaC5zY2hvb2wiLCJhcHBsaWNhdGlvbiI6MzAwMjA1ODA1fX0.dVBrMlDLfyqBUDLWB9okgTCEAwZ2GiiiphabRoZ0l99mOWkTaFvVB_U_-nqhqe2PDOc4bp0AtP0OXkaF1WvvwA"
    }

    response = requests.post(url, json=payload, headers=headers)

    return response.text

def enviarWorldCloud():
    lista = ""
    print("Enviando Alerta Para Service Desk")
    resposta = reportarAlerta()
    objeto = json.loads(resposta)
    cards = objeto['data']['phase']['cards']['edges']
    for card in cards:
        lista += (card['node']['title'])
        lista += " "
    word.plotarWordcloud(lista)
    
    # Mandar para o banco de dados e para o pipefy quando a memoria ram ultrapassar o limite

while(True):
    if(psutil.virtual_memory().percent>75):
        sql = "INSERT INTO alerta VALUES (null, {psutil.virtual_memory().percent}, 'Memória ram acima do limite!', 1)"
        cursor.execute(sql)
        reportarAlerta()
        break;
    
    # Mandar para o banco de dados e para o pipefy quando o processador ultrapassar o limite

while(True):
    if(psutil.cpu_percent()>75):
        sql = "INSERT INTO alerta VALUES (null, {psutil.cpu_percent()}, 'Processador acima do limite!', 1)"
        cursor.execute(sql)
        reportarAlerta()
        break;
    
#TODO: Ainda falta adicionar umas condicionais

while(True):
    if(psutil.virtual_memory().percent>10):
        #TODO: Fazer a comunicação com banco de dados para ver se o tempo passado foi de um dia
        enviarWorldCloud()
        break;
