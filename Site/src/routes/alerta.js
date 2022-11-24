var express = require("express");
var router = express.Router();

var alertaController = require("../controllers/alertaController");

router.post("/cadastrar/:idEmpresa", function (req, res) {
    alertaController.cadastrar(req, res);
})

module.exports = router;