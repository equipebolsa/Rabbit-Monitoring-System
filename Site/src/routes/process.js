var express = require("express");
var router = express.Router();

var processController = require("../controllers/processController");

//Recebendo os dados do html e direcionando para a função cadastrar de processController.js
router.post("/listarAguardando", function (req, res) {
    processController.listarAguardando(req, res);
})

router.post("/listarWhitelist", function (req, res) {
    processController.listarWhitelist(req, res);
})

router.post("/listarBlacklist", function (req, res) {
    processController.listarBlacklist(req, res);
})

router.post("/whiteParaBlack", function (req, res) {
    processController.whiteParaBlack(req, res);
})

router.post("/deletar", function (req, res) {
    processController.deletar(req, res);
})

router.post("/adicionar", function (req, res) {
    processController.adicionar(req, res);
})

router.post("/update", function (req, res) {
    processController.update(req, res);
})


module.exports = router;