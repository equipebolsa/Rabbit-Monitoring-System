var express = require("express");
var router = express.Router();

var parametroController = require("../controllers/parametroController");

router.get("/listar/:idEmpresa", function (req, res) {
    parametroController.listar(req, res);
})

module.exports = router;