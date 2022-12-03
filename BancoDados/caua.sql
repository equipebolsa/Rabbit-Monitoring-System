-- Criação de setor com estado e cidade e tabela de clima

CREATE TABLE setor (
  idSetor INT PRIMARY KEY AUTO_INCREMENT,
  fkEmpresa INT NOT NULL,
  CONSTRAINT FK_setor_fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
  nomeSetor VARCHAR(45) NOT NULL,
  descricaoSetor VARCHAR(255) NULL,
  cidade VARCHAR(255) NOT NULL ,
  estado char(2) NOT NULL
);

CREATE TABLE clima(
  idClima INT PRIMARY KEY AUTO_INCREMENT,
  estado CHAR(2),
  temperatura INT NOT NULL,
  horaClima DATETIME NOT NULL
);

CREATE TABLE historicoClima(
  idHist INT PRIMARY KEY AUTO_INCREMENT,
  estado CHAR(2),
  dia1 DECIMAL(3,1) NOT NULL,
  dia2 DECIMAL(3,1) NOT NULL,
  dia3 DECIMAL(3,1) NOT NULL
);

-- Azure

CREATE TABLE setor (
  idSetor INT PRIMARY KEY IDENTITY(1,1),
  fkEmpresa INT NOT NULL,
  CONSTRAINT FK_setor_fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
  nomeSetor VARCHAR(45) NOT NULL,
  descricaoSetor VARCHAR(255) NULL,
  cidade VARCHAR(255) NOT NULL ,
  estado char(2) NOT NULL
);

CREATE TABLE clima(
  idClima INT PRIMARY KEY IDENTITY(1,1),
  estado CHAR(2),
  temperatura INT NOT NULL,
  horaClima DATETIME NOT NULL
);

CREATE TABLE historicoClima(
  idHist INT PRIMARY KEY IDENTITY(1,1),
  estado CHAR(2),
  dia1 DECIMAL(3,1) NOT NULL,
  dia2 DECIMAL(3,1) NOT NULL,
  dia3 DECIMAL(3,1) NOT NULL
);