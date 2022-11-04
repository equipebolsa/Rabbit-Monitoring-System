
function showPassword() {
    let cadeadoElement = document.getElementById('cadeado');
    let senhaElement = document.getElementById('senha');
    if ((document.getElementsByClassName("senha")).length == 0) {
        cadeadoElement.classList.add("fa-lock");
        cadeadoElement.classList.remove("fa-unlock");
        cadeadoElement.classList.add("senha");
        senhaElement.type = "password";
    } else {
        cadeadoElement.classList.add("fa-unlock");
        cadeadoElement.classList.remove("fa-lock");
        cadeadoElement.classList.remove("senha");
        senhaElement.type = "text";
    }
}

function showRewritePassword() {
    let cadeadoReescreverElement = document.getElementById('cadeadoReescrever');
    let reescreverSenhaElement = document.getElementById('reescreverSenha');
    if ((document.getElementsByClassName("reescrever")).length == 0) {
        cadeadoReescreverElement.classList.add("fa-lock");
        cadeadoReescreverElement.classList.remove("fa-unlock");
        cadeadoReescreverElement.classList.add("reescrever");
        reescreverSenhaElement.type = "password";
    } else {
        cadeadoReescreverElement.classList.add("fa-unlock");
        cadeadoReescreverElement.classList.remove("fa-lock");
        cadeadoReescreverElement.classList.remove("reescrever");
        reescreverSenhaElement.type = "text";
    }
}


function obterDados(json){
    
    jsonToJs = JSON.parse(json);
    return jsonToJs;
}


function limpar(json){
    jsonToJs= "";
    json = "";
}
function sair() {
    limpar(sessionStorage.USUARIO);
    window.location.href = "../index.html";
}
function verificarAcesso(nivelAcesso){
    //nivel: 0 - Técnico e Gestor;
    //nivel: 1 - Apenas Gestor;
    var resultado = obterDados(sessionStorage.USUARIO);
    var tipo = resultado.tipoUsuario;
    if(tipo == "Técnico" && nivelAcesso == 0){
        try {
            document.getElementById("gestorOnly").style.display = "none";
        } catch (error) {
            
        }
        
    }
    else if(tipo == "Técnico" && nivelAcesso == 1){
        window.location.href = "error.html";
    }else if(tipo != "Gestor" && tipo != "Técnico"){
        window.location.href = "error.html";
    }
}