CREATE DATABASE bolsa;
-- DROP DATABASE bolsa;
USE bolsa;

CREATE TABLE empresa(
  idEmpresa INT  PRIMARY KEY AUTO_INCREMENT,
  nomeEmpresa VARCHAR(45) NOT NULL,
  cnpjEmpresa CHAR(18) UNIQUE NOT NULL,
  telefoneEmpresa CHAR(15)
);

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nomeUsuario VARCHAR(45) NOT NULL,
  emailUsuario VARCHAR(45) NOT NULL,
  senhaUsuario CHAR(128) NOT NULL,
  tipoUsuario VARCHAR(13), 
  CONSTRAINT CK_usuario_tipoUsuario CHECK(tipoUsuario IN ('gestor', 'técnico')),
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
	nomeMetrica VARCHAR(45),
	comando VARCHAR(255),
	unidade_medida CHAR(5)
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
  PRIMARY KEY(fkComponenteFisico, fkMetrica, fkServidor)
 );
 
 SELECT * FROM empresa;