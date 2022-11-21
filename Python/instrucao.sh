sudo docker build -t banco . - vamos construir a imagem
sudo docker run -d -p 3306:3306 -e "MYSQL_ROOT_PASSWORD=123" -e "MYSQL_DATABASE=Backoffice" banco

sudo docker exec -t id cat /etc/hosts - pegar ip da minha maquina

sudo docker build -t python . - cria imagem python

sudo docker run --name python id - executa imagem python