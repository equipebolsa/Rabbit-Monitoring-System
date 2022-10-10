var empresaModel = require("../models/empresaModel");
var usuarioModel = require("../models/usuarioModel");

var sha512 = require('js-sha512');

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cnpjEmpresa = req.body.cpnjEmpresaServer;
    var telefone = req.body.telefoneEmpresaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nomeEmpresa == undefined) {
        res.status(400).send("Seu nome Empresa está undefined!");
    } else if (cnpjEmpresa == undefined) {
        res.status(400).send("Seu nome cnpj está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu nome telefone está undefined!");
    } else {
        
        empresaModel.cadastrar(nomeEmpresa,cnpjEmpresa,telefone).then(
                function (resultado) {
                    res.json(resultado);
                    var id = resultado.insertId;
                    usuarioModel.cadastrar(nome,email,sha512(senha),'Gestor',id,'NULL');
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