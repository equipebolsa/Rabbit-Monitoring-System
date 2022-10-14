var database = require("../database/config")


function listar(id) {
    var instrucao = `SELECT * FROM setor WHERE fkEmpresa = ${id};`;
    console.log(instrucao);
    return database.executar(instrucao);
}
function cadastrar(nome,descricao,fkEmpresa) {
    var instrucao = `INSERT INTO setor (fkEmpresa, nomeSetor, descricaoSetor) VALUES(${fkEmpresa},"${nome}","${descricao}");`;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar,
};