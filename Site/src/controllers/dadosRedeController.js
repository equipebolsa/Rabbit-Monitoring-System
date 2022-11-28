var dadosRedeModel = require("../models/dadosRedeModel");

function listarBytesRecebidos(req, res) {
    var idServidor= req.params.idServidor;
    dadosRedeModel.listarBytesRecebidos(idServidor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function tempoRealBytesRecv(req, res) {
    var idServidor= req.params.idServidor;
    dadosRedeModel.tempoRealBytesRecv(idServidor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}




module.exports = {
    listarBytesRecebidos,
    tempoRealBytesRecv
}