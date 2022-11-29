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
    unidadeMedida VARCHAR(45) NOT NULL,
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
  PRIMARY KEY(fkComponenteFisico, fkMetrica,fkServidor),
  parametroAtivo BOOLEAN NOT NULL
 );
 
  -- Projeto Individual: Gustavo Antonio
 CREATE TABLE rede(
	idRede INT PRIMARY KEY AUTO_INCREMENT,
    fkServidor INT NOT NULL,
    CONSTRAINT FK_rede_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    tipoConexao CHAR(15) NOT NULL,
	CONSTRAINT CK_rede_tipoConexao CHECK(tipoConexao IN ('Wi-Fi', 'Ethernet')),
    address VARCHAR(45)    
 );
  CREATE TABLE dadosRede(
	idDadosRede INT PRIMARY KEY AUTO_INCREMENT,
    fkRede INT NOT NULL,
    CONSTRAINT FK_dadosRede_fkRede FOREIGN KEY (fkRede) REFERENCES rede (idRede),
    packetsRecv INT,
    packetsSent INT,
    bytesSent INT,
    bytesRecv INT,
	horarioLeitura DATETIME NOT NULL
 );
 -- Projeto Individual: Gustavo Antonio

 
INSERT INTO empresa VALUES('SPTECH','802.996.720-93','(63) 2430-8532');
INSERT INTO usuario(nomeUsuario,emailUsuario,senhaUsuario,tipoUsuario,fkEmpresa) VALUES('URUBU','urubu@gmail.com',CONVERT(varchar(max), HASHBYTES ('SHA2_512', '123') ,2) ,'Gestor',1);
INSERT INTO setor VALUES(1,'SETOR1','Destinado Aos Computadores da Região de São Paulo');
INSERT INTO metrica VALUES('CPUPercent','%','0');
INSERT INTO metrica VALUES('RAMPercent','%','0');
INSERT INTO metrica VALUES('DISCOUso','GB','0'); 
INSERT INTO metrica VALUES('Cooler','RPM','0');
INSERT INTO metrica VALUES('Bateria','%','0');

 
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


DROP TABLE alerta;
DROP TABLE leitura;
DROP TABLE parametro;
DROP TABLE componenteFisico;
DROP TABLE metrica;
DROP TABLE servidor;
DROP TABLE setor;
DROP TABLE usuario;
DROP TABLE empresa;
DROP VIEW leituraView;