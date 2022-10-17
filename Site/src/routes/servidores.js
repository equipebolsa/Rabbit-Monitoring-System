var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");


router.post("/cadastrar", function (req, res) {
    servidorController.cadastrar(req, res);
});

router.get("/listar/:idEmpresa", function (req, res) {
    servidorController.listar(req, res);
});


module.exports = router;