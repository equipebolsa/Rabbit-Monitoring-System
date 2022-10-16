var database = require("../database/config")


function listar(id) {

    var instrucao = `SELECT s.*, f.nomeUsuario as gestorNome  FROM usuario as s  LEFT  JOIN usuario as f ON s.fkGestor = f.idUsuario WHERE s.fkGestor = ${id};`;
    return database.executar(instrucao);
}

function entrar(email, senha) {
    var instrucao = `SELECT f.idUsuario, f.nomeUsuario, f.emailUsuario, f.fkEmpresa, f.tipoUsuario, f.fkGestor, s.nomeUsuario AS gestor FROM usuario AS f LEFT JOIN usuario AS s ON f.fkGestor = s.idUsuario WHERE f.emailUsuario = '${email}' AND f.senhaUsuario = '${senha}';`;
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