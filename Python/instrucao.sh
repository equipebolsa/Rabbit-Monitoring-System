sudo docker build -t banco . - vamos construir a imagem
sudo docker run -d -p 3306:3306 -e "MYSQL_ROOT_PASSWORD=123" -e "MYSQL_DATABASE=bolsa" banco

sudo docker build -t python . - cria imagem python
sudo docker run -t -i --name python id - executa imagem python


sudo docker exec -it id container bash - entra no bash
mysql -u root -p - entra no bash do mysql
sudo docker exec -t id cat /etc/hosts - pegar ip do container