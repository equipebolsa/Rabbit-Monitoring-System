var database = require("../database/config")


function listar(id) {
    var instrucao = `SELECT * FROM setor WHERE fkEmpresa = ${id};`;
    console.log(instrucao);
    return database.executar(instrucao);
}
function cadastrar(nome,descricao,fkEmpresa, cidade, estado) {
    var instrucao = `INSERT INTO setor (fkEmpresa, nomeSetor, descricaoSetor, cidade, estado) VALUES(${fkEmpresa},'${nome}','${descricao}','${cidade}','${estado}');`;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar,
};