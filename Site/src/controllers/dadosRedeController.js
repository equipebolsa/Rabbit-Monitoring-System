var dadosRedeModel = require("../models/dadosRedeModel");



function listarDadodRede(req, res) {
    var idServidor = req.params.idServidor;
    dadosRedeModel.listarDadodRede(idServidor)
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

function listarDadodRedeCSV(req, res) {
    var idServidor = req.params.idServidor;
    dadosRedeModel.listarDadodRedeCSV(idServidor)
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

function listarDadodRedeTempoReal(req, res) {
    var idServidor = req.params.idServidor;
    dadosRedeModel.listarDadodRedeTempoReal(idServidor)
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
    listarDadodRedeTempoReal,
    listarDadodRede,
    listarDadodRedeCSV
};