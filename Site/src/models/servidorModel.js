var database = require("../database/config")


function cadastrar(setor,so,mac,serial) {
    var instrucao = `INSERT INTO servidor (fkSetor,sistemaOperacional,macAddress,serialNumber) VALUES (${setor},'${so}','${mac}','${serial}');`;
    return database.executar(instrucao);
}

function listar(id) {
    var instrucao = `SELECT * FROM servidor;`;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};