var express = require("express");
var router = express.Router();

var controllerExample = require('../controllers/controllerExample');

/* router.get("/obterInformacoes/:idMapaServer", function (req, res) {
    mapaController.obterInformacoes(req, res);
});
 */
router.get("/XXXX", function (req, res) {
    // controllerExample.listarRankingGlobal(req, res);
});

router.post("/XXXXXX", function (req, res) {
    // controllerExample.editarImagemPerfil(req, res);
});

module.exports = router;

