var servidorModel = require("../models/servidorModel");

function cadastrar(req, res) {
    var mac = req.body.macServer;
    var serial = req.body.serialServer;
    var so = req.body.soServer;
    var setor = req.body.setorServer;
    var metricasId = req.body.metricasIdServer;
    var metricasNome = req.body.metricasNomeServer;



    if (mac == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (serial == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (so == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (setor == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {


        servidorModel.cadastrar(setor, so, mac, serial)
            .then(
                function (resultado) {
                    console.log("OLHA EU", resultado);
                    res.json(resultado);
                    if (resultado.insertId) {
                        for (let i = 0; i < metricasId.length; i++) {
                            servidorModel.cadastrarComponente(resultado.insertId, metricasNome[i]).then(function (resultado2) {
                                if (resultado2.insertId) {
                                    servidorModel.cadastrarParametro(resultado.insertId, resultado2.insertId, metricasId[i]);
                                }
                            })
                        }
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    var idEmpresa = req.params.idEmpresa;
    servidorModel.listar(idEmpresa)
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


function totalServidor(req, res) {
    var idEmpresa = req.params.idEmpresa;
    servidorModel.totalServidor(idEmpresa)
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
function menorSetor(req, res) {
    var idEmpresa = req.params.idEmpresa;
    servidorModel.menorSetor(idEmpresa)
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
function maiorSetor(req, res) {
    var idEmpresa = req.params.idEmpresa;
    servidorModel.maiorSetor(idEmpresa)
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
function listarMaquinas(req, res) {
    var idEmpresa = req.params.idEmpresa;
    servidorModel.listarMaquinas(idEmpresa)
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
function listarMetricas(req, res) {
    servidorModel.listarMetricas()
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
function cadastrarComponente(req, res) {
    var servidor = req.body.servidorServer;
    var componente = req.body.componenteServer;
    servidorModel.cadastrarComponente(servidor, componente)
        .then(function (resultado) {
            console.log("AAAAAAAAAAAA");
            console.log(resultado);
            if (resultado.length > 0) {
                res.json(resultado);
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
    cadastrar,
    listar,
    maiorSetor,
    menorSetor,
    totalServidor,
    listarMaquinas,
    listarMetricas,
    cadastrarComponente
}