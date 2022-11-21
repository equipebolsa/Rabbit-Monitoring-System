var database = require("../database/config")

function listarAguardando() {
    var instrucao = `select id, nome from alertaProcesso where estado = 'w';`;
    return database.select(instrucao);
}
function listarWhitelist() {
    var instrucao = `select id, nome from alertaProcesso where estado = 'w';`;
    return database.select(instrucao);
}
function listarBlacklist() {
    var instrucao = `select id, nome from alertaProcesso where estado = 'w';`;
    return database.select(instrucao);
}


module.exports = {
    listarAguardando,
    listarWhitelist,
    listarBlacklist
};