-- ----------------------MYSQL

CREATE TABLE whitelist(
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100)
);
CREATE TABLE blacklist(
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100)
);
CREATE TABLE alertaProcesso(
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100)
);
CREATE TABLE filterlist(
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100)
);

-- ----------------------AZURE
CREATE TABLE whitelist(
	id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE blacklist(
	id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE alertaProcesso(
	id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);
CREATE TABLE filterlist(
    id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100)
);



-- ----------------------INSERT FILTER


INSERT INTO filterlist(nome) VALUES 
('python*'),
('kworker*'),
('card0*'),
('cpuhp*'),
('gnome*'),
('gsd-*'),
('gvfs*'),
('idle*'),
('ksoftirqd*'),
('loop*'),
('migration*'),
('rcu*'),
('system*'),
('xdg*'),
('cryptd'),
('evolution-*'),
('ath10k*'),
('gdm*'),
('git*'),
('ibus-*'),
('irq*'),
('iprt*'),
('scsi*'),
('(fwupdmgr)'),
('(sd-pam)'),
('accounts-daemon'),
('acpi_thermal_pm'),
('acpid'),
('apache2'),
('at-spi-bus-launcher'),
('at-spi2-registryd'),
('ata_sff'),
('avahi-daemon'),
('bash'),
('gpg'),
('blkcg_punt_bio'),
('bluetoothd'),
('dbus'),
('cat'),
('catchsegv'),
('cfg80211'),
('evince'),
('grep'),
('gst-plugin-scanner'),
('javaldx'),
('lspci'),
('oosplash'),
('QtWebEngineProcess'),
('R'),
('rsession'),
('soffice.bin'),
('tracker-extract'), 
('tracker-store'),
('charger_manager'),
('chrome_crashpad_handler'),
('colord'),
('cpuUsage.sh'),
('cron'),
('cups-browsed'),
('cupsd'),
('dbus-daemon'),
('dconf-service'),
('devfreq_wq'),
('dio/sda1'),
('ecryptfs-kthrea'),
('edac-poller'),
('ext4-rsv-conver'),
('fwupd'),
('gjs'),
('goa-daemon'),
('goa-identity-service'),
('inet_frag_wq'),
('ipv6_addrconf'),
('jbd2/sda1-8'),
('kauditd'),
('kblockd'),
('kcompactd0'),
('kdevtmpfs'),
('kerneloops'),
('khugepaged'),
('khungtaskd'),
('kintegrityd'),
('kmemstick'),
('krfcommd'),
('QtWebEngineProcess'),
('ksmd'),
('kstrp'),
('kswapd0'),
('kthreadd'),
('kthrotld'),
('md'),
('mld'),
('mm_percpu_wq'),
('ModemManager'),
('nacl_helper'),
('nautilus'),
('netns'),
('networkd-dispat'),
('NetworkManager'),
('node'),
('npm run dev'),
('oom_reaper'),
('org.gnome.Chara'),
('polkitd'),
('pulseaudio'),
('python'),
('rserver'),
('rsyslogd'),
('rtkit-daemon'),
('seahorse'),
('sh'),
('sleep'),
('snap-store'),
('snapd'),
('sqlservr'),
('ssh-agent'),
('switcheroo-control'),
('thermald'),
('tpm_dev_wq'),
('tracker-miner-fs'),
('udisksd'),
('unattended-upgr'),
('update-notifier'),
('upowerd'),
('uuidd'),
('vfio-irqfd-clea'),
('watchdogd'),
('whoopsie'),
('wpa_supplicant'),
('writeback'),
('Xorg'),
('mysqld'),
('mysql-workbench-bin'),
('zswap-shrink');

-- insert into alertaProcesso values (null, itemProcesso['name'], def getMachine_addr(), 'w', now);

-- asduashdaushduashdhasd
select * from whitelist;
select * from blacklist;
truncate blacklist;
select * from alertaProcesso;
truncate alertaProcesso;
update alertaProcesso set estado = 'y' where id = 1;
insert into blacklist values(null,'Tibia.exe');
insert into blacklist values(null,'Spotify.exe');
delete from whitelist where id = 156;
