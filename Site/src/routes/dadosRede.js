var express = require("express");
var router = express.Router();

var dadosRedeController = require("../controllers/dadosRedeController");

router.get("/listarDadosRede/:idServidor", function (req, res) {
    dadosRedeController.listarDadodRede(req, res);
});
router.get("/listarDadosRedeCSV/:idServidor", function (req, res) {
    dadosRedeController.listarDadodRedeCSV(req, res);
});

router.get("/listarDadosRedeTempoReal/:idServidor", function (req, res) {
    dadosRedeController.listarDadodRedeTempoReal(req, res);
});

router.get("/tempoRealBytesRecv/:idServidor", function (req, res) {
    dadosRedeController.tempoRealBytesRecv(req, res);
});

module.exports = router;


