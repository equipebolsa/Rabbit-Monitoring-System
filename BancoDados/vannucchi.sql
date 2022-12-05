-- ----------------------MYSQL

CREATE TABLE allowlist(
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100)
);
CREATE TABLE blocklist(
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100)
);
CREATE TABLE waitlist(
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100),
    mac CHAR(17),
    cpuProcess VARCHAR(45),
    ramProcess VARCHAR(45),
    cpuMachine VARCHAR(45),
    ramMachine VARCHAR(45)
);
CREATE TABLE filterlist(
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100)
);
CREATE TABLE deathLog(
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100),
    dataHora DATE,
    macAddress CHAR(45)
);

-- ----------------------AZURE
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
insert into blocklist(nome) values ('notepad.exe')
insert into deathLog (nome, dataHora, macAddress) values 
('notepad.exe','2022-12-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-03','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-02','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-02','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-02','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-02','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-02','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-02','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-01','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-01','18:c0:4d:2a:36:d3'),('notepad.exe','2022-12-01','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-30','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-30','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-29','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-29','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-29','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-29','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-29','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-29','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-29','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-29','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-29','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-28','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-28','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-28','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-28','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-28','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-28','18:c0:4d:2a:36:d3'),('notepad.exe','2022-11-28','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3'),('notepad.exe','2022-10-04','18:c0:4d:2a:36:d3');
-- insert into waitlist values (null, itemProcesso['name'], def getMachine_addr(), 'w', now);

