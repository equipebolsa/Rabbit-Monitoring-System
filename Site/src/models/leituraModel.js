var database = require("../database/config")


function listarCPU(id) {
    var instrucao = `SELECT TOP 5 * FROM leitura;`;
    return database.executar(instrucao);
}
function listarRAM(id) {
    var instrucao = `SELECT TOP 5 * FROM leitura ;`;
    return database.executar(instrucao);
}
function listarDISCO(id) {
    var instrucao = `SELECT TOP 5 * FROM leitura;`;
    return database.executar(instrucao);
}
function listarMaquinas(id) {
    var instrucao = `SELECT * FROM leitura WHERE idEmpresa = ${id};`
    return database.select(instrucao);
}
function listarUltimaCPU(id) {
    var instrucao1 = `SELECT valorLeitura, horarioLeitura, idServidor FROM leituraView WHERE idServidor = ${id}  AND fkComponenteFisico = (SELECT idComponenteFisico FROM componenteFisico  WHERE fkServidor = ${id} AND tipoComponente LIKE 'CPU') ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 valorLeitura, horarioLeitura, idServidor FROM leituraView WHERE idServidor = ${id}  AND fkComponenteFisico = (SELECT TOP 1 idComponenteFisico FROM componenteFisico  WHERE fkServidor = ${id} AND tipoComponente LIKE 'CPU') ORDER BY horarioLeitura DESC;`;
    
    return database.executar(instrucao2);
}
function listarUltimaRAM(id) {
    var instrucao1 = `SELECT valorLeitura, horarioLeitura, idServidor FROM leituraView WHERE idServidor = ${id}  AND fkComponenteFisico = (SELECT idComponenteFisico FROM componenteFisico  WHERE fkServidor = ${id} AND tipoComponente LIKE 'RAM') ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1valorLeitura, horarioLeitura, idServidor FROM leituraView WHERE idServidor = ${id}  AND fkComponenteFisico = (SELECT idComponenteFisico FROM componenteFisico  WHERE fkServidor = ${id} AND tipoComponente LIKE 'RAM') ORDER BY horarioLeitura DESC;`;
    return database.executar(instrucao2);
}



module.exports = {
    listarCPU,
    listarRAM,
    listarDISCO,
    listarMaquinas,
    listarUltimaCPU,
    listarUltimaRAM,
};