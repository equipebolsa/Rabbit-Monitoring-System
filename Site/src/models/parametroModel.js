var database = require("../database/config")


function listar(id) {
    var instrucao1 = `SELECT * from parametro INNER JOIN servidor ON fkServidor = idServidor WHERE idServidor = ${id} AND parametroAtivo = 1`;
    return database.executar(instrucao1);
}

module.exports = {
    listar
};  