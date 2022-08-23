CREATE DATABASE IF NOT EXISTS dbProjetoBolsa;
USE dbProjetoBolsa;


CREATE TABLE tbCliente ( 
	idCliente INT PRIMARY KEY AUTO_INCREMENT, 
	nomeCliente VARCHAR(80) NOT NULL ,
	emailCliente VARCHAR(80) NOT NULL, 
	senhaCliente VARCHAR(40) NOT NULL, 
	cnpjCliente CHAR(14) NOT NULL ,
	dataCadastro DATETIME NOT NULL , 
	fkTelefone INT  NOT NULL,  
	fkAdministrador INT NOT NULL , 
	FOREIGN KEY (fkAdministrador) REFERENCES tbCliente(idCliente)   	
) ;

CREATE TABLE tbTelefone (
	idTelefone INT PRIMARY KEY AUTO_INCREMENT, 
	paisTelefone VARCHAR(3) NOT NULL, 
	regiaoTelefone CHAR(2) NOT NULL, 
	numeroTelefone VARCHAR(12) NOT NULL,
	fkCliente INT, 
	FOREIGN KEY (fkCliente) REFERENCES tbCliente(idCliente)
) ;  
	

CREATE TABLE tbSetor ( 
	idSetor INT PRIMARY KEY AUTO_INCREMENT,
	nomeSetor VARCHAR(40) NOT NULL, 
	fkCliente INT , 
	FOREIGN KEY (fkCliente) REFERENCES tbCliente(idCliente) 
) ;



CREATE TABLE tbServidor (
	idServidor INT PRIMARY KEY AUTO_INCREMENT, 
	sistemaServidor VARCHAR(40) NOT NULL,
	dataCadastro DATETIME NOT NULL, 
	fkSetor INT , 
	FOREIGN KEY (fkSetor) REFERENCES tbSetor(idSetor)
); 


CREATE TABLE tbDisco( 
	idDisco INT PRIMARY KEY AUTO_INCREMENT,   
	capacidadeDisco INT NOT NULL  ,    
	espacoLivreDisco DOUBLE NOT NULL ,
	espacoUsadoDisco DOUBLE NOT NULL , 
	porcentagemUsoDisco INT NOT NULL, 
	dataDisco DATETIME NOT NULL,	
	fkServidor INT , 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor)

); 
CREATE TABLE tbCpu(  
	idCpu INT PRIMARY KEY AUTO_INCREMENT,
	qtdNucleos INT NOT NULL ,
	qtdThreads INT NOT NULL ,
	tecnologiaCpu VARCHAR(20) NOT NULL , -- 64 bits, 32, etc   
	modeloCpu VARCHAR(60) NOT NULL, -- i3, i9, etc
	fkServidor INT , 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor)
) ; 

CREATE TABLE tbDadosCpu( 
	idDadosCpu INT PRIMARY KEY  AUTO_INCREMENT, 
	freqAtualCpu DECIMAL(4,2) NOT NULL, 
	temperaturaAtualCpu DECIMAL(4,2) NOT NULL, 
	dataCpu DATETIME NOT NULL  ,
	fkCpu INT , 
	FOREIGN KEY (fkCpu) REFERENCES tbCpu(idCpu)
);


CREATE TABLE tbRam( 
	idRam INT PRIMARY KEY AUTO_INCREMENT, 
	capacidadeRam INT NOT NULL ,
	espacoLivreRam DECIMAL(4,2) NOT NULL ,
	espacoUsadoRam DECIMAL(4,2) NOT NULL , 
	dataRam DATETIME NOT NULL ,
	fkServidor INT , 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor)

); 



 INSERT INTO tbCliente VALUES (1,"Rafael","rafael@gmail.com","rafael01","00000000000","2004-07-23",1,1); 

INSERT INTO tbTelefone VALUES (1,"BR",'55','11982072730',1);

INSERT INTO tbSetor VALUES (1,"Alpha",1);

INSERT INTO tbServidor VALUES (1 , "Linux","2004-12,23",1);