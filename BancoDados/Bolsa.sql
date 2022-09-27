CREATE DATABASE bolsa;
USE bolsa;

CREATE TABLE empresa(
  `idEmpresa` INT NOT NULL,
  `nomeEmpresa` VARCHAR(45) NOT NULL,
  `cnpjEmpresa` CHAR(15) NOT NULL,
  PRIMARY KEY (`idEmpresa`))
ENGINE = InnoDB;


CREATE TABLE usuario (
  `idUsuario` INT NOT NULL,
  `empresa_idEmpresa` INT NOT NULL,
  `tipoUsuario` CHAR(1) NULL,
  `fkGestor` INT NULL,
  `nomeUsuario` VARCHAR(45) NULL,
  `senhaUsuaario` CHAR(128) NULL,
  `data` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuario`),
  FOREIGN KEY (`empresa_idEmpresa`)
  REFERENCES empresa (`idEmpresa`),
  FOREIGN KEY (`fkGestor`)
  REFERENCES usuario (`idUsuario`);



CREATE TABLE setor (
  `idSetor` INT NOT NULL,
  `fkEmpresa` INT NOT NULL,
  `nomeSetor` VARCHAR(45) NULL,
  `descricaoSetor` VARCHAR(45) NULL,
  PRIMARY KEY (`idSetor`),
  INDEX `fk_setor_empresa1_idx` (`fkEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_setor_empresa1`
    FOREIGN KEY (`fkEmpresa`)
    REFERENCES `mydb`.`empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE servidor (
  `idServidor` VARCHAR(45) NOT NULL,
  `idSetor` INT NOT NULL,
  `sistemaOperacional` VARCHAR(45) NULL,
  `macAddress` VARCHAR(45) NULL,
  `serialNumber` VARCHAR(45) NULL,
  INDEX `fk_servidor_setor1_idx` (`idSetor` ASC) VISIBLE,
  PRIMARY KEY (`idServidor`),
  CONSTRAINT `fk_servidor_setor1`
    FOREIGN KEY (`idSetor`)
    REFERENCES `mydb`.`setor` (`idSetor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE componenteFisico  (
  `idComponenteFisico` INT NOT NULL,
  `fkServidor` VARCHAR(45) NOT NULL,
  `tipoComponente` VARCHAR(45) NULL,
  PRIMARY KEY (`idComponenteFisico`),
  INDEX `fk_componenteFisico_servidor1_idx` (`fkServidor` ASC) VISIBLE,
  CONSTRAINT `fk_componenteFisico_servidor1`
    FOREIGN KEY (`fkServidor`)
    REFERENCES `mydb`.`servidor` (`idServidor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE metrica (
  `idMetrica` INT NOT NULL,
  `nomeMetrica` VARCHAR(45) NULL,
  `comandoPython` VARCHAR(256) NULL,
  `comandoJava` VARCHAR(256) NULL,
  PRIMARY KEY (`idMetrica`))
ENGINE = InnoDB;



CREATE TABLE leitura (
  `idLeitura` VARCHAR(45) NOT NULL,
  `fkComponenteFisico` INT NOT NULL,
  `fkMetrica` INT NOT NULL,
  `horarioLeitura` DATETIME NOT NULL,
  `valorLeitura` DECIMAL(7,2) NOT NULL,
  INDEX `fk_table1_componenteFisico1_idx` (`fkComponenteFisico` ASC) VISIBLE,
  PRIMARY KEY (`idLeitura`),
  INDEX `fk_table1_metrica1_idx` (`fkMetrica` ASC) VISIBLE,
  CONSTRAINT `fk_table1_componenteFisico1`
    FOREIGN KEY (`fkComponenteFisico`)
    REFERENCES `mydb`.`componenteFisico` (`idComponenteFisico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_table1_metrica1`
    FOREIGN KEY (`fkMetrica`)
    REFERENCES `mydb`.`metrica` (`idMetrica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE alerta (
  `idAlerta` VARCHAR(45) NOT NULL,
  `fkLeitura` VARCHAR(45) NOT NULL,
  `fkLeitura` VARCHAR(45) NOT NULL,
  `tipoAlerta` VARCHAR(45) NULL,
  PRIMARY KEY (`idAlerta`, `fkLeitura`),
  INDEX `fk_alerta_leitura1_idx` (`fkLeitura` ASC) VISIBLE,
  CONSTRAINT `fk_alerta_leitura1`
    FOREIGN KEY (`fkLeitura`)
    REFERENCES `mydb`.`leitura` (`idLeitura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

