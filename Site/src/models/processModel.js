var database = require("../database/config")

function listarAguardando() {
    var instrucao = `select id, nome from waitlist order by nome;`;
    return database.select(instrucao);
}
function listarAllowlist() {
    var instrucao = `select id, nome from allowlist order by nome;`;
    return database.select(instrucao);
}
function listarBlocklist() {
    var instrucao = `select id, nome from blocklist order by nome;`;
    return database.select(instrucao);
}
function allowParaBlock(id, nome) {
    var instrucao = `insert into blocklist (nome) values ('${nome}');`;
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
    var instrucao = `update waitlist set estado = 'd' where id = ${id}`;
    return database.select(instrucao);
}


module.exports = {
    listarAguardando,
    listarAllowlist,
    listarBlocklist,
    allowParaBlock,
    deletar,
    adicionar,
    update
};