CREATE DATABASE dbProjetoBolsa
USE dbProjetoBolsa


CREATE TABLE tbCliente ( 
	idCliente INT PRIMARY KEY AUTO_INCREMENT, 
	nomeCliente VARCHAR(80) NOT NULL ,
	emailCliente VARCHAR(80) NOT NULL, 
	senhaCliente VARCHAR(40) NOT NULL, 
	cnpjCliente CHAR(14) NOT NULL ,
	dataCadastro DATETIME NOT NULL , 
	fkTelefone INT 
) ;

CREATE TABLE tbTelefone ( 
	idTelefone INT PRIMARY KEY AUTO_INCREMENT, 
	paisTelefone VARCHAR(3) NOT NULL, 
	regiaoTelefone CHAR(2) NOT NULL, 
	numeroTelefone VARCHAR(12) NOT NULL
	fkCliente INT, 
	FOREIGN KEY (fkCliente) REFERENCES tbCliente(idCliente)
) ;  
	

CREATE TABLE tbServidor (
	idServidor INT PRIMARY KEY AUTO_INCREMENT, 
	sistemaServidor VARCHAR(40) NOT NULL, 
	dataCadastro DATETIME NOT NULL, 
	fkCliente INT , 
	FOREIGN KEY (fkCliente) REFERENCES tbCliente(idCliente)
); 


CREATE TABLE tbDisco( 
	idDisco INT PRIMARY KEY,   
	nomeDisco VARCHAR(60) NOT NULL, 
	capacidadeDisco INT NOT NULL  ,   
	velocidadeRotacaoDisco INT NOT NULL , 
	tecnologiaDisco VARCHAR(3) ,
	fkServidor INT , 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor)

); 

CREATE TABLE tbDadosDisco( 
	idDadosDisco INT PRIMARY KEY AUTO_INCREMENT, 
	espacoLivreDisco INT NOT NULL ,
	espacoUsadoDisco INT NOT NULL , 
	usoAtualDisco INT NOT NULL,  --uso de 0 a 100 em porcecntagem
	dataDisco DATETIME NOT NULL,
	fkDisco , 
	FOREIGN KEY (fkDisco) REFERENCES tbDisco(idDisco)
);

CREATE TABLE tbCpu(  --dados fixos
	idCpu PRIMARY KEY AUTO_INCREMENT, 
	tecnologiaCpu VARCHAR(5) NOT NULL , --nm da cpu  
	voltagemCpu INT NOT NULL , 
	modeloCpu VARCHAR(40) NOT NULL,
	fkServidor INT , 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor)
) ; 

CREATE TABLE tbDadosCpu( --dados soltos
	idDadosCpu INT PRIMARY KEY, 
	freqAtualCpu INT NOT NULL, 
	temperaturaAtualCpu INT NOT NULL, 
	dataCpu DATETIME NOT NULL  ,
	fkCpu INT , 
	FOREIGN KEY (idCpu) REFERENCES tbCpu(idCpu)
);



CREATE TABLE tbCore(  --
	idCore INT PRIMARY KEY AUTO_INCREMENT, 
	velocidadeCore INT NOT NULL, 
	busSpeedCore INT NOT NULL , 
	fkCpu INT , 
	FOREIGN KEY (fkCpu) REFERENCES tbCpu(idCpu)
) ; 

CREATE TABLE tbDadosCores(  --volateis
	idDadosCore INT PRIMARY KEY AUTO_INCREMENT,
	usoCore INT NOT NULL, 
	dataCore DATETIME NOT NULL,
	fkCore INT , 
	FOREIGN KEY (fkCore) REFERENCES tbCore(idCore)
); 

CREATE TABLE tbRam( 
	idRam INT PRIMARY KEY AUTO_INCREMENT, 
	modeloRam VARCHAR(40) NOT NULL ,
	capacidadeRam INT NOT NULL ,
	tecnologiaRam CHAR(4) NOT NULL,
	fabricanteRam VARCHAR(40) NOT NULL,
	fkServidor INT , 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor)

); 

CREATE TABLE tbDadosRam( 
	idDadosRam INT PRIMARY KEY AUTO_INCREMENT, 
	espacoLivreRam INT NOT NULL ,
	espacoUsadoRam INT NOT NULL , 
	usoAtualRam INT NOT NULL, 
	dataRam DATETIME NOT NULL ,
	fkRam INT ,  
	FOREIGN KEY (fkRam) REFERENCES tbRam(idRam)
	
); 



