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

function goToLoginOrSignUp(type) {
    if (type == 'login') {
        window.location.href = "./login.html"
    } else {
        window.location.href = "./cadastro.html"
    }
}

function startBackgroundVideo() {
    document.getElementsByClassName('background-gif')[0].play;
}

function setPlayerCountry(elementFlag, showName = false, countryName = 'BR', countryFlags) {
    let countryFlagUnicode = (countryFlags.filter(country => { return country.code == countryName }))[0].unicode;
    countryFlagUnicode = countryFlagUnicode.split(' ');

    countryFlagUnicode.forEach((unicode) => {
        let convert = twemoji.convert.fromCodePoint(unicode.substring(2));
        elementFlag.textContent += convert;
    })
    twemoji.parse(elementFlag);
    if (showName != false) {
        let spanElement = document.createElement('span');
        spanElement.innerHTML = showName;
        spanElement.classList.add('contry-name');
        elementFlag.appendChild(spanElement);
    }


}

async function verifyAuth() {
    if (sessionStorage.TOKENJOGADOR != undefined) {
        let response = await fetch(`/user/verificarToken`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "tokenJogadorServer": sessionStorage.TOKENJOGADOR,
                "idJogadorServer": sessionStorage.IDJOGADOR
            })
        })
        if (response.ok) {
            let json = await response.json();

            

            let player = json;
            document.getElementsByClassName('user-container')[0].innerHTML = `
                <i class="fa-solid fa-user" id="user"></i>
                <div class="user-info">
                    <span id="username">${player.infoJogador.nome}</span>
                    <span id="global">Global: #${player.rankGlobal}</span>
                    <span id="nacional">Nacional: #${player.rankNacional}</span>
                </div>
                <i class="fa-solid fa-right-to-bracket" id="logOut" onclick="logOff()"></i>`;
        } else {
            document.getElementsByClassName('nav-bar-item')[4].style.display = 'flex';
            document.getElementsByClassName('nav-bar-item')[5].style.display = 'flex';
        }

    } else {
        document.getElementsByClassName('nav-bar-item')[4].style.display = 'flex';
        document.getElementsByClassName('nav-bar-item')[5].style.display = 'flex';
    }
}

function logOff() {
    sessionStorage.removeItem('TOKENJOGADOR');
    sessionStorage.removeItem('IDJOGADOR');

    window.location = './index.html';
}
