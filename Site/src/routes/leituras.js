var express = require("express");
var router = express.Router();

var leituraController = require("../controllers/leituraController");

router.get("/leiturasCpuPercent/:idServidor", function (req, res) {
    leituraController.leiturasCpuPercent(req, res);
});
router.get("/leiturasCpuPercentTempoReal/:idServidor", function (req, res) {
    leituraController.leiturasCpuPercentTempoReal(req, res);
});


router.get("/leiturasDiscoPercent/:idServidor", function (req, res) {
    leituraController.leiturasDiscoPercent(req, res);
});
router.get("/leiturasDiscoPercentTempoReal/:idServidor", function (req, res) {
    leituraController.leiturasDiscoPercentTempoReal(req, res);
});

router.get("/leiturasRamPercent/:idServidor", function (req, res) {
    leituraController.leiturasRamPercent(req, res);
});
router.get("/leiturasRamPercentTempoReal/:idServidor", function (req, res) {
    leituraController.leiturasRamPercentTempoReal(req, res);
});
router.get("/leiturasDiscoGb/:idServidor", function (req, res) {
    leituraController.leiturasDiscoGb(req, res);
});

router.get("/leiturasDiscoGbTempoReal/:idServidor", function (req, res) {
    leituraController.leiturasDiscoGbTempoReal(req, res);
});

router.get("/leiturasLeitura/:idServidor", function (req, res) {
    leituraController.leiturasLeitura(req, res);
});

router.get("/leiturasLeituraTempoReal/:idServidor", function (req, res) {
    leituraController.leiturasLeituraTempoReal(req, res);
});

router.get("/leiturasEscrita/:idServidor", function (req, res) {
    leituraController.leiturasEscrita(req, res);
});

router.get("/leiturasEscritaTempoReal/:idServidor", function (req, res) {
    leituraController.leiturasEscritaTempoReal(req, res);
});


router.get("/leiturasSwapPercentTempoReal/:idServidor", function (req, res) {
    leituraController.leiturasSwapPercentTempoReal(req, res);
});
router.get("/leiturasSwapPercent/:idServidor", function (req, res) {
    leituraController.leiturasSwapPercent(req, res);
});


router.get("/listarDados/:idServidor", function (req, res) {
    leituraController.listarDados(req, res);
});


router.get("/listarMaquinas/:idEmpresa", function (req, res) {
    leituraController.listarMaquinas(req, res);
});

router.get("/mergeDataMaquina/:idServidor", function (req, res) {
    leituraController.mergeDataMaquina(req, res);
});

router.get("/mergeData/:idEmpresa", function (req, res) {
    leituraController.mergeData(req, res);
});

router.get("/listarTemperatura/:idSetor", function (req, res) {
    leituraController.listarTemperatura(req, res);
});

router.get("/leiturasTemperatura/:idSetor", function (req, res) {
    leituraController.leiturasTemperatura(req, res);
});
router.get("/leiturasTemperaturaH/:idSetor", function (req, res) {
    leituraController.leiturasTemperaturaH(req, res);
});

module.exports = router;