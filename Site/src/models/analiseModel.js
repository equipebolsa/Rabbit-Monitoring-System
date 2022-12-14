var database = require("../database/config");

function mensalJaneiroCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalFevereiroCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMarcoCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAbrilCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMaioCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJunhoCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJulhoCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAgostoCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalSetembroCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalOutubroCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalNovembroCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalDezembroCpuServidor(servidor) {
    var instrucao = `select round(avg(usoCpu)) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

// ---------------------------------------------------------------------------------

function mensalJaneiroRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalFevereiroRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMarcoRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAbrilRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMaioRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJunhoRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJulhoRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAgostoRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalSetembroRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalOutubroRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalNovembroRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalDezembroRamServidor(servidor) {
    var instrucao = `select round(avg(usoRam)) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

// -------------------------------------------------------------------------

function mensalJaneiroDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalFevereiroDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMarcoDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAbrilDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalMaioDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJunhoDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalJulhoDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalAgostoDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalSetembroDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalOutubroDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalNovembroDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function mensalDezembroDiscoServidor(servidor) {
    var instrucao = `select round(avg(usoDisco)) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-------------------------------------------------------------------------------------

function limiteJaneiroCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteFevereiroCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMarcoCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAbrilCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMaioCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJunhoCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJulhoCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAgostoCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteSetembroCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteOutubroCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteNovembroCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteDezembroCpuServidor(servidor) {
    var instrucao = `select count(usoCpu) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-------------------------------------------------------------------------------------

function limiteJaneiroRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteFevereiroRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMarcoRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAbrilRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMaioRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJunhoRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJulhoRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAgostoRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteSetembroRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteOutubroRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteNovembroRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and usoRam >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteDezembroRamServidor(servidor) {
    var instrucao = `select count(usoRam) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-----------------------------------------------------------------------------------------------------

function limiteJaneiroDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-01-01' and '2022-01-31' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteFevereiroDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-02-01' and '2022-02-28' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMarcoDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-03-01' and '2022-03-31' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAbrilDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-04-01' and '2022-04-30' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteMaioDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-05-01' and '2022-05-31' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJunhoDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-06-01' and '2022-06-30' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteJulhoDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-07-01' and '2022-07-31' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteAgostoDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-08-01' and '2022-08-31' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteSetembroDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-09-01' and '2022-09-30' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteOutubroDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-10-01' and '2022-10-31' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteNovembroDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-11-01' and '2022-11-30' and usoDisco >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

function limiteDezembroDiscoServidor(servidor) {
    var instrucao = `select count(usoDisco) as '' from analiseDados where dia between '2022-12-01' and '2022-12-31' and usoCpu >= 65 and idServidor = ${servidor};`;
    console.log(database.executar(instrucao));
    return database.executar(instrucao);   
}

//-----------------------------------------------------------------------------------------------------------------------------------


function buscarUltimasMedidas(idServidor) {
    instrucaoSql = `select usoCpu as cpu, usoRam as ram, usoDisco as disco  from analiseDados where idServidor = ${idServidor} order by dia desc limit 30;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas1(idServidor1) {
    instrucaoSql = `select usoCpu as cpu, usoRam as ram, usoDisco as disco  from analiseDados where idServidor = ${idServidor1} order by dia desc limit 30;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidas1,
    mensalJaneiroCpuServidor,
    mensalFevereiroCpuServidor,
    mensalMarcoCpuServidor,
    mensalAbrilCpuServidor,
    mensalMaioCpuServidor,
    mensalJunhoCpuServidor,
    mensalJulhoCpuServidor,
    mensalAgostoCpuServidor,
    mensalSetembroCpuServidor,
    mensalOutubroCpuServidor,
    mensalNovembroCpuServidor,
    mensalDezembroCpuServidor,
    mensalJaneiroRamServidor,
    mensalFevereiroRamServidor,
    mensalMarcoRamServidor,
    mensalAbrilRamServidor,
    mensalMaioRamServidor,
    mensalJunhoRamServidor,
    mensalJulhoRamServidor,
    mensalAgostoRamServidor,
    mensalSetembroRamServidor,
    mensalOutubroRamServidor,
    mensalNovembroRamServidor,
    mensalDezembroRamServidor,
    mensalJaneiroDiscoServidor,
    mensalFevereiroDiscoServidor,
    mensalMarcoDiscoServidor,
    mensalAbrilDiscoServidor,
    mensalMaioDiscoServidor,
    mensalJunhoDiscoServidor,
    mensalJulhoDiscoServidor,
    mensalAgostoDiscoServidor,
    mensalSetembroDiscoServidor,
    mensalOutubroDiscoServidor,
    mensalNovembroDiscoServidor,
    mensalDezembroDiscoServidor,
    limiteJaneiroCpuServidor,
    limiteFevereiroCpuServidor,
    limiteMarcoCpuServidor,
    limiteAbrilCpuServidor,
    limiteMaioCpuServidor,
    limiteJunhoCpuServidor,
    limiteJulhoCpuServidor,
    limiteAgostoCpuServidor,
    limiteSetembroCpuServidor,
    limiteOutubroCpuServidor,
    limiteNovembroCpuServidor,
    limiteDezembroCpuServidor,
    limiteJaneiroRamServidor,
    limiteFevereiroRamServidor,
    limiteMarcoRamServidor,
    limiteAbrilRamServidor,
    limiteMaioRamServidor,
    limiteJunhoRamServidor,
    limiteJulhoRamServidor,
    limiteAgostoRamServidor,
    limiteSetembroRamServidor,
    limiteOutubroRamServidor,
    limiteNovembroRamServidor,
    limiteDezembroRamServidor,
    limiteJaneiroDiscoServidor,
    limiteFevereiroDiscoServidor,
    limiteMarcoDiscoServidor,
    limiteAbrilDiscoServidor,
    limiteMaioDiscoServidor,
    limiteJunhoDiscoServidor,
    limiteJulhoDiscoServidor,
    limiteAgostoDiscoServidor,
    limiteSetembroDiscoServidor,
    limiteOutubroDiscoServidor,
    limiteNovembroDiscoServidor,
    limiteDezembroDiscoServidor,
}
