from re import A
from time import sleep
import requests
import word
import json

#TODO: Subir a wordcloud com horario e data no pipefy, mas esperar três (que é a nossa SLA ) para subir uma nova requisão, assim no retorno nos tiramos o número e deixamos apenas a palavra necessaria

URL = "https://api.pipefy.com/graphql"
headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxODI2ODUsImVtYWlsIjoiZ3VzdGF2by5hbnRvbmlvQHNwdGVjaC5zY2hvb2wiLCJhcHBsaWNhdGlvbiI6MzAwMjA1ODA1fX0.dVBrMlDLfyqBUDLWB9okgTCEAwZ2GiiiphabRoZ0l99mOWkTaFvVB_U_-nqhqe2PDOc4bp0AtP0OXkaF1WvvwA"
    }
def reportarAlerta(titulo):
    payload = {"query": "mutation {createCard(input: {pipe_id: 302754703,title: \"New card\",fields_attributes:[{field_id: \"what_is_your_request\", field_value: \""+titulo+"\"}]}) {card {title}}}"}
    response = requests.post(URL, json=payload, headers=headers)
    return response.text
def retornoAlerta():
    payload = {"query": "query{   phase(id:317148281){     cards{       edges{         node{           id  title         }       }     }   } }"}
    response = requests.post(URL, json=payload, headers=headers)
    return response.text

def enviarWorldCloud(titulo):
    lista = ""
    resposta = reportarAlerta(titulo)
    print("Enviando Alerta Para Service Desk")
    resposta = retornoAlerta()
    objeto = json.loads(resposta)
    cards = objeto['data']['phase']['cards']['edges']
    for card in cards:
        lista += (card['node']['title'])
        lista += " "
    word.plotarWordcloud(lista)
    
