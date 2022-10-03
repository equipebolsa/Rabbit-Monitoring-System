var database = require("../database/config")


function listar() {

    var instrucao = `SELECT * FROM usuario;`;
    return database.executar(instrucao);
}

function entrar(email, senha) {
    var instrucao = `SELECT * FROM usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';`;
    return database.executar(instrucao);
}

function cadastrar(nome,email,senha,tipoUsuario,fkEmpresa,fkGestor) {
    var instrucao = `INSERT INTO usuario (nomeUsuario, emailUsuario, senhaUsuario,tipoUsuario,fkEmpresa,fkGestor) VALUES ('${nome}','${email}','${senha}','${tipoUsuario}','${fkEmpresa}',${fkGestor});`;
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};