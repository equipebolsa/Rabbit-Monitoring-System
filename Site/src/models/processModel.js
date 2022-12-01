var database = require("../database/config")

function listarAguardando() {
    var instrucao = `select id, nome from alertaProcesso order by nome;`;
    return database.select(instrucao);
}
function listarWhitelist() {
    var instrucao = `select id, nome from whitelist order by nome;`;
    return database.select(instrucao);
}
function listarBlacklist() {
    var instrucao = `select id, nome from blacklist order by nome;`;
    return database.select(instrucao);
}
function whiteParaBlack(id, nome) {
    var instrucao = `insert into blacklist (nome) values ('${nome}');`;
    return database.select(instrucao);
}
function deletar(id, tabela) {
    var instrucao = `delete from ${tabela} where id = ${id}`;
    return database.select(instrucao);
}
function adicionar(nome, tabela) {
    var instrucao = `insert into ${tabela} (nome) values ('${nome}');`;
    return database.select(instrucao);
}
function update(id) {
    var instrucao = `update alertaProcesso set estado = 'd' where id = ${id}`;
    return database.select(instrucao);
}


module.exports = {
    listarAguardando,
    listarWhitelist,
    listarBlacklist,
    whiteParaBlack,
    deletar,
    adicionar,
    update
};