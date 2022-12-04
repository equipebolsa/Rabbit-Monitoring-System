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
  descricaoSetor VARCHAR(255) NULL,
  cidade VARCHAR(255) NOT NULL ,
  estado char(2) NOT NULL  

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
  PRIMARY KEY(fkComponenteFisico, fkMetrica,fkServidor),
  parametroAtivo TINYINT NOT NULL
 );
 
    -- Projeto Individual: Gustavo Antonio
 CREATE TABLE rede(
	idRede INT PRIMARY KEY IDENTITY(1,1),
    fkServidor INT NOT NULL,
    CONSTRAINT FK_rede_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    tipoConexao CHAR(15) NOT NULL,
	CONSTRAINT CK_rede_tipoConexao CHECK(tipoConexao IN ('Wi-Fi', 'Ethernet')  OR tipoConexao LIKE 'w%'),
    address VARCHAR(45)    
 );
  CREATE TABLE dadosRede(
	idDadosRede INT PRIMARY KEY IDENTITY(1,1),
    fkRede INT NOT NULL,
    CONSTRAINT FK_dadosRede_fkRede FOREIGN KEY (fkRede) REFERENCES rede (idRede),
    packetsRecv INT,
    packetsSent INT,
    bytesSent DECIMAL(7,2),
    bytesRecv DECIMAL(7,2),
	horarioLeitura DATETIME NOT NULL
 );
 
 -- Projeto Individual: Gustavo Antonio

 -- Projeto Individual: Cauã Ciconelli
 CREATE TABLE clima(
  idClima INT PRIMARY KEY IDENTITY(1,1),
  estado CHAR(2),
  temperatura INT NOT NULL,
  horaClima DATETIME NOT NULL
);

CREATE TABLE historicoClima(
  idHist INT PRIMARY KEY IDENTITY(1,1),
  estado CHAR(2),
  media DECIMAL(3,2) NOT NULL,
  horaHist DATETIME NOT NULL
);
-- Projeto Individual: Cauã Ciconelli

 
INSERT INTO empresa VALUES('SPTECH','802.996.720-93','(63) 2430-8532');
INSERT INTO usuario(nomeUsuario,emailUsuario,senhaUsuario,tipoUsuario,fkEmpresa) VALUES('URUBU','urubu@gmail.com',CONVERT(varchar(max), HASHBYTES ('SHA2_512', '123') ,2) ,'Gestor',1);
INSERT INTO setor VALUES(1,'SETOR1','Destinado Aos Computadores da Região de São Paulo', 'São Paulo', 'SP');

INSERT INTO metrica VALUES('Porcentagem De Uso Da CPU','%','0');
INSERT INTO metrica VALUES('Memória Usada','GB','0');
INSERT INTO metrica VALUES('Porcentagem De Uso Da RAM','%','0');
INSERT INTO metrica VALUES('Porcentagem De Uso Do DISCO','%','0');
INSERT INTO metrica VALUES('Quantidade De Leitura Por Segundo','s','0');
INSERT INTO metrica VALUES('Quantidade De Escrita Por Segundo','s','0');
INSERT INTO metrica VALUES('Porcentagem De Uso Da Memória Virtual','%','0');
INSERT INTO metrica VALUES('Temperatura Da CPU em ','C°','0');

 
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

CREATE VIEW redeView AS SELECT 
	packetsSent,
    packetsRecv,
    bytesSent,
    bytesRecv,
    horarioLeitura,
    fkServidor
FROM dadosrede
    INNER JOIN rede ON fkRede = idRede;


CREATE VIEW mergeData AS SELECT 
	idServidor,
	MIN(fkEmpresa) AS fkEmpresa,
    MIN(nomeSetor) AS nomeSetor,
    COUNT(idAlerta) AS qtdAlertas,
    (SELECT TOP 1 MIN(nomeMetrica) FROM alerta INNER JOIN leitura ON fkLeitura = idLeitura  INNER JOIN metrica ON fkMetrica = idMetrica GROUP BY fkMetrica ORDER BY  COUNT(fkMetrica) DESC) AS nomeMaxQtdMetrica,
    (SELECT TOP 1 COUNT(fkMetrica) FROM alerta INNER JOIN leitura ON fkLeitura = idLeitura GROUP BY fkMetrica ORDER BY  COUNT(fkMetrica) DESC) maxQtdMetrica,
	(SELECT TOP 1 AVG(CAST(valorLeitura as DECIMAL(10,2))) FROM alerta INNER JOIN leitura ON fkLeitura = idLeitura GROUP BY fkMetrica ORDER BY  COUNT(fkMetrica) DESC) avgMaxQtdMetrica,
    (SELECT TOP 1 MIN(nomeMetrica) FROM alerta INNER JOIN leitura ON fkLeitura = idLeitura INNER JOIN metrica ON fkMetrica = idMetrica GROUP BY fkMetrica ORDER BY  COUNT(fkMetrica) ASC) AS nomeMinQtdMetrica,
    (SELECT TOP 1 COUNT(fkMetrica) FROM alerta INNER JOIN leitura ON fkLeitura = idLeitura GROUP BY fkMetrica ORDER BY  COUNT(fkMetrica) ASC) AS minQtdMetrica,
    (SELECT TOP 1 AVG(CAST(valorLeitura as DECIMAL(5,2))) FROM alerta INNER JOIN leitura ON fkLeitura = idLeitura GROUP BY fkMetrica ORDER BY  COUNT(fkMetrica) ASC ) avgMinQtdMetrica
FROM  alerta
	INNER JOIN leitura ON fKLeitura = idLeitura
    INNER JOIN metrica ON fkMetrica = idMetrica
    INNER JOIN componenteFisico ON fkComponenteFisico = idComponenteFisico
    INNER JOIN servidor ON fkServidor = idServidor
    INNER JOIN setor ON fkSetor = idSetor
    GROUP BY idServidor;
    
    
CREATE VIEW mergeDataMaquina AS SELECT 
    horarioLeitura,
    valorLeitura,
    nomeMetrica
FROM  alerta
	INNER JOIN leitura ON fKLeitura = idLeitura
    INNER JOIN metrica ON fkMetrica = idMetrica;
    
    
    

-- projeto individual vannucchi 
CREATE TABLE allowlist(
	id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE blocklist(
	id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE waitlist(
	id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100),
    mac CHAR(17),
    cpuProcess VARCHAR(45),
    ramProcess VARCHAR(45),
    cpuMachine VARCHAR(45),
    ramMachine VARCHAR(45)
);
CREATE TABLE filterlist(
    id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE deathLog(
    id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100),
    dataHora DATE,
    macAddress CHAR(45)
);


-- ----------------------INSERT FILTER

INSERT INTO filterlist(nome) VALUES ('python*'),('kworker*'),('card0*'),('cpuhp*'),('gnome*'),('gsd-*'),('gvfs*'),('idle*'),('ksoftirqd*'),('loop*'),('migration*'),('rcu*'),('system*'),('xdg*'),('cryptd'),('evolution-*'),('ath10k*'),('gdm*'),('git*'),('ibus-*'),('irq*'),('iprt*'),('scsi*'),('(fwupdmgr)'),('(sd-pam)'),('accounts-daemon'),('acpi_thermal_pm'),('acpid'),('apache2'),('at-spi-bus-launcher'),('at-spi2-registryd'),('ata_sff'),('avahi-daemon'),('bash'),('gpg'),('blkcg_punt_bio'),('bluetoothd'),('dbus'),('cat'),('catchsegv'),('cfg80211'),('evince'),('grep'),('gst-plugin-scanner'),('javaldx'),('lspci'),('oosplash'),('QtWebEngineProcess'),('R'),('rsession'),('soffice.bin'),('tracker-extract'),('tracker-store'),('charger_manager'),('chrome_crashpad_handler'),('colord'),('cpuUsage.sh'),('cron'),('cups-browsed'),('cupsd'),('dbus-daemon'),('dconf-service'),('devfreq_wq'),('dio/sda1'),('ecryptfs-kthrea'),('edac-poller'),('ext4-rsv-conver'),('fwupd'),('gjs'),('goa-daemon'),('goa-identity-service'),('inet_frag_wq'),('ipv6_addrconf'),('jbd2/sda1-8'),('kauditd'),('kblockd'),('kcompactd0'),('kdevtmpfs'),('kerneloops'),('khugepaged'),('khungtaskd'),('kintegrityd'),('kmemstick'),('krfcommd'),('QtWebEngineProcess'),('ksmd'),('kstrp'),('kswapd0'),('kthreadd'),('kthrotld'),('md'),('mld'),('mm_percpu_wq'),('ModemManager'),('nacl_helper'),('nautilus'),('netns'),('networkd-dispat'),('NetworkManager'),('node'),('npm run dev'),('oom_reaper'),('org.gnome.Chara'),('polkitd'),('pulseaudio'),('python'),('rserver'),('rsyslogd'),('rtkit-daemon'),('seahorse'),('sh'),('sleep'),('snap-store'),('snapd'),('sqlservr'),('ssh-agent'),('switcheroo-control'),('thermald'),('tpm_dev_wq'),('ApplicationFrameHost.exe'),('audiodg.exe'),('bash.exe'),('Calculator.exe'),('cmd.exe'),('conhost.exe'),('core.exe'),('csrss.exe'),('ctfmon.exe'),('dasHost.exe'),('dllhost.exe'),('dwm.exe'),('EPCP.exe'),('escsvc64.exe'),('explorer.exe'),('fontdrvhost.exe'),('gameinputsvc.exe'),('gamingservices.exe'),('gamingservicesnet.exe'),('GoogleCrashHandler.exe'),('GoogleCrashHandler64.exe'),('lsass.exe'),('MemCompression'),('Microsoft.Photos.exe'),('Microsoft.SharePoint.exe'),('mintty.exe'),('MpCopyAccelerator.exe'),('MsMpEng.exe'),('mysqld.exe'),('NisSrv.exe'),('node.exe'),('NVDisplay.Container.exe'),('OriginWebHelperService.exe'),('powershell.exe'),('Registry'),('remoting_host.exe'),('RuntimeBroker.exe'),('SearchApp.exe'),('SearchIndexer.exe'),('SecurityHealthService.exe'),('services.exe'),('SgrmBroker.exe'),('ShellExperienceHost.exe'),('sihost.exe'),('smartscreen.exe'),('smss.exe'),('SndVol.exe'),('spoolsv.exe'),('StartMenuExperienceHost.exe'),('svchost.exe'),('System'),('System Idle Process'),('SystemSettings.exe'),('taskhostw.exe'),('TextInputHost.exe'),('uhssvc.exe'),('vgtray.exe'),('Video.UI.exe'),('wininit.exe'),('winlogon.exe'),('WmiPrvSE.exe'),('tracker-miner-fs'),('GameBarPresenceWritte.exe'),('SearchFilterHost.exe'),('SearchProtocolHost.exe'),('udisksd'),('unattended-upgr'),('update-notifier'),('upowerd'),('uuidd'),('vfio-irqfd-clea'),('watchdogd'),('whoopsie'),('wpa_supplicant'),('writeback'),('Xorg'),('mysqld'),('cut'),('fc-list'),('sort'),('uniq'),('mysql-workbench-bin'),('gpgconf'),('zswap-shrink');

-- DROPS

DROP TABLE alerta;
DROP TABLE leitura;
DROP TABLE parametro;
DROP TABLE componenteFisico;
DROP TABLE metrica;
DROP TABLE dadosRede;
DROP TABLE rede;
DROP TABLE servidor;
DROP TABLE setor;
DROP TABLE usuario;
DROP TABLE empresa;
DROP TABLE allowlist;
DROP TABLE blocklist;
DROP TABLE filterlist;
DROP TABLE waitlist;
DROP TABLE deathLog;
DROP TABLE clima;
DROP TABLE historicoClima;

=======
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
  descricaoSetor VARCHAR(255) NULL,
  cidade VARCHAR(255) NOT NULL ,
  estado char(2) NOT NULL  

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
  PRIMARY KEY(fkComponenteFisico, fkMetrica,fkServidor),
  parametroAtivo TINYINT NOT NULL
 );
 
    -- Projeto Individual: Gustavo Antonio
 CREATE TABLE rede(
	idRede INT PRIMARY KEY IDENTITY(1,1),
    fkServidor INT NOT NULL,
    CONSTRAINT FK_rede_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    tipoConexao CHAR(15) NOT NULL,
	CONSTRAINT CK_rede_tipoConexao CHECK(tipoConexao IN ('Wi-Fi', 'Ethernet')  OR tipoConexao LIKE 'w%'),
    address VARCHAR(45)    
 );
  CREATE TABLE dadosRede(
	idDadosRede INT PRIMARY KEY IDENTITY(1,1),
    fkRede INT NOT NULL,
    CONSTRAINT FK_dadosRede_fkRede FOREIGN KEY (fkRede) REFERENCES rede (idRede),
    packetsRecv INT,
    packetsSent INT,
    bytesSent DECIMAL(7,2),
    bytesRecv DECIMAL(7,2),
	horarioLeitura DATETIME NOT NULL
 );
 
 -- Projeto Individual: Gustavo Antonio

 -- Projeto Individual: Cauã Ciconelli
 CREATE TABLE clima(
  idClima INT PRIMARY KEY IDENTITY(1,1),
  estado CHAR(2),
  temperatura INT NOT NULL,
  horaClima DATETIME NOT NULL
);

CREATE TABLE historicoClima(
  idHist INT PRIMARY KEY IDENTITY(1,1),
  estado CHAR(2),
  media DECIMAL(3,2) NOT NULL,
  horaHist DATETIME NOT NULL
);
-- Projeto Individual: Cauã Ciconelli

 
INSERT INTO empresa VALUES('SPTECH','802.996.720-93','(63) 2430-8532');
INSERT INTO usuario(nomeUsuario,emailUsuario,senhaUsuario,tipoUsuario,fkEmpresa) VALUES('URUBU','urubu@gmail.com',CONVERT(varchar(max), HASHBYTES ('SHA2_512', '123') ,2) ,'Gestor',1);
INSERT INTO setor VALUES(1,'SETOR1','Destinado Aos Computadores da Região de São Paulo', 'São Paulo', 'SP');

INSERT INTO metrica VALUES('Porcentagem De Uso Da CPU','%','0');
INSERT INTO metrica VALUES('Memória Usada','GB','0');
INSERT INTO metrica VALUES('Porcentagem De Uso Da RAM','%','0');
INSERT INTO metrica VALUES('Porcentagem De Uso Do DISCO','%','0');
INSERT INTO metrica VALUES('Quantidade De Leitura Por Segundo','s','0');
INSERT INTO metrica VALUES('Quantidade De Escrita Por Segundo','s','0');
INSERT INTO metrica VALUES('Porcentagem De Uso Da Memória Virtual','%','0');
INSERT INTO metrica VALUES('Temperatura Da CPU em ','C°','0');

 
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

CREATE VIEW redeView AS SELECT 
	packetsSent,
    packetsRecv,
    bytesSent,
    bytesRecv,
    horarioLeitura,
    fkServidor
FROM dadosrede
    INNER JOIN rede ON fkRede = idRede;


CREATE VIEW mergeData AS SELECT 
	idServidor,
	MIN(fkEmpresa) AS fkEmpresa,
    MIN(nomeSetor) AS nomeSetor,
    COUNT(idAlerta) AS qtdAlertas,
	MAX(nomeMetrica) AS nomeMaxQtdMetrica,
	AVG(CAST(valorLeitura as DECIMAL(10,2))) AS avgMaxQtdMetrica
FROM  alerta
	INNER JOIN leitura ON fKLeitura = idLeitura
    INNER JOIN metrica ON fkMetrica = idMetrica
    INNER JOIN componenteFisico ON fkComponenteFisico = idComponenteFisico
    INNER JOIN servidor ON fkServidor = idServidor
    INNER JOIN setor ON fkSetor = idSetor
    GROUP BY idServidor,fkServidor;
    
    
CREATE VIEW mergeDataMaquina AS SELECT 
    horarioLeitura,
    valorLeitura,
    nomeMetrica
FROM  alerta
	INNER JOIN leitura ON fKLeitura = idLeitura
    INNER JOIN metrica ON fkMetrica = idMetrica;
    
    
    

-- projeto individual vannucchi 
CREATE TABLE allowlist(
	id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE blocklist(
	id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE waitlist(
	id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE filterlist(
    id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE deathLog(
    id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100),
    dataLog DATE,
    macAddress CHAR(45)
);


-- ----------------------INSERT FILTER

INSERT INTO filterlist(nome) VALUES ('python*'),('kworker*'),('card0*'),('cpuhp*'),('gnome*'),('gsd-*'),('gvfs*'),('idle*'),('ksoftirqd*'),('loop*'),('migration*'),('rcu*'),('system*'),('xdg*'),('cryptd'),('evolution-*'),('ath10k*'),('gdm*'),('git*'),('ibus-*'),('irq*'),('iprt*'),('scsi*'),('(fwupdmgr)'),('(sd-pam)'),('accounts-daemon'),('acpi_thermal_pm'),('acpid'),('apache2'),('at-spi-bus-launcher'),('at-spi2-registryd'),('ata_sff'),('avahi-daemon'),('bash'),('gpg'),('blkcg_punt_bio'),('bluetoothd'),('dbus'),('cat'),('catchsegv'),('cfg80211'),('evince'),('grep'),('gst-plugin-scanner'),('javaldx'),('lspci'),('oosplash'),('QtWebEngineProcess'),('R'),('rsession'),('soffice.bin'),('tracker-extract'),('tracker-store'),('charger_manager'),('chrome_crashpad_handler'),('colord'),('cpuUsage.sh'),('cron'),('cups-browsed'),('cupsd'),('dbus-daemon'),('dconf-service'),('devfreq_wq'),('dio/sda1'),('ecryptfs-kthrea'),('edac-poller'),('ext4-rsv-conver'),('fwupd'),('gjs'),('goa-daemon'),('goa-identity-service'),('inet_frag_wq'),('ipv6_addrconf'),('jbd2/sda1-8'),('kauditd'),('kblockd'),('kcompactd0'),('kdevtmpfs'),('kerneloops'),('khugepaged'),('khungtaskd'),('kintegrityd'),('kmemstick'),('krfcommd'),('QtWebEngineProcess'),('ksmd'),('kstrp'),('kswapd0'),('kthreadd'),('kthrotld'),('md'),('mld'),('mm_percpu_wq'),('ModemManager'),('nacl_helper'),('nautilus'),('netns'),('networkd-dispat'),('NetworkManager'),('node'),('npm run dev'),('oom_reaper'),('org.gnome.Chara'),('polkitd'),('pulseaudio'),('python'),('rserver'),('rsyslogd'),('rtkit-daemon'),('seahorse'),('sh'),('sleep'),('snap-store'),('snapd'),('sqlservr'),('ssh-agent'),('switcheroo-control'),('thermald'),('tpm_dev_wq'),('ApplicationFrameHost.exe'),('audiodg.exe'),('bash.exe'),('Calculator.exe'),('cmd.exe'),('conhost.exe'),('core.exe'),('csrss.exe'),('ctfmon.exe'),('dasHost.exe'),('dllhost.exe'),('dwm.exe'),('EPCP.exe'),('escsvc64.exe'),('explorer.exe'),('fontdrvhost.exe'),('gameinputsvc.exe'),('gamingservices.exe'),('gamingservicesnet.exe'),('GoogleCrashHandler.exe'),('GoogleCrashHandler64.exe'),('lsass.exe'),('MemCompression'),('Microsoft.Photos.exe'),('Microsoft.SharePoint.exe'),('mintty.exe'),('MpCopyAccelerator.exe'),('MsMpEng.exe'),('mysqld.exe'),('NisSrv.exe'),('node.exe'),('NVDisplay.Container.exe'),('OriginWebHelperService.exe'),('powershell.exe'),('Registry'),('remoting_host.exe'),('RuntimeBroker.exe'),('SearchApp.exe'),('SearchIndexer.exe'),('SecurityHealthService.exe'),('services.exe'),('SgrmBroker.exe'),('ShellExperienceHost.exe'),('sihost.exe'),('smartscreen.exe'),('smss.exe'),('SndVol.exe'),('spoolsv.exe'),('StartMenuExperienceHost.exe'),('svchost.exe'),('System'),('System Idle Process'),('SystemSettings.exe'),('taskhostw.exe'),('TextInputHost.exe'),('uhssvc.exe'),('vgtray.exe'),('Video.UI.exe'),('wininit.exe'),('winlogon.exe'),('WmiPrvSE.exe'),('tracker-miner-fs'),('GameBarPresenceWritte.exe'),('SearchFilterHost.exe'),('SearchProtocolHost.exe'),('udisksd'),('unattended-upgr'),('update-notifier'),('upowerd'),('uuidd'),('vfio-irqfd-clea'),('watchdogd'),('whoopsie'),('wpa_supplicant'),('writeback'),('Xorg'),('mysqld'),('cut'),('fc-list'),('sort'),('uniq'),('mysql-workbench-bin'),('gpgconf'),('zswap-shrink');

-- DROPS

DROP TABLE alerta;
DROP TABLE leitura;
DROP TABLE parametro;
DROP TABLE componenteFisico;
DROP TABLE metrica;
DROP TABLE dadosRede;
DROP TABLE rede;
DROP TABLE servidor;
DROP TABLE setor;
DROP TABLE usuario;
DROP TABLE empresa;
DROP TABLE allowlist;
DROP TABLE blocklist;
DROP TABLE filterlist;
DROP TABLE waitlist;
DROP TABLE deathLog;
DROP TABLE clima;
DROP TABLE historicoClima;
