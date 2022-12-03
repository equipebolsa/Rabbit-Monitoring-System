import requests

token = '46bc970a78b6076254b762689ed71788'
url = "http://apiadvisor.climatempo.com.br/api-manager/user-token/"+str(token)+"/locales"
headers = {"Content-Type":"application/x-www-form-urlencoded"}
payload = "localeId[]=3477"
req = requests.request("PUT", url, headers=headers, data=payload)
print(req)