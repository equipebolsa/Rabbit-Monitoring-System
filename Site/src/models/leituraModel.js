var database = require("../database/config")


function listar(id) {
    var instrucao = `SELECT * FROM leituraView WHERE fkEmpresa = ${id};`;
    return database.executar(instrucao);
}
function listarMaquinas(id) {
    var instrucao = ` SELECT idServidor, unidade_medida, valorLeitura,  MAX(horarioLeitura)  FROM leituraView  WHERE ${id} = fkEmpresa GROUP BY idServidor;`;
    return database.executar(instrucao);
}


module.exports = {
    listar,
    listarMaquinas
};