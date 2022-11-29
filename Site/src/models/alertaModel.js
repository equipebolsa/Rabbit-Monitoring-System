var database = require("../database/config")


function totalAlertas(id) {
    var instrucao1 = `SELECT COUNT(idAlerta) as total FROM alerta
    INNER JOIN leitura ON fkLeitura = idLeitura
    INNER JOIN componenteFisico ON idComponenteFisico = fkcomponenteFisico
    INNER JOIN servidor ON fkServidor = idServidor
    INNER JOIN setor ON fkSetor = idSetor
    INNER JOIN empresa ON fkEmpresa = idEmpresa
    WHERE idEmpresa = ${id} ORDER BY COUNT(idAlerta) DESC`;
    return database.executar(instrucao1);
}

module.exports = {
    totalAlertas
};  