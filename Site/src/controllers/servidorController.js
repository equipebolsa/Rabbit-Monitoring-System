var servidorModel = require("../models/servidorModel");
var redeModel = require("../models/redeModel");

function cadastrar(req, res) {
    var mac = req.body.macServer;
    var serial = req.body.serialServer;
    var so = req.body.soServer;
    var setor = req.body.setorServer;
    var metricasId = req.body.metricasIdServer;
    var metricasNome = req.body.metricasNomeServer;
    var rede1 = req.body.conexServer;
    var rede2 = req.body.addMacServer



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
                        redeModel.cadastrar(resultado.insertId,rede1,rede2).then((res)=>{
                            console.log("resultado",res)
                        }).catch((error)=> console.log("Erro na rede",error));
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
function listarParametros(req, res) {
    var servidor = req.body.servidorServer;
    servidorModel.listarParametros(servidor)
        .then(function (resultado) {
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
function atualizar(req, res) {
    var servidor = req.body.servidorServer;
    var metricasId = req.body.metricasIdServer;
    var metricasIdNon = req.body.metricasIdNonServer;
    var metricasNome = req.body.metricasNomeServer;
    var metricasParametro = req.body.metricasParametroServer
    if (servidor == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        for (let i = 0; i < metricasId.length; i++) {
            var achou = false;
            metricasParametro.forEach(metricaParametro => {
                //
                if(metricasId[i] == metricaParametro.fkMetrica){
                    if(metricaParametro.parametroAtivo == 0){
                        servidorModel.atualizarParametro(servidor, metricasId[i], 1);
                    }
                    achou = true;
                }
            });  
            if(!achou){
                servidorModel.cadastrarComponente(servidor, metricasNome[i]).then(function (resultado2) {
                    if (resultado2.insertId) {
                        servidorModel.cadastrarParametro(servidor, resultado2.insertId, metricasId[i]);
                    }
                })
            }
            
        }
        
        metricasIdNon.forEach(metricaNova => {
            metricasParametro.forEach(metricaParametro => {
                if(metricaNova == metricaParametro.fkMetrica && metricaParametro.parametroAtivo == 1){
                    servidorModel.atualizarParametro(servidor, metricaNova, 0);
                }
            });  
        });
        res.json();
    }
}



module.exports = {
    cadastrar,
    listar,
    maiorSetor,
    menorSetor,
    totalServidor,
    listarMaquinas,
    listarMetricas,
    cadastrarComponente,
    listarParametros,
    atualizar
}