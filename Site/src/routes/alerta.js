var express = require("express");
var router = express.Router();

var alertaController = require("../controllers/alertaController");

router.get("/totalAlertas/:idEmpresa", function (req, res) {
    alertaController.listar(req, res);
})

module.exports = router;