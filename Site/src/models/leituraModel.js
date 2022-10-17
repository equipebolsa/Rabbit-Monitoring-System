var database = require("../database/config")


function listarCPU(id) {
    var instrucao = `SELECT * FROM leituraView WHERE idServidor = ${id} AND fkComponenteFisico = (SELECT idComponenteFisico FROM componenteFisico  WHERE fkServidor = ${id} AND tipoComponente LIKE 'CPU') ORDER BY horarioLeitura DESC LIMIT 25`;
    return database.executar(instrucao);
}
function listarRAM(id) {
    var instrucao = `SELECT * FROM leituraView WHERE idServidor = ${id} AND fkComponenteFisico = (SELECT idComponenteFisico FROM componenteFisico  WHERE fkServidor = ${id} AND tipoComponente LIKE 'RAM') ORDER BY horarioLeitura DESC LIMIT 25`;
    return database.executar(instrucao);
}
function listarDISCO(id) {
    var instrucao = `SELECT * FROM leituraView WHERE idServidor = ${id} AND fkComponenteFisico = (SELECT idComponenteFisico FROM componenteFisico  WHERE fkServidor = ${id} AND tipoComponente LIKE 'DISCO') ORDER BY horarioLeitura DESC LIMIT 25`;
    return database.executar(instrucao);
}
function listarMaquinas(id) {
    var instrucao = `SELECT idServidor, unidadeMedida, MAX(horarioLeitura), MAX(valorLeitura) as valorLeitura FROM leituraView WHERE fkEmpresa= ${id}
    GROUP BY idServidor
    ORDER BY idServidor;`;
    return database.executar(instrucao);
}
function listarUltimaCPU(id) {
    var instrucao = `
    SELECT valorLeitura, horarioLeitura, idServidor FROM leituraView WHERE idServidor = ${id}  AND fkComponenteFisico = (SELECT idComponenteFisico FROM componenteFisico  WHERE fkServidor = ${id} AND tipoComponente LIKE 'CPU') ORDER BY horarioLeitura DESC LIMIT 1;`;
    return database.executar(instrucao);
}
function listarUltimaRAM(id) {
    var instrucao = `
    SELECT valorLeitura, horarioLeitura, idServidor FROM leituraView WHERE idServidor = ${id}  AND fkComponenteFisico = (SELECT idComponenteFisico FROM componenteFisico  WHERE fkServidor = ${id} AND tipoComponente LIKE 'RAM') ORDER BY horarioLeitura DESC LIMIT 1;`;
    return database.executar(instrucao);
}



module.exports = {
    listarCPU,
    listarRAM,
    listarDISCO,
    listarMaquinas,
    listarUltimaCPU,
    listarUltimaRAM,
};