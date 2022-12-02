var database = require("../database/config")

function listarAguardando(nome) {
    var instrucao = `select id, nome from waitlist where nome like '%${nome}%' order by nome;`;
    return database.select(instrucao);
}
function listarAllowlist(nome) {
    var instrucao = `select id, nome from allowlist where nome like '%${nome}%' order by nome;`;
    return database.select(instrucao);
}
function listarBlocklist(nome) {
    var instrucao = `select id, nome from blocklist where nome like '%${nome}%' order by nome;`;
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