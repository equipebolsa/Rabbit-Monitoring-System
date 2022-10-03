var database = require("../database/config")


function listar() {

    var instrucao = `SELECT * FROM usuario;`;
    return database.executar(instrucao);
}

function entrar(email, senha) {
    var instrucao = `SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';`;
    return database.executar(instrucao);
}

function cadastrar(nome,senha,email,cpf,tipoUsuario,fkEmpresa,fkGestor) {
    var instrucao = `INSERT INTO usuario (nomeUsuario, emailUsuario, senhaUsuario,cpfUsuario,tipoUsuario,fkEmpresa,fkGestor) VALUES ('${nome}','${cpf}', '${email}', '${senha}', '${tipoUsuario}','${fkEmpresa}','${fkGestor}');`;
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};