var database = require("../database/config")


function listarBytesRecebidos(id) {
    var instrucao = `SELECT bytesRecv,horarioLeitura FROM dadosRede INNER JOIN rede ON fkRede = idRede WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 bytesRecv,horarioLeitura FROM dadosRede INNER JOIN rede ON fkRede = idRede ORDER BY horarioLeitura DESC;`;
    return database.executar(instrucao2);
}
function  tempoRealBytesRecv(id) {
    var instrucao = `SELECT bytesRecv,horarioLeitura FROM dadosRede INNER JOIN rede ON fkRede = idRede WHERE fkServidor = ${id} ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 bytesRecv,horarioLeitura FROM dadosRede INNER JOIN rede ON fkRede = idRede  ORDER BY horarioLeitura DESC;`;
    return database.executar(instrucao2);
}

module.exports = {
    listarBytesRecebidos,
    tempoRealBytesRecv
};