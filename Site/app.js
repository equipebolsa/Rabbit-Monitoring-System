//process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");

var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var empresaRouter = require("./src/routes/empresa");
var leituraRouter = require("./src/routes/leituras");
var setorRouter = require("./src/routes/setores");
var cadastarRouter = require("./src/routes/servidores");
var alertaRouter = require("./src/routes/alerta");
var processRouter = require("./src/routes/process");
var dadosRedeRouter = require("./src/routes/dadosRede");
var parametroRouter = require("./src/routes/parametro");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/empresa", empresaRouter);
app.use("/leituras", leituraRouter );
app.use("/setores", setorRouter );
app.use("/servidores", cadastarRouter );
app.use("/alerta", alertaRouter );
app.use("/process", processRouter );
app.use("/dadosRede", dadosRedeRouter );
app.use("/parametro",parametroRouter)

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
