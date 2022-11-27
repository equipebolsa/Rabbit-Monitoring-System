var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");


router.post("/cadastrar", function (req, res) {
    servidorController.cadastrar(req, res);
});
router.post("/atualizar", function (req, res) {
    servidorController.atualizar(req, res);
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
router.get("/listarMaquinas/:idEmpresa", function (req, res) {
    servidorController.listarMaquinas(req, res);
});
router.post("/listarMetricas", function (req, res) {
    servidorController.listarMetricas(req, res);
});
router.post("/cadastrarComponente", function (req, res) {
    servidorController.cadastrarComponente(req, res);
});
router.post("/listarParametros", function (req, res) {
    servidorController.listarParametros(req, res);
});


module.exports = router;