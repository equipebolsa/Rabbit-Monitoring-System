var database = require("../database/config")


function listar() {
    var instrucao = `SELECT * FROM leituraView;`;
    return database.executar(instrucao);
}
function listarMaquinas() {
    var instrucao = ` SELECT idServidor, unidade_medida, valorLeitura,  MAX(horarioLeitura)  FROM leituraView GROUP BY idServidor;`;
    return database.executar(instrucao);
}


module.exports = {
    listar,
    listarMaquinas
};