var database = require("../database/config")


function cadastrar(setor,so,mac,serial) {
    var instrucao = `INSERT INTO servidor (fkSetor,sistemaOperacional,macAddress,serialNumber) VALUES (${setor},'${so}','${mac}','${serial}');`;
    return database.executar(instrucao);
}

function listar() {
    var instrucao = `SELECT * FROM servidor;`;
    console.log(instrucao);
    return database.executar(instrucao);
}

function listarMaquinas(id) {
    var instrucao = `SELECT * FROM servidor INNER JOIN setor ON fkSetor = idSetor INNER JOIN empresa ON fkEmpresa = idEmpresa WHERE idEmpresa = ${id};`;
    console.log(instrucao);
    return database.select(instrucao);
}

function totalServidor(id) {
    var instrucao = `SELECT count(*) FROM servidor WHERE idServidor = ${id};`;
    console.log(instrucao);
    return database.select(instrucao);
}
function menorSetor(id) {
    var instrucao = `SELECT nomeSetor, count(fkSetor) FROM servidor INNER JOIN setor ON setor.idSetor = servidor.fkSetor WHERE idServidor = ${id} ORDER BY count(fkSetor) ASC LIMIT 1;
    `;
    console.log(instrucao);
    return database.select(instrucao);
}
function maiorSetor(id) {
    var instrucao = `SELECT nomeSetor, count(fkSetor) FROM servidor INNER JOIN setor ON setor.idSetor = servidor.fkSetor WHERE idServidor = ${id} ORDER BY count(fkSetor) DESC LIMIT 1;`;
    console.log(instrucao);
    return database.select(instrucao);
}

function listarMetricas() {
    var instrucao = `SELECT * FROM metrica order by nomeMetrica`;
    console.log(instrucao);
    return database.select(instrucao);
}

function cadastrarComponente(servidor, componente) {
    var instrucao = `INSERT INTO componenteFisico (fkServidor,tipoComponente) VALUES (${servidor}, '${componente}')`;
    console.log(instrucao);
    return database.executar(instrucao);
}
function cadastrarParametro(servidor, componente, metrica) {
    var instrucao = `INSERT INTO parametro (fkServidor,fkComponenteFisico,fkMetrica) VALUES (${servidor},${componente}, ${metrica})`;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    listarMaquinas,
    listarMetricas,
    maiorSetor,
    menorSetor,
    totalServidor,
    cadastrarComponente,
    cadastrarParametro
}