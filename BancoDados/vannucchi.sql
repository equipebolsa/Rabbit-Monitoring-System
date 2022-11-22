drop database teste;
create database teste;
use teste;
create table whitelist(
	id int primary key auto_increment,
    nome varchar(100)
);
create table blacklist(
	id int primary key auto_increment,
    nome varchar(100)
);
create table alertaProcesso(
	id int primary key auto_increment,
    nome varchar(100),
    serialNumber varchar(45),
    estado char(1),
    datahora datetime,
    CHECK (estado = 'w' or estado = 'd') -- aceito, recusado, aguardando, concluido
);

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
