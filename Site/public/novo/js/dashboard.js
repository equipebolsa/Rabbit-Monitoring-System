servers = []
listStyle = 1
contFiltro = 1
document.getElementById("filterSearch").addEventListener("keypress", function (e) {
    if (e.key == 'Enter') {
        filtro = filterSearch.value
        filterSearch.value = ''
        filters.innerHTML = `<div class="filterSelected">${filtro}<img onclick="cancelFilter(1)" class="filterCancel" src="../../assets/img/x.svg" alt=""></div>`
        
    }
})
document.getElementById("filterSearch2").addEventListener("keypress", function (e) {
    if (e.key == 'Enter') {
        filtro = filterSearch2.value
        filterSearch2.value = ''
        filters2.innerHTML = `<div class="filterSelected">${filtro}<img onclick="cancelFilter(2)" class="filterCancel" src="../../assets/img/x.svg" alt=""></div>`
    }
})
function cancelFilter(x) {
    if (x == 1) {
        filters.innerHTML = ''
    } else if (x == 2) {
        filters2.innerHTML = ''
    }
}
function mudarFiltro() {
    contFiltro++
    if (contFiltro == 1) {
        sumirFiltros()
        filtroNumerico.style.display = 'block'
        serverCont.innerHTML = ''
        serverList.innerHTML = ''
        servers.sort(mudarOrdem("IdServer"))
            montarLista()
    } else if (contFiltro == 2) {
        sumirFiltros()
        filtroAlfa.style.display = 'block'
        serverCont.innerHTML = ''
        serverList.innerHTML = ''
        servers.sort(mudarOrdem("Setor"))
            montarLista()
    } else if (contFiltro == 3) {
        sumirFiltros()
        filtroGrau.style.display = 'block'
        serverCont.innerHTML = ''
        serverList.innerHTML = ''
        servers.sort(mudarOrdem("cpuTemp"))
            montarLista()
            contFiltro = 0
    }
}
function mudarOrdem(prop) {
    return function(a,b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}
function sumirFiltros() {
    filtroNumerico.style.display = 'none'
    filtroAlfa.style.display = 'none'
    filtroGrau.style.display = 'none'
}
function gerarServers() {
    setores = ["Alpha", "Beta", "Charlie", "Delta"]
    z = Math.floor(Math.random() * (250 - 50)) + 50
    for (let x = 0; x < z; x++) {
        var length = 12,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            hexkey = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            hexkey += charset.charAt(Math.floor(Math.random() * n));
        }
        cpuTemp = Math.floor(Math.random() * (100 - 40)) + 40
        armazem = Math.floor(Math.random() * (1000 - 200)) + 200
        setorR = Math.floor(Math.random() * 4)
        servers.push({
            "IdServer": x,
            "Setor": setores[setorR],
            "Serial": hexkey,
            "cpuTemp": cpuTemp,
            "Armazenamento": armazem
        })
    }
    montarLista(1)
}
function mostrarLista(x) {
    if (x == 1) {
        serverCont.style.display = 'grid'
        serverList.style.display = 'none'
    } else if (x == 2) {
        serverCont.style.display = 'none'
        serverList.style.display = 'block'
    }
}
function montarLista() {
    for (let x = 0; x < servers.length; x++) {
        serverCont.innerHTML += `<div id="idServer${x}" class="server"></div>`
        serverList.innerHTML += `<div class="serverLista">
        <div id="statusServer${x}" class="statusServer position-absolute"></div>
        <img class="serverSvg" src="../../assets/img/hdd-stack-fill.svg" alt="">
        <span class="setorLista position-absolute"><b>${servers[x].Setor}</b></span>
        <span class="hexLista position-absolute">${servers[x].Serial}</span>
        <span class="qtdArmazem position-absolute">${servers[x].Armazenamento}GB de 1tb</span>
        <div class="armazemProgress position-absolute"></div>
        <div id="serverArma${x}" class="armazemHas position-absolute"></div>
        <span id="cpuTemperatura${x}" class="cpuTemperatura position-absolute">${servers[x].cpuTemp}ºC</span>
    </div>`
    }
    verificarCor()
}

function verificarCor() {
    normal = '#35FFFE'
    alerta = '#F547AC'
    risco = '#7C4FE0'
    for (let x = 0; x < servers.length; x++) {
        if (servers[x].cpuTemp > 95 || servers[x].Armazenamento > 950) {
            document.getElementById(`idServer${x}`).style.backgroundColor = risco
        } else if (servers[x].cpuTemp > 85 || servers[x].Armazenamento > 800) {
            document.getElementById(`idServer${x}`).style.backgroundColor = alerta
        } else {
            document.getElementById(`idServer${x}`).style.backgroundColor = normal
        }
    }
    for (let x = 0; x < servers.length; x++) {
        if (servers[x].cpuTemp >= 95 || servers[x].Armazenamento > 950) {
            document.getElementById(`statusServer${x}`).style.backgroundColor = "#FF0000"
        } else if (servers[x].cpuTemp >= 85 || servers[x].Armazenamento > 800) {
            document.getElementById(`statusServer${x}`).style.backgroundColor = "#FFFF00"
        } else if (servers[x].cpuTemp < 85 && servers[x].Armazenamento < 800){ 
            document.getElementById(`statusServer${x}`).style.backgroundColor = "#00FF00"
        }
        if (servers[x].cpuTemp >= 95) {
            document.getElementById(`cpuTemperatura${x}`).style.color = "#FF0000"
        } else if (servers[x].cpuTemp >= 85) {
            document.getElementById(`cpuTemperatura${x}`).style.color = "#FFFF00"
        }
        if (servers[x].Armazenamento > 950) {
            document.getElementById(`serverArma${x}`).style.backgroundColor = "#FF0000"
        } else if (servers[x].Armazenamento > 800) {
            document.getElementById(`serverArma${x}`).style.backgroundColor = "#FFFF00"
        } else if (servers[x].Armazenamento < 800) {
            document.getElementById(`serverArma${x}`).style.backgroundColor = "#00FF00"
        }
        document.getElementById(`serverArma${x}`).style.width = `${servers[x].Armazenamento / 50}vw`
    }
}