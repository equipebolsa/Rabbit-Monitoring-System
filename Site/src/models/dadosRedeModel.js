var database = require("../database/config")


function listarBytesRecebidos(id) {
    var instrucao = `SELECT bytesRecv FROM redeView LIMIT 25; WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 bytesRecv FROM redeView ORDER BY horarioLeitura DESC;`;
    return database.executar(instrucao2);
}
function  tempoRealBytesRecv(id) {
    var instrucao = `SELECT bytesRecv,horarioLeitura FROM dadosRede INNER JOIN rede ON fkRede = idRede WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 bytesRecv FROM redeView ORDER BY horarioLeitura DESC;`;
    return database.executar(instrucao2);
}

function listarBytesEnviados(id) {
    var instrucao = `SELECT bytesSent FROM redeView LIMIT 25; WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 bytesSent FROM redeView ORDER BY horarioLeitura DESC;`;
    return database.executar(instrucao2);
}
function  tempoRealBytesSent(id) {
    var instrucao = `SELECT bytesSent,horarioLeitura FROM dadosRede INNER JOIN rede ON fkRede = idRede WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 bytesSent FROM redeView ORDER BY horarioLeitura DESC;`;
    return database.executar(instrucao2);
}

function  listarDadodRede(id) {
    var instrucao = `SELECT * FROM redeView WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 * FROM redeView WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC ;`;
    return database.executar(instrucao2);
}
function  listarDadodRedeTempoReal(id) {
    var instrucao = `SELECT * FROM redeView WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 * FROM redeView WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC ;`;
    return database.executar(instrucao2);
}



module.exports = {
    tempoRealBytesSent,
    listarBytesEnviados,
    listarBytesRecebidos,
    listarDadodRedeTempoReal,
    listarDadodRede,
    tempoRealBytesRecv
};