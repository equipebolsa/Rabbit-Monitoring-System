var processModel = require("../models/processModel");

function listarAguardando(req, res) {
    processModel.listarAguardando()
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
function listarWhitelist(req, res) {
    processModel.listarWhitelist()
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
function listarBlacklist(req, res) {
    processModel.listarBlacklist()
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
function whiteParaBlack(req, res) {
    
    var id = req.body.idServer;
    var nome = req.body.nomeServer;
    console.log("aaaaaaaaaaaaa");
    processModel.whiteParaBlack(id, nome)
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
function deletar(req, res) {
    
    var id = req.body.idServer;
    var tabela = req.body.tabelaServer;
    processModel.deletar(id, tabela)
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
function adicionar(req, res) {
    var nome = req.body.nomeServer;
    var tabela = req.body.tabelaServer;
    processModel.adicionar(nome, tabela)
        .then(function (resultado) {
            console.log("AOS AUS AIUS IAUSH AIUSH AIUSH AIUSH AISUH" + resultado)
            res.status(200).json(resultado);
            /*if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }*/
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function update(req, res) {
    
    var id = req.body.idServer;
    processModel.update(id)
        .then(function (resultado) {
            res.status(200).json(resultado);
            /*
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }*/
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    listarAguardando,
    listarWhitelist,
    listarBlacklist,
    whiteParaBlack,
    deletar,
    adicionar,
    update
}