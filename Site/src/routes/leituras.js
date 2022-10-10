var express = require("express");
var router = express.Router();

var leituraController = require("../controllers/leituraController");


router.get("/listar/:idEmpresa", function (req, res) {
    leituraController.listar(req, res);
});

router.get("/tempo-real/:idEmpresa", function (req, res) {
    leituraController.tempoReal(req, res);
});

router.get("/listarMaquinas/:idEmpresa", function (req, res) {
    leituraController.listarMaquinas(req, res);
});


module.exports = router;