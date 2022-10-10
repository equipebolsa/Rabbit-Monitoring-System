var database = require("../database/config")


function listar(id) {
    var instrucao = `SELECT * FROM setor WHERE fkEmpresa = ${id};`;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
};