CREATE DATABASE dbProjetoBolsa
USE dbProjetoBolsa


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
	nomeSetor INT NOT NULL, 
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
	idDisco INT PRIMARY KEY,   
	capacidadeDisco INT NOT NULL  ,    
	espacoLivreDisco DECIMAL(4,2) NOT NULL ,
	espacoUsadoDisco DECIMAL(4,2) NOT NULL , 
	usoAtualDisco INT NOT NULL, 
	dataDisco DATETIME NOT NULL,	
	fkServidor INT , 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor)

); 
CREATE TABLE tbCpu(  
	idCpu INT PRIMARY KEY AUTO_INCREMENT,
	qtdNucleos INT NOT NULL ,
	qtdThreads INT NOT NULL ,
	tecnologiaCpu VARCHAR(20) NOT NULL , -- 64 bits, 32, etc   
	modeloCpu VARCHAR(40) NOT NULL, -- i3, i9, etc
	fkServidor INT , 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor)
) ; 

CREATE TABLE tbDadosCpu( 
	idDadosCpu INT PRIMARY KEY  AUTO_INCREMENT, 
	freqAtualCpu INT NOT NULL, 
	temperaturaAtualCpu INT NOT NULL, 
	dataCpu DATETIME NOT NULL  ,
	fkCpu INT , 
	FOREIGN KEY (fkCpu) REFERENCES tbCpu(idCpu)
);


CREATE TABLE tbRam( 
	idRam INT PRIMARY KEY AUTO_INCREMENT, 
	capacidadeRam INT NOT NULL ,
	espacoLivreRam DECIMAL(4,2) NOT NULL ,
	espacoUsadoRam DECIMAL(4,2) NOT NULL , 
	usoAtualRam DECIMAL(4,2) NOT NULL, 
	dataRam DATETIME NOT NULL ,
	fkServidor INT , 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor)

); 

