CREATE DATABASE bolsa;

USE bolsa;

SELECT * FROM usuario;

CREATE TABLE empresa(
  idEmpresa INT  PRIMARY KEY AUTO_INCREMENT,
  nomeEmpresa VARCHAR(45) NOT NULL,
  cnpjEmpresa CHAR(18) UNIQUE NOT NULL,
  telefoneEmpresa VARCHAR(20)
);

INSERT INTO empresa VALUES(NULL,"Gustavo Empresas","876.123.9870/10","1191234-5678");

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

INSERT INTO usuario VALUES(NULL,"Gustavo Empresas","gustavo12.0000@gmail.com","123","Gestor",1,NULL);


CREATE TABLE setor (
  idSetor INT PRIMARY KEY AUTO_INCREMENT,
  fkEmpresa INT NOT NULL,
  CONSTRAINT FK_setor_fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
  nomeSetor VARCHAR(45) NOT NULL,
  descricaoSetor VARCHAR(255) NULL  
);
INSERT INTO setor VALUES(NULL,1,"SETOR1","Destinado Aos Computadores da Região de São Paulo");

CREATE TABLE servidor (
  idServidor INT PRIMARY KEY AUTO_INCREMENT,
  fkSetor INT NOT NULL,
  CONSTRAINT FK_servidor_fkSetor FOREIGN KEY (fkSetor) REFERENCES setor (idSetor),
  sistemaOperacional VARCHAR(45) NOT NULL,
  macAddress VARCHAR(45) NOT NULL,
  serialNumber VARCHAR(45) NOT NULL
);


SELECT nomeSetor, count(fkSetor) FROM servidor WHERE idServidor = 1;
CREATE TABLE componenteFisico  (
	idComponenteFisico  INT PRIMARY KEY AUTO_INCREMENT,
    fkServidor INT NOT NULL,
    CONSTRAINT FK_componenteFisico_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    tipoComponente VARCHAR(45) NOT NULL
);

CREATE TABLE metrica (
	idMetrica  INT PRIMARY KEY AUTO_INCREMENT,
	nomeMetrica VARCHAR(45) NOT NULL,
	unidadeMedida VARCHAR(255),
	isTupla CHAR(1) NOT NULL,
	CONSTRAINT CK_metrica_isTupla CHECK(isTupla IN ('1', '0'))
);
-- Inserir
INSERT INTO metrica VALUES(NULL,'CPUPercent','%','0');
INSERT INTO metrica VALUES(NULL,'RAMPercent','%','0');
INSERT INTO metrica VALUES(NULL,'DISCOUso','GB','0');
 

select * from empresa;

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
  tipoAlerta VARCHAR(45),
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

 
 