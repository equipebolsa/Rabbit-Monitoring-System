var database = require("../database/config")



function totalAlertas(id) {
    var instrucao1 = `SELECT count(*) FROM alertas WHERE idServidor = ${id};`;
    return database.select(instrucao1);
}

module.exports = {
    totalAlertas
};