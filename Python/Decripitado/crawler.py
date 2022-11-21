import requests
import json

url = "http://192.168.56.1:8085/data.json"

r = requests.get(url)
jsonFile= r.text.encode("utf8")
data = json.loads(jsonFile)
for i in data["Children"][0]["Children"][0]["Children"]:
    print(i, "\n")
   

