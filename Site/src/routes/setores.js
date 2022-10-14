var express = require("express");
var router = express.Router();

var setorController = require("../controllers/setorController.js");

router.post("/cadastrar", function (req, res) {
    setorController.cadastrar(req, res);
})

router.get("/listar/:idEmpresa", function (req, res) {
    setorController.listar(req, res);
});


module.exports = router;