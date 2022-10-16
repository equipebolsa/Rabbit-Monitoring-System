var express = require("express");
var router = express.Router();

var leituraController = require("../controllers/leituraController");


router.get("/listarCPU/:idMaquina", function (req, res) {
    leituraController.listarCPU(req, res);
});
router.get("/listarRAM/:idMaquina", function (req, res) {
    leituraController.listarRAM(req, res);
});
router.get("/listarDISCO/:idMaquina", function (req, res) {
    leituraController.listarDISCO(req, res);
});

router.get("/tempo-realCPU/:idMaquina", function (req, res) {
    leituraController.tempoRealCPU(req, res);
});

router.get("/tempo-realRAM/:idMaquina", function (req, res) {
    leituraController.tempoRealRAM(req, res);
});


router.get("/listarMaquinas/:idEmpresa", function (req, res) {
    leituraController.listarMaquinas(req, res);
});


module.exports = router;