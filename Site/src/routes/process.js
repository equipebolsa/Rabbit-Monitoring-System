var express = require("express");

var router = express.Router();

var processController = require("../controllers/processController");

//Recebendo os dados do html e direcionando para a função cadastrar de processController.js
router.post("/listar", function (req, res) {
    processController.listar(req, res);
})


module.exports = router;