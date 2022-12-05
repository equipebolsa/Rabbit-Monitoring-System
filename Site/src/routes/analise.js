var express = require("express");
var router = express.Router();

var analiseController = require("../controllers/analiseController");

router.get("/mensalJaneiroCpuServidor1", function (req, res) {
    analiseController.mensalJaneiroCpuServidor1(req, res);
});

router.get("/mensalFevereiroCpuServidor1", function (req, res) {
    analiseController.mensalFevereiroCpuServidor1(req, res);
});

router.get("/mensalMarcoCpuServidor1", function (req, res) {
    analiseController.mensalMarcoCpuServidor1(req, res);
});

router.get("/mensalAbrilCpuServidor1", function (req, res) {
    analiseController.mensalAbrilCpuServidor1(req, res);
});

router.get("/mensalMaioCpuServidor1", function (req, res) {
    analiseController.mensalMaioCpuServidor1(req, res);
});

router.get("/mensalJunhoCpuServidor1", function (req, res) {
    analiseController.mensalJunhoCpuServidor1(req, res);
});

router.get("/mensalJulhoCpuServidor1", function (req, res) {
    analiseController.mensalJulhoCpuServidor1(req, res);
});

router.get("/mensalAgostoCpuServidor1", function (req, res) {
    analiseController.mensalAgostoCpuServidor1(req, res);
});

router.get("/mensalSetembroCpuServidor1", function (req, res) {
    analiseController.mensalSetembroCpuServidor1(req, res);
});

router.get("/mensalOutubroCpuServidor1", function (req, res) {
    analiseController.mensalOutubroCpuServidor1(req, res);
});

router.get("/mensalNovembroCpuServidor1", function (req, res) {
    analiseController.mensalNovembroCpuServidor1(req, res);
});

router.get("/mensalDezembroCpuServidor1", function (req, res) {
    analiseController.mensalDezembroCpuServidor1(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor1", function (req, res) {
    analiseController.mensalJaneiroRamServidor1(req, res);
});

router.get("/mensalFevereiroRamServidor1", function (req, res) {
    analiseController.mensalFevereiroRamServidor1(req, res);
});

router.get("/mensalMarcoRamServidor1", function (req, res) {
    analiseController.mensalMarcoRamServidor1(req, res);
});

router.get("/mensalAbrilRamServidor1", function (req, res) {
    analiseController.mensalAbrilRamServidor1(req, res);
});

router.get("/mensalMaioRamServidor1", function (req, res) {
    analiseController.mensalMaioRamServidor1(req, res);
});

router.get("/mensalJunhoRamServidor1", function (req, res) {
    analiseController.mensalJunhoRamServidor1(req, res);
});

router.get("/mensalJulhoRamServidor1", function (req, res) {
    analiseController.mensalJulhoRamServidor1(req, res);
});

router.get("/mensalAgostoRamServidor1", function (req, res) {
    analiseController.mensalAgostoRamServidor1(req, res);
});

router.get("/mensalSetembroRamServidor1", function (req, res) {
    analiseController.mensalSetembroRamServidor1(req, res);
});

router.get("/mensalOutubroRamServidor1", function (req, res) {
    analiseController.mensalOutubroRamServidor1(req, res);
});

router.get("/mensalNovembroRamServidor1", function (req, res) {
    analiseController.mensalNovembroRamServidor1(req, res);
});

router.get("/mensalDezembroRamServidor1", function (req, res) {
    analiseController.mensalDezembroRamServidor1(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor1", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor1(req, res);
});

router.get("/mensalFevereiroDiscoServidor1", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor1(req, res);
});

router.get("/mensalMarcoDiscoServidor1", function (req, res) {
    analiseController.mensalMarcoDiscoServidor1(req, res);
});

router.get("/mensalAbrilDiscoServidor1", function (req, res) {
    analiseController.mensalAbrilDiscoServidor1(req, res);
});

router.get("/mensalMaioDiscoServidor1", function (req, res) {
    analiseController.mensalMaioDiscoServidor1(req, res);
});

router.get("/mensalJunhoDiscoServidor1", function (req, res) {
    analiseController.mensalJunhoDiscoServidor1(req, res);
});

router.get("/mensalJulhoDiscoServidor1", function (req, res) {
    analiseController.mensalJulhoDiscoServidor1(req, res);
});

router.get("/mensalAgostoDiscoServidor1", function (req, res) {
    analiseController.mensalAgostoDiscoServidor1(req, res);
});

router.get("/mensalSetembroDiscoServidor1", function (req, res) {
    analiseController.mensalSetembroDiscoServidor1(req, res);
});

router.get("/mensalOutubroDiscoServidor1", function (req, res) {
    analiseController.mensalOutubroDiscoServidor1(req, res);
});

router.get("/mensalNovembroDiscoServidor1", function (req, res) {
    analiseController.mensalNovembroDiscoServidor1(req, res);
});

router.get("/mensalDezembroDiscoServidor1", function (req, res) {
    analiseController.mensalDezembroDiscoServidor1(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor1", function (req, res) {
    analiseController.limiteJaneiroCpuServidor1(req, res);
});

router.get("/limiteFevereiroCpuServidor1", function (req, res) {
    analiseController.limiteFevereiroCpuServidor1(req, res);
});

router.get("/limiteMarcoCpuServidor1", function (req, res) {
    analiseController.limiteMarcoCpuServidor1(req, res);
});

router.get("/limiteAbrilCpuServidor1", function (req, res) {
    analiseController.limiteAbrilCpuServidor1(req, res);
});

router.get("/limiteMaioCpuServidor1", function (req, res) {
    analiseController.limiteMaioCpuServidor1(req, res);
});

router.get("/limiteJunhoCpuServidor1", function (req, res) {
    analiseController.limiteJunhoCpuServidor1(req, res);
});

router.get("/limiteJulhoCpuServidor1", function (req, res) {
    analiseController.limiteJulhoCpuServidor1(req, res);
});

router.get("/limiteAgostoCpuServidor1", function (req, res) {
    analiseController.limiteAgostoCpuServidor1(req, res);
});

router.get("/limiteSetembroCpuServidor1", function (req, res) {
    analiseController.limiteSetembroCpuServidor1(req, res);
});

router.get("/limiteOutubroCpuServidor1", function (req, res) {
    analiseController.limiteOutubroCpuServidor1(req, res);
});

router.get("/limiteNovembroCpuServidor1", function (req, res) {
    analiseController.limiteNovembroCpuServidor1(req, res);
});

router.get("/limiteDezembroCpuServidor1", function (req, res) {
    analiseController.limiteDezembroCpuServidor1(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor1", function (req, res) {
    analiseController.limiteJaneiroRamServidor1(req, res);
});

router.get("/limiteFevereiroRamServidor1", function (req, res) {
    analiseController.limiteFevereiroRamServidor1(req, res);
});

router.get("/limiteMarcoRamServidor1", function (req, res) {
    analiseController.limiteMarcoRamServidor1(req, res);
});

router.get("/limiteAbrilRamServidor1", function (req, res) {
    analiseController.limiteAbrilRamServidor1(req, res);
});

router.get("/limiteMaioRamServidor1", function (req, res) {
    analiseController.limiteMaioRamServidor1(req, res);
});

router.get("/limiteJunhoRamServidor1", function (req, res) {
    analiseController.limiteJunhoRamServidor1(req, res);
});

router.get("/limiteJulhoRamServidor1", function (req, res) {
    analiseController.limiteJulhoRamServidor1(req, res);
});

router.get("/limiteAgostoRamServidor1", function (req, res) {
    analiseController.limiteAgostoRamServidor1(req, res);
});

router.get("/limiteSetembroRamServidor1", function (req, res) {
    analiseController.limiteSetembroRamServidor1(req, res);
});

router.get("/limiteOutubroRamServidor1", function (req, res) {
    analiseController.limiteOutubroRamServidor1(req, res);
});

router.get("/limiteNovembroRamServidor1", function (req, res) {
    analiseController.limiteNovembroRamServidor1(req, res);
});

router.get("/limiteDezembroRamServidor1", function (req, res) {
    analiseController.limiteDezembroRamServidor1(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor1", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor1(req, res);
});

router.get("/limiteFevereiroDiscoServidor1", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor1(req, res);
});

router.get("/limiteMarcoDiscoServidor1", function (req, res) {
    analiseController.limiteMarcoDiscoServidor1(req, res);
});

router.get("/limiteAbrilDiscoServidor1", function (req, res) {
    analiseController.limiteAbrilDiscoServidor1(req, res);
});

router.get("/limiteMaioDiscoServidor1", function (req, res) {
    analiseController.limiteMaioDiscoServidor1(req, res);
});

router.get("/limiteJunhoDiscoServidor1", function (req, res) {
    analiseController.limiteJunhoDiscoServidor1(req, res);
});

router.get("/limiteJulhoDiscoServidor1", function (req, res) {
    analiseController.limiteJulhoDiscoServidor1(req, res);
});

router.get("/limiteAgostoDiscoServidor1", function (req, res) {
    analiseController.limiteAgostoDiscoServidor1(req, res);
});

router.get("/limiteSetembroDiscoServidor1", function (req, res) {
    analiseController.limiteSetembroDiscoServidor1(req, res);
});

router.get("/limiteOutubroDiscoServidor1", function (req, res) {
    analiseController.limiteOutubroDiscoServidor1(req, res);
});

router.get("/limiteNovembroDiscoServidor1", function (req, res) {
    analiseController.limiteNovembroDiscoServidor1(req, res);
});

router.get("/limiteDezembroDiscoServidor1", function (req, res) {
    analiseController.limiteDezembroDiscoServidor1(req, res);
});

//---------------------------------------------------------------------------------------------------------------------------

router.get("/mensalJaneiroCpuServidor2", function (req, res) {
    analiseController.mensalJaneiroCpuServidor2(req, res);
});

router.get("/mensalFevereiroCpuServidor2", function (req, res) {
    analiseController.mensalFevereiroCpuServidor2(req, res);
});

router.get("/mensalMarcoCpuServidor2", function (req, res) {
    analiseController.mensalMarcoCpuServidor2(req, res);
});

router.get("/mensalAbrilCpuServidor2", function (req, res) {
    analiseController.mensalAbrilCpuServidor2(req, res);
});

router.get("/mensalMaioCpuServidor2", function (req, res) {
    analiseController.mensalMaioCpuServidor2(req, res);
});

router.get("/mensalJunhoCpuServidor2", function (req, res) {
    analiseController.mensalJunhoCpuServidor2(req, res);
});

router.get("/mensalJulhoCpuServidor2", function (req, res) {
    analiseController.mensalJulhoCpuServidor2(req, res);
});

router.get("/mensalAgostoCpuServidor2", function (req, res) {
    analiseController.mensalAgostoCpuServidor2(req, res);
});

router.get("/mensalSetembroCpuServidor2", function (req, res) {
    analiseController.mensalSetembroCpuServidor2(req, res);
});

router.get("/mensalOutubroCpuServidor2", function (req, res) {
    analiseController.mensalOutubroCpuServidor2(req, res);
});

router.get("/mensalNovembroCpuServidor2", function (req, res) {
    analiseController.mensalNovembroCpuServidor2(req, res);
});

router.get("/mensalDezembroCpuServidor2", function (req, res) {
    analiseController.mensalDezembroCpuServidor2(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor2", function (req, res) {
    analiseController.mensalJaneiroRamServidor2(req, res);
});

router.get("/mensalFevereiroRamServidor2", function (req, res) {
    analiseController.mensalFevereiroRamServidor2(req, res);
});

router.get("/mensalMarcoRamServidor2", function (req, res) {
    analiseController.mensalMarcoRamServidor2(req, res);
});

router.get("/mensalAbrilRamServidor2", function (req, res) {
    analiseController.mensalAbrilRamServidor2(req, res);
});

router.get("/mensalMaioRamServidor2", function (req, res) {
    analiseController.mensalMaioRamServidor2(req, res);
});

router.get("/mensalJunhoRamServidor2", function (req, res) {
    analiseController.mensalJunhoRamServidor2(req, res);
});

router.get("/mensalJulhoRamServidor2", function (req, res) {
    analiseController.mensalJulhoRamServidor2(req, res);
});

router.get("/mensalAgostoRamServidor2", function (req, res) {
    analiseController.mensalAgostoRamServidor2(req, res);
});

router.get("/mensalSetembroRamServidor2", function (req, res) {
    analiseController.mensalSetembroRamServidor2(req, res);
});

router.get("/mensalOutubroRamServidor2", function (req, res) {
    analiseController.mensalOutubroRamServidor2(req, res);
});

router.get("/mensalNovembroRamServidor2", function (req, res) {
    analiseController.mensalNovembroRamServidor2(req, res);
});

router.get("/mensalDezembroRamServidor2", function (req, res) {
    analiseController.mensalDezembroRamServidor2(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor2", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor2(req, res);
});

router.get("/mensalFevereiroDiscoServidor2", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor2(req, res);
});

router.get("/mensalMarcoDiscoServidor2", function (req, res) {
    analiseController.mensalMarcoDiscoServidor2(req, res);
});

router.get("/mensalAbrilDiscoServidor2", function (req, res) {
    analiseController.mensalAbrilDiscoServidor2(req, res);
});

router.get("/mensalMaioDiscoServidor2", function (req, res) {
    analiseController.mensalMaioDiscoServidor2(req, res);
});

router.get("/mensalJunhoDiscoServidor2", function (req, res) {
    analiseController.mensalJunhoDiscoServidor2(req, res);
});

router.get("/mensalJulhoDiscoServidor2", function (req, res) {
    analiseController.mensalJulhoDiscoServidor2(req, res);
});

router.get("/mensalAgostoDiscoServidor2", function (req, res) {
    analiseController.mensalAgostoDiscoServidor2(req, res);
});

router.get("/mensalSetembroDiscoServidor2", function (req, res) {
    analiseController.mensalSetembroDiscoServidor2(req, res);
});

router.get("/mensalOutubroDiscoServidor2", function (req, res) {
    analiseController.mensalOutubroDiscoServidor2(req, res);
});

router.get("/mensalNovembroDiscoServidor2", function (req, res) {
    analiseController.mensalNovembroDiscoServidor2(req, res);
});

router.get("/mensalDezembroDiscoServidor2", function (req, res) {
    analiseController.mensalDezembroDiscoServidor2(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor2", function (req, res) {
    analiseController.limiteJaneiroCpuServidor2(req, res);
});

router.get("/limiteFevereiroCpuServidor2", function (req, res) {
    analiseController.limiteFevereiroCpuServidor2(req, res);
});

router.get("/limiteMarcoCpuServidor2", function (req, res) {
    analiseController.limiteMarcoCpuServidor2(req, res);
});

router.get("/limiteAbrilCpuServidor2", function (req, res) {
    analiseController.limiteAbrilCpuServidor2(req, res);
});

router.get("/limiteMaioCpuServidor2", function (req, res) {
    analiseController.limiteMaioCpuServidor2(req, res);
});

router.get("/limiteJunhoCpuServidor2", function (req, res) {
    analiseController.limiteJunhoCpuServidor2(req, res);
});

router.get("/limiteJulhoCpuServidor2", function (req, res) {
    analiseController.limiteJulhoCpuServidor2(req, res);
});

router.get("/limiteAgostoCpuServidor2", function (req, res) {
    analiseController.limiteAgostoCpuServidor2(req, res);
});

router.get("/limiteSetembroCpuServidor2", function (req, res) {
    analiseController.limiteSetembroCpuServidor2(req, res);
});

router.get("/limiteOutubroCpuServidor2", function (req, res) {
    analiseController.limiteOutubroCpuServidor2(req, res);
});

router.get("/limiteNovembroCpuServidor2", function (req, res) {
    analiseController.limiteNovembroCpuServidor2(req, res);
});

router.get("/limiteDezembroCpuServidor2", function (req, res) {
    analiseController.limiteDezembroCpuServidor2(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor2", function (req, res) {
    analiseController.limiteJaneiroRamServidor2(req, res);
});

router.get("/limiteFevereiroRamServidor2", function (req, res) {
    analiseController.limiteFevereiroRamServidor2(req, res);
});

router.get("/limiteMarcoRamServidor2", function (req, res) {
    analiseController.limiteMarcoRamServidor2(req, res);
});

router.get("/limiteAbrilRamServidor2", function (req, res) {
    analiseController.limiteAbrilRamServidor2(req, res);
});

router.get("/limiteMaioRamServidor2", function (req, res) {
    analiseController.limiteMaioRamServidor2(req, res);
});

router.get("/limiteJunhoRamServidor2", function (req, res) {
    analiseController.limiteJunhoRamServidor2(req, res);
});

router.get("/limiteJulhoRamServidor2", function (req, res) {
    analiseController.limiteJulhoRamServidor2(req, res);
});

router.get("/limiteAgostoRamServidor2", function (req, res) {
    analiseController.limiteAgostoRamServidor2(req, res);
});

router.get("/limiteSetembroRamServidor2", function (req, res) {
    analiseController.limiteSetembroRamServidor2(req, res);
});

router.get("/limiteOutubroRamServidor2", function (req, res) {
    analiseController.limiteOutubroRamServidor2(req, res);
});

router.get("/limiteNovembroRamServidor2", function (req, res) {
    analiseController.limiteNovembroRamServidor2(req, res);
});

router.get("/limiteDezembroRamServidor2", function (req, res) {
    analiseController.limiteDezembroRamServidor2(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor2", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor2(req, res);
});

router.get("/limiteFevereiroDiscoServidor2", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor2(req, res);
});

router.get("/limiteMarcoDiscoServidor2", function (req, res) {
    analiseController.limiteMarcoDiscoServidor2(req, res);
});

router.get("/limiteAbrilDiscoServidor2", function (req, res) {
    analiseController.limiteAbrilDiscoServidor2(req, res);
});

router.get("/limiteMaioDiscoServidor2", function (req, res) {
    analiseController.limiteMaioDiscoServidor2(req, res);
});

router.get("/limiteJunhoDiscoServidor2", function (req, res) {
    analiseController.limiteJunhoDiscoServidor2(req, res);
});

router.get("/limiteJulhoDiscoServidor2", function (req, res) {
    analiseController.limiteJulhoDiscoServidor2(req, res);
});

router.get("/limiteAgostoDiscoServidor2", function (req, res) {
    analiseController.limiteAgostoDiscoServidor2(req, res);
});

router.get("/limiteSetembroDiscoServidor2", function (req, res) {
    analiseController.limiteSetembroDiscoServidor2(req, res);
});

router.get("/limiteOutubroDiscoServidor2", function (req, res) {
    analiseController.limiteOutubroDiscoServidor2(req, res);
});

router.get("/limiteNovembroDiscoServidor2", function (req, res) {
    analiseController.limiteNovembroDiscoServidor2(req, res);
});

router.get("/limiteDezembroDiscoServidor2", function (req, res) {
    analiseController.limiteDezembroDiscoServidor2(req, res);
});

router.get("/mensalJaneiroCpuServidor3", function (req, res) {
    analiseController.mensalJaneiroCpuServidor3(req, res);
});

router.get("/mensalFevereiroCpuServidor3", function (req, res) {
    analiseController.mensalFevereiroCpuServidor3(req, res);
});

router.get("/mensalMarcoCpuServidor3", function (req, res) {
    analiseController.mensalMarcoCpuServidor3(req, res);
});

router.get("/mensalAbrilCpuServidor3", function (req, res) {
    analiseController.mensalAbrilCpuServidor3(req, res);
});

router.get("/mensalMaioCpuServidor3", function (req, res) {
    analiseController.mensalMaioCpuServidor3(req, res);
});

router.get("/mensalJunhoCpuServidor3", function (req, res) {
    analiseController.mensalJunhoCpuServidor3(req, res);
});

router.get("/mensalJulhoCpuServidor3", function (req, res) {
    analiseController.mensalJulhoCpuServidor3(req, res);
});

router.get("/mensalAgostoCpuServidor3", function (req, res) {
    analiseController.mensalAgostoCpuServidor3(req, res);
});

router.get("/mensalSetembroCpuServidor3", function (req, res) {
    analiseController.mensalSetembroCpuServidor3(req, res);
});

router.get("/mensalOutubroCpuServidor3", function (req, res) {
    analiseController.mensalOutubroCpuServidor3(req, res);
});

router.get("/mensalNovembroCpuServidor3", function (req, res) {
    analiseController.mensalNovembroCpuServidor3(req, res);
});

router.get("/mensalDezembroCpuServidor3", function (req, res) {
    analiseController.mensalDezembroCpuServidor3(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor3", function (req, res) {
    analiseController.mensalJaneiroRamServidor3(req, res);
});

router.get("/mensalFevereiroRamServidor3", function (req, res) {
    analiseController.mensalFevereiroRamServidor3(req, res);
});

router.get("/mensalMarcoRamServidor3", function (req, res) {
    analiseController.mensalMarcoRamServidor3(req, res);
});

router.get("/mensalAbrilRamServidor3", function (req, res) {
    analiseController.mensalAbrilRamServidor3(req, res);
});

router.get("/mensalMaioRamServidor3", function (req, res) {
    analiseController.mensalMaioRamServidor3(req, res);
});

router.get("/mensalJunhoRamServidor3", function (req, res) {
    analiseController.mensalJunhoRamServidor3(req, res);
});

router.get("/mensalJulhoRamServidor3", function (req, res) {
    analiseController.mensalJulhoRamServidor3(req, res);
});

router.get("/mensalAgostoRamServidor3", function (req, res) {
    analiseController.mensalAgostoRamServidor3(req, res);
});

router.get("/mensalSetembroRamServidor3", function (req, res) {
    analiseController.mensalSetembroRamServidor3(req, res);
});

router.get("/mensalOutubroRamServidor3", function (req, res) {
    analiseController.mensalOutubroRamServidor3(req, res);
});

router.get("/mensalNovembroRamServidor3", function (req, res) {
    analiseController.mensalNovembroRamServidor3(req, res);
});

router.get("/mensalDezembroRamServidor3", function (req, res) {
    analiseController.mensalDezembroRamServidor3(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor3", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor3(req, res);
});

router.get("/mensalFevereiroDiscoServidor3", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor3(req, res);
});

router.get("/mensalMarcoDiscoServidor3", function (req, res) {
    analiseController.mensalMarcoDiscoServidor3(req, res);
});

router.get("/mensalAbrilDiscoServidor3", function (req, res) {
    analiseController.mensalAbrilDiscoServidor3(req, res);
});

router.get("/mensalMaioDiscoServidor3", function (req, res) {
    analiseController.mensalMaioDiscoServidor3(req, res);
});

router.get("/mensalJunhoDiscoServidor3", function (req, res) {
    analiseController.mensalJunhoDiscoServidor3(req, res);
});

router.get("/mensalJulhoDiscoServidor3", function (req, res) {
    analiseController.mensalJulhoDiscoServidor3(req, res);
});

router.get("/mensalAgostoDiscoServidor3", function (req, res) {
    analiseController.mensalAgostoDiscoServidor3(req, res);
});

router.get("/mensalSetembroDiscoServidor3", function (req, res) {
    analiseController.mensalSetembroDiscoServidor3(req, res);
});

router.get("/mensalOutubroDiscoServidor3", function (req, res) {
    analiseController.mensalOutubroDiscoServidor3(req, res);
});

router.get("/mensalNovembroDiscoServidor3", function (req, res) {
    analiseController.mensalNovembroDiscoServidor3(req, res);
});

router.get("/mensalDezembroDiscoServidor3", function (req, res) {
    analiseController.mensalDezembroDiscoServidor3(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor3", function (req, res) {
    analiseController.limiteJaneiroCpuServidor3(req, res);
});

router.get("/limiteFevereiroCpuServidor3", function (req, res) {
    analiseController.limiteFevereiroCpuServidor3(req, res);
});

router.get("/limiteMarcoCpuServidor3", function (req, res) {
    analiseController.limiteMarcoCpuServidor3(req, res);
});

router.get("/limiteAbrilCpuServidor3", function (req, res) {
    analiseController.limiteAbrilCpuServidor3(req, res);
});

router.get("/limiteMaioCpuServidor3", function (req, res) {
    analiseController.limiteMaioCpuServidor3(req, res);
});

router.get("/limiteJunhoCpuServidor3", function (req, res) {
    analiseController.limiteJunhoCpuServidor3(req, res);
});

router.get("/limiteJulhoCpuServidor3", function (req, res) {
    analiseController.limiteJulhoCpuServidor3(req, res);
});

router.get("/limiteAgostoCpuServidor3", function (req, res) {
    analiseController.limiteAgostoCpuServidor3(req, res);
});

router.get("/limiteSetembroCpuServidor3", function (req, res) {
    analiseController.limiteSetembroCpuServidor3(req, res);
});

router.get("/limiteOutubroCpuServidor3", function (req, res) {
    analiseController.limiteOutubroCpuServidor3(req, res);
});

router.get("/limiteNovembroCpuServidor3", function (req, res) {
    analiseController.limiteNovembroCpuServidor3(req, res);
});

router.get("/limiteDezembroCpuServidor3", function (req, res) {
    analiseController.limiteDezembroCpuServidor3(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor3", function (req, res) {
    analiseController.limiteJaneiroRamServidor3(req, res);
});

router.get("/limiteFevereiroRamServidor3", function (req, res) {
    analiseController.limiteFevereiroRamServidor3(req, res);
});

router.get("/limiteMarcoRamServidor3", function (req, res) {
    analiseController.limiteMarcoRamServidor3(req, res);
});

router.get("/limiteAbrilRamServidor3", function (req, res) {
    analiseController.limiteAbrilRamServidor3(req, res);
});

router.get("/limiteMaioRamServidor3", function (req, res) {
    analiseController.limiteMaioRamServidor3(req, res);
});

router.get("/limiteJunhoRamServidor3", function (req, res) {
    analiseController.limiteJunhoRamServidor3(req, res);
});

router.get("/limiteJulhoRamServidor3", function (req, res) {
    analiseController.limiteJulhoRamServidor3(req, res);
});

router.get("/limiteAgostoRamServidor3", function (req, res) {
    analiseController.limiteAgostoRamServidor3(req, res);
});

router.get("/limiteSetembroRamServidor3", function (req, res) {
    analiseController.limiteSetembroRamServidor3(req, res);
});

router.get("/limiteOutubroRamServidor3", function (req, res) {
    analiseController.limiteOutubroRamServidor3(req, res);
});

router.get("/limiteNovembroRamServidor3", function (req, res) {
    analiseController.limiteNovembroRamServidor3(req, res);
});

router.get("/limiteDezembroRamServidor3", function (req, res) {
    analiseController.limiteDezembroRamServidor3(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor3", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor3(req, res);
});

router.get("/limiteFevereiroDiscoServidor3", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor3(req, res);
});

router.get("/limiteMarcoDiscoServidor3", function (req, res) {
    analiseController.limiteMarcoDiscoServidor3(req, res);
});

router.get("/limiteAbrilDiscoServidor3", function (req, res) {
    analiseController.limiteAbrilDiscoServidor3(req, res);
});

router.get("/limiteMaioDiscoServidor3", function (req, res) {
    analiseController.limiteMaioDiscoServidor3(req, res);
});

router.get("/limiteJunhoDiscoServidor3", function (req, res) {
    analiseController.limiteJunhoDiscoServidor3(req, res);
});

router.get("/limiteJulhoDiscoServidor3", function (req, res) {
    analiseController.limiteJulhoDiscoServidor3(req, res);
});

router.get("/limiteAgostoDiscoServidor3", function (req, res) {
    analiseController.limiteAgostoDiscoServidor3(req, res);
});

router.get("/limiteSetembroDiscoServidor3", function (req, res) {
    analiseController.limiteSetembroDiscoServidor3(req, res);
});

router.get("/limiteOutubroDiscoServidor3", function (req, res) {
    analiseController.limiteOutubroDiscoServidor3(req, res);
});

router.get("/limiteNovembroDiscoServidor3", function (req, res) {
    analiseController.limiteNovembroDiscoServidor3(req, res);
});

router.get("/limiteDezembroDiscoServidor3", function (req, res) {
    analiseController.limiteDezembroDiscoServidor3(req, res);
});

router.get("/mensalJaneiroCpuServidor4", function (req, res) {
    analiseController.mensalJaneiroCpuServidor4(req, res);
});

router.get("/mensalFevereiroCpuServidor4", function (req, res) {
    analiseController.mensalFevereiroCpuServidor4(req, res);
});

router.get("/mensalMarcoCpuServidor4", function (req, res) {
    analiseController.mensalMarcoCpuServidor4(req, res);
});

router.get("/mensalAbrilCpuServidor4", function (req, res) {
    analiseController.mensalAbrilCpuServidor4(req, res);
});

router.get("/mensalMaioCpuServidor4", function (req, res) {
    analiseController.mensalMaioCpuServidor4(req, res);
});

router.get("/mensalJunhoCpuServidor4", function (req, res) {
    analiseController.mensalJunhoCpuServidor4(req, res);
});

router.get("/mensalJulhoCpuServidor4", function (req, res) {
    analiseController.mensalJulhoCpuServidor4(req, res);
});

router.get("/mensalAgostoCpuServidor4", function (req, res) {
    analiseController.mensalAgostoCpuServidor4(req, res);
});

router.get("/mensalSetembroCpuServidor4", function (req, res) {
    analiseController.mensalSetembroCpuServidor4(req, res);
});

router.get("/mensalOutubroCpuServidor4", function (req, res) {
    analiseController.mensalOutubroCpuServidor4(req, res);
});

router.get("/mensalNovembroCpuServidor4", function (req, res) {
    analiseController.mensalNovembroCpuServidor4(req, res);
});

router.get("/mensalDezembroCpuServidor4", function (req, res) {
    analiseController.mensalDezembroCpuServidor4(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor4", function (req, res) {
    analiseController.mensalJaneiroRamServidor4(req, res);
});

router.get("/mensalFevereiroRamServidor4", function (req, res) {
    analiseController.mensalFevereiroRamServidor4(req, res);
});

router.get("/mensalMarcoRamServidor4", function (req, res) {
    analiseController.mensalMarcoRamServidor4(req, res);
});

router.get("/mensalAbrilRamServidor4", function (req, res) {
    analiseController.mensalAbrilRamServidor4(req, res);
});

router.get("/mensalMaioRamServidor4", function (req, res) {
    analiseController.mensalMaioRamServidor4(req, res);
});

router.get("/mensalJunhoRamServidor4", function (req, res) {
    analiseController.mensalJunhoRamServidor4(req, res);
});

router.get("/mensalJulhoRamServidor4", function (req, res) {
    analiseController.mensalJulhoRamServidor4(req, res);
});

router.get("/mensalAgostoRamServidor4", function (req, res) {
    analiseController.mensalAgostoRamServidor4(req, res);
});

router.get("/mensalSetembroRamServidor4", function (req, res) {
    analiseController.mensalSetembroRamServidor4(req, res);
});

router.get("/mensalOutubroRamServidor4", function (req, res) {
    analiseController.mensalOutubroRamServidor4(req, res);
});

router.get("/mensalNovembroRamServidor4", function (req, res) {
    analiseController.mensalNovembroRamServidor4(req, res);
});

router.get("/mensalDezembroRamServidor4", function (req, res) {
    analiseController.mensalDezembroRamServidor4(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor4", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor4(req, res);
});

router.get("/mensalFevereiroDiscoServidor4", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor4(req, res);
});

router.get("/mensalMarcoDiscoServidor4", function (req, res) {
    analiseController.mensalMarcoDiscoServidor4(req, res);
});

router.get("/mensalAbrilDiscoServidor4", function (req, res) {
    analiseController.mensalAbrilDiscoServidor4(req, res);
});

router.get("/mensalMaioDiscoServidor4", function (req, res) {
    analiseController.mensalMaioDiscoServidor4(req, res);
});

router.get("/mensalJunhoDiscoServidor4", function (req, res) {
    analiseController.mensalJunhoDiscoServidor4(req, res);
});

router.get("/mensalJulhoDiscoServidor4", function (req, res) {
    analiseController.mensalJulhoDiscoServidor4(req, res);
});

router.get("/mensalAgostoDiscoServidor4", function (req, res) {
    analiseController.mensalAgostoDiscoServidor4(req, res);
});

router.get("/mensalSetembroDiscoServidor4", function (req, res) {
    analiseController.mensalSetembroDiscoServidor4(req, res);
});

router.get("/mensalOutubroDiscoServidor4", function (req, res) {
    analiseController.mensalOutubroDiscoServidor4(req, res);
});

router.get("/mensalNovembroDiscoServidor4", function (req, res) {
    analiseController.mensalNovembroDiscoServidor4(req, res);
});

router.get("/mensalDezembroDiscoServidor4", function (req, res) {
    analiseController.mensalDezembroDiscoServidor4(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor4", function (req, res) {
    analiseController.limiteJaneiroCpuServidor4(req, res);
});

router.get("/limiteFevereiroCpuServidor4", function (req, res) {
    analiseController.limiteFevereiroCpuServidor4(req, res);
});

router.get("/limiteMarcoCpuServidor4", function (req, res) {
    analiseController.limiteMarcoCpuServidor4(req, res);
});

router.get("/limiteAbrilCpuServidor4", function (req, res) {
    analiseController.limiteAbrilCpuServidor4(req, res);
});

router.get("/limiteMaioCpuServidor4", function (req, res) {
    analiseController.limiteMaioCpuServidor4(req, res);
});

router.get("/limiteJunhoCpuServidor4", function (req, res) {
    analiseController.limiteJunhoCpuServidor4(req, res);
});

router.get("/limiteJulhoCpuServidor4", function (req, res) {
    analiseController.limiteJulhoCpuServidor4(req, res);
});

router.get("/limiteAgostoCpuServidor4", function (req, res) {
    analiseController.limiteAgostoCpuServidor4(req, res);
});

router.get("/limiteSetembroCpuServidor4", function (req, res) {
    analiseController.limiteSetembroCpuServidor4(req, res);
});

router.get("/limiteOutubroCpuServidor4", function (req, res) {
    analiseController.limiteOutubroCpuServidor4(req, res);
});

router.get("/limiteNovembroCpuServidor4", function (req, res) {
    analiseController.limiteNovembroCpuServidor4(req, res);
});

router.get("/limiteDezembroCpuServidor4", function (req, res) {
    analiseController.limiteDezembroCpuServidor4(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor4", function (req, res) {
    analiseController.limiteJaneiroRamServidor4(req, res);
});

router.get("/limiteFevereiroRamServidor4", function (req, res) {
    analiseController.limiteFevereiroRamServidor4(req, res);
});

router.get("/limiteMarcoRamServidor4", function (req, res) {
    analiseController.limiteMarcoRamServidor4(req, res);
});

router.get("/limiteAbrilRamServidor4", function (req, res) {
    analiseController.limiteAbrilRamServidor4(req, res);
});

router.get("/limiteMaioRamServidor4", function (req, res) {
    analiseController.limiteMaioRamServidor4(req, res);
});

router.get("/limiteJunhoRamServidor4", function (req, res) {
    analiseController.limiteJunhoRamServidor4(req, res);
});

router.get("/limiteJulhoRamServidor4", function (req, res) {
    analiseController.limiteJulhoRamServidor4(req, res);
});

router.get("/limiteAgostoRamServidor4", function (req, res) {
    analiseController.limiteAgostoRamServidor4(req, res);
});

router.get("/limiteSetembroRamServidor4", function (req, res) {
    analiseController.limiteSetembroRamServidor4(req, res);
});

router.get("/limiteOutubroRamServidor4", function (req, res) {
    analiseController.limiteOutubroRamServidor4(req, res);
});

router.get("/limiteNovembroRamServidor4", function (req, res) {
    analiseController.limiteNovembroRamServidor4(req, res);
});

router.get("/limiteDezembroRamServidor4", function (req, res) {
    analiseController.limiteDezembroRamServidor4(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor4", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor4(req, res);
});

router.get("/limiteFevereiroDiscoServidor4", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor4(req, res);
});

router.get("/limiteMarcoDiscoServidor4", function (req, res) {
    analiseController.limiteMarcoDiscoServidor4(req, res);
});

router.get("/limiteAbrilDiscoServidor4", function (req, res) {
    analiseController.limiteAbrilDiscoServidor4(req, res);
});

router.get("/limiteMaioDiscoServidor4", function (req, res) {
    analiseController.limiteMaioDiscoServidor4(req, res);
});

router.get("/limiteJunhoDiscoServidor4", function (req, res) {
    analiseController.limiteJunhoDiscoServidor4(req, res);
});

router.get("/limiteJulhoDiscoServidor4", function (req, res) {
    analiseController.limiteJulhoDiscoServidor4(req, res);
});

router.get("/limiteAgostoDiscoServidor4", function (req, res) {
    analiseController.limiteAgostoDiscoServidor4(req, res);
});

router.get("/limiteSetembroDiscoServidor4", function (req, res) {
    analiseController.limiteSetembroDiscoServidor4(req, res);
});

router.get("/limiteOutubroDiscoServidor4", function (req, res) {
    analiseController.limiteOutubroDiscoServidor4(req, res);
});

router.get("/limiteNovembroDiscoServidor4", function (req, res) {
    analiseController.limiteNovembroDiscoServidor4(req, res);
});

router.get("/limiteDezembroDiscoServidor4", function (req, res) {
    analiseController.limiteDezembroDiscoServidor4(req, res);
});

router.get("/mensalJaneiroCpuServidor5", function (req, res) {
    analiseController.mensalJaneiroCpuServidor5(req, res);
});

router.get("/mensalFevereiroCpuServidor5", function (req, res) {
    analiseController.mensalFevereiroCpuServidor5(req, res);
});

router.get("/mensalMarcoCpuServidor5", function (req, res) {
    analiseController.mensalMarcoCpuServidor5(req, res);
});

router.get("/mensalAbrilCpuServidor5", function (req, res) {
    analiseController.mensalAbrilCpuServidor5(req, res);
});

router.get("/mensalMaioCpuServidor5", function (req, res) {
    analiseController.mensalMaioCpuServidor5(req, res);
});

router.get("/mensalJunhoCpuServidor5", function (req, res) {
    analiseController.mensalJunhoCpuServidor5(req, res);
});

router.get("/mensalJulhoCpuServidor5", function (req, res) {
    analiseController.mensalJulhoCpuServidor5(req, res);
});

router.get("/mensalAgostoCpuServidor5", function (req, res) {
    analiseController.mensalAgostoCpuServidor5(req, res);
});

router.get("/mensalSetembroCpuServidor5", function (req, res) {
    analiseController.mensalSetembroCpuServidor5(req, res);
});

router.get("/mensalOutubroCpuServidor5", function (req, res) {
    analiseController.mensalOutubroCpuServidor5(req, res);
});

router.get("/mensalNovembroCpuServidor5", function (req, res) {
    analiseController.mensalNovembroCpuServidor5(req, res);
});

router.get("/mensalDezembroCpuServidor5", function (req, res) {
    analiseController.mensalDezembroCpuServidor5(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor5", function (req, res) {
    analiseController.mensalJaneiroRamServidor5(req, res);
});

router.get("/mensalFevereiroRamServidor5", function (req, res) {
    analiseController.mensalFevereiroRamServidor5(req, res);
});

router.get("/mensalMarcoRamServidor5", function (req, res) {
    analiseController.mensalMarcoRamServidor5(req, res);
});

router.get("/mensalAbrilRamServidor5", function (req, res) {
    analiseController.mensalAbrilRamServidor5(req, res);
});

router.get("/mensalMaioRamServidor5", function (req, res) {
    analiseController.mensalMaioRamServidor5(req, res);
});

router.get("/mensalJunhoRamServidor5", function (req, res) {
    analiseController.mensalJunhoRamServidor5(req, res);
});

router.get("/mensalJulhoRamServidor5", function (req, res) {
    analiseController.mensalJulhoRamServidor5(req, res);
});

router.get("/mensalAgostoRamServidor5", function (req, res) {
    analiseController.mensalAgostoRamServidor5(req, res);
});

router.get("/mensalSetembroRamServidor5", function (req, res) {
    analiseController.mensalSetembroRamServidor5(req, res);
});

router.get("/mensalOutubroRamServidor5", function (req, res) {
    analiseController.mensalOutubroRamServidor5(req, res);
});

router.get("/mensalNovembroRamServidor5", function (req, res) {
    analiseController.mensalNovembroRamServidor5(req, res);
});

router.get("/mensalDezembroRamServidor5", function (req, res) {
    analiseController.mensalDezembroRamServidor5(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor5", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor5(req, res);
});

router.get("/mensalFevereiroDiscoServidor5", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor5(req, res);
});

router.get("/mensalMarcoDiscoServidor5", function (req, res) {
    analiseController.mensalMarcoDiscoServidor5(req, res);
});

router.get("/mensalAbrilDiscoServidor5", function (req, res) {
    analiseController.mensalAbrilDiscoServidor5(req, res);
});

router.get("/mensalMaioDiscoServidor5", function (req, res) {
    analiseController.mensalMaioDiscoServidor5(req, res);
});

router.get("/mensalJunhoDiscoServidor5", function (req, res) {
    analiseController.mensalJunhoDiscoServidor5(req, res);
});

router.get("/mensalJulhoDiscoServidor5", function (req, res) {
    analiseController.mensalJulhoDiscoServidor5(req, res);
});

router.get("/mensalAgostoDiscoServidor5", function (req, res) {
    analiseController.mensalAgostoDiscoServidor5(req, res);
});

router.get("/mensalSetembroDiscoServidor5", function (req, res) {
    analiseController.mensalSetembroDiscoServidor5(req, res);
});

router.get("/mensalOutubroDiscoServidor5", function (req, res) {
    analiseController.mensalOutubroDiscoServidor5(req, res);
});

router.get("/mensalNovembroDiscoServidor5", function (req, res) {
    analiseController.mensalNovembroDiscoServidor5(req, res);
});

router.get("/mensalDezembroDiscoServidor5", function (req, res) {
    analiseController.mensalDezembroDiscoServidor5(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor5", function (req, res) {
    analiseController.limiteJaneiroCpuServidor5(req, res);
});

router.get("/limiteFevereiroCpuServidor5", function (req, res) {
    analiseController.limiteFevereiroCpuServidor5(req, res);
});

router.get("/limiteMarcoCpuServidor5", function (req, res) {
    analiseController.limiteMarcoCpuServidor5(req, res);
});

router.get("/limiteAbrilCpuServidor5", function (req, res) {
    analiseController.limiteAbrilCpuServidor5(req, res);
});

router.get("/limiteMaioCpuServidor5", function (req, res) {
    analiseController.limiteMaioCpuServidor5(req, res);
});

router.get("/limiteJunhoCpuServidor5", function (req, res) {
    analiseController.limiteJunhoCpuServidor5(req, res);
});

router.get("/limiteJulhoCpuServidor5", function (req, res) {
    analiseController.limiteJulhoCpuServidor5(req, res);
});

router.get("/limiteAgostoCpuServidor5", function (req, res) {
    analiseController.limiteAgostoCpuServidor5(req, res);
});

router.get("/limiteSetembroCpuServidor5", function (req, res) {
    analiseController.limiteSetembroCpuServidor5(req, res);
});

router.get("/limiteOutubroCpuServidor5", function (req, res) {
    analiseController.limiteOutubroCpuServidor5(req, res);
});

router.get("/limiteNovembroCpuServidor5", function (req, res) {
    analiseController.limiteNovembroCpuServidor5(req, res);
});

router.get("/limiteDezembroCpuServidor5", function (req, res) {
    analiseController.limiteDezembroCpuServidor5(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor5", function (req, res) {
    analiseController.limiteJaneiroRamServidor5(req, res);
});

router.get("/limiteFevereiroRamServidor5", function (req, res) {
    analiseController.limiteFevereiroRamServidor5(req, res);
});

router.get("/limiteMarcoRamServidor5", function (req, res) {
    analiseController.limiteMarcoRamServidor5(req, res);
});

router.get("/limiteAbrilRamServidor5", function (req, res) {
    analiseController.limiteAbrilRamServidor5(req, res);
});

router.get("/limiteMaioRamServidor5", function (req, res) {
    analiseController.limiteMaioRamServidor5(req, res);
});

router.get("/limiteJunhoRamServidor5", function (req, res) {
    analiseController.limiteJunhoRamServidor5(req, res);
});

router.get("/limiteJulhoRamServidor5", function (req, res) {
    analiseController.limiteJulhoRamServidor5(req, res);
});

router.get("/limiteAgostoRamServidor5", function (req, res) {
    analiseController.limiteAgostoRamServidor5(req, res);
});

router.get("/limiteSetembroRamServidor5", function (req, res) {
    analiseController.limiteSetembroRamServidor5(req, res);
});

router.get("/limiteOutubroRamServidor5", function (req, res) {
    analiseController.limiteOutubroRamServidor5(req, res);
});

router.get("/limiteNovembroRamServidor5", function (req, res) {
    analiseController.limiteNovembroRamServidor5(req, res);
});

router.get("/limiteDezembroRamServidor5", function (req, res) {
    analiseController.limiteDezembroRamServidor5(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor5", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor5(req, res);
});

router.get("/limiteFevereiroDiscoServidor5", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor5(req, res);
});

router.get("/limiteMarcoDiscoServidor5", function (req, res) {
    analiseController.limiteMarcoDiscoServidor5(req, res);
});

router.get("/limiteAbrilDiscoServidor5", function (req, res) {
    analiseController.limiteAbrilDiscoServidor5(req, res);
});

router.get("/limiteMaioDiscoServidor5", function (req, res) {
    analiseController.limiteMaioDiscoServidor5(req, res);
});

router.get("/limiteJunhoDiscoServidor5", function (req, res) {
    analiseController.limiteJunhoDiscoServidor5(req, res);
});

router.get("/limiteJulhoDiscoServidor5", function (req, res) {
    analiseController.limiteJulhoDiscoServidor5(req, res);
});

router.get("/limiteAgostoDiscoServidor5", function (req, res) {
    analiseController.limiteAgostoDiscoServidor5(req, res);
});

router.get("/limiteSetembroDiscoServidor5", function (req, res) {
    analiseController.limiteSetembroDiscoServidor5(req, res);
});

router.get("/limiteOutubroDiscoServidor5", function (req, res) {
    analiseController.limiteOutubroDiscoServidor5(req, res);
});

router.get("/limiteNovembroDiscoServidor5", function (req, res) {
    analiseController.limiteNovembroDiscoServidor5(req, res);
});

router.get("/limiteDezembroDiscoServidor5", function (req, res) {
    analiseController.limiteDezembroDiscoServidor5(req, res);
});

router.get("/mensalJaneiroCpuServidor6", function (req, res) {
    analiseController.mensalJaneiroCpuServidor6(req, res);
});

router.get("/mensalFevereiroCpuServidor6", function (req, res) {
    analiseController.mensalFevereiroCpuServidor6(req, res);
});

router.get("/mensalMarcoCpuServidor6", function (req, res) {
    analiseController.mensalMarcoCpuServidor6(req, res);
});

router.get("/mensalAbrilCpuServidor6", function (req, res) {
    analiseController.mensalAbrilCpuServidor6(req, res);
});

router.get("/mensalMaioCpuServidor6", function (req, res) {
    analiseController.mensalMaioCpuServidor6(req, res);
});

router.get("/mensalJunhoCpuServidor6", function (req, res) {
    analiseController.mensalJunhoCpuServidor6(req, res);
});

router.get("/mensalJulhoCpuServidor6", function (req, res) {
    analiseController.mensalJulhoCpuServidor6(req, res);
});

router.get("/mensalAgostoCpuServidor6", function (req, res) {
    analiseController.mensalAgostoCpuServidor6(req, res);
});

router.get("/mensalSetembroCpuServidor6", function (req, res) {
    analiseController.mensalSetembroCpuServidor6(req, res);
});

router.get("/mensalOutubroCpuServidor6", function (req, res) {
    analiseController.mensalOutubroCpuServidor6(req, res);
});

router.get("/mensalNovembroCpuServidor6", function (req, res) {
    analiseController.mensalNovembroCpuServidor6(req, res);
});

router.get("/mensalDezembroCpuServidor6", function (req, res) {
    analiseController.mensalDezembroCpuServidor6(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor6", function (req, res) {
    analiseController.mensalJaneiroRamServidor6(req, res);
});

router.get("/mensalFevereiroRamServidor6", function (req, res) {
    analiseController.mensalFevereiroRamServidor6(req, res);
});

router.get("/mensalMarcoRamServidor6", function (req, res) {
    analiseController.mensalMarcoRamServidor6(req, res);
});

router.get("/mensalAbrilRamServidor6", function (req, res) {
    analiseController.mensalAbrilRamServidor6(req, res);
});

router.get("/mensalMaioRamServidor6", function (req, res) {
    analiseController.mensalMaioRamServidor6(req, res);
});

router.get("/mensalJunhoRamServidor6", function (req, res) {
    analiseController.mensalJunhoRamServidor6(req, res);
});

router.get("/mensalJulhoRamServidor6", function (req, res) {
    analiseController.mensalJulhoRamServidor6(req, res);
});

router.get("/mensalAgostoRamServidor6", function (req, res) {
    analiseController.mensalAgostoRamServidor6(req, res);
});

router.get("/mensalSetembroRamServidor6", function (req, res) {
    analiseController.mensalSetembroRamServidor6(req, res);
});

router.get("/mensalOutubroRamServidor6", function (req, res) {
    analiseController.mensalOutubroRamServidor6(req, res);
});

router.get("/mensalNovembroRamServidor6", function (req, res) {
    analiseController.mensalNovembroRamServidor6(req, res);
});

router.get("/mensalDezembroRamServidor6", function (req, res) {
    analiseController.mensalDezembroRamServidor6(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor6", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor6(req, res);
});

router.get("/mensalFevereiroDiscoServidor6", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor6(req, res);
});

router.get("/mensalMarcoDiscoServidor6", function (req, res) {
    analiseController.mensalMarcoDiscoServidor6(req, res);
});

router.get("/mensalAbrilDiscoServidor6", function (req, res) {
    analiseController.mensalAbrilDiscoServidor6(req, res);
});

router.get("/mensalMaioDiscoServidor6", function (req, res) {
    analiseController.mensalMaioDiscoServidor6(req, res);
});

router.get("/mensalJunhoDiscoServidor6", function (req, res) {
    analiseController.mensalJunhoDiscoServidor6(req, res);
});

router.get("/mensalJulhoDiscoServidor6", function (req, res) {
    analiseController.mensalJulhoDiscoServidor6(req, res);
});

router.get("/mensalAgostoDiscoServidor6", function (req, res) {
    analiseController.mensalAgostoDiscoServidor6(req, res);
});

router.get("/mensalSetembroDiscoServidor6", function (req, res) {
    analiseController.mensalSetembroDiscoServidor6(req, res);
});

router.get("/mensalOutubroDiscoServidor6", function (req, res) {
    analiseController.mensalOutubroDiscoServidor6(req, res);
});

router.get("/mensalNovembroDiscoServidor6", function (req, res) {
    analiseController.mensalNovembroDiscoServidor6(req, res);
});

router.get("/mensalDezembroDiscoServidor6", function (req, res) {
    analiseController.mensalDezembroDiscoServidor6(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor6", function (req, res) {
    analiseController.limiteJaneiroCpuServidor6(req, res);
});

router.get("/limiteFevereiroCpuServidor6", function (req, res) {
    analiseController.limiteFevereiroCpuServidor6(req, res);
});

router.get("/limiteMarcoCpuServidor6", function (req, res) {
    analiseController.limiteMarcoCpuServidor6(req, res);
});

router.get("/limiteAbrilCpuServidor6", function (req, res) {
    analiseController.limiteAbrilCpuServidor6(req, res);
});

router.get("/limiteMaioCpuServidor6", function (req, res) {
    analiseController.limiteMaioCpuServidor6(req, res);
});

router.get("/limiteJunhoCpuServidor6", function (req, res) {
    analiseController.limiteJunhoCpuServidor6(req, res);
});

router.get("/limiteJulhoCpuServidor6", function (req, res) {
    analiseController.limiteJulhoCpuServidor6(req, res);
});

router.get("/limiteAgostoCpuServidor6", function (req, res) {
    analiseController.limiteAgostoCpuServidor6(req, res);
});

router.get("/limiteSetembroCpuServidor6", function (req, res) {
    analiseController.limiteSetembroCpuServidor6(req, res);
});

router.get("/limiteOutubroCpuServidor6", function (req, res) {
    analiseController.limiteOutubroCpuServidor6(req, res);
});

router.get("/limiteNovembroCpuServidor6", function (req, res) {
    analiseController.limiteNovembroCpuServidor6(req, res);
});

router.get("/limiteDezembroCpuServidor6", function (req, res) {
    analiseController.limiteDezembroCpuServidor6(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor6", function (req, res) {
    analiseController.limiteJaneiroRamServidor6(req, res);
});

router.get("/limiteFevereiroRamServidor6", function (req, res) {
    analiseController.limiteFevereiroRamServidor6(req, res);
});

router.get("/limiteMarcoRamServidor6", function (req, res) {
    analiseController.limiteMarcoRamServidor6(req, res);
});

router.get("/limiteAbrilRamServidor6", function (req, res) {
    analiseController.limiteAbrilRamServidor6(req, res);
});

router.get("/limiteMaioRamServidor6", function (req, res) {
    analiseController.limiteMaioRamServidor6(req, res);
});

router.get("/limiteJunhoRamServidor6", function (req, res) {
    analiseController.limiteJunhoRamServidor6(req, res);
});

router.get("/limiteJulhoRamServidor6", function (req, res) {
    analiseController.limiteJulhoRamServidor6(req, res);
});

router.get("/limiteAgostoRamServidor6", function (req, res) {
    analiseController.limiteAgostoRamServidor6(req, res);
});

router.get("/limiteSetembroRamServidor6", function (req, res) {
    analiseController.limiteSetembroRamServidor6(req, res);
});

router.get("/limiteOutubroRamServidor6", function (req, res) {
    analiseController.limiteOutubroRamServidor6(req, res);
});

router.get("/limiteNovembroRamServidor6", function (req, res) {
    analiseController.limiteNovembroRamServidor6(req, res);
});

router.get("/limiteDezembroRamServidor6", function (req, res) {
    analiseController.limiteDezembroRamServidor6(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor6", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor6(req, res);
});

router.get("/limiteFevereiroDiscoServidor6", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor6(req, res);
});

router.get("/limiteMarcoDiscoServidor6", function (req, res) {
    analiseController.limiteMarcoDiscoServidor6(req, res);
});

router.get("/limiteAbrilDiscoServidor6", function (req, res) {
    analiseController.limiteAbrilDiscoServidor6(req, res);
});

router.get("/limiteMaioDiscoServidor6", function (req, res) {
    analiseController.limiteMaioDiscoServidor6(req, res);
});

router.get("/limiteJunhoDiscoServidor6", function (req, res) {
    analiseController.limiteJunhoDiscoServidor6(req, res);
});

router.get("/limiteJulhoDiscoServidor6", function (req, res) {
    analiseController.limiteJulhoDiscoServidor6(req, res);
});

router.get("/limiteAgostoDiscoServidor6", function (req, res) {
    analiseController.limiteAgostoDiscoServidor6(req, res);
});

router.get("/limiteSetembroDiscoServidor6", function (req, res) {
    analiseController.limiteSetembroDiscoServidor6(req, res);
});

router.get("/limiteOutubroDiscoServidor6", function (req, res) {
    analiseController.limiteOutubroDiscoServidor6(req, res);
});

router.get("/limiteNovembroDiscoServidor6", function (req, res) {
    analiseController.limiteNovembroDiscoServidor6(req, res);
});

router.get("/limiteDezembroDiscoServidor6", function (req, res) {
    analiseController.limiteDezembroDiscoServidor6(req, res);
});

router.get("/mensalJaneiroCpuServidor7", function (req, res) {
    analiseController.mensalJaneiroCpuServidor7(req, res);
});

router.get("/mensalFevereiroCpuServidor7", function (req, res) {
    analiseController.mensalFevereiroCpuServidor7(req, res);
});

router.get("/mensalMarcoCpuServidor7", function (req, res) {
    analiseController.mensalMarcoCpuServidor7(req, res);
});

router.get("/mensalAbrilCpuServidor7", function (req, res) {
    analiseController.mensalAbrilCpuServidor7(req, res);
});

router.get("/mensalMaioCpuServidor7", function (req, res) {
    analiseController.mensalMaioCpuServidor7(req, res);
});

router.get("/mensalJunhoCpuServidor7", function (req, res) {
    analiseController.mensalJunhoCpuServidor7(req, res);
});

router.get("/mensalJulhoCpuServidor7", function (req, res) {
    analiseController.mensalJulhoCpuServidor7(req, res);
});

router.get("/mensalAgostoCpuServidor7", function (req, res) {
    analiseController.mensalAgostoCpuServidor7(req, res);
});

router.get("/mensalSetembroCpuServidor7", function (req, res) {
    analiseController.mensalSetembroCpuServidor7(req, res);
});

router.get("/mensalOutubroCpuServidor7", function (req, res) {
    analiseController.mensalOutubroCpuServidor7(req, res);
});

router.get("/mensalNovembroCpuServidor7", function (req, res) {
    analiseController.mensalNovembroCpuServidor7(req, res);
});

router.get("/mensalDezembroCpuServidor7", function (req, res) {
    analiseController.mensalDezembroCpuServidor7(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor7", function (req, res) {
    analiseController.mensalJaneiroRamServidor7(req, res);
});

router.get("/mensalFevereiroRamServidor7", function (req, res) {
    analiseController.mensalFevereiroRamServidor7(req, res);
});

router.get("/mensalMarcoRamServidor7", function (req, res) {
    analiseController.mensalMarcoRamServidor7(req, res);
});

router.get("/mensalAbrilRamServidor7", function (req, res) {
    analiseController.mensalAbrilRamServidor7(req, res);
});

router.get("/mensalMaioRamServidor7", function (req, res) {
    analiseController.mensalMaioRamServidor7(req, res);
});

router.get("/mensalJunhoRamServidor7", function (req, res) {
    analiseController.mensalJunhoRamServidor7(req, res);
});

router.get("/mensalJulhoRamServidor7", function (req, res) {
    analiseController.mensalJulhoRamServidor7(req, res);
});

router.get("/mensalAgostoRamServidor7", function (req, res) {
    analiseController.mensalAgostoRamServidor7(req, res);
});

router.get("/mensalSetembroRamServidor7", function (req, res) {
    analiseController.mensalSetembroRamServidor7(req, res);
});

router.get("/mensalOutubroRamServidor7", function (req, res) {
    analiseController.mensalOutubroRamServidor7(req, res);
});

router.get("/mensalNovembroRamServidor7", function (req, res) {
    analiseController.mensalNovembroRamServidor7(req, res);
});

router.get("/mensalDezembroRamServidor7", function (req, res) {
    analiseController.mensalDezembroRamServidor7(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor7", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor7(req, res);
});

router.get("/mensalFevereiroDiscoServidor7", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor7(req, res);
});

router.get("/mensalMarcoDiscoServidor7", function (req, res) {
    analiseController.mensalMarcoDiscoServidor7(req, res);
});

router.get("/mensalAbrilDiscoServidor7", function (req, res) {
    analiseController.mensalAbrilDiscoServidor7(req, res);
});

router.get("/mensalMaioDiscoServidor7", function (req, res) {
    analiseController.mensalMaioDiscoServidor7(req, res);
});

router.get("/mensalJunhoDiscoServidor7", function (req, res) {
    analiseController.mensalJunhoDiscoServidor7(req, res);
});

router.get("/mensalJulhoDiscoServidor7", function (req, res) {
    analiseController.mensalJulhoDiscoServidor7(req, res);
});

router.get("/mensalAgostoDiscoServidor7", function (req, res) {
    analiseController.mensalAgostoDiscoServidor7(req, res);
});

router.get("/mensalSetembroDiscoServidor7", function (req, res) {
    analiseController.mensalSetembroDiscoServidor7(req, res);
});

router.get("/mensalOutubroDiscoServidor7", function (req, res) {
    analiseController.mensalOutubroDiscoServidor7(req, res);
});

router.get("/mensalNovembroDiscoServidor7", function (req, res) {
    analiseController.mensalNovembroDiscoServidor7(req, res);
});

router.get("/mensalDezembroDiscoServidor7", function (req, res) {
    analiseController.mensalDezembroDiscoServidor7(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor7", function (req, res) {
    analiseController.limiteJaneiroCpuServidor7(req, res);
});

router.get("/limiteFevereiroCpuServidor7", function (req, res) {
    analiseController.limiteFevereiroCpuServidor7(req, res);
});

router.get("/limiteMarcoCpuServidor7", function (req, res) {
    analiseController.limiteMarcoCpuServidor7(req, res);
});

router.get("/limiteAbrilCpuServidor7", function (req, res) {
    analiseController.limiteAbrilCpuServidor7(req, res);
});

router.get("/limiteMaioCpuServidor7", function (req, res) {
    analiseController.limiteMaioCpuServidor7(req, res);
});

router.get("/limiteJunhoCpuServidor7", function (req, res) {
    analiseController.limiteJunhoCpuServidor7(req, res);
});

router.get("/limiteJulhoCpuServidor7", function (req, res) {
    analiseController.limiteJulhoCpuServidor7(req, res);
});

router.get("/limiteAgostoCpuServidor7", function (req, res) {
    analiseController.limiteAgostoCpuServidor7(req, res);
});

router.get("/limiteSetembroCpuServidor7", function (req, res) {
    analiseController.limiteSetembroCpuServidor7(req, res);
});

router.get("/limiteOutubroCpuServidor7", function (req, res) {
    analiseController.limiteOutubroCpuServidor7(req, res);
});

router.get("/limiteNovembroCpuServidor7", function (req, res) {
    analiseController.limiteNovembroCpuServidor7(req, res);
});

router.get("/limiteDezembroCpuServidor7", function (req, res) {
    analiseController.limiteDezembroCpuServidor7(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor7", function (req, res) {
    analiseController.limiteJaneiroRamServidor7(req, res);
});

router.get("/limiteFevereiroRamServidor7", function (req, res) {
    analiseController.limiteFevereiroRamServidor7(req, res);
});

router.get("/limiteMarcoRamServidor7", function (req, res) {
    analiseController.limiteMarcoRamServidor7(req, res);
});

router.get("/limiteAbrilRamServidor7", function (req, res) {
    analiseController.limiteAbrilRamServidor7(req, res);
});

router.get("/limiteMaioRamServidor7", function (req, res) {
    analiseController.limiteMaioRamServidor7(req, res);
});

router.get("/limiteJunhoRamServidor7", function (req, res) {
    analiseController.limiteJunhoRamServidor7(req, res);
});

router.get("/limiteJulhoRamServidor7", function (req, res) {
    analiseController.limiteJulhoRamServidor7(req, res);
});

router.get("/limiteAgostoRamServidor7", function (req, res) {
    analiseController.limiteAgostoRamServidor7(req, res);
});

router.get("/limiteSetembroRamServidor7", function (req, res) {
    analiseController.limiteSetembroRamServidor7(req, res);
});

router.get("/limiteOutubroRamServidor7", function (req, res) {
    analiseController.limiteOutubroRamServidor7(req, res);
});

router.get("/limiteNovembroRamServidor7", function (req, res) {
    analiseController.limiteNovembroRamServidor7(req, res);
});

router.get("/limiteDezembroRamServidor7", function (req, res) {
    analiseController.limiteDezembroRamServidor7(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor7", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor7(req, res);
});

router.get("/limiteFevereiroDiscoServidor7", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor7(req, res);
});

router.get("/limiteMarcoDiscoServidor7", function (req, res) {
    analiseController.limiteMarcoDiscoServidor7(req, res);
});

router.get("/limiteAbrilDiscoServidor7", function (req, res) {
    analiseController.limiteAbrilDiscoServidor7(req, res);
});

router.get("/limiteMaioDiscoServidor7", function (req, res) {
    analiseController.limiteMaioDiscoServidor7(req, res);
});

router.get("/limiteJunhoDiscoServidor7", function (req, res) {
    analiseController.limiteJunhoDiscoServidor7(req, res);
});

router.get("/limiteJulhoDiscoServidor7", function (req, res) {
    analiseController.limiteJulhoDiscoServidor7(req, res);
});

router.get("/limiteAgostoDiscoServidor7", function (req, res) {
    analiseController.limiteAgostoDiscoServidor7(req, res);
});

router.get("/limiteSetembroDiscoServidor7", function (req, res) {
    analiseController.limiteSetembroDiscoServidor7(req, res);
});

router.get("/limiteOutubroDiscoServidor7", function (req, res) {
    analiseController.limiteOutubroDiscoServidor7(req, res);
});

router.get("/limiteNovembroDiscoServidor7", function (req, res) {
    analiseController.limiteNovembroDiscoServidor7(req, res);
});

router.get("/limiteDezembroDiscoServidor7", function (req, res) {
    analiseController.limiteDezembroDiscoServidor7(req, res);
});

router.get("/mensalJaneiroCpuServidor8", function (req, res) {
    analiseController.mensalJaneiroCpuServidor8(req, res);
});

router.get("/mensalFevereiroCpuServidor8", function (req, res) {
    analiseController.mensalFevereiroCpuServidor8(req, res);
});

router.get("/mensalMarcoCpuServidor8", function (req, res) {
    analiseController.mensalMarcoCpuServidor8(req, res);
});

router.get("/mensalAbrilCpuServidor8", function (req, res) {
    analiseController.mensalAbrilCpuServidor8(req, res);
});

router.get("/mensalMaioCpuServidor8", function (req, res) {
    analiseController.mensalMaioCpuServidor8(req, res);
});

router.get("/mensalJunhoCpuServidor8", function (req, res) {
    analiseController.mensalJunhoCpuServidor8(req, res);
});

router.get("/mensalJulhoCpuServidor8", function (req, res) {
    analiseController.mensalJulhoCpuServidor8(req, res);
});

router.get("/mensalAgostoCpuServidor8", function (req, res) {
    analiseController.mensalAgostoCpuServidor8(req, res);
});

router.get("/mensalSetembroCpuServidor8", function (req, res) {
    analiseController.mensalSetembroCpuServidor8(req, res);
});

router.get("/mensalOutubroCpuServidor8", function (req, res) {
    analiseController.mensalOutubroCpuServidor8(req, res);
});

router.get("/mensalNovembroCpuServidor8", function (req, res) {
    analiseController.mensalNovembroCpuServidor8(req, res);
});

router.get("/mensalDezembroCpuServidor8", function (req, res) {
    analiseController.mensalDezembroCpuServidor8(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor8", function (req, res) {
    analiseController.mensalJaneiroRamServidor8(req, res);
});

router.get("/mensalFevereiroRamServidor8", function (req, res) {
    analiseController.mensalFevereiroRamServidor8(req, res);
});

router.get("/mensalMarcoRamServidor8", function (req, res) {
    analiseController.mensalMarcoRamServidor8(req, res);
});

router.get("/mensalAbrilRamServidor8", function (req, res) {
    analiseController.mensalAbrilRamServidor8(req, res);
});

router.get("/mensalMaioRamServidor8", function (req, res) {
    analiseController.mensalMaioRamServidor8(req, res);
});

router.get("/mensalJunhoRamServidor8", function (req, res) {
    analiseController.mensalJunhoRamServidor8(req, res);
});

router.get("/mensalJulhoRamServidor8", function (req, res) {
    analiseController.mensalJulhoRamServidor8(req, res);
});

router.get("/mensalAgostoRamServidor8", function (req, res) {
    analiseController.mensalAgostoRamServidor8(req, res);
});

router.get("/mensalSetembroRamServidor8", function (req, res) {
    analiseController.mensalSetembroRamServidor8(req, res);
});

router.get("/mensalOutubroRamServidor8", function (req, res) {
    analiseController.mensalOutubroRamServidor8(req, res);
});

router.get("/mensalNovembroRamServidor8", function (req, res) {
    analiseController.mensalNovembroRamServidor8(req, res);
});

router.get("/mensalDezembroRamServidor8", function (req, res) {
    analiseController.mensalDezembroRamServidor8(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor8", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor8(req, res);
});

router.get("/mensalFevereiroDiscoServidor8", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor8(req, res);
});

router.get("/mensalMarcoDiscoServidor8", function (req, res) {
    analiseController.mensalMarcoDiscoServidor8(req, res);
});

router.get("/mensalAbrilDiscoServidor8", function (req, res) {
    analiseController.mensalAbrilDiscoServidor8(req, res);
});

router.get("/mensalMaioDiscoServidor8", function (req, res) {
    analiseController.mensalMaioDiscoServidor8(req, res);
});

router.get("/mensalJunhoDiscoServidor8", function (req, res) {
    analiseController.mensalJunhoDiscoServidor8(req, res);
});

router.get("/mensalJulhoDiscoServidor8", function (req, res) {
    analiseController.mensalJulhoDiscoServidor8(req, res);
});

router.get("/mensalAgostoDiscoServidor8", function (req, res) {
    analiseController.mensalAgostoDiscoServidor8(req, res);
});

router.get("/mensalSetembroDiscoServidor8", function (req, res) {
    analiseController.mensalSetembroDiscoServidor8(req, res);
});

router.get("/mensalOutubroDiscoServidor8", function (req, res) {
    analiseController.mensalOutubroDiscoServidor8(req, res);
});

router.get("/mensalNovembroDiscoServidor8", function (req, res) {
    analiseController.mensalNovembroDiscoServidor8(req, res);
});

router.get("/mensalDezembroDiscoServidor8", function (req, res) {
    analiseController.mensalDezembroDiscoServidor8(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor8", function (req, res) {
    analiseController.limiteJaneiroCpuServidor8(req, res);
});

router.get("/limiteFevereiroCpuServidor8", function (req, res) {
    analiseController.limiteFevereiroCpuServidor8(req, res);
});

router.get("/limiteMarcoCpuServidor8", function (req, res) {
    analiseController.limiteMarcoCpuServidor8(req, res);
});

router.get("/limiteAbrilCpuServidor8", function (req, res) {
    analiseController.limiteAbrilCpuServidor8(req, res);
});

router.get("/limiteMaioCpuServidor8", function (req, res) {
    analiseController.limiteMaioCpuServidor8(req, res);
});

router.get("/limiteJunhoCpuServidor8", function (req, res) {
    analiseController.limiteJunhoCpuServidor8(req, res);
});

router.get("/limiteJulhoCpuServidor8", function (req, res) {
    analiseController.limiteJulhoCpuServidor8(req, res);
});

router.get("/limiteAgostoCpuServidor8", function (req, res) {
    analiseController.limiteAgostoCpuServidor8(req, res);
});

router.get("/limiteSetembroCpuServidor8", function (req, res) {
    analiseController.limiteSetembroCpuServidor8(req, res);
});

router.get("/limiteOutubroCpuServidor8", function (req, res) {
    analiseController.limiteOutubroCpuServidor8(req, res);
});

router.get("/limiteNovembroCpuServidor8", function (req, res) {
    analiseController.limiteNovembroCpuServidor8(req, res);
});

router.get("/limiteDezembroCpuServidor8", function (req, res) {
    analiseController.limiteDezembroCpuServidor8(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor8", function (req, res) {
    analiseController.limiteJaneiroRamServidor8(req, res);
});

router.get("/limiteFevereiroRamServidor8", function (req, res) {
    analiseController.limiteFevereiroRamServidor8(req, res);
});

router.get("/limiteMarcoRamServidor8", function (req, res) {
    analiseController.limiteMarcoRamServidor8(req, res);
});

router.get("/limiteAbrilRamServidor8", function (req, res) {
    analiseController.limiteAbrilRamServidor8(req, res);
});

router.get("/limiteMaioRamServidor8", function (req, res) {
    analiseController.limiteMaioRamServidor8(req, res);
});

router.get("/limiteJunhoRamServidor8", function (req, res) {
    analiseController.limiteJunhoRamServidor8(req, res);
});

router.get("/limiteJulhoRamServidor8", function (req, res) {
    analiseController.limiteJulhoRamServidor8(req, res);
});

router.get("/limiteAgostoRamServidor8", function (req, res) {
    analiseController.limiteAgostoRamServidor8(req, res);
});

router.get("/limiteSetembroRamServidor8", function (req, res) {
    analiseController.limiteSetembroRamServidor8(req, res);
});

router.get("/limiteOutubroRamServidor8", function (req, res) {
    analiseController.limiteOutubroRamServidor8(req, res);
});

router.get("/limiteNovembroRamServidor8", function (req, res) {
    analiseController.limiteNovembroRamServidor8(req, res);
});

router.get("/limiteDezembroRamServidor8", function (req, res) {
    analiseController.limiteDezembroRamServidor8(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor8", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor8(req, res);
});

router.get("/limiteFevereiroDiscoServidor8", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor8(req, res);
});

router.get("/limiteMarcoDiscoServidor8", function (req, res) {
    analiseController.limiteMarcoDiscoServidor8(req, res);
});

router.get("/limiteAbrilDiscoServidor8", function (req, res) {
    analiseController.limiteAbrilDiscoServidor8(req, res);
});

router.get("/limiteMaioDiscoServidor8", function (req, res) {
    analiseController.limiteMaioDiscoServidor8(req, res);
});

router.get("/limiteJunhoDiscoServidor8", function (req, res) {
    analiseController.limiteJunhoDiscoServidor8(req, res);
});

router.get("/limiteJulhoDiscoServidor8", function (req, res) {
    analiseController.limiteJulhoDiscoServidor8(req, res);
});

router.get("/limiteAgostoDiscoServidor8", function (req, res) {
    analiseController.limiteAgostoDiscoServidor8(req, res);
});

router.get("/limiteSetembroDiscoServidor8", function (req, res) {
    analiseController.limiteSetembroDiscoServidor8(req, res);
});

router.get("/limiteOutubroDiscoServidor8", function (req, res) {
    analiseController.limiteOutubroDiscoServidor8(req, res);
});

router.get("/limiteNovembroDiscoServidor8", function (req, res) {
    analiseController.limiteNovembroDiscoServidor8(req, res);
});

router.get("/limiteDezembroDiscoServidor8", function (req, res) {
    analiseController.limiteDezembroDiscoServidor8(req, res);
});

router.get("/mensalJaneiroCpuServidor9", function (req, res) {
    analiseController.mensalJaneiroCpuServidor9(req, res);
});

router.get("/mensalFevereiroCpuServidor9", function (req, res) {
    analiseController.mensalFevereiroCpuServidor9(req, res);
});

router.get("/mensalMarcoCpuServidor9", function (req, res) {
    analiseController.mensalMarcoCpuServidor9(req, res);
});

router.get("/mensalAbrilCpuServidor9", function (req, res) {
    analiseController.mensalAbrilCpuServidor9(req, res);
});

router.get("/mensalMaioCpuServidor9", function (req, res) {
    analiseController.mensalMaioCpuServidor9(req, res);
});

router.get("/mensalJunhoCpuServidor9", function (req, res) {
    analiseController.mensalJunhoCpuServidor9(req, res);
});

router.get("/mensalJulhoCpuServidor9", function (req, res) {
    analiseController.mensalJulhoCpuServidor9(req, res);
});

router.get("/mensalAgostoCpuServidor9", function (req, res) {
    analiseController.mensalAgostoCpuServidor9(req, res);
});

router.get("/mensalSetembroCpuServidor9", function (req, res) {
    analiseController.mensalSetembroCpuServidor9(req, res);
});

router.get("/mensalOutubroCpuServidor9", function (req, res) {
    analiseController.mensalOutubroCpuServidor9(req, res);
});

router.get("/mensalNovembroCpuServidor9", function (req, res) {
    analiseController.mensalNovembroCpuServidor9(req, res);
});

router.get("/mensalDezembroCpuServidor9", function (req, res) {
    analiseController.mensalDezembroCpuServidor9(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor9", function (req, res) {
    analiseController.mensalJaneiroRamServidor9(req, res);
});

router.get("/mensalFevereiroRamServidor9", function (req, res) {
    analiseController.mensalFevereiroRamServidor9(req, res);
});

router.get("/mensalMarcoRamServidor9", function (req, res) {
    analiseController.mensalMarcoRamServidor9(req, res);
});

router.get("/mensalAbrilRamServidor9", function (req, res) {
    analiseController.mensalAbrilRamServidor9(req, res);
});

router.get("/mensalMaioRamServidor9", function (req, res) {
    analiseController.mensalMaioRamServidor9(req, res);
});

router.get("/mensalJunhoRamServidor9", function (req, res) {
    analiseController.mensalJunhoRamServidor9(req, res);
});

router.get("/mensalJulhoRamServidor9", function (req, res) {
    analiseController.mensalJulhoRamServidor9(req, res);
});

router.get("/mensalAgostoRamServidor9", function (req, res) {
    analiseController.mensalAgostoRamServidor9(req, res);
});

router.get("/mensalSetembroRamServidor9", function (req, res) {
    analiseController.mensalSetembroRamServidor9(req, res);
});

router.get("/mensalOutubroRamServidor9", function (req, res) {
    analiseController.mensalOutubroRamServidor9(req, res);
});

router.get("/mensalNovembroRamServidor9", function (req, res) {
    analiseController.mensalNovembroRamServidor9(req, res);
});

router.get("/mensalDezembroRamServidor9", function (req, res) {
    analiseController.mensalDezembroRamServidor9(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor9", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor9(req, res);
});

router.get("/mensalFevereiroDiscoServidor9", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor9(req, res);
});

router.get("/mensalMarcoDiscoServidor9", function (req, res) {
    analiseController.mensalMarcoDiscoServidor9(req, res);
});

router.get("/mensalAbrilDiscoServidor9", function (req, res) {
    analiseController.mensalAbrilDiscoServidor9(req, res);
});

router.get("/mensalMaioDiscoServidor9", function (req, res) {
    analiseController.mensalMaioDiscoServidor9(req, res);
});

router.get("/mensalJunhoDiscoServidor9", function (req, res) {
    analiseController.mensalJunhoDiscoServidor9(req, res);
});

router.get("/mensalJulhoDiscoServidor9", function (req, res) {
    analiseController.mensalJulhoDiscoServidor9(req, res);
});

router.get("/mensalAgostoDiscoServidor9", function (req, res) {
    analiseController.mensalAgostoDiscoServidor9(req, res);
});

router.get("/mensalSetembroDiscoServidor9", function (req, res) {
    analiseController.mensalSetembroDiscoServidor9(req, res);
});

router.get("/mensalOutubroDiscoServidor9", function (req, res) {
    analiseController.mensalOutubroDiscoServidor9(req, res);
});

router.get("/mensalNovembroDiscoServidor9", function (req, res) {
    analiseController.mensalNovembroDiscoServidor9(req, res);
});

router.get("/mensalDezembroDiscoServidor9", function (req, res) {
    analiseController.mensalDezembroDiscoServidor9(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor9", function (req, res) {
    analiseController.limiteJaneiroCpuServidor9(req, res);
});

router.get("/limiteFevereiroCpuServidor9", function (req, res) {
    analiseController.limiteFevereiroCpuServidor9(req, res);
});

router.get("/limiteMarcoCpuServidor9", function (req, res) {
    analiseController.limiteMarcoCpuServidor9(req, res);
});

router.get("/limiteAbrilCpuServidor9", function (req, res) {
    analiseController.limiteAbrilCpuServidor9(req, res);
});

router.get("/limiteMaioCpuServidor9", function (req, res) {
    analiseController.limiteMaioCpuServidor9(req, res);
});

router.get("/limiteJunhoCpuServidor9", function (req, res) {
    analiseController.limiteJunhoCpuServidor9(req, res);
});

router.get("/limiteJulhoCpuServidor9", function (req, res) {
    analiseController.limiteJulhoCpuServidor9(req, res);
});

router.get("/limiteAgostoCpuServidor9", function (req, res) {
    analiseController.limiteAgostoCpuServidor9(req, res);
});

router.get("/limiteSetembroCpuServidor9", function (req, res) {
    analiseController.limiteSetembroCpuServidor9(req, res);
});

router.get("/limiteOutubroCpuServidor9", function (req, res) {
    analiseController.limiteOutubroCpuServidor9(req, res);
});

router.get("/limiteNovembroCpuServidor9", function (req, res) {
    analiseController.limiteNovembroCpuServidor9(req, res);
});

router.get("/limiteDezembroCpuServidor9", function (req, res) {
    analiseController.limiteDezembroCpuServidor9(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor9", function (req, res) {
    analiseController.limiteJaneiroRamServidor9(req, res);
});

router.get("/limiteFevereiroRamServidor9", function (req, res) {
    analiseController.limiteFevereiroRamServidor9(req, res);
});

router.get("/limiteMarcoRamServidor9", function (req, res) {
    analiseController.limiteMarcoRamServidor9(req, res);
});

router.get("/limiteAbrilRamServidor9", function (req, res) {
    analiseController.limiteAbrilRamServidor9(req, res);
});

router.get("/limiteMaioRamServidor9", function (req, res) {
    analiseController.limiteMaioRamServidor9(req, res);
});

router.get("/limiteJunhoRamServidor9", function (req, res) {
    analiseController.limiteJunhoRamServidor9(req, res);
});

router.get("/limiteJulhoRamServidor9", function (req, res) {
    analiseController.limiteJulhoRamServidor9(req, res);
});

router.get("/limiteAgostoRamServidor9", function (req, res) {
    analiseController.limiteAgostoRamServidor9(req, res);
});

router.get("/limiteSetembroRamServidor9", function (req, res) {
    analiseController.limiteSetembroRamServidor9(req, res);
});

router.get("/limiteOutubroRamServidor9", function (req, res) {
    analiseController.limiteOutubroRamServidor9(req, res);
});

router.get("/limiteNovembroRamServidor9", function (req, res) {
    analiseController.limiteNovembroRamServidor9(req, res);
});

router.get("/limiteDezembroRamServidor9", function (req, res) {
    analiseController.limiteDezembroRamServidor9(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor9", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor9(req, res);
});

router.get("/limiteFevereiroDiscoServidor9", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor9(req, res);
});

router.get("/limiteMarcoDiscoServidor9", function (req, res) {
    analiseController.limiteMarcoDiscoServidor9(req, res);
});

router.get("/limiteAbrilDiscoServidor9", function (req, res) {
    analiseController.limiteAbrilDiscoServidor9(req, res);
});

router.get("/limiteMaioDiscoServidor9", function (req, res) {
    analiseController.limiteMaioDiscoServidor9(req, res);
});

router.get("/limiteJunhoDiscoServidor9", function (req, res) {
    analiseController.limiteJunhoDiscoServidor9(req, res);
});

router.get("/limiteJulhoDiscoServidor9", function (req, res) {
    analiseController.limiteJulhoDiscoServidor9(req, res);
});

router.get("/limiteAgostoDiscoServidor9", function (req, res) {
    analiseController.limiteAgostoDiscoServidor9(req, res);
});

router.get("/limiteSetembroDiscoServidor9", function (req, res) {
    analiseController.limiteSetembroDiscoServidor9(req, res);
});

router.get("/limiteOutubroDiscoServidor9", function (req, res) {
    analiseController.limiteOutubroDiscoServidor9(req, res);
});

router.get("/limiteNovembroDiscoServidor9", function (req, res) {
    analiseController.limiteNovembroDiscoServidor9(req, res);
});

router.get("/limiteDezembroDiscoServidor9", function (req, res) {
    analiseController.limiteDezembroDiscoServidor9(req, res);
});

router.get("/mensalJaneiroCpuServidor10", function (req, res) {
    analiseController.mensalJaneiroCpuServidor10(req, res);
});

router.get("/mensalFevereiroCpuServidor10", function (req, res) {
    analiseController.mensalFevereiroCpuServidor10(req, res);
});

router.get("/mensalMarcoCpuServidor10", function (req, res) {
    analiseController.mensalMarcoCpuServidor10(req, res);
});

router.get("/mensalAbrilCpuServidor10", function (req, res) {
    analiseController.mensalAbrilCpuServidor10(req, res);
});

router.get("/mensalMaioCpuServidor10", function (req, res) {
    analiseController.mensalMaioCpuServidor10(req, res);
});

router.get("/mensalJunhoCpuServidor10", function (req, res) {
    analiseController.mensalJunhoCpuServidor10(req, res);
});

router.get("/mensalJulhoCpuServidor10", function (req, res) {
    analiseController.mensalJulhoCpuServidor10(req, res);
});

router.get("/mensalAgostoCpuServidor10", function (req, res) {
    analiseController.mensalAgostoCpuServidor10(req, res);
});

router.get("/mensalSetembroCpuServidor10", function (req, res) {
    analiseController.mensalSetembroCpuServidor10(req, res);
});

router.get("/mensalOutubroCpuServidor10", function (req, res) {
    analiseController.mensalOutubroCpuServidor10(req, res);
});

router.get("/mensalNovembroCpuServidor10", function (req, res) {
    analiseController.mensalNovembroCpuServidor10(req, res);
});

router.get("/mensalDezembroCpuServidor10", function (req, res) {
    analiseController.mensalDezembroCpuServidor10(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor10", function (req, res) {
    analiseController.mensalJaneiroRamServidor10(req, res);
});

router.get("/mensalFevereiroRamServidor10", function (req, res) {
    analiseController.mensalFevereiroRamServidor10(req, res);
});

router.get("/mensalMarcoRamServidor10", function (req, res) {
    analiseController.mensalMarcoRamServidor10(req, res);
});

router.get("/mensalAbrilRamServidor10", function (req, res) {
    analiseController.mensalAbrilRamServidor10(req, res);
});

router.get("/mensalMaioRamServidor10", function (req, res) {
    analiseController.mensalMaioRamServidor10(req, res);
});

router.get("/mensalJunhoRamServidor10", function (req, res) {
    analiseController.mensalJunhoRamServidor10(req, res);
});

router.get("/mensalJulhoRamServidor10", function (req, res) {
    analiseController.mensalJulhoRamServidor10(req, res);
});

router.get("/mensalAgostoRamServidor10", function (req, res) {
    analiseController.mensalAgostoRamServidor10(req, res);
});

router.get("/mensalSetembroRamServidor10", function (req, res) {
    analiseController.mensalSetembroRamServidor10(req, res);
});

router.get("/mensalOutubroRamServidor10", function (req, res) {
    analiseController.mensalOutubroRamServidor10(req, res);
});

router.get("/mensalNovembroRamServidor10", function (req, res) {
    analiseController.mensalNovembroRamServidor10(req, res);
});

router.get("/mensalDezembroRamServidor10", function (req, res) {
    analiseController.mensalDezembroRamServidor10(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor10", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor10(req, res);
});

router.get("/mensalFevereiroDiscoServidor10", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor10(req, res);
});

router.get("/mensalMarcoDiscoServidor10", function (req, res) {
    analiseController.mensalMarcoDiscoServidor10(req, res);
});

router.get("/mensalAbrilDiscoServidor10", function (req, res) {
    analiseController.mensalAbrilDiscoServidor10(req, res);
});

router.get("/mensalMaioDiscoServidor10", function (req, res) {
    analiseController.mensalMaioDiscoServidor10(req, res);
});

router.get("/mensalJunhoDiscoServidor10", function (req, res) {
    analiseController.mensalJunhoDiscoServidor10(req, res);
});

router.get("/mensalJulhoDiscoServidor10", function (req, res) {
    analiseController.mensalJulhoDiscoServidor10(req, res);
});

router.get("/mensalAgostoDiscoServidor10", function (req, res) {
    analiseController.mensalAgostoDiscoServidor10(req, res);
});

router.get("/mensalSetembroDiscoServidor10", function (req, res) {
    analiseController.mensalSetembroDiscoServidor10(req, res);
});

router.get("/mensalOutubroDiscoServidor10", function (req, res) {
    analiseController.mensalOutubroDiscoServidor10(req, res);
});

router.get("/mensalNovembroDiscoServidor10", function (req, res) {
    analiseController.mensalNovembroDiscoServidor10(req, res);
});

router.get("/mensalDezembroDiscoServidor10", function (req, res) {
    analiseController.mensalDezembroDiscoServidor10(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor10", function (req, res) {
    analiseController.limiteJaneiroCpuServidor10(req, res);
});

router.get("/limiteFevereiroCpuServidor10", function (req, res) {
    analiseController.limiteFevereiroCpuServidor10(req, res);
});

router.get("/limiteMarcoCpuServidor10", function (req, res) {
    analiseController.limiteMarcoCpuServidor10(req, res);
});

router.get("/limiteAbrilCpuServidor10", function (req, res) {
    analiseController.limiteAbrilCpuServidor10(req, res);
});

router.get("/limiteMaioCpuServidor10", function (req, res) {
    analiseController.limiteMaioCpuServidor10(req, res);
});

router.get("/limiteJunhoCpuServidor10", function (req, res) {
    analiseController.limiteJunhoCpuServidor10(req, res);
});

router.get("/limiteJulhoCpuServidor10", function (req, res) {
    analiseController.limiteJulhoCpuServidor10(req, res);
});

router.get("/limiteAgostoCpuServidor10", function (req, res) {
    analiseController.limiteAgostoCpuServidor10(req, res);
});

router.get("/limiteSetembroCpuServidor10", function (req, res) {
    analiseController.limiteSetembroCpuServidor10(req, res);
});

router.get("/limiteOutubroCpuServidor10", function (req, res) {
    analiseController.limiteOutubroCpuServidor10(req, res);
});

router.get("/limiteNovembroCpuServidor10", function (req, res) {
    analiseController.limiteNovembroCpuServidor10(req, res);
});

router.get("/limiteDezembroCpuServidor10", function (req, res) {
    analiseController.limiteDezembroCpuServidor10(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor10", function (req, res) {
    analiseController.limiteJaneiroRamServidor10(req, res);
});

router.get("/limiteFevereiroRamServidor10", function (req, res) {
    analiseController.limiteFevereiroRamServidor10(req, res);
});

router.get("/limiteMarcoRamServidor10", function (req, res) {
    analiseController.limiteMarcoRamServidor10(req, res);
});

router.get("/limiteAbrilRamServidor10", function (req, res) {
    analiseController.limiteAbrilRamServidor10(req, res);
});

router.get("/limiteMaioRamServidor10", function (req, res) {
    analiseController.limiteMaioRamServidor10(req, res);
});

router.get("/limiteJunhoRamServidor10", function (req, res) {
    analiseController.limiteJunhoRamServidor10(req, res);
});

router.get("/limiteJulhoRamServidor10", function (req, res) {
    analiseController.limiteJulhoRamServidor10(req, res);
});

router.get("/limiteAgostoRamServidor10", function (req, res) {
    analiseController.limiteAgostoRamServidor10(req, res);
});

router.get("/limiteSetembroRamServidor10", function (req, res) {
    analiseController.limiteSetembroRamServidor10(req, res);
});

router.get("/limiteOutubroRamServidor10", function (req, res) {
    analiseController.limiteOutubroRamServidor10(req, res);
});

router.get("/limiteNovembroRamServidor10", function (req, res) {
    analiseController.limiteNovembroRamServidor10(req, res);
});

router.get("/limiteDezembroRamServidor10", function (req, res) {
    analiseController.limiteDezembroRamServidor10(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor10", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor10(req, res);
});

router.get("/limiteFevereiroDiscoServidor10", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor10(req, res);
});

router.get("/limiteMarcoDiscoServidor10", function (req, res) {
    analiseController.limiteMarcoDiscoServidor10(req, res);
});

router.get("/limiteAbrilDiscoServidor10", function (req, res) {
    analiseController.limiteAbrilDiscoServidor10(req, res);
});

router.get("/limiteMaioDiscoServidor10", function (req, res) {
    analiseController.limiteMaioDiscoServidor10(req, res);
});

router.get("/limiteJunhoDiscoServidor10", function (req, res) {
    analiseController.limiteJunhoDiscoServidor10(req, res);
});

router.get("/limiteJulhoDiscoServidor10", function (req, res) {
    analiseController.limiteJulhoDiscoServidor10(req, res);
});

router.get("/limiteAgostoDiscoServidor10", function (req, res) {
    analiseController.limiteAgostoDiscoServidor10(req, res);
});

router.get("/limiteSetembroDiscoServidor10", function (req, res) {
    analiseController.limiteSetembroDiscoServidor10(req, res);
});

router.get("/limiteOutubroDiscoServidor10", function (req, res) {
    analiseController.limiteOutubroDiscoServidor10(req, res);
});

router.get("/limiteNovembroDiscoServidor10", function (req, res) {
    analiseController.limiteNovembroDiscoServidor10(req, res);
});

router.get("/limiteDezembroDiscoServidor10", function (req, res) {
    analiseController.limiteDezembroDiscoServidor10(req, res);
});

router.get("/mensalJaneiroCpuServidor11", function (req, res) {
    analiseController.mensalJaneiroCpuServidor11(req, res);
});

router.get("/mensalFevereiroCpuServidor11", function (req, res) {
    analiseController.mensalFevereiroCpuServidor11(req, res);
});

router.get("/mensalMarcoCpuServidor11", function (req, res) {
    analiseController.mensalMarcoCpuServidor11(req, res);
});

router.get("/mensalAbrilCpuServidor11", function (req, res) {
    analiseController.mensalAbrilCpuServidor11(req, res);
});

router.get("/mensalMaioCpuServidor11", function (req, res) {
    analiseController.mensalMaioCpuServidor11(req, res);
});

router.get("/mensalJunhoCpuServidor11", function (req, res) {
    analiseController.mensalJunhoCpuServidor11(req, res);
});

router.get("/mensalJulhoCpuServidor11", function (req, res) {
    analiseController.mensalJulhoCpuServidor11(req, res);
});

router.get("/mensalAgostoCpuServidor11", function (req, res) {
    analiseController.mensalAgostoCpuServidor11(req, res);
});

router.get("/mensalSetembroCpuServidor11", function (req, res) {
    analiseController.mensalSetembroCpuServidor11(req, res);
});

router.get("/mensalOutubroCpuServidor11", function (req, res) {
    analiseController.mensalOutubroCpuServidor11(req, res);
});

router.get("/mensalNovembroCpuServidor11", function (req, res) {
    analiseController.mensalNovembroCpuServidor11(req, res);
});

router.get("/mensalDezembroCpuServidor11", function (req, res) {
    analiseController.mensalDezembroCpuServidor11(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor11", function (req, res) {
    analiseController.mensalJaneiroRamServidor11(req, res);
});

router.get("/mensalFevereiroRamServidor11", function (req, res) {
    analiseController.mensalFevereiroRamServidor11(req, res);
});

router.get("/mensalMarcoRamServidor11", function (req, res) {
    analiseController.mensalMarcoRamServidor11(req, res);
});

router.get("/mensalAbrilRamServidor11", function (req, res) {
    analiseController.mensalAbrilRamServidor11(req, res);
});

router.get("/mensalMaioRamServidor11", function (req, res) {
    analiseController.mensalMaioRamServidor11(req, res);
});

router.get("/mensalJunhoRamServidor11", function (req, res) {
    analiseController.mensalJunhoRamServidor11(req, res);
});

router.get("/mensalJulhoRamServidor11", function (req, res) {
    analiseController.mensalJulhoRamServidor11(req, res);
});

router.get("/mensalAgostoRamServidor11", function (req, res) {
    analiseController.mensalAgostoRamServidor11(req, res);
});

router.get("/mensalSetembroRamServidor11", function (req, res) {
    analiseController.mensalSetembroRamServidor11(req, res);
});

router.get("/mensalOutubroRamServidor11", function (req, res) {
    analiseController.mensalOutubroRamServidor11(req, res);
});

router.get("/mensalNovembroRamServidor11", function (req, res) {
    analiseController.mensalNovembroRamServidor11(req, res);
});

router.get("/mensalDezembroRamServidor11", function (req, res) {
    analiseController.mensalDezembroRamServidor11(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor11", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor11(req, res);
});

router.get("/mensalFevereiroDiscoServidor11", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor11(req, res);
});

router.get("/mensalMarcoDiscoServidor11", function (req, res) {
    analiseController.mensalMarcoDiscoServidor11(req, res);
});

router.get("/mensalAbrilDiscoServidor11", function (req, res) {
    analiseController.mensalAbrilDiscoServidor11(req, res);
});

router.get("/mensalMaioDiscoServidor11", function (req, res) {
    analiseController.mensalMaioDiscoServidor11(req, res);
});

router.get("/mensalJunhoDiscoServidor11", function (req, res) {
    analiseController.mensalJunhoDiscoServidor11(req, res);
});

router.get("/mensalJulhoDiscoServidor11", function (req, res) {
    analiseController.mensalJulhoDiscoServidor11(req, res);
});

router.get("/mensalAgostoDiscoServidor11", function (req, res) {
    analiseController.mensalAgostoDiscoServidor11(req, res);
});

router.get("/mensalSetembroDiscoServidor11", function (req, res) {
    analiseController.mensalSetembroDiscoServidor11(req, res);
});

router.get("/mensalOutubroDiscoServidor11", function (req, res) {
    analiseController.mensalOutubroDiscoServidor11(req, res);
});

router.get("/mensalNovembroDiscoServidor11", function (req, res) {
    analiseController.mensalNovembroDiscoServidor11(req, res);
});

router.get("/mensalDezembroDiscoServidor11", function (req, res) {
    analiseController.mensalDezembroDiscoServidor11(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor11", function (req, res) {
    analiseController.limiteJaneiroCpuServidor11(req, res);
});

router.get("/limiteFevereiroCpuServidor11", function (req, res) {
    analiseController.limiteFevereiroCpuServidor11(req, res);
});

router.get("/limiteMarcoCpuServidor11", function (req, res) {
    analiseController.limiteMarcoCpuServidor11(req, res);
});

router.get("/limiteAbrilCpuServidor11", function (req, res) {
    analiseController.limiteAbrilCpuServidor11(req, res);
});

router.get("/limiteMaioCpuServidor11", function (req, res) {
    analiseController.limiteMaioCpuServidor11(req, res);
});

router.get("/limiteJunhoCpuServidor11", function (req, res) {
    analiseController.limiteJunhoCpuServidor11(req, res);
});

router.get("/limiteJulhoCpuServidor11", function (req, res) {
    analiseController.limiteJulhoCpuServidor11(req, res);
});

router.get("/limiteAgostoCpuServidor11", function (req, res) {
    analiseController.limiteAgostoCpuServidor11(req, res);
});

router.get("/limiteSetembroCpuServidor11", function (req, res) {
    analiseController.limiteSetembroCpuServidor11(req, res);
});

router.get("/limiteOutubroCpuServidor11", function (req, res) {
    analiseController.limiteOutubroCpuServidor11(req, res);
});

router.get("/limiteNovembroCpuServidor11", function (req, res) {
    analiseController.limiteNovembroCpuServidor11(req, res);
});

router.get("/limiteDezembroCpuServidor11", function (req, res) {
    analiseController.limiteDezembroCpuServidor11(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor11", function (req, res) {
    analiseController.limiteJaneiroRamServidor11(req, res);
});

router.get("/limiteFevereiroRamServidor11", function (req, res) {
    analiseController.limiteFevereiroRamServidor11(req, res);
});

router.get("/limiteMarcoRamServidor11", function (req, res) {
    analiseController.limiteMarcoRamServidor11(req, res);
});

router.get("/limiteAbrilRamServidor11", function (req, res) {
    analiseController.limiteAbrilRamServidor11(req, res);
});

router.get("/limiteMaioRamServidor11", function (req, res) {
    analiseController.limiteMaioRamServidor11(req, res);
});

router.get("/limiteJunhoRamServidor11", function (req, res) {
    analiseController.limiteJunhoRamServidor11(req, res);
});

router.get("/limiteJulhoRamServidor11", function (req, res) {
    analiseController.limiteJulhoRamServidor11(req, res);
});

router.get("/limiteAgostoRamServidor11", function (req, res) {
    analiseController.limiteAgostoRamServidor11(req, res);
});

router.get("/limiteSetembroRamServidor11", function (req, res) {
    analiseController.limiteSetembroRamServidor11(req, res);
});

router.get("/limiteOutubroRamServidor11", function (req, res) {
    analiseController.limiteOutubroRamServidor11(req, res);
});

router.get("/limiteNovembroRamServidor11", function (req, res) {
    analiseController.limiteNovembroRamServidor11(req, res);
});

router.get("/limiteDezembroRamServidor11", function (req, res) {
    analiseController.limiteDezembroRamServidor11(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor11", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor11(req, res);
});

router.get("/limiteFevereiroDiscoServidor11", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor11(req, res);
});

router.get("/limiteMarcoDiscoServidor11", function (req, res) {
    analiseController.limiteMarcoDiscoServidor11(req, res);
});

router.get("/limiteAbrilDiscoServidor11", function (req, res) {
    analiseController.limiteAbrilDiscoServidor11(req, res);
});

router.get("/limiteMaioDiscoServidor11", function (req, res) {
    analiseController.limiteMaioDiscoServidor11(req, res);
});

router.get("/limiteJunhoDiscoServidor11", function (req, res) {
    analiseController.limiteJunhoDiscoServidor11(req, res);
});

router.get("/limiteJulhoDiscoServidor11", function (req, res) {
    analiseController.limiteJulhoDiscoServidor11(req, res);
});

router.get("/limiteAgostoDiscoServidor11", function (req, res) {
    analiseController.limiteAgostoDiscoServidor11(req, res);
});

router.get("/limiteSetembroDiscoServidor11", function (req, res) {
    analiseController.limiteSetembroDiscoServidor11(req, res);
});

router.get("/limiteOutubroDiscoServidor11", function (req, res) {
    analiseController.limiteOutubroDiscoServidor11(req, res);
});

router.get("/limiteNovembroDiscoServidor11", function (req, res) {
    analiseController.limiteNovembroDiscoServidor11(req, res);
});

router.get("/limiteDezembroDiscoServidor11", function (req, res) {
    analiseController.limiteDezembroDiscoServidor11(req, res);
});

router.get("/mensalJaneiroCpuServidor12", function (req, res) {
    analiseController.mensalJaneiroCpuServidor12(req, res);
});

router.get("/mensalFevereiroCpuServidor12", function (req, res) {
    analiseController.mensalFevereiroCpuServidor12(req, res);
});

router.get("/mensalMarcoCpuServidor12", function (req, res) {
    analiseController.mensalMarcoCpuServidor12(req, res);
});

router.get("/mensalAbrilCpuServidor12", function (req, res) {
    analiseController.mensalAbrilCpuServidor12(req, res);
});

router.get("/mensalMaioCpuServidor12", function (req, res) {
    analiseController.mensalMaioCpuServidor12(req, res);
});

router.get("/mensalJunhoCpuServidor12", function (req, res) {
    analiseController.mensalJunhoCpuServidor12(req, res);
});

router.get("/mensalJulhoCpuServidor12", function (req, res) {
    analiseController.mensalJulhoCpuServidor12(req, res);
});

router.get("/mensalAgostoCpuServidor12", function (req, res) {
    analiseController.mensalAgostoCpuServidor12(req, res);
});

router.get("/mensalSetembroCpuServidor12", function (req, res) {
    analiseController.mensalSetembroCpuServidor12(req, res);
});

router.get("/mensalOutubroCpuServidor12", function (req, res) {
    analiseController.mensalOutubroCpuServidor12(req, res);
});

router.get("/mensalNovembroCpuServidor12", function (req, res) {
    analiseController.mensalNovembroCpuServidor12(req, res);
});

router.get("/mensalDezembroCpuServidor12", function (req, res) {
    analiseController.mensalDezembroCpuServidor12(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor12", function (req, res) {
    analiseController.mensalJaneiroRamServidor12(req, res);
});

router.get("/mensalFevereiroRamServidor12", function (req, res) {
    analiseController.mensalFevereiroRamServidor12(req, res);
});

router.get("/mensalMarcoRamServidor12", function (req, res) {
    analiseController.mensalMarcoRamServidor12(req, res);
});

router.get("/mensalAbrilRamServidor12", function (req, res) {
    analiseController.mensalAbrilRamServidor12(req, res);
});

router.get("/mensalMaioRamServidor12", function (req, res) {
    analiseController.mensalMaioRamServidor12(req, res);
});

router.get("/mensalJunhoRamServidor12", function (req, res) {
    analiseController.mensalJunhoRamServidor12(req, res);
});

router.get("/mensalJulhoRamServidor12", function (req, res) {
    analiseController.mensalJulhoRamServidor12(req, res);
});

router.get("/mensalAgostoRamServidor12", function (req, res) {
    analiseController.mensalAgostoRamServidor12(req, res);
});

router.get("/mensalSetembroRamServidor12", function (req, res) {
    analiseController.mensalSetembroRamServidor12(req, res);
});

router.get("/mensalOutubroRamServidor12", function (req, res) {
    analiseController.mensalOutubroRamServidor12(req, res);
});

router.get("/mensalNovembroRamServidor12", function (req, res) {
    analiseController.mensalNovembroRamServidor12(req, res);
});

router.get("/mensalDezembroRamServidor12", function (req, res) {
    analiseController.mensalDezembroRamServidor12(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor12", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor12(req, res);
});

router.get("/mensalFevereiroDiscoServidor12", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor12(req, res);
});

router.get("/mensalMarcoDiscoServidor12", function (req, res) {
    analiseController.mensalMarcoDiscoServidor12(req, res);
});

router.get("/mensalAbrilDiscoServidor12", function (req, res) {
    analiseController.mensalAbrilDiscoServidor12(req, res);
});

router.get("/mensalMaioDiscoServidor12", function (req, res) {
    analiseController.mensalMaioDiscoServidor12(req, res);
});

router.get("/mensalJunhoDiscoServidor12", function (req, res) {
    analiseController.mensalJunhoDiscoServidor12(req, res);
});

router.get("/mensalJulhoDiscoServidor12", function (req, res) {
    analiseController.mensalJulhoDiscoServidor12(req, res);
});

router.get("/mensalAgostoDiscoServidor12", function (req, res) {
    analiseController.mensalAgostoDiscoServidor12(req, res);
});

router.get("/mensalSetembroDiscoServidor12", function (req, res) {
    analiseController.mensalSetembroDiscoServidor12(req, res);
});

router.get("/mensalOutubroDiscoServidor12", function (req, res) {
    analiseController.mensalOutubroDiscoServidor12(req, res);
});

router.get("/mensalNovembroDiscoServidor12", function (req, res) {
    analiseController.mensalNovembroDiscoServidor12(req, res);
});

router.get("/mensalDezembroDiscoServidor12", function (req, res) {
    analiseController.mensalDezembroDiscoServidor12(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor12", function (req, res) {
    analiseController.limiteJaneiroCpuServidor12(req, res);
});

router.get("/limiteFevereiroCpuServidor12", function (req, res) {
    analiseController.limiteFevereiroCpuServidor12(req, res);
});

router.get("/limiteMarcoCpuServidor12", function (req, res) {
    analiseController.limiteMarcoCpuServidor12(req, res);
});

router.get("/limiteAbrilCpuServidor12", function (req, res) {
    analiseController.limiteAbrilCpuServidor12(req, res);
});

router.get("/limiteMaioCpuServidor12", function (req, res) {
    analiseController.limiteMaioCpuServidor12(req, res);
});

router.get("/limiteJunhoCpuServidor12", function (req, res) {
    analiseController.limiteJunhoCpuServidor12(req, res);
});

router.get("/limiteJulhoCpuServidor12", function (req, res) {
    analiseController.limiteJulhoCpuServidor12(req, res);
});

router.get("/limiteAgostoCpuServidor12", function (req, res) {
    analiseController.limiteAgostoCpuServidor12(req, res);
});

router.get("/limiteSetembroCpuServidor12", function (req, res) {
    analiseController.limiteSetembroCpuServidor12(req, res);
});

router.get("/limiteOutubroCpuServidor12", function (req, res) {
    analiseController.limiteOutubroCpuServidor12(req, res);
});

router.get("/limiteNovembroCpuServidor12", function (req, res) {
    analiseController.limiteNovembroCpuServidor12(req, res);
});

router.get("/limiteDezembroCpuServidor12", function (req, res) {
    analiseController.limiteDezembroCpuServidor12(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor12", function (req, res) {
    analiseController.limiteJaneiroRamServidor12(req, res);
});

router.get("/limiteFevereiroRamServidor12", function (req, res) {
    analiseController.limiteFevereiroRamServidor12(req, res);
});

router.get("/limiteMarcoRamServidor12", function (req, res) {
    analiseController.limiteMarcoRamServidor12(req, res);
});

router.get("/limiteAbrilRamServidor12", function (req, res) {
    analiseController.limiteAbrilRamServidor12(req, res);
});

router.get("/limiteMaioRamServidor12", function (req, res) {
    analiseController.limiteMaioRamServidor12(req, res);
});

router.get("/limiteJunhoRamServidor12", function (req, res) {
    analiseController.limiteJunhoRamServidor12(req, res);
});

router.get("/limiteJulhoRamServidor12", function (req, res) {
    analiseController.limiteJulhoRamServidor12(req, res);
});

router.get("/limiteAgostoRamServidor12", function (req, res) {
    analiseController.limiteAgostoRamServidor12(req, res);
});

router.get("/limiteSetembroRamServidor12", function (req, res) {
    analiseController.limiteSetembroRamServidor12(req, res);
});

router.get("/limiteOutubroRamServidor12", function (req, res) {
    analiseController.limiteOutubroRamServidor12(req, res);
});

router.get("/limiteNovembroRamServidor12", function (req, res) {
    analiseController.limiteNovembroRamServidor12(req, res);
});

router.get("/limiteDezembroRamServidor12", function (req, res) {
    analiseController.limiteDezembroRamServidor12(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor12", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor12(req, res);
});

router.get("/limiteFevereiroDiscoServidor12", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor12(req, res);
});

router.get("/limiteMarcoDiscoServidor12", function (req, res) {
    analiseController.limiteMarcoDiscoServidor12(req, res);
});

router.get("/limiteAbrilDiscoServidor12", function (req, res) {
    analiseController.limiteAbrilDiscoServidor12(req, res);
});

router.get("/limiteMaioDiscoServidor12", function (req, res) {
    analiseController.limiteMaioDiscoServidor12(req, res);
});

router.get("/limiteJunhoDiscoServidor12", function (req, res) {
    analiseController.limiteJunhoDiscoServidor12(req, res);
});

router.get("/limiteJulhoDiscoServidor12", function (req, res) {
    analiseController.limiteJulhoDiscoServidor12(req, res);
});

router.get("/limiteAgostoDiscoServidor12", function (req, res) {
    analiseController.limiteAgostoDiscoServidor12(req, res);
});

router.get("/limiteSetembroDiscoServidor12", function (req, res) {
    analiseController.limiteSetembroDiscoServidor12(req, res);
});

router.get("/limiteOutubroDiscoServidor12", function (req, res) {
    analiseController.limiteOutubroDiscoServidor12(req, res);
});

router.get("/limiteNovembroDiscoServidor12", function (req, res) {
    analiseController.limiteNovembroDiscoServidor12(req, res);
});

router.get("/limiteDezembroDiscoServidor12", function (req, res) {
    analiseController.limiteDezembroDiscoServidor12(req, res);
});

router.get("/mensalJaneiroCpuServidor13", function (req, res) {
    analiseController.mensalJaneiroCpuServidor13(req, res);
});

router.get("/mensalFevereiroCpuServidor13", function (req, res) {
    analiseController.mensalFevereiroCpuServidor13(req, res);
});

router.get("/mensalMarcoCpuServidor13", function (req, res) {
    analiseController.mensalMarcoCpuServidor13(req, res);
});

router.get("/mensalAbrilCpuServidor13", function (req, res) {
    analiseController.mensalAbrilCpuServidor13(req, res);
});

router.get("/mensalMaioCpuServidor13", function (req, res) {
    analiseController.mensalMaioCpuServidor13(req, res);
});

router.get("/mensalJunhoCpuServidor13", function (req, res) {
    analiseController.mensalJunhoCpuServidor13(req, res);
});

router.get("/mensalJulhoCpuServidor13", function (req, res) {
    analiseController.mensalJulhoCpuServidor13(req, res);
});

router.get("/mensalAgostoCpuServidor13", function (req, res) {
    analiseController.mensalAgostoCpuServidor13(req, res);
});

router.get("/mensalSetembroCpuServidor13", function (req, res) {
    analiseController.mensalSetembroCpuServidor13(req, res);
});

router.get("/mensalOutubroCpuServidor13", function (req, res) {
    analiseController.mensalOutubroCpuServidor13(req, res);
});

router.get("/mensalNovembroCpuServidor13", function (req, res) {
    analiseController.mensalNovembroCpuServidor13(req, res);
});

router.get("/mensalDezembroCpuServidor13", function (req, res) {
    analiseController.mensalDezembroCpuServidor13(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor13", function (req, res) {
    analiseController.mensalJaneiroRamServidor13(req, res);
});

router.get("/mensalFevereiroRamServidor13", function (req, res) {
    analiseController.mensalFevereiroRamServidor13(req, res);
});

router.get("/mensalMarcoRamServidor13", function (req, res) {
    analiseController.mensalMarcoRamServidor13(req, res);
});

router.get("/mensalAbrilRamServidor13", function (req, res) {
    analiseController.mensalAbrilRamServidor13(req, res);
});

router.get("/mensalMaioRamServidor13", function (req, res) {
    analiseController.mensalMaioRamServidor13(req, res);
});

router.get("/mensalJunhoRamServidor13", function (req, res) {
    analiseController.mensalJunhoRamServidor13(req, res);
});

router.get("/mensalJulhoRamServidor13", function (req, res) {
    analiseController.mensalJulhoRamServidor13(req, res);
});

router.get("/mensalAgostoRamServidor13", function (req, res) {
    analiseController.mensalAgostoRamServidor13(req, res);
});

router.get("/mensalSetembroRamServidor13", function (req, res) {
    analiseController.mensalSetembroRamServidor13(req, res);
});

router.get("/mensalOutubroRamServidor13", function (req, res) {
    analiseController.mensalOutubroRamServidor13(req, res);
});

router.get("/mensalNovembroRamServidor13", function (req, res) {
    analiseController.mensalNovembroRamServidor13(req, res);
});

router.get("/mensalDezembroRamServidor13", function (req, res) {
    analiseController.mensalDezembroRamServidor13(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor13", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor13(req, res);
});

router.get("/mensalFevereiroDiscoServidor13", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor13(req, res);
});

router.get("/mensalMarcoDiscoServidor13", function (req, res) {
    analiseController.mensalMarcoDiscoServidor13(req, res);
});

router.get("/mensalAbrilDiscoServidor13", function (req, res) {
    analiseController.mensalAbrilDiscoServidor13(req, res);
});

router.get("/mensalMaioDiscoServidor13", function (req, res) {
    analiseController.mensalMaioDiscoServidor13(req, res);
});

router.get("/mensalJunhoDiscoServidor13", function (req, res) {
    analiseController.mensalJunhoDiscoServidor13(req, res);
});

router.get("/mensalJulhoDiscoServidor13", function (req, res) {
    analiseController.mensalJulhoDiscoServidor13(req, res);
});

router.get("/mensalAgostoDiscoServidor13", function (req, res) {
    analiseController.mensalAgostoDiscoServidor13(req, res);
});

router.get("/mensalSetembroDiscoServidor13", function (req, res) {
    analiseController.mensalSetembroDiscoServidor13(req, res);
});

router.get("/mensalOutubroDiscoServidor13", function (req, res) {
    analiseController.mensalOutubroDiscoServidor13(req, res);
});

router.get("/mensalNovembroDiscoServidor13", function (req, res) {
    analiseController.mensalNovembroDiscoServidor13(req, res);
});

router.get("/mensalDezembroDiscoServidor13", function (req, res) {
    analiseController.mensalDezembroDiscoServidor13(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor13", function (req, res) {
    analiseController.limiteJaneiroCpuServidor13(req, res);
});

router.get("/limiteFevereiroCpuServidor13", function (req, res) {
    analiseController.limiteFevereiroCpuServidor13(req, res);
});

router.get("/limiteMarcoCpuServidor13", function (req, res) {
    analiseController.limiteMarcoCpuServidor13(req, res);
});

router.get("/limiteAbrilCpuServidor13", function (req, res) {
    analiseController.limiteAbrilCpuServidor13(req, res);
});

router.get("/limiteMaioCpuServidor13", function (req, res) {
    analiseController.limiteMaioCpuServidor13(req, res);
});

router.get("/limiteJunhoCpuServidor13", function (req, res) {
    analiseController.limiteJunhoCpuServidor13(req, res);
});

router.get("/limiteJulhoCpuServidor13", function (req, res) {
    analiseController.limiteJulhoCpuServidor13(req, res);
});

router.get("/limiteAgostoCpuServidor13", function (req, res) {
    analiseController.limiteAgostoCpuServidor13(req, res);
});

router.get("/limiteSetembroCpuServidor13", function (req, res) {
    analiseController.limiteSetembroCpuServidor13(req, res);
});

router.get("/limiteOutubroCpuServidor13", function (req, res) {
    analiseController.limiteOutubroCpuServidor13(req, res);
});

router.get("/limiteNovembroCpuServidor13", function (req, res) {
    analiseController.limiteNovembroCpuServidor13(req, res);
});

router.get("/limiteDezembroCpuServidor13", function (req, res) {
    analiseController.limiteDezembroCpuServidor13(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor13", function (req, res) {
    analiseController.limiteJaneiroRamServidor13(req, res);
});

router.get("/limiteFevereiroRamServidor13", function (req, res) {
    analiseController.limiteFevereiroRamServidor13(req, res);
});

router.get("/limiteMarcoRamServidor13", function (req, res) {
    analiseController.limiteMarcoRamServidor13(req, res);
});

router.get("/limiteAbrilRamServidor13", function (req, res) {
    analiseController.limiteAbrilRamServidor13(req, res);
});

router.get("/limiteMaioRamServidor13", function (req, res) {
    analiseController.limiteMaioRamServidor13(req, res);
});

router.get("/limiteJunhoRamServidor13", function (req, res) {
    analiseController.limiteJunhoRamServidor13(req, res);
});

router.get("/limiteJulhoRamServidor13", function (req, res) {
    analiseController.limiteJulhoRamServidor13(req, res);
});

router.get("/limiteAgostoRamServidor13", function (req, res) {
    analiseController.limiteAgostoRamServidor13(req, res);
});

router.get("/limiteSetembroRamServidor13", function (req, res) {
    analiseController.limiteSetembroRamServidor13(req, res);
});

router.get("/limiteOutubroRamServidor13", function (req, res) {
    analiseController.limiteOutubroRamServidor13(req, res);
});

router.get("/limiteNovembroRamServidor13", function (req, res) {
    analiseController.limiteNovembroRamServidor13(req, res);
});

router.get("/limiteDezembroRamServidor13", function (req, res) {
    analiseController.limiteDezembroRamServidor13(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor13", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor13(req, res);
});

router.get("/limiteFevereiroDiscoServidor13", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor13(req, res);
});

router.get("/limiteMarcoDiscoServidor13", function (req, res) {
    analiseController.limiteMarcoDiscoServidor13(req, res);
});

router.get("/limiteAbrilDiscoServidor13", function (req, res) {
    analiseController.limiteAbrilDiscoServidor13(req, res);
});

router.get("/limiteMaioDiscoServidor13", function (req, res) {
    analiseController.limiteMaioDiscoServidor13(req, res);
});

router.get("/limiteJunhoDiscoServidor13", function (req, res) {
    analiseController.limiteJunhoDiscoServidor13(req, res);
});

router.get("/limiteJulhoDiscoServidor13", function (req, res) {
    analiseController.limiteJulhoDiscoServidor13(req, res);
});

router.get("/limiteAgostoDiscoServidor13", function (req, res) {
    analiseController.limiteAgostoDiscoServidor13(req, res);
});

router.get("/limiteSetembroDiscoServidor13", function (req, res) {
    analiseController.limiteSetembroDiscoServidor13(req, res);
});

router.get("/limiteOutubroDiscoServidor13", function (req, res) {
    analiseController.limiteOutubroDiscoServidor13(req, res);
});

router.get("/limiteNovembroDiscoServidor13", function (req, res) {
    analiseController.limiteNovembroDiscoServidor13(req, res);
});

router.get("/limiteDezembroDiscoServidor13", function (req, res) {
    analiseController.limiteDezembroDiscoServidor13(req, res);
});

router.get("/mensalJaneiroCpuServidor14", function (req, res) {
    analiseController.mensalJaneiroCpuServidor14(req, res);
});

router.get("/mensalFevereiroCpuServidor14", function (req, res) {
    analiseController.mensalFevereiroCpuServidor14(req, res);
});

router.get("/mensalMarcoCpuServidor14", function (req, res) {
    analiseController.mensalMarcoCpuServidor14(req, res);
});

router.get("/mensalAbrilCpuServidor14", function (req, res) {
    analiseController.mensalAbrilCpuServidor14(req, res);
});

router.get("/mensalMaioCpuServidor14", function (req, res) {
    analiseController.mensalMaioCpuServidor14(req, res);
});

router.get("/mensalJunhoCpuServidor14", function (req, res) {
    analiseController.mensalJunhoCpuServidor14(req, res);
});

router.get("/mensalJulhoCpuServidor14", function (req, res) {
    analiseController.mensalJulhoCpuServidor14(req, res);
});

router.get("/mensalAgostoCpuServidor14", function (req, res) {
    analiseController.mensalAgostoCpuServidor14(req, res);
});

router.get("/mensalSetembroCpuServidor14", function (req, res) {
    analiseController.mensalSetembroCpuServidor14(req, res);
});

router.get("/mensalOutubroCpuServidor14", function (req, res) {
    analiseController.mensalOutubroCpuServidor14(req, res);
});

router.get("/mensalNovembroCpuServidor14", function (req, res) {
    analiseController.mensalNovembroCpuServidor14(req, res);
});

router.get("/mensalDezembroCpuServidor14", function (req, res) {
    analiseController.mensalDezembroCpuServidor14(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor14", function (req, res) {
    analiseController.mensalJaneiroRamServidor14(req, res);
});

router.get("/mensalFevereiroRamServidor14", function (req, res) {
    analiseController.mensalFevereiroRamServidor14(req, res);
});

router.get("/mensalMarcoRamServidor14", function (req, res) {
    analiseController.mensalMarcoRamServidor14(req, res);
});

router.get("/mensalAbrilRamServidor14", function (req, res) {
    analiseController.mensalAbrilRamServidor14(req, res);
});

router.get("/mensalMaioRamServidor14", function (req, res) {
    analiseController.mensalMaioRamServidor14(req, res);
});

router.get("/mensalJunhoRamServidor14", function (req, res) {
    analiseController.mensalJunhoRamServidor14(req, res);
});

router.get("/mensalJulhoRamServidor14", function (req, res) {
    analiseController.mensalJulhoRamServidor14(req, res);
});

router.get("/mensalAgostoRamServidor14", function (req, res) {
    analiseController.mensalAgostoRamServidor14(req, res);
});

router.get("/mensalSetembroRamServidor14", function (req, res) {
    analiseController.mensalSetembroRamServidor14(req, res);
});

router.get("/mensalOutubroRamServidor14", function (req, res) {
    analiseController.mensalOutubroRamServidor14(req, res);
});

router.get("/mensalNovembroRamServidor14", function (req, res) {
    analiseController.mensalNovembroRamServidor14(req, res);
});

router.get("/mensalDezembroRamServidor14", function (req, res) {
    analiseController.mensalDezembroRamServidor14(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor14", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor14(req, res);
});

router.get("/mensalFevereiroDiscoServidor14", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor14(req, res);
});

router.get("/mensalMarcoDiscoServidor14", function (req, res) {
    analiseController.mensalMarcoDiscoServidor14(req, res);
});

router.get("/mensalAbrilDiscoServidor14", function (req, res) {
    analiseController.mensalAbrilDiscoServidor14(req, res);
});

router.get("/mensalMaioDiscoServidor14", function (req, res) {
    analiseController.mensalMaioDiscoServidor14(req, res);
});

router.get("/mensalJunhoDiscoServidor14", function (req, res) {
    analiseController.mensalJunhoDiscoServidor14(req, res);
});

router.get("/mensalJulhoDiscoServidor14", function (req, res) {
    analiseController.mensalJulhoDiscoServidor14(req, res);
});

router.get("/mensalAgostoDiscoServidor14", function (req, res) {
    analiseController.mensalAgostoDiscoServidor14(req, res);
});

router.get("/mensalSetembroDiscoServidor14", function (req, res) {
    analiseController.mensalSetembroDiscoServidor14(req, res);
});

router.get("/mensalOutubroDiscoServidor14", function (req, res) {
    analiseController.mensalOutubroDiscoServidor14(req, res);
});

router.get("/mensalNovembroDiscoServidor14", function (req, res) {
    analiseController.mensalNovembroDiscoServidor14(req, res);
});

router.get("/mensalDezembroDiscoServidor14", function (req, res) {
    analiseController.mensalDezembroDiscoServidor14(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor14", function (req, res) {
    analiseController.limiteJaneiroCpuServidor14(req, res);
});

router.get("/limiteFevereiroCpuServidor14", function (req, res) {
    analiseController.limiteFevereiroCpuServidor14(req, res);
});

router.get("/limiteMarcoCpuServidor14", function (req, res) {
    analiseController.limiteMarcoCpuServidor14(req, res);
});

router.get("/limiteAbrilCpuServidor14", function (req, res) {
    analiseController.limiteAbrilCpuServidor14(req, res);
});

router.get("/limiteMaioCpuServidor14", function (req, res) {
    analiseController.limiteMaioCpuServidor14(req, res);
});

router.get("/limiteJunhoCpuServidor14", function (req, res) {
    analiseController.limiteJunhoCpuServidor14(req, res);
});

router.get("/limiteJulhoCpuServidor14", function (req, res) {
    analiseController.limiteJulhoCpuServidor14(req, res);
});

router.get("/limiteAgostoCpuServidor14", function (req, res) {
    analiseController.limiteAgostoCpuServidor14(req, res);
});

router.get("/limiteSetembroCpuServidor14", function (req, res) {
    analiseController.limiteSetembroCpuServidor14(req, res);
});

router.get("/limiteOutubroCpuServidor14", function (req, res) {
    analiseController.limiteOutubroCpuServidor14(req, res);
});

router.get("/limiteNovembroCpuServidor14", function (req, res) {
    analiseController.limiteNovembroCpuServidor14(req, res);
});

router.get("/limiteDezembroCpuServidor14", function (req, res) {
    analiseController.limiteDezembroCpuServidor14(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor14", function (req, res) {
    analiseController.limiteJaneiroRamServidor14(req, res);
});

router.get("/limiteFevereiroRamServidor14", function (req, res) {
    analiseController.limiteFevereiroRamServidor14(req, res);
});

router.get("/limiteMarcoRamServidor14", function (req, res) {
    analiseController.limiteMarcoRamServidor14(req, res);
});

router.get("/limiteAbrilRamServidor14", function (req, res) {
    analiseController.limiteAbrilRamServidor14(req, res);
});

router.get("/limiteMaioRamServidor14", function (req, res) {
    analiseController.limiteMaioRamServidor14(req, res);
});

router.get("/limiteJunhoRamServidor14", function (req, res) {
    analiseController.limiteJunhoRamServidor14(req, res);
});

router.get("/limiteJulhoRamServidor14", function (req, res) {
    analiseController.limiteJulhoRamServidor14(req, res);
});

router.get("/limiteAgostoRamServidor14", function (req, res) {
    analiseController.limiteAgostoRamServidor14(req, res);
});

router.get("/limiteSetembroRamServidor14", function (req, res) {
    analiseController.limiteSetembroRamServidor14(req, res);
});

router.get("/limiteOutubroRamServidor14", function (req, res) {
    analiseController.limiteOutubroRamServidor14(req, res);
});

router.get("/limiteNovembroRamServidor14", function (req, res) {
    analiseController.limiteNovembroRamServidor14(req, res);
});

router.get("/limiteDezembroRamServidor14", function (req, res) {
    analiseController.limiteDezembroRamServidor14(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor14", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor14(req, res);
});

router.get("/limiteFevereiroDiscoServidor14", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor14(req, res);
});

router.get("/limiteMarcoDiscoServidor14", function (req, res) {
    analiseController.limiteMarcoDiscoServidor14(req, res);
});

router.get("/limiteAbrilDiscoServidor14", function (req, res) {
    analiseController.limiteAbrilDiscoServidor14(req, res);
});

router.get("/limiteMaioDiscoServidor14", function (req, res) {
    analiseController.limiteMaioDiscoServidor14(req, res);
});

router.get("/limiteJunhoDiscoServidor14", function (req, res) {
    analiseController.limiteJunhoDiscoServidor14(req, res);
});

router.get("/limiteJulhoDiscoServidor14", function (req, res) {
    analiseController.limiteJulhoDiscoServidor14(req, res);
});

router.get("/limiteAgostoDiscoServidor14", function (req, res) {
    analiseController.limiteAgostoDiscoServidor14(req, res);
});

router.get("/limiteSetembroDiscoServidor14", function (req, res) {
    analiseController.limiteSetembroDiscoServidor14(req, res);
});

router.get("/limiteOutubroDiscoServidor14", function (req, res) {
    analiseController.limiteOutubroDiscoServidor14(req, res);
});

router.get("/limiteNovembroDiscoServidor14", function (req, res) {
    analiseController.limiteNovembroDiscoServidor14(req, res);
});

router.get("/limiteDezembroDiscoServidor14", function (req, res) {
    analiseController.limiteDezembroDiscoServidor14(req, res);
});

router.get("/mensalJaneiroCpuServidor15", function (req, res) {
    analiseController.mensalJaneiroCpuServidor15(req, res);
});

router.get("/mensalFevereiroCpuServidor15", function (req, res) {
    analiseController.mensalFevereiroCpuServidor15(req, res);
});

router.get("/mensalMarcoCpuServidor15", function (req, res) {
    analiseController.mensalMarcoCpuServidor15(req, res);
});

router.get("/mensalAbrilCpuServidor15", function (req, res) {
    analiseController.mensalAbrilCpuServidor15(req, res);
});

router.get("/mensalMaioCpuServidor15", function (req, res) {
    analiseController.mensalMaioCpuServidor15(req, res);
});

router.get("/mensalJunhoCpuServidor15", function (req, res) {
    analiseController.mensalJunhoCpuServidor15(req, res);
});

router.get("/mensalJulhoCpuServidor15", function (req, res) {
    analiseController.mensalJulhoCpuServidor15(req, res);
});

router.get("/mensalAgostoCpuServidor15", function (req, res) {
    analiseController.mensalAgostoCpuServidor15(req, res);
});

router.get("/mensalSetembroCpuServidor15", function (req, res) {
    analiseController.mensalSetembroCpuServidor15(req, res);
});

router.get("/mensalOutubroCpuServidor15", function (req, res) {
    analiseController.mensalOutubroCpuServidor15(req, res);
});

router.get("/mensalNovembroCpuServidor15", function (req, res) {
    analiseController.mensalNovembroCpuServidor15(req, res);
});

router.get("/mensalDezembroCpuServidor15", function (req, res) {
    analiseController.mensalDezembroCpuServidor15(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor15", function (req, res) {
    analiseController.mensalJaneiroRamServidor15(req, res);
});

router.get("/mensalFevereiroRamServidor15", function (req, res) {
    analiseController.mensalFevereiroRamServidor15(req, res);
});

router.get("/mensalMarcoRamServidor15", function (req, res) {
    analiseController.mensalMarcoRamServidor15(req, res);
});

router.get("/mensalAbrilRamServidor15", function (req, res) {
    analiseController.mensalAbrilRamServidor15(req, res);
});

router.get("/mensalMaioRamServidor15", function (req, res) {
    analiseController.mensalMaioRamServidor15(req, res);
});

router.get("/mensalJunhoRamServidor15", function (req, res) {
    analiseController.mensalJunhoRamServidor15(req, res);
});

router.get("/mensalJulhoRamServidor15", function (req, res) {
    analiseController.mensalJulhoRamServidor15(req, res);
});

router.get("/mensalAgostoRamServidor15", function (req, res) {
    analiseController.mensalAgostoRamServidor15(req, res);
});

router.get("/mensalSetembroRamServidor15", function (req, res) {
    analiseController.mensalSetembroRamServidor15(req, res);
});

router.get("/mensalOutubroRamServidor15", function (req, res) {
    analiseController.mensalOutubroRamServidor15(req, res);
});

router.get("/mensalNovembroRamServidor15", function (req, res) {
    analiseController.mensalNovembroRamServidor15(req, res);
});

router.get("/mensalDezembroRamServidor15", function (req, res) {
    analiseController.mensalDezembroRamServidor15(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor15", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor15(req, res);
});

router.get("/mensalFevereiroDiscoServidor15", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor15(req, res);
});

router.get("/mensalMarcoDiscoServidor15", function (req, res) {
    analiseController.mensalMarcoDiscoServidor15(req, res);
});

router.get("/mensalAbrilDiscoServidor15", function (req, res) {
    analiseController.mensalAbrilDiscoServidor15(req, res);
});

router.get("/mensalMaioDiscoServidor15", function (req, res) {
    analiseController.mensalMaioDiscoServidor15(req, res);
});

router.get("/mensalJunhoDiscoServidor15", function (req, res) {
    analiseController.mensalJunhoDiscoServidor15(req, res);
});

router.get("/mensalJulhoDiscoServidor15", function (req, res) {
    analiseController.mensalJulhoDiscoServidor15(req, res);
});

router.get("/mensalAgostoDiscoServidor15", function (req, res) {
    analiseController.mensalAgostoDiscoServidor15(req, res);
});

router.get("/mensalSetembroDiscoServidor15", function (req, res) {
    analiseController.mensalSetembroDiscoServidor15(req, res);
});

router.get("/mensalOutubroDiscoServidor15", function (req, res) {
    analiseController.mensalOutubroDiscoServidor15(req, res);
});

router.get("/mensalNovembroDiscoServidor15", function (req, res) {
    analiseController.mensalNovembroDiscoServidor15(req, res);
});

router.get("/mensalDezembroDiscoServidor15", function (req, res) {
    analiseController.mensalDezembroDiscoServidor15(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor15", function (req, res) {
    analiseController.limiteJaneiroCpuServidor15(req, res);
});

router.get("/limiteFevereiroCpuServidor15", function (req, res) {
    analiseController.limiteFevereiroCpuServidor15(req, res);
});

router.get("/limiteMarcoCpuServidor15", function (req, res) {
    analiseController.limiteMarcoCpuServidor15(req, res);
});

router.get("/limiteAbrilCpuServidor15", function (req, res) {
    analiseController.limiteAbrilCpuServidor15(req, res);
});

router.get("/limiteMaioCpuServidor15", function (req, res) {
    analiseController.limiteMaioCpuServidor15(req, res);
});

router.get("/limiteJunhoCpuServidor15", function (req, res) {
    analiseController.limiteJunhoCpuServidor15(req, res);
});

router.get("/limiteJulhoCpuServidor15", function (req, res) {
    analiseController.limiteJulhoCpuServidor15(req, res);
});

router.get("/limiteAgostoCpuServidor15", function (req, res) {
    analiseController.limiteAgostoCpuServidor15(req, res);
});

router.get("/limiteSetembroCpuServidor15", function (req, res) {
    analiseController.limiteSetembroCpuServidor15(req, res);
});

router.get("/limiteOutubroCpuServidor15", function (req, res) {
    analiseController.limiteOutubroCpuServidor15(req, res);
});

router.get("/limiteNovembroCpuServidor15", function (req, res) {
    analiseController.limiteNovembroCpuServidor15(req, res);
});

router.get("/limiteDezembroCpuServidor15", function (req, res) {
    analiseController.limiteDezembroCpuServidor15(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor15", function (req, res) {
    analiseController.limiteJaneiroRamServidor15(req, res);
});

router.get("/limiteFevereiroRamServidor15", function (req, res) {
    analiseController.limiteFevereiroRamServidor15(req, res);
});

router.get("/limiteMarcoRamServidor15", function (req, res) {
    analiseController.limiteMarcoRamServidor15(req, res);
});

router.get("/limiteAbrilRamServidor15", function (req, res) {
    analiseController.limiteAbrilRamServidor15(req, res);
});

router.get("/limiteMaioRamServidor15", function (req, res) {
    analiseController.limiteMaioRamServidor15(req, res);
});

router.get("/limiteJunhoRamServidor15", function (req, res) {
    analiseController.limiteJunhoRamServidor15(req, res);
});

router.get("/limiteJulhoRamServidor15", function (req, res) {
    analiseController.limiteJulhoRamServidor15(req, res);
});

router.get("/limiteAgostoRamServidor15", function (req, res) {
    analiseController.limiteAgostoRamServidor15(req, res);
});

router.get("/limiteSetembroRamServidor15", function (req, res) {
    analiseController.limiteSetembroRamServidor15(req, res);
});

router.get("/limiteOutubroRamServidor15", function (req, res) {
    analiseController.limiteOutubroRamServidor15(req, res);
});

router.get("/limiteNovembroRamServidor15", function (req, res) {
    analiseController.limiteNovembroRamServidor15(req, res);
});

router.get("/limiteDezembroRamServidor15", function (req, res) {
    analiseController.limiteDezembroRamServidor15(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor15", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor15(req, res);
});

router.get("/limiteFevereiroDiscoServidor15", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor15(req, res);
});

router.get("/limiteMarcoDiscoServidor15", function (req, res) {
    analiseController.limiteMarcoDiscoServidor15(req, res);
});

router.get("/limiteAbrilDiscoServidor15", function (req, res) {
    analiseController.limiteAbrilDiscoServidor15(req, res);
});

router.get("/limiteMaioDiscoServidor15", function (req, res) {
    analiseController.limiteMaioDiscoServidor15(req, res);
});

router.get("/limiteJunhoDiscoServidor15", function (req, res) {
    analiseController.limiteJunhoDiscoServidor15(req, res);
});

router.get("/limiteJulhoDiscoServidor15", function (req, res) {
    analiseController.limiteJulhoDiscoServidor15(req, res);
});

router.get("/limiteAgostoDiscoServidor15", function (req, res) {
    analiseController.limiteAgostoDiscoServidor15(req, res);
});

router.get("/limiteSetembroDiscoServidor15", function (req, res) {
    analiseController.limiteSetembroDiscoServidor15(req, res);
});

router.get("/limiteOutubroDiscoServidor15", function (req, res) {
    analiseController.limiteOutubroDiscoServidor15(req, res);
});

router.get("/limiteNovembroDiscoServidor15", function (req, res) {
    analiseController.limiteNovembroDiscoServidor15(req, res);
});

router.get("/limiteDezembroDiscoServidor15", function (req, res) {
    analiseController.limiteDezembroDiscoServidor15(req, res);
});

router.get("/mensalJaneiroCpuServidor16", function (req, res) {
    analiseController.mensalJaneiroCpuServidor16(req, res);
});

router.get("/mensalFevereiroCpuServidor16", function (req, res) {
    analiseController.mensalFevereiroCpuServidor16(req, res);
});

router.get("/mensalMarcoCpuServidor16", function (req, res) {
    analiseController.mensalMarcoCpuServidor16(req, res);
});

router.get("/mensalAbrilCpuServidor16", function (req, res) {
    analiseController.mensalAbrilCpuServidor16(req, res);
});

router.get("/mensalMaioCpuServidor16", function (req, res) {
    analiseController.mensalMaioCpuServidor16(req, res);
});

router.get("/mensalJunhoCpuServidor16", function (req, res) {
    analiseController.mensalJunhoCpuServidor16(req, res);
});

router.get("/mensalJulhoCpuServidor16", function (req, res) {
    analiseController.mensalJulhoCpuServidor16(req, res);
});

router.get("/mensalAgostoCpuServidor16", function (req, res) {
    analiseController.mensalAgostoCpuServidor16(req, res);
});

router.get("/mensalSetembroCpuServidor16", function (req, res) {
    analiseController.mensalSetembroCpuServidor16(req, res);
});

router.get("/mensalOutubroCpuServidor16", function (req, res) {
    analiseController.mensalOutubroCpuServidor16(req, res);
});

router.get("/mensalNovembroCpuServidor16", function (req, res) {
    analiseController.mensalNovembroCpuServidor16(req, res);
});

router.get("/mensalDezembroCpuServidor16", function (req, res) {
    analiseController.mensalDezembroCpuServidor16(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor16", function (req, res) {
    analiseController.mensalJaneiroRamServidor16(req, res);
});

router.get("/mensalFevereiroRamServidor16", function (req, res) {
    analiseController.mensalFevereiroRamServidor16(req, res);
});

router.get("/mensalMarcoRamServidor16", function (req, res) {
    analiseController.mensalMarcoRamServidor16(req, res);
});

router.get("/mensalAbrilRamServidor16", function (req, res) {
    analiseController.mensalAbrilRamServidor16(req, res);
});

router.get("/mensalMaioRamServidor16", function (req, res) {
    analiseController.mensalMaioRamServidor16(req, res);
});

router.get("/mensalJunhoRamServidor16", function (req, res) {
    analiseController.mensalJunhoRamServidor16(req, res);
});

router.get("/mensalJulhoRamServidor16", function (req, res) {
    analiseController.mensalJulhoRamServidor16(req, res);
});

router.get("/mensalAgostoRamServidor16", function (req, res) {
    analiseController.mensalAgostoRamServidor16(req, res);
});

router.get("/mensalSetembroRamServidor16", function (req, res) {
    analiseController.mensalSetembroRamServidor16(req, res);
});

router.get("/mensalOutubroRamServidor16", function (req, res) {
    analiseController.mensalOutubroRamServidor16(req, res);
});

router.get("/mensalNovembroRamServidor16", function (req, res) {
    analiseController.mensalNovembroRamServidor16(req, res);
});

router.get("/mensalDezembroRamServidor16", function (req, res) {
    analiseController.mensalDezembroRamServidor16(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor16", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor16(req, res);
});

router.get("/mensalFevereiroDiscoServidor16", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor16(req, res);
});

router.get("/mensalMarcoDiscoServidor16", function (req, res) {
    analiseController.mensalMarcoDiscoServidor16(req, res);
});

router.get("/mensalAbrilDiscoServidor16", function (req, res) {
    analiseController.mensalAbrilDiscoServidor16(req, res);
});

router.get("/mensalMaioDiscoServidor16", function (req, res) {
    analiseController.mensalMaioDiscoServidor16(req, res);
});

router.get("/mensalJunhoDiscoServidor16", function (req, res) {
    analiseController.mensalJunhoDiscoServidor16(req, res);
});

router.get("/mensalJulhoDiscoServidor16", function (req, res) {
    analiseController.mensalJulhoDiscoServidor16(req, res);
});

router.get("/mensalAgostoDiscoServidor16", function (req, res) {
    analiseController.mensalAgostoDiscoServidor16(req, res);
});

router.get("/mensalSetembroDiscoServidor16", function (req, res) {
    analiseController.mensalSetembroDiscoServidor16(req, res);
});

router.get("/mensalOutubroDiscoServidor16", function (req, res) {
    analiseController.mensalOutubroDiscoServidor16(req, res);
});

router.get("/mensalNovembroDiscoServidor16", function (req, res) {
    analiseController.mensalNovembroDiscoServidor16(req, res);
});

router.get("/mensalDezembroDiscoServidor16", function (req, res) {
    analiseController.mensalDezembroDiscoServidor16(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor16", function (req, res) {
    analiseController.limiteJaneiroCpuServidor16(req, res);
});

router.get("/limiteFevereiroCpuServidor16", function (req, res) {
    analiseController.limiteFevereiroCpuServidor16(req, res);
});

router.get("/limiteMarcoCpuServidor16", function (req, res) {
    analiseController.limiteMarcoCpuServidor16(req, res);
});

router.get("/limiteAbrilCpuServidor16", function (req, res) {
    analiseController.limiteAbrilCpuServidor16(req, res);
});

router.get("/limiteMaioCpuServidor16", function (req, res) {
    analiseController.limiteMaioCpuServidor16(req, res);
});

router.get("/limiteJunhoCpuServidor16", function (req, res) {
    analiseController.limiteJunhoCpuServidor16(req, res);
});

router.get("/limiteJulhoCpuServidor16", function (req, res) {
    analiseController.limiteJulhoCpuServidor16(req, res);
});

router.get("/limiteAgostoCpuServidor16", function (req, res) {
    analiseController.limiteAgostoCpuServidor16(req, res);
});

router.get("/limiteSetembroCpuServidor16", function (req, res) {
    analiseController.limiteSetembroCpuServidor16(req, res);
});

router.get("/limiteOutubroCpuServidor16", function (req, res) {
    analiseController.limiteOutubroCpuServidor16(req, res);
});

router.get("/limiteNovembroCpuServidor16", function (req, res) {
    analiseController.limiteNovembroCpuServidor16(req, res);
});

router.get("/limiteDezembroCpuServidor16", function (req, res) {
    analiseController.limiteDezembroCpuServidor16(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor16", function (req, res) {
    analiseController.limiteJaneiroRamServidor16(req, res);
});

router.get("/limiteFevereiroRamServidor16", function (req, res) {
    analiseController.limiteFevereiroRamServidor16(req, res);
});

router.get("/limiteMarcoRamServidor16", function (req, res) {
    analiseController.limiteMarcoRamServidor16(req, res);
});

router.get("/limiteAbrilRamServidor16", function (req, res) {
    analiseController.limiteAbrilRamServidor16(req, res);
});

router.get("/limiteMaioRamServidor16", function (req, res) {
    analiseController.limiteMaioRamServidor16(req, res);
});

router.get("/limiteJunhoRamServidor16", function (req, res) {
    analiseController.limiteJunhoRamServidor16(req, res);
});

router.get("/limiteJulhoRamServidor16", function (req, res) {
    analiseController.limiteJulhoRamServidor16(req, res);
});

router.get("/limiteAgostoRamServidor16", function (req, res) {
    analiseController.limiteAgostoRamServidor16(req, res);
});

router.get("/limiteSetembroRamServidor16", function (req, res) {
    analiseController.limiteSetembroRamServidor16(req, res);
});

router.get("/limiteOutubroRamServidor16", function (req, res) {
    analiseController.limiteOutubroRamServidor16(req, res);
});

router.get("/limiteNovembroRamServidor16", function (req, res) {
    analiseController.limiteNovembroRamServidor16(req, res);
});

router.get("/limiteDezembroRamServidor16", function (req, res) {
    analiseController.limiteDezembroRamServidor16(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor16", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor16(req, res);
});

router.get("/limiteFevereiroDiscoServidor16", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor16(req, res);
});

router.get("/limiteMarcoDiscoServidor16", function (req, res) {
    analiseController.limiteMarcoDiscoServidor16(req, res);
});

router.get("/limiteAbrilDiscoServidor16", function (req, res) {
    analiseController.limiteAbrilDiscoServidor16(req, res);
});

router.get("/limiteMaioDiscoServidor16", function (req, res) {
    analiseController.limiteMaioDiscoServidor16(req, res);
});

router.get("/limiteJunhoDiscoServidor16", function (req, res) {
    analiseController.limiteJunhoDiscoServidor16(req, res);
});

router.get("/limiteJulhoDiscoServidor16", function (req, res) {
    analiseController.limiteJulhoDiscoServidor16(req, res);
});

router.get("/limiteAgostoDiscoServidor16", function (req, res) {
    analiseController.limiteAgostoDiscoServidor16(req, res);
});

router.get("/limiteSetembroDiscoServidor16", function (req, res) {
    analiseController.limiteSetembroDiscoServidor16(req, res);
});

router.get("/limiteOutubroDiscoServidor16", function (req, res) {
    analiseController.limiteOutubroDiscoServidor16(req, res);
});

router.get("/limiteNovembroDiscoServidor16", function (req, res) {
    analiseController.limiteNovembroDiscoServidor16(req, res);
});

router.get("/limiteDezembroDiscoServidor16", function (req, res) {
    analiseController.limiteDezembroDiscoServidor16(req, res);
});

router.get("/mensalJaneiroCpuServidor16", function (req, res) {
    analiseController.mensalJaneiroCpuServidor16(req, res);
});

router.get("/mensalFevereiroCpuServidor16", function (req, res) {
    analiseController.mensalFevereiroCpuServidor16(req, res);
});

router.get("/mensalMarcoCpuServidor16", function (req, res) {
    analiseController.mensalMarcoCpuServidor16(req, res);
});

router.get("/mensalAbrilCpuServidor16", function (req, res) {
    analiseController.mensalAbrilCpuServidor16(req, res);
});

router.get("/mensalMaioCpuServidor16", function (req, res) {
    analiseController.mensalMaioCpuServidor16(req, res);
});

router.get("/mensalJunhoCpuServidor16", function (req, res) {
    analiseController.mensalJunhoCpuServidor16(req, res);
});

router.get("/mensalJulhoCpuServidor16", function (req, res) {
    analiseController.mensalJulhoCpuServidor16(req, res);
});

router.get("/mensalAgostoCpuServidor16", function (req, res) {
    analiseController.mensalAgostoCpuServidor16(req, res);
});

router.get("/mensalSetembroCpuServidor16", function (req, res) {
    analiseController.mensalSetembroCpuServidor16(req, res);
});

router.get("/mensalOutubroCpuServidor16", function (req, res) {
    analiseController.mensalOutubroCpuServidor16(req, res);
});

router.get("/mensalNovembroCpuServidor16", function (req, res) {
    analiseController.mensalNovembroCpuServidor16(req, res);
});

router.get("/mensalDezembroCpuServidor16", function (req, res) {
    analiseController.mensalDezembroCpuServidor16(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor16", function (req, res) {
    analiseController.mensalJaneiroRamServidor16(req, res);
});

router.get("/mensalFevereiroRamServidor16", function (req, res) {
    analiseController.mensalFevereiroRamServidor16(req, res);
});

router.get("/mensalMarcoRamServidor16", function (req, res) {
    analiseController.mensalMarcoRamServidor16(req, res);
});

router.get("/mensalAbrilRamServidor16", function (req, res) {
    analiseController.mensalAbrilRamServidor16(req, res);
});

router.get("/mensalMaioRamServidor16", function (req, res) {
    analiseController.mensalMaioRamServidor16(req, res);
});

router.get("/mensalJunhoRamServidor16", function (req, res) {
    analiseController.mensalJunhoRamServidor16(req, res);
});

router.get("/mensalJulhoRamServidor16", function (req, res) {
    analiseController.mensalJulhoRamServidor16(req, res);
});

router.get("/mensalAgostoRamServidor16", function (req, res) {
    analiseController.mensalAgostoRamServidor16(req, res);
});

router.get("/mensalSetembroRamServidor16", function (req, res) {
    analiseController.mensalSetembroRamServidor16(req, res);
});

router.get("/mensalOutubroRamServidor16", function (req, res) {
    analiseController.mensalOutubroRamServidor16(req, res);
});

router.get("/mensalNovembroRamServidor16", function (req, res) {
    analiseController.mensalNovembroRamServidor16(req, res);
});

router.get("/mensalDezembroRamServidor16", function (req, res) {
    analiseController.mensalDezembroRamServidor16(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor16", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor16(req, res);
});

router.get("/mensalFevereiroDiscoServidor16", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor16(req, res);
});

router.get("/mensalMarcoDiscoServidor16", function (req, res) {
    analiseController.mensalMarcoDiscoServidor16(req, res);
});

router.get("/mensalAbrilDiscoServidor16", function (req, res) {
    analiseController.mensalAbrilDiscoServidor16(req, res);
});

router.get("/mensalMaioDiscoServidor16", function (req, res) {
    analiseController.mensalMaioDiscoServidor16(req, res);
});

router.get("/mensalJunhoDiscoServidor16", function (req, res) {
    analiseController.mensalJunhoDiscoServidor16(req, res);
});

router.get("/mensalJulhoDiscoServidor16", function (req, res) {
    analiseController.mensalJulhoDiscoServidor16(req, res);
});

router.get("/mensalAgostoDiscoServidor16", function (req, res) {
    analiseController.mensalAgostoDiscoServidor16(req, res);
});

router.get("/mensalSetembroDiscoServidor16", function (req, res) {
    analiseController.mensalSetembroDiscoServidor16(req, res);
});

router.get("/mensalOutubroDiscoServidor16", function (req, res) {
    analiseController.mensalOutubroDiscoServidor16(req, res);
});

router.get("/mensalNovembroDiscoServidor16", function (req, res) {
    analiseController.mensalNovembroDiscoServidor16(req, res);
});

router.get("/mensalDezembroDiscoServidor16", function (req, res) {
    analiseController.mensalDezembroDiscoServidor16(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor16", function (req, res) {
    analiseController.limiteJaneiroCpuServidor16(req, res);
});

router.get("/limiteFevereiroCpuServidor16", function (req, res) {
    analiseController.limiteFevereiroCpuServidor16(req, res);
});

router.get("/limiteMarcoCpuServidor16", function (req, res) {
    analiseController.limiteMarcoCpuServidor16(req, res);
});

router.get("/limiteAbrilCpuServidor16", function (req, res) {
    analiseController.limiteAbrilCpuServidor16(req, res);
});

router.get("/limiteMaioCpuServidor16", function (req, res) {
    analiseController.limiteMaioCpuServidor16(req, res);
});

router.get("/limiteJunhoCpuServidor16", function (req, res) {
    analiseController.limiteJunhoCpuServidor16(req, res);
});

router.get("/limiteJulhoCpuServidor16", function (req, res) {
    analiseController.limiteJulhoCpuServidor16(req, res);
});

router.get("/limiteAgostoCpuServidor16", function (req, res) {
    analiseController.limiteAgostoCpuServidor16(req, res);
});

router.get("/limiteSetembroCpuServidor16", function (req, res) {
    analiseController.limiteSetembroCpuServidor16(req, res);
});

router.get("/limiteOutubroCpuServidor16", function (req, res) {
    analiseController.limiteOutubroCpuServidor16(req, res);
});

router.get("/limiteNovembroCpuServidor16", function (req, res) {
    analiseController.limiteNovembroCpuServidor16(req, res);
});

router.get("/limiteDezembroCpuServidor16", function (req, res) {
    analiseController.limiteDezembroCpuServidor16(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor16", function (req, res) {
    analiseController.limiteJaneiroRamServidor16(req, res);
});

router.get("/limiteFevereiroRamServidor16", function (req, res) {
    analiseController.limiteFevereiroRamServidor16(req, res);
});

router.get("/limiteMarcoRamServidor16", function (req, res) {
    analiseController.limiteMarcoRamServidor16(req, res);
});

router.get("/limiteAbrilRamServidor16", function (req, res) {
    analiseController.limiteAbrilRamServidor16(req, res);
});

router.get("/limiteMaioRamServidor16", function (req, res) {
    analiseController.limiteMaioRamServidor16(req, res);
});

router.get("/limiteJunhoRamServidor16", function (req, res) {
    analiseController.limiteJunhoRamServidor16(req, res);
});

router.get("/limiteJulhoRamServidor16", function (req, res) {
    analiseController.limiteJulhoRamServidor16(req, res);
});

router.get("/limiteAgostoRamServidor16", function (req, res) {
    analiseController.limiteAgostoRamServidor16(req, res);
});

router.get("/limiteSetembroRamServidor16", function (req, res) {
    analiseController.limiteSetembroRamServidor16(req, res);
});

router.get("/limiteOutubroRamServidor16", function (req, res) {
    analiseController.limiteOutubroRamServidor16(req, res);
});

router.get("/limiteNovembroRamServidor16", function (req, res) {
    analiseController.limiteNovembroRamServidor16(req, res);
});

router.get("/limiteDezembroRamServidor16", function (req, res) {
    analiseController.limiteDezembroRamServidor16(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor16", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor16(req, res);
});

router.get("/limiteFevereiroDiscoServidor16", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor16(req, res);
});

router.get("/limiteMarcoDiscoServidor16", function (req, res) {
    analiseController.limiteMarcoDiscoServidor16(req, res);
});

router.get("/limiteAbrilDiscoServidor16", function (req, res) {
    analiseController.limiteAbrilDiscoServidor16(req, res);
});

router.get("/limiteMaioDiscoServidor16", function (req, res) {
    analiseController.limiteMaioDiscoServidor16(req, res);
});

router.get("/limiteJunhoDiscoServidor16", function (req, res) {
    analiseController.limiteJunhoDiscoServidor16(req, res);
});

router.get("/limiteJulhoDiscoServidor16", function (req, res) {
    analiseController.limiteJulhoDiscoServidor16(req, res);
});

router.get("/limiteAgostoDiscoServidor16", function (req, res) {
    analiseController.limiteAgostoDiscoServidor16(req, res);
});

router.get("/limiteSetembroDiscoServidor16", function (req, res) {
    analiseController.limiteSetembroDiscoServidor16(req, res);
});

router.get("/limiteOutubroDiscoServidor16", function (req, res) {
    analiseController.limiteOutubroDiscoServidor16(req, res);
});

router.get("/limiteNovembroDiscoServidor16", function (req, res) {
    analiseController.limiteNovembroDiscoServidor16(req, res);
});

router.get("/limiteDezembroDiscoServidor16", function (req, res) {
    analiseController.limiteDezembroDiscoServidor16(req, res);
});

router.get("/mensalJaneiroCpuServidor17", function (req, res) {
    analiseController.mensalJaneiroCpuServidor17(req, res);
});

router.get("/mensalFevereiroCpuServidor17", function (req, res) {
    analiseController.mensalFevereiroCpuServidor17(req, res);
});

router.get("/mensalMarcoCpuServidor17", function (req, res) {
    analiseController.mensalMarcoCpuServidor17(req, res);
});

router.get("/mensalAbrilCpuServidor17", function (req, res) {
    analiseController.mensalAbrilCpuServidor17(req, res);
});

router.get("/mensalMaioCpuServidor17", function (req, res) {
    analiseController.mensalMaioCpuServidor17(req, res);
});

router.get("/mensalJunhoCpuServidor17", function (req, res) {
    analiseController.mensalJunhoCpuServidor17(req, res);
});

router.get("/mensalJulhoCpuServidor17", function (req, res) {
    analiseController.mensalJulhoCpuServidor17(req, res);
});

router.get("/mensalAgostoCpuServidor17", function (req, res) {
    analiseController.mensalAgostoCpuServidor17(req, res);
});

router.get("/mensalSetembroCpuServidor17", function (req, res) {
    analiseController.mensalSetembroCpuServidor17(req, res);
});

router.get("/mensalOutubroCpuServidor17", function (req, res) {
    analiseController.mensalOutubroCpuServidor17(req, res);
});

router.get("/mensalNovembroCpuServidor17", function (req, res) {
    analiseController.mensalNovembroCpuServidor17(req, res);
});

router.get("/mensalDezembroCpuServidor17", function (req, res) {
    analiseController.mensalDezembroCpuServidor17(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor17", function (req, res) {
    analiseController.mensalJaneiroRamServidor17(req, res);
});

router.get("/mensalFevereiroRamServidor17", function (req, res) {
    analiseController.mensalFevereiroRamServidor17(req, res);
});

router.get("/mensalMarcoRamServidor17", function (req, res) {
    analiseController.mensalMarcoRamServidor17(req, res);
});

router.get("/mensalAbrilRamServidor17", function (req, res) {
    analiseController.mensalAbrilRamServidor17(req, res);
});

router.get("/mensalMaioRamServidor17", function (req, res) {
    analiseController.mensalMaioRamServidor17(req, res);
});

router.get("/mensalJunhoRamServidor17", function (req, res) {
    analiseController.mensalJunhoRamServidor17(req, res);
});

router.get("/mensalJulhoRamServidor17", function (req, res) {
    analiseController.mensalJulhoRamServidor17(req, res);
});

router.get("/mensalAgostoRamServidor17", function (req, res) {
    analiseController.mensalAgostoRamServidor17(req, res);
});

router.get("/mensalSetembroRamServidor17", function (req, res) {
    analiseController.mensalSetembroRamServidor17(req, res);
});

router.get("/mensalOutubroRamServidor17", function (req, res) {
    analiseController.mensalOutubroRamServidor17(req, res);
});

router.get("/mensalNovembroRamServidor17", function (req, res) {
    analiseController.mensalNovembroRamServidor17(req, res);
});

router.get("/mensalDezembroRamServidor17", function (req, res) {
    analiseController.mensalDezembroRamServidor17(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor17", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor17(req, res);
});

router.get("/mensalFevereiroDiscoServidor17", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor17(req, res);
});

router.get("/mensalMarcoDiscoServidor17", function (req, res) {
    analiseController.mensalMarcoDiscoServidor17(req, res);
});

router.get("/mensalAbrilDiscoServidor17", function (req, res) {
    analiseController.mensalAbrilDiscoServidor17(req, res);
});

router.get("/mensalMaioDiscoServidor17", function (req, res) {
    analiseController.mensalMaioDiscoServidor17(req, res);
});

router.get("/mensalJunhoDiscoServidor17", function (req, res) {
    analiseController.mensalJunhoDiscoServidor17(req, res);
});

router.get("/mensalJulhoDiscoServidor17", function (req, res) {
    analiseController.mensalJulhoDiscoServidor17(req, res);
});

router.get("/mensalAgostoDiscoServidor17", function (req, res) {
    analiseController.mensalAgostoDiscoServidor17(req, res);
});

router.get("/mensalSetembroDiscoServidor17", function (req, res) {
    analiseController.mensalSetembroDiscoServidor17(req, res);
});

router.get("/mensalOutubroDiscoServidor17", function (req, res) {
    analiseController.mensalOutubroDiscoServidor17(req, res);
});

router.get("/mensalNovembroDiscoServidor17", function (req, res) {
    analiseController.mensalNovembroDiscoServidor17(req, res);
});

router.get("/mensalDezembroDiscoServidor17", function (req, res) {
    analiseController.mensalDezembroDiscoServidor17(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor17", function (req, res) {
    analiseController.limiteJaneiroCpuServidor17(req, res);
});

router.get("/limiteFevereiroCpuServidor17", function (req, res) {
    analiseController.limiteFevereiroCpuServidor17(req, res);
});

router.get("/limiteMarcoCpuServidor17", function (req, res) {
    analiseController.limiteMarcoCpuServidor17(req, res);
});

router.get("/limiteAbrilCpuServidor17", function (req, res) {
    analiseController.limiteAbrilCpuServidor17(req, res);
});

router.get("/limiteMaioCpuServidor17", function (req, res) {
    analiseController.limiteMaioCpuServidor17(req, res);
});

router.get("/limiteJunhoCpuServidor17", function (req, res) {
    analiseController.limiteJunhoCpuServidor17(req, res);
});

router.get("/limiteJulhoCpuServidor17", function (req, res) {
    analiseController.limiteJulhoCpuServidor17(req, res);
});

router.get("/limiteAgostoCpuServidor17", function (req, res) {
    analiseController.limiteAgostoCpuServidor17(req, res);
});

router.get("/limiteSetembroCpuServidor17", function (req, res) {
    analiseController.limiteSetembroCpuServidor17(req, res);
});

router.get("/limiteOutubroCpuServidor17", function (req, res) {
    analiseController.limiteOutubroCpuServidor17(req, res);
});

router.get("/limiteNovembroCpuServidor17", function (req, res) {
    analiseController.limiteNovembroCpuServidor17(req, res);
});

router.get("/limiteDezembroCpuServidor17", function (req, res) {
    analiseController.limiteDezembroCpuServidor17(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor17", function (req, res) {
    analiseController.limiteJaneiroRamServidor17(req, res);
});

router.get("/limiteFevereiroRamServidor17", function (req, res) {
    analiseController.limiteFevereiroRamServidor17(req, res);
});

router.get("/limiteMarcoRamServidor17", function (req, res) {
    analiseController.limiteMarcoRamServidor17(req, res);
});

router.get("/limiteAbrilRamServidor17", function (req, res) {
    analiseController.limiteAbrilRamServidor17(req, res);
});

router.get("/limiteMaioRamServidor17", function (req, res) {
    analiseController.limiteMaioRamServidor17(req, res);
});

router.get("/limiteJunhoRamServidor17", function (req, res) {
    analiseController.limiteJunhoRamServidor17(req, res);
});

router.get("/limiteJulhoRamServidor17", function (req, res) {
    analiseController.limiteJulhoRamServidor17(req, res);
});

router.get("/limiteAgostoRamServidor17", function (req, res) {
    analiseController.limiteAgostoRamServidor17(req, res);
});

router.get("/limiteSetembroRamServidor17", function (req, res) {
    analiseController.limiteSetembroRamServidor17(req, res);
});

router.get("/limiteOutubroRamServidor17", function (req, res) {
    analiseController.limiteOutubroRamServidor17(req, res);
});

router.get("/limiteNovembroRamServidor17", function (req, res) {
    analiseController.limiteNovembroRamServidor17(req, res);
});

router.get("/limiteDezembroRamServidor17", function (req, res) {
    analiseController.limiteDezembroRamServidor17(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor17", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor17(req, res);
});

router.get("/limiteFevereiroDiscoServidor17", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor17(req, res);
});

router.get("/limiteMarcoDiscoServidor17", function (req, res) {
    analiseController.limiteMarcoDiscoServidor17(req, res);
});

router.get("/limiteAbrilDiscoServidor17", function (req, res) {
    analiseController.limiteAbrilDiscoServidor17(req, res);
});

router.get("/limiteMaioDiscoServidor17", function (req, res) {
    analiseController.limiteMaioDiscoServidor17(req, res);
});

router.get("/limiteJunhoDiscoServidor17", function (req, res) {
    analiseController.limiteJunhoDiscoServidor17(req, res);
});

router.get("/limiteJulhoDiscoServidor17", function (req, res) {
    analiseController.limiteJulhoDiscoServidor17(req, res);
});

router.get("/limiteAgostoDiscoServidor17", function (req, res) {
    analiseController.limiteAgostoDiscoServidor17(req, res);
});

router.get("/limiteSetembroDiscoServidor17", function (req, res) {
    analiseController.limiteSetembroDiscoServidor17(req, res);
});

router.get("/limiteOutubroDiscoServidor17", function (req, res) {
    analiseController.limiteOutubroDiscoServidor17(req, res);
});

router.get("/limiteNovembroDiscoServidor17", function (req, res) {
    analiseController.limiteNovembroDiscoServidor17(req, res);
});

router.get("/limiteDezembroDiscoServidor17", function (req, res) {
    analiseController.limiteDezembroDiscoServidor17(req, res);
});

router.get("/mensalJaneiroCpuServidor18", function (req, res) {
    analiseController.mensalJaneiroCpuServidor18(req, res);
});

router.get("/mensalFevereiroCpuServidor18", function (req, res) {
    analiseController.mensalFevereiroCpuServidor18(req, res);
});

router.get("/mensalMarcoCpuServidor18", function (req, res) {
    analiseController.mensalMarcoCpuServidor18(req, res);
});

router.get("/mensalAbrilCpuServidor18", function (req, res) {
    analiseController.mensalAbrilCpuServidor18(req, res);
});

router.get("/mensalMaioCpuServidor18", function (req, res) {
    analiseController.mensalMaioCpuServidor18(req, res);
});

router.get("/mensalJunhoCpuServidor18", function (req, res) {
    analiseController.mensalJunhoCpuServidor18(req, res);
});

router.get("/mensalJulhoCpuServidor18", function (req, res) {
    analiseController.mensalJulhoCpuServidor18(req, res);
});

router.get("/mensalAgostoCpuServidor18", function (req, res) {
    analiseController.mensalAgostoCpuServidor18(req, res);
});

router.get("/mensalSetembroCpuServidor18", function (req, res) {
    analiseController.mensalSetembroCpuServidor18(req, res);
});

router.get("/mensalOutubroCpuServidor18", function (req, res) {
    analiseController.mensalOutubroCpuServidor18(req, res);
});

router.get("/mensalNovembroCpuServidor18", function (req, res) {
    analiseController.mensalNovembroCpuServidor18(req, res);
});

router.get("/mensalDezembroCpuServidor18", function (req, res) {
    analiseController.mensalDezembroCpuServidor18(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor18", function (req, res) {
    analiseController.mensalJaneiroRamServidor18(req, res);
});

router.get("/mensalFevereiroRamServidor18", function (req, res) {
    analiseController.mensalFevereiroRamServidor18(req, res);
});

router.get("/mensalMarcoRamServidor18", function (req, res) {
    analiseController.mensalMarcoRamServidor18(req, res);
});

router.get("/mensalAbrilRamServidor18", function (req, res) {
    analiseController.mensalAbrilRamServidor18(req, res);
});

router.get("/mensalMaioRamServidor18", function (req, res) {
    analiseController.mensalMaioRamServidor18(req, res);
});

router.get("/mensalJunhoRamServidor18", function (req, res) {
    analiseController.mensalJunhoRamServidor18(req, res);
});

router.get("/mensalJulhoRamServidor18", function (req, res) {
    analiseController.mensalJulhoRamServidor18(req, res);
});

router.get("/mensalAgostoRamServidor18", function (req, res) {
    analiseController.mensalAgostoRamServidor18(req, res);
});

router.get("/mensalSetembroRamServidor18", function (req, res) {
    analiseController.mensalSetembroRamServidor18(req, res);
});

router.get("/mensalOutubroRamServidor18", function (req, res) {
    analiseController.mensalOutubroRamServidor18(req, res);
});

router.get("/mensalNovembroRamServidor18", function (req, res) {
    analiseController.mensalNovembroRamServidor18(req, res);
});

router.get("/mensalDezembroRamServidor18", function (req, res) {
    analiseController.mensalDezembroRamServidor18(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor18", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor18(req, res);
});

router.get("/mensalFevereiroDiscoServidor18", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor18(req, res);
});

router.get("/mensalMarcoDiscoServidor18", function (req, res) {
    analiseController.mensalMarcoDiscoServidor18(req, res);
});

router.get("/mensalAbrilDiscoServidor18", function (req, res) {
    analiseController.mensalAbrilDiscoServidor18(req, res);
});

router.get("/mensalMaioDiscoServidor18", function (req, res) {
    analiseController.mensalMaioDiscoServidor18(req, res);
});

router.get("/mensalJunhoDiscoServidor18", function (req, res) {
    analiseController.mensalJunhoDiscoServidor18(req, res);
});

router.get("/mensalJulhoDiscoServidor18", function (req, res) {
    analiseController.mensalJulhoDiscoServidor18(req, res);
});

router.get("/mensalAgostoDiscoServidor18", function (req, res) {
    analiseController.mensalAgostoDiscoServidor18(req, res);
});

router.get("/mensalSetembroDiscoServidor18", function (req, res) {
    analiseController.mensalSetembroDiscoServidor18(req, res);
});

router.get("/mensalOutubroDiscoServidor18", function (req, res) {
    analiseController.mensalOutubroDiscoServidor18(req, res);
});

router.get("/mensalNovembroDiscoServidor18", function (req, res) {
    analiseController.mensalNovembroDiscoServidor18(req, res);
});

router.get("/mensalDezembroDiscoServidor18", function (req, res) {
    analiseController.mensalDezembroDiscoServidor18(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor18", function (req, res) {
    analiseController.limiteJaneiroCpuServidor18(req, res);
});

router.get("/limiteFevereiroCpuServidor18", function (req, res) {
    analiseController.limiteFevereiroCpuServidor18(req, res);
});

router.get("/limiteMarcoCpuServidor18", function (req, res) {
    analiseController.limiteMarcoCpuServidor18(req, res);
});

router.get("/limiteAbrilCpuServidor18", function (req, res) {
    analiseController.limiteAbrilCpuServidor18(req, res);
});

router.get("/limiteMaioCpuServidor18", function (req, res) {
    analiseController.limiteMaioCpuServidor18(req, res);
});

router.get("/limiteJunhoCpuServidor18", function (req, res) {
    analiseController.limiteJunhoCpuServidor18(req, res);
});

router.get("/limiteJulhoCpuServidor18", function (req, res) {
    analiseController.limiteJulhoCpuServidor18(req, res);
});

router.get("/limiteAgostoCpuServidor18", function (req, res) {
    analiseController.limiteAgostoCpuServidor18(req, res);
});

router.get("/limiteSetembroCpuServidor18", function (req, res) {
    analiseController.limiteSetembroCpuServidor18(req, res);
});

router.get("/limiteOutubroCpuServidor18", function (req, res) {
    analiseController.limiteOutubroCpuServidor18(req, res);
});

router.get("/limiteNovembroCpuServidor18", function (req, res) {
    analiseController.limiteNovembroCpuServidor18(req, res);
});

router.get("/limiteDezembroCpuServidor18", function (req, res) {
    analiseController.limiteDezembroCpuServidor18(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor18", function (req, res) {
    analiseController.limiteJaneiroRamServidor18(req, res);
});

router.get("/limiteFevereiroRamServidor18", function (req, res) {
    analiseController.limiteFevereiroRamServidor18(req, res);
});

router.get("/limiteMarcoRamServidor18", function (req, res) {
    analiseController.limiteMarcoRamServidor18(req, res);
});

router.get("/limiteAbrilRamServidor18", function (req, res) {
    analiseController.limiteAbrilRamServidor18(req, res);
});

router.get("/limiteMaioRamServidor18", function (req, res) {
    analiseController.limiteMaioRamServidor18(req, res);
});

router.get("/limiteJunhoRamServidor18", function (req, res) {
    analiseController.limiteJunhoRamServidor18(req, res);
});

router.get("/limiteJulhoRamServidor18", function (req, res) {
    analiseController.limiteJulhoRamServidor18(req, res);
});

router.get("/limiteAgostoRamServidor18", function (req, res) {
    analiseController.limiteAgostoRamServidor18(req, res);
});

router.get("/limiteSetembroRamServidor18", function (req, res) {
    analiseController.limiteSetembroRamServidor18(req, res);
});

router.get("/limiteOutubroRamServidor18", function (req, res) {
    analiseController.limiteOutubroRamServidor18(req, res);
});

router.get("/limiteNovembroRamServidor18", function (req, res) {
    analiseController.limiteNovembroRamServidor18(req, res);
});

router.get("/limiteDezembroRamServidor18", function (req, res) {
    analiseController.limiteDezembroRamServidor18(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor18", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor18(req, res);
});

router.get("/limiteFevereiroDiscoServidor18", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor18(req, res);
});

router.get("/limiteMarcoDiscoServidor18", function (req, res) {
    analiseController.limiteMarcoDiscoServidor18(req, res);
});

router.get("/limiteAbrilDiscoServidor18", function (req, res) {
    analiseController.limiteAbrilDiscoServidor18(req, res);
});

router.get("/limiteMaioDiscoServidor18", function (req, res) {
    analiseController.limiteMaioDiscoServidor18(req, res);
});

router.get("/limiteJunhoDiscoServidor18", function (req, res) {
    analiseController.limiteJunhoDiscoServidor18(req, res);
});

router.get("/limiteJulhoDiscoServidor18", function (req, res) {
    analiseController.limiteJulhoDiscoServidor18(req, res);
});

router.get("/limiteAgostoDiscoServidor18", function (req, res) {
    analiseController.limiteAgostoDiscoServidor18(req, res);
});

router.get("/limiteSetembroDiscoServidor18", function (req, res) {
    analiseController.limiteSetembroDiscoServidor18(req, res);
});

router.get("/limiteOutubroDiscoServidor18", function (req, res) {
    analiseController.limiteOutubroDiscoServidor18(req, res);
});

router.get("/limiteNovembroDiscoServidor18", function (req, res) {
    analiseController.limiteNovembroDiscoServidor18(req, res);
});

router.get("/limiteDezembroDiscoServidor18", function (req, res) {
    analiseController.limiteDezembroDiscoServidor18(req, res);
});

router.get("/mensalJaneiroCpuServidor19", function (req, res) {
    analiseController.mensalJaneiroCpuServidor19(req, res);
});

router.get("/mensalFevereiroCpuServidor19", function (req, res) {
    analiseController.mensalFevereiroCpuServidor19(req, res);
});

router.get("/mensalMarcoCpuServidor19", function (req, res) {
    analiseController.mensalMarcoCpuServidor19(req, res);
});

router.get("/mensalAbrilCpuServidor19", function (req, res) {
    analiseController.mensalAbrilCpuServidor19(req, res);
});

router.get("/mensalMaioCpuServidor19", function (req, res) {
    analiseController.mensalMaioCpuServidor19(req, res);
});

router.get("/mensalJunhoCpuServidor19", function (req, res) {
    analiseController.mensalJunhoCpuServidor19(req, res);
});

router.get("/mensalJulhoCpuServidor19", function (req, res) {
    analiseController.mensalJulhoCpuServidor19(req, res);
});

router.get("/mensalAgostoCpuServidor19", function (req, res) {
    analiseController.mensalAgostoCpuServidor19(req, res);
});

router.get("/mensalSetembroCpuServidor19", function (req, res) {
    analiseController.mensalSetembroCpuServidor19(req, res);
});

router.get("/mensalOutubroCpuServidor19", function (req, res) {
    analiseController.mensalOutubroCpuServidor19(req, res);
});

router.get("/mensalNovembroCpuServidor19", function (req, res) {
    analiseController.mensalNovembroCpuServidor19(req, res);
});

router.get("/mensalDezembroCpuServidor19", function (req, res) {
    analiseController.mensalDezembroCpuServidor19(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor19", function (req, res) {
    analiseController.mensalJaneiroRamServidor19(req, res);
});

router.get("/mensalFevereiroRamServidor19", function (req, res) {
    analiseController.mensalFevereiroRamServidor19(req, res);
});

router.get("/mensalMarcoRamServidor19", function (req, res) {
    analiseController.mensalMarcoRamServidor19(req, res);
});

router.get("/mensalAbrilRamServidor19", function (req, res) {
    analiseController.mensalAbrilRamServidor19(req, res);
});

router.get("/mensalMaioRamServidor19", function (req, res) {
    analiseController.mensalMaioRamServidor19(req, res);
});

router.get("/mensalJunhoRamServidor19", function (req, res) {
    analiseController.mensalJunhoRamServidor19(req, res);
});

router.get("/mensalJulhoRamServidor19", function (req, res) {
    analiseController.mensalJulhoRamServidor19(req, res);
});

router.get("/mensalAgostoRamServidor19", function (req, res) {
    analiseController.mensalAgostoRamServidor19(req, res);
});

router.get("/mensalSetembroRamServidor19", function (req, res) {
    analiseController.mensalSetembroRamServidor19(req, res);
});

router.get("/mensalOutubroRamServidor19", function (req, res) {
    analiseController.mensalOutubroRamServidor19(req, res);
});

router.get("/mensalNovembroRamServidor19", function (req, res) {
    analiseController.mensalNovembroRamServidor19(req, res);
});

router.get("/mensalDezembroRamServidor19", function (req, res) {
    analiseController.mensalDezembroRamServidor19(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor19", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor19(req, res);
});

router.get("/mensalFevereiroDiscoServidor19", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor19(req, res);
});

router.get("/mensalMarcoDiscoServidor19", function (req, res) {
    analiseController.mensalMarcoDiscoServidor19(req, res);
});

router.get("/mensalAbrilDiscoServidor19", function (req, res) {
    analiseController.mensalAbrilDiscoServidor19(req, res);
});

router.get("/mensalMaioDiscoServidor19", function (req, res) {
    analiseController.mensalMaioDiscoServidor19(req, res);
});

router.get("/mensalJunhoDiscoServidor19", function (req, res) {
    analiseController.mensalJunhoDiscoServidor19(req, res);
});

router.get("/mensalJulhoDiscoServidor19", function (req, res) {
    analiseController.mensalJulhoDiscoServidor19(req, res);
});

router.get("/mensalAgostoDiscoServidor19", function (req, res) {
    analiseController.mensalAgostoDiscoServidor19(req, res);
});

router.get("/mensalSetembroDiscoServidor19", function (req, res) {
    analiseController.mensalSetembroDiscoServidor19(req, res);
});

router.get("/mensalOutubroDiscoServidor19", function (req, res) {
    analiseController.mensalOutubroDiscoServidor19(req, res);
});

router.get("/mensalNovembroDiscoServidor19", function (req, res) {
    analiseController.mensalNovembroDiscoServidor19(req, res);
});

router.get("/mensalDezembroDiscoServidor19", function (req, res) {
    analiseController.mensalDezembroDiscoServidor19(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor19", function (req, res) {
    analiseController.limiteJaneiroCpuServidor19(req, res);
});

router.get("/limiteFevereiroCpuServidor19", function (req, res) {
    analiseController.limiteFevereiroCpuServidor19(req, res);
});

router.get("/limiteMarcoCpuServidor19", function (req, res) {
    analiseController.limiteMarcoCpuServidor19(req, res);
});

router.get("/limiteAbrilCpuServidor19", function (req, res) {
    analiseController.limiteAbrilCpuServidor19(req, res);
});

router.get("/limiteMaioCpuServidor19", function (req, res) {
    analiseController.limiteMaioCpuServidor19(req, res);
});

router.get("/limiteJunhoCpuServidor19", function (req, res) {
    analiseController.limiteJunhoCpuServidor19(req, res);
});

router.get("/limiteJulhoCpuServidor19", function (req, res) {
    analiseController.limiteJulhoCpuServidor19(req, res);
});

router.get("/limiteAgostoCpuServidor19", function (req, res) {
    analiseController.limiteAgostoCpuServidor19(req, res);
});

router.get("/limiteSetembroCpuServidor19", function (req, res) {
    analiseController.limiteSetembroCpuServidor19(req, res);
});

router.get("/limiteOutubroCpuServidor19", function (req, res) {
    analiseController.limiteOutubroCpuServidor19(req, res);
});

router.get("/limiteNovembroCpuServidor19", function (req, res) {
    analiseController.limiteNovembroCpuServidor19(req, res);
});

router.get("/limiteDezembroCpuServidor19", function (req, res) {
    analiseController.limiteDezembroCpuServidor19(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor19", function (req, res) {
    analiseController.limiteJaneiroRamServidor19(req, res);
});

router.get("/limiteFevereiroRamServidor19", function (req, res) {
    analiseController.limiteFevereiroRamServidor19(req, res);
});

router.get("/limiteMarcoRamServidor19", function (req, res) {
    analiseController.limiteMarcoRamServidor19(req, res);
});

router.get("/limiteAbrilRamServidor19", function (req, res) {
    analiseController.limiteAbrilRamServidor19(req, res);
});

router.get("/limiteMaioRamServidor19", function (req, res) {
    analiseController.limiteMaioRamServidor19(req, res);
});

router.get("/limiteJunhoRamServidor19", function (req, res) {
    analiseController.limiteJunhoRamServidor19(req, res);
});

router.get("/limiteJulhoRamServidor19", function (req, res) {
    analiseController.limiteJulhoRamServidor19(req, res);
});

router.get("/limiteAgostoRamServidor19", function (req, res) {
    analiseController.limiteAgostoRamServidor19(req, res);
});

router.get("/limiteSetembroRamServidor19", function (req, res) {
    analiseController.limiteSetembroRamServidor19(req, res);
});

router.get("/limiteOutubroRamServidor19", function (req, res) {
    analiseController.limiteOutubroRamServidor19(req, res);
});

router.get("/limiteNovembroRamServidor19", function (req, res) {
    analiseController.limiteNovembroRamServidor19(req, res);
});

router.get("/limiteDezembroRamServidor19", function (req, res) {
    analiseController.limiteDezembroRamServidor19(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor19", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor19(req, res);
});

router.get("/limiteFevereiroDiscoServidor19", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor19(req, res);
});

router.get("/limiteMarcoDiscoServidor19", function (req, res) {
    analiseController.limiteMarcoDiscoServidor19(req, res);
});

router.get("/limiteAbrilDiscoServidor19", function (req, res) {
    analiseController.limiteAbrilDiscoServidor19(req, res);
});

router.get("/limiteMaioDiscoServidor19", function (req, res) {
    analiseController.limiteMaioDiscoServidor19(req, res);
});

router.get("/limiteJunhoDiscoServidor19", function (req, res) {
    analiseController.limiteJunhoDiscoServidor19(req, res);
});

router.get("/limiteJulhoDiscoServidor19", function (req, res) {
    analiseController.limiteJulhoDiscoServidor19(req, res);
});

router.get("/limiteAgostoDiscoServidor19", function (req, res) {
    analiseController.limiteAgostoDiscoServidor19(req, res);
});

router.get("/limiteSetembroDiscoServidor19", function (req, res) {
    analiseController.limiteSetembroDiscoServidor19(req, res);
});

router.get("/limiteOutubroDiscoServidor19", function (req, res) {
    analiseController.limiteOutubroDiscoServidor19(req, res);
});

router.get("/limiteNovembroDiscoServidor19", function (req, res) {
    analiseController.limiteNovembroDiscoServidor19(req, res);
});

router.get("/limiteDezembroDiscoServidor19", function (req, res) {
    analiseController.limiteDezembroDiscoServidor19(req, res);
});

router.get("/mensalJaneiroCpuServidor20", function (req, res) {
    analiseController.mensalJaneiroCpuServidor20(req, res);
});

router.get("/mensalFevereiroCpuServidor20", function (req, res) {
    analiseController.mensalFevereiroCpuServidor20(req, res);
});

router.get("/mensalMarcoCpuServidor20", function (req, res) {
    analiseController.mensalMarcoCpuServidor20(req, res);
});

router.get("/mensalAbrilCpuServidor20", function (req, res) {
    analiseController.mensalAbrilCpuServidor20(req, res);
});

router.get("/mensalMaioCpuServidor20", function (req, res) {
    analiseController.mensalMaioCpuServidor20(req, res);
});

router.get("/mensalJunhoCpuServidor20", function (req, res) {
    analiseController.mensalJunhoCpuServidor20(req, res);
});

router.get("/mensalJulhoCpuServidor20", function (req, res) {
    analiseController.mensalJulhoCpuServidor20(req, res);
});

router.get("/mensalAgostoCpuServidor20", function (req, res) {
    analiseController.mensalAgostoCpuServidor20(req, res);
});

router.get("/mensalSetembroCpuServidor20", function (req, res) {
    analiseController.mensalSetembroCpuServidor20(req, res);
});

router.get("/mensalOutubroCpuServidor20", function (req, res) {
    analiseController.mensalOutubroCpuServidor20(req, res);
});

router.get("/mensalNovembroCpuServidor20", function (req, res) {
    analiseController.mensalNovembroCpuServidor20(req, res);
});

router.get("/mensalDezembroCpuServidor20", function (req, res) {
    analiseController.mensalDezembroCpuServidor20(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor20", function (req, res) {
    analiseController.mensalJaneiroRamServidor20(req, res);
});

router.get("/mensalFevereiroRamServidor20", function (req, res) {
    analiseController.mensalFevereiroRamServidor20(req, res);
});

router.get("/mensalMarcoRamServidor20", function (req, res) {
    analiseController.mensalMarcoRamServidor20(req, res);
});

router.get("/mensalAbrilRamServidor20", function (req, res) {
    analiseController.mensalAbrilRamServidor20(req, res);
});

router.get("/mensalMaioRamServidor20", function (req, res) {
    analiseController.mensalMaioRamServidor20(req, res);
});

router.get("/mensalJunhoRamServidor20", function (req, res) {
    analiseController.mensalJunhoRamServidor20(req, res);
});

router.get("/mensalJulhoRamServidor20", function (req, res) {
    analiseController.mensalJulhoRamServidor20(req, res);
});

router.get("/mensalAgostoRamServidor20", function (req, res) {
    analiseController.mensalAgostoRamServidor20(req, res);
});

router.get("/mensalSetembroRamServidor20", function (req, res) {
    analiseController.mensalSetembroRamServidor20(req, res);
});

router.get("/mensalOutubroRamServidor20", function (req, res) {
    analiseController.mensalOutubroRamServidor20(req, res);
});

router.get("/mensalNovembroRamServidor20", function (req, res) {
    analiseController.mensalNovembroRamServidor20(req, res);
});

router.get("/mensalDezembroRamServidor20", function (req, res) {
    analiseController.mensalDezembroRamServidor20(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor20", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor20(req, res);
});

router.get("/mensalFevereiroDiscoServidor20", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor20(req, res);
});

router.get("/mensalMarcoDiscoServidor20", function (req, res) {
    analiseController.mensalMarcoDiscoServidor20(req, res);
});

router.get("/mensalAbrilDiscoServidor20", function (req, res) {
    analiseController.mensalAbrilDiscoServidor20(req, res);
});

router.get("/mensalMaioDiscoServidor20", function (req, res) {
    analiseController.mensalMaioDiscoServidor20(req, res);
});

router.get("/mensalJunhoDiscoServidor20", function (req, res) {
    analiseController.mensalJunhoDiscoServidor20(req, res);
});

router.get("/mensalJulhoDiscoServidor20", function (req, res) {
    analiseController.mensalJulhoDiscoServidor20(req, res);
});

router.get("/mensalAgostoDiscoServidor20", function (req, res) {
    analiseController.mensalAgostoDiscoServidor20(req, res);
});

router.get("/mensalSetembroDiscoServidor20", function (req, res) {
    analiseController.mensalSetembroDiscoServidor20(req, res);
});

router.get("/mensalOutubroDiscoServidor20", function (req, res) {
    analiseController.mensalOutubroDiscoServidor20(req, res);
});

router.get("/mensalNovembroDiscoServidor20", function (req, res) {
    analiseController.mensalNovembroDiscoServidor20(req, res);
});

router.get("/mensalDezembroDiscoServidor20", function (req, res) {
    analiseController.mensalDezembroDiscoServidor20(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor20", function (req, res) {
    analiseController.limiteJaneiroCpuServidor20(req, res);
});

router.get("/limiteFevereiroCpuServidor20", function (req, res) {
    analiseController.limiteFevereiroCpuServidor20(req, res);
});

router.get("/limiteMarcoCpuServidor20", function (req, res) {
    analiseController.limiteMarcoCpuServidor20(req, res);
});

router.get("/limiteAbrilCpuServidor20", function (req, res) {
    analiseController.limiteAbrilCpuServidor20(req, res);
});

router.get("/limiteMaioCpuServidor20", function (req, res) {
    analiseController.limiteMaioCpuServidor20(req, res);
});

router.get("/limiteJunhoCpuServidor20", function (req, res) {
    analiseController.limiteJunhoCpuServidor20(req, res);
});

router.get("/limiteJulhoCpuServidor20", function (req, res) {
    analiseController.limiteJulhoCpuServidor20(req, res);
});

router.get("/limiteAgostoCpuServidor20", function (req, res) {
    analiseController.limiteAgostoCpuServidor20(req, res);
});

router.get("/limiteSetembroCpuServidor20", function (req, res) {
    analiseController.limiteSetembroCpuServidor20(req, res);
});

router.get("/limiteOutubroCpuServidor20", function (req, res) {
    analiseController.limiteOutubroCpuServidor20(req, res);
});

router.get("/limiteNovembroCpuServidor20", function (req, res) {
    analiseController.limiteNovembroCpuServidor20(req, res);
});

router.get("/limiteDezembroCpuServidor20", function (req, res) {
    analiseController.limiteDezembroCpuServidor20(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor20", function (req, res) {
    analiseController.limiteJaneiroRamServidor20(req, res);
});

router.get("/limiteFevereiroRamServidor20", function (req, res) {
    analiseController.limiteFevereiroRamServidor20(req, res);
});

router.get("/limiteMarcoRamServidor20", function (req, res) {
    analiseController.limiteMarcoRamServidor20(req, res);
});

router.get("/limiteAbrilRamServidor20", function (req, res) {
    analiseController.limiteAbrilRamServidor20(req, res);
});

router.get("/limiteMaioRamServidor20", function (req, res) {
    analiseController.limiteMaioRamServidor20(req, res);
});

router.get("/limiteJunhoRamServidor20", function (req, res) {
    analiseController.limiteJunhoRamServidor20(req, res);
});

router.get("/limiteJulhoRamServidor20", function (req, res) {
    analiseController.limiteJulhoRamServidor20(req, res);
});

router.get("/limiteAgostoRamServidor20", function (req, res) {
    analiseController.limiteAgostoRamServidor20(req, res);
});

router.get("/limiteSetembroRamServidor20", function (req, res) {
    analiseController.limiteSetembroRamServidor20(req, res);
});

router.get("/limiteOutubroRamServidor20", function (req, res) {
    analiseController.limiteOutubroRamServidor20(req, res);
});

router.get("/limiteNovembroRamServidor20", function (req, res) {
    analiseController.limiteNovembroRamServidor20(req, res);
});

router.get("/limiteDezembroRamServidor20", function (req, res) {
    analiseController.limiteDezembroRamServidor20(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor20", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor20(req, res);
});

router.get("/limiteFevereiroDiscoServidor20", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor20(req, res);
});

router.get("/limiteMarcoDiscoServidor20", function (req, res) {
    analiseController.limiteMarcoDiscoServidor20(req, res);
});

router.get("/limiteAbrilDiscoServidor20", function (req, res) {
    analiseController.limiteAbrilDiscoServidor20(req, res);
});

router.get("/limiteMaioDiscoServidor20", function (req, res) {
    analiseController.limiteMaioDiscoServidor20(req, res);
});

router.get("/limiteJunhoDiscoServidor20", function (req, res) {
    analiseController.limiteJunhoDiscoServidor20(req, res);
});

router.get("/limiteJulhoDiscoServidor20", function (req, res) {
    analiseController.limiteJulhoDiscoServidor20(req, res);
});

router.get("/limiteAgostoDiscoServidor20", function (req, res) {
    analiseController.limiteAgostoDiscoServidor20(req, res);
});

router.get("/limiteSetembroDiscoServidor20", function (req, res) {
    analiseController.limiteSetembroDiscoServidor20(req, res);
});

router.get("/limiteOutubroDiscoServidor20", function (req, res) {
    analiseController.limiteOutubroDiscoServidor20(req, res);
});

router.get("/limiteNovembroDiscoServidor20", function (req, res) {
    analiseController.limiteNovembroDiscoServidor20(req, res);
});

router.get("/limiteDezembroDiscoServidor20", function (req, res) {
    analiseController.limiteDezembroDiscoServidor20(req, res);
});

router.get("/mensalJaneiroCpuServidor21", function (req, res) {
    analiseController.mensalJaneiroCpuServidor21(req, res);
});

router.get("/mensalFevereiroCpuServidor21", function (req, res) {
    analiseController.mensalFevereiroCpuServidor21(req, res);
});

router.get("/mensalMarcoCpuServidor21", function (req, res) {
    analiseController.mensalMarcoCpuServidor21(req, res);
});

router.get("/mensalAbrilCpuServidor21", function (req, res) {
    analiseController.mensalAbrilCpuServidor21(req, res);
});

router.get("/mensalMaioCpuServidor21", function (req, res) {
    analiseController.mensalMaioCpuServidor21(req, res);
});

router.get("/mensalJunhoCpuServidor21", function (req, res) {
    analiseController.mensalJunhoCpuServidor21(req, res);
});

router.get("/mensalJulhoCpuServidor21", function (req, res) {
    analiseController.mensalJulhoCpuServidor21(req, res);
});

router.get("/mensalAgostoCpuServidor21", function (req, res) {
    analiseController.mensalAgostoCpuServidor21(req, res);
});

router.get("/mensalSetembroCpuServidor21", function (req, res) {
    analiseController.mensalSetembroCpuServidor21(req, res);
});

router.get("/mensalOutubroCpuServidor21", function (req, res) {
    analiseController.mensalOutubroCpuServidor21(req, res);
});

router.get("/mensalNovembroCpuServidor21", function (req, res) {
    analiseController.mensalNovembroCpuServidor21(req, res);
});

router.get("/mensalDezembroCpuServidor21", function (req, res) {
    analiseController.mensalDezembroCpuServidor21(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor21", function (req, res) {
    analiseController.mensalJaneiroRamServidor21(req, res);
});

router.get("/mensalFevereiroRamServidor21", function (req, res) {
    analiseController.mensalFevereiroRamServidor21(req, res);
});

router.get("/mensalMarcoRamServidor21", function (req, res) {
    analiseController.mensalMarcoRamServidor21(req, res);
});

router.get("/mensalAbrilRamServidor21", function (req, res) {
    analiseController.mensalAbrilRamServidor21(req, res);
});

router.get("/mensalMaioRamServidor21", function (req, res) {
    analiseController.mensalMaioRamServidor21(req, res);
});

router.get("/mensalJunhoRamServidor21", function (req, res) {
    analiseController.mensalJunhoRamServidor21(req, res);
});

router.get("/mensalJulhoRamServidor21", function (req, res) {
    analiseController.mensalJulhoRamServidor21(req, res);
});

router.get("/mensalAgostoRamServidor21", function (req, res) {
    analiseController.mensalAgostoRamServidor21(req, res);
});

router.get("/mensalSetembroRamServidor21", function (req, res) {
    analiseController.mensalSetembroRamServidor21(req, res);
});

router.get("/mensalOutubroRamServidor21", function (req, res) {
    analiseController.mensalOutubroRamServidor21(req, res);
});

router.get("/mensalNovembroRamServidor21", function (req, res) {
    analiseController.mensalNovembroRamServidor21(req, res);
});

router.get("/mensalDezembroRamServidor21", function (req, res) {
    analiseController.mensalDezembroRamServidor21(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor21", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor21(req, res);
});

router.get("/mensalFevereiroDiscoServidor21", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor21(req, res);
});

router.get("/mensalMarcoDiscoServidor21", function (req, res) {
    analiseController.mensalMarcoDiscoServidor21(req, res);
});

router.get("/mensalAbrilDiscoServidor21", function (req, res) {
    analiseController.mensalAbrilDiscoServidor21(req, res);
});

router.get("/mensalMaioDiscoServidor21", function (req, res) {
    analiseController.mensalMaioDiscoServidor21(req, res);
});

router.get("/mensalJunhoDiscoServidor21", function (req, res) {
    analiseController.mensalJunhoDiscoServidor21(req, res);
});

router.get("/mensalJulhoDiscoServidor21", function (req, res) {
    analiseController.mensalJulhoDiscoServidor21(req, res);
});

router.get("/mensalAgostoDiscoServidor21", function (req, res) {
    analiseController.mensalAgostoDiscoServidor21(req, res);
});

router.get("/mensalSetembroDiscoServidor21", function (req, res) {
    analiseController.mensalSetembroDiscoServidor21(req, res);
});

router.get("/mensalOutubroDiscoServidor21", function (req, res) {
    analiseController.mensalOutubroDiscoServidor21(req, res);
});

router.get("/mensalNovembroDiscoServidor21", function (req, res) {
    analiseController.mensalNovembroDiscoServidor21(req, res);
});

router.get("/mensalDezembroDiscoServidor21", function (req, res) {
    analiseController.mensalDezembroDiscoServidor21(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor21", function (req, res) {
    analiseController.limiteJaneiroCpuServidor21(req, res);
});

router.get("/limiteFevereiroCpuServidor21", function (req, res) {
    analiseController.limiteFevereiroCpuServidor21(req, res);
});

router.get("/limiteMarcoCpuServidor21", function (req, res) {
    analiseController.limiteMarcoCpuServidor21(req, res);
});

router.get("/limiteAbrilCpuServidor21", function (req, res) {
    analiseController.limiteAbrilCpuServidor21(req, res);
});

router.get("/limiteMaioCpuServidor21", function (req, res) {
    analiseController.limiteMaioCpuServidor21(req, res);
});

router.get("/limiteJunhoCpuServidor21", function (req, res) {
    analiseController.limiteJunhoCpuServidor21(req, res);
});

router.get("/limiteJulhoCpuServidor21", function (req, res) {
    analiseController.limiteJulhoCpuServidor21(req, res);
});

router.get("/limiteAgostoCpuServidor21", function (req, res) {
    analiseController.limiteAgostoCpuServidor21(req, res);
});

router.get("/limiteSetembroCpuServidor21", function (req, res) {
    analiseController.limiteSetembroCpuServidor21(req, res);
});

router.get("/limiteOutubroCpuServidor21", function (req, res) {
    analiseController.limiteOutubroCpuServidor21(req, res);
});

router.get("/limiteNovembroCpuServidor21", function (req, res) {
    analiseController.limiteNovembroCpuServidor21(req, res);
});

router.get("/limiteDezembroCpuServidor21", function (req, res) {
    analiseController.limiteDezembroCpuServidor21(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor21", function (req, res) {
    analiseController.limiteJaneiroRamServidor21(req, res);
});

router.get("/limiteFevereiroRamServidor21", function (req, res) {
    analiseController.limiteFevereiroRamServidor21(req, res);
});

router.get("/limiteMarcoRamServidor21", function (req, res) {
    analiseController.limiteMarcoRamServidor21(req, res);
});

router.get("/limiteAbrilRamServidor21", function (req, res) {
    analiseController.limiteAbrilRamServidor21(req, res);
});

router.get("/limiteMaioRamServidor21", function (req, res) {
    analiseController.limiteMaioRamServidor21(req, res);
});

router.get("/limiteJunhoRamServidor21", function (req, res) {
    analiseController.limiteJunhoRamServidor21(req, res);
});

router.get("/limiteJulhoRamServidor21", function (req, res) {
    analiseController.limiteJulhoRamServidor21(req, res);
});

router.get("/limiteAgostoRamServidor21", function (req, res) {
    analiseController.limiteAgostoRamServidor21(req, res);
});

router.get("/limiteSetembroRamServidor21", function (req, res) {
    analiseController.limiteSetembroRamServidor21(req, res);
});

router.get("/limiteOutubroRamServidor21", function (req, res) {
    analiseController.limiteOutubroRamServidor21(req, res);
});

router.get("/limiteNovembroRamServidor21", function (req, res) {
    analiseController.limiteNovembroRamServidor21(req, res);
});

router.get("/limiteDezembroRamServidor21", function (req, res) {
    analiseController.limiteDezembroRamServidor21(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor21", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor21(req, res);
});

router.get("/limiteFevereiroDiscoServidor21", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor21(req, res);
});

router.get("/limiteMarcoDiscoServidor21", function (req, res) {
    analiseController.limiteMarcoDiscoServidor21(req, res);
});

router.get("/limiteAbrilDiscoServidor21", function (req, res) {
    analiseController.limiteAbrilDiscoServidor21(req, res);
});

router.get("/limiteMaioDiscoServidor21", function (req, res) {
    analiseController.limiteMaioDiscoServidor21(req, res);
});

router.get("/limiteJunhoDiscoServidor21", function (req, res) {
    analiseController.limiteJunhoDiscoServidor21(req, res);
});

router.get("/limiteJulhoDiscoServidor21", function (req, res) {
    analiseController.limiteJulhoDiscoServidor21(req, res);
});

router.get("/limiteAgostoDiscoServidor21", function (req, res) {
    analiseController.limiteAgostoDiscoServidor21(req, res);
});

router.get("/limiteSetembroDiscoServidor21", function (req, res) {
    analiseController.limiteSetembroDiscoServidor21(req, res);
});

router.get("/limiteOutubroDiscoServidor21", function (req, res) {
    analiseController.limiteOutubroDiscoServidor21(req, res);
});

router.get("/limiteNovembroDiscoServidor21", function (req, res) {
    analiseController.limiteNovembroDiscoServidor21(req, res);
});

router.get("/limiteDezembroDiscoServidor21", function (req, res) {
    analiseController.limiteDezembroDiscoServidor21(req, res);
});

router.get("/mensalJaneiroCpuServidor22", function (req, res) {
    analiseController.mensalJaneiroCpuServidor22(req, res);
});

router.get("/mensalFevereiroCpuServidor22", function (req, res) {
    analiseController.mensalFevereiroCpuServidor22(req, res);
});

router.get("/mensalMarcoCpuServidor22", function (req, res) {
    analiseController.mensalMarcoCpuServidor22(req, res);
});

router.get("/mensalAbrilCpuServidor22", function (req, res) {
    analiseController.mensalAbrilCpuServidor22(req, res);
});

router.get("/mensalMaioCpuServidor22", function (req, res) {
    analiseController.mensalMaioCpuServidor22(req, res);
});

router.get("/mensalJunhoCpuServidor22", function (req, res) {
    analiseController.mensalJunhoCpuServidor22(req, res);
});

router.get("/mensalJulhoCpuServidor22", function (req, res) {
    analiseController.mensalJulhoCpuServidor22(req, res);
});

router.get("/mensalAgostoCpuServidor22", function (req, res) {
    analiseController.mensalAgostoCpuServidor22(req, res);
});

router.get("/mensalSetembroCpuServidor22", function (req, res) {
    analiseController.mensalSetembroCpuServidor22(req, res);
});

router.get("/mensalOutubroCpuServidor22", function (req, res) {
    analiseController.mensalOutubroCpuServidor22(req, res);
});

router.get("/mensalNovembroCpuServidor22", function (req, res) {
    analiseController.mensalNovembroCpuServidor22(req, res);
});

router.get("/mensalDezembroCpuServidor22", function (req, res) {
    analiseController.mensalDezembroCpuServidor22(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor22", function (req, res) {
    analiseController.mensalJaneiroRamServidor22(req, res);
});

router.get("/mensalFevereiroRamServidor22", function (req, res) {
    analiseController.mensalFevereiroRamServidor22(req, res);
});

router.get("/mensalMarcoRamServidor22", function (req, res) {
    analiseController.mensalMarcoRamServidor22(req, res);
});

router.get("/mensalAbrilRamServidor22", function (req, res) {
    analiseController.mensalAbrilRamServidor22(req, res);
});

router.get("/mensalMaioRamServidor22", function (req, res) {
    analiseController.mensalMaioRamServidor22(req, res);
});

router.get("/mensalJunhoRamServidor22", function (req, res) {
    analiseController.mensalJunhoRamServidor22(req, res);
});

router.get("/mensalJulhoRamServidor22", function (req, res) {
    analiseController.mensalJulhoRamServidor22(req, res);
});

router.get("/mensalAgostoRamServidor22", function (req, res) {
    analiseController.mensalAgostoRamServidor22(req, res);
});

router.get("/mensalSetembroRamServidor22", function (req, res) {
    analiseController.mensalSetembroRamServidor22(req, res);
});

router.get("/mensalOutubroRamServidor22", function (req, res) {
    analiseController.mensalOutubroRamServidor22(req, res);
});

router.get("/mensalNovembroRamServidor22", function (req, res) {
    analiseController.mensalNovembroRamServidor22(req, res);
});

router.get("/mensalDezembroRamServidor22", function (req, res) {
    analiseController.mensalDezembroRamServidor22(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor22", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor22(req, res);
});

router.get("/mensalFevereiroDiscoServidor22", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor22(req, res);
});

router.get("/mensalMarcoDiscoServidor22", function (req, res) {
    analiseController.mensalMarcoDiscoServidor22(req, res);
});

router.get("/mensalAbrilDiscoServidor22", function (req, res) {
    analiseController.mensalAbrilDiscoServidor22(req, res);
});

router.get("/mensalMaioDiscoServidor22", function (req, res) {
    analiseController.mensalMaioDiscoServidor22(req, res);
});

router.get("/mensalJunhoDiscoServidor22", function (req, res) {
    analiseController.mensalJunhoDiscoServidor22(req, res);
});

router.get("/mensalJulhoDiscoServidor22", function (req, res) {
    analiseController.mensalJulhoDiscoServidor22(req, res);
});

router.get("/mensalAgostoDiscoServidor22", function (req, res) {
    analiseController.mensalAgostoDiscoServidor22(req, res);
});

router.get("/mensalSetembroDiscoServidor22", function (req, res) {
    analiseController.mensalSetembroDiscoServidor22(req, res);
});

router.get("/mensalOutubroDiscoServidor22", function (req, res) {
    analiseController.mensalOutubroDiscoServidor22(req, res);
});

router.get("/mensalNovembroDiscoServidor22", function (req, res) {
    analiseController.mensalNovembroDiscoServidor22(req, res);
});

router.get("/mensalDezembroDiscoServidor22", function (req, res) {
    analiseController.mensalDezembroDiscoServidor22(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor22", function (req, res) {
    analiseController.limiteJaneiroCpuServidor22(req, res);
});

router.get("/limiteFevereiroCpuServidor22", function (req, res) {
    analiseController.limiteFevereiroCpuServidor22(req, res);
});

router.get("/limiteMarcoCpuServidor22", function (req, res) {
    analiseController.limiteMarcoCpuServidor22(req, res);
});

router.get("/limiteAbrilCpuServidor22", function (req, res) {
    analiseController.limiteAbrilCpuServidor22(req, res);
});

router.get("/limiteMaioCpuServidor22", function (req, res) {
    analiseController.limiteMaioCpuServidor22(req, res);
});

router.get("/limiteJunhoCpuServidor22", function (req, res) {
    analiseController.limiteJunhoCpuServidor22(req, res);
});

router.get("/limiteJulhoCpuServidor22", function (req, res) {
    analiseController.limiteJulhoCpuServidor22(req, res);
});

router.get("/limiteAgostoCpuServidor22", function (req, res) {
    analiseController.limiteAgostoCpuServidor22(req, res);
});

router.get("/limiteSetembroCpuServidor22", function (req, res) {
    analiseController.limiteSetembroCpuServidor22(req, res);
});

router.get("/limiteOutubroCpuServidor22", function (req, res) {
    analiseController.limiteOutubroCpuServidor22(req, res);
});

router.get("/limiteNovembroCpuServidor22", function (req, res) {
    analiseController.limiteNovembroCpuServidor22(req, res);
});

router.get("/limiteDezembroCpuServidor22", function (req, res) {
    analiseController.limiteDezembroCpuServidor22(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor22", function (req, res) {
    analiseController.limiteJaneiroRamServidor22(req, res);
});

router.get("/limiteFevereiroRamServidor22", function (req, res) {
    analiseController.limiteFevereiroRamServidor22(req, res);
});

router.get("/limiteMarcoRamServidor22", function (req, res) {
    analiseController.limiteMarcoRamServidor22(req, res);
});

router.get("/limiteAbrilRamServidor22", function (req, res) {
    analiseController.limiteAbrilRamServidor22(req, res);
});

router.get("/limiteMaioRamServidor22", function (req, res) {
    analiseController.limiteMaioRamServidor22(req, res);
});

router.get("/limiteJunhoRamServidor22", function (req, res) {
    analiseController.limiteJunhoRamServidor22(req, res);
});

router.get("/limiteJulhoRamServidor22", function (req, res) {
    analiseController.limiteJulhoRamServidor22(req, res);
});

router.get("/limiteAgostoRamServidor22", function (req, res) {
    analiseController.limiteAgostoRamServidor22(req, res);
});

router.get("/limiteSetembroRamServidor22", function (req, res) {
    analiseController.limiteSetembroRamServidor22(req, res);
});

router.get("/limiteOutubroRamServidor22", function (req, res) {
    analiseController.limiteOutubroRamServidor22(req, res);
});

router.get("/limiteNovembroRamServidor22", function (req, res) {
    analiseController.limiteNovembroRamServidor22(req, res);
});

router.get("/limiteDezembroRamServidor22", function (req, res) {
    analiseController.limiteDezembroRamServidor22(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor22", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor22(req, res);
});

router.get("/limiteFevereiroDiscoServidor22", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor22(req, res);
});

router.get("/limiteMarcoDiscoServidor22", function (req, res) {
    analiseController.limiteMarcoDiscoServidor22(req, res);
});

router.get("/limiteAbrilDiscoServidor22", function (req, res) {
    analiseController.limiteAbrilDiscoServidor22(req, res);
});

router.get("/limiteMaioDiscoServidor22", function (req, res) {
    analiseController.limiteMaioDiscoServidor22(req, res);
});

router.get("/limiteJunhoDiscoServidor22", function (req, res) {
    analiseController.limiteJunhoDiscoServidor22(req, res);
});

router.get("/limiteJulhoDiscoServidor22", function (req, res) {
    analiseController.limiteJulhoDiscoServidor22(req, res);
});

router.get("/limiteAgostoDiscoServidor22", function (req, res) {
    analiseController.limiteAgostoDiscoServidor22(req, res);
});

router.get("/limiteSetembroDiscoServidor22", function (req, res) {
    analiseController.limiteSetembroDiscoServidor22(req, res);
});

router.get("/limiteOutubroDiscoServidor22", function (req, res) {
    analiseController.limiteOutubroDiscoServidor22(req, res);
});

router.get("/limiteNovembroDiscoServidor22", function (req, res) {
    analiseController.limiteNovembroDiscoServidor22(req, res);
});

router.get("/limiteDezembroDiscoServidor22", function (req, res) {
    analiseController.limiteDezembroDiscoServidor22(req, res);
});

router.get("/mensalJaneiroCpuServidor23", function (req, res) {
    analiseController.mensalJaneiroCpuServidor23(req, res);
});

router.get("/mensalFevereiroCpuServidor23", function (req, res) {
    analiseController.mensalFevereiroCpuServidor23(req, res);
});

router.get("/mensalMarcoCpuServidor23", function (req, res) {
    analiseController.mensalMarcoCpuServidor23(req, res);
});

router.get("/mensalAbrilCpuServidor23", function (req, res) {
    analiseController.mensalAbrilCpuServidor23(req, res);
});

router.get("/mensalMaioCpuServidor23", function (req, res) {
    analiseController.mensalMaioCpuServidor23(req, res);
});

router.get("/mensalJunhoCpuServidor23", function (req, res) {
    analiseController.mensalJunhoCpuServidor23(req, res);
});

router.get("/mensalJulhoCpuServidor23", function (req, res) {
    analiseController.mensalJulhoCpuServidor23(req, res);
});

router.get("/mensalAgostoCpuServidor23", function (req, res) {
    analiseController.mensalAgostoCpuServidor23(req, res);
});

router.get("/mensalSetembroCpuServidor23", function (req, res) {
    analiseController.mensalSetembroCpuServidor23(req, res);
});

router.get("/mensalOutubroCpuServidor23", function (req, res) {
    analiseController.mensalOutubroCpuServidor23(req, res);
});

router.get("/mensalNovembroCpuServidor23", function (req, res) {
    analiseController.mensalNovembroCpuServidor23(req, res);
});

router.get("/mensalDezembroCpuServidor23", function (req, res) {
    analiseController.mensalDezembroCpuServidor23(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor23", function (req, res) {
    analiseController.mensalJaneiroRamServidor23(req, res);
});

router.get("/mensalFevereiroRamServidor23", function (req, res) {
    analiseController.mensalFevereiroRamServidor23(req, res);
});

router.get("/mensalMarcoRamServidor23", function (req, res) {
    analiseController.mensalMarcoRamServidor23(req, res);
});

router.get("/mensalAbrilRamServidor23", function (req, res) {
    analiseController.mensalAbrilRamServidor23(req, res);
});

router.get("/mensalMaioRamServidor23", function (req, res) {
    analiseController.mensalMaioRamServidor23(req, res);
});

router.get("/mensalJunhoRamServidor23", function (req, res) {
    analiseController.mensalJunhoRamServidor23(req, res);
});

router.get("/mensalJulhoRamServidor23", function (req, res) {
    analiseController.mensalJulhoRamServidor23(req, res);
});

router.get("/mensalAgostoRamServidor23", function (req, res) {
    analiseController.mensalAgostoRamServidor23(req, res);
});

router.get("/mensalSetembroRamServidor23", function (req, res) {
    analiseController.mensalSetembroRamServidor23(req, res);
});

router.get("/mensalOutubroRamServidor23", function (req, res) {
    analiseController.mensalOutubroRamServidor23(req, res);
});

router.get("/mensalNovembroRamServidor23", function (req, res) {
    analiseController.mensalNovembroRamServidor23(req, res);
});

router.get("/mensalDezembroRamServidor23", function (req, res) {
    analiseController.mensalDezembroRamServidor23(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor23", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor23(req, res);
});

router.get("/mensalFevereiroDiscoServidor23", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor23(req, res);
});

router.get("/mensalMarcoDiscoServidor23", function (req, res) {
    analiseController.mensalMarcoDiscoServidor23(req, res);
});

router.get("/mensalAbrilDiscoServidor23", function (req, res) {
    analiseController.mensalAbrilDiscoServidor23(req, res);
});

router.get("/mensalMaioDiscoServidor23", function (req, res) {
    analiseController.mensalMaioDiscoServidor23(req, res);
});

router.get("/mensalJunhoDiscoServidor23", function (req, res) {
    analiseController.mensalJunhoDiscoServidor23(req, res);
});

router.get("/mensalJulhoDiscoServidor23", function (req, res) {
    analiseController.mensalJulhoDiscoServidor23(req, res);
});

router.get("/mensalAgostoDiscoServidor23", function (req, res) {
    analiseController.mensalAgostoDiscoServidor23(req, res);
});

router.get("/mensalSetembroDiscoServidor23", function (req, res) {
    analiseController.mensalSetembroDiscoServidor23(req, res);
});

router.get("/mensalOutubroDiscoServidor23", function (req, res) {
    analiseController.mensalOutubroDiscoServidor23(req, res);
});

router.get("/mensalNovembroDiscoServidor23", function (req, res) {
    analiseController.mensalNovembroDiscoServidor23(req, res);
});

router.get("/mensalDezembroDiscoServidor23", function (req, res) {
    analiseController.mensalDezembroDiscoServidor23(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor23", function (req, res) {
    analiseController.limiteJaneiroCpuServidor23(req, res);
});

router.get("/limiteFevereiroCpuServidor23", function (req, res) {
    analiseController.limiteFevereiroCpuServidor23(req, res);
});

router.get("/limiteMarcoCpuServidor23", function (req, res) {
    analiseController.limiteMarcoCpuServidor23(req, res);
});

router.get("/limiteAbrilCpuServidor23", function (req, res) {
    analiseController.limiteAbrilCpuServidor23(req, res);
});

router.get("/limiteMaioCpuServidor23", function (req, res) {
    analiseController.limiteMaioCpuServidor23(req, res);
});

router.get("/limiteJunhoCpuServidor23", function (req, res) {
    analiseController.limiteJunhoCpuServidor23(req, res);
});

router.get("/limiteJulhoCpuServidor23", function (req, res) {
    analiseController.limiteJulhoCpuServidor23(req, res);
});

router.get("/limiteAgostoCpuServidor23", function (req, res) {
    analiseController.limiteAgostoCpuServidor23(req, res);
});

router.get("/limiteSetembroCpuServidor23", function (req, res) {
    analiseController.limiteSetembroCpuServidor23(req, res);
});

router.get("/limiteOutubroCpuServidor23", function (req, res) {
    analiseController.limiteOutubroCpuServidor23(req, res);
});

router.get("/limiteNovembroCpuServidor23", function (req, res) {
    analiseController.limiteNovembroCpuServidor23(req, res);
});

router.get("/limiteDezembroCpuServidor23", function (req, res) {
    analiseController.limiteDezembroCpuServidor23(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor23", function (req, res) {
    analiseController.limiteJaneiroRamServidor23(req, res);
});

router.get("/limiteFevereiroRamServidor23", function (req, res) {
    analiseController.limiteFevereiroRamServidor23(req, res);
});

router.get("/limiteMarcoRamServidor23", function (req, res) {
    analiseController.limiteMarcoRamServidor23(req, res);
});

router.get("/limiteAbrilRamServidor23", function (req, res) {
    analiseController.limiteAbrilRamServidor23(req, res);
});

router.get("/limiteMaioRamServidor23", function (req, res) {
    analiseController.limiteMaioRamServidor23(req, res);
});

router.get("/limiteJunhoRamServidor23", function (req, res) {
    analiseController.limiteJunhoRamServidor23(req, res);
});

router.get("/limiteJulhoRamServidor23", function (req, res) {
    analiseController.limiteJulhoRamServidor23(req, res);
});

router.get("/limiteAgostoRamServidor23", function (req, res) {
    analiseController.limiteAgostoRamServidor23(req, res);
});

router.get("/limiteSetembroRamServidor23", function (req, res) {
    analiseController.limiteSetembroRamServidor23(req, res);
});

router.get("/limiteOutubroRamServidor23", function (req, res) {
    analiseController.limiteOutubroRamServidor23(req, res);
});

router.get("/limiteNovembroRamServidor23", function (req, res) {
    analiseController.limiteNovembroRamServidor23(req, res);
});

router.get("/limiteDezembroRamServidor23", function (req, res) {
    analiseController.limiteDezembroRamServidor23(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor23", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor23(req, res);
});

router.get("/limiteFevereiroDiscoServidor23", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor23(req, res);
});

router.get("/limiteMarcoDiscoServidor23", function (req, res) {
    analiseController.limiteMarcoDiscoServidor23(req, res);
});

router.get("/limiteAbrilDiscoServidor23", function (req, res) {
    analiseController.limiteAbrilDiscoServidor23(req, res);
});

router.get("/limiteMaioDiscoServidor23", function (req, res) {
    analiseController.limiteMaioDiscoServidor23(req, res);
});

router.get("/limiteJunhoDiscoServidor23", function (req, res) {
    analiseController.limiteJunhoDiscoServidor23(req, res);
});

router.get("/limiteJulhoDiscoServidor23", function (req, res) {
    analiseController.limiteJulhoDiscoServidor23(req, res);
});

router.get("/limiteAgostoDiscoServidor23", function (req, res) {
    analiseController.limiteAgostoDiscoServidor23(req, res);
});

router.get("/limiteSetembroDiscoServidor23", function (req, res) {
    analiseController.limiteSetembroDiscoServidor23(req, res);
});

router.get("/limiteOutubroDiscoServidor23", function (req, res) {
    analiseController.limiteOutubroDiscoServidor23(req, res);
});

router.get("/limiteNovembroDiscoServidor23", function (req, res) {
    analiseController.limiteNovembroDiscoServidor23(req, res);
});

router.get("/limiteDezembroDiscoServidor23", function (req, res) {
    analiseController.limiteDezembroDiscoServidor23(req, res);
});

router.get("/mensalJaneiroCpuServidor24", function (req, res) {
    analiseController.mensalJaneiroCpuServidor24(req, res);
});

router.get("/mensalFevereiroCpuServidor24", function (req, res) {
    analiseController.mensalFevereiroCpuServidor24(req, res);
});

router.get("/mensalMarcoCpuServidor24", function (req, res) {
    analiseController.mensalMarcoCpuServidor24(req, res);
});

router.get("/mensalAbrilCpuServidor24", function (req, res) {
    analiseController.mensalAbrilCpuServidor24(req, res);
});

router.get("/mensalMaioCpuServidor24", function (req, res) {
    analiseController.mensalMaioCpuServidor24(req, res);
});

router.get("/mensalJunhoCpuServidor24", function (req, res) {
    analiseController.mensalJunhoCpuServidor24(req, res);
});

router.get("/mensalJulhoCpuServidor24", function (req, res) {
    analiseController.mensalJulhoCpuServidor24(req, res);
});

router.get("/mensalAgostoCpuServidor24", function (req, res) {
    analiseController.mensalAgostoCpuServidor24(req, res);
});

router.get("/mensalSetembroCpuServidor24", function (req, res) {
    analiseController.mensalSetembroCpuServidor24(req, res);
});

router.get("/mensalOutubroCpuServidor24", function (req, res) {
    analiseController.mensalOutubroCpuServidor24(req, res);
});

router.get("/mensalNovembroCpuServidor24", function (req, res) {
    analiseController.mensalNovembroCpuServidor24(req, res);
});

router.get("/mensalDezembroCpuServidor24", function (req, res) {
    analiseController.mensalDezembroCpuServidor24(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor24", function (req, res) {
    analiseController.mensalJaneiroRamServidor24(req, res);
});

router.get("/mensalFevereiroRamServidor24", function (req, res) {
    analiseController.mensalFevereiroRamServidor24(req, res);
});

router.get("/mensalMarcoRamServidor24", function (req, res) {
    analiseController.mensalMarcoRamServidor24(req, res);
});

router.get("/mensalAbrilRamServidor24", function (req, res) {
    analiseController.mensalAbrilRamServidor24(req, res);
});

router.get("/mensalMaioRamServidor24", function (req, res) {
    analiseController.mensalMaioRamServidor24(req, res);
});

router.get("/mensalJunhoRamServidor24", function (req, res) {
    analiseController.mensalJunhoRamServidor24(req, res);
});

router.get("/mensalJulhoRamServidor24", function (req, res) {
    analiseController.mensalJulhoRamServidor24(req, res);
});

router.get("/mensalAgostoRamServidor24", function (req, res) {
    analiseController.mensalAgostoRamServidor24(req, res);
});

router.get("/mensalSetembroRamServidor24", function (req, res) {
    analiseController.mensalSetembroRamServidor24(req, res);
});

router.get("/mensalOutubroRamServidor24", function (req, res) {
    analiseController.mensalOutubroRamServidor24(req, res);
});

router.get("/mensalNovembroRamServidor24", function (req, res) {
    analiseController.mensalNovembroRamServidor24(req, res);
});

router.get("/mensalDezembroRamServidor24", function (req, res) {
    analiseController.mensalDezembroRamServidor24(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor24", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor24(req, res);
});

router.get("/mensalFevereiroDiscoServidor24", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor24(req, res);
});

router.get("/mensalMarcoDiscoServidor24", function (req, res) {
    analiseController.mensalMarcoDiscoServidor24(req, res);
});

router.get("/mensalAbrilDiscoServidor24", function (req, res) {
    analiseController.mensalAbrilDiscoServidor24(req, res);
});

router.get("/mensalMaioDiscoServidor24", function (req, res) {
    analiseController.mensalMaioDiscoServidor24(req, res);
});

router.get("/mensalJunhoDiscoServidor24", function (req, res) {
    analiseController.mensalJunhoDiscoServidor24(req, res);
});

router.get("/mensalJulhoDiscoServidor24", function (req, res) {
    analiseController.mensalJulhoDiscoServidor24(req, res);
});

router.get("/mensalAgostoDiscoServidor24", function (req, res) {
    analiseController.mensalAgostoDiscoServidor24(req, res);
});

router.get("/mensalSetembroDiscoServidor24", function (req, res) {
    analiseController.mensalSetembroDiscoServidor24(req, res);
});

router.get("/mensalOutubroDiscoServidor24", function (req, res) {
    analiseController.mensalOutubroDiscoServidor24(req, res);
});

router.get("/mensalNovembroDiscoServidor24", function (req, res) {
    analiseController.mensalNovembroDiscoServidor24(req, res);
});

router.get("/mensalDezembroDiscoServidor24", function (req, res) {
    analiseController.mensalDezembroDiscoServidor24(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor24", function (req, res) {
    analiseController.limiteJaneiroCpuServidor24(req, res);
});

router.get("/limiteFevereiroCpuServidor24", function (req, res) {
    analiseController.limiteFevereiroCpuServidor24(req, res);
});

router.get("/limiteMarcoCpuServidor24", function (req, res) {
    analiseController.limiteMarcoCpuServidor24(req, res);
});

router.get("/limiteAbrilCpuServidor24", function (req, res) {
    analiseController.limiteAbrilCpuServidor24(req, res);
});

router.get("/limiteMaioCpuServidor24", function (req, res) {
    analiseController.limiteMaioCpuServidor24(req, res);
});

router.get("/limiteJunhoCpuServidor24", function (req, res) {
    analiseController.limiteJunhoCpuServidor24(req, res);
});

router.get("/limiteJulhoCpuServidor24", function (req, res) {
    analiseController.limiteJulhoCpuServidor24(req, res);
});

router.get("/limiteAgostoCpuServidor24", function (req, res) {
    analiseController.limiteAgostoCpuServidor24(req, res);
});

router.get("/limiteSetembroCpuServidor24", function (req, res) {
    analiseController.limiteSetembroCpuServidor24(req, res);
});

router.get("/limiteOutubroCpuServidor24", function (req, res) {
    analiseController.limiteOutubroCpuServidor24(req, res);
});

router.get("/limiteNovembroCpuServidor24", function (req, res) {
    analiseController.limiteNovembroCpuServidor24(req, res);
});

router.get("/limiteDezembroCpuServidor24", function (req, res) {
    analiseController.limiteDezembroCpuServidor24(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor24", function (req, res) {
    analiseController.limiteJaneiroRamServidor24(req, res);
});

router.get("/limiteFevereiroRamServidor24", function (req, res) {
    analiseController.limiteFevereiroRamServidor24(req, res);
});

router.get("/limiteMarcoRamServidor24", function (req, res) {
    analiseController.limiteMarcoRamServidor24(req, res);
});

router.get("/limiteAbrilRamServidor24", function (req, res) {
    analiseController.limiteAbrilRamServidor24(req, res);
});

router.get("/limiteMaioRamServidor24", function (req, res) {
    analiseController.limiteMaioRamServidor24(req, res);
});

router.get("/limiteJunhoRamServidor24", function (req, res) {
    analiseController.limiteJunhoRamServidor24(req, res);
});

router.get("/limiteJulhoRamServidor24", function (req, res) {
    analiseController.limiteJulhoRamServidor24(req, res);
});

router.get("/limiteAgostoRamServidor24", function (req, res) {
    analiseController.limiteAgostoRamServidor24(req, res);
});

router.get("/limiteSetembroRamServidor24", function (req, res) {
    analiseController.limiteSetembroRamServidor24(req, res);
});

router.get("/limiteOutubroRamServidor24", function (req, res) {
    analiseController.limiteOutubroRamServidor24(req, res);
});

router.get("/limiteNovembroRamServidor24", function (req, res) {
    analiseController.limiteNovembroRamServidor24(req, res);
});

router.get("/limiteDezembroRamServidor24", function (req, res) {
    analiseController.limiteDezembroRamServidor24(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor24", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor24(req, res);
});

router.get("/limiteFevereiroDiscoServidor24", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor24(req, res);
});

router.get("/limiteMarcoDiscoServidor24", function (req, res) {
    analiseController.limiteMarcoDiscoServidor24(req, res);
});

router.get("/limiteAbrilDiscoServidor24", function (req, res) {
    analiseController.limiteAbrilDiscoServidor24(req, res);
});

router.get("/limiteMaioDiscoServidor24", function (req, res) {
    analiseController.limiteMaioDiscoServidor24(req, res);
});

router.get("/limiteJunhoDiscoServidor24", function (req, res) {
    analiseController.limiteJunhoDiscoServidor24(req, res);
});

router.get("/limiteJulhoDiscoServidor24", function (req, res) {
    analiseController.limiteJulhoDiscoServidor24(req, res);
});

router.get("/limiteAgostoDiscoServidor24", function (req, res) {
    analiseController.limiteAgostoDiscoServidor24(req, res);
});

router.get("/limiteSetembroDiscoServidor24", function (req, res) {
    analiseController.limiteSetembroDiscoServidor24(req, res);
});

router.get("/limiteOutubroDiscoServidor24", function (req, res) {
    analiseController.limiteOutubroDiscoServidor24(req, res);
});

router.get("/limiteNovembroDiscoServidor24", function (req, res) {
    analiseController.limiteNovembroDiscoServidor24(req, res);
});

router.get("/limiteDezembroDiscoServidor24", function (req, res) {
    analiseController.limiteDezembroDiscoServidor24(req, res);
});

router.get("/mensalJaneiroCpuServidor25", function (req, res) {
    analiseController.mensalJaneiroCpuServidor25(req, res);
});

router.get("/mensalFevereiroCpuServidor25", function (req, res) {
    analiseController.mensalFevereiroCpuServidor25(req, res);
});

router.get("/mensalMarcoCpuServidor25", function (req, res) {
    analiseController.mensalMarcoCpuServidor25(req, res);
});

router.get("/mensalAbrilCpuServidor25", function (req, res) {
    analiseController.mensalAbrilCpuServidor25(req, res);
});

router.get("/mensalMaioCpuServidor25", function (req, res) {
    analiseController.mensalMaioCpuServidor25(req, res);
});

router.get("/mensalJunhoCpuServidor25", function (req, res) {
    analiseController.mensalJunhoCpuServidor25(req, res);
});

router.get("/mensalJulhoCpuServidor25", function (req, res) {
    analiseController.mensalJulhoCpuServidor25(req, res);
});

router.get("/mensalAgostoCpuServidor25", function (req, res) {
    analiseController.mensalAgostoCpuServidor25(req, res);
});

router.get("/mensalSetembroCpuServidor25", function (req, res) {
    analiseController.mensalSetembroCpuServidor25(req, res);
});

router.get("/mensalOutubroCpuServidor25", function (req, res) {
    analiseController.mensalOutubroCpuServidor25(req, res);
});

router.get("/mensalNovembroCpuServidor25", function (req, res) {
    analiseController.mensalNovembroCpuServidor25(req, res);
});

router.get("/mensalDezembroCpuServidor25", function (req, res) {
    analiseController.mensalDezembroCpuServidor25(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor25", function (req, res) {
    analiseController.mensalJaneiroRamServidor25(req, res);
});

router.get("/mensalFevereiroRamServidor25", function (req, res) {
    analiseController.mensalFevereiroRamServidor25(req, res);
});

router.get("/mensalMarcoRamServidor25", function (req, res) {
    analiseController.mensalMarcoRamServidor25(req, res);
});

router.get("/mensalAbrilRamServidor25", function (req, res) {
    analiseController.mensalAbrilRamServidor25(req, res);
});

router.get("/mensalMaioRamServidor25", function (req, res) {
    analiseController.mensalMaioRamServidor25(req, res);
});

router.get("/mensalJunhoRamServidor25", function (req, res) {
    analiseController.mensalJunhoRamServidor25(req, res);
});

router.get("/mensalJulhoRamServidor25", function (req, res) {
    analiseController.mensalJulhoRamServidor25(req, res);
});

router.get("/mensalAgostoRamServidor25", function (req, res) {
    analiseController.mensalAgostoRamServidor25(req, res);
});

router.get("/mensalSetembroRamServidor25", function (req, res) {
    analiseController.mensalSetembroRamServidor25(req, res);
});

router.get("/mensalOutubroRamServidor25", function (req, res) {
    analiseController.mensalOutubroRamServidor25(req, res);
});

router.get("/mensalNovembroRamServidor25", function (req, res) {
    analiseController.mensalNovembroRamServidor25(req, res);
});

router.get("/mensalDezembroRamServidor25", function (req, res) {
    analiseController.mensalDezembroRamServidor25(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor25", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor25(req, res);
});

router.get("/mensalFevereiroDiscoServidor25", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor25(req, res);
});

router.get("/mensalMarcoDiscoServidor25", function (req, res) {
    analiseController.mensalMarcoDiscoServidor25(req, res);
});

router.get("/mensalAbrilDiscoServidor25", function (req, res) {
    analiseController.mensalAbrilDiscoServidor25(req, res);
});

router.get("/mensalMaioDiscoServidor25", function (req, res) {
    analiseController.mensalMaioDiscoServidor25(req, res);
});

router.get("/mensalJunhoDiscoServidor25", function (req, res) {
    analiseController.mensalJunhoDiscoServidor25(req, res);
});

router.get("/mensalJulhoDiscoServidor25", function (req, res) {
    analiseController.mensalJulhoDiscoServidor25(req, res);
});

router.get("/mensalAgostoDiscoServidor25", function (req, res) {
    analiseController.mensalAgostoDiscoServidor25(req, res);
});

router.get("/mensalSetembroDiscoServidor25", function (req, res) {
    analiseController.mensalSetembroDiscoServidor25(req, res);
});

router.get("/mensalOutubroDiscoServidor25", function (req, res) {
    analiseController.mensalOutubroDiscoServidor25(req, res);
});

router.get("/mensalNovembroDiscoServidor25", function (req, res) {
    analiseController.mensalNovembroDiscoServidor25(req, res);
});

router.get("/mensalDezembroDiscoServidor25", function (req, res) {
    analiseController.mensalDezembroDiscoServidor25(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor25", function (req, res) {
    analiseController.limiteJaneiroCpuServidor25(req, res);
});

router.get("/limiteFevereiroCpuServidor25", function (req, res) {
    analiseController.limiteFevereiroCpuServidor25(req, res);
});

router.get("/limiteMarcoCpuServidor25", function (req, res) {
    analiseController.limiteMarcoCpuServidor25(req, res);
});

router.get("/limiteAbrilCpuServidor25", function (req, res) {
    analiseController.limiteAbrilCpuServidor25(req, res);
});

router.get("/limiteMaioCpuServidor25", function (req, res) {
    analiseController.limiteMaioCpuServidor25(req, res);
});

router.get("/limiteJunhoCpuServidor25", function (req, res) {
    analiseController.limiteJunhoCpuServidor25(req, res);
});

router.get("/limiteJulhoCpuServidor25", function (req, res) {
    analiseController.limiteJulhoCpuServidor25(req, res);
});

router.get("/limiteAgostoCpuServidor25", function (req, res) {
    analiseController.limiteAgostoCpuServidor25(req, res);
});

router.get("/limiteSetembroCpuServidor25", function (req, res) {
    analiseController.limiteSetembroCpuServidor25(req, res);
});

router.get("/limiteOutubroCpuServidor25", function (req, res) {
    analiseController.limiteOutubroCpuServidor25(req, res);
});

router.get("/limiteNovembroCpuServidor25", function (req, res) {
    analiseController.limiteNovembroCpuServidor25(req, res);
});

router.get("/limiteDezembroCpuServidor25", function (req, res) {
    analiseController.limiteDezembroCpuServidor25(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor25", function (req, res) {
    analiseController.limiteJaneiroRamServidor25(req, res);
});

router.get("/limiteFevereiroRamServidor25", function (req, res) {
    analiseController.limiteFevereiroRamServidor25(req, res);
});

router.get("/limiteMarcoRamServidor25", function (req, res) {
    analiseController.limiteMarcoRamServidor25(req, res);
});

router.get("/limiteAbrilRamServidor25", function (req, res) {
    analiseController.limiteAbrilRamServidor25(req, res);
});

router.get("/limiteMaioRamServidor25", function (req, res) {
    analiseController.limiteMaioRamServidor25(req, res);
});

router.get("/limiteJunhoRamServidor25", function (req, res) {
    analiseController.limiteJunhoRamServidor25(req, res);
});

router.get("/limiteJulhoRamServidor25", function (req, res) {
    analiseController.limiteJulhoRamServidor25(req, res);
});

router.get("/limiteAgostoRamServidor25", function (req, res) {
    analiseController.limiteAgostoRamServidor25(req, res);
});

router.get("/limiteSetembroRamServidor25", function (req, res) {
    analiseController.limiteSetembroRamServidor25(req, res);
});

router.get("/limiteOutubroRamServidor25", function (req, res) {
    analiseController.limiteOutubroRamServidor25(req, res);
});

router.get("/limiteNovembroRamServidor25", function (req, res) {
    analiseController.limiteNovembroRamServidor25(req, res);
});

router.get("/limiteDezembroRamServidor25", function (req, res) {
    analiseController.limiteDezembroRamServidor25(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor25", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor25(req, res);
});

router.get("/limiteFevereiroDiscoServidor25", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor25(req, res);
});

router.get("/limiteMarcoDiscoServidor25", function (req, res) {
    analiseController.limiteMarcoDiscoServidor25(req, res);
});

router.get("/limiteAbrilDiscoServidor25", function (req, res) {
    analiseController.limiteAbrilDiscoServidor25(req, res);
});

router.get("/limiteMaioDiscoServidor25", function (req, res) {
    analiseController.limiteMaioDiscoServidor25(req, res);
});

router.get("/limiteJunhoDiscoServidor25", function (req, res) {
    analiseController.limiteJunhoDiscoServidor25(req, res);
});

router.get("/limiteJulhoDiscoServidor25", function (req, res) {
    analiseController.limiteJulhoDiscoServidor25(req, res);
});

router.get("/limiteAgostoDiscoServidor25", function (req, res) {
    analiseController.limiteAgostoDiscoServidor25(req, res);
});

router.get("/limiteSetembroDiscoServidor25", function (req, res) {
    analiseController.limiteSetembroDiscoServidor25(req, res);
});

router.get("/limiteOutubroDiscoServidor25", function (req, res) {
    analiseController.limiteOutubroDiscoServidor25(req, res);
});

router.get("/limiteNovembroDiscoServidor25", function (req, res) {
    analiseController.limiteNovembroDiscoServidor25(req, res);
});

router.get("/limiteDezembroDiscoServidor25", function (req, res) {
    analiseController.limiteDezembroDiscoServidor25(req, res);
});

router.get("/mensalJaneiroCpuServidor26", function (req, res) {
    analiseController.mensalJaneiroCpuServidor26(req, res);
});

router.get("/mensalFevereiroCpuServidor26", function (req, res) {
    analiseController.mensalFevereiroCpuServidor26(req, res);
});

router.get("/mensalMarcoCpuServidor26", function (req, res) {
    analiseController.mensalMarcoCpuServidor26(req, res);
});

router.get("/mensalAbrilCpuServidor26", function (req, res) {
    analiseController.mensalAbrilCpuServidor26(req, res);
});

router.get("/mensalMaioCpuServidor26", function (req, res) {
    analiseController.mensalMaioCpuServidor26(req, res);
});

router.get("/mensalJunhoCpuServidor26", function (req, res) {
    analiseController.mensalJunhoCpuServidor26(req, res);
});

router.get("/mensalJulhoCpuServidor26", function (req, res) {
    analiseController.mensalJulhoCpuServidor26(req, res);
});

router.get("/mensalAgostoCpuServidor26", function (req, res) {
    analiseController.mensalAgostoCpuServidor26(req, res);
});

router.get("/mensalSetembroCpuServidor26", function (req, res) {
    analiseController.mensalSetembroCpuServidor26(req, res);
});

router.get("/mensalOutubroCpuServidor26", function (req, res) {
    analiseController.mensalOutubroCpuServidor26(req, res);
});

router.get("/mensalNovembroCpuServidor26", function (req, res) {
    analiseController.mensalNovembroCpuServidor26(req, res);
});

router.get("/mensalDezembroCpuServidor26", function (req, res) {
    analiseController.mensalDezembroCpuServidor26(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor26", function (req, res) {
    analiseController.mensalJaneiroRamServidor26(req, res);
});

router.get("/mensalFevereiroRamServidor26", function (req, res) {
    analiseController.mensalFevereiroRamServidor26(req, res);
});

router.get("/mensalMarcoRamServidor26", function (req, res) {
    analiseController.mensalMarcoRamServidor26(req, res);
});

router.get("/mensalAbrilRamServidor26", function (req, res) {
    analiseController.mensalAbrilRamServidor26(req, res);
});

router.get("/mensalMaioRamServidor26", function (req, res) {
    analiseController.mensalMaioRamServidor26(req, res);
});

router.get("/mensalJunhoRamServidor26", function (req, res) {
    analiseController.mensalJunhoRamServidor26(req, res);
});

router.get("/mensalJulhoRamServidor26", function (req, res) {
    analiseController.mensalJulhoRamServidor26(req, res);
});

router.get("/mensalAgostoRamServidor26", function (req, res) {
    analiseController.mensalAgostoRamServidor26(req, res);
});

router.get("/mensalSetembroRamServidor26", function (req, res) {
    analiseController.mensalSetembroRamServidor26(req, res);
});

router.get("/mensalOutubroRamServidor26", function (req, res) {
    analiseController.mensalOutubroRamServidor26(req, res);
});

router.get("/mensalNovembroRamServidor26", function (req, res) {
    analiseController.mensalNovembroRamServidor26(req, res);
});

router.get("/mensalDezembroRamServidor26", function (req, res) {
    analiseController.mensalDezembroRamServidor26(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor26", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor26(req, res);
});

router.get("/mensalFevereiroDiscoServidor26", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor26(req, res);
});

router.get("/mensalMarcoDiscoServidor26", function (req, res) {
    analiseController.mensalMarcoDiscoServidor26(req, res);
});

router.get("/mensalAbrilDiscoServidor26", function (req, res) {
    analiseController.mensalAbrilDiscoServidor26(req, res);
});

router.get("/mensalMaioDiscoServidor26", function (req, res) {
    analiseController.mensalMaioDiscoServidor26(req, res);
});

router.get("/mensalJunhoDiscoServidor26", function (req, res) {
    analiseController.mensalJunhoDiscoServidor26(req, res);
});

router.get("/mensalJulhoDiscoServidor26", function (req, res) {
    analiseController.mensalJulhoDiscoServidor26(req, res);
});

router.get("/mensalAgostoDiscoServidor26", function (req, res) {
    analiseController.mensalAgostoDiscoServidor26(req, res);
});

router.get("/mensalSetembroDiscoServidor26", function (req, res) {
    analiseController.mensalSetembroDiscoServidor26(req, res);
});

router.get("/mensalOutubroDiscoServidor26", function (req, res) {
    analiseController.mensalOutubroDiscoServidor26(req, res);
});

router.get("/mensalNovembroDiscoServidor26", function (req, res) {
    analiseController.mensalNovembroDiscoServidor26(req, res);
});

router.get("/mensalDezembroDiscoServidor26", function (req, res) {
    analiseController.mensalDezembroDiscoServidor26(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor26", function (req, res) {
    analiseController.limiteJaneiroCpuServidor26(req, res);
});

router.get("/limiteFevereiroCpuServidor26", function (req, res) {
    analiseController.limiteFevereiroCpuServidor26(req, res);
});

router.get("/limiteMarcoCpuServidor26", function (req, res) {
    analiseController.limiteMarcoCpuServidor26(req, res);
});

router.get("/limiteAbrilCpuServidor26", function (req, res) {
    analiseController.limiteAbrilCpuServidor26(req, res);
});

router.get("/limiteMaioCpuServidor26", function (req, res) {
    analiseController.limiteMaioCpuServidor26(req, res);
});

router.get("/limiteJunhoCpuServidor26", function (req, res) {
    analiseController.limiteJunhoCpuServidor26(req, res);
});

router.get("/limiteJulhoCpuServidor26", function (req, res) {
    analiseController.limiteJulhoCpuServidor26(req, res);
});

router.get("/limiteAgostoCpuServidor26", function (req, res) {
    analiseController.limiteAgostoCpuServidor26(req, res);
});

router.get("/limiteSetembroCpuServidor26", function (req, res) {
    analiseController.limiteSetembroCpuServidor26(req, res);
});

router.get("/limiteOutubroCpuServidor26", function (req, res) {
    analiseController.limiteOutubroCpuServidor26(req, res);
});

router.get("/limiteNovembroCpuServidor26", function (req, res) {
    analiseController.limiteNovembroCpuServidor26(req, res);
});

router.get("/limiteDezembroCpuServidor26", function (req, res) {
    analiseController.limiteDezembroCpuServidor26(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor26", function (req, res) {
    analiseController.limiteJaneiroRamServidor26(req, res);
});

router.get("/limiteFevereiroRamServidor26", function (req, res) {
    analiseController.limiteFevereiroRamServidor26(req, res);
});

router.get("/limiteMarcoRamServidor26", function (req, res) {
    analiseController.limiteMarcoRamServidor26(req, res);
});

router.get("/limiteAbrilRamServidor26", function (req, res) {
    analiseController.limiteAbrilRamServidor26(req, res);
});

router.get("/limiteMaioRamServidor26", function (req, res) {
    analiseController.limiteMaioRamServidor26(req, res);
});

router.get("/limiteJunhoRamServidor26", function (req, res) {
    analiseController.limiteJunhoRamServidor26(req, res);
});

router.get("/limiteJulhoRamServidor26", function (req, res) {
    analiseController.limiteJulhoRamServidor26(req, res);
});

router.get("/limiteAgostoRamServidor26", function (req, res) {
    analiseController.limiteAgostoRamServidor26(req, res);
});

router.get("/limiteSetembroRamServidor26", function (req, res) {
    analiseController.limiteSetembroRamServidor26(req, res);
});

router.get("/limiteOutubroRamServidor26", function (req, res) {
    analiseController.limiteOutubroRamServidor26(req, res);
});

router.get("/limiteNovembroRamServidor26", function (req, res) {
    analiseController.limiteNovembroRamServidor26(req, res);
});

router.get("/limiteDezembroRamServidor26", function (req, res) {
    analiseController.limiteDezembroRamServidor26(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor26", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor26(req, res);
});

router.get("/limiteFevereiroDiscoServidor26", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor26(req, res);
});

router.get("/limiteMarcoDiscoServidor26", function (req, res) {
    analiseController.limiteMarcoDiscoServidor26(req, res);
});

router.get("/limiteAbrilDiscoServidor26", function (req, res) {
    analiseController.limiteAbrilDiscoServidor26(req, res);
});

router.get("/limiteMaioDiscoServidor26", function (req, res) {
    analiseController.limiteMaioDiscoServidor26(req, res);
});

router.get("/limiteJunhoDiscoServidor26", function (req, res) {
    analiseController.limiteJunhoDiscoServidor26(req, res);
});

router.get("/limiteJulhoDiscoServidor26", function (req, res) {
    analiseController.limiteJulhoDiscoServidor26(req, res);
});

router.get("/limiteAgostoDiscoServidor26", function (req, res) {
    analiseController.limiteAgostoDiscoServidor26(req, res);
});

router.get("/limiteSetembroDiscoServidor26", function (req, res) {
    analiseController.limiteSetembroDiscoServidor26(req, res);
});

router.get("/limiteOutubroDiscoServidor26", function (req, res) {
    analiseController.limiteOutubroDiscoServidor26(req, res);
});

router.get("/limiteNovembroDiscoServidor26", function (req, res) {
    analiseController.limiteNovembroDiscoServidor26(req, res);
});

router.get("/limiteDezembroDiscoServidor26", function (req, res) {
    analiseController.limiteDezembroDiscoServidor26(req, res);
});

router.get("/mensalJaneiroCpuServidor27", function (req, res) {
    analiseController.mensalJaneiroCpuServidor27(req, res);
});

router.get("/mensalFevereiroCpuServidor27", function (req, res) {
    analiseController.mensalFevereiroCpuServidor27(req, res);
});

router.get("/mensalMarcoCpuServidor27", function (req, res) {
    analiseController.mensalMarcoCpuServidor27(req, res);
});

router.get("/mensalAbrilCpuServidor27", function (req, res) {
    analiseController.mensalAbrilCpuServidor27(req, res);
});

router.get("/mensalMaioCpuServidor27", function (req, res) {
    analiseController.mensalMaioCpuServidor27(req, res);
});

router.get("/mensalJunhoCpuServidor27", function (req, res) {
    analiseController.mensalJunhoCpuServidor27(req, res);
});

router.get("/mensalJulhoCpuServidor27", function (req, res) {
    analiseController.mensalJulhoCpuServidor27(req, res);
});

router.get("/mensalAgostoCpuServidor27", function (req, res) {
    analiseController.mensalAgostoCpuServidor27(req, res);
});

router.get("/mensalSetembroCpuServidor27", function (req, res) {
    analiseController.mensalSetembroCpuServidor27(req, res);
});

router.get("/mensalOutubroCpuServidor27", function (req, res) {
    analiseController.mensalOutubroCpuServidor27(req, res);
});

router.get("/mensalNovembroCpuServidor27", function (req, res) {
    analiseController.mensalNovembroCpuServidor27(req, res);
});

router.get("/mensalDezembroCpuServidor27", function (req, res) {
    analiseController.mensalDezembroCpuServidor27(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor27", function (req, res) {
    analiseController.mensalJaneiroRamServidor27(req, res);
});

router.get("/mensalFevereiroRamServidor27", function (req, res) {
    analiseController.mensalFevereiroRamServidor27(req, res);
});

router.get("/mensalMarcoRamServidor27", function (req, res) {
    analiseController.mensalMarcoRamServidor27(req, res);
});

router.get("/mensalAbrilRamServidor27", function (req, res) {
    analiseController.mensalAbrilRamServidor27(req, res);
});

router.get("/mensalMaioRamServidor27", function (req, res) {
    analiseController.mensalMaioRamServidor27(req, res);
});

router.get("/mensalJunhoRamServidor27", function (req, res) {
    analiseController.mensalJunhoRamServidor27(req, res);
});

router.get("/mensalJulhoRamServidor27", function (req, res) {
    analiseController.mensalJulhoRamServidor27(req, res);
});

router.get("/mensalAgostoRamServidor27", function (req, res) {
    analiseController.mensalAgostoRamServidor27(req, res);
});

router.get("/mensalSetembroRamServidor27", function (req, res) {
    analiseController.mensalSetembroRamServidor27(req, res);
});

router.get("/mensalOutubroRamServidor27", function (req, res) {
    analiseController.mensalOutubroRamServidor27(req, res);
});

router.get("/mensalNovembroRamServidor27", function (req, res) {
    analiseController.mensalNovembroRamServidor27(req, res);
});

router.get("/mensalDezembroRamServidor27", function (req, res) {
    analiseController.mensalDezembroRamServidor27(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor27", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor27(req, res);
});

router.get("/mensalFevereiroDiscoServidor27", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor27(req, res);
});

router.get("/mensalMarcoDiscoServidor27", function (req, res) {
    analiseController.mensalMarcoDiscoServidor27(req, res);
});

router.get("/mensalAbrilDiscoServidor27", function (req, res) {
    analiseController.mensalAbrilDiscoServidor27(req, res);
});

router.get("/mensalMaioDiscoServidor27", function (req, res) {
    analiseController.mensalMaioDiscoServidor27(req, res);
});

router.get("/mensalJunhoDiscoServidor27", function (req, res) {
    analiseController.mensalJunhoDiscoServidor27(req, res);
});

router.get("/mensalJulhoDiscoServidor27", function (req, res) {
    analiseController.mensalJulhoDiscoServidor27(req, res);
});

router.get("/mensalAgostoDiscoServidor27", function (req, res) {
    analiseController.mensalAgostoDiscoServidor27(req, res);
});

router.get("/mensalSetembroDiscoServidor27", function (req, res) {
    analiseController.mensalSetembroDiscoServidor27(req, res);
});

router.get("/mensalOutubroDiscoServidor27", function (req, res) {
    analiseController.mensalOutubroDiscoServidor27(req, res);
});

router.get("/mensalNovembroDiscoServidor27", function (req, res) {
    analiseController.mensalNovembroDiscoServidor27(req, res);
});

router.get("/mensalDezembroDiscoServidor27", function (req, res) {
    analiseController.mensalDezembroDiscoServidor27(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor27", function (req, res) {
    analiseController.limiteJaneiroCpuServidor27(req, res);
});

router.get("/limiteFevereiroCpuServidor27", function (req, res) {
    analiseController.limiteFevereiroCpuServidor27(req, res);
});

router.get("/limiteMarcoCpuServidor27", function (req, res) {
    analiseController.limiteMarcoCpuServidor27(req, res);
});

router.get("/limiteAbrilCpuServidor27", function (req, res) {
    analiseController.limiteAbrilCpuServidor27(req, res);
});

router.get("/limiteMaioCpuServidor27", function (req, res) {
    analiseController.limiteMaioCpuServidor27(req, res);
});

router.get("/limiteJunhoCpuServidor27", function (req, res) {
    analiseController.limiteJunhoCpuServidor27(req, res);
});

router.get("/limiteJulhoCpuServidor27", function (req, res) {
    analiseController.limiteJulhoCpuServidor27(req, res);
});

router.get("/limiteAgostoCpuServidor27", function (req, res) {
    analiseController.limiteAgostoCpuServidor27(req, res);
});

router.get("/limiteSetembroCpuServidor27", function (req, res) {
    analiseController.limiteSetembroCpuServidor27(req, res);
});

router.get("/limiteOutubroCpuServidor27", function (req, res) {
    analiseController.limiteOutubroCpuServidor27(req, res);
});

router.get("/limiteNovembroCpuServidor27", function (req, res) {
    analiseController.limiteNovembroCpuServidor27(req, res);
});

router.get("/limiteDezembroCpuServidor27", function (req, res) {
    analiseController.limiteDezembroCpuServidor27(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor27", function (req, res) {
    analiseController.limiteJaneiroRamServidor27(req, res);
});

router.get("/limiteFevereiroRamServidor27", function (req, res) {
    analiseController.limiteFevereiroRamServidor27(req, res);
});

router.get("/limiteMarcoRamServidor27", function (req, res) {
    analiseController.limiteMarcoRamServidor27(req, res);
});

router.get("/limiteAbrilRamServidor27", function (req, res) {
    analiseController.limiteAbrilRamServidor27(req, res);
});

router.get("/limiteMaioRamServidor27", function (req, res) {
    analiseController.limiteMaioRamServidor27(req, res);
});

router.get("/limiteJunhoRamServidor27", function (req, res) {
    analiseController.limiteJunhoRamServidor27(req, res);
});

router.get("/limiteJulhoRamServidor27", function (req, res) {
    analiseController.limiteJulhoRamServidor27(req, res);
});

router.get("/limiteAgostoRamServidor27", function (req, res) {
    analiseController.limiteAgostoRamServidor27(req, res);
});

router.get("/limiteSetembroRamServidor27", function (req, res) {
    analiseController.limiteSetembroRamServidor27(req, res);
});

router.get("/limiteOutubroRamServidor27", function (req, res) {
    analiseController.limiteOutubroRamServidor27(req, res);
});

router.get("/limiteNovembroRamServidor27", function (req, res) {
    analiseController.limiteNovembroRamServidor27(req, res);
});

router.get("/limiteDezembroRamServidor27", function (req, res) {
    analiseController.limiteDezembroRamServidor27(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor27", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor27(req, res);
});

router.get("/limiteFevereiroDiscoServidor27", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor27(req, res);
});

router.get("/limiteMarcoDiscoServidor27", function (req, res) {
    analiseController.limiteMarcoDiscoServidor27(req, res);
});

router.get("/limiteAbrilDiscoServidor27", function (req, res) {
    analiseController.limiteAbrilDiscoServidor27(req, res);
});

router.get("/limiteMaioDiscoServidor27", function (req, res) {
    analiseController.limiteMaioDiscoServidor27(req, res);
});

router.get("/limiteJunhoDiscoServidor27", function (req, res) {
    analiseController.limiteJunhoDiscoServidor27(req, res);
});

router.get("/limiteJulhoDiscoServidor27", function (req, res) {
    analiseController.limiteJulhoDiscoServidor27(req, res);
});

router.get("/limiteAgostoDiscoServidor27", function (req, res) {
    analiseController.limiteAgostoDiscoServidor27(req, res);
});

router.get("/limiteSetembroDiscoServidor27", function (req, res) {
    analiseController.limiteSetembroDiscoServidor27(req, res);
});

router.get("/limiteOutubroDiscoServidor27", function (req, res) {
    analiseController.limiteOutubroDiscoServidor27(req, res);
});

router.get("/limiteNovembroDiscoServidor27", function (req, res) {
    analiseController.limiteNovembroDiscoServidor27(req, res);
});

router.get("/limiteDezembroDiscoServidor27", function (req, res) {
    analiseController.limiteDezembroDiscoServidor27(req, res);
});

router.get("/mensalJaneiroCpuServidor28", function (req, res) {
    analiseController.mensalJaneiroCpuServidor28(req, res);
});

router.get("/mensalFevereiroCpuServidor28", function (req, res) {
    analiseController.mensalFevereiroCpuServidor28(req, res);
});

router.get("/mensalMarcoCpuServidor28", function (req, res) {
    analiseController.mensalMarcoCpuServidor28(req, res);
});

router.get("/mensalAbrilCpuServidor28", function (req, res) {
    analiseController.mensalAbrilCpuServidor28(req, res);
});

router.get("/mensalMaioCpuServidor28", function (req, res) {
    analiseController.mensalMaioCpuServidor28(req, res);
});

router.get("/mensalJunhoCpuServidor28", function (req, res) {
    analiseController.mensalJunhoCpuServidor28(req, res);
});

router.get("/mensalJulhoCpuServidor28", function (req, res) {
    analiseController.mensalJulhoCpuServidor28(req, res);
});

router.get("/mensalAgostoCpuServidor28", function (req, res) {
    analiseController.mensalAgostoCpuServidor28(req, res);
});

router.get("/mensalSetembroCpuServidor28", function (req, res) {
    analiseController.mensalSetembroCpuServidor28(req, res);
});

router.get("/mensalOutubroCpuServidor28", function (req, res) {
    analiseController.mensalOutubroCpuServidor28(req, res);
});

router.get("/mensalNovembroCpuServidor28", function (req, res) {
    analiseController.mensalNovembroCpuServidor28(req, res);
});

router.get("/mensalDezembroCpuServidor28", function (req, res) {
    analiseController.mensalDezembroCpuServidor28(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor28", function (req, res) {
    analiseController.mensalJaneiroRamServidor28(req, res);
});

router.get("/mensalFevereiroRamServidor28", function (req, res) {
    analiseController.mensalFevereiroRamServidor28(req, res);
});

router.get("/mensalMarcoRamServidor28", function (req, res) {
    analiseController.mensalMarcoRamServidor28(req, res);
});

router.get("/mensalAbrilRamServidor28", function (req, res) {
    analiseController.mensalAbrilRamServidor28(req, res);
});

router.get("/mensalMaioRamServidor28", function (req, res) {
    analiseController.mensalMaioRamServidor28(req, res);
});

router.get("/mensalJunhoRamServidor28", function (req, res) {
    analiseController.mensalJunhoRamServidor28(req, res);
});

router.get("/mensalJulhoRamServidor28", function (req, res) {
    analiseController.mensalJulhoRamServidor28(req, res);
});

router.get("/mensalAgostoRamServidor28", function (req, res) {
    analiseController.mensalAgostoRamServidor28(req, res);
});

router.get("/mensalSetembroRamServidor28", function (req, res) {
    analiseController.mensalSetembroRamServidor28(req, res);
});

router.get("/mensalOutubroRamServidor28", function (req, res) {
    analiseController.mensalOutubroRamServidor28(req, res);
});

router.get("/mensalNovembroRamServidor28", function (req, res) {
    analiseController.mensalNovembroRamServidor28(req, res);
});

router.get("/mensalDezembroRamServidor28", function (req, res) {
    analiseController.mensalDezembroRamServidor28(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor28", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor28(req, res);
});

router.get("/mensalFevereiroDiscoServidor28", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor28(req, res);
});

router.get("/mensalMarcoDiscoServidor28", function (req, res) {
    analiseController.mensalMarcoDiscoServidor28(req, res);
});

router.get("/mensalAbrilDiscoServidor28", function (req, res) {
    analiseController.mensalAbrilDiscoServidor28(req, res);
});

router.get("/mensalMaioDiscoServidor28", function (req, res) {
    analiseController.mensalMaioDiscoServidor28(req, res);
});

router.get("/mensalJunhoDiscoServidor28", function (req, res) {
    analiseController.mensalJunhoDiscoServidor28(req, res);
});

router.get("/mensalJulhoDiscoServidor28", function (req, res) {
    analiseController.mensalJulhoDiscoServidor28(req, res);
});

router.get("/mensalAgostoDiscoServidor28", function (req, res) {
    analiseController.mensalAgostoDiscoServidor28(req, res);
});

router.get("/mensalSetembroDiscoServidor28", function (req, res) {
    analiseController.mensalSetembroDiscoServidor28(req, res);
});

router.get("/mensalOutubroDiscoServidor28", function (req, res) {
    analiseController.mensalOutubroDiscoServidor28(req, res);
});

router.get("/mensalNovembroDiscoServidor28", function (req, res) {
    analiseController.mensalNovembroDiscoServidor28(req, res);
});

router.get("/mensalDezembroDiscoServidor28", function (req, res) {
    analiseController.mensalDezembroDiscoServidor28(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor28", function (req, res) {
    analiseController.limiteJaneiroCpuServidor28(req, res);
});

router.get("/limiteFevereiroCpuServidor28", function (req, res) {
    analiseController.limiteFevereiroCpuServidor28(req, res);
});

router.get("/limiteMarcoCpuServidor28", function (req, res) {
    analiseController.limiteMarcoCpuServidor28(req, res);
});

router.get("/limiteAbrilCpuServidor28", function (req, res) {
    analiseController.limiteAbrilCpuServidor28(req, res);
});

router.get("/limiteMaioCpuServidor28", function (req, res) {
    analiseController.limiteMaioCpuServidor28(req, res);
});

router.get("/limiteJunhoCpuServidor28", function (req, res) {
    analiseController.limiteJunhoCpuServidor28(req, res);
});

router.get("/limiteJulhoCpuServidor28", function (req, res) {
    analiseController.limiteJulhoCpuServidor28(req, res);
});

router.get("/limiteAgostoCpuServidor28", function (req, res) {
    analiseController.limiteAgostoCpuServidor28(req, res);
});

router.get("/limiteSetembroCpuServidor28", function (req, res) {
    analiseController.limiteSetembroCpuServidor28(req, res);
});

router.get("/limiteOutubroCpuServidor28", function (req, res) {
    analiseController.limiteOutubroCpuServidor28(req, res);
});

router.get("/limiteNovembroCpuServidor28", function (req, res) {
    analiseController.limiteNovembroCpuServidor28(req, res);
});

router.get("/limiteDezembroCpuServidor28", function (req, res) {
    analiseController.limiteDezembroCpuServidor28(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor28", function (req, res) {
    analiseController.limiteJaneiroRamServidor28(req, res);
});

router.get("/limiteFevereiroRamServidor28", function (req, res) {
    analiseController.limiteFevereiroRamServidor28(req, res);
});

router.get("/limiteMarcoRamServidor28", function (req, res) {
    analiseController.limiteMarcoRamServidor28(req, res);
});

router.get("/limiteAbrilRamServidor28", function (req, res) {
    analiseController.limiteAbrilRamServidor28(req, res);
});

router.get("/limiteMaioRamServidor28", function (req, res) {
    analiseController.limiteMaioRamServidor28(req, res);
});

router.get("/limiteJunhoRamServidor28", function (req, res) {
    analiseController.limiteJunhoRamServidor28(req, res);
});

router.get("/limiteJulhoRamServidor28", function (req, res) {
    analiseController.limiteJulhoRamServidor28(req, res);
});

router.get("/limiteAgostoRamServidor28", function (req, res) {
    analiseController.limiteAgostoRamServidor28(req, res);
});

router.get("/limiteSetembroRamServidor28", function (req, res) {
    analiseController.limiteSetembroRamServidor28(req, res);
});

router.get("/limiteOutubroRamServidor28", function (req, res) {
    analiseController.limiteOutubroRamServidor28(req, res);
});

router.get("/limiteNovembroRamServidor28", function (req, res) {
    analiseController.limiteNovembroRamServidor28(req, res);
});

router.get("/limiteDezembroRamServidor28", function (req, res) {
    analiseController.limiteDezembroRamServidor28(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor28", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor28(req, res);
});

router.get("/limiteFevereiroDiscoServidor28", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor28(req, res);
});

router.get("/limiteMarcoDiscoServidor28", function (req, res) {
    analiseController.limiteMarcoDiscoServidor28(req, res);
});

router.get("/limiteAbrilDiscoServidor28", function (req, res) {
    analiseController.limiteAbrilDiscoServidor28(req, res);
});

router.get("/limiteMaioDiscoServidor28", function (req, res) {
    analiseController.limiteMaioDiscoServidor28(req, res);
});

router.get("/limiteJunhoDiscoServidor28", function (req, res) {
    analiseController.limiteJunhoDiscoServidor28(req, res);
});

router.get("/limiteJulhoDiscoServidor28", function (req, res) {
    analiseController.limiteJulhoDiscoServidor28(req, res);
});

router.get("/limiteAgostoDiscoServidor28", function (req, res) {
    analiseController.limiteAgostoDiscoServidor28(req, res);
});

router.get("/limiteSetembroDiscoServidor28", function (req, res) {
    analiseController.limiteSetembroDiscoServidor28(req, res);
});

router.get("/limiteOutubroDiscoServidor28", function (req, res) {
    analiseController.limiteOutubroDiscoServidor28(req, res);
});

router.get("/limiteNovembroDiscoServidor28", function (req, res) {
    analiseController.limiteNovembroDiscoServidor28(req, res);
});

router.get("/limiteDezembroDiscoServidor28", function (req, res) {
    analiseController.limiteDezembroDiscoServidor28(req, res);
});

router.get("/mensalJaneiroCpuServidor29", function (req, res) {
    analiseController.mensalJaneiroCpuServidor29(req, res);
});

router.get("/mensalFevereiroCpuServidor29", function (req, res) {
    analiseController.mensalFevereiroCpuServidor29(req, res);
});

router.get("/mensalMarcoCpuServidor29", function (req, res) {
    analiseController.mensalMarcoCpuServidor29(req, res);
});

router.get("/mensalAbrilCpuServidor29", function (req, res) {
    analiseController.mensalAbrilCpuServidor29(req, res);
});

router.get("/mensalMaioCpuServidor29", function (req, res) {
    analiseController.mensalMaioCpuServidor29(req, res);
});

router.get("/mensalJunhoCpuServidor29", function (req, res) {
    analiseController.mensalJunhoCpuServidor29(req, res);
});

router.get("/mensalJulhoCpuServidor29", function (req, res) {
    analiseController.mensalJulhoCpuServidor29(req, res);
});

router.get("/mensalAgostoCpuServidor29", function (req, res) {
    analiseController.mensalAgostoCpuServidor29(req, res);
});

router.get("/mensalSetembroCpuServidor29", function (req, res) {
    analiseController.mensalSetembroCpuServidor29(req, res);
});

router.get("/mensalOutubroCpuServidor29", function (req, res) {
    analiseController.mensalOutubroCpuServidor29(req, res);
});

router.get("/mensalNovembroCpuServidor29", function (req, res) {
    analiseController.mensalNovembroCpuServidor29(req, res);
});

router.get("/mensalDezembroCpuServidor29", function (req, res) {
    analiseController.mensalDezembroCpuServidor29(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor29", function (req, res) {
    analiseController.mensalJaneiroRamServidor29(req, res);
});

router.get("/mensalFevereiroRamServidor29", function (req, res) {
    analiseController.mensalFevereiroRamServidor29(req, res);
});

router.get("/mensalMarcoRamServidor29", function (req, res) {
    analiseController.mensalMarcoRamServidor29(req, res);
});

router.get("/mensalAbrilRamServidor29", function (req, res) {
    analiseController.mensalAbrilRamServidor29(req, res);
});

router.get("/mensalMaioRamServidor29", function (req, res) {
    analiseController.mensalMaioRamServidor29(req, res);
});

router.get("/mensalJunhoRamServidor29", function (req, res) {
    analiseController.mensalJunhoRamServidor29(req, res);
});

router.get("/mensalJulhoRamServidor29", function (req, res) {
    analiseController.mensalJulhoRamServidor29(req, res);
});

router.get("/mensalAgostoRamServidor29", function (req, res) {
    analiseController.mensalAgostoRamServidor29(req, res);
});

router.get("/mensalSetembroRamServidor29", function (req, res) {
    analiseController.mensalSetembroRamServidor29(req, res);
});

router.get("/mensalOutubroRamServidor29", function (req, res) {
    analiseController.mensalOutubroRamServidor29(req, res);
});

router.get("/mensalNovembroRamServidor29", function (req, res) {
    analiseController.mensalNovembroRamServidor29(req, res);
});

router.get("/mensalDezembroRamServidor29", function (req, res) {
    analiseController.mensalDezembroRamServidor29(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor29", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor29(req, res);
});

router.get("/mensalFevereiroDiscoServidor29", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor29(req, res);
});

router.get("/mensalMarcoDiscoServidor29", function (req, res) {
    analiseController.mensalMarcoDiscoServidor29(req, res);
});

router.get("/mensalAbrilDiscoServidor29", function (req, res) {
    analiseController.mensalAbrilDiscoServidor29(req, res);
});

router.get("/mensalMaioDiscoServidor29", function (req, res) {
    analiseController.mensalMaioDiscoServidor29(req, res);
});

router.get("/mensalJunhoDiscoServidor29", function (req, res) {
    analiseController.mensalJunhoDiscoServidor29(req, res);
});

router.get("/mensalJulhoDiscoServidor29", function (req, res) {
    analiseController.mensalJulhoDiscoServidor29(req, res);
});

router.get("/mensalAgostoDiscoServidor29", function (req, res) {
    analiseController.mensalAgostoDiscoServidor29(req, res);
});

router.get("/mensalSetembroDiscoServidor29", function (req, res) {
    analiseController.mensalSetembroDiscoServidor29(req, res);
});

router.get("/mensalOutubroDiscoServidor29", function (req, res) {
    analiseController.mensalOutubroDiscoServidor29(req, res);
});

router.get("/mensalNovembroDiscoServidor29", function (req, res) {
    analiseController.mensalNovembroDiscoServidor29(req, res);
});

router.get("/mensalDezembroDiscoServidor29", function (req, res) {
    analiseController.mensalDezembroDiscoServidor29(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor29", function (req, res) {
    analiseController.limiteJaneiroCpuServidor29(req, res);
});

router.get("/limiteFevereiroCpuServidor29", function (req, res) {
    analiseController.limiteFevereiroCpuServidor29(req, res);
});

router.get("/limiteMarcoCpuServidor29", function (req, res) {
    analiseController.limiteMarcoCpuServidor29(req, res);
});

router.get("/limiteAbrilCpuServidor29", function (req, res) {
    analiseController.limiteAbrilCpuServidor29(req, res);
});

router.get("/limiteMaioCpuServidor29", function (req, res) {
    analiseController.limiteMaioCpuServidor29(req, res);
});

router.get("/limiteJunhoCpuServidor29", function (req, res) {
    analiseController.limiteJunhoCpuServidor29(req, res);
});

router.get("/limiteJulhoCpuServidor29", function (req, res) {
    analiseController.limiteJulhoCpuServidor29(req, res);
});

router.get("/limiteAgostoCpuServidor29", function (req, res) {
    analiseController.limiteAgostoCpuServidor29(req, res);
});

router.get("/limiteSetembroCpuServidor29", function (req, res) {
    analiseController.limiteSetembroCpuServidor29(req, res);
});

router.get("/limiteOutubroCpuServidor29", function (req, res) {
    analiseController.limiteOutubroCpuServidor29(req, res);
});

router.get("/limiteNovembroCpuServidor29", function (req, res) {
    analiseController.limiteNovembroCpuServidor29(req, res);
});

router.get("/limiteDezembroCpuServidor29", function (req, res) {
    analiseController.limiteDezembroCpuServidor29(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor29", function (req, res) {
    analiseController.limiteJaneiroRamServidor29(req, res);
});

router.get("/limiteFevereiroRamServidor29", function (req, res) {
    analiseController.limiteFevereiroRamServidor29(req, res);
});

router.get("/limiteMarcoRamServidor29", function (req, res) {
    analiseController.limiteMarcoRamServidor29(req, res);
});

router.get("/limiteAbrilRamServidor29", function (req, res) {
    analiseController.limiteAbrilRamServidor29(req, res);
});

router.get("/limiteMaioRamServidor29", function (req, res) {
    analiseController.limiteMaioRamServidor29(req, res);
});

router.get("/limiteJunhoRamServidor29", function (req, res) {
    analiseController.limiteJunhoRamServidor29(req, res);
});

router.get("/limiteJulhoRamServidor29", function (req, res) {
    analiseController.limiteJulhoRamServidor29(req, res);
});

router.get("/limiteAgostoRamServidor29", function (req, res) {
    analiseController.limiteAgostoRamServidor29(req, res);
});

router.get("/limiteSetembroRamServidor29", function (req, res) {
    analiseController.limiteSetembroRamServidor29(req, res);
});

router.get("/limiteOutubroRamServidor29", function (req, res) {
    analiseController.limiteOutubroRamServidor29(req, res);
});

router.get("/limiteNovembroRamServidor29", function (req, res) {
    analiseController.limiteNovembroRamServidor29(req, res);
});

router.get("/limiteDezembroRamServidor29", function (req, res) {
    analiseController.limiteDezembroRamServidor29(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor29", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor29(req, res);
});

router.get("/limiteFevereiroDiscoServidor29", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor29(req, res);
});

router.get("/limiteMarcoDiscoServidor29", function (req, res) {
    analiseController.limiteMarcoDiscoServidor29(req, res);
});

router.get("/limiteAbrilDiscoServidor29", function (req, res) {
    analiseController.limiteAbrilDiscoServidor29(req, res);
});

router.get("/limiteMaioDiscoServidor29", function (req, res) {
    analiseController.limiteMaioDiscoServidor29(req, res);
});

router.get("/limiteJunhoDiscoServidor29", function (req, res) {
    analiseController.limiteJunhoDiscoServidor29(req, res);
});

router.get("/limiteJulhoDiscoServidor29", function (req, res) {
    analiseController.limiteJulhoDiscoServidor29(req, res);
});

router.get("/limiteAgostoDiscoServidor29", function (req, res) {
    analiseController.limiteAgostoDiscoServidor29(req, res);
});

router.get("/limiteSetembroDiscoServidor29", function (req, res) {
    analiseController.limiteSetembroDiscoServidor29(req, res);
});

router.get("/limiteOutubroDiscoServidor29", function (req, res) {
    analiseController.limiteOutubroDiscoServidor29(req, res);
});

router.get("/limiteNovembroDiscoServidor29", function (req, res) {
    analiseController.limiteNovembroDiscoServidor29(req, res);
});

router.get("/limiteDezembroDiscoServidor29", function (req, res) {
    analiseController.limiteDezembroDiscoServidor29(req, res);
});

router.get("/mensalJaneiroCpuServidor30", function (req, res) {
    analiseController.mensalJaneiroCpuServidor30(req, res);
});

router.get("/mensalFevereiroCpuServidor30", function (req, res) {
    analiseController.mensalFevereiroCpuServidor30(req, res);
});

router.get("/mensalMarcoCpuServidor30", function (req, res) {
    analiseController.mensalMarcoCpuServidor30(req, res);
});

router.get("/mensalAbrilCpuServidor30", function (req, res) {
    analiseController.mensalAbrilCpuServidor30(req, res);
});

router.get("/mensalMaioCpuServidor30", function (req, res) {
    analiseController.mensalMaioCpuServidor30(req, res);
});

router.get("/mensalJunhoCpuServidor30", function (req, res) {
    analiseController.mensalJunhoCpuServidor30(req, res);
});

router.get("/mensalJulhoCpuServidor30", function (req, res) {
    analiseController.mensalJulhoCpuServidor30(req, res);
});

router.get("/mensalAgostoCpuServidor30", function (req, res) {
    analiseController.mensalAgostoCpuServidor30(req, res);
});

router.get("/mensalSetembroCpuServidor30", function (req, res) {
    analiseController.mensalSetembroCpuServidor30(req, res);
});

router.get("/mensalOutubroCpuServidor30", function (req, res) {
    analiseController.mensalOutubroCpuServidor30(req, res);
});

router.get("/mensalNovembroCpuServidor30", function (req, res) {
    analiseController.mensalNovembroCpuServidor30(req, res);
});

router.get("/mensalDezembroCpuServidor30", function (req, res) {
    analiseController.mensalDezembroCpuServidor30(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor30", function (req, res) {
    analiseController.mensalJaneiroRamServidor30(req, res);
});

router.get("/mensalFevereiroRamServidor30", function (req, res) {
    analiseController.mensalFevereiroRamServidor30(req, res);
});

router.get("/mensalMarcoRamServidor30", function (req, res) {
    analiseController.mensalMarcoRamServidor30(req, res);
});

router.get("/mensalAbrilRamServidor30", function (req, res) {
    analiseController.mensalAbrilRamServidor30(req, res);
});

router.get("/mensalMaioRamServidor30", function (req, res) {
    analiseController.mensalMaioRamServidor30(req, res);
});

router.get("/mensalJunhoRamServidor30", function (req, res) {
    analiseController.mensalJunhoRamServidor30(req, res);
});

router.get("/mensalJulhoRamServidor30", function (req, res) {
    analiseController.mensalJulhoRamServidor30(req, res);
});

router.get("/mensalAgostoRamServidor30", function (req, res) {
    analiseController.mensalAgostoRamServidor30(req, res);
});

router.get("/mensalSetembroRamServidor30", function (req, res) {
    analiseController.mensalSetembroRamServidor30(req, res);
});

router.get("/mensalOutubroRamServidor30", function (req, res) {
    analiseController.mensalOutubroRamServidor30(req, res);
});

router.get("/mensalNovembroRamServidor30", function (req, res) {
    analiseController.mensalNovembroRamServidor30(req, res);
});

router.get("/mensalDezembroRamServidor30", function (req, res) {
    analiseController.mensalDezembroRamServidor30(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor30", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor30(req, res);
});

router.get("/mensalFevereiroDiscoServidor30", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor30(req, res);
});

router.get("/mensalMarcoDiscoServidor30", function (req, res) {
    analiseController.mensalMarcoDiscoServidor30(req, res);
});

router.get("/mensalAbrilDiscoServidor30", function (req, res) {
    analiseController.mensalAbrilDiscoServidor30(req, res);
});

router.get("/mensalMaioDiscoServidor30", function (req, res) {
    analiseController.mensalMaioDiscoServidor30(req, res);
});

router.get("/mensalJunhoDiscoServidor30", function (req, res) {
    analiseController.mensalJunhoDiscoServidor30(req, res);
});

router.get("/mensalJulhoDiscoServidor30", function (req, res) {
    analiseController.mensalJulhoDiscoServidor30(req, res);
});

router.get("/mensalAgostoDiscoServidor30", function (req, res) {
    analiseController.mensalAgostoDiscoServidor30(req, res);
});

router.get("/mensalSetembroDiscoServidor30", function (req, res) {
    analiseController.mensalSetembroDiscoServidor30(req, res);
});

router.get("/mensalOutubroDiscoServidor30", function (req, res) {
    analiseController.mensalOutubroDiscoServidor30(req, res);
});

router.get("/mensalNovembroDiscoServidor30", function (req, res) {
    analiseController.mensalNovembroDiscoServidor30(req, res);
});

router.get("/mensalDezembroDiscoServidor30", function (req, res) {
    analiseController.mensalDezembroDiscoServidor30(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor30", function (req, res) {
    analiseController.limiteJaneiroCpuServidor30(req, res);
});

router.get("/limiteFevereiroCpuServidor30", function (req, res) {
    analiseController.limiteFevereiroCpuServidor30(req, res);
});

router.get("/limiteMarcoCpuServidor30", function (req, res) {
    analiseController.limiteMarcoCpuServidor30(req, res);
});

router.get("/limiteAbrilCpuServidor30", function (req, res) {
    analiseController.limiteAbrilCpuServidor30(req, res);
});

router.get("/limiteMaioCpuServidor30", function (req, res) {
    analiseController.limiteMaioCpuServidor30(req, res);
});

router.get("/limiteJunhoCpuServidor30", function (req, res) {
    analiseController.limiteJunhoCpuServidor30(req, res);
});

router.get("/limiteJulhoCpuServidor30", function (req, res) {
    analiseController.limiteJulhoCpuServidor30(req, res);
});

router.get("/limiteAgostoCpuServidor30", function (req, res) {
    analiseController.limiteAgostoCpuServidor30(req, res);
});

router.get("/limiteSetembroCpuServidor30", function (req, res) {
    analiseController.limiteSetembroCpuServidor30(req, res);
});

router.get("/limiteOutubroCpuServidor30", function (req, res) {
    analiseController.limiteOutubroCpuServidor30(req, res);
});

router.get("/limiteNovembroCpuServidor30", function (req, res) {
    analiseController.limiteNovembroCpuServidor30(req, res);
});

router.get("/limiteDezembroCpuServidor30", function (req, res) {
    analiseController.limiteDezembroCpuServidor30(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor30", function (req, res) {
    analiseController.limiteJaneiroRamServidor30(req, res);
});

router.get("/limiteFevereiroRamServidor30", function (req, res) {
    analiseController.limiteFevereiroRamServidor30(req, res);
});

router.get("/limiteMarcoRamServidor30", function (req, res) {
    analiseController.limiteMarcoRamServidor30(req, res);
});

router.get("/limiteAbrilRamServidor30", function (req, res) {
    analiseController.limiteAbrilRamServidor30(req, res);
});

router.get("/limiteMaioRamServidor30", function (req, res) {
    analiseController.limiteMaioRamServidor30(req, res);
});

router.get("/limiteJunhoRamServidor30", function (req, res) {
    analiseController.limiteJunhoRamServidor30(req, res);
});

router.get("/limiteJulhoRamServidor30", function (req, res) {
    analiseController.limiteJulhoRamServidor30(req, res);
});

router.get("/limiteAgostoRamServidor30", function (req, res) {
    analiseController.limiteAgostoRamServidor30(req, res);
});

router.get("/limiteSetembroRamServidor30", function (req, res) {
    analiseController.limiteSetembroRamServidor30(req, res);
});

router.get("/limiteOutubroRamServidor30", function (req, res) {
    analiseController.limiteOutubroRamServidor30(req, res);
});

router.get("/limiteNovembroRamServidor30", function (req, res) {
    analiseController.limiteNovembroRamServidor30(req, res);
});

router.get("/limiteDezembroRamServidor30", function (req, res) {
    analiseController.limiteDezembroRamServidor30(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor30", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor30(req, res);
});

router.get("/limiteFevereiroDiscoServidor30", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor30(req, res);
});

router.get("/limiteMarcoDiscoServidor30", function (req, res) {
    analiseController.limiteMarcoDiscoServidor30(req, res);
});

router.get("/limiteAbrilDiscoServidor30", function (req, res) {
    analiseController.limiteAbrilDiscoServidor30(req, res);
});

router.get("/limiteMaioDiscoServidor30", function (req, res) {
    analiseController.limiteMaioDiscoServidor30(req, res);
});

router.get("/limiteJunhoDiscoServidor30", function (req, res) {
    analiseController.limiteJunhoDiscoServidor30(req, res);
});

router.get("/limiteJulhoDiscoServidor30", function (req, res) {
    analiseController.limiteJulhoDiscoServidor30(req, res);
});

router.get("/limiteAgostoDiscoServidor30", function (req, res) {
    analiseController.limiteAgostoDiscoServidor30(req, res);
});

router.get("/limiteSetembroDiscoServidor30", function (req, res) {
    analiseController.limiteSetembroDiscoServidor30(req, res);
});

router.get("/limiteOutubroDiscoServidor30", function (req, res) {
    analiseController.limiteOutubroDiscoServidor30(req, res);
});

router.get("/limiteNovembroDiscoServidor30", function (req, res) {
    analiseController.limiteNovembroDiscoServidor30(req, res);
});

router.get("/limiteDezembroDiscoServidor30", function (req, res) {
    analiseController.limiteDezembroDiscoServidor30(req, res);
});

router.get("/mensalJaneiroCpuServidor31", function (req, res) {
    analiseController.mensalJaneiroCpuServidor31(req, res);
});

router.get("/mensalFevereiroCpuServidor31", function (req, res) {
    analiseController.mensalFevereiroCpuServidor31(req, res);
});

router.get("/mensalMarcoCpuServidor31", function (req, res) {
    analiseController.mensalMarcoCpuServidor31(req, res);
});

router.get("/mensalAbrilCpuServidor31", function (req, res) {
    analiseController.mensalAbrilCpuServidor31(req, res);
});

router.get("/mensalMaioCpuServidor31", function (req, res) {
    analiseController.mensalMaioCpuServidor31(req, res);
});

router.get("/mensalJunhoCpuServidor31", function (req, res) {
    analiseController.mensalJunhoCpuServidor31(req, res);
});

router.get("/mensalJulhoCpuServidor31", function (req, res) {
    analiseController.mensalJulhoCpuServidor31(req, res);
});

router.get("/mensalAgostoCpuServidor31", function (req, res) {
    analiseController.mensalAgostoCpuServidor31(req, res);
});

router.get("/mensalSetembroCpuServidor31", function (req, res) {
    analiseController.mensalSetembroCpuServidor31(req, res);
});

router.get("/mensalOutubroCpuServidor31", function (req, res) {
    analiseController.mensalOutubroCpuServidor31(req, res);
});

router.get("/mensalNovembroCpuServidor31", function (req, res) {
    analiseController.mensalNovembroCpuServidor31(req, res);
});

router.get("/mensalDezembroCpuServidor31", function (req, res) {
    analiseController.mensalDezembroCpuServidor31(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor31", function (req, res) {
    analiseController.mensalJaneiroRamServidor31(req, res);
});

router.get("/mensalFevereiroRamServidor31", function (req, res) {
    analiseController.mensalFevereiroRamServidor31(req, res);
});

router.get("/mensalMarcoRamServidor31", function (req, res) {
    analiseController.mensalMarcoRamServidor31(req, res);
});

router.get("/mensalAbrilRamServidor31", function (req, res) {
    analiseController.mensalAbrilRamServidor31(req, res);
});

router.get("/mensalMaioRamServidor31", function (req, res) {
    analiseController.mensalMaioRamServidor31(req, res);
});

router.get("/mensalJunhoRamServidor31", function (req, res) {
    analiseController.mensalJunhoRamServidor31(req, res);
});

router.get("/mensalJulhoRamServidor31", function (req, res) {
    analiseController.mensalJulhoRamServidor31(req, res);
});

router.get("/mensalAgostoRamServidor31", function (req, res) {
    analiseController.mensalAgostoRamServidor31(req, res);
});

router.get("/mensalSetembroRamServidor31", function (req, res) {
    analiseController.mensalSetembroRamServidor31(req, res);
});

router.get("/mensalOutubroRamServidor31", function (req, res) {
    analiseController.mensalOutubroRamServidor31(req, res);
});

router.get("/mensalNovembroRamServidor31", function (req, res) {
    analiseController.mensalNovembroRamServidor31(req, res);
});

router.get("/mensalDezembroRamServidor31", function (req, res) {
    analiseController.mensalDezembroRamServidor31(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor31", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor31(req, res);
});

router.get("/mensalFevereiroDiscoServidor31", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor31(req, res);
});

router.get("/mensalMarcoDiscoServidor31", function (req, res) {
    analiseController.mensalMarcoDiscoServidor31(req, res);
});

router.get("/mensalAbrilDiscoServidor31", function (req, res) {
    analiseController.mensalAbrilDiscoServidor31(req, res);
});

router.get("/mensalMaioDiscoServidor31", function (req, res) {
    analiseController.mensalMaioDiscoServidor31(req, res);
});

router.get("/mensalJunhoDiscoServidor31", function (req, res) {
    analiseController.mensalJunhoDiscoServidor31(req, res);
});

router.get("/mensalJulhoDiscoServidor31", function (req, res) {
    analiseController.mensalJulhoDiscoServidor31(req, res);
});

router.get("/mensalAgostoDiscoServidor31", function (req, res) {
    analiseController.mensalAgostoDiscoServidor31(req, res);
});

router.get("/mensalSetembroDiscoServidor31", function (req, res) {
    analiseController.mensalSetembroDiscoServidor31(req, res);
});

router.get("/mensalOutubroDiscoServidor31", function (req, res) {
    analiseController.mensalOutubroDiscoServidor31(req, res);
});

router.get("/mensalNovembroDiscoServidor31", function (req, res) {
    analiseController.mensalNovembroDiscoServidor31(req, res);
});

router.get("/mensalDezembroDiscoServidor31", function (req, res) {
    analiseController.mensalDezembroDiscoServidor31(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor31", function (req, res) {
    analiseController.limiteJaneiroCpuServidor31(req, res);
});

router.get("/limiteFevereiroCpuServidor31", function (req, res) {
    analiseController.limiteFevereiroCpuServidor31(req, res);
});

router.get("/limiteMarcoCpuServidor31", function (req, res) {
    analiseController.limiteMarcoCpuServidor31(req, res);
});

router.get("/limiteAbrilCpuServidor31", function (req, res) {
    analiseController.limiteAbrilCpuServidor31(req, res);
});

router.get("/limiteMaioCpuServidor31", function (req, res) {
    analiseController.limiteMaioCpuServidor31(req, res);
});

router.get("/limiteJunhoCpuServidor31", function (req, res) {
    analiseController.limiteJunhoCpuServidor31(req, res);
});

router.get("/limiteJulhoCpuServidor31", function (req, res) {
    analiseController.limiteJulhoCpuServidor31(req, res);
});

router.get("/limiteAgostoCpuServidor31", function (req, res) {
    analiseController.limiteAgostoCpuServidor31(req, res);
});

router.get("/limiteSetembroCpuServidor31", function (req, res) {
    analiseController.limiteSetembroCpuServidor31(req, res);
});

router.get("/limiteOutubroCpuServidor31", function (req, res) {
    analiseController.limiteOutubroCpuServidor31(req, res);
});

router.get("/limiteNovembroCpuServidor31", function (req, res) {
    analiseController.limiteNovembroCpuServidor31(req, res);
});

router.get("/limiteDezembroCpuServidor31", function (req, res) {
    analiseController.limiteDezembroCpuServidor31(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor31", function (req, res) {
    analiseController.limiteJaneiroRamServidor31(req, res);
});

router.get("/limiteFevereiroRamServidor31", function (req, res) {
    analiseController.limiteFevereiroRamServidor31(req, res);
});

router.get("/limiteMarcoRamServidor31", function (req, res) {
    analiseController.limiteMarcoRamServidor31(req, res);
});

router.get("/limiteAbrilRamServidor31", function (req, res) {
    analiseController.limiteAbrilRamServidor31(req, res);
});

router.get("/limiteMaioRamServidor31", function (req, res) {
    analiseController.limiteMaioRamServidor31(req, res);
});

router.get("/limiteJunhoRamServidor31", function (req, res) {
    analiseController.limiteJunhoRamServidor31(req, res);
});

router.get("/limiteJulhoRamServidor31", function (req, res) {
    analiseController.limiteJulhoRamServidor31(req, res);
});

router.get("/limiteAgostoRamServidor31", function (req, res) {
    analiseController.limiteAgostoRamServidor31(req, res);
});

router.get("/limiteSetembroRamServidor31", function (req, res) {
    analiseController.limiteSetembroRamServidor31(req, res);
});

router.get("/limiteOutubroRamServidor31", function (req, res) {
    analiseController.limiteOutubroRamServidor31(req, res);
});

router.get("/limiteNovembroRamServidor31", function (req, res) {
    analiseController.limiteNovembroRamServidor31(req, res);
});

router.get("/limiteDezembroRamServidor31", function (req, res) {
    analiseController.limiteDezembroRamServidor31(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor31", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor31(req, res);
});

router.get("/limiteFevereiroDiscoServidor31", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor31(req, res);
});

router.get("/limiteMarcoDiscoServidor31", function (req, res) {
    analiseController.limiteMarcoDiscoServidor31(req, res);
});

router.get("/limiteAbrilDiscoServidor31", function (req, res) {
    analiseController.limiteAbrilDiscoServidor31(req, res);
});

router.get("/limiteMaioDiscoServidor31", function (req, res) {
    analiseController.limiteMaioDiscoServidor31(req, res);
});

router.get("/limiteJunhoDiscoServidor31", function (req, res) {
    analiseController.limiteJunhoDiscoServidor31(req, res);
});

router.get("/limiteJulhoDiscoServidor31", function (req, res) {
    analiseController.limiteJulhoDiscoServidor31(req, res);
});

router.get("/limiteAgostoDiscoServidor31", function (req, res) {
    analiseController.limiteAgostoDiscoServidor31(req, res);
});

router.get("/limiteSetembroDiscoServidor31", function (req, res) {
    analiseController.limiteSetembroDiscoServidor31(req, res);
});

router.get("/limiteOutubroDiscoServidor31", function (req, res) {
    analiseController.limiteOutubroDiscoServidor31(req, res);
});

router.get("/limiteNovembroDiscoServidor31", function (req, res) {
    analiseController.limiteNovembroDiscoServidor31(req, res);
});

router.get("/limiteDezembroDiscoServidor31", function (req, res) {
    analiseController.limiteDezembroDiscoServidor31(req, res);
});

router.get("/mensalJaneiroCpuServidor32", function (req, res) {
    analiseController.mensalJaneiroCpuServidor32(req, res);
});

router.get("/mensalFevereiroCpuServidor32", function (req, res) {
    analiseController.mensalFevereiroCpuServidor32(req, res);
});

router.get("/mensalMarcoCpuServidor32", function (req, res) {
    analiseController.mensalMarcoCpuServidor32(req, res);
});

router.get("/mensalAbrilCpuServidor32", function (req, res) {
    analiseController.mensalAbrilCpuServidor32(req, res);
});

router.get("/mensalMaioCpuServidor32", function (req, res) {
    analiseController.mensalMaioCpuServidor32(req, res);
});

router.get("/mensalJunhoCpuServidor32", function (req, res) {
    analiseController.mensalJunhoCpuServidor32(req, res);
});

router.get("/mensalJulhoCpuServidor32", function (req, res) {
    analiseController.mensalJulhoCpuServidor32(req, res);
});

router.get("/mensalAgostoCpuServidor32", function (req, res) {
    analiseController.mensalAgostoCpuServidor32(req, res);
});

router.get("/mensalSetembroCpuServidor32", function (req, res) {
    analiseController.mensalSetembroCpuServidor32(req, res);
});

router.get("/mensalOutubroCpuServidor32", function (req, res) {
    analiseController.mensalOutubroCpuServidor32(req, res);
});

router.get("/mensalNovembroCpuServidor32", function (req, res) {
    analiseController.mensalNovembroCpuServidor32(req, res);
});

router.get("/mensalDezembroCpuServidor32", function (req, res) {
    analiseController.mensalDezembroCpuServidor32(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor32", function (req, res) {
    analiseController.mensalJaneiroRamServidor32(req, res);
});

router.get("/mensalFevereiroRamServidor32", function (req, res) {
    analiseController.mensalFevereiroRamServidor32(req, res);
});

router.get("/mensalMarcoRamServidor32", function (req, res) {
    analiseController.mensalMarcoRamServidor32(req, res);
});

router.get("/mensalAbrilRamServidor32", function (req, res) {
    analiseController.mensalAbrilRamServidor32(req, res);
});

router.get("/mensalMaioRamServidor32", function (req, res) {
    analiseController.mensalMaioRamServidor32(req, res);
});

router.get("/mensalJunhoRamServidor32", function (req, res) {
    analiseController.mensalJunhoRamServidor32(req, res);
});

router.get("/mensalJulhoRamServidor32", function (req, res) {
    analiseController.mensalJulhoRamServidor32(req, res);
});

router.get("/mensalAgostoRamServidor32", function (req, res) {
    analiseController.mensalAgostoRamServidor32(req, res);
});

router.get("/mensalSetembroRamServidor32", function (req, res) {
    analiseController.mensalSetembroRamServidor32(req, res);
});

router.get("/mensalOutubroRamServidor32", function (req, res) {
    analiseController.mensalOutubroRamServidor32(req, res);
});

router.get("/mensalNovembroRamServidor32", function (req, res) {
    analiseController.mensalNovembroRamServidor32(req, res);
});

router.get("/mensalDezembroRamServidor32", function (req, res) {
    analiseController.mensalDezembroRamServidor32(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor32", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor32(req, res);
});

router.get("/mensalFevereiroDiscoServidor32", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor32(req, res);
});

router.get("/mensalMarcoDiscoServidor32", function (req, res) {
    analiseController.mensalMarcoDiscoServidor32(req, res);
});

router.get("/mensalAbrilDiscoServidor32", function (req, res) {
    analiseController.mensalAbrilDiscoServidor32(req, res);
});

router.get("/mensalMaioDiscoServidor32", function (req, res) {
    analiseController.mensalMaioDiscoServidor32(req, res);
});

router.get("/mensalJunhoDiscoServidor32", function (req, res) {
    analiseController.mensalJunhoDiscoServidor32(req, res);
});

router.get("/mensalJulhoDiscoServidor32", function (req, res) {
    analiseController.mensalJulhoDiscoServidor32(req, res);
});

router.get("/mensalAgostoDiscoServidor32", function (req, res) {
    analiseController.mensalAgostoDiscoServidor32(req, res);
});

router.get("/mensalSetembroDiscoServidor32", function (req, res) {
    analiseController.mensalSetembroDiscoServidor32(req, res);
});

router.get("/mensalOutubroDiscoServidor32", function (req, res) {
    analiseController.mensalOutubroDiscoServidor32(req, res);
});

router.get("/mensalNovembroDiscoServidor32", function (req, res) {
    analiseController.mensalNovembroDiscoServidor32(req, res);
});

router.get("/mensalDezembroDiscoServidor32", function (req, res) {
    analiseController.mensalDezembroDiscoServidor32(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor32", function (req, res) {
    analiseController.limiteJaneiroCpuServidor32(req, res);
});

router.get("/limiteFevereiroCpuServidor32", function (req, res) {
    analiseController.limiteFevereiroCpuServidor32(req, res);
});

router.get("/limiteMarcoCpuServidor32", function (req, res) {
    analiseController.limiteMarcoCpuServidor32(req, res);
});

router.get("/limiteAbrilCpuServidor32", function (req, res) {
    analiseController.limiteAbrilCpuServidor32(req, res);
});

router.get("/limiteMaioCpuServidor32", function (req, res) {
    analiseController.limiteMaioCpuServidor32(req, res);
});

router.get("/limiteJunhoCpuServidor32", function (req, res) {
    analiseController.limiteJunhoCpuServidor32(req, res);
});

router.get("/limiteJulhoCpuServidor32", function (req, res) {
    analiseController.limiteJulhoCpuServidor32(req, res);
});

router.get("/limiteAgostoCpuServidor32", function (req, res) {
    analiseController.limiteAgostoCpuServidor32(req, res);
});

router.get("/limiteSetembroCpuServidor32", function (req, res) {
    analiseController.limiteSetembroCpuServidor32(req, res);
});

router.get("/limiteOutubroCpuServidor32", function (req, res) {
    analiseController.limiteOutubroCpuServidor32(req, res);
});

router.get("/limiteNovembroCpuServidor32", function (req, res) {
    analiseController.limiteNovembroCpuServidor32(req, res);
});

router.get("/limiteDezembroCpuServidor32", function (req, res) {
    analiseController.limiteDezembroCpuServidor32(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor32", function (req, res) {
    analiseController.limiteJaneiroRamServidor32(req, res);
});

router.get("/limiteFevereiroRamServidor32", function (req, res) {
    analiseController.limiteFevereiroRamServidor32(req, res);
});

router.get("/limiteMarcoRamServidor32", function (req, res) {
    analiseController.limiteMarcoRamServidor32(req, res);
});

router.get("/limiteAbrilRamServidor32", function (req, res) {
    analiseController.limiteAbrilRamServidor32(req, res);
});

router.get("/limiteMaioRamServidor32", function (req, res) {
    analiseController.limiteMaioRamServidor32(req, res);
});

router.get("/limiteJunhoRamServidor32", function (req, res) {
    analiseController.limiteJunhoRamServidor32(req, res);
});

router.get("/limiteJulhoRamServidor32", function (req, res) {
    analiseController.limiteJulhoRamServidor32(req, res);
});

router.get("/limiteAgostoRamServidor32", function (req, res) {
    analiseController.limiteAgostoRamServidor32(req, res);
});

router.get("/limiteSetembroRamServidor32", function (req, res) {
    analiseController.limiteSetembroRamServidor32(req, res);
});

router.get("/limiteOutubroRamServidor32", function (req, res) {
    analiseController.limiteOutubroRamServidor32(req, res);
});

router.get("/limiteNovembroRamServidor32", function (req, res) {
    analiseController.limiteNovembroRamServidor32(req, res);
});

router.get("/limiteDezembroRamServidor32", function (req, res) {
    analiseController.limiteDezembroRamServidor32(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor32", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor32(req, res);
});

router.get("/limiteFevereiroDiscoServidor32", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor32(req, res);
});

router.get("/limiteMarcoDiscoServidor32", function (req, res) {
    analiseController.limiteMarcoDiscoServidor32(req, res);
});

router.get("/limiteAbrilDiscoServidor32", function (req, res) {
    analiseController.limiteAbrilDiscoServidor32(req, res);
});

router.get("/limiteMaioDiscoServidor32", function (req, res) {
    analiseController.limiteMaioDiscoServidor32(req, res);
});

router.get("/limiteJunhoDiscoServidor32", function (req, res) {
    analiseController.limiteJunhoDiscoServidor32(req, res);
});

router.get("/limiteJulhoDiscoServidor32", function (req, res) {
    analiseController.limiteJulhoDiscoServidor32(req, res);
});

router.get("/limiteAgostoDiscoServidor32", function (req, res) {
    analiseController.limiteAgostoDiscoServidor32(req, res);
});

router.get("/limiteSetembroDiscoServidor32", function (req, res) {
    analiseController.limiteSetembroDiscoServidor32(req, res);
});

router.get("/limiteOutubroDiscoServidor32", function (req, res) {
    analiseController.limiteOutubroDiscoServidor32(req, res);
});

router.get("/limiteNovembroDiscoServidor32", function (req, res) {
    analiseController.limiteNovembroDiscoServidor32(req, res);
});

router.get("/limiteDezembroDiscoServidor32", function (req, res) {
    analiseController.limiteDezembroDiscoServidor32(req, res);
});

router.get("/mensalJaneiroCpuServidor33", function (req, res) {
    analiseController.mensalJaneiroCpuServidor33(req, res);
});

router.get("/mensalFevereiroCpuServidor33", function (req, res) {
    analiseController.mensalFevereiroCpuServidor33(req, res);
});

router.get("/mensalMarcoCpuServidor33", function (req, res) {
    analiseController.mensalMarcoCpuServidor33(req, res);
});

router.get("/mensalAbrilCpuServidor33", function (req, res) {
    analiseController.mensalAbrilCpuServidor33(req, res);
});

router.get("/mensalMaioCpuServidor33", function (req, res) {
    analiseController.mensalMaioCpuServidor33(req, res);
});

router.get("/mensalJunhoCpuServidor33", function (req, res) {
    analiseController.mensalJunhoCpuServidor33(req, res);
});

router.get("/mensalJulhoCpuServidor33", function (req, res) {
    analiseController.mensalJulhoCpuServidor33(req, res);
});

router.get("/mensalAgostoCpuServidor33", function (req, res) {
    analiseController.mensalAgostoCpuServidor33(req, res);
});

router.get("/mensalSetembroCpuServidor33", function (req, res) {
    analiseController.mensalSetembroCpuServidor33(req, res);
});

router.get("/mensalOutubroCpuServidor33", function (req, res) {
    analiseController.mensalOutubroCpuServidor33(req, res);
});

router.get("/mensalNovembroCpuServidor33", function (req, res) {
    analiseController.mensalNovembroCpuServidor33(req, res);
});

router.get("/mensalDezembroCpuServidor33", function (req, res) {
    analiseController.mensalDezembroCpuServidor33(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor33", function (req, res) {
    analiseController.mensalJaneiroRamServidor33(req, res);
});

router.get("/mensalFevereiroRamServidor33", function (req, res) {
    analiseController.mensalFevereiroRamServidor33(req, res);
});

router.get("/mensalMarcoRamServidor33", function (req, res) {
    analiseController.mensalMarcoRamServidor33(req, res);
});

router.get("/mensalAbrilRamServidor33", function (req, res) {
    analiseController.mensalAbrilRamServidor33(req, res);
});

router.get("/mensalMaioRamServidor33", function (req, res) {
    analiseController.mensalMaioRamServidor33(req, res);
});

router.get("/mensalJunhoRamServidor33", function (req, res) {
    analiseController.mensalJunhoRamServidor33(req, res);
});

router.get("/mensalJulhoRamServidor33", function (req, res) {
    analiseController.mensalJulhoRamServidor33(req, res);
});

router.get("/mensalAgostoRamServidor33", function (req, res) {
    analiseController.mensalAgostoRamServidor33(req, res);
});

router.get("/mensalSetembroRamServidor33", function (req, res) {
    analiseController.mensalSetembroRamServidor33(req, res);
});

router.get("/mensalOutubroRamServidor33", function (req, res) {
    analiseController.mensalOutubroRamServidor33(req, res);
});

router.get("/mensalNovembroRamServidor33", function (req, res) {
    analiseController.mensalNovembroRamServidor33(req, res);
});

router.get("/mensalDezembroRamServidor33", function (req, res) {
    analiseController.mensalDezembroRamServidor33(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor33", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor33(req, res);
});

router.get("/mensalFevereiroDiscoServidor33", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor33(req, res);
});

router.get("/mensalMarcoDiscoServidor33", function (req, res) {
    analiseController.mensalMarcoDiscoServidor33(req, res);
});

router.get("/mensalAbrilDiscoServidor33", function (req, res) {
    analiseController.mensalAbrilDiscoServidor33(req, res);
});

router.get("/mensalMaioDiscoServidor33", function (req, res) {
    analiseController.mensalMaioDiscoServidor33(req, res);
});

router.get("/mensalJunhoDiscoServidor33", function (req, res) {
    analiseController.mensalJunhoDiscoServidor33(req, res);
});

router.get("/mensalJulhoDiscoServidor33", function (req, res) {
    analiseController.mensalJulhoDiscoServidor33(req, res);
});

router.get("/mensalAgostoDiscoServidor33", function (req, res) {
    analiseController.mensalAgostoDiscoServidor33(req, res);
});

router.get("/mensalSetembroDiscoServidor33", function (req, res) {
    analiseController.mensalSetembroDiscoServidor33(req, res);
});

router.get("/mensalOutubroDiscoServidor33", function (req, res) {
    analiseController.mensalOutubroDiscoServidor33(req, res);
});

router.get("/mensalNovembroDiscoServidor33", function (req, res) {
    analiseController.mensalNovembroDiscoServidor33(req, res);
});

router.get("/mensalDezembroDiscoServidor33", function (req, res) {
    analiseController.mensalDezembroDiscoServidor33(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor33", function (req, res) {
    analiseController.limiteJaneiroCpuServidor33(req, res);
});

router.get("/limiteFevereiroCpuServidor33", function (req, res) {
    analiseController.limiteFevereiroCpuServidor33(req, res);
});

router.get("/limiteMarcoCpuServidor33", function (req, res) {
    analiseController.limiteMarcoCpuServidor33(req, res);
});

router.get("/limiteAbrilCpuServidor33", function (req, res) {
    analiseController.limiteAbrilCpuServidor33(req, res);
});

router.get("/limiteMaioCpuServidor33", function (req, res) {
    analiseController.limiteMaioCpuServidor33(req, res);
});

router.get("/limiteJunhoCpuServidor33", function (req, res) {
    analiseController.limiteJunhoCpuServidor33(req, res);
});

router.get("/limiteJulhoCpuServidor33", function (req, res) {
    analiseController.limiteJulhoCpuServidor33(req, res);
});

router.get("/limiteAgostoCpuServidor33", function (req, res) {
    analiseController.limiteAgostoCpuServidor33(req, res);
});

router.get("/limiteSetembroCpuServidor33", function (req, res) {
    analiseController.limiteSetembroCpuServidor33(req, res);
});

router.get("/limiteOutubroCpuServidor33", function (req, res) {
    analiseController.limiteOutubroCpuServidor33(req, res);
});

router.get("/limiteNovembroCpuServidor33", function (req, res) {
    analiseController.limiteNovembroCpuServidor33(req, res);
});

router.get("/limiteDezembroCpuServidor33", function (req, res) {
    analiseController.limiteDezembroCpuServidor33(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor33", function (req, res) {
    analiseController.limiteJaneiroRamServidor33(req, res);
});

router.get("/limiteFevereiroRamServidor33", function (req, res) {
    analiseController.limiteFevereiroRamServidor33(req, res);
});

router.get("/limiteMarcoRamServidor33", function (req, res) {
    analiseController.limiteMarcoRamServidor33(req, res);
});

router.get("/limiteAbrilRamServidor33", function (req, res) {
    analiseController.limiteAbrilRamServidor33(req, res);
});

router.get("/limiteMaioRamServidor33", function (req, res) {
    analiseController.limiteMaioRamServidor33(req, res);
});

router.get("/limiteJunhoRamServidor33", function (req, res) {
    analiseController.limiteJunhoRamServidor33(req, res);
});

router.get("/limiteJulhoRamServidor33", function (req, res) {
    analiseController.limiteJulhoRamServidor33(req, res);
});

router.get("/limiteAgostoRamServidor33", function (req, res) {
    analiseController.limiteAgostoRamServidor33(req, res);
});

router.get("/limiteSetembroRamServidor33", function (req, res) {
    analiseController.limiteSetembroRamServidor33(req, res);
});

router.get("/limiteOutubroRamServidor33", function (req, res) {
    analiseController.limiteOutubroRamServidor33(req, res);
});

router.get("/limiteNovembroRamServidor33", function (req, res) {
    analiseController.limiteNovembroRamServidor33(req, res);
});

router.get("/limiteDezembroRamServidor33", function (req, res) {
    analiseController.limiteDezembroRamServidor33(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor33", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor33(req, res);
});

router.get("/limiteFevereiroDiscoServidor33", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor33(req, res);
});

router.get("/limiteMarcoDiscoServidor33", function (req, res) {
    analiseController.limiteMarcoDiscoServidor33(req, res);
});

router.get("/limiteAbrilDiscoServidor33", function (req, res) {
    analiseController.limiteAbrilDiscoServidor33(req, res);
});

router.get("/limiteMaioDiscoServidor33", function (req, res) {
    analiseController.limiteMaioDiscoServidor33(req, res);
});

router.get("/limiteJunhoDiscoServidor33", function (req, res) {
    analiseController.limiteJunhoDiscoServidor33(req, res);
});

router.get("/limiteJulhoDiscoServidor33", function (req, res) {
    analiseController.limiteJulhoDiscoServidor33(req, res);
});

router.get("/limiteAgostoDiscoServidor33", function (req, res) {
    analiseController.limiteAgostoDiscoServidor33(req, res);
});

router.get("/limiteSetembroDiscoServidor33", function (req, res) {
    analiseController.limiteSetembroDiscoServidor33(req, res);
});

router.get("/limiteOutubroDiscoServidor33", function (req, res) {
    analiseController.limiteOutubroDiscoServidor33(req, res);
});

router.get("/limiteNovembroDiscoServidor33", function (req, res) {
    analiseController.limiteNovembroDiscoServidor33(req, res);
});

router.get("/limiteDezembroDiscoServidor33", function (req, res) {
    analiseController.limiteDezembroDiscoServidor33(req, res);
});

router.get("/mensalJaneiroCpuServidor34", function (req, res) {
    analiseController.mensalJaneiroCpuServidor34(req, res);
});

router.get("/mensalFevereiroCpuServidor34", function (req, res) {
    analiseController.mensalFevereiroCpuServidor34(req, res);
});

router.get("/mensalMarcoCpuServidor34", function (req, res) {
    analiseController.mensalMarcoCpuServidor34(req, res);
});

router.get("/mensalAbrilCpuServidor34", function (req, res) {
    analiseController.mensalAbrilCpuServidor34(req, res);
});

router.get("/mensalMaioCpuServidor34", function (req, res) {
    analiseController.mensalMaioCpuServidor34(req, res);
});

router.get("/mensalJunhoCpuServidor34", function (req, res) {
    analiseController.mensalJunhoCpuServidor34(req, res);
});

router.get("/mensalJulhoCpuServidor34", function (req, res) {
    analiseController.mensalJulhoCpuServidor34(req, res);
});

router.get("/mensalAgostoCpuServidor34", function (req, res) {
    analiseController.mensalAgostoCpuServidor34(req, res);
});

router.get("/mensalSetembroCpuServidor34", function (req, res) {
    analiseController.mensalSetembroCpuServidor34(req, res);
});

router.get("/mensalOutubroCpuServidor34", function (req, res) {
    analiseController.mensalOutubroCpuServidor34(req, res);
});

router.get("/mensalNovembroCpuServidor34", function (req, res) {
    analiseController.mensalNovembroCpuServidor34(req, res);
});

router.get("/mensalDezembroCpuServidor34", function (req, res) {
    analiseController.mensalDezembroCpuServidor34(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor34", function (req, res) {
    analiseController.mensalJaneiroRamServidor34(req, res);
});

router.get("/mensalFevereiroRamServidor34", function (req, res) {
    analiseController.mensalFevereiroRamServidor34(req, res);
});

router.get("/mensalMarcoRamServidor34", function (req, res) {
    analiseController.mensalMarcoRamServidor34(req, res);
});

router.get("/mensalAbrilRamServidor34", function (req, res) {
    analiseController.mensalAbrilRamServidor34(req, res);
});

router.get("/mensalMaioRamServidor34", function (req, res) {
    analiseController.mensalMaioRamServidor34(req, res);
});

router.get("/mensalJunhoRamServidor34", function (req, res) {
    analiseController.mensalJunhoRamServidor34(req, res);
});

router.get("/mensalJulhoRamServidor34", function (req, res) {
    analiseController.mensalJulhoRamServidor34(req, res);
});

router.get("/mensalAgostoRamServidor34", function (req, res) {
    analiseController.mensalAgostoRamServidor34(req, res);
});

router.get("/mensalSetembroRamServidor34", function (req, res) {
    analiseController.mensalSetembroRamServidor34(req, res);
});

router.get("/mensalOutubroRamServidor34", function (req, res) {
    analiseController.mensalOutubroRamServidor34(req, res);
});

router.get("/mensalNovembroRamServidor34", function (req, res) {
    analiseController.mensalNovembroRamServidor34(req, res);
});

router.get("/mensalDezembroRamServidor34", function (req, res) {
    analiseController.mensalDezembroRamServidor34(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor34", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor34(req, res);
});

router.get("/mensalFevereiroDiscoServidor34", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor34(req, res);
});

router.get("/mensalMarcoDiscoServidor34", function (req, res) {
    analiseController.mensalMarcoDiscoServidor34(req, res);
});

router.get("/mensalAbrilDiscoServidor34", function (req, res) {
    analiseController.mensalAbrilDiscoServidor34(req, res);
});

router.get("/mensalMaioDiscoServidor34", function (req, res) {
    analiseController.mensalMaioDiscoServidor34(req, res);
});

router.get("/mensalJunhoDiscoServidor34", function (req, res) {
    analiseController.mensalJunhoDiscoServidor34(req, res);
});

router.get("/mensalJulhoDiscoServidor34", function (req, res) {
    analiseController.mensalJulhoDiscoServidor34(req, res);
});

router.get("/mensalAgostoDiscoServidor34", function (req, res) {
    analiseController.mensalAgostoDiscoServidor34(req, res);
});

router.get("/mensalSetembroDiscoServidor34", function (req, res) {
    analiseController.mensalSetembroDiscoServidor34(req, res);
});

router.get("/mensalOutubroDiscoServidor34", function (req, res) {
    analiseController.mensalOutubroDiscoServidor34(req, res);
});

router.get("/mensalNovembroDiscoServidor34", function (req, res) {
    analiseController.mensalNovembroDiscoServidor34(req, res);
});

router.get("/mensalDezembroDiscoServidor34", function (req, res) {
    analiseController.mensalDezembroDiscoServidor34(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor34", function (req, res) {
    analiseController.limiteJaneiroCpuServidor34(req, res);
});

router.get("/limiteFevereiroCpuServidor34", function (req, res) {
    analiseController.limiteFevereiroCpuServidor34(req, res);
});

router.get("/limiteMarcoCpuServidor34", function (req, res) {
    analiseController.limiteMarcoCpuServidor34(req, res);
});

router.get("/limiteAbrilCpuServidor34", function (req, res) {
    analiseController.limiteAbrilCpuServidor34(req, res);
});

router.get("/limiteMaioCpuServidor34", function (req, res) {
    analiseController.limiteMaioCpuServidor34(req, res);
});

router.get("/limiteJunhoCpuServidor34", function (req, res) {
    analiseController.limiteJunhoCpuServidor34(req, res);
});

router.get("/limiteJulhoCpuServidor34", function (req, res) {
    analiseController.limiteJulhoCpuServidor34(req, res);
});

router.get("/limiteAgostoCpuServidor34", function (req, res) {
    analiseController.limiteAgostoCpuServidor34(req, res);
});

router.get("/limiteSetembroCpuServidor34", function (req, res) {
    analiseController.limiteSetembroCpuServidor34(req, res);
});

router.get("/limiteOutubroCpuServidor34", function (req, res) {
    analiseController.limiteOutubroCpuServidor34(req, res);
});

router.get("/limiteNovembroCpuServidor34", function (req, res) {
    analiseController.limiteNovembroCpuServidor34(req, res);
});

router.get("/limiteDezembroCpuServidor34", function (req, res) {
    analiseController.limiteDezembroCpuServidor34(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor34", function (req, res) {
    analiseController.limiteJaneiroRamServidor34(req, res);
});

router.get("/limiteFevereiroRamServidor34", function (req, res) {
    analiseController.limiteFevereiroRamServidor34(req, res);
});

router.get("/limiteMarcoRamServidor34", function (req, res) {
    analiseController.limiteMarcoRamServidor34(req, res);
});

router.get("/limiteAbrilRamServidor34", function (req, res) {
    analiseController.limiteAbrilRamServidor34(req, res);
});

router.get("/limiteMaioRamServidor34", function (req, res) {
    analiseController.limiteMaioRamServidor34(req, res);
});

router.get("/limiteJunhoRamServidor34", function (req, res) {
    analiseController.limiteJunhoRamServidor34(req, res);
});

router.get("/limiteJulhoRamServidor34", function (req, res) {
    analiseController.limiteJulhoRamServidor34(req, res);
});

router.get("/limiteAgostoRamServidor34", function (req, res) {
    analiseController.limiteAgostoRamServidor34(req, res);
});

router.get("/limiteSetembroRamServidor34", function (req, res) {
    analiseController.limiteSetembroRamServidor34(req, res);
});

router.get("/limiteOutubroRamServidor34", function (req, res) {
    analiseController.limiteOutubroRamServidor34(req, res);
});

router.get("/limiteNovembroRamServidor34", function (req, res) {
    analiseController.limiteNovembroRamServidor34(req, res);
});

router.get("/limiteDezembroRamServidor34", function (req, res) {
    analiseController.limiteDezembroRamServidor34(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor34", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor34(req, res);
});

router.get("/limiteFevereiroDiscoServidor34", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor34(req, res);
});

router.get("/limiteMarcoDiscoServidor34", function (req, res) {
    analiseController.limiteMarcoDiscoServidor34(req, res);
});

router.get("/limiteAbrilDiscoServidor34", function (req, res) {
    analiseController.limiteAbrilDiscoServidor34(req, res);
});

router.get("/limiteMaioDiscoServidor34", function (req, res) {
    analiseController.limiteMaioDiscoServidor34(req, res);
});

router.get("/limiteJunhoDiscoServidor34", function (req, res) {
    analiseController.limiteJunhoDiscoServidor34(req, res);
});

router.get("/limiteJulhoDiscoServidor34", function (req, res) {
    analiseController.limiteJulhoDiscoServidor34(req, res);
});

router.get("/limiteAgostoDiscoServidor34", function (req, res) {
    analiseController.limiteAgostoDiscoServidor34(req, res);
});

router.get("/limiteSetembroDiscoServidor34", function (req, res) {
    analiseController.limiteSetembroDiscoServidor34(req, res);
});

router.get("/limiteOutubroDiscoServidor34", function (req, res) {
    analiseController.limiteOutubroDiscoServidor34(req, res);
});

router.get("/limiteNovembroDiscoServidor34", function (req, res) {
    analiseController.limiteNovembroDiscoServidor34(req, res);
});

router.get("/limiteDezembroDiscoServidor34", function (req, res) {
    analiseController.limiteDezembroDiscoServidor34(req, res);
});

router.get("/mensalJaneiroCpuServidor35", function (req, res) {
    analiseController.mensalJaneiroCpuServidor35(req, res);
});

router.get("/mensalFevereiroCpuServidor35", function (req, res) {
    analiseController.mensalFevereiroCpuServidor35(req, res);
});

router.get("/mensalMarcoCpuServidor35", function (req, res) {
    analiseController.mensalMarcoCpuServidor35(req, res);
});

router.get("/mensalAbrilCpuServidor35", function (req, res) {
    analiseController.mensalAbrilCpuServidor35(req, res);
});

router.get("/mensalMaioCpuServidor35", function (req, res) {
    analiseController.mensalMaioCpuServidor35(req, res);
});

router.get("/mensalJunhoCpuServidor35", function (req, res) {
    analiseController.mensalJunhoCpuServidor35(req, res);
});

router.get("/mensalJulhoCpuServidor35", function (req, res) {
    analiseController.mensalJulhoCpuServidor35(req, res);
});

router.get("/mensalAgostoCpuServidor35", function (req, res) {
    analiseController.mensalAgostoCpuServidor35(req, res);
});

router.get("/mensalSetembroCpuServidor35", function (req, res) {
    analiseController.mensalSetembroCpuServidor35(req, res);
});

router.get("/mensalOutubroCpuServidor35", function (req, res) {
    analiseController.mensalOutubroCpuServidor35(req, res);
});

router.get("/mensalNovembroCpuServidor35", function (req, res) {
    analiseController.mensalNovembroCpuServidor35(req, res);
});

router.get("/mensalDezembroCpuServidor35", function (req, res) {
    analiseController.mensalDezembroCpuServidor35(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor35", function (req, res) {
    analiseController.mensalJaneiroRamServidor35(req, res);
});

router.get("/mensalFevereiroRamServidor35", function (req, res) {
    analiseController.mensalFevereiroRamServidor35(req, res);
});

router.get("/mensalMarcoRamServidor35", function (req, res) {
    analiseController.mensalMarcoRamServidor35(req, res);
});

router.get("/mensalAbrilRamServidor35", function (req, res) {
    analiseController.mensalAbrilRamServidor35(req, res);
});

router.get("/mensalMaioRamServidor35", function (req, res) {
    analiseController.mensalMaioRamServidor35(req, res);
});

router.get("/mensalJunhoRamServidor35", function (req, res) {
    analiseController.mensalJunhoRamServidor35(req, res);
});

router.get("/mensalJulhoRamServidor35", function (req, res) {
    analiseController.mensalJulhoRamServidor35(req, res);
});

router.get("/mensalAgostoRamServidor35", function (req, res) {
    analiseController.mensalAgostoRamServidor35(req, res);
});

router.get("/mensalSetembroRamServidor35", function (req, res) {
    analiseController.mensalSetembroRamServidor35(req, res);
});

router.get("/mensalOutubroRamServidor35", function (req, res) {
    analiseController.mensalOutubroRamServidor35(req, res);
});

router.get("/mensalNovembroRamServidor35", function (req, res) {
    analiseController.mensalNovembroRamServidor35(req, res);
});

router.get("/mensalDezembroRamServidor35", function (req, res) {
    analiseController.mensalDezembroRamServidor35(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor35", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor35(req, res);
});

router.get("/mensalFevereiroDiscoServidor35", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor35(req, res);
});

router.get("/mensalMarcoDiscoServidor35", function (req, res) {
    analiseController.mensalMarcoDiscoServidor35(req, res);
});

router.get("/mensalAbrilDiscoServidor35", function (req, res) {
    analiseController.mensalAbrilDiscoServidor35(req, res);
});

router.get("/mensalMaioDiscoServidor35", function (req, res) {
    analiseController.mensalMaioDiscoServidor35(req, res);
});

router.get("/mensalJunhoDiscoServidor35", function (req, res) {
    analiseController.mensalJunhoDiscoServidor35(req, res);
});

router.get("/mensalJulhoDiscoServidor35", function (req, res) {
    analiseController.mensalJulhoDiscoServidor35(req, res);
});

router.get("/mensalAgostoDiscoServidor35", function (req, res) {
    analiseController.mensalAgostoDiscoServidor35(req, res);
});

router.get("/mensalSetembroDiscoServidor35", function (req, res) {
    analiseController.mensalSetembroDiscoServidor35(req, res);
});

router.get("/mensalOutubroDiscoServidor35", function (req, res) {
    analiseController.mensalOutubroDiscoServidor35(req, res);
});

router.get("/mensalNovembroDiscoServidor35", function (req, res) {
    analiseController.mensalNovembroDiscoServidor35(req, res);
});

router.get("/mensalDezembroDiscoServidor35", function (req, res) {
    analiseController.mensalDezembroDiscoServidor35(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor35", function (req, res) {
    analiseController.limiteJaneiroCpuServidor35(req, res);
});

router.get("/limiteFevereiroCpuServidor35", function (req, res) {
    analiseController.limiteFevereiroCpuServidor35(req, res);
});

router.get("/limiteMarcoCpuServidor35", function (req, res) {
    analiseController.limiteMarcoCpuServidor35(req, res);
});

router.get("/limiteAbrilCpuServidor35", function (req, res) {
    analiseController.limiteAbrilCpuServidor35(req, res);
});

router.get("/limiteMaioCpuServidor35", function (req, res) {
    analiseController.limiteMaioCpuServidor35(req, res);
});

router.get("/limiteJunhoCpuServidor35", function (req, res) {
    analiseController.limiteJunhoCpuServidor35(req, res);
});

router.get("/limiteJulhoCpuServidor35", function (req, res) {
    analiseController.limiteJulhoCpuServidor35(req, res);
});

router.get("/limiteAgostoCpuServidor35", function (req, res) {
    analiseController.limiteAgostoCpuServidor35(req, res);
});

router.get("/limiteSetembroCpuServidor35", function (req, res) {
    analiseController.limiteSetembroCpuServidor35(req, res);
});

router.get("/limiteOutubroCpuServidor35", function (req, res) {
    analiseController.limiteOutubroCpuServidor35(req, res);
});

router.get("/limiteNovembroCpuServidor35", function (req, res) {
    analiseController.limiteNovembroCpuServidor35(req, res);
});

router.get("/limiteDezembroCpuServidor35", function (req, res) {
    analiseController.limiteDezembroCpuServidor35(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor35", function (req, res) {
    analiseController.limiteJaneiroRamServidor35(req, res);
});

router.get("/limiteFevereiroRamServidor35", function (req, res) {
    analiseController.limiteFevereiroRamServidor35(req, res);
});

router.get("/limiteMarcoRamServidor35", function (req, res) {
    analiseController.limiteMarcoRamServidor35(req, res);
});

router.get("/limiteAbrilRamServidor35", function (req, res) {
    analiseController.limiteAbrilRamServidor35(req, res);
});

router.get("/limiteMaioRamServidor35", function (req, res) {
    analiseController.limiteMaioRamServidor35(req, res);
});

router.get("/limiteJunhoRamServidor35", function (req, res) {
    analiseController.limiteJunhoRamServidor35(req, res);
});

router.get("/limiteJulhoRamServidor35", function (req, res) {
    analiseController.limiteJulhoRamServidor35(req, res);
});

router.get("/limiteAgostoRamServidor35", function (req, res) {
    analiseController.limiteAgostoRamServidor35(req, res);
});

router.get("/limiteSetembroRamServidor35", function (req, res) {
    analiseController.limiteSetembroRamServidor35(req, res);
});

router.get("/limiteOutubroRamServidor35", function (req, res) {
    analiseController.limiteOutubroRamServidor35(req, res);
});

router.get("/limiteNovembroRamServidor35", function (req, res) {
    analiseController.limiteNovembroRamServidor35(req, res);
});

router.get("/limiteDezembroRamServidor35", function (req, res) {
    analiseController.limiteDezembroRamServidor35(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor35", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor35(req, res);
});

router.get("/limiteFevereiroDiscoServidor35", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor35(req, res);
});

router.get("/limiteMarcoDiscoServidor35", function (req, res) {
    analiseController.limiteMarcoDiscoServidor35(req, res);
});

router.get("/limiteAbrilDiscoServidor35", function (req, res) {
    analiseController.limiteAbrilDiscoServidor35(req, res);
});

router.get("/limiteMaioDiscoServidor35", function (req, res) {
    analiseController.limiteMaioDiscoServidor35(req, res);
});

router.get("/limiteJunhoDiscoServidor35", function (req, res) {
    analiseController.limiteJunhoDiscoServidor35(req, res);
});

router.get("/limiteJulhoDiscoServidor35", function (req, res) {
    analiseController.limiteJulhoDiscoServidor35(req, res);
});

router.get("/limiteAgostoDiscoServidor35", function (req, res) {
    analiseController.limiteAgostoDiscoServidor35(req, res);
});

router.get("/limiteSetembroDiscoServidor35", function (req, res) {
    analiseController.limiteSetembroDiscoServidor35(req, res);
});

router.get("/limiteOutubroDiscoServidor35", function (req, res) {
    analiseController.limiteOutubroDiscoServidor35(req, res);
});

router.get("/limiteNovembroDiscoServidor35", function (req, res) {
    analiseController.limiteNovembroDiscoServidor35(req, res);
});

router.get("/limiteDezembroDiscoServidor35", function (req, res) {
    analiseController.limiteDezembroDiscoServidor35(req, res);
});

router.get("/mensalJaneiroCpuServidor36", function (req, res) {
    analiseController.mensalJaneiroCpuServidor36(req, res);
});

router.get("/mensalFevereiroCpuServidor36", function (req, res) {
    analiseController.mensalFevereiroCpuServidor36(req, res);
});

router.get("/mensalMarcoCpuServidor36", function (req, res) {
    analiseController.mensalMarcoCpuServidor36(req, res);
});

router.get("/mensalAbrilCpuServidor36", function (req, res) {
    analiseController.mensalAbrilCpuServidor36(req, res);
});

router.get("/mensalMaioCpuServidor36", function (req, res) {
    analiseController.mensalMaioCpuServidor36(req, res);
});

router.get("/mensalJunhoCpuServidor36", function (req, res) {
    analiseController.mensalJunhoCpuServidor36(req, res);
});

router.get("/mensalJulhoCpuServidor36", function (req, res) {
    analiseController.mensalJulhoCpuServidor36(req, res);
});

router.get("/mensalAgostoCpuServidor36", function (req, res) {
    analiseController.mensalAgostoCpuServidor36(req, res);
});

router.get("/mensalSetembroCpuServidor36", function (req, res) {
    analiseController.mensalSetembroCpuServidor36(req, res);
});

router.get("/mensalOutubroCpuServidor36", function (req, res) {
    analiseController.mensalOutubroCpuServidor36(req, res);
});

router.get("/mensalNovembroCpuServidor36", function (req, res) {
    analiseController.mensalNovembroCpuServidor36(req, res);
});

router.get("/mensalDezembroCpuServidor36", function (req, res) {
    analiseController.mensalDezembroCpuServidor36(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor36", function (req, res) {
    analiseController.mensalJaneiroRamServidor36(req, res);
});

router.get("/mensalFevereiroRamServidor36", function (req, res) {
    analiseController.mensalFevereiroRamServidor36(req, res);
});

router.get("/mensalMarcoRamServidor36", function (req, res) {
    analiseController.mensalMarcoRamServidor36(req, res);
});

router.get("/mensalAbrilRamServidor36", function (req, res) {
    analiseController.mensalAbrilRamServidor36(req, res);
});

router.get("/mensalMaioRamServidor36", function (req, res) {
    analiseController.mensalMaioRamServidor36(req, res);
});

router.get("/mensalJunhoRamServidor36", function (req, res) {
    analiseController.mensalJunhoRamServidor36(req, res);
});

router.get("/mensalJulhoRamServidor36", function (req, res) {
    analiseController.mensalJulhoRamServidor36(req, res);
});

router.get("/mensalAgostoRamServidor36", function (req, res) {
    analiseController.mensalAgostoRamServidor36(req, res);
});

router.get("/mensalSetembroRamServidor36", function (req, res) {
    analiseController.mensalSetembroRamServidor36(req, res);
});

router.get("/mensalOutubroRamServidor36", function (req, res) {
    analiseController.mensalOutubroRamServidor36(req, res);
});

router.get("/mensalNovembroRamServidor36", function (req, res) {
    analiseController.mensalNovembroRamServidor36(req, res);
});

router.get("/mensalDezembroRamServidor36", function (req, res) {
    analiseController.mensalDezembroRamServidor36(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor36", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor36(req, res);
});

router.get("/mensalFevereiroDiscoServidor36", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor36(req, res);
});

router.get("/mensalMarcoDiscoServidor36", function (req, res) {
    analiseController.mensalMarcoDiscoServidor36(req, res);
});

router.get("/mensalAbrilDiscoServidor36", function (req, res) {
    analiseController.mensalAbrilDiscoServidor36(req, res);
});

router.get("/mensalMaioDiscoServidor36", function (req, res) {
    analiseController.mensalMaioDiscoServidor36(req, res);
});

router.get("/mensalJunhoDiscoServidor36", function (req, res) {
    analiseController.mensalJunhoDiscoServidor36(req, res);
});

router.get("/mensalJulhoDiscoServidor36", function (req, res) {
    analiseController.mensalJulhoDiscoServidor36(req, res);
});

router.get("/mensalAgostoDiscoServidor36", function (req, res) {
    analiseController.mensalAgostoDiscoServidor36(req, res);
});

router.get("/mensalSetembroDiscoServidor36", function (req, res) {
    analiseController.mensalSetembroDiscoServidor36(req, res);
});

router.get("/mensalOutubroDiscoServidor36", function (req, res) {
    analiseController.mensalOutubroDiscoServidor36(req, res);
});

router.get("/mensalNovembroDiscoServidor36", function (req, res) {
    analiseController.mensalNovembroDiscoServidor36(req, res);
});

router.get("/mensalDezembroDiscoServidor36", function (req, res) {
    analiseController.mensalDezembroDiscoServidor36(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor36", function (req, res) {
    analiseController.limiteJaneiroCpuServidor36(req, res);
});

router.get("/limiteFevereiroCpuServidor36", function (req, res) {
    analiseController.limiteFevereiroCpuServidor36(req, res);
});

router.get("/limiteMarcoCpuServidor36", function (req, res) {
    analiseController.limiteMarcoCpuServidor36(req, res);
});

router.get("/limiteAbrilCpuServidor36", function (req, res) {
    analiseController.limiteAbrilCpuServidor36(req, res);
});

router.get("/limiteMaioCpuServidor36", function (req, res) {
    analiseController.limiteMaioCpuServidor36(req, res);
});

router.get("/limiteJunhoCpuServidor36", function (req, res) {
    analiseController.limiteJunhoCpuServidor36(req, res);
});

router.get("/limiteJulhoCpuServidor36", function (req, res) {
    analiseController.limiteJulhoCpuServidor36(req, res);
});

router.get("/limiteAgostoCpuServidor36", function (req, res) {
    analiseController.limiteAgostoCpuServidor36(req, res);
});

router.get("/limiteSetembroCpuServidor36", function (req, res) {
    analiseController.limiteSetembroCpuServidor36(req, res);
});

router.get("/limiteOutubroCpuServidor36", function (req, res) {
    analiseController.limiteOutubroCpuServidor36(req, res);
});

router.get("/limiteNovembroCpuServidor36", function (req, res) {
    analiseController.limiteNovembroCpuServidor36(req, res);
});

router.get("/limiteDezembroCpuServidor36", function (req, res) {
    analiseController.limiteDezembroCpuServidor36(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor36", function (req, res) {
    analiseController.limiteJaneiroRamServidor36(req, res);
});

router.get("/limiteFevereiroRamServidor36", function (req, res) {
    analiseController.limiteFevereiroRamServidor36(req, res);
});

router.get("/limiteMarcoRamServidor36", function (req, res) {
    analiseController.limiteMarcoRamServidor36(req, res);
});

router.get("/limiteAbrilRamServidor36", function (req, res) {
    analiseController.limiteAbrilRamServidor36(req, res);
});

router.get("/limiteMaioRamServidor36", function (req, res) {
    analiseController.limiteMaioRamServidor36(req, res);
});

router.get("/limiteJunhoRamServidor36", function (req, res) {
    analiseController.limiteJunhoRamServidor36(req, res);
});

router.get("/limiteJulhoRamServidor36", function (req, res) {
    analiseController.limiteJulhoRamServidor36(req, res);
});

router.get("/limiteAgostoRamServidor36", function (req, res) {
    analiseController.limiteAgostoRamServidor36(req, res);
});

router.get("/limiteSetembroRamServidor36", function (req, res) {
    analiseController.limiteSetembroRamServidor36(req, res);
});

router.get("/limiteOutubroRamServidor36", function (req, res) {
    analiseController.limiteOutubroRamServidor36(req, res);
});

router.get("/limiteNovembroRamServidor36", function (req, res) {
    analiseController.limiteNovembroRamServidor36(req, res);
});

router.get("/limiteDezembroRamServidor36", function (req, res) {
    analiseController.limiteDezembroRamServidor36(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor36", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor36(req, res);
});

router.get("/limiteFevereiroDiscoServidor36", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor36(req, res);
});

router.get("/limiteMarcoDiscoServidor36", function (req, res) {
    analiseController.limiteMarcoDiscoServidor36(req, res);
});

router.get("/limiteAbrilDiscoServidor36", function (req, res) {
    analiseController.limiteAbrilDiscoServidor36(req, res);
});

router.get("/limiteMaioDiscoServidor36", function (req, res) {
    analiseController.limiteMaioDiscoServidor36(req, res);
});

router.get("/limiteJunhoDiscoServidor36", function (req, res) {
    analiseController.limiteJunhoDiscoServidor36(req, res);
});

router.get("/limiteJulhoDiscoServidor36", function (req, res) {
    analiseController.limiteJulhoDiscoServidor36(req, res);
});

router.get("/limiteAgostoDiscoServidor36", function (req, res) {
    analiseController.limiteAgostoDiscoServidor36(req, res);
});

router.get("/limiteSetembroDiscoServidor36", function (req, res) {
    analiseController.limiteSetembroDiscoServidor36(req, res);
});

router.get("/limiteOutubroDiscoServidor36", function (req, res) {
    analiseController.limiteOutubroDiscoServidor36(req, res);
});

router.get("/limiteNovembroDiscoServidor36", function (req, res) {
    analiseController.limiteNovembroDiscoServidor36(req, res);
});

router.get("/limiteDezembroDiscoServidor36", function (req, res) {
    analiseController.limiteDezembroDiscoServidor36(req, res);
});

router.get("/mensalJaneiroCpuServidor37", function (req, res) {
    analiseController.mensalJaneiroCpuServidor37(req, res);
});

router.get("/mensalFevereiroCpuServidor37", function (req, res) {
    analiseController.mensalFevereiroCpuServidor37(req, res);
});

router.get("/mensalMarcoCpuServidor37", function (req, res) {
    analiseController.mensalMarcoCpuServidor37(req, res);
});

router.get("/mensalAbrilCpuServidor37", function (req, res) {
    analiseController.mensalAbrilCpuServidor37(req, res);
});

router.get("/mensalMaioCpuServidor37", function (req, res) {
    analiseController.mensalMaioCpuServidor37(req, res);
});

router.get("/mensalJunhoCpuServidor37", function (req, res) {
    analiseController.mensalJunhoCpuServidor37(req, res);
});

router.get("/mensalJulhoCpuServidor37", function (req, res) {
    analiseController.mensalJulhoCpuServidor37(req, res);
});

router.get("/mensalAgostoCpuServidor37", function (req, res) {
    analiseController.mensalAgostoCpuServidor37(req, res);
});

router.get("/mensalSetembroCpuServidor37", function (req, res) {
    analiseController.mensalSetembroCpuServidor37(req, res);
});

router.get("/mensalOutubroCpuServidor37", function (req, res) {
    analiseController.mensalOutubroCpuServidor37(req, res);
});

router.get("/mensalNovembroCpuServidor37", function (req, res) {
    analiseController.mensalNovembroCpuServidor37(req, res);
});

router.get("/mensalDezembroCpuServidor37", function (req, res) {
    analiseController.mensalDezembroCpuServidor37(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor37", function (req, res) {
    analiseController.mensalJaneiroRamServidor37(req, res);
});

router.get("/mensalFevereiroRamServidor37", function (req, res) {
    analiseController.mensalFevereiroRamServidor37(req, res);
});

router.get("/mensalMarcoRamServidor37", function (req, res) {
    analiseController.mensalMarcoRamServidor37(req, res);
});

router.get("/mensalAbrilRamServidor37", function (req, res) {
    analiseController.mensalAbrilRamServidor37(req, res);
});

router.get("/mensalMaioRamServidor37", function (req, res) {
    analiseController.mensalMaioRamServidor37(req, res);
});

router.get("/mensalJunhoRamServidor37", function (req, res) {
    analiseController.mensalJunhoRamServidor37(req, res);
});

router.get("/mensalJulhoRamServidor37", function (req, res) {
    analiseController.mensalJulhoRamServidor37(req, res);
});

router.get("/mensalAgostoRamServidor37", function (req, res) {
    analiseController.mensalAgostoRamServidor37(req, res);
});

router.get("/mensalSetembroRamServidor37", function (req, res) {
    analiseController.mensalSetembroRamServidor37(req, res);
});

router.get("/mensalOutubroRamServidor37", function (req, res) {
    analiseController.mensalOutubroRamServidor37(req, res);
});

router.get("/mensalNovembroRamServidor37", function (req, res) {
    analiseController.mensalNovembroRamServidor37(req, res);
});

router.get("/mensalDezembroRamServidor37", function (req, res) {
    analiseController.mensalDezembroRamServidor37(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor37", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor37(req, res);
});

router.get("/mensalFevereiroDiscoServidor37", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor37(req, res);
});

router.get("/mensalMarcoDiscoServidor37", function (req, res) {
    analiseController.mensalMarcoDiscoServidor37(req, res);
});

router.get("/mensalAbrilDiscoServidor37", function (req, res) {
    analiseController.mensalAbrilDiscoServidor37(req, res);
});

router.get("/mensalMaioDiscoServidor37", function (req, res) {
    analiseController.mensalMaioDiscoServidor37(req, res);
});

router.get("/mensalJunhoDiscoServidor37", function (req, res) {
    analiseController.mensalJunhoDiscoServidor37(req, res);
});

router.get("/mensalJulhoDiscoServidor37", function (req, res) {
    analiseController.mensalJulhoDiscoServidor37(req, res);
});

router.get("/mensalAgostoDiscoServidor37", function (req, res) {
    analiseController.mensalAgostoDiscoServidor37(req, res);
});

router.get("/mensalSetembroDiscoServidor37", function (req, res) {
    analiseController.mensalSetembroDiscoServidor37(req, res);
});

router.get("/mensalOutubroDiscoServidor37", function (req, res) {
    analiseController.mensalOutubroDiscoServidor37(req, res);
});

router.get("/mensalNovembroDiscoServidor37", function (req, res) {
    analiseController.mensalNovembroDiscoServidor37(req, res);
});

router.get("/mensalDezembroDiscoServidor37", function (req, res) {
    analiseController.mensalDezembroDiscoServidor37(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor37", function (req, res) {
    analiseController.limiteJaneiroCpuServidor37(req, res);
});

router.get("/limiteFevereiroCpuServidor37", function (req, res) {
    analiseController.limiteFevereiroCpuServidor37(req, res);
});

router.get("/limiteMarcoCpuServidor37", function (req, res) {
    analiseController.limiteMarcoCpuServidor37(req, res);
});

router.get("/limiteAbrilCpuServidor37", function (req, res) {
    analiseController.limiteAbrilCpuServidor37(req, res);
});

router.get("/limiteMaioCpuServidor37", function (req, res) {
    analiseController.limiteMaioCpuServidor37(req, res);
});

router.get("/limiteJunhoCpuServidor37", function (req, res) {
    analiseController.limiteJunhoCpuServidor37(req, res);
});

router.get("/limiteJulhoCpuServidor37", function (req, res) {
    analiseController.limiteJulhoCpuServidor37(req, res);
});

router.get("/limiteAgostoCpuServidor37", function (req, res) {
    analiseController.limiteAgostoCpuServidor37(req, res);
});

router.get("/limiteSetembroCpuServidor37", function (req, res) {
    analiseController.limiteSetembroCpuServidor37(req, res);
});

router.get("/limiteOutubroCpuServidor37", function (req, res) {
    analiseController.limiteOutubroCpuServidor37(req, res);
});

router.get("/limiteNovembroCpuServidor37", function (req, res) {
    analiseController.limiteNovembroCpuServidor37(req, res);
});

router.get("/limiteDezembroCpuServidor37", function (req, res) {
    analiseController.limiteDezembroCpuServidor37(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor37", function (req, res) {
    analiseController.limiteJaneiroRamServidor37(req, res);
});

router.get("/limiteFevereiroRamServidor37", function (req, res) {
    analiseController.limiteFevereiroRamServidor37(req, res);
});

router.get("/limiteMarcoRamServidor37", function (req, res) {
    analiseController.limiteMarcoRamServidor37(req, res);
});

router.get("/limiteAbrilRamServidor37", function (req, res) {
    analiseController.limiteAbrilRamServidor37(req, res);
});

router.get("/limiteMaioRamServidor37", function (req, res) {
    analiseController.limiteMaioRamServidor37(req, res);
});

router.get("/limiteJunhoRamServidor37", function (req, res) {
    analiseController.limiteJunhoRamServidor37(req, res);
});

router.get("/limiteJulhoRamServidor37", function (req, res) {
    analiseController.limiteJulhoRamServidor37(req, res);
});

router.get("/limiteAgostoRamServidor37", function (req, res) {
    analiseController.limiteAgostoRamServidor37(req, res);
});

router.get("/limiteSetembroRamServidor37", function (req, res) {
    analiseController.limiteSetembroRamServidor37(req, res);
});

router.get("/limiteOutubroRamServidor37", function (req, res) {
    analiseController.limiteOutubroRamServidor37(req, res);
});

router.get("/limiteNovembroRamServidor37", function (req, res) {
    analiseController.limiteNovembroRamServidor37(req, res);
});

router.get("/limiteDezembroRamServidor37", function (req, res) {
    analiseController.limiteDezembroRamServidor37(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor37", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor37(req, res);
});

router.get("/limiteFevereiroDiscoServidor37", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor37(req, res);
});

router.get("/limiteMarcoDiscoServidor37", function (req, res) {
    analiseController.limiteMarcoDiscoServidor37(req, res);
});

router.get("/limiteAbrilDiscoServidor37", function (req, res) {
    analiseController.limiteAbrilDiscoServidor37(req, res);
});

router.get("/limiteMaioDiscoServidor37", function (req, res) {
    analiseController.limiteMaioDiscoServidor37(req, res);
});

router.get("/limiteJunhoDiscoServidor37", function (req, res) {
    analiseController.limiteJunhoDiscoServidor37(req, res);
});

router.get("/limiteJulhoDiscoServidor37", function (req, res) {
    analiseController.limiteJulhoDiscoServidor37(req, res);
});

router.get("/limiteAgostoDiscoServidor37", function (req, res) {
    analiseController.limiteAgostoDiscoServidor37(req, res);
});

router.get("/limiteSetembroDiscoServidor37", function (req, res) {
    analiseController.limiteSetembroDiscoServidor37(req, res);
});

router.get("/limiteOutubroDiscoServidor37", function (req, res) {
    analiseController.limiteOutubroDiscoServidor37(req, res);
});

router.get("/limiteNovembroDiscoServidor37", function (req, res) {
    analiseController.limiteNovembroDiscoServidor37(req, res);
});

router.get("/limiteDezembroDiscoServidor37", function (req, res) {
    analiseController.limiteDezembroDiscoServidor37(req, res);
});

router.get("/mensalJaneiroCpuServidor38", function (req, res) {
    analiseController.mensalJaneiroCpuServidor38(req, res);
});

router.get("/mensalFevereiroCpuServidor38", function (req, res) {
    analiseController.mensalFevereiroCpuServidor38(req, res);
});

router.get("/mensalMarcoCpuServidor38", function (req, res) {
    analiseController.mensalMarcoCpuServidor38(req, res);
});

router.get("/mensalAbrilCpuServidor38", function (req, res) {
    analiseController.mensalAbrilCpuServidor38(req, res);
});

router.get("/mensalMaioCpuServidor38", function (req, res) {
    analiseController.mensalMaioCpuServidor38(req, res);
});

router.get("/mensalJunhoCpuServidor38", function (req, res) {
    analiseController.mensalJunhoCpuServidor38(req, res);
});

router.get("/mensalJulhoCpuServidor38", function (req, res) {
    analiseController.mensalJulhoCpuServidor38(req, res);
});

router.get("/mensalAgostoCpuServidor38", function (req, res) {
    analiseController.mensalAgostoCpuServidor38(req, res);
});

router.get("/mensalSetembroCpuServidor38", function (req, res) {
    analiseController.mensalSetembroCpuServidor38(req, res);
});

router.get("/mensalOutubroCpuServidor38", function (req, res) {
    analiseController.mensalOutubroCpuServidor38(req, res);
});

router.get("/mensalNovembroCpuServidor38", function (req, res) {
    analiseController.mensalNovembroCpuServidor38(req, res);
});

router.get("/mensalDezembroCpuServidor38", function (req, res) {
    analiseController.mensalDezembroCpuServidor38(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor38", function (req, res) {
    analiseController.mensalJaneiroRamServidor38(req, res);
});

router.get("/mensalFevereiroRamServidor38", function (req, res) {
    analiseController.mensalFevereiroRamServidor38(req, res);
});

router.get("/mensalMarcoRamServidor38", function (req, res) {
    analiseController.mensalMarcoRamServidor38(req, res);
});

router.get("/mensalAbrilRamServidor38", function (req, res) {
    analiseController.mensalAbrilRamServidor38(req, res);
});

router.get("/mensalMaioRamServidor38", function (req, res) {
    analiseController.mensalMaioRamServidor38(req, res);
});

router.get("/mensalJunhoRamServidor38", function (req, res) {
    analiseController.mensalJunhoRamServidor38(req, res);
});

router.get("/mensalJulhoRamServidor38", function (req, res) {
    analiseController.mensalJulhoRamServidor38(req, res);
});

router.get("/mensalAgostoRamServidor38", function (req, res) {
    analiseController.mensalAgostoRamServidor38(req, res);
});

router.get("/mensalSetembroRamServidor38", function (req, res) {
    analiseController.mensalSetembroRamServidor38(req, res);
});

router.get("/mensalOutubroRamServidor38", function (req, res) {
    analiseController.mensalOutubroRamServidor38(req, res);
});

router.get("/mensalNovembroRamServidor38", function (req, res) {
    analiseController.mensalNovembroRamServidor38(req, res);
});

router.get("/mensalDezembroRamServidor38", function (req, res) {
    analiseController.mensalDezembroRamServidor38(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor38", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor38(req, res);
});

router.get("/mensalFevereiroDiscoServidor38", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor38(req, res);
});

router.get("/mensalMarcoDiscoServidor38", function (req, res) {
    analiseController.mensalMarcoDiscoServidor38(req, res);
});

router.get("/mensalAbrilDiscoServidor38", function (req, res) {
    analiseController.mensalAbrilDiscoServidor38(req, res);
});

router.get("/mensalMaioDiscoServidor38", function (req, res) {
    analiseController.mensalMaioDiscoServidor38(req, res);
});

router.get("/mensalJunhoDiscoServidor38", function (req, res) {
    analiseController.mensalJunhoDiscoServidor38(req, res);
});

router.get("/mensalJulhoDiscoServidor38", function (req, res) {
    analiseController.mensalJulhoDiscoServidor38(req, res);
});

router.get("/mensalAgostoDiscoServidor38", function (req, res) {
    analiseController.mensalAgostoDiscoServidor38(req, res);
});

router.get("/mensalSetembroDiscoServidor38", function (req, res) {
    analiseController.mensalSetembroDiscoServidor38(req, res);
});

router.get("/mensalOutubroDiscoServidor38", function (req, res) {
    analiseController.mensalOutubroDiscoServidor38(req, res);
});

router.get("/mensalNovembroDiscoServidor38", function (req, res) {
    analiseController.mensalNovembroDiscoServidor38(req, res);
});

router.get("/mensalDezembroDiscoServidor38", function (req, res) {
    analiseController.mensalDezembroDiscoServidor38(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor38", function (req, res) {
    analiseController.limiteJaneiroCpuServidor38(req, res);
});

router.get("/limiteFevereiroCpuServidor38", function (req, res) {
    analiseController.limiteFevereiroCpuServidor38(req, res);
});

router.get("/limiteMarcoCpuServidor38", function (req, res) {
    analiseController.limiteMarcoCpuServidor38(req, res);
});

router.get("/limiteAbrilCpuServidor38", function (req, res) {
    analiseController.limiteAbrilCpuServidor38(req, res);
});

router.get("/limiteMaioCpuServidor38", function (req, res) {
    analiseController.limiteMaioCpuServidor38(req, res);
});

router.get("/limiteJunhoCpuServidor38", function (req, res) {
    analiseController.limiteJunhoCpuServidor38(req, res);
});

router.get("/limiteJulhoCpuServidor38", function (req, res) {
    analiseController.limiteJulhoCpuServidor38(req, res);
});

router.get("/limiteAgostoCpuServidor38", function (req, res) {
    analiseController.limiteAgostoCpuServidor38(req, res);
});

router.get("/limiteSetembroCpuServidor38", function (req, res) {
    analiseController.limiteSetembroCpuServidor38(req, res);
});

router.get("/limiteOutubroCpuServidor38", function (req, res) {
    analiseController.limiteOutubroCpuServidor38(req, res);
});

router.get("/limiteNovembroCpuServidor38", function (req, res) {
    analiseController.limiteNovembroCpuServidor38(req, res);
});

router.get("/limiteDezembroCpuServidor38", function (req, res) {
    analiseController.limiteDezembroCpuServidor38(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor38", function (req, res) {
    analiseController.limiteJaneiroRamServidor38(req, res);
});

router.get("/limiteFevereiroRamServidor38", function (req, res) {
    analiseController.limiteFevereiroRamServidor38(req, res);
});

router.get("/limiteMarcoRamServidor38", function (req, res) {
    analiseController.limiteMarcoRamServidor38(req, res);
});

router.get("/limiteAbrilRamServidor38", function (req, res) {
    analiseController.limiteAbrilRamServidor38(req, res);
});

router.get("/limiteMaioRamServidor38", function (req, res) {
    analiseController.limiteMaioRamServidor38(req, res);
});

router.get("/limiteJunhoRamServidor38", function (req, res) {
    analiseController.limiteJunhoRamServidor38(req, res);
});

router.get("/limiteJulhoRamServidor38", function (req, res) {
    analiseController.limiteJulhoRamServidor38(req, res);
});

router.get("/limiteAgostoRamServidor38", function (req, res) {
    analiseController.limiteAgostoRamServidor38(req, res);
});

router.get("/limiteSetembroRamServidor38", function (req, res) {
    analiseController.limiteSetembroRamServidor38(req, res);
});

router.get("/limiteOutubroRamServidor38", function (req, res) {
    analiseController.limiteOutubroRamServidor38(req, res);
});

router.get("/limiteNovembroRamServidor38", function (req, res) {
    analiseController.limiteNovembroRamServidor38(req, res);
});

router.get("/limiteDezembroRamServidor38", function (req, res) {
    analiseController.limiteDezembroRamServidor38(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor38", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor38(req, res);
});

router.get("/limiteFevereiroDiscoServidor38", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor38(req, res);
});

router.get("/limiteMarcoDiscoServidor38", function (req, res) {
    analiseController.limiteMarcoDiscoServidor38(req, res);
});

router.get("/limiteAbrilDiscoServidor38", function (req, res) {
    analiseController.limiteAbrilDiscoServidor38(req, res);
});

router.get("/limiteMaioDiscoServidor38", function (req, res) {
    analiseController.limiteMaioDiscoServidor38(req, res);
});

router.get("/limiteJunhoDiscoServidor38", function (req, res) {
    analiseController.limiteJunhoDiscoServidor38(req, res);
});

router.get("/limiteJulhoDiscoServidor38", function (req, res) {
    analiseController.limiteJulhoDiscoServidor38(req, res);
});

router.get("/limiteAgostoDiscoServidor38", function (req, res) {
    analiseController.limiteAgostoDiscoServidor38(req, res);
});

router.get("/limiteSetembroDiscoServidor38", function (req, res) {
    analiseController.limiteSetembroDiscoServidor38(req, res);
});

router.get("/limiteOutubroDiscoServidor38", function (req, res) {
    analiseController.limiteOutubroDiscoServidor38(req, res);
});

router.get("/limiteNovembroDiscoServidor38", function (req, res) {
    analiseController.limiteNovembroDiscoServidor38(req, res);
});

router.get("/limiteDezembroDiscoServidor38", function (req, res) {
    analiseController.limiteDezembroDiscoServidor38(req, res);
});

router.get("/mensalJaneiroCpuServidor39", function (req, res) {
    analiseController.mensalJaneiroCpuServidor39(req, res);
});

router.get("/mensalFevereiroCpuServidor39", function (req, res) {
    analiseController.mensalFevereiroCpuServidor39(req, res);
});

router.get("/mensalMarcoCpuServidor39", function (req, res) {
    analiseController.mensalMarcoCpuServidor39(req, res);
});

router.get("/mensalAbrilCpuServidor39", function (req, res) {
    analiseController.mensalAbrilCpuServidor39(req, res);
});

router.get("/mensalMaioCpuServidor39", function (req, res) {
    analiseController.mensalMaioCpuServidor39(req, res);
});

router.get("/mensalJunhoCpuServidor39", function (req, res) {
    analiseController.mensalJunhoCpuServidor39(req, res);
});

router.get("/mensalJulhoCpuServidor39", function (req, res) {
    analiseController.mensalJulhoCpuServidor39(req, res);
});

router.get("/mensalAgostoCpuServidor39", function (req, res) {
    analiseController.mensalAgostoCpuServidor39(req, res);
});

router.get("/mensalSetembroCpuServidor39", function (req, res) {
    analiseController.mensalSetembroCpuServidor39(req, res);
});

router.get("/mensalOutubroCpuServidor39", function (req, res) {
    analiseController.mensalOutubroCpuServidor39(req, res);
});

router.get("/mensalNovembroCpuServidor39", function (req, res) {
    analiseController.mensalNovembroCpuServidor39(req, res);
});

router.get("/mensalDezembroCpuServidor39", function (req, res) {
    analiseController.mensalDezembroCpuServidor39(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor39", function (req, res) {
    analiseController.mensalJaneiroRamServidor39(req, res);
});

router.get("/mensalFevereiroRamServidor39", function (req, res) {
    analiseController.mensalFevereiroRamServidor39(req, res);
});

router.get("/mensalMarcoRamServidor39", function (req, res) {
    analiseController.mensalMarcoRamServidor39(req, res);
});

router.get("/mensalAbrilRamServidor39", function (req, res) {
    analiseController.mensalAbrilRamServidor39(req, res);
});

router.get("/mensalMaioRamServidor39", function (req, res) {
    analiseController.mensalMaioRamServidor39(req, res);
});

router.get("/mensalJunhoRamServidor39", function (req, res) {
    analiseController.mensalJunhoRamServidor39(req, res);
});

router.get("/mensalJulhoRamServidor39", function (req, res) {
    analiseController.mensalJulhoRamServidor39(req, res);
});

router.get("/mensalAgostoRamServidor39", function (req, res) {
    analiseController.mensalAgostoRamServidor39(req, res);
});

router.get("/mensalSetembroRamServidor39", function (req, res) {
    analiseController.mensalSetembroRamServidor39(req, res);
});

router.get("/mensalOutubroRamServidor39", function (req, res) {
    analiseController.mensalOutubroRamServidor39(req, res);
});

router.get("/mensalNovembroRamServidor39", function (req, res) {
    analiseController.mensalNovembroRamServidor39(req, res);
});

router.get("/mensalDezembroRamServidor39", function (req, res) {
    analiseController.mensalDezembroRamServidor39(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor39", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor39(req, res);
});

router.get("/mensalFevereiroDiscoServidor39", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor39(req, res);
});

router.get("/mensalMarcoDiscoServidor39", function (req, res) {
    analiseController.mensalMarcoDiscoServidor39(req, res);
});

router.get("/mensalAbrilDiscoServidor39", function (req, res) {
    analiseController.mensalAbrilDiscoServidor39(req, res);
});

router.get("/mensalMaioDiscoServidor39", function (req, res) {
    analiseController.mensalMaioDiscoServidor39(req, res);
});

router.get("/mensalJunhoDiscoServidor39", function (req, res) {
    analiseController.mensalJunhoDiscoServidor39(req, res);
});

router.get("/mensalJulhoDiscoServidor39", function (req, res) {
    analiseController.mensalJulhoDiscoServidor39(req, res);
});

router.get("/mensalAgostoDiscoServidor39", function (req, res) {
    analiseController.mensalAgostoDiscoServidor39(req, res);
});

router.get("/mensalSetembroDiscoServidor39", function (req, res) {
    analiseController.mensalSetembroDiscoServidor39(req, res);
});

router.get("/mensalOutubroDiscoServidor39", function (req, res) {
    analiseController.mensalOutubroDiscoServidor39(req, res);
});

router.get("/mensalNovembroDiscoServidor39", function (req, res) {
    analiseController.mensalNovembroDiscoServidor39(req, res);
});

router.get("/mensalDezembroDiscoServidor39", function (req, res) {
    analiseController.mensalDezembroDiscoServidor39(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor39", function (req, res) {
    analiseController.limiteJaneiroCpuServidor39(req, res);
});

router.get("/limiteFevereiroCpuServidor39", function (req, res) {
    analiseController.limiteFevereiroCpuServidor39(req, res);
});

router.get("/limiteMarcoCpuServidor39", function (req, res) {
    analiseController.limiteMarcoCpuServidor39(req, res);
});

router.get("/limiteAbrilCpuServidor39", function (req, res) {
    analiseController.limiteAbrilCpuServidor39(req, res);
});

router.get("/limiteMaioCpuServidor39", function (req, res) {
    analiseController.limiteMaioCpuServidor39(req, res);
});

router.get("/limiteJunhoCpuServidor39", function (req, res) {
    analiseController.limiteJunhoCpuServidor39(req, res);
});

router.get("/limiteJulhoCpuServidor39", function (req, res) {
    analiseController.limiteJulhoCpuServidor39(req, res);
});

router.get("/limiteAgostoCpuServidor39", function (req, res) {
    analiseController.limiteAgostoCpuServidor39(req, res);
});

router.get("/limiteSetembroCpuServidor39", function (req, res) {
    analiseController.limiteSetembroCpuServidor39(req, res);
});

router.get("/limiteOutubroCpuServidor39", function (req, res) {
    analiseController.limiteOutubroCpuServidor39(req, res);
});

router.get("/limiteNovembroCpuServidor39", function (req, res) {
    analiseController.limiteNovembroCpuServidor39(req, res);
});

router.get("/limiteDezembroCpuServidor39", function (req, res) {
    analiseController.limiteDezembroCpuServidor39(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor39", function (req, res) {
    analiseController.limiteJaneiroRamServidor39(req, res);
});

router.get("/limiteFevereiroRamServidor39", function (req, res) {
    analiseController.limiteFevereiroRamServidor39(req, res);
});

router.get("/limiteMarcoRamServidor39", function (req, res) {
    analiseController.limiteMarcoRamServidor39(req, res);
});

router.get("/limiteAbrilRamServidor39", function (req, res) {
    analiseController.limiteAbrilRamServidor39(req, res);
});

router.get("/limiteMaioRamServidor39", function (req, res) {
    analiseController.limiteMaioRamServidor39(req, res);
});

router.get("/limiteJunhoRamServidor39", function (req, res) {
    analiseController.limiteJunhoRamServidor39(req, res);
});

router.get("/limiteJulhoRamServidor39", function (req, res) {
    analiseController.limiteJulhoRamServidor39(req, res);
});

router.get("/limiteAgostoRamServidor39", function (req, res) {
    analiseController.limiteAgostoRamServidor39(req, res);
});

router.get("/limiteSetembroRamServidor39", function (req, res) {
    analiseController.limiteSetembroRamServidor39(req, res);
});

router.get("/limiteOutubroRamServidor39", function (req, res) {
    analiseController.limiteOutubroRamServidor39(req, res);
});

router.get("/limiteNovembroRamServidor39", function (req, res) {
    analiseController.limiteNovembroRamServidor39(req, res);
});

router.get("/limiteDezembroRamServidor39", function (req, res) {
    analiseController.limiteDezembroRamServidor39(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor39", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor39(req, res);
});

router.get("/limiteFevereiroDiscoServidor39", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor39(req, res);
});

router.get("/limiteMarcoDiscoServidor39", function (req, res) {
    analiseController.limiteMarcoDiscoServidor39(req, res);
});

router.get("/limiteAbrilDiscoServidor39", function (req, res) {
    analiseController.limiteAbrilDiscoServidor39(req, res);
});

router.get("/limiteMaioDiscoServidor39", function (req, res) {
    analiseController.limiteMaioDiscoServidor39(req, res);
});

router.get("/limiteJunhoDiscoServidor39", function (req, res) {
    analiseController.limiteJunhoDiscoServidor39(req, res);
});

router.get("/limiteJulhoDiscoServidor39", function (req, res) {
    analiseController.limiteJulhoDiscoServidor39(req, res);
});

router.get("/limiteAgostoDiscoServidor39", function (req, res) {
    analiseController.limiteAgostoDiscoServidor39(req, res);
});

router.get("/limiteSetembroDiscoServidor39", function (req, res) {
    analiseController.limiteSetembroDiscoServidor39(req, res);
});

router.get("/limiteOutubroDiscoServidor39", function (req, res) {
    analiseController.limiteOutubroDiscoServidor39(req, res);
});

router.get("/limiteNovembroDiscoServidor39", function (req, res) {
    analiseController.limiteNovembroDiscoServidor39(req, res);
});

router.get("/limiteDezembroDiscoServidor39", function (req, res) {
    analiseController.limiteDezembroDiscoServidor39(req, res);
});

router.get("/mensalJaneiroCpuServidor40", function (req, res) {
    analiseController.mensalJaneiroCpuServidor40(req, res);
});

router.get("/mensalFevereiroCpuServidor40", function (req, res) {
    analiseController.mensalFevereiroCpuServidor40(req, res);
});

router.get("/mensalMarcoCpuServidor40", function (req, res) {
    analiseController.mensalMarcoCpuServidor40(req, res);
});

router.get("/mensalAbrilCpuServidor40", function (req, res) {
    analiseController.mensalAbrilCpuServidor40(req, res);
});

router.get("/mensalMaioCpuServidor40", function (req, res) {
    analiseController.mensalMaioCpuServidor40(req, res);
});

router.get("/mensalJunhoCpuServidor40", function (req, res) {
    analiseController.mensalJunhoCpuServidor40(req, res);
});

router.get("/mensalJulhoCpuServidor40", function (req, res) {
    analiseController.mensalJulhoCpuServidor40(req, res);
});

router.get("/mensalAgostoCpuServidor40", function (req, res) {
    analiseController.mensalAgostoCpuServidor40(req, res);
});

router.get("/mensalSetembroCpuServidor40", function (req, res) {
    analiseController.mensalSetembroCpuServidor40(req, res);
});

router.get("/mensalOutubroCpuServidor40", function (req, res) {
    analiseController.mensalOutubroCpuServidor40(req, res);
});

router.get("/mensalNovembroCpuServidor40", function (req, res) {
    analiseController.mensalNovembroCpuServidor40(req, res);
});

router.get("/mensalDezembroCpuServidor40", function (req, res) {
    analiseController.mensalDezembroCpuServidor40(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor40", function (req, res) {
    analiseController.mensalJaneiroRamServidor40(req, res);
});

router.get("/mensalFevereiroRamServidor40", function (req, res) {
    analiseController.mensalFevereiroRamServidor40(req, res);
});

router.get("/mensalMarcoRamServidor40", function (req, res) {
    analiseController.mensalMarcoRamServidor40(req, res);
});

router.get("/mensalAbrilRamServidor40", function (req, res) {
    analiseController.mensalAbrilRamServidor40(req, res);
});

router.get("/mensalMaioRamServidor40", function (req, res) {
    analiseController.mensalMaioRamServidor40(req, res);
});

router.get("/mensalJunhoRamServidor40", function (req, res) {
    analiseController.mensalJunhoRamServidor40(req, res);
});

router.get("/mensalJulhoRamServidor40", function (req, res) {
    analiseController.mensalJulhoRamServidor40(req, res);
});

router.get("/mensalAgostoRamServidor40", function (req, res) {
    analiseController.mensalAgostoRamServidor40(req, res);
});

router.get("/mensalSetembroRamServidor40", function (req, res) {
    analiseController.mensalSetembroRamServidor40(req, res);
});

router.get("/mensalOutubroRamServidor40", function (req, res) {
    analiseController.mensalOutubroRamServidor40(req, res);
});

router.get("/mensalNovembroRamServidor40", function (req, res) {
    analiseController.mensalNovembroRamServidor40(req, res);
});

router.get("/mensalDezembroRamServidor40", function (req, res) {
    analiseController.mensalDezembroRamServidor40(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor40", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor40(req, res);
});

router.get("/mensalFevereiroDiscoServidor40", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor40(req, res);
});

router.get("/mensalMarcoDiscoServidor40", function (req, res) {
    analiseController.mensalMarcoDiscoServidor40(req, res);
});

router.get("/mensalAbrilDiscoServidor40", function (req, res) {
    analiseController.mensalAbrilDiscoServidor40(req, res);
});

router.get("/mensalMaioDiscoServidor40", function (req, res) {
    analiseController.mensalMaioDiscoServidor40(req, res);
});

router.get("/mensalJunhoDiscoServidor40", function (req, res) {
    analiseController.mensalJunhoDiscoServidor40(req, res);
});

router.get("/mensalJulhoDiscoServidor40", function (req, res) {
    analiseController.mensalJulhoDiscoServidor40(req, res);
});

router.get("/mensalAgostoDiscoServidor40", function (req, res) {
    analiseController.mensalAgostoDiscoServidor40(req, res);
});

router.get("/mensalSetembroDiscoServidor40", function (req, res) {
    analiseController.mensalSetembroDiscoServidor40(req, res);
});

router.get("/mensalOutubroDiscoServidor40", function (req, res) {
    analiseController.mensalOutubroDiscoServidor40(req, res);
});

router.get("/mensalNovembroDiscoServidor40", function (req, res) {
    analiseController.mensalNovembroDiscoServidor40(req, res);
});

router.get("/mensalDezembroDiscoServidor40", function (req, res) {
    analiseController.mensalDezembroDiscoServidor40(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor40", function (req, res) {
    analiseController.limiteJaneiroCpuServidor40(req, res);
});

router.get("/limiteFevereiroCpuServidor40", function (req, res) {
    analiseController.limiteFevereiroCpuServidor40(req, res);
});

router.get("/limiteMarcoCpuServidor40", function (req, res) {
    analiseController.limiteMarcoCpuServidor40(req, res);
});

router.get("/limiteAbrilCpuServidor40", function (req, res) {
    analiseController.limiteAbrilCpuServidor40(req, res);
});

router.get("/limiteMaioCpuServidor40", function (req, res) {
    analiseController.limiteMaioCpuServidor40(req, res);
});

router.get("/limiteJunhoCpuServidor40", function (req, res) {
    analiseController.limiteJunhoCpuServidor40(req, res);
});

router.get("/limiteJulhoCpuServidor40", function (req, res) {
    analiseController.limiteJulhoCpuServidor40(req, res);
});

router.get("/limiteAgostoCpuServidor40", function (req, res) {
    analiseController.limiteAgostoCpuServidor40(req, res);
});

router.get("/limiteSetembroCpuServidor40", function (req, res) {
    analiseController.limiteSetembroCpuServidor40(req, res);
});

router.get("/limiteOutubroCpuServidor40", function (req, res) {
    analiseController.limiteOutubroCpuServidor40(req, res);
});

router.get("/limiteNovembroCpuServidor40", function (req, res) {
    analiseController.limiteNovembroCpuServidor40(req, res);
});

router.get("/limiteDezembroCpuServidor40", function (req, res) {
    analiseController.limiteDezembroCpuServidor40(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor40", function (req, res) {
    analiseController.limiteJaneiroRamServidor40(req, res);
});

router.get("/limiteFevereiroRamServidor40", function (req, res) {
    analiseController.limiteFevereiroRamServidor40(req, res);
});

router.get("/limiteMarcoRamServidor40", function (req, res) {
    analiseController.limiteMarcoRamServidor40(req, res);
});

router.get("/limiteAbrilRamServidor40", function (req, res) {
    analiseController.limiteAbrilRamServidor40(req, res);
});

router.get("/limiteMaioRamServidor40", function (req, res) {
    analiseController.limiteMaioRamServidor40(req, res);
});

router.get("/limiteJunhoRamServidor40", function (req, res) {
    analiseController.limiteJunhoRamServidor40(req, res);
});

router.get("/limiteJulhoRamServidor40", function (req, res) {
    analiseController.limiteJulhoRamServidor40(req, res);
});

router.get("/limiteAgostoRamServidor40", function (req, res) {
    analiseController.limiteAgostoRamServidor40(req, res);
});

router.get("/limiteSetembroRamServidor40", function (req, res) {
    analiseController.limiteSetembroRamServidor40(req, res);
});

router.get("/limiteOutubroRamServidor40", function (req, res) {
    analiseController.limiteOutubroRamServidor40(req, res);
});

router.get("/limiteNovembroRamServidor40", function (req, res) {
    analiseController.limiteNovembroRamServidor40(req, res);
});

router.get("/limiteDezembroRamServidor40", function (req, res) {
    analiseController.limiteDezembroRamServidor40(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor40", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor40(req, res);
});

router.get("/limiteFevereiroDiscoServidor40", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor40(req, res);
});

router.get("/limiteMarcoDiscoServidor40", function (req, res) {
    analiseController.limiteMarcoDiscoServidor40(req, res);
});

router.get("/limiteAbrilDiscoServidor40", function (req, res) {
    analiseController.limiteAbrilDiscoServidor40(req, res);
});

router.get("/limiteMaioDiscoServidor40", function (req, res) {
    analiseController.limiteMaioDiscoServidor40(req, res);
});

router.get("/limiteJunhoDiscoServidor40", function (req, res) {
    analiseController.limiteJunhoDiscoServidor40(req, res);
});

router.get("/limiteJulhoDiscoServidor40", function (req, res) {
    analiseController.limiteJulhoDiscoServidor40(req, res);
});

router.get("/limiteAgostoDiscoServidor40", function (req, res) {
    analiseController.limiteAgostoDiscoServidor40(req, res);
});

router.get("/limiteSetembroDiscoServidor40", function (req, res) {
    analiseController.limiteSetembroDiscoServidor40(req, res);
});

router.get("/limiteOutubroDiscoServidor40", function (req, res) {
    analiseController.limiteOutubroDiscoServidor40(req, res);
});

router.get("/limiteNovembroDiscoServidor40", function (req, res) {
    analiseController.limiteNovembroDiscoServidor40(req, res);
});

router.get("/limiteDezembroDiscoServidor40", function (req, res) {
    analiseController.limiteDezembroDiscoServidor40(req, res);
});

router.get("/mensalJaneiroCpuServidor41", function (req, res) {
    analiseController.mensalJaneiroCpuServidor41(req, res);
});

router.get("/mensalFevereiroCpuServidor41", function (req, res) {
    analiseController.mensalFevereiroCpuServidor41(req, res);
});

router.get("/mensalMarcoCpuServidor41", function (req, res) {
    analiseController.mensalMarcoCpuServidor41(req, res);
});

router.get("/mensalAbrilCpuServidor41", function (req, res) {
    analiseController.mensalAbrilCpuServidor41(req, res);
});

router.get("/mensalMaioCpuServidor41", function (req, res) {
    analiseController.mensalMaioCpuServidor41(req, res);
});

router.get("/mensalJunhoCpuServidor41", function (req, res) {
    analiseController.mensalJunhoCpuServidor41(req, res);
});

router.get("/mensalJulhoCpuServidor41", function (req, res) {
    analiseController.mensalJulhoCpuServidor41(req, res);
});

router.get("/mensalAgostoCpuServidor41", function (req, res) {
    analiseController.mensalAgostoCpuServidor41(req, res);
});

router.get("/mensalSetembroCpuServidor41", function (req, res) {
    analiseController.mensalSetembroCpuServidor41(req, res);
});

router.get("/mensalOutubroCpuServidor41", function (req, res) {
    analiseController.mensalOutubroCpuServidor41(req, res);
});

router.get("/mensalNovembroCpuServidor41", function (req, res) {
    analiseController.mensalNovembroCpuServidor41(req, res);
});

router.get("/mensalDezembroCpuServidor41", function (req, res) {
    analiseController.mensalDezembroCpuServidor41(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor41", function (req, res) {
    analiseController.mensalJaneiroRamServidor41(req, res);
});

router.get("/mensalFevereiroRamServidor41", function (req, res) {
    analiseController.mensalFevereiroRamServidor41(req, res);
});

router.get("/mensalMarcoRamServidor41", function (req, res) {
    analiseController.mensalMarcoRamServidor41(req, res);
});

router.get("/mensalAbrilRamServidor41", function (req, res) {
    analiseController.mensalAbrilRamServidor41(req, res);
});

router.get("/mensalMaioRamServidor41", function (req, res) {
    analiseController.mensalMaioRamServidor41(req, res);
});

router.get("/mensalJunhoRamServidor41", function (req, res) {
    analiseController.mensalJunhoRamServidor41(req, res);
});

router.get("/mensalJulhoRamServidor41", function (req, res) {
    analiseController.mensalJulhoRamServidor41(req, res);
});

router.get("/mensalAgostoRamServidor41", function (req, res) {
    analiseController.mensalAgostoRamServidor41(req, res);
});

router.get("/mensalSetembroRamServidor41", function (req, res) {
    analiseController.mensalSetembroRamServidor41(req, res);
});

router.get("/mensalOutubroRamServidor41", function (req, res) {
    analiseController.mensalOutubroRamServidor41(req, res);
});

router.get("/mensalNovembroRamServidor41", function (req, res) {
    analiseController.mensalNovembroRamServidor41(req, res);
});

router.get("/mensalDezembroRamServidor41", function (req, res) {
    analiseController.mensalDezembroRamServidor41(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor41", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor41(req, res);
});

router.get("/mensalFevereiroDiscoServidor41", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor41(req, res);
});

router.get("/mensalMarcoDiscoServidor41", function (req, res) {
    analiseController.mensalMarcoDiscoServidor41(req, res);
});

router.get("/mensalAbrilDiscoServidor41", function (req, res) {
    analiseController.mensalAbrilDiscoServidor41(req, res);
});

router.get("/mensalMaioDiscoServidor41", function (req, res) {
    analiseController.mensalMaioDiscoServidor41(req, res);
});

router.get("/mensalJunhoDiscoServidor41", function (req, res) {
    analiseController.mensalJunhoDiscoServidor41(req, res);
});

router.get("/mensalJulhoDiscoServidor41", function (req, res) {
    analiseController.mensalJulhoDiscoServidor41(req, res);
});

router.get("/mensalAgostoDiscoServidor41", function (req, res) {
    analiseController.mensalAgostoDiscoServidor41(req, res);
});

router.get("/mensalSetembroDiscoServidor41", function (req, res) {
    analiseController.mensalSetembroDiscoServidor41(req, res);
});

router.get("/mensalOutubroDiscoServidor41", function (req, res) {
    analiseController.mensalOutubroDiscoServidor41(req, res);
});

router.get("/mensalNovembroDiscoServidor41", function (req, res) {
    analiseController.mensalNovembroDiscoServidor41(req, res);
});

router.get("/mensalDezembroDiscoServidor41", function (req, res) {
    analiseController.mensalDezembroDiscoServidor41(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor41", function (req, res) {
    analiseController.limiteJaneiroCpuServidor41(req, res);
});

router.get("/limiteFevereiroCpuServidor41", function (req, res) {
    analiseController.limiteFevereiroCpuServidor41(req, res);
});

router.get("/limiteMarcoCpuServidor41", function (req, res) {
    analiseController.limiteMarcoCpuServidor41(req, res);
});

router.get("/limiteAbrilCpuServidor41", function (req, res) {
    analiseController.limiteAbrilCpuServidor41(req, res);
});

router.get("/limiteMaioCpuServidor41", function (req, res) {
    analiseController.limiteMaioCpuServidor41(req, res);
});

router.get("/limiteJunhoCpuServidor41", function (req, res) {
    analiseController.limiteJunhoCpuServidor41(req, res);
});

router.get("/limiteJulhoCpuServidor41", function (req, res) {
    analiseController.limiteJulhoCpuServidor41(req, res);
});

router.get("/limiteAgostoCpuServidor41", function (req, res) {
    analiseController.limiteAgostoCpuServidor41(req, res);
});

router.get("/limiteSetembroCpuServidor41", function (req, res) {
    analiseController.limiteSetembroCpuServidor41(req, res);
});

router.get("/limiteOutubroCpuServidor41", function (req, res) {
    analiseController.limiteOutubroCpuServidor41(req, res);
});

router.get("/limiteNovembroCpuServidor41", function (req, res) {
    analiseController.limiteNovembroCpuServidor41(req, res);
});

router.get("/limiteDezembroCpuServidor41", function (req, res) {
    analiseController.limiteDezembroCpuServidor41(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor41", function (req, res) {
    analiseController.limiteJaneiroRamServidor41(req, res);
});

router.get("/limiteFevereiroRamServidor41", function (req, res) {
    analiseController.limiteFevereiroRamServidor41(req, res);
});

router.get("/limiteMarcoRamServidor41", function (req, res) {
    analiseController.limiteMarcoRamServidor41(req, res);
});

router.get("/limiteAbrilRamServidor41", function (req, res) {
    analiseController.limiteAbrilRamServidor41(req, res);
});

router.get("/limiteMaioRamServidor41", function (req, res) {
    analiseController.limiteMaioRamServidor41(req, res);
});

router.get("/limiteJunhoRamServidor41", function (req, res) {
    analiseController.limiteJunhoRamServidor41(req, res);
});

router.get("/limiteJulhoRamServidor41", function (req, res) {
    analiseController.limiteJulhoRamServidor41(req, res);
});

router.get("/limiteAgostoRamServidor41", function (req, res) {
    analiseController.limiteAgostoRamServidor41(req, res);
});

router.get("/limiteSetembroRamServidor41", function (req, res) {
    analiseController.limiteSetembroRamServidor41(req, res);
});

router.get("/limiteOutubroRamServidor41", function (req, res) {
    analiseController.limiteOutubroRamServidor41(req, res);
});

router.get("/limiteNovembroRamServidor41", function (req, res) {
    analiseController.limiteNovembroRamServidor41(req, res);
});

router.get("/limiteDezembroRamServidor41", function (req, res) {
    analiseController.limiteDezembroRamServidor41(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor41", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor41(req, res);
});

router.get("/limiteFevereiroDiscoServidor41", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor41(req, res);
});

router.get("/limiteMarcoDiscoServidor41", function (req, res) {
    analiseController.limiteMarcoDiscoServidor41(req, res);
});

router.get("/limiteAbrilDiscoServidor41", function (req, res) {
    analiseController.limiteAbrilDiscoServidor41(req, res);
});

router.get("/limiteMaioDiscoServidor41", function (req, res) {
    analiseController.limiteMaioDiscoServidor41(req, res);
});

router.get("/limiteJunhoDiscoServidor41", function (req, res) {
    analiseController.limiteJunhoDiscoServidor41(req, res);
});

router.get("/limiteJulhoDiscoServidor41", function (req, res) {
    analiseController.limiteJulhoDiscoServidor41(req, res);
});

router.get("/limiteAgostoDiscoServidor41", function (req, res) {
    analiseController.limiteAgostoDiscoServidor41(req, res);
});

router.get("/limiteSetembroDiscoServidor41", function (req, res) {
    analiseController.limiteSetembroDiscoServidor41(req, res);
});

router.get("/limiteOutubroDiscoServidor41", function (req, res) {
    analiseController.limiteOutubroDiscoServidor41(req, res);
});

router.get("/limiteNovembroDiscoServidor41", function (req, res) {
    analiseController.limiteNovembroDiscoServidor41(req, res);
});

router.get("/limiteDezembroDiscoServidor41", function (req, res) {
    analiseController.limiteDezembroDiscoServidor41(req, res);
});

router.get("/mensalJaneiroCpuServidor42", function (req, res) {
    analiseController.mensalJaneiroCpuServidor42(req, res);
});

router.get("/mensalFevereiroCpuServidor42", function (req, res) {
    analiseController.mensalFevereiroCpuServidor42(req, res);
});

router.get("/mensalMarcoCpuServidor42", function (req, res) {
    analiseController.mensalMarcoCpuServidor42(req, res);
});

router.get("/mensalAbrilCpuServidor42", function (req, res) {
    analiseController.mensalAbrilCpuServidor42(req, res);
});

router.get("/mensalMaioCpuServidor42", function (req, res) {
    analiseController.mensalMaioCpuServidor42(req, res);
});

router.get("/mensalJunhoCpuServidor42", function (req, res) {
    analiseController.mensalJunhoCpuServidor42(req, res);
});

router.get("/mensalJulhoCpuServidor42", function (req, res) {
    analiseController.mensalJulhoCpuServidor42(req, res);
});

router.get("/mensalAgostoCpuServidor42", function (req, res) {
    analiseController.mensalAgostoCpuServidor42(req, res);
});

router.get("/mensalSetembroCpuServidor42", function (req, res) {
    analiseController.mensalSetembroCpuServidor42(req, res);
});

router.get("/mensalOutubroCpuServidor42", function (req, res) {
    analiseController.mensalOutubroCpuServidor42(req, res);
});

router.get("/mensalNovembroCpuServidor42", function (req, res) {
    analiseController.mensalNovembroCpuServidor42(req, res);
});

router.get("/mensalDezembroCpuServidor42", function (req, res) {
    analiseController.mensalDezembroCpuServidor42(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor42", function (req, res) {
    analiseController.mensalJaneiroRamServidor42(req, res);
});

router.get("/mensalFevereiroRamServidor42", function (req, res) {
    analiseController.mensalFevereiroRamServidor42(req, res);
});

router.get("/mensalMarcoRamServidor42", function (req, res) {
    analiseController.mensalMarcoRamServidor42(req, res);
});

router.get("/mensalAbrilRamServidor42", function (req, res) {
    analiseController.mensalAbrilRamServidor42(req, res);
});

router.get("/mensalMaioRamServidor42", function (req, res) {
    analiseController.mensalMaioRamServidor42(req, res);
});

router.get("/mensalJunhoRamServidor42", function (req, res) {
    analiseController.mensalJunhoRamServidor42(req, res);
});

router.get("/mensalJulhoRamServidor42", function (req, res) {
    analiseController.mensalJulhoRamServidor42(req, res);
});

router.get("/mensalAgostoRamServidor42", function (req, res) {
    analiseController.mensalAgostoRamServidor42(req, res);
});

router.get("/mensalSetembroRamServidor42", function (req, res) {
    analiseController.mensalSetembroRamServidor42(req, res);
});

router.get("/mensalOutubroRamServidor42", function (req, res) {
    analiseController.mensalOutubroRamServidor42(req, res);
});

router.get("/mensalNovembroRamServidor42", function (req, res) {
    analiseController.mensalNovembroRamServidor42(req, res);
});

router.get("/mensalDezembroRamServidor42", function (req, res) {
    analiseController.mensalDezembroRamServidor42(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor42", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor42(req, res);
});

router.get("/mensalFevereiroDiscoServidor42", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor42(req, res);
});

router.get("/mensalMarcoDiscoServidor42", function (req, res) {
    analiseController.mensalMarcoDiscoServidor42(req, res);
});

router.get("/mensalAbrilDiscoServidor42", function (req, res) {
    analiseController.mensalAbrilDiscoServidor42(req, res);
});

router.get("/mensalMaioDiscoServidor42", function (req, res) {
    analiseController.mensalMaioDiscoServidor42(req, res);
});

router.get("/mensalJunhoDiscoServidor42", function (req, res) {
    analiseController.mensalJunhoDiscoServidor42(req, res);
});

router.get("/mensalJulhoDiscoServidor42", function (req, res) {
    analiseController.mensalJulhoDiscoServidor42(req, res);
});

router.get("/mensalAgostoDiscoServidor42", function (req, res) {
    analiseController.mensalAgostoDiscoServidor42(req, res);
});

router.get("/mensalSetembroDiscoServidor42", function (req, res) {
    analiseController.mensalSetembroDiscoServidor42(req, res);
});

router.get("/mensalOutubroDiscoServidor42", function (req, res) {
    analiseController.mensalOutubroDiscoServidor42(req, res);
});

router.get("/mensalNovembroDiscoServidor42", function (req, res) {
    analiseController.mensalNovembroDiscoServidor42(req, res);
});

router.get("/mensalDezembroDiscoServidor42", function (req, res) {
    analiseController.mensalDezembroDiscoServidor42(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor42", function (req, res) {
    analiseController.limiteJaneiroCpuServidor42(req, res);
});

router.get("/limiteFevereiroCpuServidor42", function (req, res) {
    analiseController.limiteFevereiroCpuServidor42(req, res);
});

router.get("/limiteMarcoCpuServidor42", function (req, res) {
    analiseController.limiteMarcoCpuServidor42(req, res);
});

router.get("/limiteAbrilCpuServidor42", function (req, res) {
    analiseController.limiteAbrilCpuServidor42(req, res);
});

router.get("/limiteMaioCpuServidor42", function (req, res) {
    analiseController.limiteMaioCpuServidor42(req, res);
});

router.get("/limiteJunhoCpuServidor42", function (req, res) {
    analiseController.limiteJunhoCpuServidor42(req, res);
});

router.get("/limiteJulhoCpuServidor42", function (req, res) {
    analiseController.limiteJulhoCpuServidor42(req, res);
});

router.get("/limiteAgostoCpuServidor42", function (req, res) {
    analiseController.limiteAgostoCpuServidor42(req, res);
});

router.get("/limiteSetembroCpuServidor42", function (req, res) {
    analiseController.limiteSetembroCpuServidor42(req, res);
});

router.get("/limiteOutubroCpuServidor42", function (req, res) {
    analiseController.limiteOutubroCpuServidor42(req, res);
});

router.get("/limiteNovembroCpuServidor42", function (req, res) {
    analiseController.limiteNovembroCpuServidor42(req, res);
});

router.get("/limiteDezembroCpuServidor42", function (req, res) {
    analiseController.limiteDezembroCpuServidor42(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor42", function (req, res) {
    analiseController.limiteJaneiroRamServidor42(req, res);
});

router.get("/limiteFevereiroRamServidor42", function (req, res) {
    analiseController.limiteFevereiroRamServidor42(req, res);
});

router.get("/limiteMarcoRamServidor42", function (req, res) {
    analiseController.limiteMarcoRamServidor42(req, res);
});

router.get("/limiteAbrilRamServidor42", function (req, res) {
    analiseController.limiteAbrilRamServidor42(req, res);
});

router.get("/limiteMaioRamServidor42", function (req, res) {
    analiseController.limiteMaioRamServidor42(req, res);
});

router.get("/limiteJunhoRamServidor42", function (req, res) {
    analiseController.limiteJunhoRamServidor42(req, res);
});

router.get("/limiteJulhoRamServidor42", function (req, res) {
    analiseController.limiteJulhoRamServidor42(req, res);
});

router.get("/limiteAgostoRamServidor42", function (req, res) {
    analiseController.limiteAgostoRamServidor42(req, res);
});

router.get("/limiteSetembroRamServidor42", function (req, res) {
    analiseController.limiteSetembroRamServidor42(req, res);
});

router.get("/limiteOutubroRamServidor42", function (req, res) {
    analiseController.limiteOutubroRamServidor42(req, res);
});

router.get("/limiteNovembroRamServidor42", function (req, res) {
    analiseController.limiteNovembroRamServidor42(req, res);
});

router.get("/limiteDezembroRamServidor42", function (req, res) {
    analiseController.limiteDezembroRamServidor42(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor42", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor42(req, res);
});

router.get("/limiteFevereiroDiscoServidor42", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor42(req, res);
});

router.get("/limiteMarcoDiscoServidor42", function (req, res) {
    analiseController.limiteMarcoDiscoServidor42(req, res);
});

router.get("/limiteAbrilDiscoServidor42", function (req, res) {
    analiseController.limiteAbrilDiscoServidor42(req, res);
});

router.get("/limiteMaioDiscoServidor42", function (req, res) {
    analiseController.limiteMaioDiscoServidor42(req, res);
});

router.get("/limiteJunhoDiscoServidor42", function (req, res) {
    analiseController.limiteJunhoDiscoServidor42(req, res);
});

router.get("/limiteJulhoDiscoServidor42", function (req, res) {
    analiseController.limiteJulhoDiscoServidor42(req, res);
});

router.get("/limiteAgostoDiscoServidor42", function (req, res) {
    analiseController.limiteAgostoDiscoServidor42(req, res);
});

router.get("/limiteSetembroDiscoServidor42", function (req, res) {
    analiseController.limiteSetembroDiscoServidor42(req, res);
});

router.get("/limiteOutubroDiscoServidor42", function (req, res) {
    analiseController.limiteOutubroDiscoServidor42(req, res);
});

router.get("/limiteNovembroDiscoServidor42", function (req, res) {
    analiseController.limiteNovembroDiscoServidor42(req, res);
});

router.get("/limiteDezembroDiscoServidor42", function (req, res) {
    analiseController.limiteDezembroDiscoServidor42(req, res);
});

router.get("/mensalJaneiroCpuServidor43", function (req, res) {
    analiseController.mensalJaneiroCpuServidor43(req, res);
});

router.get("/mensalFevereiroCpuServidor43", function (req, res) {
    analiseController.mensalFevereiroCpuServidor43(req, res);
});

router.get("/mensalMarcoCpuServidor43", function (req, res) {
    analiseController.mensalMarcoCpuServidor43(req, res);
});

router.get("/mensalAbrilCpuServidor43", function (req, res) {
    analiseController.mensalAbrilCpuServidor43(req, res);
});

router.get("/mensalMaioCpuServidor43", function (req, res) {
    analiseController.mensalMaioCpuServidor43(req, res);
});

router.get("/mensalJunhoCpuServidor43", function (req, res) {
    analiseController.mensalJunhoCpuServidor43(req, res);
});

router.get("/mensalJulhoCpuServidor43", function (req, res) {
    analiseController.mensalJulhoCpuServidor43(req, res);
});

router.get("/mensalAgostoCpuServidor43", function (req, res) {
    analiseController.mensalAgostoCpuServidor43(req, res);
});

router.get("/mensalSetembroCpuServidor43", function (req, res) {
    analiseController.mensalSetembroCpuServidor43(req, res);
});

router.get("/mensalOutubroCpuServidor43", function (req, res) {
    analiseController.mensalOutubroCpuServidor43(req, res);
});

router.get("/mensalNovembroCpuServidor43", function (req, res) {
    analiseController.mensalNovembroCpuServidor43(req, res);
});

router.get("/mensalDezembroCpuServidor43", function (req, res) {
    analiseController.mensalDezembroCpuServidor43(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor43", function (req, res) {
    analiseController.mensalJaneiroRamServidor43(req, res);
});

router.get("/mensalFevereiroRamServidor43", function (req, res) {
    analiseController.mensalFevereiroRamServidor43(req, res);
});

router.get("/mensalMarcoRamServidor43", function (req, res) {
    analiseController.mensalMarcoRamServidor43(req, res);
});

router.get("/mensalAbrilRamServidor43", function (req, res) {
    analiseController.mensalAbrilRamServidor43(req, res);
});

router.get("/mensalMaioRamServidor43", function (req, res) {
    analiseController.mensalMaioRamServidor43(req, res);
});

router.get("/mensalJunhoRamServidor43", function (req, res) {
    analiseController.mensalJunhoRamServidor43(req, res);
});

router.get("/mensalJulhoRamServidor43", function (req, res) {
    analiseController.mensalJulhoRamServidor43(req, res);
});

router.get("/mensalAgostoRamServidor43", function (req, res) {
    analiseController.mensalAgostoRamServidor43(req, res);
});

router.get("/mensalSetembroRamServidor43", function (req, res) {
    analiseController.mensalSetembroRamServidor43(req, res);
});

router.get("/mensalOutubroRamServidor43", function (req, res) {
    analiseController.mensalOutubroRamServidor43(req, res);
});

router.get("/mensalNovembroRamServidor43", function (req, res) {
    analiseController.mensalNovembroRamServidor43(req, res);
});

router.get("/mensalDezembroRamServidor43", function (req, res) {
    analiseController.mensalDezembroRamServidor43(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor43", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor43(req, res);
});

router.get("/mensalFevereiroDiscoServidor43", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor43(req, res);
});

router.get("/mensalMarcoDiscoServidor43", function (req, res) {
    analiseController.mensalMarcoDiscoServidor43(req, res);
});

router.get("/mensalAbrilDiscoServidor43", function (req, res) {
    analiseController.mensalAbrilDiscoServidor43(req, res);
});

router.get("/mensalMaioDiscoServidor43", function (req, res) {
    analiseController.mensalMaioDiscoServidor43(req, res);
});

router.get("/mensalJunhoDiscoServidor43", function (req, res) {
    analiseController.mensalJunhoDiscoServidor43(req, res);
});

router.get("/mensalJulhoDiscoServidor43", function (req, res) {
    analiseController.mensalJulhoDiscoServidor43(req, res);
});

router.get("/mensalAgostoDiscoServidor43", function (req, res) {
    analiseController.mensalAgostoDiscoServidor43(req, res);
});

router.get("/mensalSetembroDiscoServidor43", function (req, res) {
    analiseController.mensalSetembroDiscoServidor43(req, res);
});

router.get("/mensalOutubroDiscoServidor43", function (req, res) {
    analiseController.mensalOutubroDiscoServidor43(req, res);
});

router.get("/mensalNovembroDiscoServidor43", function (req, res) {
    analiseController.mensalNovembroDiscoServidor43(req, res);
});

router.get("/mensalDezembroDiscoServidor43", function (req, res) {
    analiseController.mensalDezembroDiscoServidor43(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor43", function (req, res) {
    analiseController.limiteJaneiroCpuServidor43(req, res);
});

router.get("/limiteFevereiroCpuServidor43", function (req, res) {
    analiseController.limiteFevereiroCpuServidor43(req, res);
});

router.get("/limiteMarcoCpuServidor43", function (req, res) {
    analiseController.limiteMarcoCpuServidor43(req, res);
});

router.get("/limiteAbrilCpuServidor43", function (req, res) {
    analiseController.limiteAbrilCpuServidor43(req, res);
});

router.get("/limiteMaioCpuServidor43", function (req, res) {
    analiseController.limiteMaioCpuServidor43(req, res);
});

router.get("/limiteJunhoCpuServidor43", function (req, res) {
    analiseController.limiteJunhoCpuServidor43(req, res);
});

router.get("/limiteJulhoCpuServidor43", function (req, res) {
    analiseController.limiteJulhoCpuServidor43(req, res);
});

router.get("/limiteAgostoCpuServidor43", function (req, res) {
    analiseController.limiteAgostoCpuServidor43(req, res);
});

router.get("/limiteSetembroCpuServidor43", function (req, res) {
    analiseController.limiteSetembroCpuServidor43(req, res);
});

router.get("/limiteOutubroCpuServidor43", function (req, res) {
    analiseController.limiteOutubroCpuServidor43(req, res);
});

router.get("/limiteNovembroCpuServidor43", function (req, res) {
    analiseController.limiteNovembroCpuServidor43(req, res);
});

router.get("/limiteDezembroCpuServidor43", function (req, res) {
    analiseController.limiteDezembroCpuServidor43(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor43", function (req, res) {
    analiseController.limiteJaneiroRamServidor43(req, res);
});

router.get("/limiteFevereiroRamServidor43", function (req, res) {
    analiseController.limiteFevereiroRamServidor43(req, res);
});

router.get("/limiteMarcoRamServidor43", function (req, res) {
    analiseController.limiteMarcoRamServidor43(req, res);
});

router.get("/limiteAbrilRamServidor43", function (req, res) {
    analiseController.limiteAbrilRamServidor43(req, res);
});

router.get("/limiteMaioRamServidor43", function (req, res) {
    analiseController.limiteMaioRamServidor43(req, res);
});

router.get("/limiteJunhoRamServidor43", function (req, res) {
    analiseController.limiteJunhoRamServidor43(req, res);
});

router.get("/limiteJulhoRamServidor43", function (req, res) {
    analiseController.limiteJulhoRamServidor43(req, res);
});

router.get("/limiteAgostoRamServidor43", function (req, res) {
    analiseController.limiteAgostoRamServidor43(req, res);
});

router.get("/limiteSetembroRamServidor43", function (req, res) {
    analiseController.limiteSetembroRamServidor43(req, res);
});

router.get("/limiteOutubroRamServidor43", function (req, res) {
    analiseController.limiteOutubroRamServidor43(req, res);
});

router.get("/limiteNovembroRamServidor43", function (req, res) {
    analiseController.limiteNovembroRamServidor43(req, res);
});

router.get("/limiteDezembroRamServidor43", function (req, res) {
    analiseController.limiteDezembroRamServidor43(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor43", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor43(req, res);
});

router.get("/limiteFevereiroDiscoServidor43", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor43(req, res);
});

router.get("/limiteMarcoDiscoServidor43", function (req, res) {
    analiseController.limiteMarcoDiscoServidor43(req, res);
});

router.get("/limiteAbrilDiscoServidor43", function (req, res) {
    analiseController.limiteAbrilDiscoServidor43(req, res);
});

router.get("/limiteMaioDiscoServidor43", function (req, res) {
    analiseController.limiteMaioDiscoServidor43(req, res);
});

router.get("/limiteJunhoDiscoServidor43", function (req, res) {
    analiseController.limiteJunhoDiscoServidor43(req, res);
});

router.get("/limiteJulhoDiscoServidor43", function (req, res) {
    analiseController.limiteJulhoDiscoServidor43(req, res);
});

router.get("/limiteAgostoDiscoServidor43", function (req, res) {
    analiseController.limiteAgostoDiscoServidor43(req, res);
});

router.get("/limiteSetembroDiscoServidor43", function (req, res) {
    analiseController.limiteSetembroDiscoServidor43(req, res);
});

router.get("/limiteOutubroDiscoServidor43", function (req, res) {
    analiseController.limiteOutubroDiscoServidor43(req, res);
});

router.get("/limiteNovembroDiscoServidor43", function (req, res) {
    analiseController.limiteNovembroDiscoServidor43(req, res);
});

router.get("/limiteDezembroDiscoServidor43", function (req, res) {
    analiseController.limiteDezembroDiscoServidor43(req, res);
});

router.get("/mensalJaneiroCpuServidor44", function (req, res) {
    analiseController.mensalJaneiroCpuServidor44(req, res);
});

router.get("/mensalFevereiroCpuServidor44", function (req, res) {
    analiseController.mensalFevereiroCpuServidor44(req, res);
});

router.get("/mensalMarcoCpuServidor44", function (req, res) {
    analiseController.mensalMarcoCpuServidor44(req, res);
});

router.get("/mensalAbrilCpuServidor44", function (req, res) {
    analiseController.mensalAbrilCpuServidor44(req, res);
});

router.get("/mensalMaioCpuServidor44", function (req, res) {
    analiseController.mensalMaioCpuServidor44(req, res);
});

router.get("/mensalJunhoCpuServidor44", function (req, res) {
    analiseController.mensalJunhoCpuServidor44(req, res);
});

router.get("/mensalJulhoCpuServidor44", function (req, res) {
    analiseController.mensalJulhoCpuServidor44(req, res);
});

router.get("/mensalAgostoCpuServidor44", function (req, res) {
    analiseController.mensalAgostoCpuServidor44(req, res);
});

router.get("/mensalSetembroCpuServidor44", function (req, res) {
    analiseController.mensalSetembroCpuServidor44(req, res);
});

router.get("/mensalOutubroCpuServidor44", function (req, res) {
    analiseController.mensalOutubroCpuServidor44(req, res);
});

router.get("/mensalNovembroCpuServidor44", function (req, res) {
    analiseController.mensalNovembroCpuServidor44(req, res);
});

router.get("/mensalDezembroCpuServidor44", function (req, res) {
    analiseController.mensalDezembroCpuServidor44(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor44", function (req, res) {
    analiseController.mensalJaneiroRamServidor44(req, res);
});

router.get("/mensalFevereiroRamServidor44", function (req, res) {
    analiseController.mensalFevereiroRamServidor44(req, res);
});

router.get("/mensalMarcoRamServidor44", function (req, res) {
    analiseController.mensalMarcoRamServidor44(req, res);
});

router.get("/mensalAbrilRamServidor44", function (req, res) {
    analiseController.mensalAbrilRamServidor44(req, res);
});

router.get("/mensalMaioRamServidor44", function (req, res) {
    analiseController.mensalMaioRamServidor44(req, res);
});

router.get("/mensalJunhoRamServidor44", function (req, res) {
    analiseController.mensalJunhoRamServidor44(req, res);
});

router.get("/mensalJulhoRamServidor44", function (req, res) {
    analiseController.mensalJulhoRamServidor44(req, res);
});

router.get("/mensalAgostoRamServidor44", function (req, res) {
    analiseController.mensalAgostoRamServidor44(req, res);
});

router.get("/mensalSetembroRamServidor44", function (req, res) {
    analiseController.mensalSetembroRamServidor44(req, res);
});

router.get("/mensalOutubroRamServidor44", function (req, res) {
    analiseController.mensalOutubroRamServidor44(req, res);
});

router.get("/mensalNovembroRamServidor44", function (req, res) {
    analiseController.mensalNovembroRamServidor44(req, res);
});

router.get("/mensalDezembroRamServidor44", function (req, res) {
    analiseController.mensalDezembroRamServidor44(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor44", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor44(req, res);
});

router.get("/mensalFevereiroDiscoServidor44", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor44(req, res);
});

router.get("/mensalMarcoDiscoServidor44", function (req, res) {
    analiseController.mensalMarcoDiscoServidor44(req, res);
});

router.get("/mensalAbrilDiscoServidor44", function (req, res) {
    analiseController.mensalAbrilDiscoServidor44(req, res);
});

router.get("/mensalMaioDiscoServidor44", function (req, res) {
    analiseController.mensalMaioDiscoServidor44(req, res);
});

router.get("/mensalJunhoDiscoServidor44", function (req, res) {
    analiseController.mensalJunhoDiscoServidor44(req, res);
});

router.get("/mensalJulhoDiscoServidor44", function (req, res) {
    analiseController.mensalJulhoDiscoServidor44(req, res);
});

router.get("/mensalAgostoDiscoServidor44", function (req, res) {
    analiseController.mensalAgostoDiscoServidor44(req, res);
});

router.get("/mensalSetembroDiscoServidor44", function (req, res) {
    analiseController.mensalSetembroDiscoServidor44(req, res);
});

router.get("/mensalOutubroDiscoServidor44", function (req, res) {
    analiseController.mensalOutubroDiscoServidor44(req, res);
});

router.get("/mensalNovembroDiscoServidor44", function (req, res) {
    analiseController.mensalNovembroDiscoServidor44(req, res);
});

router.get("/mensalDezembroDiscoServidor44", function (req, res) {
    analiseController.mensalDezembroDiscoServidor44(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor44", function (req, res) {
    analiseController.limiteJaneiroCpuServidor44(req, res);
});

router.get("/limiteFevereiroCpuServidor44", function (req, res) {
    analiseController.limiteFevereiroCpuServidor44(req, res);
});

router.get("/limiteMarcoCpuServidor44", function (req, res) {
    analiseController.limiteMarcoCpuServidor44(req, res);
});

router.get("/limiteAbrilCpuServidor44", function (req, res) {
    analiseController.limiteAbrilCpuServidor44(req, res);
});

router.get("/limiteMaioCpuServidor44", function (req, res) {
    analiseController.limiteMaioCpuServidor44(req, res);
});

router.get("/limiteJunhoCpuServidor44", function (req, res) {
    analiseController.limiteJunhoCpuServidor44(req, res);
});

router.get("/limiteJulhoCpuServidor44", function (req, res) {
    analiseController.limiteJulhoCpuServidor44(req, res);
});

router.get("/limiteAgostoCpuServidor44", function (req, res) {
    analiseController.limiteAgostoCpuServidor44(req, res);
});

router.get("/limiteSetembroCpuServidor44", function (req, res) {
    analiseController.limiteSetembroCpuServidor44(req, res);
});

router.get("/limiteOutubroCpuServidor44", function (req, res) {
    analiseController.limiteOutubroCpuServidor44(req, res);
});

router.get("/limiteNovembroCpuServidor44", function (req, res) {
    analiseController.limiteNovembroCpuServidor44(req, res);
});

router.get("/limiteDezembroCpuServidor44", function (req, res) {
    analiseController.limiteDezembroCpuServidor44(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor44", function (req, res) {
    analiseController.limiteJaneiroRamServidor44(req, res);
});

router.get("/limiteFevereiroRamServidor44", function (req, res) {
    analiseController.limiteFevereiroRamServidor44(req, res);
});

router.get("/limiteMarcoRamServidor44", function (req, res) {
    analiseController.limiteMarcoRamServidor44(req, res);
});

router.get("/limiteAbrilRamServidor44", function (req, res) {
    analiseController.limiteAbrilRamServidor44(req, res);
});

router.get("/limiteMaioRamServidor44", function (req, res) {
    analiseController.limiteMaioRamServidor44(req, res);
});

router.get("/limiteJunhoRamServidor44", function (req, res) {
    analiseController.limiteJunhoRamServidor44(req, res);
});

router.get("/limiteJulhoRamServidor44", function (req, res) {
    analiseController.limiteJulhoRamServidor44(req, res);
});

router.get("/limiteAgostoRamServidor44", function (req, res) {
    analiseController.limiteAgostoRamServidor44(req, res);
});

router.get("/limiteSetembroRamServidor44", function (req, res) {
    analiseController.limiteSetembroRamServidor44(req, res);
});

router.get("/limiteOutubroRamServidor44", function (req, res) {
    analiseController.limiteOutubroRamServidor44(req, res);
});

router.get("/limiteNovembroRamServidor44", function (req, res) {
    analiseController.limiteNovembroRamServidor44(req, res);
});

router.get("/limiteDezembroRamServidor44", function (req, res) {
    analiseController.limiteDezembroRamServidor44(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor44", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor44(req, res);
});

router.get("/limiteFevereiroDiscoServidor44", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor44(req, res);
});

router.get("/limiteMarcoDiscoServidor44", function (req, res) {
    analiseController.limiteMarcoDiscoServidor44(req, res);
});

router.get("/limiteAbrilDiscoServidor44", function (req, res) {
    analiseController.limiteAbrilDiscoServidor44(req, res);
});

router.get("/limiteMaioDiscoServidor44", function (req, res) {
    analiseController.limiteMaioDiscoServidor44(req, res);
});

router.get("/limiteJunhoDiscoServidor44", function (req, res) {
    analiseController.limiteJunhoDiscoServidor44(req, res);
});

router.get("/limiteJulhoDiscoServidor44", function (req, res) {
    analiseController.limiteJulhoDiscoServidor44(req, res);
});

router.get("/limiteAgostoDiscoServidor44", function (req, res) {
    analiseController.limiteAgostoDiscoServidor44(req, res);
});

router.get("/limiteSetembroDiscoServidor44", function (req, res) {
    analiseController.limiteSetembroDiscoServidor44(req, res);
});

router.get("/limiteOutubroDiscoServidor44", function (req, res) {
    analiseController.limiteOutubroDiscoServidor44(req, res);
});

router.get("/limiteNovembroDiscoServidor44", function (req, res) {
    analiseController.limiteNovembroDiscoServidor44(req, res);
});

router.get("/limiteDezembroDiscoServidor44", function (req, res) {
    analiseController.limiteDezembroDiscoServidor44(req, res);
});

router.get("/mensalJaneiroCpuServidor45", function (req, res) {
    analiseController.mensalJaneiroCpuServidor45(req, res);
});

router.get("/mensalFevereiroCpuServidor45", function (req, res) {
    analiseController.mensalFevereiroCpuServidor45(req, res);
});

router.get("/mensalMarcoCpuServidor45", function (req, res) {
    analiseController.mensalMarcoCpuServidor45(req, res);
});

router.get("/mensalAbrilCpuServidor45", function (req, res) {
    analiseController.mensalAbrilCpuServidor45(req, res);
});

router.get("/mensalMaioCpuServidor45", function (req, res) {
    analiseController.mensalMaioCpuServidor45(req, res);
});

router.get("/mensalJunhoCpuServidor45", function (req, res) {
    analiseController.mensalJunhoCpuServidor45(req, res);
});

router.get("/mensalJulhoCpuServidor45", function (req, res) {
    analiseController.mensalJulhoCpuServidor45(req, res);
});

router.get("/mensalAgostoCpuServidor45", function (req, res) {
    analiseController.mensalAgostoCpuServidor45(req, res);
});

router.get("/mensalSetembroCpuServidor45", function (req, res) {
    analiseController.mensalSetembroCpuServidor45(req, res);
});

router.get("/mensalOutubroCpuServidor45", function (req, res) {
    analiseController.mensalOutubroCpuServidor45(req, res);
});

router.get("/mensalNovembroCpuServidor45", function (req, res) {
    analiseController.mensalNovembroCpuServidor45(req, res);
});

router.get("/mensalDezembroCpuServidor45", function (req, res) {
    analiseController.mensalDezembroCpuServidor45(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor45", function (req, res) {
    analiseController.mensalJaneiroRamServidor45(req, res);
});

router.get("/mensalFevereiroRamServidor45", function (req, res) {
    analiseController.mensalFevereiroRamServidor45(req, res);
});

router.get("/mensalMarcoRamServidor45", function (req, res) {
    analiseController.mensalMarcoRamServidor45(req, res);
});

router.get("/mensalAbrilRamServidor45", function (req, res) {
    analiseController.mensalAbrilRamServidor45(req, res);
});

router.get("/mensalMaioRamServidor45", function (req, res) {
    analiseController.mensalMaioRamServidor45(req, res);
});

router.get("/mensalJunhoRamServidor45", function (req, res) {
    analiseController.mensalJunhoRamServidor45(req, res);
});

router.get("/mensalJulhoRamServidor45", function (req, res) {
    analiseController.mensalJulhoRamServidor45(req, res);
});

router.get("/mensalAgostoRamServidor45", function (req, res) {
    analiseController.mensalAgostoRamServidor45(req, res);
});

router.get("/mensalSetembroRamServidor45", function (req, res) {
    analiseController.mensalSetembroRamServidor45(req, res);
});

router.get("/mensalOutubroRamServidor45", function (req, res) {
    analiseController.mensalOutubroRamServidor45(req, res);
});

router.get("/mensalNovembroRamServidor45", function (req, res) {
    analiseController.mensalNovembroRamServidor45(req, res);
});

router.get("/mensalDezembroRamServidor45", function (req, res) {
    analiseController.mensalDezembroRamServidor45(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor45", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor45(req, res);
});

router.get("/mensalFevereiroDiscoServidor45", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor45(req, res);
});

router.get("/mensalMarcoDiscoServidor45", function (req, res) {
    analiseController.mensalMarcoDiscoServidor45(req, res);
});

router.get("/mensalAbrilDiscoServidor45", function (req, res) {
    analiseController.mensalAbrilDiscoServidor45(req, res);
});

router.get("/mensalMaioDiscoServidor45", function (req, res) {
    analiseController.mensalMaioDiscoServidor45(req, res);
});

router.get("/mensalJunhoDiscoServidor45", function (req, res) {
    analiseController.mensalJunhoDiscoServidor45(req, res);
});

router.get("/mensalJulhoDiscoServidor45", function (req, res) {
    analiseController.mensalJulhoDiscoServidor45(req, res);
});

router.get("/mensalAgostoDiscoServidor45", function (req, res) {
    analiseController.mensalAgostoDiscoServidor45(req, res);
});

router.get("/mensalSetembroDiscoServidor45", function (req, res) {
    analiseController.mensalSetembroDiscoServidor45(req, res);
});

router.get("/mensalOutubroDiscoServidor45", function (req, res) {
    analiseController.mensalOutubroDiscoServidor45(req, res);
});

router.get("/mensalNovembroDiscoServidor45", function (req, res) {
    analiseController.mensalNovembroDiscoServidor45(req, res);
});

router.get("/mensalDezembroDiscoServidor45", function (req, res) {
    analiseController.mensalDezembroDiscoServidor45(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor45", function (req, res) {
    analiseController.limiteJaneiroCpuServidor45(req, res);
});

router.get("/limiteFevereiroCpuServidor45", function (req, res) {
    analiseController.limiteFevereiroCpuServidor45(req, res);
});

router.get("/limiteMarcoCpuServidor45", function (req, res) {
    analiseController.limiteMarcoCpuServidor45(req, res);
});

router.get("/limiteAbrilCpuServidor45", function (req, res) {
    analiseController.limiteAbrilCpuServidor45(req, res);
});

router.get("/limiteMaioCpuServidor45", function (req, res) {
    analiseController.limiteMaioCpuServidor45(req, res);
});

router.get("/limiteJunhoCpuServidor45", function (req, res) {
    analiseController.limiteJunhoCpuServidor45(req, res);
});

router.get("/limiteJulhoCpuServidor45", function (req, res) {
    analiseController.limiteJulhoCpuServidor45(req, res);
});

router.get("/limiteAgostoCpuServidor45", function (req, res) {
    analiseController.limiteAgostoCpuServidor45(req, res);
});

router.get("/limiteSetembroCpuServidor45", function (req, res) {
    analiseController.limiteSetembroCpuServidor45(req, res);
});

router.get("/limiteOutubroCpuServidor45", function (req, res) {
    analiseController.limiteOutubroCpuServidor45(req, res);
});

router.get("/limiteNovembroCpuServidor45", function (req, res) {
    analiseController.limiteNovembroCpuServidor45(req, res);
});

router.get("/limiteDezembroCpuServidor45", function (req, res) {
    analiseController.limiteDezembroCpuServidor45(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor45", function (req, res) {
    analiseController.limiteJaneiroRamServidor45(req, res);
});

router.get("/limiteFevereiroRamServidor45", function (req, res) {
    analiseController.limiteFevereiroRamServidor45(req, res);
});

router.get("/limiteMarcoRamServidor45", function (req, res) {
    analiseController.limiteMarcoRamServidor45(req, res);
});

router.get("/limiteAbrilRamServidor45", function (req, res) {
    analiseController.limiteAbrilRamServidor45(req, res);
});

router.get("/limiteMaioRamServidor45", function (req, res) {
    analiseController.limiteMaioRamServidor45(req, res);
});

router.get("/limiteJunhoRamServidor45", function (req, res) {
    analiseController.limiteJunhoRamServidor45(req, res);
});

router.get("/limiteJulhoRamServidor45", function (req, res) {
    analiseController.limiteJulhoRamServidor45(req, res);
});

router.get("/limiteAgostoRamServidor45", function (req, res) {
    analiseController.limiteAgostoRamServidor45(req, res);
});

router.get("/limiteSetembroRamServidor45", function (req, res) {
    analiseController.limiteSetembroRamServidor45(req, res);
});

router.get("/limiteOutubroRamServidor45", function (req, res) {
    analiseController.limiteOutubroRamServidor45(req, res);
});

router.get("/limiteNovembroRamServidor45", function (req, res) {
    analiseController.limiteNovembroRamServidor45(req, res);
});

router.get("/limiteDezembroRamServidor45", function (req, res) {
    analiseController.limiteDezembroRamServidor45(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor45", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor45(req, res);
});

router.get("/limiteFevereiroDiscoServidor45", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor45(req, res);
});

router.get("/limiteMarcoDiscoServidor45", function (req, res) {
    analiseController.limiteMarcoDiscoServidor45(req, res);
});

router.get("/limiteAbrilDiscoServidor45", function (req, res) {
    analiseController.limiteAbrilDiscoServidor45(req, res);
});

router.get("/limiteMaioDiscoServidor45", function (req, res) {
    analiseController.limiteMaioDiscoServidor45(req, res);
});

router.get("/limiteJunhoDiscoServidor45", function (req, res) {
    analiseController.limiteJunhoDiscoServidor45(req, res);
});

router.get("/limiteJulhoDiscoServidor45", function (req, res) {
    analiseController.limiteJulhoDiscoServidor45(req, res);
});

router.get("/limiteAgostoDiscoServidor45", function (req, res) {
    analiseController.limiteAgostoDiscoServidor45(req, res);
});

router.get("/limiteSetembroDiscoServidor45", function (req, res) {
    analiseController.limiteSetembroDiscoServidor45(req, res);
});

router.get("/limiteOutubroDiscoServidor45", function (req, res) {
    analiseController.limiteOutubroDiscoServidor45(req, res);
});

router.get("/limiteNovembroDiscoServidor45", function (req, res) {
    analiseController.limiteNovembroDiscoServidor45(req, res);
});

router.get("/limiteDezembroDiscoServidor45", function (req, res) {
    analiseController.limiteDezembroDiscoServidor45(req, res);
});

router.get("/mensalJaneiroCpuServidor46", function (req, res) {
    analiseController.mensalJaneiroCpuServidor46(req, res);
});

router.get("/mensalFevereiroCpuServidor46", function (req, res) {
    analiseController.mensalFevereiroCpuServidor46(req, res);
});

router.get("/mensalMarcoCpuServidor46", function (req, res) {
    analiseController.mensalMarcoCpuServidor46(req, res);
});

router.get("/mensalAbrilCpuServidor46", function (req, res) {
    analiseController.mensalAbrilCpuServidor46(req, res);
});

router.get("/mensalMaioCpuServidor46", function (req, res) {
    analiseController.mensalMaioCpuServidor46(req, res);
});

router.get("/mensalJunhoCpuServidor46", function (req, res) {
    analiseController.mensalJunhoCpuServidor46(req, res);
});

router.get("/mensalJulhoCpuServidor46", function (req, res) {
    analiseController.mensalJulhoCpuServidor46(req, res);
});

router.get("/mensalAgostoCpuServidor46", function (req, res) {
    analiseController.mensalAgostoCpuServidor46(req, res);
});

router.get("/mensalSetembroCpuServidor46", function (req, res) {
    analiseController.mensalSetembroCpuServidor46(req, res);
});

router.get("/mensalOutubroCpuServidor46", function (req, res) {
    analiseController.mensalOutubroCpuServidor46(req, res);
});

router.get("/mensalNovembroCpuServidor46", function (req, res) {
    analiseController.mensalNovembroCpuServidor46(req, res);
});

router.get("/mensalDezembroCpuServidor46", function (req, res) {
    analiseController.mensalDezembroCpuServidor46(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor46", function (req, res) {
    analiseController.mensalJaneiroRamServidor46(req, res);
});

router.get("/mensalFevereiroRamServidor46", function (req, res) {
    analiseController.mensalFevereiroRamServidor46(req, res);
});

router.get("/mensalMarcoRamServidor46", function (req, res) {
    analiseController.mensalMarcoRamServidor46(req, res);
});

router.get("/mensalAbrilRamServidor46", function (req, res) {
    analiseController.mensalAbrilRamServidor46(req, res);
});

router.get("/mensalMaioRamServidor46", function (req, res) {
    analiseController.mensalMaioRamServidor46(req, res);
});

router.get("/mensalJunhoRamServidor46", function (req, res) {
    analiseController.mensalJunhoRamServidor46(req, res);
});

router.get("/mensalJulhoRamServidor46", function (req, res) {
    analiseController.mensalJulhoRamServidor46(req, res);
});

router.get("/mensalAgostoRamServidor46", function (req, res) {
    analiseController.mensalAgostoRamServidor46(req, res);
});

router.get("/mensalSetembroRamServidor46", function (req, res) {
    analiseController.mensalSetembroRamServidor46(req, res);
});

router.get("/mensalOutubroRamServidor46", function (req, res) {
    analiseController.mensalOutubroRamServidor46(req, res);
});

router.get("/mensalNovembroRamServidor46", function (req, res) {
    analiseController.mensalNovembroRamServidor46(req, res);
});

router.get("/mensalDezembroRamServidor46", function (req, res) {
    analiseController.mensalDezembroRamServidor46(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor46", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor46(req, res);
});

router.get("/mensalFevereiroDiscoServidor46", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor46(req, res);
});

router.get("/mensalMarcoDiscoServidor46", function (req, res) {
    analiseController.mensalMarcoDiscoServidor46(req, res);
});

router.get("/mensalAbrilDiscoServidor46", function (req, res) {
    analiseController.mensalAbrilDiscoServidor46(req, res);
});

router.get("/mensalMaioDiscoServidor46", function (req, res) {
    analiseController.mensalMaioDiscoServidor46(req, res);
});

router.get("/mensalJunhoDiscoServidor46", function (req, res) {
    analiseController.mensalJunhoDiscoServidor46(req, res);
});

router.get("/mensalJulhoDiscoServidor46", function (req, res) {
    analiseController.mensalJulhoDiscoServidor46(req, res);
});

router.get("/mensalAgostoDiscoServidor46", function (req, res) {
    analiseController.mensalAgostoDiscoServidor46(req, res);
});

router.get("/mensalSetembroDiscoServidor46", function (req, res) {
    analiseController.mensalSetembroDiscoServidor46(req, res);
});

router.get("/mensalOutubroDiscoServidor46", function (req, res) {
    analiseController.mensalOutubroDiscoServidor46(req, res);
});

router.get("/mensalNovembroDiscoServidor46", function (req, res) {
    analiseController.mensalNovembroDiscoServidor46(req, res);
});

router.get("/mensalDezembroDiscoServidor46", function (req, res) {
    analiseController.mensalDezembroDiscoServidor46(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor46", function (req, res) {
    analiseController.limiteJaneiroCpuServidor46(req, res);
});

router.get("/limiteFevereiroCpuServidor46", function (req, res) {
    analiseController.limiteFevereiroCpuServidor46(req, res);
});

router.get("/limiteMarcoCpuServidor46", function (req, res) {
    analiseController.limiteMarcoCpuServidor46(req, res);
});

router.get("/limiteAbrilCpuServidor46", function (req, res) {
    analiseController.limiteAbrilCpuServidor46(req, res);
});

router.get("/limiteMaioCpuServidor46", function (req, res) {
    analiseController.limiteMaioCpuServidor46(req, res);
});

router.get("/limiteJunhoCpuServidor46", function (req, res) {
    analiseController.limiteJunhoCpuServidor46(req, res);
});

router.get("/limiteJulhoCpuServidor46", function (req, res) {
    analiseController.limiteJulhoCpuServidor46(req, res);
});

router.get("/limiteAgostoCpuServidor46", function (req, res) {
    analiseController.limiteAgostoCpuServidor46(req, res);
});

router.get("/limiteSetembroCpuServidor46", function (req, res) {
    analiseController.limiteSetembroCpuServidor46(req, res);
});

router.get("/limiteOutubroCpuServidor46", function (req, res) {
    analiseController.limiteOutubroCpuServidor46(req, res);
});

router.get("/limiteNovembroCpuServidor46", function (req, res) {
    analiseController.limiteNovembroCpuServidor46(req, res);
});

router.get("/limiteDezembroCpuServidor46", function (req, res) {
    analiseController.limiteDezembroCpuServidor46(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor46", function (req, res) {
    analiseController.limiteJaneiroRamServidor46(req, res);
});

router.get("/limiteFevereiroRamServidor46", function (req, res) {
    analiseController.limiteFevereiroRamServidor46(req, res);
});

router.get("/limiteMarcoRamServidor46", function (req, res) {
    analiseController.limiteMarcoRamServidor46(req, res);
});

router.get("/limiteAbrilRamServidor46", function (req, res) {
    analiseController.limiteAbrilRamServidor46(req, res);
});

router.get("/limiteMaioRamServidor46", function (req, res) {
    analiseController.limiteMaioRamServidor46(req, res);
});

router.get("/limiteJunhoRamServidor46", function (req, res) {
    analiseController.limiteJunhoRamServidor46(req, res);
});

router.get("/limiteJulhoRamServidor46", function (req, res) {
    analiseController.limiteJulhoRamServidor46(req, res);
});

router.get("/limiteAgostoRamServidor46", function (req, res) {
    analiseController.limiteAgostoRamServidor46(req, res);
});

router.get("/limiteSetembroRamServidor46", function (req, res) {
    analiseController.limiteSetembroRamServidor46(req, res);
});

router.get("/limiteOutubroRamServidor46", function (req, res) {
    analiseController.limiteOutubroRamServidor46(req, res);
});

router.get("/limiteNovembroRamServidor46", function (req, res) {
    analiseController.limiteNovembroRamServidor46(req, res);
});

router.get("/limiteDezembroRamServidor46", function (req, res) {
    analiseController.limiteDezembroRamServidor46(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor46", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor46(req, res);
});

router.get("/limiteFevereiroDiscoServidor46", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor46(req, res);
});

router.get("/limiteMarcoDiscoServidor46", function (req, res) {
    analiseController.limiteMarcoDiscoServidor46(req, res);
});

router.get("/limiteAbrilDiscoServidor46", function (req, res) {
    analiseController.limiteAbrilDiscoServidor46(req, res);
});

router.get("/limiteMaioDiscoServidor46", function (req, res) {
    analiseController.limiteMaioDiscoServidor46(req, res);
});

router.get("/limiteJunhoDiscoServidor46", function (req, res) {
    analiseController.limiteJunhoDiscoServidor46(req, res);
});

router.get("/limiteJulhoDiscoServidor46", function (req, res) {
    analiseController.limiteJulhoDiscoServidor46(req, res);
});

router.get("/limiteAgostoDiscoServidor46", function (req, res) {
    analiseController.limiteAgostoDiscoServidor46(req, res);
});

router.get("/limiteSetembroDiscoServidor46", function (req, res) {
    analiseController.limiteSetembroDiscoServidor46(req, res);
});

router.get("/limiteOutubroDiscoServidor46", function (req, res) {
    analiseController.limiteOutubroDiscoServidor46(req, res);
});

router.get("/limiteNovembroDiscoServidor46", function (req, res) {
    analiseController.limiteNovembroDiscoServidor46(req, res);
});

router.get("/limiteDezembroDiscoServidor46", function (req, res) {
    analiseController.limiteDezembroDiscoServidor46(req, res);
});

router.get("/mensalJaneiroCpuServidor47", function (req, res) {
    analiseController.mensalJaneiroCpuServidor47(req, res);
});

router.get("/mensalFevereiroCpuServidor47", function (req, res) {
    analiseController.mensalFevereiroCpuServidor47(req, res);
});

router.get("/mensalMarcoCpuServidor47", function (req, res) {
    analiseController.mensalMarcoCpuServidor47(req, res);
});

router.get("/mensalAbrilCpuServidor47", function (req, res) {
    analiseController.mensalAbrilCpuServidor47(req, res);
});

router.get("/mensalMaioCpuServidor47", function (req, res) {
    analiseController.mensalMaioCpuServidor47(req, res);
});

router.get("/mensalJunhoCpuServidor47", function (req, res) {
    analiseController.mensalJunhoCpuServidor47(req, res);
});

router.get("/mensalJulhoCpuServidor47", function (req, res) {
    analiseController.mensalJulhoCpuServidor47(req, res);
});

router.get("/mensalAgostoCpuServidor47", function (req, res) {
    analiseController.mensalAgostoCpuServidor47(req, res);
});

router.get("/mensalSetembroCpuServidor47", function (req, res) {
    analiseController.mensalSetembroCpuServidor47(req, res);
});

router.get("/mensalOutubroCpuServidor47", function (req, res) {
    analiseController.mensalOutubroCpuServidor47(req, res);
});

router.get("/mensalNovembroCpuServidor47", function (req, res) {
    analiseController.mensalNovembroCpuServidor47(req, res);
});

router.get("/mensalDezembroCpuServidor47", function (req, res) {
    analiseController.mensalDezembroCpuServidor47(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor47", function (req, res) {
    analiseController.mensalJaneiroRamServidor47(req, res);
});

router.get("/mensalFevereiroRamServidor47", function (req, res) {
    analiseController.mensalFevereiroRamServidor47(req, res);
});

router.get("/mensalMarcoRamServidor47", function (req, res) {
    analiseController.mensalMarcoRamServidor47(req, res);
});

router.get("/mensalAbrilRamServidor47", function (req, res) {
    analiseController.mensalAbrilRamServidor47(req, res);
});

router.get("/mensalMaioRamServidor47", function (req, res) {
    analiseController.mensalMaioRamServidor47(req, res);
});

router.get("/mensalJunhoRamServidor47", function (req, res) {
    analiseController.mensalJunhoRamServidor47(req, res);
});

router.get("/mensalJulhoRamServidor47", function (req, res) {
    analiseController.mensalJulhoRamServidor47(req, res);
});

router.get("/mensalAgostoRamServidor47", function (req, res) {
    analiseController.mensalAgostoRamServidor47(req, res);
});

router.get("/mensalSetembroRamServidor47", function (req, res) {
    analiseController.mensalSetembroRamServidor47(req, res);
});

router.get("/mensalOutubroRamServidor47", function (req, res) {
    analiseController.mensalOutubroRamServidor47(req, res);
});

router.get("/mensalNovembroRamServidor47", function (req, res) {
    analiseController.mensalNovembroRamServidor47(req, res);
});

router.get("/mensalDezembroRamServidor47", function (req, res) {
    analiseController.mensalDezembroRamServidor47(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor47", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor47(req, res);
});

router.get("/mensalFevereiroDiscoServidor47", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor47(req, res);
});

router.get("/mensalMarcoDiscoServidor47", function (req, res) {
    analiseController.mensalMarcoDiscoServidor47(req, res);
});

router.get("/mensalAbrilDiscoServidor47", function (req, res) {
    analiseController.mensalAbrilDiscoServidor47(req, res);
});

router.get("/mensalMaioDiscoServidor47", function (req, res) {
    analiseController.mensalMaioDiscoServidor47(req, res);
});

router.get("/mensalJunhoDiscoServidor47", function (req, res) {
    analiseController.mensalJunhoDiscoServidor47(req, res);
});

router.get("/mensalJulhoDiscoServidor47", function (req, res) {
    analiseController.mensalJulhoDiscoServidor47(req, res);
});

router.get("/mensalAgostoDiscoServidor47", function (req, res) {
    analiseController.mensalAgostoDiscoServidor47(req, res);
});

router.get("/mensalSetembroDiscoServidor47", function (req, res) {
    analiseController.mensalSetembroDiscoServidor47(req, res);
});

router.get("/mensalOutubroDiscoServidor47", function (req, res) {
    analiseController.mensalOutubroDiscoServidor47(req, res);
});

router.get("/mensalNovembroDiscoServidor47", function (req, res) {
    analiseController.mensalNovembroDiscoServidor47(req, res);
});

router.get("/mensalDezembroDiscoServidor47", function (req, res) {
    analiseController.mensalDezembroDiscoServidor47(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor47", function (req, res) {
    analiseController.limiteJaneiroCpuServidor47(req, res);
});

router.get("/limiteFevereiroCpuServidor47", function (req, res) {
    analiseController.limiteFevereiroCpuServidor47(req, res);
});

router.get("/limiteMarcoCpuServidor47", function (req, res) {
    analiseController.limiteMarcoCpuServidor47(req, res);
});

router.get("/limiteAbrilCpuServidor47", function (req, res) {
    analiseController.limiteAbrilCpuServidor47(req, res);
});

router.get("/limiteMaioCpuServidor47", function (req, res) {
    analiseController.limiteMaioCpuServidor47(req, res);
});

router.get("/limiteJunhoCpuServidor47", function (req, res) {
    analiseController.limiteJunhoCpuServidor47(req, res);
});

router.get("/limiteJulhoCpuServidor47", function (req, res) {
    analiseController.limiteJulhoCpuServidor47(req, res);
});

router.get("/limiteAgostoCpuServidor47", function (req, res) {
    analiseController.limiteAgostoCpuServidor47(req, res);
});

router.get("/limiteSetembroCpuServidor47", function (req, res) {
    analiseController.limiteSetembroCpuServidor47(req, res);
});

router.get("/limiteOutubroCpuServidor47", function (req, res) {
    analiseController.limiteOutubroCpuServidor47(req, res);
});

router.get("/limiteNovembroCpuServidor47", function (req, res) {
    analiseController.limiteNovembroCpuServidor47(req, res);
});

router.get("/limiteDezembroCpuServidor47", function (req, res) {
    analiseController.limiteDezembroCpuServidor47(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor47", function (req, res) {
    analiseController.limiteJaneiroRamServidor47(req, res);
});

router.get("/limiteFevereiroRamServidor47", function (req, res) {
    analiseController.limiteFevereiroRamServidor47(req, res);
});

router.get("/limiteMarcoRamServidor47", function (req, res) {
    analiseController.limiteMarcoRamServidor47(req, res);
});

router.get("/limiteAbrilRamServidor47", function (req, res) {
    analiseController.limiteAbrilRamServidor47(req, res);
});

router.get("/limiteMaioRamServidor47", function (req, res) {
    analiseController.limiteMaioRamServidor47(req, res);
});

router.get("/limiteJunhoRamServidor47", function (req, res) {
    analiseController.limiteJunhoRamServidor47(req, res);
});

router.get("/limiteJulhoRamServidor47", function (req, res) {
    analiseController.limiteJulhoRamServidor47(req, res);
});

router.get("/limiteAgostoRamServidor47", function (req, res) {
    analiseController.limiteAgostoRamServidor47(req, res);
});

router.get("/limiteSetembroRamServidor47", function (req, res) {
    analiseController.limiteSetembroRamServidor47(req, res);
});

router.get("/limiteOutubroRamServidor47", function (req, res) {
    analiseController.limiteOutubroRamServidor47(req, res);
});

router.get("/limiteNovembroRamServidor47", function (req, res) {
    analiseController.limiteNovembroRamServidor47(req, res);
});

router.get("/limiteDezembroRamServidor47", function (req, res) {
    analiseController.limiteDezembroRamServidor47(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor47", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor47(req, res);
});

router.get("/limiteFevereiroDiscoServidor47", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor47(req, res);
});

router.get("/limiteMarcoDiscoServidor47", function (req, res) {
    analiseController.limiteMarcoDiscoServidor47(req, res);
});

router.get("/limiteAbrilDiscoServidor47", function (req, res) {
    analiseController.limiteAbrilDiscoServidor47(req, res);
});

router.get("/limiteMaioDiscoServidor47", function (req, res) {
    analiseController.limiteMaioDiscoServidor47(req, res);
});

router.get("/limiteJunhoDiscoServidor47", function (req, res) {
    analiseController.limiteJunhoDiscoServidor47(req, res);
});

router.get("/limiteJulhoDiscoServidor47", function (req, res) {
    analiseController.limiteJulhoDiscoServidor47(req, res);
});

router.get("/limiteAgostoDiscoServidor47", function (req, res) {
    analiseController.limiteAgostoDiscoServidor47(req, res);
});

router.get("/limiteSetembroDiscoServidor47", function (req, res) {
    analiseController.limiteSetembroDiscoServidor47(req, res);
});

router.get("/limiteOutubroDiscoServidor47", function (req, res) {
    analiseController.limiteOutubroDiscoServidor47(req, res);
});

router.get("/limiteNovembroDiscoServidor47", function (req, res) {
    analiseController.limiteNovembroDiscoServidor47(req, res);
});

router.get("/limiteDezembroDiscoServidor47", function (req, res) {
    analiseController.limiteDezembroDiscoServidor47(req, res);
});

router.get("/mensalJaneiroCpuServidor48", function (req, res) {
    analiseController.mensalJaneiroCpuServidor48(req, res);
});

router.get("/mensalFevereiroCpuServidor48", function (req, res) {
    analiseController.mensalFevereiroCpuServidor48(req, res);
});

router.get("/mensalMarcoCpuServidor48", function (req, res) {
    analiseController.mensalMarcoCpuServidor48(req, res);
});

router.get("/mensalAbrilCpuServidor48", function (req, res) {
    analiseController.mensalAbrilCpuServidor48(req, res);
});

router.get("/mensalMaioCpuServidor48", function (req, res) {
    analiseController.mensalMaioCpuServidor48(req, res);
});

router.get("/mensalJunhoCpuServidor48", function (req, res) {
    analiseController.mensalJunhoCpuServidor48(req, res);
});

router.get("/mensalJulhoCpuServidor48", function (req, res) {
    analiseController.mensalJulhoCpuServidor48(req, res);
});

router.get("/mensalAgostoCpuServidor48", function (req, res) {
    analiseController.mensalAgostoCpuServidor48(req, res);
});

router.get("/mensalSetembroCpuServidor48", function (req, res) {
    analiseController.mensalSetembroCpuServidor48(req, res);
});

router.get("/mensalOutubroCpuServidor48", function (req, res) {
    analiseController.mensalOutubroCpuServidor48(req, res);
});

router.get("/mensalNovembroCpuServidor48", function (req, res) {
    analiseController.mensalNovembroCpuServidor48(req, res);
});

router.get("/mensalDezembroCpuServidor48", function (req, res) {
    analiseController.mensalDezembroCpuServidor48(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor48", function (req, res) {
    analiseController.mensalJaneiroRamServidor48(req, res);
});

router.get("/mensalFevereiroRamServidor48", function (req, res) {
    analiseController.mensalFevereiroRamServidor48(req, res);
});

router.get("/mensalMarcoRamServidor48", function (req, res) {
    analiseController.mensalMarcoRamServidor48(req, res);
});

router.get("/mensalAbrilRamServidor48", function (req, res) {
    analiseController.mensalAbrilRamServidor48(req, res);
});

router.get("/mensalMaioRamServidor48", function (req, res) {
    analiseController.mensalMaioRamServidor48(req, res);
});

router.get("/mensalJunhoRamServidor48", function (req, res) {
    analiseController.mensalJunhoRamServidor48(req, res);
});

router.get("/mensalJulhoRamServidor48", function (req, res) {
    analiseController.mensalJulhoRamServidor48(req, res);
});

router.get("/mensalAgostoRamServidor48", function (req, res) {
    analiseController.mensalAgostoRamServidor48(req, res);
});

router.get("/mensalSetembroRamServidor48", function (req, res) {
    analiseController.mensalSetembroRamServidor48(req, res);
});

router.get("/mensalOutubroRamServidor48", function (req, res) {
    analiseController.mensalOutubroRamServidor48(req, res);
});

router.get("/mensalNovembroRamServidor48", function (req, res) {
    analiseController.mensalNovembroRamServidor48(req, res);
});

router.get("/mensalDezembroRamServidor48", function (req, res) {
    analiseController.mensalDezembroRamServidor48(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor48", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor48(req, res);
});

router.get("/mensalFevereiroDiscoServidor48", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor48(req, res);
});

router.get("/mensalMarcoDiscoServidor48", function (req, res) {
    analiseController.mensalMarcoDiscoServidor48(req, res);
});

router.get("/mensalAbrilDiscoServidor48", function (req, res) {
    analiseController.mensalAbrilDiscoServidor48(req, res);
});

router.get("/mensalMaioDiscoServidor48", function (req, res) {
    analiseController.mensalMaioDiscoServidor48(req, res);
});

router.get("/mensalJunhoDiscoServidor48", function (req, res) {
    analiseController.mensalJunhoDiscoServidor48(req, res);
});

router.get("/mensalJulhoDiscoServidor48", function (req, res) {
    analiseController.mensalJulhoDiscoServidor48(req, res);
});

router.get("/mensalAgostoDiscoServidor48", function (req, res) {
    analiseController.mensalAgostoDiscoServidor48(req, res);
});

router.get("/mensalSetembroDiscoServidor48", function (req, res) {
    analiseController.mensalSetembroDiscoServidor48(req, res);
});

router.get("/mensalOutubroDiscoServidor48", function (req, res) {
    analiseController.mensalOutubroDiscoServidor48(req, res);
});

router.get("/mensalNovembroDiscoServidor48", function (req, res) {
    analiseController.mensalNovembroDiscoServidor48(req, res);
});

router.get("/mensalDezembroDiscoServidor48", function (req, res) {
    analiseController.mensalDezembroDiscoServidor48(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor48", function (req, res) {
    analiseController.limiteJaneiroCpuServidor48(req, res);
});

router.get("/limiteFevereiroCpuServidor48", function (req, res) {
    analiseController.limiteFevereiroCpuServidor48(req, res);
});

router.get("/limiteMarcoCpuServidor48", function (req, res) {
    analiseController.limiteMarcoCpuServidor48(req, res);
});

router.get("/limiteAbrilCpuServidor48", function (req, res) {
    analiseController.limiteAbrilCpuServidor48(req, res);
});

router.get("/limiteMaioCpuServidor48", function (req, res) {
    analiseController.limiteMaioCpuServidor48(req, res);
});

router.get("/limiteJunhoCpuServidor48", function (req, res) {
    analiseController.limiteJunhoCpuServidor48(req, res);
});

router.get("/limiteJulhoCpuServidor48", function (req, res) {
    analiseController.limiteJulhoCpuServidor48(req, res);
});

router.get("/limiteAgostoCpuServidor48", function (req, res) {
    analiseController.limiteAgostoCpuServidor48(req, res);
});

router.get("/limiteSetembroCpuServidor48", function (req, res) {
    analiseController.limiteSetembroCpuServidor48(req, res);
});

router.get("/limiteOutubroCpuServidor48", function (req, res) {
    analiseController.limiteOutubroCpuServidor48(req, res);
});

router.get("/limiteNovembroCpuServidor48", function (req, res) {
    analiseController.limiteNovembroCpuServidor48(req, res);
});

router.get("/limiteDezembroCpuServidor48", function (req, res) {
    analiseController.limiteDezembroCpuServidor48(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor48", function (req, res) {
    analiseController.limiteJaneiroRamServidor48(req, res);
});

router.get("/limiteFevereiroRamServidor48", function (req, res) {
    analiseController.limiteFevereiroRamServidor48(req, res);
});

router.get("/limiteMarcoRamServidor48", function (req, res) {
    analiseController.limiteMarcoRamServidor48(req, res);
});

router.get("/limiteAbrilRamServidor48", function (req, res) {
    analiseController.limiteAbrilRamServidor48(req, res);
});

router.get("/limiteMaioRamServidor48", function (req, res) {
    analiseController.limiteMaioRamServidor48(req, res);
});

router.get("/limiteJunhoRamServidor48", function (req, res) {
    analiseController.limiteJunhoRamServidor48(req, res);
});

router.get("/limiteJulhoRamServidor48", function (req, res) {
    analiseController.limiteJulhoRamServidor48(req, res);
});

router.get("/limiteAgostoRamServidor48", function (req, res) {
    analiseController.limiteAgostoRamServidor48(req, res);
});

router.get("/limiteSetembroRamServidor48", function (req, res) {
    analiseController.limiteSetembroRamServidor48(req, res);
});

router.get("/limiteOutubroRamServidor48", function (req, res) {
    analiseController.limiteOutubroRamServidor48(req, res);
});

router.get("/limiteNovembroRamServidor48", function (req, res) {
    analiseController.limiteNovembroRamServidor48(req, res);
});

router.get("/limiteDezembroRamServidor48", function (req, res) {
    analiseController.limiteDezembroRamServidor48(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor48", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor48(req, res);
});

router.get("/limiteFevereiroDiscoServidor48", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor48(req, res);
});

router.get("/limiteMarcoDiscoServidor48", function (req, res) {
    analiseController.limiteMarcoDiscoServidor48(req, res);
});

router.get("/limiteAbrilDiscoServidor48", function (req, res) {
    analiseController.limiteAbrilDiscoServidor48(req, res);
});

router.get("/limiteMaioDiscoServidor48", function (req, res) {
    analiseController.limiteMaioDiscoServidor48(req, res);
});

router.get("/limiteJunhoDiscoServidor48", function (req, res) {
    analiseController.limiteJunhoDiscoServidor48(req, res);
});

router.get("/limiteJulhoDiscoServidor48", function (req, res) {
    analiseController.limiteJulhoDiscoServidor48(req, res);
});

router.get("/limiteAgostoDiscoServidor48", function (req, res) {
    analiseController.limiteAgostoDiscoServidor48(req, res);
});

router.get("/limiteSetembroDiscoServidor48", function (req, res) {
    analiseController.limiteSetembroDiscoServidor48(req, res);
});

router.get("/limiteOutubroDiscoServidor48", function (req, res) {
    analiseController.limiteOutubroDiscoServidor48(req, res);
});

router.get("/limiteNovembroDiscoServidor48", function (req, res) {
    analiseController.limiteNovembroDiscoServidor48(req, res);
});

router.get("/limiteDezembroDiscoServidor48", function (req, res) {
    analiseController.limiteDezembroDiscoServidor48(req, res);
});

router.get("/mensalJaneiroCpuServidor49", function (req, res) {
    analiseController.mensalJaneiroCpuServidor49(req, res);
});

router.get("/mensalFevereiroCpuServidor49", function (req, res) {
    analiseController.mensalFevereiroCpuServidor49(req, res);
});

router.get("/mensalMarcoCpuServidor49", function (req, res) {
    analiseController.mensalMarcoCpuServidor49(req, res);
});

router.get("/mensalAbrilCpuServidor49", function (req, res) {
    analiseController.mensalAbrilCpuServidor49(req, res);
});

router.get("/mensalMaioCpuServidor49", function (req, res) {
    analiseController.mensalMaioCpuServidor49(req, res);
});

router.get("/mensalJunhoCpuServidor49", function (req, res) {
    analiseController.mensalJunhoCpuServidor49(req, res);
});

router.get("/mensalJulhoCpuServidor49", function (req, res) {
    analiseController.mensalJulhoCpuServidor49(req, res);
});

router.get("/mensalAgostoCpuServidor49", function (req, res) {
    analiseController.mensalAgostoCpuServidor49(req, res);
});

router.get("/mensalSetembroCpuServidor49", function (req, res) {
    analiseController.mensalSetembroCpuServidor49(req, res);
});

router.get("/mensalOutubroCpuServidor49", function (req, res) {
    analiseController.mensalOutubroCpuServidor49(req, res);
});

router.get("/mensalNovembroCpuServidor49", function (req, res) {
    analiseController.mensalNovembroCpuServidor49(req, res);
});

router.get("/mensalDezembroCpuServidor49", function (req, res) {
    analiseController.mensalDezembroCpuServidor49(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor49", function (req, res) {
    analiseController.mensalJaneiroRamServidor49(req, res);
});

router.get("/mensalFevereiroRamServidor49", function (req, res) {
    analiseController.mensalFevereiroRamServidor49(req, res);
});

router.get("/mensalMarcoRamServidor49", function (req, res) {
    analiseController.mensalMarcoRamServidor49(req, res);
});

router.get("/mensalAbrilRamServidor49", function (req, res) {
    analiseController.mensalAbrilRamServidor49(req, res);
});

router.get("/mensalMaioRamServidor49", function (req, res) {
    analiseController.mensalMaioRamServidor49(req, res);
});

router.get("/mensalJunhoRamServidor49", function (req, res) {
    analiseController.mensalJunhoRamServidor49(req, res);
});

router.get("/mensalJulhoRamServidor49", function (req, res) {
    analiseController.mensalJulhoRamServidor49(req, res);
});

router.get("/mensalAgostoRamServidor49", function (req, res) {
    analiseController.mensalAgostoRamServidor49(req, res);
});

router.get("/mensalSetembroRamServidor49", function (req, res) {
    analiseController.mensalSetembroRamServidor49(req, res);
});

router.get("/mensalOutubroRamServidor49", function (req, res) {
    analiseController.mensalOutubroRamServidor49(req, res);
});

router.get("/mensalNovembroRamServidor49", function (req, res) {
    analiseController.mensalNovembroRamServidor49(req, res);
});

router.get("/mensalDezembroRamServidor49", function (req, res) {
    analiseController.mensalDezembroRamServidor49(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor49", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor49(req, res);
});

router.get("/mensalFevereiroDiscoServidor49", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor49(req, res);
});

router.get("/mensalMarcoDiscoServidor49", function (req, res) {
    analiseController.mensalMarcoDiscoServidor49(req, res);
});

router.get("/mensalAbrilDiscoServidor49", function (req, res) {
    analiseController.mensalAbrilDiscoServidor49(req, res);
});

router.get("/mensalMaioDiscoServidor49", function (req, res) {
    analiseController.mensalMaioDiscoServidor49(req, res);
});

router.get("/mensalJunhoDiscoServidor49", function (req, res) {
    analiseController.mensalJunhoDiscoServidor49(req, res);
});

router.get("/mensalJulhoDiscoServidor49", function (req, res) {
    analiseController.mensalJulhoDiscoServidor49(req, res);
});

router.get("/mensalAgostoDiscoServidor49", function (req, res) {
    analiseController.mensalAgostoDiscoServidor49(req, res);
});

router.get("/mensalSetembroDiscoServidor49", function (req, res) {
    analiseController.mensalSetembroDiscoServidor49(req, res);
});

router.get("/mensalOutubroDiscoServidor49", function (req, res) {
    analiseController.mensalOutubroDiscoServidor49(req, res);
});

router.get("/mensalNovembroDiscoServidor49", function (req, res) {
    analiseController.mensalNovembroDiscoServidor49(req, res);
});

router.get("/mensalDezembroDiscoServidor49", function (req, res) {
    analiseController.mensalDezembroDiscoServidor49(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor49", function (req, res) {
    analiseController.limiteJaneiroCpuServidor49(req, res);
});

router.get("/limiteFevereiroCpuServidor49", function (req, res) {
    analiseController.limiteFevereiroCpuServidor49(req, res);
});

router.get("/limiteMarcoCpuServidor49", function (req, res) {
    analiseController.limiteMarcoCpuServidor49(req, res);
});

router.get("/limiteAbrilCpuServidor49", function (req, res) {
    analiseController.limiteAbrilCpuServidor49(req, res);
});

router.get("/limiteMaioCpuServidor49", function (req, res) {
    analiseController.limiteMaioCpuServidor49(req, res);
});

router.get("/limiteJunhoCpuServidor49", function (req, res) {
    analiseController.limiteJunhoCpuServidor49(req, res);
});

router.get("/limiteJulhoCpuServidor49", function (req, res) {
    analiseController.limiteJulhoCpuServidor49(req, res);
});

router.get("/limiteAgostoCpuServidor49", function (req, res) {
    analiseController.limiteAgostoCpuServidor49(req, res);
});

router.get("/limiteSetembroCpuServidor49", function (req, res) {
    analiseController.limiteSetembroCpuServidor49(req, res);
});

router.get("/limiteOutubroCpuServidor49", function (req, res) {
    analiseController.limiteOutubroCpuServidor49(req, res);
});

router.get("/limiteNovembroCpuServidor49", function (req, res) {
    analiseController.limiteNovembroCpuServidor49(req, res);
});

router.get("/limiteDezembroCpuServidor49", function (req, res) {
    analiseController.limiteDezembroCpuServidor49(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor49", function (req, res) {
    analiseController.limiteJaneiroRamServidor49(req, res);
});

router.get("/limiteFevereiroRamServidor49", function (req, res) {
    analiseController.limiteFevereiroRamServidor49(req, res);
});

router.get("/limiteMarcoRamServidor49", function (req, res) {
    analiseController.limiteMarcoRamServidor49(req, res);
});

router.get("/limiteAbrilRamServidor49", function (req, res) {
    analiseController.limiteAbrilRamServidor49(req, res);
});

router.get("/limiteMaioRamServidor49", function (req, res) {
    analiseController.limiteMaioRamServidor49(req, res);
});

router.get("/limiteJunhoRamServidor49", function (req, res) {
    analiseController.limiteJunhoRamServidor49(req, res);
});

router.get("/limiteJulhoRamServidor49", function (req, res) {
    analiseController.limiteJulhoRamServidor49(req, res);
});

router.get("/limiteAgostoRamServidor49", function (req, res) {
    analiseController.limiteAgostoRamServidor49(req, res);
});

router.get("/limiteSetembroRamServidor49", function (req, res) {
    analiseController.limiteSetembroRamServidor49(req, res);
});

router.get("/limiteOutubroRamServidor49", function (req, res) {
    analiseController.limiteOutubroRamServidor49(req, res);
});

router.get("/limiteNovembroRamServidor49", function (req, res) {
    analiseController.limiteNovembroRamServidor49(req, res);
});

router.get("/limiteDezembroRamServidor49", function (req, res) {
    analiseController.limiteDezembroRamServidor49(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor49", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor49(req, res);
});

router.get("/limiteFevereiroDiscoServidor49", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor49(req, res);
});

router.get("/limiteMarcoDiscoServidor49", function (req, res) {
    analiseController.limiteMarcoDiscoServidor49(req, res);
});

router.get("/limiteAbrilDiscoServidor49", function (req, res) {
    analiseController.limiteAbrilDiscoServidor49(req, res);
});

router.get("/limiteMaioDiscoServidor49", function (req, res) {
    analiseController.limiteMaioDiscoServidor49(req, res);
});

router.get("/limiteJunhoDiscoServidor49", function (req, res) {
    analiseController.limiteJunhoDiscoServidor49(req, res);
});

router.get("/limiteJulhoDiscoServidor49", function (req, res) {
    analiseController.limiteJulhoDiscoServidor49(req, res);
});

router.get("/limiteAgostoDiscoServidor49", function (req, res) {
    analiseController.limiteAgostoDiscoServidor49(req, res);
});

router.get("/limiteSetembroDiscoServidor49", function (req, res) {
    analiseController.limiteSetembroDiscoServidor49(req, res);
});

router.get("/limiteOutubroDiscoServidor49", function (req, res) {
    analiseController.limiteOutubroDiscoServidor49(req, res);
});

router.get("/limiteNovembroDiscoServidor49", function (req, res) {
    analiseController.limiteNovembroDiscoServidor49(req, res);
});

router.get("/limiteDezembroDiscoServidor49", function (req, res) {
    analiseController.limiteDezembroDiscoServidor49(req, res);
});

router.get("/mensalJaneiroCpuServidor50", function (req, res) {
    analiseController.mensalJaneiroCpuServidor50(req, res);
});

router.get("/mensalFevereiroCpuServidor50", function (req, res) {
    analiseController.mensalFevereiroCpuServidor50(req, res);
});

router.get("/mensalMarcoCpuServidor50", function (req, res) {
    analiseController.mensalMarcoCpuServidor50(req, res);
});

router.get("/mensalAbrilCpuServidor50", function (req, res) {
    analiseController.mensalAbrilCpuServidor50(req, res);
});

router.get("/mensalMaioCpuServidor50", function (req, res) {
    analiseController.mensalMaioCpuServidor50(req, res);
});

router.get("/mensalJunhoCpuServidor50", function (req, res) {
    analiseController.mensalJunhoCpuServidor50(req, res);
});

router.get("/mensalJulhoCpuServidor50", function (req, res) {
    analiseController.mensalJulhoCpuServidor50(req, res);
});

router.get("/mensalAgostoCpuServidor50", function (req, res) {
    analiseController.mensalAgostoCpuServidor50(req, res);
});

router.get("/mensalSetembroCpuServidor50", function (req, res) {
    analiseController.mensalSetembroCpuServidor50(req, res);
});

router.get("/mensalOutubroCpuServidor50", function (req, res) {
    analiseController.mensalOutubroCpuServidor50(req, res);
});

router.get("/mensalNovembroCpuServidor50", function (req, res) {
    analiseController.mensalNovembroCpuServidor50(req, res);
});

router.get("/mensalDezembroCpuServidor50", function (req, res) {
    analiseController.mensalDezembroCpuServidor50(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor50", function (req, res) {
    analiseController.mensalJaneiroRamServidor50(req, res);
});

router.get("/mensalFevereiroRamServidor50", function (req, res) {
    analiseController.mensalFevereiroRamServidor50(req, res);
});

router.get("/mensalMarcoRamServidor50", function (req, res) {
    analiseController.mensalMarcoRamServidor50(req, res);
});

router.get("/mensalAbrilRamServidor50", function (req, res) {
    analiseController.mensalAbrilRamServidor50(req, res);
});

router.get("/mensalMaioRamServidor50", function (req, res) {
    analiseController.mensalMaioRamServidor50(req, res);
});

router.get("/mensalJunhoRamServidor50", function (req, res) {
    analiseController.mensalJunhoRamServidor50(req, res);
});

router.get("/mensalJulhoRamServidor50", function (req, res) {
    analiseController.mensalJulhoRamServidor50(req, res);
});

router.get("/mensalAgostoRamServidor50", function (req, res) {
    analiseController.mensalAgostoRamServidor50(req, res);
});

router.get("/mensalSetembroRamServidor50", function (req, res) {
    analiseController.mensalSetembroRamServidor50(req, res);
});

router.get("/mensalOutubroRamServidor50", function (req, res) {
    analiseController.mensalOutubroRamServidor50(req, res);
});

router.get("/mensalNovembroRamServidor50", function (req, res) {
    analiseController.mensalNovembroRamServidor50(req, res);
});

router.get("/mensalDezembroRamServidor50", function (req, res) {
    analiseController.mensalDezembroRamServidor50(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor50", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor50(req, res);
});

router.get("/mensalFevereiroDiscoServidor50", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor50(req, res);
});

router.get("/mensalMarcoDiscoServidor50", function (req, res) {
    analiseController.mensalMarcoDiscoServidor50(req, res);
});

router.get("/mensalAbrilDiscoServidor50", function (req, res) {
    analiseController.mensalAbrilDiscoServidor50(req, res);
});

router.get("/mensalMaioDiscoServidor50", function (req, res) {
    analiseController.mensalMaioDiscoServidor50(req, res);
});

router.get("/mensalJunhoDiscoServidor50", function (req, res) {
    analiseController.mensalJunhoDiscoServidor50(req, res);
});

router.get("/mensalJulhoDiscoServidor50", function (req, res) {
    analiseController.mensalJulhoDiscoServidor50(req, res);
});

router.get("/mensalAgostoDiscoServidor50", function (req, res) {
    analiseController.mensalAgostoDiscoServidor50(req, res);
});

router.get("/mensalSetembroDiscoServidor50", function (req, res) {
    analiseController.mensalSetembroDiscoServidor50(req, res);
});

router.get("/mensalOutubroDiscoServidor50", function (req, res) {
    analiseController.mensalOutubroDiscoServidor50(req, res);
});

router.get("/mensalNovembroDiscoServidor50", function (req, res) {
    analiseController.mensalNovembroDiscoServidor50(req, res);
});

router.get("/mensalDezembroDiscoServidor50", function (req, res) {
    analiseController.mensalDezembroDiscoServidor50(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor50", function (req, res) {
    analiseController.limiteJaneiroCpuServidor50(req, res);
});

router.get("/limiteFevereiroCpuServidor50", function (req, res) {
    analiseController.limiteFevereiroCpuServidor50(req, res);
});

router.get("/limiteMarcoCpuServidor50", function (req, res) {
    analiseController.limiteMarcoCpuServidor50(req, res);
});

router.get("/limiteAbrilCpuServidor50", function (req, res) {
    analiseController.limiteAbrilCpuServidor50(req, res);
});

router.get("/limiteMaioCpuServidor50", function (req, res) {
    analiseController.limiteMaioCpuServidor50(req, res);
});

router.get("/limiteJunhoCpuServidor50", function (req, res) {
    analiseController.limiteJunhoCpuServidor50(req, res);
});

router.get("/limiteJulhoCpuServidor50", function (req, res) {
    analiseController.limiteJulhoCpuServidor50(req, res);
});

router.get("/limiteAgostoCpuServidor50", function (req, res) {
    analiseController.limiteAgostoCpuServidor50(req, res);
});

router.get("/limiteSetembroCpuServidor50", function (req, res) {
    analiseController.limiteSetembroCpuServidor50(req, res);
});

router.get("/limiteOutubroCpuServidor50", function (req, res) {
    analiseController.limiteOutubroCpuServidor50(req, res);
});

router.get("/limiteNovembroCpuServidor50", function (req, res) {
    analiseController.limiteNovembroCpuServidor50(req, res);
});

router.get("/limiteDezembroCpuServidor50", function (req, res) {
    analiseController.limiteDezembroCpuServidor50(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor50", function (req, res) {
    analiseController.limiteJaneiroRamServidor50(req, res);
});

router.get("/limiteFevereiroRamServidor50", function (req, res) {
    analiseController.limiteFevereiroRamServidor50(req, res);
});

router.get("/limiteMarcoRamServidor50", function (req, res) {
    analiseController.limiteMarcoRamServidor50(req, res);
});

router.get("/limiteAbrilRamServidor50", function (req, res) {
    analiseController.limiteAbrilRamServidor50(req, res);
});

router.get("/limiteMaioRamServidor50", function (req, res) {
    analiseController.limiteMaioRamServidor50(req, res);
});

router.get("/limiteJunhoRamServidor50", function (req, res) {
    analiseController.limiteJunhoRamServidor50(req, res);
});

router.get("/limiteJulhoRamServidor50", function (req, res) {
    analiseController.limiteJulhoRamServidor50(req, res);
});

router.get("/limiteAgostoRamServidor50", function (req, res) {
    analiseController.limiteAgostoRamServidor50(req, res);
});

router.get("/limiteSetembroRamServidor50", function (req, res) {
    analiseController.limiteSetembroRamServidor50(req, res);
});

router.get("/limiteOutubroRamServidor50", function (req, res) {
    analiseController.limiteOutubroRamServidor50(req, res);
});

router.get("/limiteNovembroRamServidor50", function (req, res) {
    analiseController.limiteNovembroRamServidor50(req, res);
});

router.get("/limiteDezembroRamServidor50", function (req, res) {
    analiseController.limiteDezembroRamServidor50(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor50", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor50(req, res);
});

router.get("/limiteFevereiroDiscoServidor50", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor50(req, res);
});

router.get("/limiteMarcoDiscoServidor50", function (req, res) {
    analiseController.limiteMarcoDiscoServidor50(req, res);
});

router.get("/limiteAbrilDiscoServidor50", function (req, res) {
    analiseController.limiteAbrilDiscoServidor50(req, res);
});

router.get("/limiteMaioDiscoServidor50", function (req, res) {
    analiseController.limiteMaioDiscoServidor50(req, res);
});

router.get("/limiteJunhoDiscoServidor50", function (req, res) {
    analiseController.limiteJunhoDiscoServidor50(req, res);
});

router.get("/limiteJulhoDiscoServidor50", function (req, res) {
    analiseController.limiteJulhoDiscoServidor50(req, res);
});

router.get("/limiteAgostoDiscoServidor50", function (req, res) {
    analiseController.limiteAgostoDiscoServidor50(req, res);
});

router.get("/limiteSetembroDiscoServidor50", function (req, res) {
    analiseController.limiteSetembroDiscoServidor50(req, res);
});

router.get("/limiteOutubroDiscoServidor50", function (req, res) {
    analiseController.limiteOutubroDiscoServidor50(req, res);
});

router.get("/limiteNovembroDiscoServidor50", function (req, res) {
    analiseController.limiteNovembroDiscoServidor50(req, res);
});

router.get("/limiteDezembroDiscoServidor50", function (req, res) {
    analiseController.limiteDezembroDiscoServidor50(req, res);
});

router.get("/mensalJaneiroCpuServidor51", function (req, res) {
    analiseController.mensalJaneiroCpuServidor51(req, res);
});

router.get("/mensalFevereiroCpuServidor51", function (req, res) {
    analiseController.mensalFevereiroCpuServidor51(req, res);
});

router.get("/mensalMarcoCpuServidor51", function (req, res) {
    analiseController.mensalMarcoCpuServidor51(req, res);
});

router.get("/mensalAbrilCpuServidor51", function (req, res) {
    analiseController.mensalAbrilCpuServidor51(req, res);
});

router.get("/mensalMaioCpuServidor51", function (req, res) {
    analiseController.mensalMaioCpuServidor51(req, res);
});

router.get("/mensalJunhoCpuServidor51", function (req, res) {
    analiseController.mensalJunhoCpuServidor51(req, res);
});

router.get("/mensalJulhoCpuServidor51", function (req, res) {
    analiseController.mensalJulhoCpuServidor51(req, res);
});

router.get("/mensalAgostoCpuServidor51", function (req, res) {
    analiseController.mensalAgostoCpuServidor51(req, res);
});

router.get("/mensalSetembroCpuServidor51", function (req, res) {
    analiseController.mensalSetembroCpuServidor51(req, res);
});

router.get("/mensalOutubroCpuServidor51", function (req, res) {
    analiseController.mensalOutubroCpuServidor51(req, res);
});

router.get("/mensalNovembroCpuServidor51", function (req, res) {
    analiseController.mensalNovembroCpuServidor51(req, res);
});

router.get("/mensalDezembroCpuServidor51", function (req, res) {
    analiseController.mensalDezembroCpuServidor51(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor51", function (req, res) {
    analiseController.mensalJaneiroRamServidor51(req, res);
});

router.get("/mensalFevereiroRamServidor51", function (req, res) {
    analiseController.mensalFevereiroRamServidor51(req, res);
});

router.get("/mensalMarcoRamServidor51", function (req, res) {
    analiseController.mensalMarcoRamServidor51(req, res);
});

router.get("/mensalAbrilRamServidor51", function (req, res) {
    analiseController.mensalAbrilRamServidor51(req, res);
});

router.get("/mensalMaioRamServidor51", function (req, res) {
    analiseController.mensalMaioRamServidor51(req, res);
});

router.get("/mensalJunhoRamServidor51", function (req, res) {
    analiseController.mensalJunhoRamServidor51(req, res);
});

router.get("/mensalJulhoRamServidor51", function (req, res) {
    analiseController.mensalJulhoRamServidor51(req, res);
});

router.get("/mensalAgostoRamServidor51", function (req, res) {
    analiseController.mensalAgostoRamServidor51(req, res);
});

router.get("/mensalSetembroRamServidor51", function (req, res) {
    analiseController.mensalSetembroRamServidor51(req, res);
});

router.get("/mensalOutubroRamServidor51", function (req, res) {
    analiseController.mensalOutubroRamServidor51(req, res);
});

router.get("/mensalNovembroRamServidor51", function (req, res) {
    analiseController.mensalNovembroRamServidor51(req, res);
});

router.get("/mensalDezembroRamServidor51", function (req, res) {
    analiseController.mensalDezembroRamServidor51(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor51", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor51(req, res);
});

router.get("/mensalFevereiroDiscoServidor51", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor51(req, res);
});

router.get("/mensalMarcoDiscoServidor51", function (req, res) {
    analiseController.mensalMarcoDiscoServidor51(req, res);
});

router.get("/mensalAbrilDiscoServidor51", function (req, res) {
    analiseController.mensalAbrilDiscoServidor51(req, res);
});

router.get("/mensalMaioDiscoServidor51", function (req, res) {
    analiseController.mensalMaioDiscoServidor51(req, res);
});

router.get("/mensalJunhoDiscoServidor51", function (req, res) {
    analiseController.mensalJunhoDiscoServidor51(req, res);
});

router.get("/mensalJulhoDiscoServidor51", function (req, res) {
    analiseController.mensalJulhoDiscoServidor51(req, res);
});

router.get("/mensalAgostoDiscoServidor51", function (req, res) {
    analiseController.mensalAgostoDiscoServidor51(req, res);
});

router.get("/mensalSetembroDiscoServidor51", function (req, res) {
    analiseController.mensalSetembroDiscoServidor51(req, res);
});

router.get("/mensalOutubroDiscoServidor51", function (req, res) {
    analiseController.mensalOutubroDiscoServidor51(req, res);
});

router.get("/mensalNovembroDiscoServidor51", function (req, res) {
    analiseController.mensalNovembroDiscoServidor51(req, res);
});

router.get("/mensalDezembroDiscoServidor51", function (req, res) {
    analiseController.mensalDezembroDiscoServidor51(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor51", function (req, res) {
    analiseController.limiteJaneiroCpuServidor51(req, res);
});

router.get("/limiteFevereiroCpuServidor51", function (req, res) {
    analiseController.limiteFevereiroCpuServidor51(req, res);
});

router.get("/limiteMarcoCpuServidor51", function (req, res) {
    analiseController.limiteMarcoCpuServidor51(req, res);
});

router.get("/limiteAbrilCpuServidor51", function (req, res) {
    analiseController.limiteAbrilCpuServidor51(req, res);
});

router.get("/limiteMaioCpuServidor51", function (req, res) {
    analiseController.limiteMaioCpuServidor51(req, res);
});

router.get("/limiteJunhoCpuServidor51", function (req, res) {
    analiseController.limiteJunhoCpuServidor51(req, res);
});

router.get("/limiteJulhoCpuServidor51", function (req, res) {
    analiseController.limiteJulhoCpuServidor51(req, res);
});

router.get("/limiteAgostoCpuServidor51", function (req, res) {
    analiseController.limiteAgostoCpuServidor51(req, res);
});

router.get("/limiteSetembroCpuServidor51", function (req, res) {
    analiseController.limiteSetembroCpuServidor51(req, res);
});

router.get("/limiteOutubroCpuServidor51", function (req, res) {
    analiseController.limiteOutubroCpuServidor51(req, res);
});

router.get("/limiteNovembroCpuServidor51", function (req, res) {
    analiseController.limiteNovembroCpuServidor51(req, res);
});

router.get("/limiteDezembroCpuServidor51", function (req, res) {
    analiseController.limiteDezembroCpuServidor51(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor51", function (req, res) {
    analiseController.limiteJaneiroRamServidor51(req, res);
});

router.get("/limiteFevereiroRamServidor51", function (req, res) {
    analiseController.limiteFevereiroRamServidor51(req, res);
});

router.get("/limiteMarcoRamServidor51", function (req, res) {
    analiseController.limiteMarcoRamServidor51(req, res);
});

router.get("/limiteAbrilRamServidor51", function (req, res) {
    analiseController.limiteAbrilRamServidor51(req, res);
});

router.get("/limiteMaioRamServidor51", function (req, res) {
    analiseController.limiteMaioRamServidor51(req, res);
});

router.get("/limiteJunhoRamServidor51", function (req, res) {
    analiseController.limiteJunhoRamServidor51(req, res);
});

router.get("/limiteJulhoRamServidor51", function (req, res) {
    analiseController.limiteJulhoRamServidor51(req, res);
});

router.get("/limiteAgostoRamServidor51", function (req, res) {
    analiseController.limiteAgostoRamServidor51(req, res);
});

router.get("/limiteSetembroRamServidor51", function (req, res) {
    analiseController.limiteSetembroRamServidor51(req, res);
});

router.get("/limiteOutubroRamServidor51", function (req, res) {
    analiseController.limiteOutubroRamServidor51(req, res);
});

router.get("/limiteNovembroRamServidor51", function (req, res) {
    analiseController.limiteNovembroRamServidor51(req, res);
});

router.get("/limiteDezembroRamServidor51", function (req, res) {
    analiseController.limiteDezembroRamServidor51(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor51", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor51(req, res);
});

router.get("/limiteFevereiroDiscoServidor51", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor51(req, res);
});

router.get("/limiteMarcoDiscoServidor51", function (req, res) {
    analiseController.limiteMarcoDiscoServidor51(req, res);
});

router.get("/limiteAbrilDiscoServidor51", function (req, res) {
    analiseController.limiteAbrilDiscoServidor51(req, res);
});

router.get("/limiteMaioDiscoServidor51", function (req, res) {
    analiseController.limiteMaioDiscoServidor51(req, res);
});

router.get("/limiteJunhoDiscoServidor51", function (req, res) {
    analiseController.limiteJunhoDiscoServidor51(req, res);
});

router.get("/limiteJulhoDiscoServidor51", function (req, res) {
    analiseController.limiteJulhoDiscoServidor51(req, res);
});

router.get("/limiteAgostoDiscoServidor51", function (req, res) {
    analiseController.limiteAgostoDiscoServidor51(req, res);
});

router.get("/limiteSetembroDiscoServidor51", function (req, res) {
    analiseController.limiteSetembroDiscoServidor51(req, res);
});

router.get("/limiteOutubroDiscoServidor51", function (req, res) {
    analiseController.limiteOutubroDiscoServidor51(req, res);
});

router.get("/limiteNovembroDiscoServidor51", function (req, res) {
    analiseController.limiteNovembroDiscoServidor51(req, res);
});

router.get("/limiteDezembroDiscoServidor51", function (req, res) {
    analiseController.limiteDezembroDiscoServidor51(req, res);
});

router.get("/mensalJaneiroCpuServidor52", function (req, res) {
    analiseController.mensalJaneiroCpuServidor52(req, res);
});

router.get("/mensalFevereiroCpuServidor52", function (req, res) {
    analiseController.mensalFevereiroCpuServidor52(req, res);
});

router.get("/mensalMarcoCpuServidor52", function (req, res) {
    analiseController.mensalMarcoCpuServidor52(req, res);
});

router.get("/mensalAbrilCpuServidor52", function (req, res) {
    analiseController.mensalAbrilCpuServidor52(req, res);
});

router.get("/mensalMaioCpuServidor52", function (req, res) {
    analiseController.mensalMaioCpuServidor52(req, res);
});

router.get("/mensalJunhoCpuServidor52", function (req, res) {
    analiseController.mensalJunhoCpuServidor52(req, res);
});

router.get("/mensalJulhoCpuServidor52", function (req, res) {
    analiseController.mensalJulhoCpuServidor52(req, res);
});

router.get("/mensalAgostoCpuServidor52", function (req, res) {
    analiseController.mensalAgostoCpuServidor52(req, res);
});

router.get("/mensalSetembroCpuServidor52", function (req, res) {
    analiseController.mensalSetembroCpuServidor52(req, res);
});

router.get("/mensalOutubroCpuServidor52", function (req, res) {
    analiseController.mensalOutubroCpuServidor52(req, res);
});

router.get("/mensalNovembroCpuServidor52", function (req, res) {
    analiseController.mensalNovembroCpuServidor52(req, res);
});

router.get("/mensalDezembroCpuServidor52", function (req, res) {
    analiseController.mensalDezembroCpuServidor52(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor52", function (req, res) {
    analiseController.mensalJaneiroRamServidor52(req, res);
});

router.get("/mensalFevereiroRamServidor52", function (req, res) {
    analiseController.mensalFevereiroRamServidor52(req, res);
});

router.get("/mensalMarcoRamServidor52", function (req, res) {
    analiseController.mensalMarcoRamServidor52(req, res);
});

router.get("/mensalAbrilRamServidor52", function (req, res) {
    analiseController.mensalAbrilRamServidor52(req, res);
});

router.get("/mensalMaioRamServidor52", function (req, res) {
    analiseController.mensalMaioRamServidor52(req, res);
});

router.get("/mensalJunhoRamServidor52", function (req, res) {
    analiseController.mensalJunhoRamServidor52(req, res);
});

router.get("/mensalJulhoRamServidor52", function (req, res) {
    analiseController.mensalJulhoRamServidor52(req, res);
});

router.get("/mensalAgostoRamServidor52", function (req, res) {
    analiseController.mensalAgostoRamServidor52(req, res);
});

router.get("/mensalSetembroRamServidor52", function (req, res) {
    analiseController.mensalSetembroRamServidor52(req, res);
});

router.get("/mensalOutubroRamServidor52", function (req, res) {
    analiseController.mensalOutubroRamServidor52(req, res);
});

router.get("/mensalNovembroRamServidor52", function (req, res) {
    analiseController.mensalNovembroRamServidor52(req, res);
});

router.get("/mensalDezembroRamServidor52", function (req, res) {
    analiseController.mensalDezembroRamServidor52(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor52", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor52(req, res);
});

router.get("/mensalFevereiroDiscoServidor52", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor52(req, res);
});

router.get("/mensalMarcoDiscoServidor52", function (req, res) {
    analiseController.mensalMarcoDiscoServidor52(req, res);
});

router.get("/mensalAbrilDiscoServidor52", function (req, res) {
    analiseController.mensalAbrilDiscoServidor52(req, res);
});

router.get("/mensalMaioDiscoServidor52", function (req, res) {
    analiseController.mensalMaioDiscoServidor52(req, res);
});

router.get("/mensalJunhoDiscoServidor52", function (req, res) {
    analiseController.mensalJunhoDiscoServidor52(req, res);
});

router.get("/mensalJulhoDiscoServidor52", function (req, res) {
    analiseController.mensalJulhoDiscoServidor52(req, res);
});

router.get("/mensalAgostoDiscoServidor52", function (req, res) {
    analiseController.mensalAgostoDiscoServidor52(req, res);
});

router.get("/mensalSetembroDiscoServidor52", function (req, res) {
    analiseController.mensalSetembroDiscoServidor52(req, res);
});

router.get("/mensalOutubroDiscoServidor52", function (req, res) {
    analiseController.mensalOutubroDiscoServidor52(req, res);
});

router.get("/mensalNovembroDiscoServidor52", function (req, res) {
    analiseController.mensalNovembroDiscoServidor52(req, res);
});

router.get("/mensalDezembroDiscoServidor52", function (req, res) {
    analiseController.mensalDezembroDiscoServidor52(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor52", function (req, res) {
    analiseController.limiteJaneiroCpuServidor52(req, res);
});

router.get("/limiteFevereiroCpuServidor52", function (req, res) {
    analiseController.limiteFevereiroCpuServidor52(req, res);
});

router.get("/limiteMarcoCpuServidor52", function (req, res) {
    analiseController.limiteMarcoCpuServidor52(req, res);
});

router.get("/limiteAbrilCpuServidor52", function (req, res) {
    analiseController.limiteAbrilCpuServidor52(req, res);
});

router.get("/limiteMaioCpuServidor52", function (req, res) {
    analiseController.limiteMaioCpuServidor52(req, res);
});

router.get("/limiteJunhoCpuServidor52", function (req, res) {
    analiseController.limiteJunhoCpuServidor52(req, res);
});

router.get("/limiteJulhoCpuServidor52", function (req, res) {
    analiseController.limiteJulhoCpuServidor52(req, res);
});

router.get("/limiteAgostoCpuServidor52", function (req, res) {
    analiseController.limiteAgostoCpuServidor52(req, res);
});

router.get("/limiteSetembroCpuServidor52", function (req, res) {
    analiseController.limiteSetembroCpuServidor52(req, res);
});

router.get("/limiteOutubroCpuServidor52", function (req, res) {
    analiseController.limiteOutubroCpuServidor52(req, res);
});

router.get("/limiteNovembroCpuServidor52", function (req, res) {
    analiseController.limiteNovembroCpuServidor52(req, res);
});

router.get("/limiteDezembroCpuServidor52", function (req, res) {
    analiseController.limiteDezembroCpuServidor52(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor52", function (req, res) {
    analiseController.limiteJaneiroRamServidor52(req, res);
});

router.get("/limiteFevereiroRamServidor52", function (req, res) {
    analiseController.limiteFevereiroRamServidor52(req, res);
});

router.get("/limiteMarcoRamServidor52", function (req, res) {
    analiseController.limiteMarcoRamServidor52(req, res);
});

router.get("/limiteAbrilRamServidor52", function (req, res) {
    analiseController.limiteAbrilRamServidor52(req, res);
});

router.get("/limiteMaioRamServidor52", function (req, res) {
    analiseController.limiteMaioRamServidor52(req, res);
});

router.get("/limiteJunhoRamServidor52", function (req, res) {
    analiseController.limiteJunhoRamServidor52(req, res);
});

router.get("/limiteJulhoRamServidor52", function (req, res) {
    analiseController.limiteJulhoRamServidor52(req, res);
});

router.get("/limiteAgostoRamServidor52", function (req, res) {
    analiseController.limiteAgostoRamServidor52(req, res);
});

router.get("/limiteSetembroRamServidor52", function (req, res) {
    analiseController.limiteSetembroRamServidor52(req, res);
});

router.get("/limiteOutubroRamServidor52", function (req, res) {
    analiseController.limiteOutubroRamServidor52(req, res);
});

router.get("/limiteNovembroRamServidor52", function (req, res) {
    analiseController.limiteNovembroRamServidor52(req, res);
});

router.get("/limiteDezembroRamServidor52", function (req, res) {
    analiseController.limiteDezembroRamServidor52(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor52", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor52(req, res);
});

router.get("/limiteFevereiroDiscoServidor52", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor52(req, res);
});

router.get("/limiteMarcoDiscoServidor52", function (req, res) {
    analiseController.limiteMarcoDiscoServidor52(req, res);
});

router.get("/limiteAbrilDiscoServidor52", function (req, res) {
    analiseController.limiteAbrilDiscoServidor52(req, res);
});

router.get("/limiteMaioDiscoServidor52", function (req, res) {
    analiseController.limiteMaioDiscoServidor52(req, res);
});

router.get("/limiteJunhoDiscoServidor52", function (req, res) {
    analiseController.limiteJunhoDiscoServidor52(req, res);
});

router.get("/limiteJulhoDiscoServidor52", function (req, res) {
    analiseController.limiteJulhoDiscoServidor52(req, res);
});

router.get("/limiteAgostoDiscoServidor52", function (req, res) {
    analiseController.limiteAgostoDiscoServidor52(req, res);
});

router.get("/limiteSetembroDiscoServidor52", function (req, res) {
    analiseController.limiteSetembroDiscoServidor52(req, res);
});

router.get("/limiteOutubroDiscoServidor52", function (req, res) {
    analiseController.limiteOutubroDiscoServidor52(req, res);
});

router.get("/limiteNovembroDiscoServidor52", function (req, res) {
    analiseController.limiteNovembroDiscoServidor52(req, res);
});

router.get("/limiteDezembroDiscoServidor52", function (req, res) {
    analiseController.limiteDezembroDiscoServidor52(req, res);
});

router.get("/mensalJaneiroCpuServidor53", function (req, res) {
    analiseController.mensalJaneiroCpuServidor53(req, res);
});

router.get("/mensalFevereiroCpuServidor53", function (req, res) {
    analiseController.mensalFevereiroCpuServidor53(req, res);
});

router.get("/mensalMarcoCpuServidor53", function (req, res) {
    analiseController.mensalMarcoCpuServidor53(req, res);
});

router.get("/mensalAbrilCpuServidor53", function (req, res) {
    analiseController.mensalAbrilCpuServidor53(req, res);
});

router.get("/mensalMaioCpuServidor53", function (req, res) {
    analiseController.mensalMaioCpuServidor53(req, res);
});

router.get("/mensalJunhoCpuServidor53", function (req, res) {
    analiseController.mensalJunhoCpuServidor53(req, res);
});

router.get("/mensalJulhoCpuServidor53", function (req, res) {
    analiseController.mensalJulhoCpuServidor53(req, res);
});

router.get("/mensalAgostoCpuServidor53", function (req, res) {
    analiseController.mensalAgostoCpuServidor53(req, res);
});

router.get("/mensalSetembroCpuServidor53", function (req, res) {
    analiseController.mensalSetembroCpuServidor53(req, res);
});

router.get("/mensalOutubroCpuServidor53", function (req, res) {
    analiseController.mensalOutubroCpuServidor53(req, res);
});

router.get("/mensalNovembroCpuServidor53", function (req, res) {
    analiseController.mensalNovembroCpuServidor53(req, res);
});

router.get("/mensalDezembroCpuServidor53", function (req, res) {
    analiseController.mensalDezembroCpuServidor53(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor53", function (req, res) {
    analiseController.mensalJaneiroRamServidor53(req, res);
});

router.get("/mensalFevereiroRamServidor53", function (req, res) {
    analiseController.mensalFevereiroRamServidor53(req, res);
});

router.get("/mensalMarcoRamServidor53", function (req, res) {
    analiseController.mensalMarcoRamServidor53(req, res);
});

router.get("/mensalAbrilRamServidor53", function (req, res) {
    analiseController.mensalAbrilRamServidor53(req, res);
});

router.get("/mensalMaioRamServidor53", function (req, res) {
    analiseController.mensalMaioRamServidor53(req, res);
});

router.get("/mensalJunhoRamServidor53", function (req, res) {
    analiseController.mensalJunhoRamServidor53(req, res);
});

router.get("/mensalJulhoRamServidor53", function (req, res) {
    analiseController.mensalJulhoRamServidor53(req, res);
});

router.get("/mensalAgostoRamServidor53", function (req, res) {
    analiseController.mensalAgostoRamServidor53(req, res);
});

router.get("/mensalSetembroRamServidor53", function (req, res) {
    analiseController.mensalSetembroRamServidor53(req, res);
});

router.get("/mensalOutubroRamServidor53", function (req, res) {
    analiseController.mensalOutubroRamServidor53(req, res);
});

router.get("/mensalNovembroRamServidor53", function (req, res) {
    analiseController.mensalNovembroRamServidor53(req, res);
});

router.get("/mensalDezembroRamServidor53", function (req, res) {
    analiseController.mensalDezembroRamServidor53(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor53", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor53(req, res);
});

router.get("/mensalFevereiroDiscoServidor53", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor53(req, res);
});

router.get("/mensalMarcoDiscoServidor53", function (req, res) {
    analiseController.mensalMarcoDiscoServidor53(req, res);
});

router.get("/mensalAbrilDiscoServidor53", function (req, res) {
    analiseController.mensalAbrilDiscoServidor53(req, res);
});

router.get("/mensalMaioDiscoServidor53", function (req, res) {
    analiseController.mensalMaioDiscoServidor53(req, res);
});

router.get("/mensalJunhoDiscoServidor53", function (req, res) {
    analiseController.mensalJunhoDiscoServidor53(req, res);
});

router.get("/mensalJulhoDiscoServidor53", function (req, res) {
    analiseController.mensalJulhoDiscoServidor53(req, res);
});

router.get("/mensalAgostoDiscoServidor53", function (req, res) {
    analiseController.mensalAgostoDiscoServidor53(req, res);
});

router.get("/mensalSetembroDiscoServidor53", function (req, res) {
    analiseController.mensalSetembroDiscoServidor53(req, res);
});

router.get("/mensalOutubroDiscoServidor53", function (req, res) {
    analiseController.mensalOutubroDiscoServidor53(req, res);
});

router.get("/mensalNovembroDiscoServidor53", function (req, res) {
    analiseController.mensalNovembroDiscoServidor53(req, res);
});

router.get("/mensalDezembroDiscoServidor53", function (req, res) {
    analiseController.mensalDezembroDiscoServidor53(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor53", function (req, res) {
    analiseController.limiteJaneiroCpuServidor53(req, res);
});

router.get("/limiteFevereiroCpuServidor53", function (req, res) {
    analiseController.limiteFevereiroCpuServidor53(req, res);
});

router.get("/limiteMarcoCpuServidor53", function (req, res) {
    analiseController.limiteMarcoCpuServidor53(req, res);
});

router.get("/limiteAbrilCpuServidor53", function (req, res) {
    analiseController.limiteAbrilCpuServidor53(req, res);
});

router.get("/limiteMaioCpuServidor53", function (req, res) {
    analiseController.limiteMaioCpuServidor53(req, res);
});

router.get("/limiteJunhoCpuServidor53", function (req, res) {
    analiseController.limiteJunhoCpuServidor53(req, res);
});

router.get("/limiteJulhoCpuServidor53", function (req, res) {
    analiseController.limiteJulhoCpuServidor53(req, res);
});

router.get("/limiteAgostoCpuServidor53", function (req, res) {
    analiseController.limiteAgostoCpuServidor53(req, res);
});

router.get("/limiteSetembroCpuServidor53", function (req, res) {
    analiseController.limiteSetembroCpuServidor53(req, res);
});

router.get("/limiteOutubroCpuServidor53", function (req, res) {
    analiseController.limiteOutubroCpuServidor53(req, res);
});

router.get("/limiteNovembroCpuServidor53", function (req, res) {
    analiseController.limiteNovembroCpuServidor53(req, res);
});

router.get("/limiteDezembroCpuServidor53", function (req, res) {
    analiseController.limiteDezembroCpuServidor53(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor53", function (req, res) {
    analiseController.limiteJaneiroRamServidor53(req, res);
});

router.get("/limiteFevereiroRamServidor53", function (req, res) {
    analiseController.limiteFevereiroRamServidor53(req, res);
});

router.get("/limiteMarcoRamServidor53", function (req, res) {
    analiseController.limiteMarcoRamServidor53(req, res);
});

router.get("/limiteAbrilRamServidor53", function (req, res) {
    analiseController.limiteAbrilRamServidor53(req, res);
});

router.get("/limiteMaioRamServidor53", function (req, res) {
    analiseController.limiteMaioRamServidor53(req, res);
});

router.get("/limiteJunhoRamServidor53", function (req, res) {
    analiseController.limiteJunhoRamServidor53(req, res);
});

router.get("/limiteJulhoRamServidor53", function (req, res) {
    analiseController.limiteJulhoRamServidor53(req, res);
});

router.get("/limiteAgostoRamServidor53", function (req, res) {
    analiseController.limiteAgostoRamServidor53(req, res);
});

router.get("/limiteSetembroRamServidor53", function (req, res) {
    analiseController.limiteSetembroRamServidor53(req, res);
});

router.get("/limiteOutubroRamServidor53", function (req, res) {
    analiseController.limiteOutubroRamServidor53(req, res);
});

router.get("/limiteNovembroRamServidor53", function (req, res) {
    analiseController.limiteNovembroRamServidor53(req, res);
});

router.get("/limiteDezembroRamServidor53", function (req, res) {
    analiseController.limiteDezembroRamServidor53(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor53", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor53(req, res);
});

router.get("/limiteFevereiroDiscoServidor53", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor53(req, res);
});

router.get("/limiteMarcoDiscoServidor53", function (req, res) {
    analiseController.limiteMarcoDiscoServidor53(req, res);
});

router.get("/limiteAbrilDiscoServidor53", function (req, res) {
    analiseController.limiteAbrilDiscoServidor53(req, res);
});

router.get("/limiteMaioDiscoServidor53", function (req, res) {
    analiseController.limiteMaioDiscoServidor53(req, res);
});

router.get("/limiteJunhoDiscoServidor53", function (req, res) {
    analiseController.limiteJunhoDiscoServidor53(req, res);
});

router.get("/limiteJulhoDiscoServidor53", function (req, res) {
    analiseController.limiteJulhoDiscoServidor53(req, res);
});

router.get("/limiteAgostoDiscoServidor53", function (req, res) {
    analiseController.limiteAgostoDiscoServidor53(req, res);
});

router.get("/limiteSetembroDiscoServidor53", function (req, res) {
    analiseController.limiteSetembroDiscoServidor53(req, res);
});

router.get("/limiteOutubroDiscoServidor53", function (req, res) {
    analiseController.limiteOutubroDiscoServidor53(req, res);
});

router.get("/limiteNovembroDiscoServidor53", function (req, res) {
    analiseController.limiteNovembroDiscoServidor53(req, res);
});

router.get("/limiteDezembroDiscoServidor53", function (req, res) {
    analiseController.limiteDezembroDiscoServidor53(req, res);
});

router.get("/mensalJaneiroCpuServidor54", function (req, res) {
    analiseController.mensalJaneiroCpuServidor54(req, res);
});

router.get("/mensalFevereiroCpuServidor54", function (req, res) {
    analiseController.mensalFevereiroCpuServidor54(req, res);
});

router.get("/mensalMarcoCpuServidor54", function (req, res) {
    analiseController.mensalMarcoCpuServidor54(req, res);
});

router.get("/mensalAbrilCpuServidor54", function (req, res) {
    analiseController.mensalAbrilCpuServidor54(req, res);
});

router.get("/mensalMaioCpuServidor54", function (req, res) {
    analiseController.mensalMaioCpuServidor54(req, res);
});

router.get("/mensalJunhoCpuServidor54", function (req, res) {
    analiseController.mensalJunhoCpuServidor54(req, res);
});

router.get("/mensalJulhoCpuServidor54", function (req, res) {
    analiseController.mensalJulhoCpuServidor54(req, res);
});

router.get("/mensalAgostoCpuServidor54", function (req, res) {
    analiseController.mensalAgostoCpuServidor54(req, res);
});

router.get("/mensalSetembroCpuServidor54", function (req, res) {
    analiseController.mensalSetembroCpuServidor54(req, res);
});

router.get("/mensalOutubroCpuServidor54", function (req, res) {
    analiseController.mensalOutubroCpuServidor54(req, res);
});

router.get("/mensalNovembroCpuServidor54", function (req, res) {
    analiseController.mensalNovembroCpuServidor54(req, res);
});

router.get("/mensalDezembroCpuServidor54", function (req, res) {
    analiseController.mensalDezembroCpuServidor54(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor54", function (req, res) {
    analiseController.mensalJaneiroRamServidor54(req, res);
});

router.get("/mensalFevereiroRamServidor54", function (req, res) {
    analiseController.mensalFevereiroRamServidor54(req, res);
});

router.get("/mensalMarcoRamServidor54", function (req, res) {
    analiseController.mensalMarcoRamServidor54(req, res);
});

router.get("/mensalAbrilRamServidor54", function (req, res) {
    analiseController.mensalAbrilRamServidor54(req, res);
});

router.get("/mensalMaioRamServidor54", function (req, res) {
    analiseController.mensalMaioRamServidor54(req, res);
});

router.get("/mensalJunhoRamServidor54", function (req, res) {
    analiseController.mensalJunhoRamServidor54(req, res);
});

router.get("/mensalJulhoRamServidor54", function (req, res) {
    analiseController.mensalJulhoRamServidor54(req, res);
});

router.get("/mensalAgostoRamServidor54", function (req, res) {
    analiseController.mensalAgostoRamServidor54(req, res);
});

router.get("/mensalSetembroRamServidor54", function (req, res) {
    analiseController.mensalSetembroRamServidor54(req, res);
});

router.get("/mensalOutubroRamServidor54", function (req, res) {
    analiseController.mensalOutubroRamServidor54(req, res);
});

router.get("/mensalNovembroRamServidor54", function (req, res) {
    analiseController.mensalNovembroRamServidor54(req, res);
});

router.get("/mensalDezembroRamServidor54", function (req, res) {
    analiseController.mensalDezembroRamServidor54(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor54", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor54(req, res);
});

router.get("/mensalFevereiroDiscoServidor54", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor54(req, res);
});

router.get("/mensalMarcoDiscoServidor54", function (req, res) {
    analiseController.mensalMarcoDiscoServidor54(req, res);
});

router.get("/mensalAbrilDiscoServidor54", function (req, res) {
    analiseController.mensalAbrilDiscoServidor54(req, res);
});

router.get("/mensalMaioDiscoServidor54", function (req, res) {
    analiseController.mensalMaioDiscoServidor54(req, res);
});

router.get("/mensalJunhoDiscoServidor54", function (req, res) {
    analiseController.mensalJunhoDiscoServidor54(req, res);
});

router.get("/mensalJulhoDiscoServidor54", function (req, res) {
    analiseController.mensalJulhoDiscoServidor54(req, res);
});

router.get("/mensalAgostoDiscoServidor54", function (req, res) {
    analiseController.mensalAgostoDiscoServidor54(req, res);
});

router.get("/mensalSetembroDiscoServidor54", function (req, res) {
    analiseController.mensalSetembroDiscoServidor54(req, res);
});

router.get("/mensalOutubroDiscoServidor54", function (req, res) {
    analiseController.mensalOutubroDiscoServidor54(req, res);
});

router.get("/mensalNovembroDiscoServidor54", function (req, res) {
    analiseController.mensalNovembroDiscoServidor54(req, res);
});

router.get("/mensalDezembroDiscoServidor54", function (req, res) {
    analiseController.mensalDezembroDiscoServidor54(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor54", function (req, res) {
    analiseController.limiteJaneiroCpuServidor54(req, res);
});

router.get("/limiteFevereiroCpuServidor54", function (req, res) {
    analiseController.limiteFevereiroCpuServidor54(req, res);
});

router.get("/limiteMarcoCpuServidor54", function (req, res) {
    analiseController.limiteMarcoCpuServidor54(req, res);
});

router.get("/limiteAbrilCpuServidor54", function (req, res) {
    analiseController.limiteAbrilCpuServidor54(req, res);
});

router.get("/limiteMaioCpuServidor54", function (req, res) {
    analiseController.limiteMaioCpuServidor54(req, res);
});

router.get("/limiteJunhoCpuServidor54", function (req, res) {
    analiseController.limiteJunhoCpuServidor54(req, res);
});

router.get("/limiteJulhoCpuServidor54", function (req, res) {
    analiseController.limiteJulhoCpuServidor54(req, res);
});

router.get("/limiteAgostoCpuServidor54", function (req, res) {
    analiseController.limiteAgostoCpuServidor54(req, res);
});

router.get("/limiteSetembroCpuServidor54", function (req, res) {
    analiseController.limiteSetembroCpuServidor54(req, res);
});

router.get("/limiteOutubroCpuServidor54", function (req, res) {
    analiseController.limiteOutubroCpuServidor54(req, res);
});

router.get("/limiteNovembroCpuServidor54", function (req, res) {
    analiseController.limiteNovembroCpuServidor54(req, res);
});

router.get("/limiteDezembroCpuServidor54", function (req, res) {
    analiseController.limiteDezembroCpuServidor54(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor54", function (req, res) {
    analiseController.limiteJaneiroRamServidor54(req, res);
});

router.get("/limiteFevereiroRamServidor54", function (req, res) {
    analiseController.limiteFevereiroRamServidor54(req, res);
});

router.get("/limiteMarcoRamServidor54", function (req, res) {
    analiseController.limiteMarcoRamServidor54(req, res);
});

router.get("/limiteAbrilRamServidor54", function (req, res) {
    analiseController.limiteAbrilRamServidor54(req, res);
});

router.get("/limiteMaioRamServidor54", function (req, res) {
    analiseController.limiteMaioRamServidor54(req, res);
});

router.get("/limiteJunhoRamServidor54", function (req, res) {
    analiseController.limiteJunhoRamServidor54(req, res);
});

router.get("/limiteJulhoRamServidor54", function (req, res) {
    analiseController.limiteJulhoRamServidor54(req, res);
});

router.get("/limiteAgostoRamServidor54", function (req, res) {
    analiseController.limiteAgostoRamServidor54(req, res);
});

router.get("/limiteSetembroRamServidor54", function (req, res) {
    analiseController.limiteSetembroRamServidor54(req, res);
});

router.get("/limiteOutubroRamServidor54", function (req, res) {
    analiseController.limiteOutubroRamServidor54(req, res);
});

router.get("/limiteNovembroRamServidor54", function (req, res) {
    analiseController.limiteNovembroRamServidor54(req, res);
});

router.get("/limiteDezembroRamServidor54", function (req, res) {
    analiseController.limiteDezembroRamServidor54(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor54", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor54(req, res);
});

router.get("/limiteFevereiroDiscoServidor54", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor54(req, res);
});

router.get("/limiteMarcoDiscoServidor54", function (req, res) {
    analiseController.limiteMarcoDiscoServidor54(req, res);
});

router.get("/limiteAbrilDiscoServidor54", function (req, res) {
    analiseController.limiteAbrilDiscoServidor54(req, res);
});

router.get("/limiteMaioDiscoServidor54", function (req, res) {
    analiseController.limiteMaioDiscoServidor54(req, res);
});

router.get("/limiteJunhoDiscoServidor54", function (req, res) {
    analiseController.limiteJunhoDiscoServidor54(req, res);
});

router.get("/limiteJulhoDiscoServidor54", function (req, res) {
    analiseController.limiteJulhoDiscoServidor54(req, res);
});

router.get("/limiteAgostoDiscoServidor54", function (req, res) {
    analiseController.limiteAgostoDiscoServidor54(req, res);
});

router.get("/limiteSetembroDiscoServidor54", function (req, res) {
    analiseController.limiteSetembroDiscoServidor54(req, res);
});

router.get("/limiteOutubroDiscoServidor54", function (req, res) {
    analiseController.limiteOutubroDiscoServidor54(req, res);
});

router.get("/limiteNovembroDiscoServidor54", function (req, res) {
    analiseController.limiteNovembroDiscoServidor54(req, res);
});

router.get("/limiteDezembroDiscoServidor54", function (req, res) {
    analiseController.limiteDezembroDiscoServidor54(req, res);
});

router.get("/mensalJaneiroCpuServidor55", function (req, res) {
    analiseController.mensalJaneiroCpuServidor55(req, res);
});

router.get("/mensalFevereiroCpuServidor55", function (req, res) {
    analiseController.mensalFevereiroCpuServidor55(req, res);
});

router.get("/mensalMarcoCpuServidor55", function (req, res) {
    analiseController.mensalMarcoCpuServidor55(req, res);
});

router.get("/mensalAbrilCpuServidor55", function (req, res) {
    analiseController.mensalAbrilCpuServidor55(req, res);
});

router.get("/mensalMaioCpuServidor55", function (req, res) {
    analiseController.mensalMaioCpuServidor55(req, res);
});

router.get("/mensalJunhoCpuServidor55", function (req, res) {
    analiseController.mensalJunhoCpuServidor55(req, res);
});

router.get("/mensalJulhoCpuServidor55", function (req, res) {
    analiseController.mensalJulhoCpuServidor55(req, res);
});

router.get("/mensalAgostoCpuServidor55", function (req, res) {
    analiseController.mensalAgostoCpuServidor55(req, res);
});

router.get("/mensalSetembroCpuServidor55", function (req, res) {
    analiseController.mensalSetembroCpuServidor55(req, res);
});

router.get("/mensalOutubroCpuServidor55", function (req, res) {
    analiseController.mensalOutubroCpuServidor55(req, res);
});

router.get("/mensalNovembroCpuServidor55", function (req, res) {
    analiseController.mensalNovembroCpuServidor55(req, res);
});

router.get("/mensalDezembroCpuServidor55", function (req, res) {
    analiseController.mensalDezembroCpuServidor55(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor55", function (req, res) {
    analiseController.mensalJaneiroRamServidor55(req, res);
});

router.get("/mensalFevereiroRamServidor55", function (req, res) {
    analiseController.mensalFevereiroRamServidor55(req, res);
});

router.get("/mensalMarcoRamServidor55", function (req, res) {
    analiseController.mensalMarcoRamServidor55(req, res);
});

router.get("/mensalAbrilRamServidor55", function (req, res) {
    analiseController.mensalAbrilRamServidor55(req, res);
});

router.get("/mensalMaioRamServidor55", function (req, res) {
    analiseController.mensalMaioRamServidor55(req, res);
});

router.get("/mensalJunhoRamServidor55", function (req, res) {
    analiseController.mensalJunhoRamServidor55(req, res);
});

router.get("/mensalJulhoRamServidor55", function (req, res) {
    analiseController.mensalJulhoRamServidor55(req, res);
});

router.get("/mensalAgostoRamServidor55", function (req, res) {
    analiseController.mensalAgostoRamServidor55(req, res);
});

router.get("/mensalSetembroRamServidor55", function (req, res) {
    analiseController.mensalSetembroRamServidor55(req, res);
});

router.get("/mensalOutubroRamServidor55", function (req, res) {
    analiseController.mensalOutubroRamServidor55(req, res);
});

router.get("/mensalNovembroRamServidor55", function (req, res) {
    analiseController.mensalNovembroRamServidor55(req, res);
});

router.get("/mensalDezembroRamServidor55", function (req, res) {
    analiseController.mensalDezembroRamServidor55(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor55", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor55(req, res);
});

router.get("/mensalFevereiroDiscoServidor55", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor55(req, res);
});

router.get("/mensalMarcoDiscoServidor55", function (req, res) {
    analiseController.mensalMarcoDiscoServidor55(req, res);
});

router.get("/mensalAbrilDiscoServidor55", function (req, res) {
    analiseController.mensalAbrilDiscoServidor55(req, res);
});

router.get("/mensalMaioDiscoServidor55", function (req, res) {
    analiseController.mensalMaioDiscoServidor55(req, res);
});

router.get("/mensalJunhoDiscoServidor55", function (req, res) {
    analiseController.mensalJunhoDiscoServidor55(req, res);
});

router.get("/mensalJulhoDiscoServidor55", function (req, res) {
    analiseController.mensalJulhoDiscoServidor55(req, res);
});

router.get("/mensalAgostoDiscoServidor55", function (req, res) {
    analiseController.mensalAgostoDiscoServidor55(req, res);
});

router.get("/mensalSetembroDiscoServidor55", function (req, res) {
    analiseController.mensalSetembroDiscoServidor55(req, res);
});

router.get("/mensalOutubroDiscoServidor55", function (req, res) {
    analiseController.mensalOutubroDiscoServidor55(req, res);
});

router.get("/mensalNovembroDiscoServidor55", function (req, res) {
    analiseController.mensalNovembroDiscoServidor55(req, res);
});

router.get("/mensalDezembroDiscoServidor55", function (req, res) {
    analiseController.mensalDezembroDiscoServidor55(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor55", function (req, res) {
    analiseController.limiteJaneiroCpuServidor55(req, res);
});

router.get("/limiteFevereiroCpuServidor55", function (req, res) {
    analiseController.limiteFevereiroCpuServidor55(req, res);
});

router.get("/limiteMarcoCpuServidor55", function (req, res) {
    analiseController.limiteMarcoCpuServidor55(req, res);
});

router.get("/limiteAbrilCpuServidor55", function (req, res) {
    analiseController.limiteAbrilCpuServidor55(req, res);
});

router.get("/limiteMaioCpuServidor55", function (req, res) {
    analiseController.limiteMaioCpuServidor55(req, res);
});

router.get("/limiteJunhoCpuServidor55", function (req, res) {
    analiseController.limiteJunhoCpuServidor55(req, res);
});

router.get("/limiteJulhoCpuServidor55", function (req, res) {
    analiseController.limiteJulhoCpuServidor55(req, res);
});

router.get("/limiteAgostoCpuServidor55", function (req, res) {
    analiseController.limiteAgostoCpuServidor55(req, res);
});

router.get("/limiteSetembroCpuServidor55", function (req, res) {
    analiseController.limiteSetembroCpuServidor55(req, res);
});

router.get("/limiteOutubroCpuServidor55", function (req, res) {
    analiseController.limiteOutubroCpuServidor55(req, res);
});

router.get("/limiteNovembroCpuServidor55", function (req, res) {
    analiseController.limiteNovembroCpuServidor55(req, res);
});

router.get("/limiteDezembroCpuServidor55", function (req, res) {
    analiseController.limiteDezembroCpuServidor55(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor55", function (req, res) {
    analiseController.limiteJaneiroRamServidor55(req, res);
});

router.get("/limiteFevereiroRamServidor55", function (req, res) {
    analiseController.limiteFevereiroRamServidor55(req, res);
});

router.get("/limiteMarcoRamServidor55", function (req, res) {
    analiseController.limiteMarcoRamServidor55(req, res);
});

router.get("/limiteAbrilRamServidor55", function (req, res) {
    analiseController.limiteAbrilRamServidor55(req, res);
});

router.get("/limiteMaioRamServidor55", function (req, res) {
    analiseController.limiteMaioRamServidor55(req, res);
});

router.get("/limiteJunhoRamServidor55", function (req, res) {
    analiseController.limiteJunhoRamServidor55(req, res);
});

router.get("/limiteJulhoRamServidor55", function (req, res) {
    analiseController.limiteJulhoRamServidor55(req, res);
});

router.get("/limiteAgostoRamServidor55", function (req, res) {
    analiseController.limiteAgostoRamServidor55(req, res);
});

router.get("/limiteSetembroRamServidor55", function (req, res) {
    analiseController.limiteSetembroRamServidor55(req, res);
});

router.get("/limiteOutubroRamServidor55", function (req, res) {
    analiseController.limiteOutubroRamServidor55(req, res);
});

router.get("/limiteNovembroRamServidor55", function (req, res) {
    analiseController.limiteNovembroRamServidor55(req, res);
});

router.get("/limiteDezembroRamServidor55", function (req, res) {
    analiseController.limiteDezembroRamServidor55(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor55", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor55(req, res);
});

router.get("/limiteFevereiroDiscoServidor55", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor55(req, res);
});

router.get("/limiteMarcoDiscoServidor55", function (req, res) {
    analiseController.limiteMarcoDiscoServidor55(req, res);
});

router.get("/limiteAbrilDiscoServidor55", function (req, res) {
    analiseController.limiteAbrilDiscoServidor55(req, res);
});

router.get("/limiteMaioDiscoServidor55", function (req, res) {
    analiseController.limiteMaioDiscoServidor55(req, res);
});

router.get("/limiteJunhoDiscoServidor55", function (req, res) {
    analiseController.limiteJunhoDiscoServidor55(req, res);
});

router.get("/limiteJulhoDiscoServidor55", function (req, res) {
    analiseController.limiteJulhoDiscoServidor55(req, res);
});

router.get("/limiteAgostoDiscoServidor55", function (req, res) {
    analiseController.limiteAgostoDiscoServidor55(req, res);
});

router.get("/limiteSetembroDiscoServidor55", function (req, res) {
    analiseController.limiteSetembroDiscoServidor55(req, res);
});

router.get("/limiteOutubroDiscoServidor55", function (req, res) {
    analiseController.limiteOutubroDiscoServidor55(req, res);
});

router.get("/limiteNovembroDiscoServidor55", function (req, res) {
    analiseController.limiteNovembroDiscoServidor55(req, res);
});

router.get("/limiteDezembroDiscoServidor55", function (req, res) {
    analiseController.limiteDezembroDiscoServidor55(req, res);
});

router.get("/mensalJaneiroCpuServidor56", function (req, res) {
    analiseController.mensalJaneiroCpuServidor56(req, res);
});

router.get("/mensalFevereiroCpuServidor56", function (req, res) {
    analiseController.mensalFevereiroCpuServidor56(req, res);
});

router.get("/mensalMarcoCpuServidor56", function (req, res) {
    analiseController.mensalMarcoCpuServidor56(req, res);
});

router.get("/mensalAbrilCpuServidor56", function (req, res) {
    analiseController.mensalAbrilCpuServidor56(req, res);
});

router.get("/mensalMaioCpuServidor56", function (req, res) {
    analiseController.mensalMaioCpuServidor56(req, res);
});

router.get("/mensalJunhoCpuServidor56", function (req, res) {
    analiseController.mensalJunhoCpuServidor56(req, res);
});

router.get("/mensalJulhoCpuServidor56", function (req, res) {
    analiseController.mensalJulhoCpuServidor56(req, res);
});

router.get("/mensalAgostoCpuServidor56", function (req, res) {
    analiseController.mensalAgostoCpuServidor56(req, res);
});

router.get("/mensalSetembroCpuServidor56", function (req, res) {
    analiseController.mensalSetembroCpuServidor56(req, res);
});

router.get("/mensalOutubroCpuServidor56", function (req, res) {
    analiseController.mensalOutubroCpuServidor56(req, res);
});

router.get("/mensalNovembroCpuServidor56", function (req, res) {
    analiseController.mensalNovembroCpuServidor56(req, res);
});

router.get("/mensalDezembroCpuServidor56", function (req, res) {
    analiseController.mensalDezembroCpuServidor56(req, res);
});

// -----------------------------------------------------------------

router.get("/mensalJaneiroRamServidor56", function (req, res) {
    analiseController.mensalJaneiroRamServidor56(req, res);
});

router.get("/mensalFevereiroRamServidor56", function (req, res) {
    analiseController.mensalFevereiroRamServidor56(req, res);
});

router.get("/mensalMarcoRamServidor56", function (req, res) {
    analiseController.mensalMarcoRamServidor56(req, res);
});

router.get("/mensalAbrilRamServidor56", function (req, res) {
    analiseController.mensalAbrilRamServidor56(req, res);
});

router.get("/mensalMaioRamServidor56", function (req, res) {
    analiseController.mensalMaioRamServidor56(req, res);
});

router.get("/mensalJunhoRamServidor56", function (req, res) {
    analiseController.mensalJunhoRamServidor56(req, res);
});

router.get("/mensalJulhoRamServidor56", function (req, res) {
    analiseController.mensalJulhoRamServidor56(req, res);
});

router.get("/mensalAgostoRamServidor56", function (req, res) {
    analiseController.mensalAgostoRamServidor56(req, res);
});

router.get("/mensalSetembroRamServidor56", function (req, res) {
    analiseController.mensalSetembroRamServidor56(req, res);
});

router.get("/mensalOutubroRamServidor56", function (req, res) {
    analiseController.mensalOutubroRamServidor56(req, res);
});

router.get("/mensalNovembroRamServidor56", function (req, res) {
    analiseController.mensalNovembroRamServidor56(req, res);
});

router.get("/mensalDezembroRamServidor56", function (req, res) {
    analiseController.mensalDezembroRamServidor56(req, res);
});

// ------------------------------------------------------------------------------

router.get("/mensalJaneiroDiscoServidor56", function (req, res) {
    analiseController.mensalJaneiroDiscoServidor56(req, res);
});

router.get("/mensalFevereiroDiscoServidor56", function (req, res) {
    analiseController.mensalFevereiroDiscoServidor56(req, res);
});

router.get("/mensalMarcoDiscoServidor56", function (req, res) {
    analiseController.mensalMarcoDiscoServidor56(req, res);
});

router.get("/mensalAbrilDiscoServidor56", function (req, res) {
    analiseController.mensalAbrilDiscoServidor56(req, res);
});

router.get("/mensalMaioDiscoServidor56", function (req, res) {
    analiseController.mensalMaioDiscoServidor56(req, res);
});

router.get("/mensalJunhoDiscoServidor56", function (req, res) {
    analiseController.mensalJunhoDiscoServidor56(req, res);
});

router.get("/mensalJulhoDiscoServidor56", function (req, res) {
    analiseController.mensalJulhoDiscoServidor56(req, res);
});

router.get("/mensalAgostoDiscoServidor56", function (req, res) {
    analiseController.mensalAgostoDiscoServidor56(req, res);
});

router.get("/mensalSetembroDiscoServidor56", function (req, res) {
    analiseController.mensalSetembroDiscoServidor56(req, res);
});

router.get("/mensalOutubroDiscoServidor56", function (req, res) {
    analiseController.mensalOutubroDiscoServidor56(req, res);
});

router.get("/mensalNovembroDiscoServidor56", function (req, res) {
    analiseController.mensalNovembroDiscoServidor56(req, res);
});

router.get("/mensalDezembroDiscoServidor56", function (req, res) {
    analiseController.mensalDezembroDiscoServidor56(req, res);
});

// -----------------------------------------------------------------------------

router.get("/limiteJaneiroCpuServidor56", function (req, res) {
    analiseController.limiteJaneiroCpuServidor56(req, res);
});

router.get("/limiteFevereiroCpuServidor56", function (req, res) {
    analiseController.limiteFevereiroCpuServidor56(req, res);
});

router.get("/limiteMarcoCpuServidor56", function (req, res) {
    analiseController.limiteMarcoCpuServidor56(req, res);
});

router.get("/limiteAbrilCpuServidor56", function (req, res) {
    analiseController.limiteAbrilCpuServidor56(req, res);
});

router.get("/limiteMaioCpuServidor56", function (req, res) {
    analiseController.limiteMaioCpuServidor56(req, res);
});

router.get("/limiteJunhoCpuServidor56", function (req, res) {
    analiseController.limiteJunhoCpuServidor56(req, res);
});

router.get("/limiteJulhoCpuServidor56", function (req, res) {
    analiseController.limiteJulhoCpuServidor56(req, res);
});

router.get("/limiteAgostoCpuServidor56", function (req, res) {
    analiseController.limiteAgostoCpuServidor56(req, res);
});

router.get("/limiteSetembroCpuServidor56", function (req, res) {
    analiseController.limiteSetembroCpuServidor56(req, res);
});

router.get("/limiteOutubroCpuServidor56", function (req, res) {
    analiseController.limiteOutubroCpuServidor56(req, res);
});

router.get("/limiteNovembroCpuServidor56", function (req, res) {
    analiseController.limiteNovembroCpuServidor56(req, res);
});

router.get("/limiteDezembroCpuServidor56", function (req, res) {
    analiseController.limiteDezembroCpuServidor56(req, res);
});

// ---------------------------------------------------------------

router.get("/limiteJaneiroRamServidor56", function (req, res) {
    analiseController.limiteJaneiroRamServidor56(req, res);
});

router.get("/limiteFevereiroRamServidor56", function (req, res) {
    analiseController.limiteFevereiroRamServidor56(req, res);
});

router.get("/limiteMarcoRamServidor56", function (req, res) {
    analiseController.limiteMarcoRamServidor56(req, res);
});

router.get("/limiteAbrilRamServidor56", function (req, res) {
    analiseController.limiteAbrilRamServidor56(req, res);
});

router.get("/limiteMaioRamServidor56", function (req, res) {
    analiseController.limiteMaioRamServidor56(req, res);
});

router.get("/limiteJunhoRamServidor56", function (req, res) {
    analiseController.limiteJunhoRamServidor56(req, res);
});

router.get("/limiteJulhoRamServidor56", function (req, res) {
    analiseController.limiteJulhoRamServidor56(req, res);
});

router.get("/limiteAgostoRamServidor56", function (req, res) {
    analiseController.limiteAgostoRamServidor56(req, res);
});

router.get("/limiteSetembroRamServidor56", function (req, res) {
    analiseController.limiteSetembroRamServidor56(req, res);
});

router.get("/limiteOutubroRamServidor56", function (req, res) {
    analiseController.limiteOutubroRamServidor56(req, res);
});

router.get("/limiteNovembroRamServidor56", function (req, res) {
    analiseController.limiteNovembroRamServidor56(req, res);
});

router.get("/limiteDezembroRamServidor56", function (req, res) {
    analiseController.limiteDezembroRamServidor56(req, res);
});

//-------------------------------------------------------------------------------------

router.get("/limiteJaneiroDiscoServidor56", function (req, res) {
    analiseController.limiteJaneiroDiscoServidor56(req, res);
});

router.get("/limiteFevereiroDiscoServidor56", function (req, res) {
    analiseController.limiteFevereiroDiscoServidor56(req, res);
});

router.get("/limiteMarcoDiscoServidor56", function (req, res) {
    analiseController.limiteMarcoDiscoServidor56(req, res);
});

router.get("/limiteAbrilDiscoServidor56", function (req, res) {
    analiseController.limiteAbrilDiscoServidor56(req, res);
});

router.get("/limiteMaioDiscoServidor56", function (req, res) {
    analiseController.limiteMaioDiscoServidor56(req, res);
});

router.get("/limiteJunhoDiscoServidor56", function (req, res) {
    analiseController.limiteJunhoDiscoServidor56(req, res);
});

router.get("/limiteJulhoDiscoServidor56", function (req, res) {
    analiseController.limiteJulhoDiscoServidor56(req, res);
});

router.get("/limiteAgostoDiscoServidor56", function (req, res) {
    analiseController.limiteAgostoDiscoServidor56(req, res);
});

router.get("/limiteSetembroDiscoServidor56", function (req, res) {
    analiseController.limiteSetembroDiscoServidor56(req, res);
});

router.get("/limiteOutubroDiscoServidor56", function (req, res) {
    analiseController.limiteOutubroDiscoServidor56(req, res);
});

router.get("/limiteNovembroDiscoServidor56", function (req, res) {
    analiseController.limiteNovembroDiscoServidor56(req, res);
});

router.get("/limiteDezembroDiscoServidor56", function (req, res) {
    analiseController.limiteDezembroDiscoServidor56(req, res);
});

router.get("/ultimas/:idServidor", function (req, res) {
    analiseController.buscarUltimasMedidas(req, res);
});
router.get("/ultimas1/:idServidor1", function (req, res) {
    analiseController.buscarUltimasMedidas1(req, res);
});


module.exports = router;