var express = require("express");
var router = express.Router();

var dadosRedeController = require("../controllers/dadosRedeController");

router.get("/listarBytesRecebidos/:idServidor", function (req, res) {
 dadosRedeController.listarBytesRecebidos(req, res);
})
router.get("/tempoRealBytesRecv/:idServidor", function (req, res) {
    dadosRedeController.tempoRealBytesRecv(req, res);
   })

module.exports = router;


