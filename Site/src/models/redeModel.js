var database = require("../database/config")


function cadastrar(fkServidor,tipoConexao,endereco) {
    var instrucao= `INSERT INTO rede ( fkServidor, tipoConexao, address) VALUES(${fkServidor},'${tipoConexao}','${endereco}');`;
    return database.update(instrucao);
}

module.exports = {
    cadastrar,
};