CREATE DATABASE bolsa;
-- DROP DATABASE bolsa;
USE bolsa;

CREATE TABLE empresa(
  idEmpresa INT  PRIMARY KEY AUTO_INCREMENT,
  nomeEmpresa VARCHAR(45) NOT NULL,
  cnpjEmpresa CHAR(18) UNIQUE NOT NULL,
  telefoneEmpresa VARCHAR(20)
);

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nomeUsuario VARCHAR(45) NOT NULL,
  emailUsuario VARCHAR(45) NOT NULL,
  senhaUsuario CHAR(128) NOT NULL,
  tipoUsuario VARCHAR(13) NOT NULL,
  CONSTRAINT CK_usuario_tipoUsuario CHECK(tipoUsuario IN ('Gestor', 'Técnico')),
  CONSTRAINT UK_usuario_emailUsuario UNIQUE(emailUsuario),
  fkEmpresa INT NOT NULL,
  CONSTRAINT FK_usuario_fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),  
  fkGestor INT,
  CONSTRAINT FK_usuario_fkGestor FOREIGN KEY (fkGestor) REFERENCES usuario (idUsuario)
) AUTO_INCREMENT = 10;

CREATE TABLE setor (
  idSetor INT PRIMARY KEY AUTO_INCREMENT,
  fkEmpresa INT NOT NULL,
  CONSTRAINT FK_setor_fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
  nomeSetor VARCHAR(45) NOT NULL,
  descricaoSetor VARCHAR(255) NULL  
);

CREATE TABLE servidor (
  idServidor INT PRIMARY KEY AUTO_INCREMENT,
  fkSetor INT NOT NULL,
  CONSTRAINT FK_servidor_fkSetor FOREIGN KEY (fkSetor) REFERENCES setor (idSetor),
  sistemaOperacional VARCHAR(45) NOT NULL,
  macAddress VARCHAR(45) NOT NULL,
  serialNumber VARCHAR(45) NOT NULL
);


CREATE TABLE componenteFisico  (
	idComponenteFisico  INT PRIMARY KEY AUTO_INCREMENT,
    fkServidor INT NOT NULL,
    CONSTRAINT FK_componenteFisico_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    tipoComponente VARCHAR(45) NOT NULL
);

CREATE TABLE metrica (
	idMetrica  INT PRIMARY KEY AUTO_INCREMENT,
	nomeMetrica VARCHAR(45) NOT NULL,
	comandoPython VARCHAR(255),
    unidadeMedida VARCHAR(45) NOT NULL,
	tratamentoPython VARCHAR(255),
	isTupla CHAR(1) NOT NULL,
	CONSTRAINT CK_metrica_isTupla CHECK(isTupla IN ('1', '0'))
);

CREATE TABLE leitura (
  idLeitura INT PRIMARY KEY AUTO_INCREMENT,
  horarioLeitura DATETIME NOT NULL,
  valorLeitura VARCHAR(255) NOT NULL,
  fkComponenteFisico INT NOT NULL,
  CONSTRAINT FK_leitura_fkComponenteFisico FOREIGN KEY (fkComponenteFisico) REFERENCES componenteFisico (idComponenteFisico),
  fkMetrica INT NOT NULL,
  CONSTRAINT FK_leitura_fkMetrica FOREIGN KEY (fkMetrica) REFERENCES metrica (idMetrica)
);

CREATE TABLE alerta (
  idAlerta INT PRIMARY KEY AUTO_INCREMENT,
  valorLeitura VARCHAR(255) NOT NULL,
  tipoLeitura VARCHAR(45),
  fkLeitura INT NOT NULL,
  CONSTRAINT FK_alerta_fkAlerta FOREIGN KEY (fkLeitura) REFERENCES leitura (idLeitura)
 );

 CREATE TABLE parametro(
   fkComponenteFisico INT NOT NULL,
  CONSTRAINT FK_parametro_fkComponenteFisico FOREIGN KEY (fkComponenteFisico) REFERENCES componenteFisico (idComponenteFisico),
  fkMetrica INT NOT NULL,
  CONSTRAINT FK_parametro_fkMetrica FOREIGN KEY (fkMetrica) REFERENCES metrica (idMetrica),
  fkServidor INT NOT NULL,
  CONSTRAINT FK_parametro_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
  PRIMARY KEY(fkComponenteFisico, fkMetrica,fkServidor)
 );
 
CREATE VIEW leituraView AS SELECT 
    nomeEmpresa,
    fkEmpresa,
    nomeSetor,
    idServidor,
    fkComponenteFisico,
    tipoComponente,
	horarioLeitura,
    valorLeitura,
    unidadeMedida
FROM
    leitura
INNER JOIN componenteFisico ON idComponenteFisico =  fkComponenteFisico
INNER JOIN servidor ON idServidor = fkServidor
INNER JOIN setor ON idSetor = fkSetor
INNER JOIN empresa ON idEmpresa = fkEmpresa
INNER JOIN metrica ON idMetrica = fkMetrica;

-- criar um usuario no site antes de fazer os inserts abaixo
-- inserts
INSERT INTO setor VALUES(NULL,1,"SETOR1","Destinado Aos Computadores da Região de São Paulo");
INSERT INTO metrica VALUES(NULL,'CPUPercent','psutil.cpu_percent(interval=None, percpu=False)','%',NULL,'0');
INSERT INTO metrica VALUES(NULL,'RAMPercent','psutil.virtual_memory().percent','%', NULL,'0');
INSERT INTO metrica VALUES(NULL,'DISCOUso','psutil.disk_usage("/").used','GB', '/(1024**3)','0');


-- DROPS

 DROP VIEW leituraView;
 drop table alerta;
 drop table parametro;
 drop table leitura;
 drop table metrica;
 drop table componenteFisico;
 drop table servidor;
 
-------------------- AZURE --------------------------------

CREATE TABLE empresa(
  idEmpresa INT  PRIMARY KEY IDENTITY(1,1),
  nomeEmpresa VARCHAR(45) NOT NULL,
  cnpjEmpresa CHAR(18) UNIQUE NOT NULL,
  telefoneEmpresa VARCHAR(20)
);

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY IDENTITY(10,1),
  nomeUsuario VARCHAR(45) NOT NULL,
  emailUsuario VARCHAR(45) NOT NULL,
  senhaUsuario CHAR(128) NOT NULL,
  tipoUsuario VARCHAR(13) NOT NULL,
  CONSTRAINT CK_usuario_tipoUsuario CHECK(tipoUsuario IN ('Gestor', 'Técnico')),
  CONSTRAINT UK_usuario_emailUsuario UNIQUE(emailUsuario),
  fkEmpresa INT NOT NULL,
  CONSTRAINT FK_usuario_fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),  
  fkGestor INT,
  CONSTRAINT FK_usuario_fkGestor FOREIGN KEY (fkGestor) REFERENCES usuario (idUsuario)
);

CREATE TABLE setor (
  idSetor INT PRIMARY KEY IDENTITY(1,1),
  fkEmpresa INT NOT NULL,
  CONSTRAINT FK_setor_fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
  nomeSetor VARCHAR(45) NOT NULL,
  descricaoSetor VARCHAR(255) NULL  
);

CREATE TABLE servidor (
  idServidor INT PRIMARY KEY IDENTITY(1,1),
  fkSetor INT NOT NULL,
  CONSTRAINT FK_servidor_fkSetor FOREIGN KEY (fkSetor) REFERENCES setor (idSetor),
  sistemaOperacional VARCHAR(45) NOT NULL,
  macAddress VARCHAR(45) NOT NULL,
  serialNumber VARCHAR(45) NOT NULL
);


CREATE TABLE componenteFisico  (
	idComponenteFisico  INT PRIMARY KEY IDENTITY(1,1),
    fkServidor INT NOT NULL,
    CONSTRAINT FK_componenteFisico_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    tipoComponente VARCHAR(45) NOT NULL
);

CREATE TABLE metrica (
	idMetrica  INT PRIMARY KEY IDENTITY(1,1),
	nomeMetrica VARCHAR(45) NOT NULL,
	comandoPython VARCHAR(255),
    unidadeMedida VARCHAR(45) NOT NULL,
	tratamentoPython VARCHAR(255),
	isTupla CHAR(1) NOT NULL,
	CONSTRAINT CK_metrica_isTupla CHECK(isTupla IN ('1', '0'))
);

CREATE TABLE leitura (
  idLeitura INT PRIMARY KEY IDENTITY(1,1),
  horarioLeitura DATETIME NOT NULL,
  valorLeitura VARCHAR(255) NOT NULL,
  fkComponenteFisico INT NOT NULL,
  CONSTRAINT FK_leitura_fkComponenteFisico FOREIGN KEY (fkComponenteFisico) REFERENCES componenteFisico (idComponenteFisico),
  fkMetrica INT NOT NULL,
  CONSTRAINT FK_leitura_fkMetrica FOREIGN KEY (fkMetrica) REFERENCES metrica (idMetrica)
);

CREATE TABLE alerta (
  idAlerta INT PRIMARY KEY IDENTITY(1,1),
  valorLeitura VARCHAR(255) NOT NULL,
  tipoLeitura VARCHAR(45),
  fkLeitura INT NOT NULL,
  CONSTRAINT FK_alerta_fkAlerta FOREIGN KEY (fkLeitura) REFERENCES leitura (idLeitura)
 );

 CREATE TABLE parametro(
   fkComponenteFisico INT NOT NULL,
  CONSTRAINT FK_parametro_fkComponenteFisico FOREIGN KEY (fkComponenteFisico) REFERENCES componenteFisico (idComponenteFisico),
  fkMetrica INT NOT NULL,
  CONSTRAINT FK_parametro_fkMetrica FOREIGN KEY (fkMetrica) REFERENCES metrica (idMetrica),
  fkServidor INT NOT NULL,
  CONSTRAINT FK_parametro_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
  PRIMARY KEY(fkComponenteFisico, fkMetrica,fkServidor)
 );
 
CREATE VIEW leituraView AS SELECT 
    nomeEmpresa,
    fkEmpresa,
    nomeSetor,
    idServidor,
    fkComponenteFisico,
    tipoComponente,
	horarioLeitura,
    valorLeitura,
    unidadeMedida
FROM
    leitura
INNER JOIN componenteFisico ON idComponenteFisico =  fkComponenteFisico
INNER JOIN servidor ON idServidor = fkServidor
INNER JOIN setor ON idSetor = fkSetor
INNER JOIN empresa ON idEmpresa = fkEmpresa
INNER JOIN metrica ON idMetrica = fkMetrica;

-- criar um usuario no site antes de fazer os inserts abaixo
-- inserts
INSERT INTO setor (fkEmpresa, nomeSetor, descricaoSetor) VALUES (1,'SETOR1','Destinado Aos Computadores da Região de São Paulo');
INSERT INTO metrica (nomeMetrica, comandoPython, unidadeMedida, tratamentoPython, isTupla) VALUES('CPUPercent','psutil.cpu_percent(interval=None, percpu=False)','%',NULL,'0');
INSERT INTO metrica (nomeMetrica, comandoPython, unidadeMedida, tratamentoPython, isTupla) VALUES('RAMPercent','psutil.virtual_memory().percent','%', NULL,'0');
INSERT INTO metrica (nomeMetrica, comandoPython, unidadeMedida, tratamentoPython, isTupla) VALUES('DISCOUso','psutil.disk_usage('/').used','GB', '/(1024**3)','0');
