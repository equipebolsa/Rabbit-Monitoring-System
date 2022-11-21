var database = require("../database/config")

function listar() {
    var instrucao = `select id, nome from alertaProcesso where estado = 'w';`;
    return database.select(instrucao);
}


module.exports = {
    listar
};