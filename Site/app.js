process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3333;

var app = express();

var indexRouter = require("./src/routes/index");
var userRouter = require("./src/routes/user");
var mapaRouter = require("./src/routes/mapa");
var scoreRouter = require("./src/routes/score");
var jogador = require("./src/routes/jogador");

  var bodyParser = require('body-parser');

  app.use(bodyParser.json({limit: '5000000mb'}));
  app.use(bodyParser.urlencoded({limit: '5000000mb', extended: false}));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use(cors());

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/mapa", mapaRouter);
app.use("/score", scoreRouter);
app.use("/jogador", jogador);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});


