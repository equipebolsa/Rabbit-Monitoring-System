var servidorModel = require("../models/servidorModel");

function cadastrar(req, res) {
    var mac = req.body.macServer;
    var serial= req.body.serialServer;
    var so = req.body.soServer;
    var setor = req.body.setorServer;
 

    if (mac == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (serial == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (so == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else if (setor == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else{
      

        servidorModel.cadastrar(setor,so,mac,serial)
            .then(
                function (resultado) {
                    res.json(resultado);
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


module.exports = {
    cadastrar
}