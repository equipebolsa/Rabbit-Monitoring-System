var database = require("../database/config")


function listar() {

    var instrucao = `SELECT * FROM empresa;`;
    return database.select(instrucao);
}

function cadastrar(nome,cnpj,telefone) {
    var instrucao = `INSERT INTO empresa (nomeEmpresa, cnpjEmpresa, telefoneEmpresa) VALUES ('${nome}', '${cnpj}', '${telefone}');`;
    //azure - instrucao += "SELECT IDENT_CURRENT('empresa') as id;"
    return database.update(instrucao);
}

module.exports = {
    cadastrar,
    listar,
};