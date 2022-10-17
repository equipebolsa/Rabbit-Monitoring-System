import requests
import psutil
def reportarAlerta():
    url = "https://api.pipefy.com/graphql"

    payload = {"query": "mutation {createCard(input: {pipe_id: 302754703,title: \"New card\",fields_attributes:[{field_id: \"what_is_your_request\", field_value: \"Fernando diz que houve um erro na mémoria RAM\"}]}) {card {title}}}"}
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxODI2ODUsImVtYWlsIjoiZ3VzdGF2by5hbnRvbmlvQHNwdGVjaC5zY2hvb2wiLCJhcHBsaWNhdGlvbiI6MzAwMjA1ODA1fX0.dVBrMlDLfyqBUDLWB9okgTCEAwZ2GiiiphabRoZ0l99mOWkTaFvVB_U_-nqhqe2PDOc4bp0AtP0OXkaF1WvvwA"
    }

    response = requests.post(url, json=payload, headers=headers)

    print(response.text)

while(True):
    if(psutil.virtual_memory().percent>85):
        print("Enviando Alerta Para Service Desk")
        reportarAlerta()
        break;