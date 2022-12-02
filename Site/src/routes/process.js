var express = require("express");
var router = express.Router();

var processController = require("../controllers/processController");

//Recebendo os dados do html e direcionando para a função cadastrar de processController.js
router.post("/listarAguardando", function (req, res) {
    processController.listarAguardando(req, res);
})

router.post("/listarAllowlist", function (req, res) {
    processController.listarAllowlist(req, res);
})

router.post("/listarBlocklist", function (req, res) {
    processController.listarBlocklist(req, res);
})

router.post("/allowParaBlock", function (req, res) {
    processController.allowParaBlock(req, res);
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