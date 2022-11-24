var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");


router.post("/cadastrar", function (req, res) {
    servidorController.cadastrar(req, res);
});

router.get("/listar/:idEmpresa", function (req, res) {
    servidorController.listar(req, res);
});

router.get("/totalServidor/:idEmpresa", function (req, res) {
    servidorController.totalServidor(req, res);
});
router.get("/menorSetor/:idEmpresa", function (req, res) {
    servidorController.menorSetor(req, res);
});
router.get("/maiorSetor/:idEmpresa", function (req, res) {
    servidorController.maiorSetor(req, res);
});



module.exports = router;