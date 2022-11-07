var express = require("express");

var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var utilEmail = require("../utils/email");

router.get("/listar/:idGestor", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/email", function (req, res) {
    utilEmail.enviarEmail(req, res);
});

module.exports = router;