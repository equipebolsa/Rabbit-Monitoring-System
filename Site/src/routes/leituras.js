var express = require("express");
var router = express.Router();

var leituraController = require("../controllers/leituraController");


router.get("/listar", function (req, res) {
    leituraController.listar(req, res);
});

router.get("/tempo-real", function (req, res) {
    leituraController.tempoReal(req, res);
});

router.get("/listarMaquinas", function (req, res) {
    leituraController.listarMaquinas(req, res);
});


module.exports = router;