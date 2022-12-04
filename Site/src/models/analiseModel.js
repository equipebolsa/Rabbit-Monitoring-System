var database = require("../database/config");

function mensalJaneiroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalFevereiroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMarcoCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAbrilCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMaioCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJunhoCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJulhoCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAgostoCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalSetembroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalOutubroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalNovembroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalDezembroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

// ---------------------------------------------------------------------------------

function mensalJaneiroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalFevereiroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMarcoRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAbrilRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMaioRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJunhoRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJulhoRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAgostoRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalSetembroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalOutubroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalNovembroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalDezembroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

// -------------------------------------------------------------------------

function mensalJaneiroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalFevereiroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMarcoDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAbrilDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMaioDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJunhoDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJulhoDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAgostoDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalSetembroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalOutubroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalNovembroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalDezembroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-------------------------------------------------------------------------------------

function limiteJaneiroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteFevereiroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMarcoCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAbrilCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMaioCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJunhoCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJulhoCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAgostoCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteSetembroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteOutubroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteNovembroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteDezembroCpuServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-------------------------------------------------------------------------------------

function limiteJaneiroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteFevereiroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMarcoRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAbrilRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMaioRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJunhoRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJulhoRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAgostoRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteSetembroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteOutubroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteNovembroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteDezembroRamServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-----------------------------------------------------------------------------------------------------

function limiteJaneiroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteFevereiroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMarcoDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAbrilDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMaioDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJunhoDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJulhoDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAgostoDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteSetembroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteOutubroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteNovembroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteDezembroDiscoServidor1() {
    var idServidor = 1;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-----------------------------------------------------------------------------------------------------------------------------------

function mensalJaneiroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalFevereiroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMarcoCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAbrilCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMaioCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJunhoCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJulhoCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAgostoCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalSetembroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalOutubroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalNovembroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalDezembroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

// ---------------------------------------------------------------------------------

function mensalJaneiroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalFevereiroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMarcoRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAbrilRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMaioRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJunhoRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJulhoRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAgostoRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalSetembroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalOutubroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalNovembroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalDezembroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

// -------------------------------------------------------------------------

function mensalJaneiroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalFevereiroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMarcoDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAbrilDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMaioDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJunhoDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJulhoDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAgostoDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalSetembroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalOutubroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalNovembroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalDezembroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-------------------------------------------------------------------------------------

function limiteJaneiroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteFevereiroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMarcoCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAbrilCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMaioCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJunhoCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJulhoCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAgostoCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteSetembroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteOutubroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteNovembroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteDezembroCpuServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-------------------------------------------------------------------------------------

function limiteJaneiroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteFevereiroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMarcoRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAbrilRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMaioRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJunhoRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJulhoRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAgostoRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteSetembroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteOutubroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteNovembroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and usoRam >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteDezembroRamServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-----------------------------------------------------------------------------------------------------

function limiteJaneiroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteFevereiroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMarcoDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAbrilDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMaioDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJunhoDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJulhoDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAgostoDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteSetembroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteOutubroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteNovembroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and usoDisco >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteDezembroDiscoServidor2() {
    var idServidor = 2;
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and usoCpu >= 65 and idServidor = ${idServidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}



module.exports = {
    mensalJaneiroCpuServidor1,
    mensalFevereiroCpuServidor1,
    mensalMarcoCpuServidor1,
    mensalAbrilCpuServidor1,
    mensalMaioCpuServidor1,
    mensalJunhoCpuServidor1,
    mensalJulhoCpuServidor1,
    mensalAgostoCpuServidor1,
    mensalSetembroCpuServidor1,
    mensalOutubroCpuServidor1,
    mensalNovembroCpuServidor1,
    mensalDezembroCpuServidor1,
    mensalJaneiroRamServidor1,
    mensalFevereiroRamServidor1,
    mensalMarcoRamServidor1,
    mensalAbrilRamServidor1,
    mensalMaioRamServidor1,
    mensalJunhoRamServidor1,
    mensalJulhoRamServidor1,
    mensalAgostoRamServidor1,
    mensalSetembroRamServidor1,
    mensalOutubroRamServidor1,
    mensalNovembroRamServidor1,
    mensalDezembroRamServidor1,
    mensalJaneiroDiscoServidor1,
    mensalFevereiroDiscoServidor1,
    mensalMarcoDiscoServidor1,
    mensalAbrilDiscoServidor1,
    mensalMaioDiscoServidor1,
    mensalJunhoDiscoServidor1,
    mensalJulhoDiscoServidor1,
    mensalAgostoDiscoServidor1,
    mensalSetembroDiscoServidor1,
    mensalOutubroDiscoServidor1,
    mensalNovembroDiscoServidor1,
    mensalDezembroDiscoServidor1,
    limiteJaneiroCpuServidor1,
    limiteFevereiroCpuServidor1,
    limiteMarcoCpuServidor1,
    limiteAbrilCpuServidor1,
    limiteMaioCpuServidor1,
    limiteJunhoCpuServidor1,
    limiteJulhoCpuServidor1,
    limiteAgostoCpuServidor1,
    limiteSetembroCpuServidor1,
    limiteOutubroCpuServidor1,
    limiteNovembroCpuServidor1,
    limiteDezembroCpuServidor1,
    limiteJaneiroRamServidor1,
    limiteFevereiroRamServidor1,
    limiteMarcoRamServidor1,
    limiteAbrilRamServidor1,
    limiteMaioRamServidor1,
    limiteJunhoRamServidor1,
    limiteJulhoRamServidor1,
    limiteAgostoRamServidor1,
    limiteSetembroRamServidor1,
    limiteOutubroRamServidor1,
    limiteNovembroRamServidor1,
    limiteDezembroRamServidor1,
    limiteJaneiroDiscoServidor1,
    limiteFevereiroDiscoServidor1,
    limiteMarcoDiscoServidor1,
    limiteAbrilDiscoServidor1,
    limiteMaioDiscoServidor1,
    limiteJunhoDiscoServidor1,
    limiteJulhoDiscoServidor1,
    limiteAgostoDiscoServidor1,
    limiteSetembroDiscoServidor1,
    limiteOutubroDiscoServidor1,
    limiteNovembroDiscoServidor1,
    limiteDezembroDiscoServidor1,
    mensalJaneiroCpuServidor2,
    mensalFevereiroCpuServidor2,
    mensalMarcoCpuServidor2,
    mensalAbrilCpuServidor2,
    mensalMaioCpuServidor2,
    mensalJunhoCpuServidor2,
    mensalJulhoCpuServidor2,
    mensalAgostoCpuServidor2,
    mensalSetembroCpuServidor2,
    mensalOutubroCpuServidor2,
    mensalNovembroCpuServidor2,
    mensalDezembroCpuServidor2,
    mensalJaneiroRamServidor2,
    mensalFevereiroRamServidor2,
    mensalMarcoRamServidor2,
    mensalAbrilRamServidor2,
    mensalMaioRamServidor2,
    mensalJunhoRamServidor2,
    mensalJulhoRamServidor2,
    mensalAgostoRamServidor2,
    mensalSetembroRamServidor2,
    mensalOutubroRamServidor2,
    mensalNovembroRamServidor2,
    mensalDezembroRamServidor2,
    mensalJaneiroDiscoServidor2,
    mensalFevereiroDiscoServidor2,
    mensalMarcoDiscoServidor2,
    mensalAbrilDiscoServidor2,
    mensalMaioDiscoServidor2,
    mensalJunhoDiscoServidor2,
    mensalJulhoDiscoServidor2,
    mensalAgostoDiscoServidor2,
    mensalSetembroDiscoServidor2,
    mensalOutubroDiscoServidor2,
    mensalNovembroDiscoServidor2,
    mensalDezembroDiscoServidor2,
    limiteJaneiroCpuServidor2,
    limiteFevereiroCpuServidor2,
    limiteMarcoCpuServidor2,
    limiteAbrilCpuServidor2,
    limiteMaioCpuServidor2,
    limiteJunhoCpuServidor2,
    limiteJulhoCpuServidor2,
    limiteAgostoCpuServidor2,
    limiteSetembroCpuServidor2,
    limiteOutubroCpuServidor2,
    limiteNovembroCpuServidor2,
    limiteDezembroCpuServidor2,
    limiteJaneiroRamServidor2,
    limiteFevereiroRamServidor2,
    limiteMarcoRamServidor2,
    limiteAbrilRamServidor2,
    limiteMaioRamServidor2,
    limiteJunhoRamServidor2,
    limiteJulhoRamServidor2,
    limiteAgostoRamServidor2,
    limiteSetembroRamServidor2,
    limiteOutubroRamServidor2,
    limiteNovembroRamServidor2,
    limiteDezembroRamServidor2,
    limiteJaneiroDiscoServidor2,
    limiteFevereiroDiscoServidor2,
    limiteMarcoDiscoServidor2,
    limiteAbrilDiscoServidor2,
    limiteMaioDiscoServidor2,
    limiteJunhoDiscoServidor2,
    limiteJulhoDiscoServidor2,
    limiteAgostoDiscoServidor2,
    limiteSetembroDiscoServidor2,
    limiteOutubroDiscoServidor2,
    limiteNovembroDiscoServidor2,
    limiteDezembroDiscoServidor2,
    mensalJaneiroCpuServidor3,
    mensalFevereiroCpuServidor3,
    mensalMarcoCpuServidor3,
    mensalAbrilCpuServidor3,
    mensalMaioCpuServidor3,
    mensalJunhoCpuServidor3,
    mensalJulhoCpuServidor3,
    mensalAgostoCpuServidor3,
    mensalSetembroCpuServidor3,
    mensalOutubroCpuServidor3,
    mensalNovembroCpuServidor3,
    mensalDezembroCpuServidor3,
    mensalJaneiroRamServidor3,
    mensalFevereiroRamServidor3,
    mensalMarcoRamServidor3,
    mensalAbrilRamServidor3,
    mensalMaioRamServidor3,
    mensalJunhoRamServidor3,
    mensalJulhoRamServidor3,
    mensalAgostoRamServidor3,
    mensalSetembroRamServidor3,
    mensalOutubroRamServidor3,
    mensalNovembroRamServidor3,
    mensalDezembroRamServidor3,
    mensalJaneiroDiscoServidor3,
    mensalFevereiroDiscoServidor3,
    mensalMarcoDiscoServidor3,
    mensalAbrilDiscoServidor3,
    mensalMaioDiscoServidor3,
    mensalJunhoDiscoServidor3,
    mensalJulhoDiscoServidor3,
    mensalAgostoDiscoServidor3,
    mensalSetembroDiscoServidor3,
    mensalOutubroDiscoServidor3,
    mensalNovembroDiscoServidor3,
    mensalDezembroDiscoServidor3,
    limiteJaneiroCpuServidor3,
    limiteFevereiroCpuServidor3,
    limiteMarcoCpuServidor3,
    limiteAbrilCpuServidor3,
    limiteMaioCpuServidor3,
    limiteJunhoCpuServidor3,
    limiteJulhoCpuServidor3,
    limiteAgostoCpuServidor3,
    limiteSetembroCpuServidor3,
    limiteOutubroCpuServidor3,
    limiteNovembroCpuServidor3,
    limiteDezembroCpuServidor3,
    limiteJaneiroRamServidor3,
    limiteFevereiroRamServidor3,
    limiteMarcoRamServidor3,
    limiteAbrilRamServidor3,
    limiteMaioRamServidor3,
    limiteJunhoRamServidor3,
    limiteJulhoRamServidor3,
    limiteAgostoRamServidor3,
    limiteSetembroRamServidor3,
    limiteOutubroRamServidor3,
    limiteNovembroRamServidor3,
    limiteDezembroRamServidor3,
    limiteJaneiroDiscoServidor3,
    limiteFevereiroDiscoServidor3,
    limiteMarcoDiscoServidor3,
    limiteAbrilDiscoServidor3,
    limiteMaioDiscoServidor3,
    limiteJunhoDiscoServidor3,
    limiteJulhoDiscoServidor3,
    limiteAgostoDiscoServidor3,
    limiteSetembroDiscoServidor3,
    limiteOutubroDiscoServidor3,
    limiteNovembroDiscoServidor3,
    limiteDezembroDiscoServidor3,
    mensalJaneiroCpuServidor4,
    mensalFevereiroCpuServidor4,
    mensalMarcoCpuServidor4,
    mensalAbrilCpuServidor4,
    mensalMaioCpuServidor4,
    mensalJunhoCpuServidor4,
    mensalJulhoCpuServidor4,
    mensalAgostoCpuServidor4,
    mensalSetembroCpuServidor4,
    mensalOutubroCpuServidor4,
    mensalNovembroCpuServidor4,
    mensalDezembroCpuServidor4,
    mensalJaneiroRamServidor4,
    mensalFevereiroRamServidor4,
    mensalMarcoRamServidor4,
    mensalAbrilRamServidor4,
    mensalMaioRamServidor4,
    mensalJunhoRamServidor4,
    mensalJulhoRamServidor4,
    mensalAgostoRamServidor4,
    mensalSetembroRamServidor4,
    mensalOutubroRamServidor4,
    mensalNovembroRamServidor4,
    mensalDezembroRamServidor4,
    mensalJaneiroDiscoServidor4,
    mensalFevereiroDiscoServidor4,
    mensalMarcoDiscoServidor4,
    mensalAbrilDiscoServidor4,
    mensalMaioDiscoServidor4,
    mensalJunhoDiscoServidor4,
    mensalJulhoDiscoServidor4,
    mensalAgostoDiscoServidor4,
    mensalSetembroDiscoServidor4,
    mensalOutubroDiscoServidor4,
    mensalNovembroDiscoServidor4,
    mensalDezembroDiscoServidor4,
    limiteJaneiroCpuServidor4,
    limiteFevereiroCpuServidor4,
    limiteMarcoCpuServidor4,
    limiteAbrilCpuServidor4,
    limiteMaioCpuServidor4,
    limiteJunhoCpuServidor4,
    limiteJulhoCpuServidor4,
    limiteAgostoCpuServidor4,
    limiteSetembroCpuServidor4,
    limiteOutubroCpuServidor4,
    limiteNovembroCpuServidor4,
    limiteDezembroCpuServidor4,
    limiteJaneiroRamServidor4,
    limiteFevereiroRamServidor4,
    limiteMarcoRamServidor4,
    limiteAbrilRamServidor4,
    limiteMaioRamServidor4,
    limiteJunhoRamServidor4,
    limiteJulhoRamServidor4,
    limiteAgostoRamServidor4,
    limiteSetembroRamServidor4,
    limiteOutubroRamServidor4,
    limiteNovembroRamServidor4,
    limiteDezembroRamServidor4,
    limiteJaneiroDiscoServidor4,
    limiteFevereiroDiscoServidor4,
    limiteMarcoDiscoServidor4,
    limiteAbrilDiscoServidor4,
    limiteMaioDiscoServidor4,
    limiteJunhoDiscoServidor4,
    limiteJulhoDiscoServidor4,
    limiteAgostoDiscoServidor4,
    limiteSetembroDiscoServidor4,
    limiteOutubroDiscoServidor4,
    limiteNovembroDiscoServidor4,
    limiteDezembroDiscoServidor4,
    mensalJaneiroCpuServidor5,
    mensalFevereiroCpuServidor5,
    mensalMarcoCpuServidor5,
    mensalAbrilCpuServidor5,
    mensalMaioCpuServidor5,
    mensalJunhoCpuServidor5,
    mensalJulhoCpuServidor5,
    mensalAgostoCpuServidor5,
    mensalSetembroCpuServidor5,
    mensalOutubroCpuServidor5,
    mensalNovembroCpuServidor5,
    mensalDezembroCpuServidor5,
    mensalJaneiroRamServidor5,
    mensalFevereiroRamServidor5,
    mensalMarcoRamServidor5,
    mensalAbrilRamServidor5,
    mensalMaioRamServidor5,
    mensalJunhoRamServidor5,
    mensalJulhoRamServidor5,
    mensalAgostoRamServidor5,
    mensalSetembroRamServidor5,
    mensalOutubroRamServidor5,
    mensalNovembroRamServidor5,
    mensalDezembroRamServidor5,
    mensalJaneiroDiscoServidor5,
    mensalFevereiroDiscoServidor5,
    mensalMarcoDiscoServidor5,
    mensalAbrilDiscoServidor5,
    mensalMaioDiscoServidor5,
    mensalJunhoDiscoServidor5,
    mensalJulhoDiscoServidor5,
    mensalAgostoDiscoServidor5,
    mensalSetembroDiscoServidor5,
    mensalOutubroDiscoServidor5,
    mensalNovembroDiscoServidor5,
    mensalDezembroDiscoServidor5,
    limiteJaneiroCpuServidor5,
    limiteFevereiroCpuServidor5,
    limiteMarcoCpuServidor5,
    limiteAbrilCpuServidor5,
    limiteMaioCpuServidor5,
    limiteJunhoCpuServidor5,
    limiteJulhoCpuServidor5,
    limiteAgostoCpuServidor5,
    limiteSetembroCpuServidor5,
    limiteOutubroCpuServidor5,
    limiteNovembroCpuServidor5,
    limiteDezembroCpuServidor5,
    limiteJaneiroRamServidor5,
    limiteFevereiroRamServidor5,
    limiteMarcoRamServidor5,
    limiteAbrilRamServidor5,
    limiteMaioRamServidor5,
    limiteJunhoRamServidor5,
    limiteJulhoRamServidor5,
    limiteAgostoRamServidor5,
    limiteSetembroRamServidor5,
    limiteOutubroRamServidor5,
    limiteNovembroRamServidor5,
    limiteDezembroRamServidor5,
    limiteJaneiroDiscoServidor5,
    limiteFevereiroDiscoServidor5,
    limiteMarcoDiscoServidor5,
    limiteAbrilDiscoServidor5,
    limiteMaioDiscoServidor5,
    limiteJunhoDiscoServidor5,
    limiteJulhoDiscoServidor5,
    limiteAgostoDiscoServidor5,
    limiteSetembroDiscoServidor5,
    limiteOutubroDiscoServidor5,
    limiteNovembroDiscoServidor5,
    limiteDezembroDiscoServidor5,
    mensalJaneiroCpuServidor6,
    mensalFevereiroCpuServidor6,
    mensalMarcoCpuServidor6,
    mensalAbrilCpuServidor6,
    mensalMaioCpuServidor6,
    mensalJunhoCpuServidor6,
    mensalJulhoCpuServidor6,
    mensalAgostoCpuServidor6,
    mensalSetembroCpuServidor6,
    mensalOutubroCpuServidor6,
    mensalNovembroCpuServidor6,
    mensalDezembroCpuServidor6,
    mensalJaneiroRamServidor6,
    mensalFevereiroRamServidor6,
    mensalMarcoRamServidor6,
    mensalAbrilRamServidor6,
    mensalMaioRamServidor6,
    mensalJunhoRamServidor6,
    mensalJulhoRamServidor6,
    mensalAgostoRamServidor6,
    mensalSetembroRamServidor6,
    mensalOutubroRamServidor6,
    mensalNovembroRamServidor6,
    mensalDezembroRamServidor6,
    mensalJaneiroDiscoServidor6,
    mensalFevereiroDiscoServidor6,
    mensalMarcoDiscoServidor6,
    mensalAbrilDiscoServidor6,
    mensalMaioDiscoServidor6,
    mensalJunhoDiscoServidor6,
    mensalJulhoDiscoServidor6,
    mensalAgostoDiscoServidor6,
    mensalSetembroDiscoServidor6,
    mensalOutubroDiscoServidor6,
    mensalNovembroDiscoServidor6,
    mensalDezembroDiscoServidor6,
    limiteJaneiroCpuServidor6,
    limiteFevereiroCpuServidor6,
    limiteMarcoCpuServidor6,
    limiteAbrilCpuServidor6,
    limiteMaioCpuServidor6,
    limiteJunhoCpuServidor6,
    limiteJulhoCpuServidor6,
    limiteAgostoCpuServidor6,
    limiteSetembroCpuServidor6,
    limiteOutubroCpuServidor6,
    limiteNovembroCpuServidor6,
    limiteDezembroCpuServidor6,
    limiteJaneiroRamServidor6,
    limiteFevereiroRamServidor6,
    limiteMarcoRamServidor6,
    limiteAbrilRamServidor6,
    limiteMaioRamServidor6,
    limiteJunhoRamServidor6,
    limiteJulhoRamServidor6,
    limiteAgostoRamServidor6,
    limiteSetembroRamServidor6,
    limiteOutubroRamServidor6,
    limiteNovembroRamServidor6,
    limiteDezembroRamServidor6,
    limiteJaneiroDiscoServidor6,
    limiteFevereiroDiscoServidor6,
    limiteMarcoDiscoServidor6,
    limiteAbrilDiscoServidor6,
    limiteMaioDiscoServidor6,
    limiteJunhoDiscoServidor6,
    limiteJulhoDiscoServidor6,
    limiteAgostoDiscoServidor6,
    limiteSetembroDiscoServidor6,
    limiteOutubroDiscoServidor6,
    limiteNovembroDiscoServidor6,
    limiteDezembroDiscoServidor6,
    mensalJaneiroCpuServidor7,
    mensalFevereiroCpuServidor7,
    mensalMarcoCpuServidor7,
    mensalAbrilCpuServidor7,
    mensalMaioCpuServidor7,
    mensalJunhoCpuServidor7,
    mensalJulhoCpuServidor7,
    mensalAgostoCpuServidor7,
    mensalSetembroCpuServidor7,
    mensalOutubroCpuServidor7,
    mensalNovembroCpuServidor7,
    mensalDezembroCpuServidor7,
    mensalJaneiroRamServidor7,
    mensalFevereiroRamServidor7,
    mensalMarcoRamServidor7,
    mensalAbrilRamServidor7,
    mensalMaioRamServidor7,
    mensalJunhoRamServidor7,
    mensalJulhoRamServidor7,
    mensalAgostoRamServidor7,
    mensalSetembroRamServidor7,
    mensalOutubroRamServidor7,
    mensalNovembroRamServidor7,
    mensalDezembroRamServidor7,
    mensalJaneiroDiscoServidor7,
    mensalFevereiroDiscoServidor7,
    mensalMarcoDiscoServidor7,
    mensalAbrilDiscoServidor7,
    mensalMaioDiscoServidor7,
    mensalJunhoDiscoServidor7,
    mensalJulhoDiscoServidor7,
    mensalAgostoDiscoServidor7,
    mensalSetembroDiscoServidor7,
    mensalOutubroDiscoServidor7,
    mensalNovembroDiscoServidor7,
    mensalDezembroDiscoServidor7,
    limiteJaneiroCpuServidor7,
    limiteFevereiroCpuServidor7,
    limiteMarcoCpuServidor7,
    limiteAbrilCpuServidor7,
    limiteMaioCpuServidor7,
    limiteJunhoCpuServidor7,
    limiteJulhoCpuServidor7,
    limiteAgostoCpuServidor7,
    limiteSetembroCpuServidor7,
    limiteOutubroCpuServidor7,
    limiteNovembroCpuServidor7,
    limiteDezembroCpuServidor7,
    limiteJaneiroRamServidor7,
    limiteFevereiroRamServidor7,
    limiteMarcoRamServidor7,
    limiteAbrilRamServidor7,
    limiteMaioRamServidor7,
    limiteJunhoRamServidor7,
    limiteJulhoRamServidor7,
    limiteAgostoRamServidor7,
    limiteSetembroRamServidor7,
    limiteOutubroRamServidor7,
    limiteNovembroRamServidor7,
    limiteDezembroRamServidor7,
    limiteJaneiroDiscoServidor7,
    limiteFevereiroDiscoServidor7,
    limiteMarcoDiscoServidor7,
    limiteAbrilDiscoServidor7,
    limiteMaioDiscoServidor7,
    limiteJunhoDiscoServidor7,
    limiteJulhoDiscoServidor7,
    limiteAgostoDiscoServidor7,
    limiteSetembroDiscoServidor7,
    limiteOutubroDiscoServidor7,
    limiteNovembroDiscoServidor7,
    limiteDezembroDiscoServidor7,
    mensalJaneiroCpuServidor8,
    mensalFevereiroCpuServidor8,
    mensalMarcoCpuServidor8,
    mensalAbrilCpuServidor8,
    mensalMaioCpuServidor8,
    mensalJunhoCpuServidor8,
    mensalJulhoCpuServidor8,
    mensalAgostoCpuServidor8,
    mensalSetembroCpuServidor8,
    mensalOutubroCpuServidor8,
    mensalNovembroCpuServidor8,
    mensalDezembroCpuServidor8,
    mensalJaneiroRamServidor8,
    mensalFevereiroRamServidor8,
    mensalMarcoRamServidor8,
    mensalAbrilRamServidor8,
    mensalMaioRamServidor8,
    mensalJunhoRamServidor8,
    mensalJulhoRamServidor8,
    mensalAgostoRamServidor8,
    mensalSetembroRamServidor8,
    mensalOutubroRamServidor8,
    mensalNovembroRamServidor8,
    mensalDezembroRamServidor8,
    mensalJaneiroDiscoServidor8,
    mensalFevereiroDiscoServidor8,
    mensalMarcoDiscoServidor8,
    mensalAbrilDiscoServidor8,
    mensalMaioDiscoServidor8,
    mensalJunhoDiscoServidor8,
    mensalJulhoDiscoServidor8,
    mensalAgostoDiscoServidor8,
    mensalSetembroDiscoServidor8,
    mensalOutubroDiscoServidor8,
    mensalNovembroDiscoServidor8,
    mensalDezembroDiscoServidor8,
    limiteJaneiroCpuServidor8,
    limiteFevereiroCpuServidor8,
    limiteMarcoCpuServidor8,
    limiteAbrilCpuServidor8,
    limiteMaioCpuServidor8,
    limiteJunhoCpuServidor8,
    limiteJulhoCpuServidor8,
    limiteAgostoCpuServidor8,
    limiteSetembroCpuServidor8,
    limiteOutubroCpuServidor8,
    limiteNovembroCpuServidor8,
    limiteDezembroCpuServidor8,
    limiteJaneiroRamServidor8,
    limiteFevereiroRamServidor8,
    limiteMarcoRamServidor8,
    limiteAbrilRamServidor8,
    limiteMaioRamServidor8,
    limiteJunhoRamServidor8,
    limiteJulhoRamServidor8,
    limiteAgostoRamServidor8,
    limiteSetembroRamServidor8,
    limiteOutubroRamServidor8,
    limiteNovembroRamServidor8,
    limiteDezembroRamServidor8,
    limiteJaneiroDiscoServidor8,
    limiteFevereiroDiscoServidor8,
    limiteMarcoDiscoServidor8,
    limiteAbrilDiscoServidor8,
    limiteMaioDiscoServidor8,
    limiteJunhoDiscoServidor8,
    limiteJulhoDiscoServidor8,
    limiteAgostoDiscoServidor8,
    limiteSetembroDiscoServidor8,
    limiteOutubroDiscoServidor8,
    limiteNovembroDiscoServidor8,
    limiteDezembroDiscoServidor8,
    mensalJaneiroCpuServidor9,
    mensalFevereiroCpuServidor9,
    mensalMarcoCpuServidor9,
    mensalAbrilCpuServidor9,
    mensalMaioCpuServidor9,
    mensalJunhoCpuServidor9,
    mensalJulhoCpuServidor9,
    mensalAgostoCpuServidor9,
    mensalSetembroCpuServidor9,
    mensalOutubroCpuServidor9,
    mensalNovembroCpuServidor9,
    mensalDezembroCpuServidor9,
    mensalJaneiroRamServidor9,
    mensalFevereiroRamServidor9,
    mensalMarcoRamServidor9,
    mensalAbrilRamServidor9,
    mensalMaioRamServidor9,
    mensalJunhoRamServidor9,
    mensalJulhoRamServidor9,
    mensalAgostoRamServidor9,
    mensalSetembroRamServidor9,
    mensalOutubroRamServidor9,
    mensalNovembroRamServidor9,
    mensalDezembroRamServidor9,
    mensalJaneiroDiscoServidor9,
    mensalFevereiroDiscoServidor9,
    mensalMarcoDiscoServidor9,
    mensalAbrilDiscoServidor9,
    mensalMaioDiscoServidor9,
    mensalJunhoDiscoServidor9,
    mensalJulhoDiscoServidor9,
    mensalAgostoDiscoServidor9,
    mensalSetembroDiscoServidor9,
    mensalOutubroDiscoServidor9,
    mensalNovembroDiscoServidor9,
    mensalDezembroDiscoServidor9,
    limiteJaneiroCpuServidor9,
    limiteFevereiroCpuServidor9,
    limiteMarcoCpuServidor9,
    limiteAbrilCpuServidor9,
    limiteMaioCpuServidor9,
    limiteJunhoCpuServidor9,
    limiteJulhoCpuServidor9,
    limiteAgostoCpuServidor9,
    limiteSetembroCpuServidor9,
    limiteOutubroCpuServidor9,
    limiteNovembroCpuServidor9,
    limiteDezembroCpuServidor9,
    limiteJaneiroRamServidor9,
    limiteFevereiroRamServidor9,
    limiteMarcoRamServidor9,
    limiteAbrilRamServidor9,
    limiteMaioRamServidor9,
    limiteJunhoRamServidor9,
    limiteJulhoRamServidor9,
    limiteAgostoRamServidor9,
    limiteSetembroRamServidor9,
    limiteOutubroRamServidor9,
    limiteNovembroRamServidor9,
    limiteDezembroRamServidor9,
    limiteJaneiroDiscoServidor9,
    limiteFevereiroDiscoServidor9,
    limiteMarcoDiscoServidor9,
    limiteAbrilDiscoServidor9,
    limiteMaioDiscoServidor9,
    limiteJunhoDiscoServidor9,
    limiteJulhoDiscoServidor9,
    limiteAgostoDiscoServidor9,
    limiteSetembroDiscoServidor9,
    limiteOutubroDiscoServidor9,
    limiteNovembroDiscoServidor9,
    limiteDezembroDiscoServidor9,
    mensalJaneiroCpuServidor10,
    mensalFevereiroCpuServidor10,
    mensalMarcoCpuServidor10,
    mensalAbrilCpuServidor10,
    mensalMaioCpuServidor10,
    mensalJunhoCpuServidor10,
    mensalJulhoCpuServidor10,
    mensalAgostoCpuServidor10,
    mensalSetembroCpuServidor10,
    mensalOutubroCpuServidor10,
    mensalNovembroCpuServidor10,
    mensalDezembroCpuServidor10,
    mensalJaneiroRamServidor10,
    mensalFevereiroRamServidor10,
    mensalMarcoRamServidor10,
    mensalAbrilRamServidor10,
    mensalMaioRamServidor10,
    mensalJunhoRamServidor10,
    mensalJulhoRamServidor10,
    mensalAgostoRamServidor10,
    mensalSetembroRamServidor10,
    mensalOutubroRamServidor10,
    mensalNovembroRamServidor10,
    mensalDezembroRamServidor10,
    mensalJaneiroDiscoServidor10,
    mensalFevereiroDiscoServidor10,
    mensalMarcoDiscoServidor10,
    mensalAbrilDiscoServidor10,
    mensalMaioDiscoServidor10,
    mensalJunhoDiscoServidor10,
    mensalJulhoDiscoServidor10,
    mensalAgostoDiscoServidor10,
    mensalSetembroDiscoServidor10,
    mensalOutubroDiscoServidor10,
    mensalNovembroDiscoServidor10,
    mensalDezembroDiscoServidor10,
    limiteJaneiroCpuServidor10,
    limiteFevereiroCpuServidor10,
    limiteMarcoCpuServidor10,
    limiteAbrilCpuServidor10,
    limiteMaioCpuServidor10,
    limiteJunhoCpuServidor10,
    limiteJulhoCpuServidor10,
    limiteAgostoCpuServidor10,
    limiteSetembroCpuServidor10,
    limiteOutubroCpuServidor10,
    limiteNovembroCpuServidor10,
    limiteDezembroCpuServidor10,
    limiteJaneiroRamServidor10,
    limiteFevereiroRamServidor10,
    limiteMarcoRamServidor10,
    limiteAbrilRamServidor10,
    limiteMaioRamServidor10,
    limiteJunhoRamServidor10,
    limiteJulhoRamServidor10,
    limiteAgostoRamServidor10,
    limiteSetembroRamServidor10,
    limiteOutubroRamServidor10,
    limiteNovembroRamServidor10,
    limiteDezembroRamServidor10,
    limiteJaneiroDiscoServidor10,
    limiteFevereiroDiscoServidor10,
    limiteMarcoDiscoServidor10,
    limiteAbrilDiscoServidor10,
    limiteMaioDiscoServidor10,
    limiteJunhoDiscoServidor10,
    limiteJulhoDiscoServidor10,
    limiteAgostoDiscoServidor10,
    limiteSetembroDiscoServidor10,
    limiteOutubroDiscoServidor10,
    limiteNovembroDiscoServidor10,
    limiteDezembroDiscoServidor10,
    mensalJaneiroCpuServidor11,
    mensalFevereiroCpuServidor11,
    mensalMarcoCpuServidor11,
    mensalAbrilCpuServidor11,
    mensalMaioCpuServidor11,
    mensalJunhoCpuServidor11,
    mensalJulhoCpuServidor11,
    mensalAgostoCpuServidor11,
    mensalSetembroCpuServidor11,
    mensalOutubroCpuServidor11,
    mensalNovembroCpuServidor11,
    mensalDezembroCpuServidor11,
    mensalJaneiroRamServidor11,
    mensalFevereiroRamServidor11,
    mensalMarcoRamServidor11,
    mensalAbrilRamServidor11,
    mensalMaioRamServidor11,
    mensalJunhoRamServidor11,
    mensalJulhoRamServidor11,
    mensalAgostoRamServidor11,
    mensalSetembroRamServidor11,
    mensalOutubroRamServidor11,
    mensalNovembroRamServidor11,
    mensalDezembroRamServidor11,
    mensalJaneiroDiscoServidor11,
    mensalFevereiroDiscoServidor11,
    mensalMarcoDiscoServidor11,
    mensalAbrilDiscoServidor11,
    mensalMaioDiscoServidor11,
    mensalJunhoDiscoServidor11,
    mensalJulhoDiscoServidor11,
    mensalAgostoDiscoServidor11,
    mensalSetembroDiscoServidor11,
    mensalOutubroDiscoServidor11,
    mensalNovembroDiscoServidor11,
    mensalDezembroDiscoServidor11,
    limiteJaneiroCpuServidor11,
    limiteFevereiroCpuServidor11,
    limiteMarcoCpuServidor11,
    limiteAbrilCpuServidor11,
    limiteMaioCpuServidor11,
    limiteJunhoCpuServidor11,
    limiteJulhoCpuServidor11,
    limiteAgostoCpuServidor11,
    limiteSetembroCpuServidor11,
    limiteOutubroCpuServidor11,
    limiteNovembroCpuServidor11,
    limiteDezembroCpuServidor11,
    limiteJaneiroRamServidor11,
    limiteFevereiroRamServidor11,
    limiteMarcoRamServidor11,
    limiteAbrilRamServidor11,
    limiteMaioRamServidor11,
    limiteJunhoRamServidor11,
    limiteJulhoRamServidor11,
    limiteAgostoRamServidor11,
    limiteSetembroRamServidor11,
    limiteOutubroRamServidor11,
    limiteNovembroRamServidor11,
    limiteDezembroRamServidor11,
    limiteJaneiroDiscoServidor11,
    limiteFevereiroDiscoServidor11,
    limiteMarcoDiscoServidor11,
    limiteAbrilDiscoServidor11,
    limiteMaioDiscoServidor11,
    limiteJunhoDiscoServidor11,
    limiteJulhoDiscoServidor11,
    limiteAgostoDiscoServidor11,
    limiteSetembroDiscoServidor11,
    limiteOutubroDiscoServidor11,
    limiteNovembroDiscoServidor11,
    limiteDezembroDiscoServidor11,
    mensalJaneiroCpuServidor12,
    mensalFevereiroCpuServidor12,
    mensalMarcoCpuServidor12,
    mensalAbrilCpuServidor12,
    mensalMaioCpuServidor12,
    mensalJunhoCpuServidor12,
    mensalJulhoCpuServidor12,
    mensalAgostoCpuServidor12,
    mensalSetembroCpuServidor12,
    mensalOutubroCpuServidor12,
    mensalNovembroCpuServidor12,
    mensalDezembroCpuServidor12,
    mensalJaneiroRamServidor12,
    mensalFevereiroRamServidor12,
    mensalMarcoRamServidor12,
    mensalAbrilRamServidor12,
    mensalMaioRamServidor12,
    mensalJunhoRamServidor12,
    mensalJulhoRamServidor12,
    mensalAgostoRamServidor12,
    mensalSetembroRamServidor12,
    mensalOutubroRamServidor12,
    mensalNovembroRamServidor12,
    mensalDezembroRamServidor12,
    mensalJaneiroDiscoServidor12,
    mensalFevereiroDiscoServidor12,
    mensalMarcoDiscoServidor12,
    mensalAbrilDiscoServidor12,
    mensalMaioDiscoServidor12,
    mensalJunhoDiscoServidor12,
    mensalJulhoDiscoServidor12,
    mensalAgostoDiscoServidor12,
    mensalSetembroDiscoServidor12,
    mensalOutubroDiscoServidor12,
    mensalNovembroDiscoServidor12,
    mensalDezembroDiscoServidor12,
    limiteJaneiroCpuServidor12,
    limiteFevereiroCpuServidor12,
    limiteMarcoCpuServidor12,
    limiteAbrilCpuServidor12,
    limiteMaioCpuServidor12,
    limiteJunhoCpuServidor12,
    limiteJulhoCpuServidor12,
    limiteAgostoCpuServidor12,
    limiteSetembroCpuServidor12,
    limiteOutubroCpuServidor12,
    limiteNovembroCpuServidor12,
    limiteDezembroCpuServidor12,
    limiteJaneiroRamServidor12,
    limiteFevereiroRamServidor12,
    limiteMarcoRamServidor12,
    limiteAbrilRamServidor12,
    limiteMaioRamServidor12,
    limiteJunhoRamServidor12,
    limiteJulhoRamServidor12,
    limiteAgostoRamServidor12,
    limiteSetembroRamServidor12,
    limiteOutubroRamServidor12,
    limiteNovembroRamServidor12,
    limiteDezembroRamServidor12,
    limiteJaneiroDiscoServidor12,
    limiteFevereiroDiscoServidor12,
    limiteMarcoDiscoServidor12,
    limiteAbrilDiscoServidor12,
    limiteMaioDiscoServidor12,
    limiteJunhoDiscoServidor12,
    limiteJulhoDiscoServidor12,
    limiteAgostoDiscoServidor12,
    limiteSetembroDiscoServidor12,
    limiteOutubroDiscoServidor12,
    limiteNovembroDiscoServidor12,
    limiteDezembroDiscoServidor12,
    mensalJaneiroCpuServidor13,
    mensalFevereiroCpuServidor13,
    mensalMarcoCpuServidor13,
    mensalAbrilCpuServidor13,
    mensalMaioCpuServidor13,
    mensalJunhoCpuServidor13,
    mensalJulhoCpuServidor13,
    mensalAgostoCpuServidor13,
    mensalSetembroCpuServidor13,
    mensalOutubroCpuServidor13,
    mensalNovembroCpuServidor13,
    mensalDezembroCpuServidor13,
    mensalJaneiroRamServidor13,
    mensalFevereiroRamServidor13,
    mensalMarcoRamServidor13,
    mensalAbrilRamServidor13,
    mensalMaioRamServidor13,
    mensalJunhoRamServidor13,
    mensalJulhoRamServidor13,
    mensalAgostoRamServidor13,
    mensalSetembroRamServidor13,
    mensalOutubroRamServidor13,
    mensalNovembroRamServidor13,
    mensalDezembroRamServidor13,
    mensalJaneiroDiscoServidor13,
    mensalFevereiroDiscoServidor13,
    mensalMarcoDiscoServidor13,
    mensalAbrilDiscoServidor13,
    mensalMaioDiscoServidor13,
    mensalJunhoDiscoServidor13,
    mensalJulhoDiscoServidor13,
    mensalAgostoDiscoServidor13,
    mensalSetembroDiscoServidor13,
    mensalOutubroDiscoServidor13,
    mensalNovembroDiscoServidor13,
    mensalDezembroDiscoServidor13,
    limiteJaneiroCpuServidor13,
    limiteFevereiroCpuServidor13,
    limiteMarcoCpuServidor13,
    limiteAbrilCpuServidor13,
    limiteMaioCpuServidor13,
    limiteJunhoCpuServidor13,
    limiteJulhoCpuServidor13,
    limiteAgostoCpuServidor13,
    limiteSetembroCpuServidor13,
    limiteOutubroCpuServidor13,
    limiteNovembroCpuServidor13,
    limiteDezembroCpuServidor13,
    limiteJaneiroRamServidor13,
    limiteFevereiroRamServidor13,
    limiteMarcoRamServidor13,
    limiteAbrilRamServidor13,
    limiteMaioRamServidor13,
    limiteJunhoRamServidor13,
    limiteJulhoRamServidor13,
    limiteAgostoRamServidor13,
    limiteSetembroRamServidor13,
    limiteOutubroRamServidor13,
    limiteNovembroRamServidor13,
    limiteDezembroRamServidor13,
    limiteJaneiroDiscoServidor13,
    limiteFevereiroDiscoServidor13,
    limiteMarcoDiscoServidor13,
    limiteAbrilDiscoServidor13,
    limiteMaioDiscoServidor13,
    limiteJunhoDiscoServidor13,
    limiteJulhoDiscoServidor13,
    limiteAgostoDiscoServidor13,
    limiteSetembroDiscoServidor13,
    limiteOutubroDiscoServidor13,
    limiteNovembroDiscoServidor13,
    limiteDezembroDiscoServidor13,
    mensalJaneiroCpuServidor14,
    mensalFevereiroCpuServidor14,
    mensalMarcoCpuServidor14,
    mensalAbrilCpuServidor14,
    mensalMaioCpuServidor14,
    mensalJunhoCpuServidor14,
    mensalJulhoCpuServidor14,
    mensalAgostoCpuServidor14,
    mensalSetembroCpuServidor14,
    mensalOutubroCpuServidor14,
    mensalNovembroCpuServidor14,
    mensalDezembroCpuServidor14,
    mensalJaneiroRamServidor14,
    mensalFevereiroRamServidor14,
    mensalMarcoRamServidor14,
    mensalAbrilRamServidor14,
    mensalMaioRamServidor14,
    mensalJunhoRamServidor14,
    mensalJulhoRamServidor14,
    mensalAgostoRamServidor14,
    mensalSetembroRamServidor14,
    mensalOutubroRamServidor14,
    mensalNovembroRamServidor14,
    mensalDezembroRamServidor14,
    mensalJaneiroDiscoServidor14,
    mensalFevereiroDiscoServidor14,
    mensalMarcoDiscoServidor14,
    mensalAbrilDiscoServidor14,
    mensalMaioDiscoServidor14,
    mensalJunhoDiscoServidor14,
    mensalJulhoDiscoServidor14,
    mensalAgostoDiscoServidor14,
    mensalSetembroDiscoServidor14,
    mensalOutubroDiscoServidor14,
    mensalNovembroDiscoServidor14,
    mensalDezembroDiscoServidor14,
    limiteJaneiroCpuServidor14,
    limiteFevereiroCpuServidor14,
    limiteMarcoCpuServidor14,
    limiteAbrilCpuServidor14,
    limiteMaioCpuServidor14,
    limiteJunhoCpuServidor14,
    limiteJulhoCpuServidor14,
    limiteAgostoCpuServidor14,
    limiteSetembroCpuServidor14,
    limiteOutubroCpuServidor14,
    limiteNovembroCpuServidor14,
    limiteDezembroCpuServidor14,
    limiteJaneiroRamServidor14,
    limiteFevereiroRamServidor14,
    limiteMarcoRamServidor14,
    limiteAbrilRamServidor14,
    limiteMaioRamServidor14,
    limiteJunhoRamServidor14,
    limiteJulhoRamServidor14,
    limiteAgostoRamServidor14,
    limiteSetembroRamServidor14,
    limiteOutubroRamServidor14,
    limiteNovembroRamServidor14,
    limiteDezembroRamServidor14,
    limiteJaneiroDiscoServidor14,
    limiteFevereiroDiscoServidor14,
    limiteMarcoDiscoServidor14,
    limiteAbrilDiscoServidor14,
    limiteMaioDiscoServidor14,
    limiteJunhoDiscoServidor14,
    limiteJulhoDiscoServidor14,
    limiteAgostoDiscoServidor14,
    limiteSetembroDiscoServidor14,
    limiteOutubroDiscoServidor14,
    limiteNovembroDiscoServidor14,
    limiteDezembroDiscoServidor14,
    mensalJaneiroCpuServidor15,
    mensalFevereiroCpuServidor15,
    mensalMarcoCpuServidor15,
    mensalAbrilCpuServidor15,
    mensalMaioCpuServidor15,
    mensalJunhoCpuServidor15,
    mensalJulhoCpuServidor15,
    mensalAgostoCpuServidor15,
    mensalSetembroCpuServidor15,
    mensalOutubroCpuServidor15,
    mensalNovembroCpuServidor15,
    mensalDezembroCpuServidor15,
    mensalJaneiroRamServidor15,
    mensalFevereiroRamServidor15,
    mensalMarcoRamServidor15,
    mensalAbrilRamServidor15,
    mensalMaioRamServidor15,
    mensalJunhoRamServidor15,
    mensalJulhoRamServidor15,
    mensalAgostoRamServidor15,
    mensalSetembroRamServidor15,
    mensalOutubroRamServidor15,
    mensalNovembroRamServidor15,
    mensalDezembroRamServidor15,
    mensalJaneiroDiscoServidor15,
    mensalFevereiroDiscoServidor15,
    mensalMarcoDiscoServidor15,
    mensalAbrilDiscoServidor15,
    mensalMaioDiscoServidor15,
    mensalJunhoDiscoServidor15,
    mensalJulhoDiscoServidor15,
    mensalAgostoDiscoServidor15,
    mensalSetembroDiscoServidor15,
    mensalOutubroDiscoServidor15,
    mensalNovembroDiscoServidor15,
    mensalDezembroDiscoServidor15,
    limiteJaneiroCpuServidor15,
    limiteFevereiroCpuServidor15,
    limiteMarcoCpuServidor15,
    limiteAbrilCpuServidor15,
    limiteMaioCpuServidor15,
    limiteJunhoCpuServidor15,
    limiteJulhoCpuServidor15,
    limiteAgostoCpuServidor15,
    limiteSetembroCpuServidor15,
    limiteOutubroCpuServidor15,
    limiteNovembroCpuServidor15,
    limiteDezembroCpuServidor15,
    limiteJaneiroRamServidor15,
    limiteFevereiroRamServidor15,
    limiteMarcoRamServidor15,
    limiteAbrilRamServidor15,
    limiteMaioRamServidor15,
    limiteJunhoRamServidor15,
    limiteJulhoRamServidor15,
    limiteAgostoRamServidor15,
    limiteSetembroRamServidor15,
    limiteOutubroRamServidor15,
    limiteNovembroRamServidor15,
    limiteDezembroRamServidor15,
    limiteJaneiroDiscoServidor15,
    limiteFevereiroDiscoServidor15,
    limiteMarcoDiscoServidor15,
    limiteAbrilDiscoServidor15,
    limiteMaioDiscoServidor15,
    limiteJunhoDiscoServidor15,
    limiteJulhoDiscoServidor15,
    limiteAgostoDiscoServidor15,
    limiteSetembroDiscoServidor15,
    limiteOutubroDiscoServidor15,
    limiteNovembroDiscoServidor15,
    limiteDezembroDiscoServidor15,
    mensalJaneiroCpuServidor16,
    mensalFevereiroCpuServidor16,
    mensalMarcoCpuServidor16,
    mensalAbrilCpuServidor16,
    mensalMaioCpuServidor16,
    mensalJunhoCpuServidor16,
    mensalJulhoCpuServidor16,
    mensalAgostoCpuServidor16,
    mensalSetembroCpuServidor16,
    mensalOutubroCpuServidor16,
    mensalNovembroCpuServidor16,
    mensalDezembroCpuServidor16,
    mensalJaneiroRamServidor16,
    mensalFevereiroRamServidor16,
    mensalMarcoRamServidor16,
    mensalAbrilRamServidor16,
    mensalMaioRamServidor16,
    mensalJunhoRamServidor16,
    mensalJulhoRamServidor16,
    mensalAgostoRamServidor16,
    mensalSetembroRamServidor16,
    mensalOutubroRamServidor16,
    mensalNovembroRamServidor16,
    mensalDezembroRamServidor16,
    mensalJaneiroDiscoServidor16,
    mensalFevereiroDiscoServidor16,
    mensalMarcoDiscoServidor16,
    mensalAbrilDiscoServidor16,
    mensalMaioDiscoServidor16,
    mensalJunhoDiscoServidor16,
    mensalJulhoDiscoServidor16,
    mensalAgostoDiscoServidor16,
    mensalSetembroDiscoServidor16,
    mensalOutubroDiscoServidor16,
    mensalNovembroDiscoServidor16,
    mensalDezembroDiscoServidor16,
    limiteJaneiroCpuServidor16,
    limiteFevereiroCpuServidor16,
    limiteMarcoCpuServidor16,
    limiteAbrilCpuServidor16,
    limiteMaioCpuServidor16,
    limiteJunhoCpuServidor16,
    limiteJulhoCpuServidor16,
    limiteAgostoCpuServidor16,
    limiteSetembroCpuServidor16,
    limiteOutubroCpuServidor16,
    limiteNovembroCpuServidor16,
    limiteDezembroCpuServidor16,
    limiteJaneiroRamServidor16,
    limiteFevereiroRamServidor16,
    limiteMarcoRamServidor16,
    limiteAbrilRamServidor16,
    limiteMaioRamServidor16,
    limiteJunhoRamServidor16,
    limiteJulhoRamServidor16,
    limiteAgostoRamServidor16,
    limiteSetembroRamServidor16,
    limiteOutubroRamServidor16,
    limiteNovembroRamServidor16,
    limiteDezembroRamServidor16,
    limiteJaneiroDiscoServidor16,
    limiteFevereiroDiscoServidor16,
    limiteMarcoDiscoServidor16,
    limiteAbrilDiscoServidor16,
    limiteMaioDiscoServidor16,
    limiteJunhoDiscoServidor16,
    limiteJulhoDiscoServidor16,
    limiteAgostoDiscoServidor16,
    limiteSetembroDiscoServidor16,
    limiteOutubroDiscoServidor16,
    limiteNovembroDiscoServidor16,
    limiteDezembroDiscoServidor16,
    mensalJaneiroCpuServidor17,
    mensalFevereiroCpuServidor17,
    mensalMarcoCpuServidor17,
    mensalAbrilCpuServidor17,
    mensalMaioCpuServidor17,
    mensalJunhoCpuServidor17,
    mensalJulhoCpuServidor17,
    mensalAgostoCpuServidor17,
    mensalSetembroCpuServidor17,
    mensalOutubroCpuServidor17,
    mensalNovembroCpuServidor17,
    mensalDezembroCpuServidor17,
    mensalJaneiroRamServidor17,
    mensalFevereiroRamServidor17,
    mensalMarcoRamServidor17,
    mensalAbrilRamServidor17,
    mensalMaioRamServidor17,
    mensalJunhoRamServidor17,
    mensalJulhoRamServidor17,
    mensalAgostoRamServidor17,
    mensalSetembroRamServidor17,
    mensalOutubroRamServidor17,
    mensalNovembroRamServidor17,
    mensalDezembroRamServidor17,
    mensalJaneiroDiscoServidor17,
    mensalFevereiroDiscoServidor17,
    mensalMarcoDiscoServidor17,
    mensalAbrilDiscoServidor17,
    mensalMaioDiscoServidor17,
    mensalJunhoDiscoServidor17,
    mensalJulhoDiscoServidor17,
    mensalAgostoDiscoServidor17,
    mensalSetembroDiscoServidor17,
    mensalOutubroDiscoServidor17,
    mensalNovembroDiscoServidor17,
    mensalDezembroDiscoServidor17,
    limiteJaneiroCpuServidor17,
    limiteFevereiroCpuServidor17,
    limiteMarcoCpuServidor17,
    limiteAbrilCpuServidor17,
    limiteMaioCpuServidor17,
    limiteJunhoCpuServidor17,
    limiteJulhoCpuServidor17,
    limiteAgostoCpuServidor17,
    limiteSetembroCpuServidor17,
    limiteOutubroCpuServidor17,
    limiteNovembroCpuServidor17,
    limiteDezembroCpuServidor17,
    limiteJaneiroRamServidor17,
    limiteFevereiroRamServidor17,
    limiteMarcoRamServidor17,
    limiteAbrilRamServidor17,
    limiteMaioRamServidor17,
    limiteJunhoRamServidor17,
    limiteJulhoRamServidor17,
    limiteAgostoRamServidor17,
    limiteSetembroRamServidor17,
    limiteOutubroRamServidor17,
    limiteNovembroRamServidor17,
    limiteDezembroRamServidor17,
    limiteJaneiroDiscoServidor17,
    limiteFevereiroDiscoServidor17,
    limiteMarcoDiscoServidor17,
    limiteAbrilDiscoServidor17,
    limiteMaioDiscoServidor17,
    limiteJunhoDiscoServidor17,
    limiteJulhoDiscoServidor17,
    limiteAgostoDiscoServidor17,
    limiteSetembroDiscoServidor17,
    limiteOutubroDiscoServidor17,
    limiteNovembroDiscoServidor17,
    limiteDezembroDiscoServidor17,
    mensalJaneiroCpuServidor18,
    mensalFevereiroCpuServidor18,
    mensalMarcoCpuServidor18,
    mensalAbrilCpuServidor18,
    mensalMaioCpuServidor18,
    mensalJunhoCpuServidor18,
    mensalJulhoCpuServidor18,
    mensalAgostoCpuServidor18,
    mensalSetembroCpuServidor18,
    mensalOutubroCpuServidor18,
    mensalNovembroCpuServidor18,
    mensalDezembroCpuServidor18,
    mensalJaneiroRamServidor18,
    mensalFevereiroRamServidor18,
    mensalMarcoRamServidor18,
    mensalAbrilRamServidor18,
    mensalMaioRamServidor18,
    mensalJunhoRamServidor18,
    mensalJulhoRamServidor18,
    mensalAgostoRamServidor18,
    mensalSetembroRamServidor18,
    mensalOutubroRamServidor18,
    mensalNovembroRamServidor18,
    mensalDezembroRamServidor18,
    mensalJaneiroDiscoServidor18,
    mensalFevereiroDiscoServidor18,
    mensalMarcoDiscoServidor18,
    mensalAbrilDiscoServidor18,
    mensalMaioDiscoServidor18,
    mensalJunhoDiscoServidor18,
    mensalJulhoDiscoServidor18,
    mensalAgostoDiscoServidor18,
    mensalSetembroDiscoServidor18,
    mensalOutubroDiscoServidor18,
    mensalNovembroDiscoServidor18,
    mensalDezembroDiscoServidor18,
    limiteJaneiroCpuServidor18,
    limiteFevereiroCpuServidor18,
    limiteMarcoCpuServidor18,
    limiteAbrilCpuServidor18,
    limiteMaioCpuServidor18,
    limiteJunhoCpuServidor18,
    limiteJulhoCpuServidor18,
    limiteAgostoCpuServidor18,
    limiteSetembroCpuServidor18,
    limiteOutubroCpuServidor18,
    limiteNovembroCpuServidor18,
    limiteDezembroCpuServidor18,
    limiteJaneiroRamServidor18,
    limiteFevereiroRamServidor18,
    limiteMarcoRamServidor18,
    limiteAbrilRamServidor18,
    limiteMaioRamServidor18,
    limiteJunhoRamServidor18,
    limiteJulhoRamServidor18,
    limiteAgostoRamServidor18,
    limiteSetembroRamServidor18,
    limiteOutubroRamServidor18,
    limiteNovembroRamServidor18,
    limiteDezembroRamServidor18,
    limiteJaneiroDiscoServidor18,
    limiteFevereiroDiscoServidor18,
    limiteMarcoDiscoServidor18,
    limiteAbrilDiscoServidor18,
    limiteMaioDiscoServidor18,
    limiteJunhoDiscoServidor18,
    limiteJulhoDiscoServidor18,
    limiteAgostoDiscoServidor18,
    limiteSetembroDiscoServidor18,
    limiteOutubroDiscoServidor18,
    limiteNovembroDiscoServidor18,
    limiteDezembroDiscoServidor18,
    mensalJaneiroCpuServidor19,
    mensalFevereiroCpuServidor19,
    mensalMarcoCpuServidor19,
    mensalAbrilCpuServidor19,
    mensalMaioCpuServidor19,
    mensalJunhoCpuServidor19,
    mensalJulhoCpuServidor19,
    mensalAgostoCpuServidor19,
    mensalSetembroCpuServidor19,
    mensalOutubroCpuServidor19,
    mensalNovembroCpuServidor19,
    mensalDezembroCpuServidor19,
    mensalJaneiroRamServidor19,
    mensalFevereiroRamServidor19,
    mensalMarcoRamServidor19,
    mensalAbrilRamServidor19,
    mensalMaioRamServidor19,
    mensalJunhoRamServidor19,
    mensalJulhoRamServidor19,
    mensalAgostoRamServidor19,
    mensalSetembroRamServidor19,
    mensalOutubroRamServidor19,
    mensalNovembroRamServidor19,
    mensalDezembroRamServidor19,
    mensalJaneiroDiscoServidor19,
    mensalFevereiroDiscoServidor19,
    mensalMarcoDiscoServidor19,
    mensalAbrilDiscoServidor19,
    mensalMaioDiscoServidor19,
    mensalJunhoDiscoServidor19,
    mensalJulhoDiscoServidor19,
    mensalAgostoDiscoServidor19,
    mensalSetembroDiscoServidor19,
    mensalOutubroDiscoServidor19,
    mensalNovembroDiscoServidor19,
    mensalDezembroDiscoServidor19,
    limiteJaneiroCpuServidor19,
    limiteFevereiroCpuServidor19,
    limiteMarcoCpuServidor19,
    limiteAbrilCpuServidor19,
    limiteMaioCpuServidor19,
    limiteJunhoCpuServidor19,
    limiteJulhoCpuServidor19,
    limiteAgostoCpuServidor19,
    limiteSetembroCpuServidor19,
    limiteOutubroCpuServidor19,
    limiteNovembroCpuServidor19,
    limiteDezembroCpuServidor19,
    limiteJaneiroRamServidor19,
    limiteFevereiroRamServidor19,
    limiteMarcoRamServidor19,
    limiteAbrilRamServidor19,
    limiteMaioRamServidor19,
    limiteJunhoRamServidor19,
    limiteJulhoRamServidor19,
    limiteAgostoRamServidor19,
    limiteSetembroRamServidor19,
    limiteOutubroRamServidor19,
    limiteNovembroRamServidor19,
    limiteDezembroRamServidor19,
    limiteJaneiroDiscoServidor19,
    limiteFevereiroDiscoServidor19,
    limiteMarcoDiscoServidor19,
    limiteAbrilDiscoServidor19,
    limiteMaioDiscoServidor19,
    limiteJunhoDiscoServidor19,
    limiteJulhoDiscoServidor19,
    limiteAgostoDiscoServidor19,
    limiteSetembroDiscoServidor19,
    limiteOutubroDiscoServidor19,
    limiteNovembroDiscoServidor19,
    limiteDezembroDiscoServidor19,
    mensalJaneiroCpuServidor20,
    mensalFevereiroCpuServidor20,
    mensalMarcoCpuServidor20,
    mensalAbrilCpuServidor20,
    mensalMaioCpuServidor20,
    mensalJunhoCpuServidor20,
    mensalJulhoCpuServidor20,
    mensalAgostoCpuServidor20,
    mensalSetembroCpuServidor20,
    mensalOutubroCpuServidor20,
    mensalNovembroCpuServidor20,
    mensalDezembroCpuServidor20,
    mensalJaneiroRamServidor20,
    mensalFevereiroRamServidor20,
    mensalMarcoRamServidor20,
    mensalAbrilRamServidor20,
    mensalMaioRamServidor20,
    mensalJunhoRamServidor20,
    mensalJulhoRamServidor20,
    mensalAgostoRamServidor20,
    mensalSetembroRamServidor20,
    mensalOutubroRamServidor20,
    mensalNovembroRamServidor20,
    mensalDezembroRamServidor20,
    mensalJaneiroDiscoServidor20,
    mensalFevereiroDiscoServidor20,
    mensalMarcoDiscoServidor20,
    mensalAbrilDiscoServidor20,
    mensalMaioDiscoServidor20,
    mensalJunhoDiscoServidor20,
    mensalJulhoDiscoServidor20,
    mensalAgostoDiscoServidor20,
    mensalSetembroDiscoServidor20,
    mensalOutubroDiscoServidor20,
    mensalNovembroDiscoServidor20,
    mensalDezembroDiscoServidor20,
    limiteJaneiroCpuServidor20,
    limiteFevereiroCpuServidor20,
    limiteMarcoCpuServidor20,
    limiteAbrilCpuServidor20,
    limiteMaioCpuServidor20,
    limiteJunhoCpuServidor20,
    limiteJulhoCpuServidor20,
    limiteAgostoCpuServidor20,
    limiteSetembroCpuServidor20,
    limiteOutubroCpuServidor20,
    limiteNovembroCpuServidor20,
    limiteDezembroCpuServidor20,
    limiteJaneiroRamServidor20,
    limiteFevereiroRamServidor20,
    limiteMarcoRamServidor20,
    limiteAbrilRamServidor20,
    limiteMaioRamServidor20,
    limiteJunhoRamServidor20,
    limiteJulhoRamServidor20,
    limiteAgostoRamServidor20,
    limiteSetembroRamServidor20,
    limiteOutubroRamServidor20,
    limiteNovembroRamServidor20,
    limiteDezembroRamServidor20,
    limiteJaneiroDiscoServidor20,
    limiteFevereiroDiscoServidor20,
    limiteMarcoDiscoServidor20,
    limiteAbrilDiscoServidor20,
    limiteMaioDiscoServidor20,
    limiteJunhoDiscoServidor20,
    limiteJulhoDiscoServidor20,
    limiteAgostoDiscoServidor20,
    limiteSetembroDiscoServidor20,
    limiteOutubroDiscoServidor20,
    limiteNovembroDiscoServidor20,
    limiteDezembroDiscoServidor20,
    mensalJaneiroCpuServidor21,
    mensalFevereiroCpuServidor21,
    mensalMarcoCpuServidor21,
    mensalAbrilCpuServidor21,
    mensalMaioCpuServidor21,
    mensalJunhoCpuServidor21,
    mensalJulhoCpuServidor21,
    mensalAgostoCpuServidor21,
    mensalSetembroCpuServidor21,
    mensalOutubroCpuServidor21,
    mensalNovembroCpuServidor21,
    mensalDezembroCpuServidor21,
    mensalJaneiroRamServidor21,
    mensalFevereiroRamServidor21,
    mensalMarcoRamServidor21,
    mensalAbrilRamServidor21,
    mensalMaioRamServidor21,
    mensalJunhoRamServidor21,
    mensalJulhoRamServidor21,
    mensalAgostoRamServidor21,
    mensalSetembroRamServidor21,
    mensalOutubroRamServidor21,
    mensalNovembroRamServidor21,
    mensalDezembroRamServidor21,
    mensalJaneiroDiscoServidor21,
    mensalFevereiroDiscoServidor21,
    mensalMarcoDiscoServidor21,
    mensalAbrilDiscoServidor21,
    mensalMaioDiscoServidor21,
    mensalJunhoDiscoServidor21,
    mensalJulhoDiscoServidor21,
    mensalAgostoDiscoServidor21,
    mensalSetembroDiscoServidor21,
    mensalOutubroDiscoServidor21,
    mensalNovembroDiscoServidor21,
    mensalDezembroDiscoServidor21,
    limiteJaneiroCpuServidor21,
    limiteFevereiroCpuServidor21,
    limiteMarcoCpuServidor21,
    limiteAbrilCpuServidor21,
    limiteMaioCpuServidor21,
    limiteJunhoCpuServidor21,
    limiteJulhoCpuServidor21,
    limiteAgostoCpuServidor21,
    limiteSetembroCpuServidor21,
    limiteOutubroCpuServidor21,
    limiteNovembroCpuServidor21,
    limiteDezembroCpuServidor21,
    limiteJaneiroRamServidor21,
    limiteFevereiroRamServidor21,
    limiteMarcoRamServidor21,
    limiteAbrilRamServidor21,
    limiteMaioRamServidor21,
    limiteJunhoRamServidor21,
    limiteJulhoRamServidor21,
    limiteAgostoRamServidor21,
    limiteSetembroRamServidor21,
    limiteOutubroRamServidor21,
    limiteNovembroRamServidor21,
    limiteDezembroRamServidor21,
    limiteJaneiroDiscoServidor21,
    limiteFevereiroDiscoServidor21,
    limiteMarcoDiscoServidor21,
    limiteAbrilDiscoServidor21,
    limiteMaioDiscoServidor21,
    limiteJunhoDiscoServidor21,
    limiteJulhoDiscoServidor21,
    limiteAgostoDiscoServidor21,
    limiteSetembroDiscoServidor21,
    limiteOutubroDiscoServidor21,
    limiteNovembroDiscoServidor21,
    limiteDezembroDiscoServidor21,
    mensalJaneiroCpuServidor22,
    mensalFevereiroCpuServidor22,
    mensalMarcoCpuServidor22,
    mensalAbrilCpuServidor22,
    mensalMaioCpuServidor22,
    mensalJunhoCpuServidor22,
    mensalJulhoCpuServidor22,
    mensalAgostoCpuServidor22,
    mensalSetembroCpuServidor22,
    mensalOutubroCpuServidor22,
    mensalNovembroCpuServidor22,
    mensalDezembroCpuServidor22,
    mensalJaneiroRamServidor22,
    mensalFevereiroRamServidor22,
    mensalMarcoRamServidor22,
    mensalAbrilRamServidor22,
    mensalMaioRamServidor22,
    mensalJunhoRamServidor22,
    mensalJulhoRamServidor22,
    mensalAgostoRamServidor22,
    mensalSetembroRamServidor22,
    mensalOutubroRamServidor22,
    mensalNovembroRamServidor22,
    mensalDezembroRamServidor22,
    mensalJaneiroDiscoServidor22,
    mensalFevereiroDiscoServidor22,
    mensalMarcoDiscoServidor22,
    mensalAbrilDiscoServidor22,
    mensalMaioDiscoServidor22,
    mensalJunhoDiscoServidor22,
    mensalJulhoDiscoServidor22,
    mensalAgostoDiscoServidor22,
    mensalSetembroDiscoServidor22,
    mensalOutubroDiscoServidor22,
    mensalNovembroDiscoServidor22,
    mensalDezembroDiscoServidor22,
    limiteJaneiroCpuServidor22,
    limiteFevereiroCpuServidor22,
    limiteMarcoCpuServidor22,
    limiteAbrilCpuServidor22,
    limiteMaioCpuServidor22,
    limiteJunhoCpuServidor22,
    limiteJulhoCpuServidor22,
    limiteAgostoCpuServidor22,
    limiteSetembroCpuServidor22,
    limiteOutubroCpuServidor22,
    limiteNovembroCpuServidor22,
    limiteDezembroCpuServidor22,
    limiteJaneiroRamServidor22,
    limiteFevereiroRamServidor22,
    limiteMarcoRamServidor22,
    limiteAbrilRamServidor22,
    limiteMaioRamServidor22,
    limiteJunhoRamServidor22,
    limiteJulhoRamServidor22,
    limiteAgostoRamServidor22,
    limiteSetembroRamServidor22,
    limiteOutubroRamServidor22,
    limiteNovembroRamServidor22,
    limiteDezembroRamServidor22,
    limiteJaneiroDiscoServidor22,
    limiteFevereiroDiscoServidor22,
    limiteMarcoDiscoServidor22,
    limiteAbrilDiscoServidor22,
    limiteMaioDiscoServidor22,
    limiteJunhoDiscoServidor22,
    limiteJulhoDiscoServidor22,
    limiteAgostoDiscoServidor22,
    limiteSetembroDiscoServidor22,
    limiteOutubroDiscoServidor22,
    limiteNovembroDiscoServidor22,
    limiteDezembroDiscoServidor22,
    mensalJaneiroCpuServidor23,
    mensalFevereiroCpuServidor23,
    mensalMarcoCpuServidor23,
    mensalAbrilCpuServidor23,
    mensalMaioCpuServidor23,
    mensalJunhoCpuServidor23,
    mensalJulhoCpuServidor23,
    mensalAgostoCpuServidor23,
    mensalSetembroCpuServidor23,
    mensalOutubroCpuServidor23,
    mensalNovembroCpuServidor23,
    mensalDezembroCpuServidor23,
    mensalJaneiroRamServidor23,
    mensalFevereiroRamServidor23,
    mensalMarcoRamServidor23,
    mensalAbrilRamServidor23,
    mensalMaioRamServidor23,
    mensalJunhoRamServidor23,
    mensalJulhoRamServidor23,
    mensalAgostoRamServidor23,
    mensalSetembroRamServidor23,
    mensalOutubroRamServidor23,
    mensalNovembroRamServidor23,
    mensalDezembroRamServidor23,
    mensalJaneiroDiscoServidor23,
    mensalFevereiroDiscoServidor23,
    mensalMarcoDiscoServidor23,
    mensalAbrilDiscoServidor23,
    mensalMaioDiscoServidor23,
    mensalJunhoDiscoServidor23,
    mensalJulhoDiscoServidor23,
    mensalAgostoDiscoServidor23,
    mensalSetembroDiscoServidor23,
    mensalOutubroDiscoServidor23,
    mensalNovembroDiscoServidor23,
    mensalDezembroDiscoServidor23,
    limiteJaneiroCpuServidor23,
    limiteFevereiroCpuServidor23,
    limiteMarcoCpuServidor23,
    limiteAbrilCpuServidor23,
    limiteMaioCpuServidor23,
    limiteJunhoCpuServidor23,
    limiteJulhoCpuServidor23,
    limiteAgostoCpuServidor23,
    limiteSetembroCpuServidor23,
    limiteOutubroCpuServidor23,
    limiteNovembroCpuServidor23,
    limiteDezembroCpuServidor23,
    limiteJaneiroRamServidor23,
    limiteFevereiroRamServidor23,
    limiteMarcoRamServidor23,
    limiteAbrilRamServidor23,
    limiteMaioRamServidor23,
    limiteJunhoRamServidor23,
    limiteJulhoRamServidor23,
    limiteAgostoRamServidor23,
    limiteSetembroRamServidor23,
    limiteOutubroRamServidor23,
    limiteNovembroRamServidor23,
    limiteDezembroRamServidor23,
    limiteJaneiroDiscoServidor23,
    limiteFevereiroDiscoServidor23,
    limiteMarcoDiscoServidor23,
    limiteAbrilDiscoServidor23,
    limiteMaioDiscoServidor23,
    limiteJunhoDiscoServidor23,
    limiteJulhoDiscoServidor23,
    limiteAgostoDiscoServidor23,
    limiteSetembroDiscoServidor23,
    limiteOutubroDiscoServidor23,
    limiteNovembroDiscoServidor23,
    limiteDezembroDiscoServidor23,
    mensalJaneiroCpuServidor24,
    mensalFevereiroCpuServidor24,
    mensalMarcoCpuServidor24,
    mensalAbrilCpuServidor24,
    mensalMaioCpuServidor24,
    mensalJunhoCpuServidor24,
    mensalJulhoCpuServidor24,
    mensalAgostoCpuServidor24,
    mensalSetembroCpuServidor24,
    mensalOutubroCpuServidor24,
    mensalNovembroCpuServidor24,
    mensalDezembroCpuServidor24,
    mensalJaneiroRamServidor24,
    mensalFevereiroRamServidor24,
    mensalMarcoRamServidor24,
    mensalAbrilRamServidor24,
    mensalMaioRamServidor24,
    mensalJunhoRamServidor24,
    mensalJulhoRamServidor24,
    mensalAgostoRamServidor24,
    mensalSetembroRamServidor24,
    mensalOutubroRamServidor24,
    mensalNovembroRamServidor24,
    mensalDezembroRamServidor24,
    mensalJaneiroDiscoServidor24,
    mensalFevereiroDiscoServidor24,
    mensalMarcoDiscoServidor24,
    mensalAbrilDiscoServidor24,
    mensalMaioDiscoServidor24,
    mensalJunhoDiscoServidor24,
    mensalJulhoDiscoServidor24,
    mensalAgostoDiscoServidor24,
    mensalSetembroDiscoServidor24,
    mensalOutubroDiscoServidor24,
    mensalNovembroDiscoServidor24,
    mensalDezembroDiscoServidor24,
    limiteJaneiroCpuServidor24,
    limiteFevereiroCpuServidor24,
    limiteMarcoCpuServidor24,
    limiteAbrilCpuServidor24,
    limiteMaioCpuServidor24,
    limiteJunhoCpuServidor24,
    limiteJulhoCpuServidor24,
    limiteAgostoCpuServidor24,
    limiteSetembroCpuServidor24,
    limiteOutubroCpuServidor24,
    limiteNovembroCpuServidor24,
    limiteDezembroCpuServidor24,
    limiteJaneiroRamServidor24,
    limiteFevereiroRamServidor24,
    limiteMarcoRamServidor24,
    limiteAbrilRamServidor24,
    limiteMaioRamServidor24,
    limiteJunhoRamServidor24,
    limiteJulhoRamServidor24,
    limiteAgostoRamServidor24,
    limiteSetembroRamServidor24,
    limiteOutubroRamServidor24,
    limiteNovembroRamServidor24,
    limiteDezembroRamServidor24,
    limiteJaneiroDiscoServidor24,
    limiteFevereiroDiscoServidor24,
    limiteMarcoDiscoServidor24,
    limiteAbrilDiscoServidor24,
    limiteMaioDiscoServidor24,
    limiteJunhoDiscoServidor24,
    limiteJulhoDiscoServidor24,
    limiteAgostoDiscoServidor24,
    limiteSetembroDiscoServidor24,
    limiteOutubroDiscoServidor24,
    limiteNovembroDiscoServidor24,
    limiteDezembroDiscoServidor24,
    mensalJaneiroCpuServidor25,
    mensalFevereiroCpuServidor25,
    mensalMarcoCpuServidor25,
    mensalAbrilCpuServidor25,
    mensalMaioCpuServidor25,
    mensalJunhoCpuServidor25,
    mensalJulhoCpuServidor25,
    mensalAgostoCpuServidor25,
    mensalSetembroCpuServidor25,
    mensalOutubroCpuServidor25,
    mensalNovembroCpuServidor25,
    mensalDezembroCpuServidor25,
    mensalJaneiroRamServidor25,
    mensalFevereiroRamServidor25,
    mensalMarcoRamServidor25,
    mensalAbrilRamServidor25,
    mensalMaioRamServidor25,
    mensalJunhoRamServidor25,
    mensalJulhoRamServidor25,
    mensalAgostoRamServidor25,
    mensalSetembroRamServidor25,
    mensalOutubroRamServidor25,
    mensalNovembroRamServidor25,
    mensalDezembroRamServidor25,
    mensalJaneiroDiscoServidor25,
    mensalFevereiroDiscoServidor25,
    mensalMarcoDiscoServidor25,
    mensalAbrilDiscoServidor25,
    mensalMaioDiscoServidor25,
    mensalJunhoDiscoServidor25,
    mensalJulhoDiscoServidor25,
    mensalAgostoDiscoServidor25,
    mensalSetembroDiscoServidor25,
    mensalOutubroDiscoServidor25,
    mensalNovembroDiscoServidor25,
    mensalDezembroDiscoServidor25,
    limiteJaneiroCpuServidor25,
    limiteFevereiroCpuServidor25,
    limiteMarcoCpuServidor25,
    limiteAbrilCpuServidor25,
    limiteMaioCpuServidor25,
    limiteJunhoCpuServidor25,
    limiteJulhoCpuServidor25,
    limiteAgostoCpuServidor25,
    limiteSetembroCpuServidor25,
    limiteOutubroCpuServidor25,
    limiteNovembroCpuServidor25,
    limiteDezembroCpuServidor25,
    limiteJaneiroRamServidor25,
    limiteFevereiroRamServidor25,
    limiteMarcoRamServidor25,
    limiteAbrilRamServidor25,
    limiteMaioRamServidor25,
    limiteJunhoRamServidor25,
    limiteJulhoRamServidor25,
    limiteAgostoRamServidor25,
    limiteSetembroRamServidor25,
    limiteOutubroRamServidor25,
    limiteNovembroRamServidor25,
    limiteDezembroRamServidor25,
    limiteJaneiroDiscoServidor25,
    limiteFevereiroDiscoServidor25,
    limiteMarcoDiscoServidor25,
    limiteAbrilDiscoServidor25,
    limiteMaioDiscoServidor25,
    limiteJunhoDiscoServidor25,
    limiteJulhoDiscoServidor25,
    limiteAgostoDiscoServidor25,
    limiteSetembroDiscoServidor25,
    limiteOutubroDiscoServidor25,
    limiteNovembroDiscoServidor25,
    limiteDezembroDiscoServidor25,
    mensalJaneiroCpuServidor26,
    mensalFevereiroCpuServidor26,
    mensalMarcoCpuServidor26,
    mensalAbrilCpuServidor26,
    mensalMaioCpuServidor26,
    mensalJunhoCpuServidor26,
    mensalJulhoCpuServidor26,
    mensalAgostoCpuServidor26,
    mensalSetembroCpuServidor26,
    mensalOutubroCpuServidor26,
    mensalNovembroCpuServidor26,
    mensalDezembroCpuServidor26,
    mensalJaneiroRamServidor26,
    mensalFevereiroRamServidor26,
    mensalMarcoRamServidor26,
    mensalAbrilRamServidor26,
    mensalMaioRamServidor26,
    mensalJunhoRamServidor26,
    mensalJulhoRamServidor26,
    mensalAgostoRamServidor26,
    mensalSetembroRamServidor26,
    mensalOutubroRamServidor26,
    mensalNovembroRamServidor26,
    mensalDezembroRamServidor26,
    mensalJaneiroDiscoServidor26,
    mensalFevereiroDiscoServidor26,
    mensalMarcoDiscoServidor26,
    mensalAbrilDiscoServidor26,
    mensalMaioDiscoServidor26,
    mensalJunhoDiscoServidor26,
    mensalJulhoDiscoServidor26,
    mensalAgostoDiscoServidor26,
    mensalSetembroDiscoServidor26,
    mensalOutubroDiscoServidor26,
    mensalNovembroDiscoServidor26,
    mensalDezembroDiscoServidor26,
    limiteJaneiroCpuServidor26,
    limiteFevereiroCpuServidor26,
    limiteMarcoCpuServidor26,
    limiteAbrilCpuServidor26,
    limiteMaioCpuServidor26,
    limiteJunhoCpuServidor26,
    limiteJulhoCpuServidor26,
    limiteAgostoCpuServidor26,
    limiteSetembroCpuServidor26,
    limiteOutubroCpuServidor26,
    limiteNovembroCpuServidor26,
    limiteDezembroCpuServidor26,
    limiteJaneiroRamServidor26,
    limiteFevereiroRamServidor26,
    limiteMarcoRamServidor26,
    limiteAbrilRamServidor26,
    limiteMaioRamServidor26,
    limiteJunhoRamServidor26,
    limiteJulhoRamServidor26,
    limiteAgostoRamServidor26,
    limiteSetembroRamServidor26,
    limiteOutubroRamServidor26,
    limiteNovembroRamServidor26,
    limiteDezembroRamServidor26,
    limiteJaneiroDiscoServidor26,
    limiteFevereiroDiscoServidor26,
    limiteMarcoDiscoServidor26,
    limiteAbrilDiscoServidor26,
    limiteMaioDiscoServidor26,
    limiteJunhoDiscoServidor26,
    limiteJulhoDiscoServidor26,
    limiteAgostoDiscoServidor26,
    limiteSetembroDiscoServidor26,
    limiteOutubroDiscoServidor26,
    limiteNovembroDiscoServidor26,
    limiteDezembroDiscoServidor26,
    mensalJaneiroCpuServidor27,
    mensalFevereiroCpuServidor27,
    mensalMarcoCpuServidor27,
    mensalAbrilCpuServidor27,
    mensalMaioCpuServidor27,
    mensalJunhoCpuServidor27,
    mensalJulhoCpuServidor27,
    mensalAgostoCpuServidor27,
    mensalSetembroCpuServidor27,
    mensalOutubroCpuServidor27,
    mensalNovembroCpuServidor27,
    mensalDezembroCpuServidor27,
    mensalJaneiroRamServidor27,
    mensalFevereiroRamServidor27,
    mensalMarcoRamServidor27,
    mensalAbrilRamServidor27,
    mensalMaioRamServidor27,
    mensalJunhoRamServidor27,
    mensalJulhoRamServidor27,
    mensalAgostoRamServidor27,
    mensalSetembroRamServidor27,
    mensalOutubroRamServidor27,
    mensalNovembroRamServidor27,
    mensalDezembroRamServidor27,
    mensalJaneiroDiscoServidor27,
    mensalFevereiroDiscoServidor27,
    mensalMarcoDiscoServidor27,
    mensalAbrilDiscoServidor27,
    mensalMaioDiscoServidor27,
    mensalJunhoDiscoServidor27,
    mensalJulhoDiscoServidor27,
    mensalAgostoDiscoServidor27,
    mensalSetembroDiscoServidor27,
    mensalOutubroDiscoServidor27,
    mensalNovembroDiscoServidor27,
    mensalDezembroDiscoServidor27,
    limiteJaneiroCpuServidor27,
    limiteFevereiroCpuServidor27,
    limiteMarcoCpuServidor27,
    limiteAbrilCpuServidor27,
    limiteMaioCpuServidor27,
    limiteJunhoCpuServidor27,
    limiteJulhoCpuServidor27,
    limiteAgostoCpuServidor27,
    limiteSetembroCpuServidor27,
    limiteOutubroCpuServidor27,
    limiteNovembroCpuServidor27,
    limiteDezembroCpuServidor27,
    limiteJaneiroRamServidor27,
    limiteFevereiroRamServidor27,
    limiteMarcoRamServidor27,
    limiteAbrilRamServidor27,
    limiteMaioRamServidor27,
    limiteJunhoRamServidor27,
    limiteJulhoRamServidor27,
    limiteAgostoRamServidor27,
    limiteSetembroRamServidor27,
    limiteOutubroRamServidor27,
    limiteNovembroRamServidor27,
    limiteDezembroRamServidor27,
    limiteJaneiroDiscoServidor27,
    limiteFevereiroDiscoServidor27,
    limiteMarcoDiscoServidor27,
    limiteAbrilDiscoServidor27,
    limiteMaioDiscoServidor27,
    limiteJunhoDiscoServidor27,
    limiteJulhoDiscoServidor27,
    limiteAgostoDiscoServidor27,
    limiteSetembroDiscoServidor27,
    limiteOutubroDiscoServidor27,
    limiteNovembroDiscoServidor27,
    limiteDezembroDiscoServidor27,
    mensalJaneiroCpuServidor28,
    mensalFevereiroCpuServidor28,
    mensalMarcoCpuServidor28,
    mensalAbrilCpuServidor28,
    mensalMaioCpuServidor28,
    mensalJunhoCpuServidor28,
    mensalJulhoCpuServidor28,
    mensalAgostoCpuServidor28,
    mensalSetembroCpuServidor28,
    mensalOutubroCpuServidor28,
    mensalNovembroCpuServidor28,
    mensalDezembroCpuServidor28,
    mensalJaneiroRamServidor28,
    mensalFevereiroRamServidor28,
    mensalMarcoRamServidor28,
    mensalAbrilRamServidor28,
    mensalMaioRamServidor28,
    mensalJunhoRamServidor28,
    mensalJulhoRamServidor28,
    mensalAgostoRamServidor28,
    mensalSetembroRamServidor28,
    mensalOutubroRamServidor28,
    mensalNovembroRamServidor28,
    mensalDezembroRamServidor28,
    mensalJaneiroDiscoServidor28,
    mensalFevereiroDiscoServidor28,
    mensalMarcoDiscoServidor28,
    mensalAbrilDiscoServidor28,
    mensalMaioDiscoServidor28,
    mensalJunhoDiscoServidor28,
    mensalJulhoDiscoServidor28,
    mensalAgostoDiscoServidor28,
    mensalSetembroDiscoServidor28,
    mensalOutubroDiscoServidor28,
    mensalNovembroDiscoServidor28,
    mensalDezembroDiscoServidor28,
    limiteJaneiroCpuServidor28,
    limiteFevereiroCpuServidor28,
    limiteMarcoCpuServidor28,
    limiteAbrilCpuServidor28,
    limiteMaioCpuServidor28,
    limiteJunhoCpuServidor28,
    limiteJulhoCpuServidor28,
    limiteAgostoCpuServidor28,
    limiteSetembroCpuServidor28,
    limiteOutubroCpuServidor28,
    limiteNovembroCpuServidor28,
    limiteDezembroCpuServidor28,
    limiteJaneiroRamServidor28,
    limiteFevereiroRamServidor28,
    limiteMarcoRamServidor28,
    limiteAbrilRamServidor28,
    limiteMaioRamServidor28,
    limiteJunhoRamServidor28,
    limiteJulhoRamServidor28,
    limiteAgostoRamServidor28,
    limiteSetembroRamServidor28,
    limiteOutubroRamServidor28,
    limiteNovembroRamServidor28,
    limiteDezembroRamServidor28,
    limiteJaneiroDiscoServidor28,
    limiteFevereiroDiscoServidor28,
    limiteMarcoDiscoServidor28,
    limiteAbrilDiscoServidor28,
    limiteMaioDiscoServidor28,
    limiteJunhoDiscoServidor28,
    limiteJulhoDiscoServidor28,
    limiteAgostoDiscoServidor28,
    limiteSetembroDiscoServidor28,
    limiteOutubroDiscoServidor28,
    limiteNovembroDiscoServidor28,
    limiteDezembroDiscoServidor28,
    mensalJaneiroCpuServidor29,
    mensalFevereiroCpuServidor29,
    mensalMarcoCpuServidor29,
    mensalAbrilCpuServidor29,
    mensalMaioCpuServidor29,
    mensalJunhoCpuServidor29,
    mensalJulhoCpuServidor29,
    mensalAgostoCpuServidor29,
    mensalSetembroCpuServidor29,
    mensalOutubroCpuServidor29,
    mensalNovembroCpuServidor29,
    mensalDezembroCpuServidor29,
    mensalJaneiroRamServidor29,
    mensalFevereiroRamServidor29,
    mensalMarcoRamServidor29,
    mensalAbrilRamServidor29,
    mensalMaioRamServidor29,
    mensalJunhoRamServidor29,
    mensalJulhoRamServidor29,
    mensalAgostoRamServidor29,
    mensalSetembroRamServidor29,
    mensalOutubroRamServidor29,
    mensalNovembroRamServidor29,
    mensalDezembroRamServidor29,
    mensalJaneiroDiscoServidor29,
    mensalFevereiroDiscoServidor29,
    mensalMarcoDiscoServidor29,
    mensalAbrilDiscoServidor29,
    mensalMaioDiscoServidor29,
    mensalJunhoDiscoServidor29,
    mensalJulhoDiscoServidor29,
    mensalAgostoDiscoServidor29,
    mensalSetembroDiscoServidor29,
    mensalOutubroDiscoServidor29,
    mensalNovembroDiscoServidor29,
    mensalDezembroDiscoServidor29,
    limiteJaneiroCpuServidor29,
    limiteFevereiroCpuServidor29,
    limiteMarcoCpuServidor29,
    limiteAbrilCpuServidor29,
    limiteMaioCpuServidor29,
    limiteJunhoCpuServidor29,
    limiteJulhoCpuServidor29,
    limiteAgostoCpuServidor29,
    limiteSetembroCpuServidor29,
    limiteOutubroCpuServidor29,
    limiteNovembroCpuServidor29,
    limiteDezembroCpuServidor29,
    limiteJaneiroRamServidor29,
    limiteFevereiroRamServidor29,
    limiteMarcoRamServidor29,
    limiteAbrilRamServidor29,
    limiteMaioRamServidor29,
    limiteJunhoRamServidor29,
    limiteJulhoRamServidor29,
    limiteAgostoRamServidor29,
    limiteSetembroRamServidor29,
    limiteOutubroRamServidor29,
    limiteNovembroRamServidor29,
    limiteDezembroRamServidor29,
    limiteJaneiroDiscoServidor29,
    limiteFevereiroDiscoServidor29,
    limiteMarcoDiscoServidor29,
    limiteAbrilDiscoServidor29,
    limiteMaioDiscoServidor29,
    limiteJunhoDiscoServidor29,
    limiteJulhoDiscoServidor29,
    limiteAgostoDiscoServidor29,
    limiteSetembroDiscoServidor29,
    limiteOutubroDiscoServidor29,
    limiteNovembroDiscoServidor29,
    limiteDezembroDiscoServidor29,
    mensalJaneiroCpuServidor30,
    mensalFevereiroCpuServidor30,
    mensalMarcoCpuServidor30,
    mensalAbrilCpuServidor30,
    mensalMaioCpuServidor30,
    mensalJunhoCpuServidor30,
    mensalJulhoCpuServidor30,
    mensalAgostoCpuServidor30,
    mensalSetembroCpuServidor30,
    mensalOutubroCpuServidor30,
    mensalNovembroCpuServidor30,
    mensalDezembroCpuServidor30,
    mensalJaneiroRamServidor30,
    mensalFevereiroRamServidor30,
    mensalMarcoRamServidor30,
    mensalAbrilRamServidor30,
    mensalMaioRamServidor30,
    mensalJunhoRamServidor30,
    mensalJulhoRamServidor30,
    mensalAgostoRamServidor30,
    mensalSetembroRamServidor30,
    mensalOutubroRamServidor30,
    mensalNovembroRamServidor30,
    mensalDezembroRamServidor30,
    mensalJaneiroDiscoServidor30,
    mensalFevereiroDiscoServidor30,
    mensalMarcoDiscoServidor30,
    mensalAbrilDiscoServidor30,
    mensalMaioDiscoServidor30,
    mensalJunhoDiscoServidor30,
    mensalJulhoDiscoServidor30,
    mensalAgostoDiscoServidor30,
    mensalSetembroDiscoServidor30,
    mensalOutubroDiscoServidor30,
    mensalNovembroDiscoServidor30,
    mensalDezembroDiscoServidor30,
    limiteJaneiroCpuServidor30,
    limiteFevereiroCpuServidor30,
    limiteMarcoCpuServidor30,
    limiteAbrilCpuServidor30,
    limiteMaioCpuServidor30,
    limiteJunhoCpuServidor30,
    limiteJulhoCpuServidor30,
    limiteAgostoCpuServidor30,
    limiteSetembroCpuServidor30,
    limiteOutubroCpuServidor30,
    limiteNovembroCpuServidor30,
    limiteDezembroCpuServidor30,
    limiteJaneiroRamServidor30,
    limiteFevereiroRamServidor30,
    limiteMarcoRamServidor30,
    limiteAbrilRamServidor30,
    limiteMaioRamServidor30,
    limiteJunhoRamServidor30,
    limiteJulhoRamServidor30,
    limiteAgostoRamServidor30,
    limiteSetembroRamServidor30,
    limiteOutubroRamServidor30,
    limiteNovembroRamServidor30,
    limiteDezembroRamServidor30,
    limiteJaneiroDiscoServidor30,
    limiteFevereiroDiscoServidor30,
    limiteMarcoDiscoServidor30,
    limiteAbrilDiscoServidor30,
    limiteMaioDiscoServidor30,
    limiteJunhoDiscoServidor30,
    limiteJulhoDiscoServidor30,
    limiteAgostoDiscoServidor30,
    limiteSetembroDiscoServidor30,
    limiteOutubroDiscoServidor30,
    limiteNovembroDiscoServidor30,
    limiteDezembroDiscoServidor30,
    mensalJaneiroCpuServidor31,
    mensalFevereiroCpuServidor31,
    mensalMarcoCpuServidor31,
    mensalAbrilCpuServidor31,
    mensalMaioCpuServidor31,
    mensalJunhoCpuServidor31,
    mensalJulhoCpuServidor31,
    mensalAgostoCpuServidor31,
    mensalSetembroCpuServidor31,
    mensalOutubroCpuServidor31,
    mensalNovembroCpuServidor31,
    mensalDezembroCpuServidor31,
    mensalJaneiroRamServidor31,
    mensalFevereiroRamServidor31,
    mensalMarcoRamServidor31,
    mensalAbrilRamServidor31,
    mensalMaioRamServidor31,
    mensalJunhoRamServidor31,
    mensalJulhoRamServidor31,
    mensalAgostoRamServidor31,
    mensalSetembroRamServidor31,
    mensalOutubroRamServidor31,
    mensalNovembroRamServidor31,
    mensalDezembroRamServidor31,
    mensalJaneiroDiscoServidor31,
    mensalFevereiroDiscoServidor31,
    mensalMarcoDiscoServidor31,
    mensalAbrilDiscoServidor31,
    mensalMaioDiscoServidor31,
    mensalJunhoDiscoServidor31,
    mensalJulhoDiscoServidor31,
    mensalAgostoDiscoServidor31,
    mensalSetembroDiscoServidor31,
    mensalOutubroDiscoServidor31,
    mensalNovembroDiscoServidor31,
    mensalDezembroDiscoServidor31,
    limiteJaneiroCpuServidor31,
    limiteFevereiroCpuServidor31,
    limiteMarcoCpuServidor31,
    limiteAbrilCpuServidor31,
    limiteMaioCpuServidor31,
    limiteJunhoCpuServidor31,
    limiteJulhoCpuServidor31,
    limiteAgostoCpuServidor31,
    limiteSetembroCpuServidor31,
    limiteOutubroCpuServidor31,
    limiteNovembroCpuServidor31,
    limiteDezembroCpuServidor31,
    limiteJaneiroRamServidor31,
    limiteFevereiroRamServidor31,
    limiteMarcoRamServidor31,
    limiteAbrilRamServidor31,
    limiteMaioRamServidor31,
    limiteJunhoRamServidor31,
    limiteJulhoRamServidor31,
    limiteAgostoRamServidor31,
    limiteSetembroRamServidor31,
    limiteOutubroRamServidor31,
    limiteNovembroRamServidor31,
    limiteDezembroRamServidor31,
    limiteJaneiroDiscoServidor31,
    limiteFevereiroDiscoServidor31,
    limiteMarcoDiscoServidor31,
    limiteAbrilDiscoServidor31,
    limiteMaioDiscoServidor31,
    limiteJunhoDiscoServidor31,
    limiteJulhoDiscoServidor31,
    limiteAgostoDiscoServidor31,
    limiteSetembroDiscoServidor31,
    limiteOutubroDiscoServidor31,
    limiteNovembroDiscoServidor31,
    limiteDezembroDiscoServidor31,
    mensalJaneiroCpuServidor32,
    mensalFevereiroCpuServidor32,
    mensalMarcoCpuServidor32,
    mensalAbrilCpuServidor32,
    mensalMaioCpuServidor32,
    mensalJunhoCpuServidor32,
    mensalJulhoCpuServidor32,
    mensalAgostoCpuServidor32,
    mensalSetembroCpuServidor32,
    mensalOutubroCpuServidor32,
    mensalNovembroCpuServidor32,
    mensalDezembroCpuServidor32,
    mensalJaneiroRamServidor32,
    mensalFevereiroRamServidor32,
    mensalMarcoRamServidor32,
    mensalAbrilRamServidor32,
    mensalMaioRamServidor32,
    mensalJunhoRamServidor32,
    mensalJulhoRamServidor32,
    mensalAgostoRamServidor32,
    mensalSetembroRamServidor32,
    mensalOutubroRamServidor32,
    mensalNovembroRamServidor32,
    mensalDezembroRamServidor32,
    mensalJaneiroDiscoServidor32,
    mensalFevereiroDiscoServidor32,
    mensalMarcoDiscoServidor32,
    mensalAbrilDiscoServidor32,
    mensalMaioDiscoServidor32,
    mensalJunhoDiscoServidor32,
    mensalJulhoDiscoServidor32,
    mensalAgostoDiscoServidor32,
    mensalSetembroDiscoServidor32,
    mensalOutubroDiscoServidor32,
    mensalNovembroDiscoServidor32,
    mensalDezembroDiscoServidor32,
    limiteJaneiroCpuServidor32,
    limiteFevereiroCpuServidor32,
    limiteMarcoCpuServidor32,
    limiteAbrilCpuServidor32,
    limiteMaioCpuServidor32,
    limiteJunhoCpuServidor32,
    limiteJulhoCpuServidor32,
    limiteAgostoCpuServidor32,
    limiteSetembroCpuServidor32,
    limiteOutubroCpuServidor32,
    limiteNovembroCpuServidor32,
    limiteDezembroCpuServidor32,
    limiteJaneiroRamServidor32,
    limiteFevereiroRamServidor32,
    limiteMarcoRamServidor32,
    limiteAbrilRamServidor32,
    limiteMaioRamServidor32,
    limiteJunhoRamServidor32,
    limiteJulhoRamServidor32,
    limiteAgostoRamServidor32,
    limiteSetembroRamServidor32,
    limiteOutubroRamServidor32,
    limiteNovembroRamServidor32,
    limiteDezembroRamServidor32,
    limiteJaneiroDiscoServidor32,
    limiteFevereiroDiscoServidor32,
    limiteMarcoDiscoServidor32,
    limiteAbrilDiscoServidor32,
    limiteMaioDiscoServidor32,
    limiteJunhoDiscoServidor32,
    limiteJulhoDiscoServidor32,
    limiteAgostoDiscoServidor32,
    limiteSetembroDiscoServidor32,
    limiteOutubroDiscoServidor32,
    limiteNovembroDiscoServidor32,
    limiteDezembroDiscoServidor32,
    mensalJaneiroCpuServidor33,
    mensalFevereiroCpuServidor33,
    mensalMarcoCpuServidor33,
    mensalAbrilCpuServidor33,
    mensalMaioCpuServidor33,
    mensalJunhoCpuServidor33,
    mensalJulhoCpuServidor33,
    mensalAgostoCpuServidor33,
    mensalSetembroCpuServidor33,
    mensalOutubroCpuServidor33,
    mensalNovembroCpuServidor33,
    mensalDezembroCpuServidor33,
    mensalJaneiroRamServidor33,
    mensalFevereiroRamServidor33,
    mensalMarcoRamServidor33,
    mensalAbrilRamServidor33,
    mensalMaioRamServidor33,
    mensalJunhoRamServidor33,
    mensalJulhoRamServidor33,
    mensalAgostoRamServidor33,
    mensalSetembroRamServidor33,
    mensalOutubroRamServidor33,
    mensalNovembroRamServidor33,
    mensalDezembroRamServidor33,
    mensalJaneiroDiscoServidor33,
    mensalFevereiroDiscoServidor33,
    mensalMarcoDiscoServidor33,
    mensalAbrilDiscoServidor33,
    mensalMaioDiscoServidor33,
    mensalJunhoDiscoServidor33,
    mensalJulhoDiscoServidor33,
    mensalAgostoDiscoServidor33,
    mensalSetembroDiscoServidor33,
    mensalOutubroDiscoServidor33,
    mensalNovembroDiscoServidor33,
    mensalDezembroDiscoServidor33,
    limiteJaneiroCpuServidor33,
    limiteFevereiroCpuServidor33,
    limiteMarcoCpuServidor33,
    limiteAbrilCpuServidor33,
    limiteMaioCpuServidor33,
    limiteJunhoCpuServidor33,
    limiteJulhoCpuServidor33,
    limiteAgostoCpuServidor33,
    limiteSetembroCpuServidor33,
    limiteOutubroCpuServidor33,
    limiteNovembroCpuServidor33,
    limiteDezembroCpuServidor33,
    limiteJaneiroRamServidor33,
    limiteFevereiroRamServidor33,
    limiteMarcoRamServidor33,
    limiteAbrilRamServidor33,
    limiteMaioRamServidor33,
    limiteJunhoRamServidor33,
    limiteJulhoRamServidor33,
    limiteAgostoRamServidor33,
    limiteSetembroRamServidor33,
    limiteOutubroRamServidor33,
    limiteNovembroRamServidor33,
    limiteDezembroRamServidor33,
    limiteJaneiroDiscoServidor33,
    limiteFevereiroDiscoServidor33,
    limiteMarcoDiscoServidor33,
    limiteAbrilDiscoServidor33,
    limiteMaioDiscoServidor33,
    limiteJunhoDiscoServidor33,
    limiteJulhoDiscoServidor33,
    limiteAgostoDiscoServidor33,
    limiteSetembroDiscoServidor33,
    limiteOutubroDiscoServidor33,
    limiteNovembroDiscoServidor33,
    limiteDezembroDiscoServidor33,
    mensalJaneiroCpuServidor34,
    mensalFevereiroCpuServidor34,
    mensalMarcoCpuServidor34,
    mensalAbrilCpuServidor34,
    mensalMaioCpuServidor34,
    mensalJunhoCpuServidor34,
    mensalJulhoCpuServidor34,
    mensalAgostoCpuServidor34,
    mensalSetembroCpuServidor34,
    mensalOutubroCpuServidor34,
    mensalNovembroCpuServidor34,
    mensalDezembroCpuServidor34,
    mensalJaneiroRamServidor34,
    mensalFevereiroRamServidor34,
    mensalMarcoRamServidor34,
    mensalAbrilRamServidor34,
    mensalMaioRamServidor34,
    mensalJunhoRamServidor34,
    mensalJulhoRamServidor34,
    mensalAgostoRamServidor34,
    mensalSetembroRamServidor34,
    mensalOutubroRamServidor34,
    mensalNovembroRamServidor34,
    mensalDezembroRamServidor34,
    mensalJaneiroDiscoServidor34,
    mensalFevereiroDiscoServidor34,
    mensalMarcoDiscoServidor34,
    mensalAbrilDiscoServidor34,
    mensalMaioDiscoServidor34,
    mensalJunhoDiscoServidor34,
    mensalJulhoDiscoServidor34,
    mensalAgostoDiscoServidor34,
    mensalSetembroDiscoServidor34,
    mensalOutubroDiscoServidor34,
    mensalNovembroDiscoServidor34,
    mensalDezembroDiscoServidor34,
    limiteJaneiroCpuServidor34,
    limiteFevereiroCpuServidor34,
    limiteMarcoCpuServidor34,
    limiteAbrilCpuServidor34,
    limiteMaioCpuServidor34,
    limiteJunhoCpuServidor34,
    limiteJulhoCpuServidor34,
    limiteAgostoCpuServidor34,
    limiteSetembroCpuServidor34,
    limiteOutubroCpuServidor34,
    limiteNovembroCpuServidor34,
    limiteDezembroCpuServidor34,
    limiteJaneiroRamServidor34,
    limiteFevereiroRamServidor34,
    limiteMarcoRamServidor34,
    limiteAbrilRamServidor34,
    limiteMaioRamServidor34,
    limiteJunhoRamServidor34,
    limiteJulhoRamServidor34,
    limiteAgostoRamServidor34,
    limiteSetembroRamServidor34,
    limiteOutubroRamServidor34,
    limiteNovembroRamServidor34,
    limiteDezembroRamServidor34,
    limiteJaneiroDiscoServidor34,
    limiteFevereiroDiscoServidor34,
    limiteMarcoDiscoServidor34,
    limiteAbrilDiscoServidor34,
    limiteMaioDiscoServidor34,
    limiteJunhoDiscoServidor34,
    limiteJulhoDiscoServidor34,
    limiteAgostoDiscoServidor34,
    limiteSetembroDiscoServidor34,
    limiteOutubroDiscoServidor34,
    limiteNovembroDiscoServidor34,
    limiteDezembroDiscoServidor34,
    mensalJaneiroCpuServidor35,
    mensalFevereiroCpuServidor35,
    mensalMarcoCpuServidor35,
    mensalAbrilCpuServidor35,
    mensalMaioCpuServidor35,
    mensalJunhoCpuServidor35,
    mensalJulhoCpuServidor35,
    mensalAgostoCpuServidor35,
    mensalSetembroCpuServidor35,
    mensalOutubroCpuServidor35,
    mensalNovembroCpuServidor35,
    mensalDezembroCpuServidor35,
    mensalJaneiroRamServidor35,
    mensalFevereiroRamServidor35,
    mensalMarcoRamServidor35,
    mensalAbrilRamServidor35,
    mensalMaioRamServidor35,
    mensalJunhoRamServidor35,
    mensalJulhoRamServidor35,
    mensalAgostoRamServidor35,
    mensalSetembroRamServidor35,
    mensalOutubroRamServidor35,
    mensalNovembroRamServidor35,
    mensalDezembroRamServidor35,
    mensalJaneiroDiscoServidor35,
    mensalFevereiroDiscoServidor35,
    mensalMarcoDiscoServidor35,
    mensalAbrilDiscoServidor35,
    mensalMaioDiscoServidor35,
    mensalJunhoDiscoServidor35,
    mensalJulhoDiscoServidor35,
    mensalAgostoDiscoServidor35,
    mensalSetembroDiscoServidor35,
    mensalOutubroDiscoServidor35,
    mensalNovembroDiscoServidor35,
    mensalDezembroDiscoServidor35,
    limiteJaneiroCpuServidor35,
    limiteFevereiroCpuServidor35,
    limiteMarcoCpuServidor35,
    limiteAbrilCpuServidor35,
    limiteMaioCpuServidor35,
    limiteJunhoCpuServidor35,
    limiteJulhoCpuServidor35,
    limiteAgostoCpuServidor35,
    limiteSetembroCpuServidor35,
    limiteOutubroCpuServidor35,
    limiteNovembroCpuServidor35,
    limiteDezembroCpuServidor35,
    limiteJaneiroRamServidor35,
    limiteFevereiroRamServidor35,
    limiteMarcoRamServidor35,
    limiteAbrilRamServidor35,
    limiteMaioRamServidor35,
    limiteJunhoRamServidor35,
    limiteJulhoRamServidor35,
    limiteAgostoRamServidor35,
    limiteSetembroRamServidor35,
    limiteOutubroRamServidor35,
    limiteNovembroRamServidor35,
    limiteDezembroRamServidor35,
    limiteJaneiroDiscoServidor35,
    limiteFevereiroDiscoServidor35,
    limiteMarcoDiscoServidor35,
    limiteAbrilDiscoServidor35,
    limiteMaioDiscoServidor35,
    limiteJunhoDiscoServidor35,
    limiteJulhoDiscoServidor35,
    limiteAgostoDiscoServidor35,
    limiteSetembroDiscoServidor35,
    limiteOutubroDiscoServidor35,
    limiteNovembroDiscoServidor35,
    limiteDezembroDiscoServidor35,
    mensalJaneiroCpuServidor36,
    mensalFevereiroCpuServidor36,
    mensalMarcoCpuServidor36,
    mensalAbrilCpuServidor36,
    mensalMaioCpuServidor36,
    mensalJunhoCpuServidor36,
    mensalJulhoCpuServidor36,
    mensalAgostoCpuServidor36,
    mensalSetembroCpuServidor36,
    mensalOutubroCpuServidor36,
    mensalNovembroCpuServidor36,
    mensalDezembroCpuServidor36,
    mensalJaneiroRamServidor36,
    mensalFevereiroRamServidor36,
    mensalMarcoRamServidor36,
    mensalAbrilRamServidor36,
    mensalMaioRamServidor36,
    mensalJunhoRamServidor36,
    mensalJulhoRamServidor36,
    mensalAgostoRamServidor36,
    mensalSetembroRamServidor36,
    mensalOutubroRamServidor36,
    mensalNovembroRamServidor36,
    mensalDezembroRamServidor36,
    mensalJaneiroDiscoServidor36,
    mensalFevereiroDiscoServidor36,
    mensalMarcoDiscoServidor36,
    mensalAbrilDiscoServidor36,
    mensalMaioDiscoServidor36,
    mensalJunhoDiscoServidor36,
    mensalJulhoDiscoServidor36,
    mensalAgostoDiscoServidor36,
    mensalSetembroDiscoServidor36,
    mensalOutubroDiscoServidor36,
    mensalNovembroDiscoServidor36,
    mensalDezembroDiscoServidor36,
    limiteJaneiroCpuServidor36,
    limiteFevereiroCpuServidor36,
    limiteMarcoCpuServidor36,
    limiteAbrilCpuServidor36,
    limiteMaioCpuServidor36,
    limiteJunhoCpuServidor36,
    limiteJulhoCpuServidor36,
    limiteAgostoCpuServidor36,
    limiteSetembroCpuServidor36,
    limiteOutubroCpuServidor36,
    limiteNovembroCpuServidor36,
    limiteDezembroCpuServidor36,
    limiteJaneiroRamServidor36,
    limiteFevereiroRamServidor36,
    limiteMarcoRamServidor36,
    limiteAbrilRamServidor36,
    limiteMaioRamServidor36,
    limiteJunhoRamServidor36,
    limiteJulhoRamServidor36,
    limiteAgostoRamServidor36,
    limiteSetembroRamServidor36,
    limiteOutubroRamServidor36,
    limiteNovembroRamServidor36,
    limiteDezembroRamServidor36,
    limiteJaneiroDiscoServidor36,
    limiteFevereiroDiscoServidor36,
    limiteMarcoDiscoServidor36,
    limiteAbrilDiscoServidor36,
    limiteMaioDiscoServidor36,
    limiteJunhoDiscoServidor36,
    limiteJulhoDiscoServidor36,
    limiteAgostoDiscoServidor36,
    limiteSetembroDiscoServidor36,
    limiteOutubroDiscoServidor36,
    limiteNovembroDiscoServidor36,
    limiteDezembroDiscoServidor36,
    mensalJaneiroCpuServidor37,
    mensalFevereiroCpuServidor37,
    mensalMarcoCpuServidor37,
    mensalAbrilCpuServidor37,
    mensalMaioCpuServidor37,
    mensalJunhoCpuServidor37,
    mensalJulhoCpuServidor37,
    mensalAgostoCpuServidor37,
    mensalSetembroCpuServidor37,
    mensalOutubroCpuServidor37,
    mensalNovembroCpuServidor37,
    mensalDezembroCpuServidor37,
    mensalJaneiroRamServidor37,
    mensalFevereiroRamServidor37,
    mensalMarcoRamServidor37,
    mensalAbrilRamServidor37,
    mensalMaioRamServidor37,
    mensalJunhoRamServidor37,
    mensalJulhoRamServidor37,
    mensalAgostoRamServidor37,
    mensalSetembroRamServidor37,
    mensalOutubroRamServidor37,
    mensalNovembroRamServidor37,
    mensalDezembroRamServidor37,
    mensalJaneiroDiscoServidor37,
    mensalFevereiroDiscoServidor37,
    mensalMarcoDiscoServidor37,
    mensalAbrilDiscoServidor37,
    mensalMaioDiscoServidor37,
    mensalJunhoDiscoServidor37,
    mensalJulhoDiscoServidor37,
    mensalAgostoDiscoServidor37,
    mensalSetembroDiscoServidor37,
    mensalOutubroDiscoServidor37,
    mensalNovembroDiscoServidor37,
    mensalDezembroDiscoServidor37,
    limiteJaneiroCpuServidor37,
    limiteFevereiroCpuServidor37,
    limiteMarcoCpuServidor37,
    limiteAbrilCpuServidor37,
    limiteMaioCpuServidor37,
    limiteJunhoCpuServidor37,
    limiteJulhoCpuServidor37,
    limiteAgostoCpuServidor37,
    limiteSetembroCpuServidor37,
    limiteOutubroCpuServidor37,
    limiteNovembroCpuServidor37,
    limiteDezembroCpuServidor37,
    limiteJaneiroRamServidor37,
    limiteFevereiroRamServidor37,
    limiteMarcoRamServidor37,
    limiteAbrilRamServidor37,
    limiteMaioRamServidor37,
    limiteJunhoRamServidor37,
    limiteJulhoRamServidor37,
    limiteAgostoRamServidor37,
    limiteSetembroRamServidor37,
    limiteOutubroRamServidor37,
    limiteNovembroRamServidor37,
    limiteDezembroRamServidor37,
    limiteJaneiroDiscoServidor37,
    limiteFevereiroDiscoServidor37,
    limiteMarcoDiscoServidor37,
    limiteAbrilDiscoServidor37,
    limiteMaioDiscoServidor37,
    limiteJunhoDiscoServidor37,
    limiteJulhoDiscoServidor37,
    limiteAgostoDiscoServidor37,
    limiteSetembroDiscoServidor37,
    limiteOutubroDiscoServidor37,
    limiteNovembroDiscoServidor37,
    limiteDezembroDiscoServidor37,
    mensalJaneiroCpuServidor38,
    mensalFevereiroCpuServidor38,
    mensalMarcoCpuServidor38,
    mensalAbrilCpuServidor38,
    mensalMaioCpuServidor38,
    mensalJunhoCpuServidor38,
    mensalJulhoCpuServidor38,
    mensalAgostoCpuServidor38,
    mensalSetembroCpuServidor38,
    mensalOutubroCpuServidor38,
    mensalNovembroCpuServidor38,
    mensalDezembroCpuServidor38,
    mensalJaneiroRamServidor38,
    mensalFevereiroRamServidor38,
    mensalMarcoRamServidor38,
    mensalAbrilRamServidor38,
    mensalMaioRamServidor38,
    mensalJunhoRamServidor38,
    mensalJulhoRamServidor38,
    mensalAgostoRamServidor38,
    mensalSetembroRamServidor38,
    mensalOutubroRamServidor38,
    mensalNovembroRamServidor38,
    mensalDezembroRamServidor38,
    mensalJaneiroDiscoServidor38,
    mensalFevereiroDiscoServidor38,
    mensalMarcoDiscoServidor38,
    mensalAbrilDiscoServidor38,
    mensalMaioDiscoServidor38,
    mensalJunhoDiscoServidor38,
    mensalJulhoDiscoServidor38,
    mensalAgostoDiscoServidor38,
    mensalSetembroDiscoServidor38,
    mensalOutubroDiscoServidor38,
    mensalNovembroDiscoServidor38,
    mensalDezembroDiscoServidor38,
    limiteJaneiroCpuServidor38,
    limiteFevereiroCpuServidor38,
    limiteMarcoCpuServidor38,
    limiteAbrilCpuServidor38,
    limiteMaioCpuServidor38,
    limiteJunhoCpuServidor38,
    limiteJulhoCpuServidor38,
    limiteAgostoCpuServidor38,
    limiteSetembroCpuServidor38,
    limiteOutubroCpuServidor38,
    limiteNovembroCpuServidor38,
    limiteDezembroCpuServidor38,
    limiteJaneiroRamServidor38,
    limiteFevereiroRamServidor38,
    limiteMarcoRamServidor38,
    limiteAbrilRamServidor38,
    limiteMaioRamServidor38,
    limiteJunhoRamServidor38,
    limiteJulhoRamServidor38,
    limiteAgostoRamServidor38,
    limiteSetembroRamServidor38,
    limiteOutubroRamServidor38,
    limiteNovembroRamServidor38,
    limiteDezembroRamServidor38,
    limiteJaneiroDiscoServidor38,
    limiteFevereiroDiscoServidor38,
    limiteMarcoDiscoServidor38,
    limiteAbrilDiscoServidor38,
    limiteMaioDiscoServidor38,
    limiteJunhoDiscoServidor38,
    limiteJulhoDiscoServidor38,
    limiteAgostoDiscoServidor38,
    limiteSetembroDiscoServidor38,
    limiteOutubroDiscoServidor38,
    limiteNovembroDiscoServidor38,
    limiteDezembroDiscoServidor38,
    mensalJaneiroCpuServidor39,
    mensalFevereiroCpuServidor39,
    mensalMarcoCpuServidor39,
    mensalAbrilCpuServidor39,
    mensalMaioCpuServidor39,
    mensalJunhoCpuServidor39,
    mensalJulhoCpuServidor39,
    mensalAgostoCpuServidor39,
    mensalSetembroCpuServidor39,
    mensalOutubroCpuServidor39,
    mensalNovembroCpuServidor39,
    mensalDezembroCpuServidor39,
    mensalJaneiroRamServidor39,
    mensalFevereiroRamServidor39,
    mensalMarcoRamServidor39,
    mensalAbrilRamServidor39,
    mensalMaioRamServidor39,
    mensalJunhoRamServidor39,
    mensalJulhoRamServidor39,
    mensalAgostoRamServidor39,
    mensalSetembroRamServidor39,
    mensalOutubroRamServidor39,
    mensalNovembroRamServidor39,
    mensalDezembroRamServidor39,
    mensalJaneiroDiscoServidor39,
    mensalFevereiroDiscoServidor39,
    mensalMarcoDiscoServidor39,
    mensalAbrilDiscoServidor39,
    mensalMaioDiscoServidor39,
    mensalJunhoDiscoServidor39,
    mensalJulhoDiscoServidor39,
    mensalAgostoDiscoServidor39,
    mensalSetembroDiscoServidor39,
    mensalOutubroDiscoServidor39,
    mensalNovembroDiscoServidor39,
    mensalDezembroDiscoServidor39,
    limiteJaneiroCpuServidor39,
    limiteFevereiroCpuServidor39,
    limiteMarcoCpuServidor39,
    limiteAbrilCpuServidor39,
    limiteMaioCpuServidor39,
    limiteJunhoCpuServidor39,
    limiteJulhoCpuServidor39,
    limiteAgostoCpuServidor39,
    limiteSetembroCpuServidor39,
    limiteOutubroCpuServidor39,
    limiteNovembroCpuServidor39,
    limiteDezembroCpuServidor39,
    limiteJaneiroRamServidor39,
    limiteFevereiroRamServidor39,
    limiteMarcoRamServidor39,
    limiteAbrilRamServidor39,
    limiteMaioRamServidor39,
    limiteJunhoRamServidor39,
    limiteJulhoRamServidor39,
    limiteAgostoRamServidor39,
    limiteSetembroRamServidor39,
    limiteOutubroRamServidor39,
    limiteNovembroRamServidor39,
    limiteDezembroRamServidor39,
    limiteJaneiroDiscoServidor39,
    limiteFevereiroDiscoServidor39,
    limiteMarcoDiscoServidor39,
    limiteAbrilDiscoServidor39,
    limiteMaioDiscoServidor39,
    limiteJunhoDiscoServidor39,
    limiteJulhoDiscoServidor39,
    limiteAgostoDiscoServidor39,
    limiteSetembroDiscoServidor39,
    limiteOutubroDiscoServidor39,
    limiteNovembroDiscoServidor39,
    limiteDezembroDiscoServidor39,
    mensalJaneiroCpuServidor40,
    mensalFevereiroCpuServidor40,
    mensalMarcoCpuServidor40,
    mensalAbrilCpuServidor40,
    mensalMaioCpuServidor40,
    mensalJunhoCpuServidor40,
    mensalJulhoCpuServidor40,
    mensalAgostoCpuServidor40,
    mensalSetembroCpuServidor40,
    mensalOutubroCpuServidor40,
    mensalNovembroCpuServidor40,
    mensalDezembroCpuServidor40,
    mensalJaneiroRamServidor40,
    mensalFevereiroRamServidor40,
    mensalMarcoRamServidor40,
    mensalAbrilRamServidor40,
    mensalMaioRamServidor40,
    mensalJunhoRamServidor40,
    mensalJulhoRamServidor40,
    mensalAgostoRamServidor40,
    mensalSetembroRamServidor40,
    mensalOutubroRamServidor40,
    mensalNovembroRamServidor40,
    mensalDezembroRamServidor40,
    mensalJaneiroDiscoServidor40,
    mensalFevereiroDiscoServidor40,
    mensalMarcoDiscoServidor40,
    mensalAbrilDiscoServidor40,
    mensalMaioDiscoServidor40,
    mensalJunhoDiscoServidor40,
    mensalJulhoDiscoServidor40,
    mensalAgostoDiscoServidor40,
    mensalSetembroDiscoServidor40,
    mensalOutubroDiscoServidor40,
    mensalNovembroDiscoServidor40,
    mensalDezembroDiscoServidor40,
    limiteJaneiroCpuServidor40,
    limiteFevereiroCpuServidor40,
    limiteMarcoCpuServidor40,
    limiteAbrilCpuServidor40,
    limiteMaioCpuServidor40,
    limiteJunhoCpuServidor40,
    limiteJulhoCpuServidor40,
    limiteAgostoCpuServidor40,
    limiteSetembroCpuServidor40,
    limiteOutubroCpuServidor40,
    limiteNovembroCpuServidor40,
    limiteDezembroCpuServidor40,
    limiteJaneiroRamServidor40,
    limiteFevereiroRamServidor40,
    limiteMarcoRamServidor40,
    limiteAbrilRamServidor40,
    limiteMaioRamServidor40,
    limiteJunhoRamServidor40,
    limiteJulhoRamServidor40,
    limiteAgostoRamServidor40,
    limiteSetembroRamServidor40,
    limiteOutubroRamServidor40,
    limiteNovembroRamServidor40,
    limiteDezembroRamServidor40,
    limiteJaneiroDiscoServidor40,
    limiteFevereiroDiscoServidor40,
    limiteMarcoDiscoServidor40,
    limiteAbrilDiscoServidor40,
    limiteMaioDiscoServidor40,
    limiteJunhoDiscoServidor40,
    limiteJulhoDiscoServidor40,
    limiteAgostoDiscoServidor40,
    limiteSetembroDiscoServidor40,
    limiteOutubroDiscoServidor40,
    limiteNovembroDiscoServidor40,
    limiteDezembroDiscoServidor40,
    mensalJaneiroCpuServidor41,
    mensalFevereiroCpuServidor41,
    mensalMarcoCpuServidor41,
    mensalAbrilCpuServidor41,
    mensalMaioCpuServidor41,
    mensalJunhoCpuServidor41,
    mensalJulhoCpuServidor41,
    mensalAgostoCpuServidor41,
    mensalSetembroCpuServidor41,
    mensalOutubroCpuServidor41,
    mensalNovembroCpuServidor41,
    mensalDezembroCpuServidor41,
    mensalJaneiroRamServidor41,
    mensalFevereiroRamServidor41,
    mensalMarcoRamServidor41,
    mensalAbrilRamServidor41,
    mensalMaioRamServidor41,
    mensalJunhoRamServidor41,
    mensalJulhoRamServidor41,
    mensalAgostoRamServidor41,
    mensalSetembroRamServidor41,
    mensalOutubroRamServidor41,
    mensalNovembroRamServidor41,
    mensalDezembroRamServidor41,
    mensalJaneiroDiscoServidor41,
    mensalFevereiroDiscoServidor41,
    mensalMarcoDiscoServidor41,
    mensalAbrilDiscoServidor41,
    mensalMaioDiscoServidor41,
    mensalJunhoDiscoServidor41,
    mensalJulhoDiscoServidor41,
    mensalAgostoDiscoServidor41,
    mensalSetembroDiscoServidor41,
    mensalOutubroDiscoServidor41,
    mensalNovembroDiscoServidor41,
    mensalDezembroDiscoServidor41,
    limiteJaneiroCpuServidor41,
    limiteFevereiroCpuServidor41,
    limiteMarcoCpuServidor41,
    limiteAbrilCpuServidor41,
    limiteMaioCpuServidor41,
    limiteJunhoCpuServidor41,
    limiteJulhoCpuServidor41,
    limiteAgostoCpuServidor41,
    limiteSetembroCpuServidor41,
    limiteOutubroCpuServidor41,
    limiteNovembroCpuServidor41,
    limiteDezembroCpuServidor41,
    limiteJaneiroRamServidor41,
    limiteFevereiroRamServidor41,
    limiteMarcoRamServidor41,
    limiteAbrilRamServidor41,
    limiteMaioRamServidor41,
    limiteJunhoRamServidor41,
    limiteJulhoRamServidor41,
    limiteAgostoRamServidor41,
    limiteSetembroRamServidor41,
    limiteOutubroRamServidor41,
    limiteNovembroRamServidor41,
    limiteDezembroRamServidor41,
    limiteJaneiroDiscoServidor41,
    limiteFevereiroDiscoServidor41,
    limiteMarcoDiscoServidor41,
    limiteAbrilDiscoServidor41,
    limiteMaioDiscoServidor41,
    limiteJunhoDiscoServidor41,
    limiteJulhoDiscoServidor41,
    limiteAgostoDiscoServidor41,
    limiteSetembroDiscoServidor41,
    limiteOutubroDiscoServidor41,
    limiteNovembroDiscoServidor41,
    limiteDezembroDiscoServidor41,
    mensalJaneiroCpuServidor42,
    mensalFevereiroCpuServidor42,
    mensalMarcoCpuServidor42,
    mensalAbrilCpuServidor42,
    mensalMaioCpuServidor42,
    mensalJunhoCpuServidor42,
    mensalJulhoCpuServidor42,
    mensalAgostoCpuServidor42,
    mensalSetembroCpuServidor42,
    mensalOutubroCpuServidor42,
    mensalNovembroCpuServidor42,
    mensalDezembroCpuServidor42,
    mensalJaneiroRamServidor42,
    mensalFevereiroRamServidor42,
    mensalMarcoRamServidor42,
    mensalAbrilRamServidor42,
    mensalMaioRamServidor42,
    mensalJunhoRamServidor42,
    mensalJulhoRamServidor42,
    mensalAgostoRamServidor42,
    mensalSetembroRamServidor42,
    mensalOutubroRamServidor42,
    mensalNovembroRamServidor42,
    mensalDezembroRamServidor42,
    mensalJaneiroDiscoServidor42,
    mensalFevereiroDiscoServidor42,
    mensalMarcoDiscoServidor42,
    mensalAbrilDiscoServidor42,
    mensalMaioDiscoServidor42,
    mensalJunhoDiscoServidor42,
    mensalJulhoDiscoServidor42,
    mensalAgostoDiscoServidor42,
    mensalSetembroDiscoServidor42,
    mensalOutubroDiscoServidor42,
    mensalNovembroDiscoServidor42,
    mensalDezembroDiscoServidor42,
    limiteJaneiroCpuServidor42,
    limiteFevereiroCpuServidor42,
    limiteMarcoCpuServidor42,
    limiteAbrilCpuServidor42,
    limiteMaioCpuServidor42,
    limiteJunhoCpuServidor42,
    limiteJulhoCpuServidor42,
    limiteAgostoCpuServidor42,
    limiteSetembroCpuServidor42,
    limiteOutubroCpuServidor42,
    limiteNovembroCpuServidor42,
    limiteDezembroCpuServidor42,
    limiteJaneiroRamServidor42,
    limiteFevereiroRamServidor42,
    limiteMarcoRamServidor42,
    limiteAbrilRamServidor42,
    limiteMaioRamServidor42,
    limiteJunhoRamServidor42,
    limiteJulhoRamServidor42,
    limiteAgostoRamServidor42,
    limiteSetembroRamServidor42,
    limiteOutubroRamServidor42,
    limiteNovembroRamServidor42,
    limiteDezembroRamServidor42,
    limiteJaneiroDiscoServidor42,
    limiteFevereiroDiscoServidor42,
    limiteMarcoDiscoServidor42,
    limiteAbrilDiscoServidor42,
    limiteMaioDiscoServidor42,
    limiteJunhoDiscoServidor42,
    limiteJulhoDiscoServidor42,
    limiteAgostoDiscoServidor42,
    limiteSetembroDiscoServidor42,
    limiteOutubroDiscoServidor42,
    limiteNovembroDiscoServidor42,
    limiteDezembroDiscoServidor42,
    mensalJaneiroCpuServidor43,
    mensalFevereiroCpuServidor43,
    mensalMarcoCpuServidor43,
    mensalAbrilCpuServidor43,
    mensalMaioCpuServidor43,
    mensalJunhoCpuServidor43,
    mensalJulhoCpuServidor43,
    mensalAgostoCpuServidor43,
    mensalSetembroCpuServidor43,
    mensalOutubroCpuServidor43,
    mensalNovembroCpuServidor43,
    mensalDezembroCpuServidor43,
    mensalJaneiroRamServidor43,
    mensalFevereiroRamServidor43,
    mensalMarcoRamServidor43,
    mensalAbrilRamServidor43,
    mensalMaioRamServidor43,
    mensalJunhoRamServidor43,
    mensalJulhoRamServidor43,
    mensalAgostoRamServidor43,
    mensalSetembroRamServidor43,
    mensalOutubroRamServidor43,
    mensalNovembroRamServidor43,
    mensalDezembroRamServidor43,
    mensalJaneiroDiscoServidor43,
    mensalFevereiroDiscoServidor43,
    mensalMarcoDiscoServidor43,
    mensalAbrilDiscoServidor43,
    mensalMaioDiscoServidor43,
    mensalJunhoDiscoServidor43,
    mensalJulhoDiscoServidor43,
    mensalAgostoDiscoServidor43,
    mensalSetembroDiscoServidor43,
    mensalOutubroDiscoServidor43,
    mensalNovembroDiscoServidor43,
    mensalDezembroDiscoServidor43,
    limiteJaneiroCpuServidor43,
    limiteFevereiroCpuServidor43,
    limiteMarcoCpuServidor43,
    limiteAbrilCpuServidor43,
    limiteMaioCpuServidor43,
    limiteJunhoCpuServidor43,
    limiteJulhoCpuServidor43,
    limiteAgostoCpuServidor43,
    limiteSetembroCpuServidor43,
    limiteOutubroCpuServidor43,
    limiteNovembroCpuServidor43,
    limiteDezembroCpuServidor43,
    limiteJaneiroRamServidor43,
    limiteFevereiroRamServidor43,
    limiteMarcoRamServidor43,
    limiteAbrilRamServidor43,
    limiteMaioRamServidor43,
    limiteJunhoRamServidor43,
    limiteJulhoRamServidor43,
    limiteAgostoRamServidor43,
    limiteSetembroRamServidor43,
    limiteOutubroRamServidor43,
    limiteNovembroRamServidor43,
    limiteDezembroRamServidor43,
    limiteJaneiroDiscoServidor43,
    limiteFevereiroDiscoServidor43,
    limiteMarcoDiscoServidor43,
    limiteAbrilDiscoServidor43,
    limiteMaioDiscoServidor43,
    limiteJunhoDiscoServidor43,
    limiteJulhoDiscoServidor43,
    limiteAgostoDiscoServidor43,
    limiteSetembroDiscoServidor43,
    limiteOutubroDiscoServidor43,
    limiteNovembroDiscoServidor43,
    limiteDezembroDiscoServidor43,
    mensalJaneiroCpuServidor44,
    mensalFevereiroCpuServidor44,
    mensalMarcoCpuServidor44,
    mensalAbrilCpuServidor44,
    mensalMaioCpuServidor44,
    mensalJunhoCpuServidor44,
    mensalJulhoCpuServidor44,
    mensalAgostoCpuServidor44,
    mensalSetembroCpuServidor44,
    mensalOutubroCpuServidor44,
    mensalNovembroCpuServidor44,
    mensalDezembroCpuServidor44,
    mensalJaneiroRamServidor44,
    mensalFevereiroRamServidor44,
    mensalMarcoRamServidor44,
    mensalAbrilRamServidor44,
    mensalMaioRamServidor44,
    mensalJunhoRamServidor44,
    mensalJulhoRamServidor44,
    mensalAgostoRamServidor44,
    mensalSetembroRamServidor44,
    mensalOutubroRamServidor44,
    mensalNovembroRamServidor44,
    mensalDezembroRamServidor44,
    mensalJaneiroDiscoServidor44,
    mensalFevereiroDiscoServidor44,
    mensalMarcoDiscoServidor44,
    mensalAbrilDiscoServidor44,
    mensalMaioDiscoServidor44,
    mensalJunhoDiscoServidor44,
    mensalJulhoDiscoServidor44,
    mensalAgostoDiscoServidor44,
    mensalSetembroDiscoServidor44,
    mensalOutubroDiscoServidor44,
    mensalNovembroDiscoServidor44,
    mensalDezembroDiscoServidor44,
    limiteJaneiroCpuServidor44,
    limiteFevereiroCpuServidor44,
    limiteMarcoCpuServidor44,
    limiteAbrilCpuServidor44,
    limiteMaioCpuServidor44,
    limiteJunhoCpuServidor44,
    limiteJulhoCpuServidor44,
    limiteAgostoCpuServidor44,
    limiteSetembroCpuServidor44,
    limiteOutubroCpuServidor44,
    limiteNovembroCpuServidor44,
    limiteDezembroCpuServidor44,
    limiteJaneiroRamServidor44,
    limiteFevereiroRamServidor44,
    limiteMarcoRamServidor44,
    limiteAbrilRamServidor44,
    limiteMaioRamServidor44,
    limiteJunhoRamServidor44,
    limiteJulhoRamServidor44,
    limiteAgostoRamServidor44,
    limiteSetembroRamServidor44,
    limiteOutubroRamServidor44,
    limiteNovembroRamServidor44,
    limiteDezembroRamServidor44,
    limiteJaneiroDiscoServidor44,
    limiteFevereiroDiscoServidor44,
    limiteMarcoDiscoServidor44,
    limiteAbrilDiscoServidor44,
    limiteMaioDiscoServidor44,
    limiteJunhoDiscoServidor44,
    limiteJulhoDiscoServidor44,
    limiteAgostoDiscoServidor44,
    limiteSetembroDiscoServidor44,
    limiteOutubroDiscoServidor44,
    limiteNovembroDiscoServidor44,
    limiteDezembroDiscoServidor44,
    mensalJaneiroCpuServidor45,
    mensalFevereiroCpuServidor45,
    mensalMarcoCpuServidor45,
    mensalAbrilCpuServidor45,
    mensalMaioCpuServidor45,
    mensalJunhoCpuServidor45,
    mensalJulhoCpuServidor45,
    mensalAgostoCpuServidor45,
    mensalSetembroCpuServidor45,
    mensalOutubroCpuServidor45,
    mensalNovembroCpuServidor45,
    mensalDezembroCpuServidor45,
    mensalJaneiroRamServidor45,
    mensalFevereiroRamServidor45,
    mensalMarcoRamServidor45,
    mensalAbrilRamServidor45,
    mensalMaioRamServidor45,
    mensalJunhoRamServidor45,
    mensalJulhoRamServidor45,
    mensalAgostoRamServidor45,
    mensalSetembroRamServidor45,
    mensalOutubroRamServidor45,
    mensalNovembroRamServidor45,
    mensalDezembroRamServidor45,
    mensalJaneiroDiscoServidor45,
    mensalFevereiroDiscoServidor45,
    mensalMarcoDiscoServidor45,
    mensalAbrilDiscoServidor45,
    mensalMaioDiscoServidor45,
    mensalJunhoDiscoServidor45,
    mensalJulhoDiscoServidor45,
    mensalAgostoDiscoServidor45,
    mensalSetembroDiscoServidor45,
    mensalOutubroDiscoServidor45,
    mensalNovembroDiscoServidor45,
    mensalDezembroDiscoServidor45,
    limiteJaneiroCpuServidor45,
    limiteFevereiroCpuServidor45,
    limiteMarcoCpuServidor45,
    limiteAbrilCpuServidor45,
    limiteMaioCpuServidor45,
    limiteJunhoCpuServidor45,
    limiteJulhoCpuServidor45,
    limiteAgostoCpuServidor45,
    limiteSetembroCpuServidor45,
    limiteOutubroCpuServidor45,
    limiteNovembroCpuServidor45,
    limiteDezembroCpuServidor45,
    limiteJaneiroRamServidor45,
    limiteFevereiroRamServidor45,
    limiteMarcoRamServidor45,
    limiteAbrilRamServidor45,
    limiteMaioRamServidor45,
    limiteJunhoRamServidor45,
    limiteJulhoRamServidor45,
    limiteAgostoRamServidor45,
    limiteSetembroRamServidor45,
    limiteOutubroRamServidor45,
    limiteNovembroRamServidor45,
    limiteDezembroRamServidor45,
    limiteJaneiroDiscoServidor45,
    limiteFevereiroDiscoServidor45,
    limiteMarcoDiscoServidor45,
    limiteAbrilDiscoServidor45,
    limiteMaioDiscoServidor45,
    limiteJunhoDiscoServidor45,
    limiteJulhoDiscoServidor45,
    limiteAgostoDiscoServidor45,
    limiteSetembroDiscoServidor45,
    limiteOutubroDiscoServidor45,
    limiteNovembroDiscoServidor45,
    limiteDezembroDiscoServidor45,
    mensalJaneiroCpuServidor46,
    mensalFevereiroCpuServidor46,
    mensalMarcoCpuServidor46,
    mensalAbrilCpuServidor46,
    mensalMaioCpuServidor46,
    mensalJunhoCpuServidor46,
    mensalJulhoCpuServidor46,
    mensalAgostoCpuServidor46,
    mensalSetembroCpuServidor46,
    mensalOutubroCpuServidor46,
    mensalNovembroCpuServidor46,
    mensalDezembroCpuServidor46,
    mensalJaneiroRamServidor46,
    mensalFevereiroRamServidor46,
    mensalMarcoRamServidor46,
    mensalAbrilRamServidor46,
    mensalMaioRamServidor46,
    mensalJunhoRamServidor46,
    mensalJulhoRamServidor46,
    mensalAgostoRamServidor46,
    mensalSetembroRamServidor46,
    mensalOutubroRamServidor46,
    mensalNovembroRamServidor46,
    mensalDezembroRamServidor46,
    mensalJaneiroDiscoServidor46,
    mensalFevereiroDiscoServidor46,
    mensalMarcoDiscoServidor46,
    mensalAbrilDiscoServidor46,
    mensalMaioDiscoServidor46,
    mensalJunhoDiscoServidor46,
    mensalJulhoDiscoServidor46,
    mensalAgostoDiscoServidor46,
    mensalSetembroDiscoServidor46,
    mensalOutubroDiscoServidor46,
    mensalNovembroDiscoServidor46,
    mensalDezembroDiscoServidor46,
    limiteJaneiroCpuServidor46,
    limiteFevereiroCpuServidor46,
    limiteMarcoCpuServidor46,
    limiteAbrilCpuServidor46,
    limiteMaioCpuServidor46,
    limiteJunhoCpuServidor46,
    limiteJulhoCpuServidor46,
    limiteAgostoCpuServidor46,
    limiteSetembroCpuServidor46,
    limiteOutubroCpuServidor46,
    limiteNovembroCpuServidor46,
    limiteDezembroCpuServidor46,
    limiteJaneiroRamServidor46,
    limiteFevereiroRamServidor46,
    limiteMarcoRamServidor46,
    limiteAbrilRamServidor46,
    limiteMaioRamServidor46,
    limiteJunhoRamServidor46,
    limiteJulhoRamServidor46,
    limiteAgostoRamServidor46,
    limiteSetembroRamServidor46,
    limiteOutubroRamServidor46,
    limiteNovembroRamServidor46,
    limiteDezembroRamServidor46,
    limiteJaneiroDiscoServidor46,
    limiteFevereiroDiscoServidor46,
    limiteMarcoDiscoServidor46,
    limiteAbrilDiscoServidor46,
    limiteMaioDiscoServidor46,
    limiteJunhoDiscoServidor46,
    limiteJulhoDiscoServidor46,
    limiteAgostoDiscoServidor46,
    limiteSetembroDiscoServidor46,
    limiteOutubroDiscoServidor46,
    limiteNovembroDiscoServidor46,
    limiteDezembroDiscoServidor46,
    mensalJaneiroCpuServidor47,
    mensalFevereiroCpuServidor47,
    mensalMarcoCpuServidor47,
    mensalAbrilCpuServidor47,
    mensalMaioCpuServidor47,
    mensalJunhoCpuServidor47,
    mensalJulhoCpuServidor47,
    mensalAgostoCpuServidor47,
    mensalSetembroCpuServidor47,
    mensalOutubroCpuServidor47,
    mensalNovembroCpuServidor47,
    mensalDezembroCpuServidor47,
    mensalJaneiroRamServidor47,
    mensalFevereiroRamServidor47,
    mensalMarcoRamServidor47,
    mensalAbrilRamServidor47,
    mensalMaioRamServidor47,
    mensalJunhoRamServidor47,
    mensalJulhoRamServidor47,
    mensalAgostoRamServidor47,
    mensalSetembroRamServidor47,
    mensalOutubroRamServidor47,
    mensalNovembroRamServidor47,
    mensalDezembroRamServidor47,
    mensalJaneiroDiscoServidor47,
    mensalFevereiroDiscoServidor47,
    mensalMarcoDiscoServidor47,
    mensalAbrilDiscoServidor47,
    mensalMaioDiscoServidor47,
    mensalJunhoDiscoServidor47,
    mensalJulhoDiscoServidor47,
    mensalAgostoDiscoServidor47,
    mensalSetembroDiscoServidor47,
    mensalOutubroDiscoServidor47,
    mensalNovembroDiscoServidor47,
    mensalDezembroDiscoServidor47,
    limiteJaneiroCpuServidor47,
    limiteFevereiroCpuServidor47,
    limiteMarcoCpuServidor47,
    limiteAbrilCpuServidor47,
    limiteMaioCpuServidor47,
    limiteJunhoCpuServidor47,
    limiteJulhoCpuServidor47,
    limiteAgostoCpuServidor47,
    limiteSetembroCpuServidor47,
    limiteOutubroCpuServidor47,
    limiteNovembroCpuServidor47,
    limiteDezembroCpuServidor47,
    limiteJaneiroRamServidor47,
    limiteFevereiroRamServidor47,
    limiteMarcoRamServidor47,
    limiteAbrilRamServidor47,
    limiteMaioRamServidor47,
    limiteJunhoRamServidor47,
    limiteJulhoRamServidor47,
    limiteAgostoRamServidor47,
    limiteSetembroRamServidor47,
    limiteOutubroRamServidor47,
    limiteNovembroRamServidor47,
    limiteDezembroRamServidor47,
    limiteJaneiroDiscoServidor47,
    limiteFevereiroDiscoServidor47,
    limiteMarcoDiscoServidor47,
    limiteAbrilDiscoServidor47,
    limiteMaioDiscoServidor47,
    limiteJunhoDiscoServidor47,
    limiteJulhoDiscoServidor47,
    limiteAgostoDiscoServidor47,
    limiteSetembroDiscoServidor47,
    limiteOutubroDiscoServidor47,
    limiteNovembroDiscoServidor47,
    limiteDezembroDiscoServidor47,
    mensalJaneiroCpuServidor48,
    mensalFevereiroCpuServidor48,
    mensalMarcoCpuServidor48,
    mensalAbrilCpuServidor48,
    mensalMaioCpuServidor48,
    mensalJunhoCpuServidor48,
    mensalJulhoCpuServidor48,
    mensalAgostoCpuServidor48,
    mensalSetembroCpuServidor48,
    mensalOutubroCpuServidor48,
    mensalNovembroCpuServidor48,
    mensalDezembroCpuServidor48,
    mensalJaneiroRamServidor48,
    mensalFevereiroRamServidor48,
    mensalMarcoRamServidor48,
    mensalAbrilRamServidor48,
    mensalMaioRamServidor48,
    mensalJunhoRamServidor48,
    mensalJulhoRamServidor48,
    mensalAgostoRamServidor48,
    mensalSetembroRamServidor48,
    mensalOutubroRamServidor48,
    mensalNovembroRamServidor48,
    mensalDezembroRamServidor48,
    mensalJaneiroDiscoServidor48,
    mensalFevereiroDiscoServidor48,
    mensalMarcoDiscoServidor48,
    mensalAbrilDiscoServidor48,
    mensalMaioDiscoServidor48,
    mensalJunhoDiscoServidor48,
    mensalJulhoDiscoServidor48,
    mensalAgostoDiscoServidor48,
    mensalSetembroDiscoServidor48,
    mensalOutubroDiscoServidor48,
    mensalNovembroDiscoServidor48,
    mensalDezembroDiscoServidor48,
    limiteJaneiroCpuServidor48,
    limiteFevereiroCpuServidor48,
    limiteMarcoCpuServidor48,
    limiteAbrilCpuServidor48,
    limiteMaioCpuServidor48,
    limiteJunhoCpuServidor48,
    limiteJulhoCpuServidor48,
    limiteAgostoCpuServidor48,
    limiteSetembroCpuServidor48,
    limiteOutubroCpuServidor48,
    limiteNovembroCpuServidor48,
    limiteDezembroCpuServidor48,
    limiteJaneiroRamServidor48,
    limiteFevereiroRamServidor48,
    limiteMarcoRamServidor48,
    limiteAbrilRamServidor48,
    limiteMaioRamServidor48,
    limiteJunhoRamServidor48,
    limiteJulhoRamServidor48,
    limiteAgostoRamServidor48,
    limiteSetembroRamServidor48,
    limiteOutubroRamServidor48,
    limiteNovembroRamServidor48,
    limiteDezembroRamServidor48,
    limiteJaneiroDiscoServidor48,
    limiteFevereiroDiscoServidor48,
    limiteMarcoDiscoServidor48,
    limiteAbrilDiscoServidor48,
    limiteMaioDiscoServidor48,
    limiteJunhoDiscoServidor48,
    limiteJulhoDiscoServidor48,
    limiteAgostoDiscoServidor48,
    limiteSetembroDiscoServidor48,
    limiteOutubroDiscoServidor48,
    limiteNovembroDiscoServidor48,
    limiteDezembroDiscoServidor48,
    mensalJaneiroCpuServidor49,
    mensalFevereiroCpuServidor49,
    mensalMarcoCpuServidor49,
    mensalAbrilCpuServidor49,
    mensalMaioCpuServidor49,
    mensalJunhoCpuServidor49,
    mensalJulhoCpuServidor49,
    mensalAgostoCpuServidor49,
    mensalSetembroCpuServidor49,
    mensalOutubroCpuServidor49,
    mensalNovembroCpuServidor49,
    mensalDezembroCpuServidor49,
    mensalJaneiroRamServidor49,
    mensalFevereiroRamServidor49,
    mensalMarcoRamServidor49,
    mensalAbrilRamServidor49,
    mensalMaioRamServidor49,
    mensalJunhoRamServidor49,
    mensalJulhoRamServidor49,
    mensalAgostoRamServidor49,
    mensalSetembroRamServidor49,
    mensalOutubroRamServidor49,
    mensalNovembroRamServidor49,
    mensalDezembroRamServidor49,
    mensalJaneiroDiscoServidor49,
    mensalFevereiroDiscoServidor49,
    mensalMarcoDiscoServidor49,
    mensalAbrilDiscoServidor49,
    mensalMaioDiscoServidor49,
    mensalJunhoDiscoServidor49,
    mensalJulhoDiscoServidor49,
    mensalAgostoDiscoServidor49,
    mensalSetembroDiscoServidor49,
    mensalOutubroDiscoServidor49,
    mensalNovembroDiscoServidor49,
    mensalDezembroDiscoServidor49,
    limiteJaneiroCpuServidor49,
    limiteFevereiroCpuServidor49,
    limiteMarcoCpuServidor49,
    limiteAbrilCpuServidor49,
    limiteMaioCpuServidor49,
    limiteJunhoCpuServidor49,
    limiteJulhoCpuServidor49,
    limiteAgostoCpuServidor49,
    limiteSetembroCpuServidor49,
    limiteOutubroCpuServidor49,
    limiteNovembroCpuServidor49,
    limiteDezembroCpuServidor49,
    limiteJaneiroRamServidor49,
    limiteFevereiroRamServidor49,
    limiteMarcoRamServidor49,
    limiteAbrilRamServidor49,
    limiteMaioRamServidor49,
    limiteJunhoRamServidor49,
    limiteJulhoRamServidor49,
    limiteAgostoRamServidor49,
    limiteSetembroRamServidor49,
    limiteOutubroRamServidor49,
    limiteNovembroRamServidor49,
    limiteDezembroRamServidor49,
    limiteJaneiroDiscoServidor49,
    limiteFevereiroDiscoServidor49,
    limiteMarcoDiscoServidor49,
    limiteAbrilDiscoServidor49,
    limiteMaioDiscoServidor49,
    limiteJunhoDiscoServidor49,
    limiteJulhoDiscoServidor49,
    limiteAgostoDiscoServidor49,
    limiteSetembroDiscoServidor49,
    limiteOutubroDiscoServidor49,
    limiteNovembroDiscoServidor49,
    limiteDezembroDiscoServidor49,
    mensalJaneiroCpuServidor50,
    mensalFevereiroCpuServidor50,
    mensalMarcoCpuServidor50,
    mensalAbrilCpuServidor50,
    mensalMaioCpuServidor50,
    mensalJunhoCpuServidor50,
    mensalJulhoCpuServidor50,
    mensalAgostoCpuServidor50,
    mensalSetembroCpuServidor50,
    mensalOutubroCpuServidor50,
    mensalNovembroCpuServidor50,
    mensalDezembroCpuServidor50,
    mensalJaneiroRamServidor50,
    mensalFevereiroRamServidor50,
    mensalMarcoRamServidor50,
    mensalAbrilRamServidor50,
    mensalMaioRamServidor50,
    mensalJunhoRamServidor50,
    mensalJulhoRamServidor50,
    mensalAgostoRamServidor50,
    mensalSetembroRamServidor50,
    mensalOutubroRamServidor50,
    mensalNovembroRamServidor50,
    mensalDezembroRamServidor50,
    mensalJaneiroDiscoServidor50,
    mensalFevereiroDiscoServidor50,
    mensalMarcoDiscoServidor50,
    mensalAbrilDiscoServidor50,
    mensalMaioDiscoServidor50,
    mensalJunhoDiscoServidor50,
    mensalJulhoDiscoServidor50,
    mensalAgostoDiscoServidor50,
    mensalSetembroDiscoServidor50,
    mensalOutubroDiscoServidor50,
    mensalNovembroDiscoServidor50,
    mensalDezembroDiscoServidor50,
    limiteJaneiroCpuServidor50,
    limiteFevereiroCpuServidor50,
    limiteMarcoCpuServidor50,
    limiteAbrilCpuServidor50,
    limiteMaioCpuServidor50,
    limiteJunhoCpuServidor50,
    limiteJulhoCpuServidor50,
    limiteAgostoCpuServidor50,
    limiteSetembroCpuServidor50,
    limiteOutubroCpuServidor50,
    limiteNovembroCpuServidor50,
    limiteDezembroCpuServidor50,
    limiteJaneiroRamServidor50,
    limiteFevereiroRamServidor50,
    limiteMarcoRamServidor50,
    limiteAbrilRamServidor50,
    limiteMaioRamServidor50,
    limiteJunhoRamServidor50,
    limiteJulhoRamServidor50,
    limiteAgostoRamServidor50,
    limiteSetembroRamServidor50,
    limiteOutubroRamServidor50,
    limiteNovembroRamServidor50,
    limiteDezembroRamServidor50,
    limiteJaneiroDiscoServidor50,
    limiteFevereiroDiscoServidor50,
    limiteMarcoDiscoServidor50,
    limiteAbrilDiscoServidor50,
    limiteMaioDiscoServidor50,
    limiteJunhoDiscoServidor50,
    limiteJulhoDiscoServidor50,
    limiteAgostoDiscoServidor50,
    limiteSetembroDiscoServidor50,
    limiteOutubroDiscoServidor50,
    limiteNovembroDiscoServidor50,
    limiteDezembroDiscoServidor50,
    mensalJaneiroCpuServidor51,
    mensalFevereiroCpuServidor51,
    mensalMarcoCpuServidor51,
    mensalAbrilCpuServidor51,
    mensalMaioCpuServidor51,
    mensalJunhoCpuServidor51,
    mensalJulhoCpuServidor51,
    mensalAgostoCpuServidor51,
    mensalSetembroCpuServidor51,
    mensalOutubroCpuServidor51,
    mensalNovembroCpuServidor51,
    mensalDezembroCpuServidor51,
    mensalJaneiroRamServidor51,
    mensalFevereiroRamServidor51,
    mensalMarcoRamServidor51,
    mensalAbrilRamServidor51,
    mensalMaioRamServidor51,
    mensalJunhoRamServidor51,
    mensalJulhoRamServidor51,
    mensalAgostoRamServidor51,
    mensalSetembroRamServidor51,
    mensalOutubroRamServidor51,
    mensalNovembroRamServidor51,
    mensalDezembroRamServidor51,
    mensalJaneiroDiscoServidor51,
    mensalFevereiroDiscoServidor51,
    mensalMarcoDiscoServidor51,
    mensalAbrilDiscoServidor51,
    mensalMaioDiscoServidor51,
    mensalJunhoDiscoServidor51,
    mensalJulhoDiscoServidor51,
    mensalAgostoDiscoServidor51,
    mensalSetembroDiscoServidor51,
    mensalOutubroDiscoServidor51,
    mensalNovembroDiscoServidor51,
    mensalDezembroDiscoServidor51,
    limiteJaneiroCpuServidor51,
    limiteFevereiroCpuServidor51,
    limiteMarcoCpuServidor51,
    limiteAbrilCpuServidor51,
    limiteMaioCpuServidor51,
    limiteJunhoCpuServidor51,
    limiteJulhoCpuServidor51,
    limiteAgostoCpuServidor51,
    limiteSetembroCpuServidor51,
    limiteOutubroCpuServidor51,
    limiteNovembroCpuServidor51,
    limiteDezembroCpuServidor51,
    limiteJaneiroRamServidor51,
    limiteFevereiroRamServidor51,
    limiteMarcoRamServidor51,
    limiteAbrilRamServidor51,
    limiteMaioRamServidor51,
    limiteJunhoRamServidor51,
    limiteJulhoRamServidor51,
    limiteAgostoRamServidor51,
    limiteSetembroRamServidor51,
    limiteOutubroRamServidor51,
    limiteNovembroRamServidor51,
    limiteDezembroRamServidor51,
    limiteJaneiroDiscoServidor51,
    limiteFevereiroDiscoServidor51,
    limiteMarcoDiscoServidor51,
    limiteAbrilDiscoServidor51,
    limiteMaioDiscoServidor51,
    limiteJunhoDiscoServidor51,
    limiteJulhoDiscoServidor51,
    limiteAgostoDiscoServidor51,
    limiteSetembroDiscoServidor51,
    limiteOutubroDiscoServidor51,
    limiteNovembroDiscoServidor51,
    limiteDezembroDiscoServidor51,
    mensalJaneiroCpuServidor52,
    mensalFevereiroCpuServidor52,
    mensalMarcoCpuServidor52,
    mensalAbrilCpuServidor52,
    mensalMaioCpuServidor52,
    mensalJunhoCpuServidor52,
    mensalJulhoCpuServidor52,
    mensalAgostoCpuServidor52,
    mensalSetembroCpuServidor52,
    mensalOutubroCpuServidor52,
    mensalNovembroCpuServidor52,
    mensalDezembroCpuServidor52,
    mensalJaneiroRamServidor52,
    mensalFevereiroRamServidor52,
    mensalMarcoRamServidor52,
    mensalAbrilRamServidor52,
    mensalMaioRamServidor52,
    mensalJunhoRamServidor52,
    mensalJulhoRamServidor52,
    mensalAgostoRamServidor52,
    mensalSetembroRamServidor52,
    mensalOutubroRamServidor52,
    mensalNovembroRamServidor52,
    mensalDezembroRamServidor52,
    mensalJaneiroDiscoServidor52,
    mensalFevereiroDiscoServidor52,
    mensalMarcoDiscoServidor52,
    mensalAbrilDiscoServidor52,
    mensalMaioDiscoServidor52,
    mensalJunhoDiscoServidor52,
    mensalJulhoDiscoServidor52,
    mensalAgostoDiscoServidor52,
    mensalSetembroDiscoServidor52,
    mensalOutubroDiscoServidor52,
    mensalNovembroDiscoServidor52,
    mensalDezembroDiscoServidor52,
    limiteJaneiroCpuServidor52,
    limiteFevereiroCpuServidor52,
    limiteMarcoCpuServidor52,
    limiteAbrilCpuServidor52,
    limiteMaioCpuServidor52,
    limiteJunhoCpuServidor52,
    limiteJulhoCpuServidor52,
    limiteAgostoCpuServidor52,
    limiteSetembroCpuServidor52,
    limiteOutubroCpuServidor52,
    limiteNovembroCpuServidor52,
    limiteDezembroCpuServidor52,
    limiteJaneiroRamServidor52,
    limiteFevereiroRamServidor52,
    limiteMarcoRamServidor52,
    limiteAbrilRamServidor52,
    limiteMaioRamServidor52,
    limiteJunhoRamServidor52,
    limiteJulhoRamServidor52,
    limiteAgostoRamServidor52,
    limiteSetembroRamServidor52,
    limiteOutubroRamServidor52,
    limiteNovembroRamServidor52,
    limiteDezembroRamServidor52,
    limiteJaneiroDiscoServidor52,
    limiteFevereiroDiscoServidor52,
    limiteMarcoDiscoServidor52,
    limiteAbrilDiscoServidor52,
    limiteMaioDiscoServidor52,
    limiteJunhoDiscoServidor52,
    limiteJulhoDiscoServidor52,
    limiteAgostoDiscoServidor52,
    limiteSetembroDiscoServidor52,
    limiteOutubroDiscoServidor52,
    limiteNovembroDiscoServidor52,
    limiteDezembroDiscoServidor52,
    mensalJaneiroCpuServidor53,
    mensalFevereiroCpuServidor53,
    mensalMarcoCpuServidor53,
    mensalAbrilCpuServidor53,
    mensalMaioCpuServidor53,
    mensalJunhoCpuServidor53,
    mensalJulhoCpuServidor53,
    mensalAgostoCpuServidor53,
    mensalSetembroCpuServidor53,
    mensalOutubroCpuServidor53,
    mensalNovembroCpuServidor53,
    mensalDezembroCpuServidor53,
    mensalJaneiroRamServidor53,
    mensalFevereiroRamServidor53,
    mensalMarcoRamServidor53,
    mensalAbrilRamServidor53,
    mensalMaioRamServidor53,
    mensalJunhoRamServidor53,
    mensalJulhoRamServidor53,
    mensalAgostoRamServidor53,
    mensalSetembroRamServidor53,
    mensalOutubroRamServidor53,
    mensalNovembroRamServidor53,
    mensalDezembroRamServidor53,
    mensalJaneiroDiscoServidor53,
    mensalFevereiroDiscoServidor53,
    mensalMarcoDiscoServidor53,
    mensalAbrilDiscoServidor53,
    mensalMaioDiscoServidor53,
    mensalJunhoDiscoServidor53,
    mensalJulhoDiscoServidor53,
    mensalAgostoDiscoServidor53,
    mensalSetembroDiscoServidor53,
    mensalOutubroDiscoServidor53,
    mensalNovembroDiscoServidor53,
    mensalDezembroDiscoServidor53,
    limiteJaneiroCpuServidor53,
    limiteFevereiroCpuServidor53,
    limiteMarcoCpuServidor53,
    limiteAbrilCpuServidor53,
    limiteMaioCpuServidor53,
    limiteJunhoCpuServidor53,
    limiteJulhoCpuServidor53,
    limiteAgostoCpuServidor53,
    limiteSetembroCpuServidor53,
    limiteOutubroCpuServidor53,
    limiteNovembroCpuServidor53,
    limiteDezembroCpuServidor53,
    limiteJaneiroRamServidor53,
    limiteFevereiroRamServidor53,
    limiteMarcoRamServidor53,
    limiteAbrilRamServidor53,
    limiteMaioRamServidor53,
    limiteJunhoRamServidor53,
    limiteJulhoRamServidor53,
    limiteAgostoRamServidor53,
    limiteSetembroRamServidor53,
    limiteOutubroRamServidor53,
    limiteNovembroRamServidor53,
    limiteDezembroRamServidor53,
    limiteJaneiroDiscoServidor53,
    limiteFevereiroDiscoServidor53,
    limiteMarcoDiscoServidor53,
    limiteAbrilDiscoServidor53,
    limiteMaioDiscoServidor53,
    limiteJunhoDiscoServidor53,
    limiteJulhoDiscoServidor53,
    limiteAgostoDiscoServidor53,
    limiteSetembroDiscoServidor53,
    limiteOutubroDiscoServidor53,
    limiteNovembroDiscoServidor53,
    limiteDezembroDiscoServidor53,
    mensalJaneiroCpuServidor54,
    mensalFevereiroCpuServidor54,
    mensalMarcoCpuServidor54,
    mensalAbrilCpuServidor54,
    mensalMaioCpuServidor54,
    mensalJunhoCpuServidor54,
    mensalJulhoCpuServidor54,
    mensalAgostoCpuServidor54,
    mensalSetembroCpuServidor54,
    mensalOutubroCpuServidor54,
    mensalNovembroCpuServidor54,
    mensalDezembroCpuServidor54,
    mensalJaneiroRamServidor54,
    mensalFevereiroRamServidor54,
    mensalMarcoRamServidor54,
    mensalAbrilRamServidor54,
    mensalMaioRamServidor54,
    mensalJunhoRamServidor54,
    mensalJulhoRamServidor54,
    mensalAgostoRamServidor54,
    mensalSetembroRamServidor54,
    mensalOutubroRamServidor54,
    mensalNovembroRamServidor54,
    mensalDezembroRamServidor54,
    mensalJaneiroDiscoServidor54,
    mensalFevereiroDiscoServidor54,
    mensalMarcoDiscoServidor54,
    mensalAbrilDiscoServidor54,
    mensalMaioDiscoServidor54,
    mensalJunhoDiscoServidor54,
    mensalJulhoDiscoServidor54,
    mensalAgostoDiscoServidor54,
    mensalSetembroDiscoServidor54,
    mensalOutubroDiscoServidor54,
    mensalNovembroDiscoServidor54,
    mensalDezembroDiscoServidor54,
    limiteJaneiroCpuServidor54,
    limiteFevereiroCpuServidor54,
    limiteMarcoCpuServidor54,
    limiteAbrilCpuServidor54,
    limiteMaioCpuServidor54,
    limiteJunhoCpuServidor54,
    limiteJulhoCpuServidor54,
    limiteAgostoCpuServidor54,
    limiteSetembroCpuServidor54,
    limiteOutubroCpuServidor54,
    limiteNovembroCpuServidor54,
    limiteDezembroCpuServidor54,
    limiteJaneiroRamServidor54,
    limiteFevereiroRamServidor54,
    limiteMarcoRamServidor54,
    limiteAbrilRamServidor54,
    limiteMaioRamServidor54,
    limiteJunhoRamServidor54,
    limiteJulhoRamServidor54,
    limiteAgostoRamServidor54,
    limiteSetembroRamServidor54,
    limiteOutubroRamServidor54,
    limiteNovembroRamServidor54,
    limiteDezembroRamServidor54,
    limiteJaneiroDiscoServidor54,
    limiteFevereiroDiscoServidor54,
    limiteMarcoDiscoServidor54,
    limiteAbrilDiscoServidor54,
    limiteMaioDiscoServidor54,
    limiteJunhoDiscoServidor54,
    limiteJulhoDiscoServidor54,
    limiteAgostoDiscoServidor54,
    limiteSetembroDiscoServidor54,
    limiteOutubroDiscoServidor54,
    limiteNovembroDiscoServidor54,
    limiteDezembroDiscoServidor54,
    mensalJaneiroCpuServidor55,
    mensalFevereiroCpuServidor55,
    mensalMarcoCpuServidor55,
    mensalAbrilCpuServidor55,
    mensalMaioCpuServidor55,
    mensalJunhoCpuServidor55,
    mensalJulhoCpuServidor55,
    mensalAgostoCpuServidor55,
    mensalSetembroCpuServidor55,
    mensalOutubroCpuServidor55,
    mensalNovembroCpuServidor55,
    mensalDezembroCpuServidor55,
    mensalJaneiroRamServidor55,
    mensalFevereiroRamServidor55,
    mensalMarcoRamServidor55,
    mensalAbrilRamServidor55,
    mensalMaioRamServidor55,
    mensalJunhoRamServidor55,
    mensalJulhoRamServidor55,
    mensalAgostoRamServidor55,
    mensalSetembroRamServidor55,
    mensalOutubroRamServidor55,
    mensalNovembroRamServidor55,
    mensalDezembroRamServidor55,
    mensalJaneiroDiscoServidor55,
    mensalFevereiroDiscoServidor55,
    mensalMarcoDiscoServidor55,
    mensalAbrilDiscoServidor55,
    mensalMaioDiscoServidor55,
    mensalJunhoDiscoServidor55,
    mensalJulhoDiscoServidor55,
    mensalAgostoDiscoServidor55,
    mensalSetembroDiscoServidor55,
    mensalOutubroDiscoServidor55,
    mensalNovembroDiscoServidor55,
    mensalDezembroDiscoServidor55,
    limiteJaneiroCpuServidor55,
    limiteFevereiroCpuServidor55,
    limiteMarcoCpuServidor55,
    limiteAbrilCpuServidor55,
    limiteMaioCpuServidor55,
    limiteJunhoCpuServidor55,
    limiteJulhoCpuServidor55,
    limiteAgostoCpuServidor55,
    limiteSetembroCpuServidor55,
    limiteOutubroCpuServidor55,
    limiteNovembroCpuServidor55,
    limiteDezembroCpuServidor55,
    limiteJaneiroRamServidor55,
    limiteFevereiroRamServidor55,
    limiteMarcoRamServidor55,
    limiteAbrilRamServidor55,
    limiteMaioRamServidor55,
    limiteJunhoRamServidor55,
    limiteJulhoRamServidor55,
    limiteAgostoRamServidor55,
    limiteSetembroRamServidor55,
    limiteOutubroRamServidor55,
    limiteNovembroRamServidor55,
    limiteDezembroRamServidor55,
    limiteJaneiroDiscoServidor55,
    limiteFevereiroDiscoServidor55,
    limiteMarcoDiscoServidor55,
    limiteAbrilDiscoServidor55,
    limiteMaioDiscoServidor55,
    limiteJunhoDiscoServidor55,
    limiteJulhoDiscoServidor55,
    limiteAgostoDiscoServidor55,
    limiteSetembroDiscoServidor55,
    limiteOutubroDiscoServidor55,
    limiteNovembroDiscoServidor55,
    limiteDezembroDiscoServidor55,
    mensalJaneiroCpuServidor56,
    mensalFevereiroCpuServidor56,
    mensalMarcoCpuServidor56,
    mensalAbrilCpuServidor56,
    mensalMaioCpuServidor56,
    mensalJunhoCpuServidor56,
    mensalJulhoCpuServidor56,
    mensalAgostoCpuServidor56,
    mensalSetembroCpuServidor56,
    mensalOutubroCpuServidor56,
    mensalNovembroCpuServidor56,
    mensalDezembroCpuServidor56,
    mensalJaneiroRamServidor56,
    mensalFevereiroRamServidor56,
    mensalMarcoRamServidor56,
    mensalAbrilRamServidor56,
    mensalMaioRamServidor56,
    mensalJunhoRamServidor56,
    mensalJulhoRamServidor56,
    mensalAgostoRamServidor56,
    mensalSetembroRamServidor56,
    mensalOutubroRamServidor56,
    mensalNovembroRamServidor56,
    mensalDezembroRamServidor56,
    mensalJaneiroDiscoServidor56,
    mensalFevereiroDiscoServidor56,
    mensalMarcoDiscoServidor56,
    mensalAbrilDiscoServidor56,
    mensalMaioDiscoServidor56,
    mensalJunhoDiscoServidor56,
    mensalJulhoDiscoServidor56,
    mensalAgostoDiscoServidor56,
    mensalSetembroDiscoServidor56,
    mensalOutubroDiscoServidor56,
    mensalNovembroDiscoServidor56,
    mensalDezembroDiscoServidor56,
    limiteJaneiroCpuServidor56,
    limiteFevereiroCpuServidor56,
    limiteMarcoCpuServidor56,
    limiteAbrilCpuServidor56,
    limiteMaioCpuServidor56,
    limiteJunhoCpuServidor56,
    limiteJulhoCpuServidor56,
    limiteAgostoCpuServidor56,
    limiteSetembroCpuServidor56,
    limiteOutubroCpuServidor56,
    limiteNovembroCpuServidor56,
    limiteDezembroCpuServidor56,
    limiteJaneiroRamServidor56,
    limiteFevereiroRamServidor56,
    limiteMarcoRamServidor56,
    limiteAbrilRamServidor56,
    limiteMaioRamServidor56,
    limiteJunhoRamServidor56,
    limiteJulhoRamServidor56,
    limiteAgostoRamServidor56,
    limiteSetembroRamServidor56,
    limiteOutubroRamServidor56,
    limiteNovembroRamServidor56,
    limiteDezembroRamServidor56,
    limiteJaneiroDiscoServidor56,
    limiteFevereiroDiscoServidor56,
    limiteMarcoDiscoServidor56,
    limiteAbrilDiscoServidor56,
    limiteMaioDiscoServidor56,
    limiteJunhoDiscoServidor56,
    limiteJulhoDiscoServidor56,
    limiteAgostoDiscoServidor56,
    limiteSetembroDiscoServidor56,
    limiteOutubroDiscoServidor56,
    limiteNovembroDiscoServidor56,
    limiteDezembroDiscoServidor56,
    
}
