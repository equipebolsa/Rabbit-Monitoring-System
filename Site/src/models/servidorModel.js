var database = require("../database/config")


function cadastrar(setor,so,mac,serial) {
    var instrucao = `INSERT INTO servidor (fkSetor,sistemaOperacional,macAddress,serialNumber) VALUES (${setor},'${so}','${mac}','${serial}');`;
    var instrucao2 = `INSERT INTO servidor (fkSetor,sistemaOperacional,macAddress,serialNumber) VALUES (${setor},'${so}','${mac}','${serial}');`;
    instrucao2+=`SELECT IDENT_CURRENT('servidor') as id;`
    return database.update(instrucao,instrucao2);
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
function listarParametros(servidor) {
    var instrucao = `select * from parametro, metrica where fkMetrica = idMetrica and fkservidor = ${servidor}`;
    console.log(instrucao);
    return database.select(instrucao);
}

function cadastrarComponente(servidor, componente) {
    var instrucao = `INSERT INTO componenteFisico (fkServidor,tipoComponente) VALUES (${servidor}, '${componente}')`;
    var instrucao2 = `DECLARE @idServidor INT = (SELECT IDENT_CURRENT('servidor'));`
    instrucao2 += `INSERT INTO componenteFisico (fkServidor,tipoComponente) VALUES (@idServidor, '${componente}')`;
    console.log('MYSQL:',instrucao);
    console.log('AZURE:',instrucao2);
    return database.update(instrucao,instrucao2);
}
function cadastrarParametro(servidor, componente, metrica) {
    var instrucao = `INSERT INTO parametro (fkServidor,fkComponenteFisico,fkMetrica, parametroAtivo) VALUES (${servidor},${componente}, ${metrica}, 1)`;
    var instrucao2 = `DECLARE @idServidor INT = (SELECT IDENT_CURRENT('servidor'));`
    instrucao2 += `DECLARE @idComponente INT = (SELECT IDENT_CURRENT('componenteFisico'));`
    instrucao2 += `INSERT INTO parametro (fkServidor,fkComponenteFisico,fkMetrica, parametroAtivo) VALUES (@idServidor,@idComponente, ${metrica}, 1)`;
    console.log('AZURE:',instrucao2);
    return database.update(instrucao,instrucao2);
}
function atualizarParametro(servidor, metrica, status) {
    var instrucao = `update parametro set parametroAtivo = ${status} where fkMetrica = ${metrica} and fkServidor = ${servidor};`;
    console.log(instrucao);
    return database.update(instrucao);
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
    cadastrarParametro,
    listarParametros,
    atualizarParametro
}