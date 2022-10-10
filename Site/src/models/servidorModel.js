var database = require("../database/config")


function cadastrar(setor,so,mac,serial) {
    var instrucao = `INSERT INTO servidor (fkSetor,sistemaOperacional,macAddress,serialNumber) VALUES (${setor},'${so}','${mac}','${serial}');`;
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};