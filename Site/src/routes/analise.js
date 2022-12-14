var express = require("express");
var router = express.Router();

var analiseController = require("../controllers/analiseController");

router.get("/mensalJaneiroCpuServidor/:servidor", function (req, res) {
    analiseController.mensalJaneiroCpuServidor(req, res);
});

router.get("/mensalFevereiroCpuServidor/:servidor", function (req, res) {
    analiseController.mensalFevereiroCpuServidor(req, res);
});

router.get("/mensalMarcoCpuServidor/:servidor", function (req, res) {
    analiseController.mensalMarcoCpuServidor(req, res);
});

router.get("/mensalAbrilCpuServidor/:servidor", function (req, res) {
    analiseController.mensalAbrilCpuServidor(req, res);
});

router.get("/mensalMaioCpuServidor/:servidor", function (req, res) {
    analiseController.mensalMaioCpuServidor(req, res);
});

router.get("/mensalJunhoCpuServidor/:servidor", function (req, res) {
    analiseController.mensalJunhoCpuServidor(req, res);
});

router.get("/mensalJulhoCpuServidor/:servidor", function (req, res) {
    analiseController.mensalJulhoCpuServidor(req, res);
});

router.get("/mensalAgostoCpuServidor/:servidor", function (req, res) {
    analiseController.mensalAgostoCpuServidor(req, res);
});

router.get("/mensalSetembroCpuServidor/:servidor", function (req, res) {
    analiseController.mensalSetembroCpuServidor(req, res);
});

router.get("/mensalOutubroCpuServidor/:servidor", function (req, res) {
    analiseController.mensalOutubroCpuServidor(req, res);
});

router.get("/mensalNovembroCpuServidor/:servidor", function (req, res) {
    analiseController.mensalNovembroCpuServidor(req, res);
});

router.get("/mensalDezembroCpuServidor/:servidor", function (req, res) {
    analiseController.mensalDezembroCpuServidor(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor/:servidor", function (req, res) {
    analiseController.mensalJaneiroRamServidor(req, res);
});

router.get("/mensalFevereiroRamServidor/:servidor", function (req, res) {
    analiseController.mensalFevereiroRamServidor(req, res);
});

router.get("/mensalMarcoRamServidor/:servidor", function (req, res) {
    analiseController.mensalMarcoRamServidor(req, res);
});

router.get("/mensalAbrilRamServidor/:servidor", function (req, res) {
    analiseController.mensalAbrilRamServidor(req, res);
});

router.get("/mensalMaioRamServidor/:servidor", function (req, res) {
    analiseController.mensalMaioRamServidor(req, res);
});

router.get("/mensalJunhoRamServidor/:servidor", function (req, res) {
    analiseController.mensalJunhoRamServidor(req, res);
});

router.get("/mensalJulhoRamServidor/:servidor", function (req, res) {
    analiseController.mensalJulhoRamServidor(req, res);
});

router.get("/mensalAgostoRamServidor/:servidor", function (req, res) {
    analiseController.mensalAgostoRamServidor(req, res);
});

router.get("/mensalSetembroRamServidor/:servidor", function (req, res) {
    analiseController.mensalSetembroRamServidor(req, res);
});

router.get("/mensalOutubroRamServidor/:servidor", function (req, res) {
    analiseController.mensalOutubroRamServidor(req, res);
});

router.get("/mensalNovembroRamServidor/:servidor", function (req, res) {
    analiseController.mensalNovembroRamServidor(req, res);
});

router.get("/mensalDezembroRamServidor/:servidor", function (req, res) {
    analiseController.mensalDezembroRamServidor(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor(req, res);
});

router.get("/mensalFevereiroDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor(req, res);
});

router.get("/mensalMarcoDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalMarcoDiscoServidor(req, res);
});

router.get("/mensalAbrilDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalAbrilDiscoServidor(req, res);
});

router.get("/mensalMaioDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalMaioDiscoServidor(req, res);
});

router.get("/mensalJunhoDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalJunhoDiscoServidor(req, res);
});

router.get("/mensalJulhoDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalJulhoDiscoServidor(req, res);
});

router.get("/mensalAgostoDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalAgostoDiscoServidor(req, res);
});

router.get("/mensalSetembroDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalSetembroDiscoServidor(req, res);
});

router.get("/mensalOutubroDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalOutubroDiscoServidor(req, res);
});

router.get("/mensalNovembroDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalNovembroDiscoServidor(req, res);
});

router.get("/mensalDezembroDiscoServidor/:servidor", function (req, res) {
    analiseController.mensalDezembroDiscoServidor(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor/:servidor", function (req, res) {
    analiseController.limiteJaneiroCpuServidor(req, res);
});

router.get("/limiteFevereiroCpuServidor/:servidor", function (req, res) {
    analiseController.limiteFevereiroCpuServidor(req, res);
});

router.get("/limiteMarcoCpuServidor/:servidor", function (req, res) {
    analiseController.limiteMarcoCpuServidor(req, res);
});

router.get("/limiteAbrilCpuServidor/:servidor", function (req, res) {
    analiseController.limiteAbrilCpuServidor(req, res);
});

router.get("/limiteMaioCpuServidor/:servidor", function (req, res) {
    analiseController.limiteMaioCpuServidor(req, res);
});

router.get("/limiteJunhoCpuServidor/:servidor", function (req, res) {
    analiseController.limiteJunhoCpuServidor(req, res);
});

router.get("/limiteJulhoCpuServidor/:servidor", function (req, res) {
    analiseController.limiteJulhoCpuServidor(req, res);
});

router.get("/limiteAgostoCpuServidor/:servidor", function (req, res) {
    analiseController.limiteAgostoCpuServidor(req, res);
});

router.get("/limiteSetembroCpuServidor/:servidor", function (req, res) {
    analiseController.limiteSetembroCpuServidor(req, res);
});

router.get("/limiteOutubroCpuServidor/:servidor", function (req, res) {
    analiseController.limiteOutubroCpuServidor(req, res);
});

router.get("/limiteNovembroCpuServidor/:servidor", function (req, res) {
    analiseController.limiteNovembroCpuServidor(req, res);
});

router.get("/limiteDezembroCpuServidor/:servidor", function (req, res) {
    analiseController.limiteDezembroCpuServidor(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor/:servidor", function (req, res) {
    analiseController.limiteJaneiroRamServidor(req, res);
});

router.get("/limiteFevereiroRamServidor/:servidor", function (req, res) {
    analiseController.limiteFevereiroRamServidor(req, res);
});

router.get("/limiteMarcoRamServidor/:servidor", function (req, res) {
    analiseController.limiteMarcoRamServidor(req, res);
});

router.get("/limiteAbrilRamServidor/:servidor", function (req, res) {
    analiseController.limiteAbrilRamServidor(req, res);
});

router.get("/limiteMaioRamServidor/:servidor", function (req, res) {
    analiseController.limiteMaioRamServidor(req, res);
});

router.get("/limiteJunhoRamServidor/:servidor", function (req, res) {
    analiseController.limiteJunhoRamServidor(req, res);
});

router.get("/limiteJulhoRamServidor/:servidor", function (req, res) {
    analiseController.limiteJulhoRamServidor(req, res);
});

router.get("/limiteAgostoRamServidor/:servidor", function (req, res) {
    analiseController.limiteAgostoRamServidor(req, res);
});

router.get("/limiteSetembroRamServidor/:servidor", function (req, res) {
    analiseController.limiteSetembroRamServidor(req, res);
});

router.get("/limiteOutubroRamServidor/:servidor", function (req, res) {
    analiseController.limiteOutubroRamServidor(req, res);
});

router.get("/limiteNovembroRamServidor/:servidor", function (req, res) {
    analiseController.limiteNovembroRamServidor(req, res);
});

router.get("/limiteDezembroRamServidor/:servidor", function (req, res) {
    analiseController.limiteDezembroRamServidor(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor(req, res);
});

router.get("/limiteFevereiroDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor(req, res);
});

router.get("/limiteMarcoDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteMarcoDiscoServidor(req, res);
});

router.get("/limiteAbrilDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteAbrilDiscoServidor(req, res);
});

router.get("/limiteMaioDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteMaioDiscoServidor(req, res);
});

router.get("/limiteJunhoDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteJunhoDiscoServidor(req, res);
});

router.get("/limiteJulhoDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteJulhoDiscoServidor(req, res);
});

router.get("/limiteAgostoDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteAgostoDiscoServidor(req, res);
});

router.get("/limiteSetembroDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteSetembroDiscoServidor(req, res);
});

router.get("/limiteOutubroDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteOutubroDiscoServidor(req, res);
});

router.get("/limiteNovembroDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteNovembroDiscoServidor(req, res);
});

router.get("/limiteDezembroDiscoServidor/:servidor", function (req, res) {
    analiseController.limiteDezembroDiscoServidor(req, res);
});

router.get("/ultimas/:idServidor", function (req, res) {
    analiseController.buscarUltimasMedidas(req, res);
});
router.get("/ultimas1/:idServidor1", function (req, res) {
    analiseController.buscarUltimasMedidas1(req, res);
});


module.exports = router;