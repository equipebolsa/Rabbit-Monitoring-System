var database = require("../database/config")


function listar() {

    var instrucao = `SELECT * FROM empresa;`;
    return database.executar(instrucao);
}

function cadastrar(nome,cnpj,telefone) {
    var instrucao = `INSERT INTO empresa (nomeEmpresa, cnpjEmpresa, telefoneEmpresa) VALUES ('${nome}', '${cnpj}', '${telefone}') `;
    instrucao += "SELECT IDENT_CURRENT('empresa') as id;"
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
};