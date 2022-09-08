CREATE DATABASE IF NOT EXISTS dbProjetoRms;
USE dbProjetoRms;
DROP DATABASE dbProjetoRms;

CREATE TABLE tbEmpresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeEmpresa VARCHAR(45) NOT NULL,
	cnpjEmpresa CHAR(14) NOT NULL
);

CREATE TABLE tbUsuario ( 
	idUsuario INT PRIMARY KEY AUTO_INCREMENT, 
	nomeUsuario VARCHAR(80) NOT NULL,
	emailUsuario VARCHAR(80) NOT NULL, 
	senhaUsuario VARCHAR(40) NOT NULL, 
	dataCadastroUsuario DATETIME NOT NULL,
	fkAdministrador INT,
    fkEmpresa int NOT NULL,
	FOREIGN KEY (fkAdministrador) REFERENCES tbUsuario(idUsuario),
	FOREIGN KEY (fkEmpresa) REFERENCES tbEmpresa(idEmpresa)
) ;

CREATE TABLE tbTelefone (
	idTelefone INT NOT NULL AUTO_INCREMENT, 
	paisTelefone VARCHAR(3) NOT NULL, 
	regiaoTelefone CHAR(2) NOT NULL, 
	numeroTelefone VARCHAR(10) NOT NULL,
	fkEmpresa INT NOT NULL, 
	FOREIGN KEY (fkEmpresa) REFERENCES tbEmpresa(idEmpresa),
	PRIMARY KEY (idTelefone, fkEmpresa)
) ;

CREATE TABLE tbEndereco (
	idEndereco INT NOT NULL AUTO_INCREMENT,
	cepEndereco CHAR(9) NOT NULL,
	ruaEndereco VARCHAR(75) NOT NULL,
	numeroEndereco INT NOT NULL,
	complementoEndereco VARCHAR(255) NOT NULL,
	bairroEndereco VARCHAR(75) NOT NULL,
	cidadeEndereco VARCHAR(75) NOT NULL,
	estadoEndereco VARCHAR(45) NOT NULL,
	fkEmpresa INT NOT NULL,
	FOREIGN KEY (fkEmpresa) REFERENCES tbEmpresa(idEmpresa),
	PRIMARY KEY (idEndereco, fkEmpresa)
);

CREATE TABLE tbSetor ( 
	idSetor INT NOT NULL AUTO_INCREMENT,
	nomeSetor VARCHAR(40) NOT NULL, 
    descricao VARCHAR(180),
	fkEmpresa INT NOT NULL, 
	FOREIGN KEY (fkEmpresa) REFERENCES tbEmpresa(idEmpresa),
    PRIMARY KEY (idSetor, fkEmpresa)
);

CREATE TABLE tbServidor (
	idServidor INT NOT NULL AUTO_INCREMENT, 
	sistemaoOperacionalServidor VARCHAR(40) NOT NULL,
	dataCadastro DATETIME NOT NULL,
    serialServidor Char(10),
	fkSetor INT NOT NULL, 
	FOREIGN KEY (fkSetor) REFERENCES tbSetor(idSetor),
    PRIMARY KEY (idServidor, fkSetor)
); 


CREATE TABLE tbDisco( 
	idDisco INT AUTO_INCREMENT,
	dataDisco DATETIME NOT NULL,	
	fkServidor INT, 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor),
	fkSetor INT,
	FOREIGN KEY (fkSetor) REFERENCES tbSetor(idSetor),
    PRIMARY KEY (idDisco, fkServidor, fkSetor)
); 

CREATE TABLE tbParticao(
	idParticao INT NOT NULL AUTO_INCREMENT,
    capacidadeTotalParticao DECIMAL(7,2) NOT NULL,    
	espacoLivreParticao DECIMAL(7,2) NOT NULL,
	espacoUsadoParticao DECIMAL(7,2) NOT NULL, 
    dataColetaDadosParticao DATETIME,
    fkDisco INT NOT NULL,
    fkServidor INT NOT NULL,
    FOREIGN KEY (fkDisco) REFERENCES tbDisco(idDisco),
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor),
    PRIMARY KEY (idParticao, fkDisco, fkServidor)
);

CREATE TABLE tbCpu(  
	idCpu INT NOT NULL AUTO_INCREMENT,
	qtdNucleos INT NOT NULL,
	qtdThreads INT NOT NULL,
	tecnologiaCpu VARCHAR(20) NOT NULL , -- 64 bits, 32, etc   
	modeloCpu VARCHAR(60) NOT NULL, -- i3, i9, etc
	fkServidor INT NOT NULL, 
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor),
	fkSetor INT NOT NULL,
	FOREIGN KEY (fkSetor) REFERENCES tbSetor(idSetor),
	PRIMARY KEY (idCpu, fkServidor, fkSetor)
) ; 

CREATE TABLE tbDadosCpu( 
	idDadosCpu INT PRIMARY KEY AUTO_INCREMENT, 
	freqAtualCpu DECIMAL(4,2) NOT NULL, 
	temperaturaAtualCpu DECIMAL(4,2), 
	dataColetaDadosCpu DATETIME NOT NULL,
	fkCpu INT NOT NULL, 
	FOREIGN KEY (fkCpu) REFERENCES tbCpu(idCpu)
);

CREATE TABLE tbRam( 
	idRam INT NOT NULL AUTO_INCREMENT, 
	capacidadeRam INT NOT NULL ,
	espacoLivreRam DECIMAL(6,2) NOT NULL ,
	espacoUsadoRam DECIMAL(6,2) NOT NULL , 
	dataColetaDadosRam DATETIME NOT NULL ,
	fkServidor INT NOT NULL,
    fkSetor INT NOT NULL,  
	FOREIGN KEY (fkServidor) REFERENCES tbServidor(idServidor),
	FOREIGN KEY (fkSetor) REFERENCES tbSetor(idSetor),
    PRIMARY KEY (idRam, fkServidor, fkSetor)
); 



INSERT INTO tbEmpresa(nomeEmpresa, cnpjEmpresa) VALUES ("ProjetoBolsa", "22458573000199");
INSERT INTO tbUsuario(nomeUsuario, emailUsuario, senhaUsuario, dataCadastroUsuario, fkAdministrador, fkEmpresa) VALUES ("João Victor", "joao@gmail.com", "joao1", 
			"2022-09-08", null, 1);

INSERT INTO tbTelefone(paisTelefone, regiaoTelefone, numeroTelefone, fkEmpresa) VALUES ("BR",'55','966643600',1);
# Olhar o telefone se é 11966643600 ou 966643600
INSERT INTO tbSetor(nomeSetor, descricao, fkEmpresa) VALUES ("Alpha", null, 1);

INSERT INTO tbServidor VALUES (1 , "Linux","2004-12,23",1);

INSERT INTO tbCpu (qtdNucleos,qtdThreads, tecnologiaCpu, modeloCpu, fkServidor) VALUES (2,2,'64x_86x', 'Intel i3 5005U 2.0GhZ',1 )
