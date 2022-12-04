function pegarDadosServidor1() {
    servidor = 1 ;
fetch('/analise/mensalJaneiroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalJaneiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
        }
    )}
})
fetch('/analise/mensalFevereiroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalFevereiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
    }
)}
})
fetch('/analise/mensalMarcoCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalMarco.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalAbrilCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalAbril.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalMaioCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalMaio.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalJunhoCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalJunho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalJulhoCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalJulho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalAgostoCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalAgosto.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalSetembroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalSetembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalOutubroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalOutubro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalNovembroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalNovembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalDezembroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            cpuMensalDezembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalJaneiroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalJaneiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
        }
    )}
})
fetch('/analise/mensalFevereiroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalFevereiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
    }
)}
})
fetch('/analise/mensalMarcoRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalMarco.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalAbrilRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalAbril.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalMaioRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalMaio.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalJunhoRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalJunho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalJulhoRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalJulho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalAgostoRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalAgosto.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalSetembroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalSetembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalOutubroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalOutubro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalNovembroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalNovembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalDezembroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            RamMensalDezembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalJaneiroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalJaneiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
        }
    )}
})
fetch('/analise/mensalFevereiroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalFevereiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
    }
)}
})
fetch('/analise/mensalMarcoDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalMarco.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalAbrilDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalAbril.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalMaioDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalMaio.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalJunhoDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalJunho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalJulhoDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalJulho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalAgostoDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalAgosto.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalSetembroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalSetembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalOutubroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalOutubro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalNovembroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalNovembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/mensalDezembroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
            DiscoMensalDezembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteJaneiroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuJaneiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
        }
    )}
})
fetch('/analise/limiteFevereiroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuFevereiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
    }
)}
})
fetch('/analise/limiteMarcoCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuMarco.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteAbrilCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuAbril.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteMaioCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuMaio.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteJunhoCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuJunho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteJulhoCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuJulho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteAgostoCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuAgosto.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteSetembroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuSetembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteOutubroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuOutubro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteNovembroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuNovembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteDezembroCpuServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            cpuDezembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteJaneiroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamJaneiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
        }
    )}
})
fetch('/analise/limiteFevereiroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamFevereiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
    }
)}
})
fetch('/analise/limiteMarcoRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamMarco.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteAbrilRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamAbril.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteMaioRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamMaio.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteJunhoRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamJunho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteJulhoRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamJulho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteAgostoRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamAgosto.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteSetembroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamSetembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteOutubroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamOutubro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteNovembroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamNovembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteDezembroRamServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            RamDezembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteJaneiroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoJaneiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
        }
    )}
})
fetch('/analise/limiteFevereiroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoFevereiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
    }
)}
})
fetch('/analise/limiteMarcoDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoMarco.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteAbrilDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoAbril.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteMaioDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoMaio.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteJunhoDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoJunho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteJulhoDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoJulho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteAgostoDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoAgosto.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteSetembroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoSetembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteOutubroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoOutubro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteNovembroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoNovembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
fetch('/analise/limiteDezembroDiscoServidor1').then(resposta => {
    if (resposta.ok) {
        resposta.json().then(resposta => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
            DiscoDezembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
            console.log(resposta[0][0])
}
)}
})
}

//------------------------------------------------------------------------------------------------------------------------------------------
function pegarDadosServidor2() {
    servidor = 2 ;
    fetch('/analise/mensalJaneiroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalJaneiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
            }
        )}
    })
    fetch('/analise/mensalFevereiroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalFevereiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
        }
    )}
    })
    fetch('/analise/mensalMarcoCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalMarco.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalAbrilCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalAbril.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalMaioCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalMaio.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalJunhoCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalJunho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalJulhoCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalJulho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalAgostoCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalAgosto.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalSetembroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalSetembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalOutubroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalOutubro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalNovembroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalNovembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalDezembroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                cpuMensalDezembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalJaneiroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalJaneiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
            }
        )}
    })
    fetch('/analise/mensalFevereiroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalFevereiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
        }
    )}
    })
    fetch('/analise/mensalMarcoRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalMarco.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalAbrilRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalAbril.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalMaioRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalMaio.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalJunhoRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalJunho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalJulhoRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalJulho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalAgostoRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalAgosto.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalSetembroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalSetembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalOutubroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalOutubro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalNovembroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalNovembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalDezembroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                RamMensalDezembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalJaneiroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalJaneiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
            }
        )}
    })
    fetch('/analise/mensalFevereiroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalFevereiro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
        }
    )}
    })
    fetch('/analise/mensalMarcoDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalMarco.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalAbrilDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalAbril.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalMaioDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalMaio.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalJunhoDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalJunho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalJulhoDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalJulho.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalAgostoDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalAgosto.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalSetembroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalSetembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalOutubroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalOutubro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalNovembroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalNovembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/mensalDezembroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`);
                DiscoMensalDezembro.innerHTML = `${JSON.stringify(resposta)[6]}${JSON.stringify(resposta)[7]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteJaneiroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuJaneiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
            }
        )}
    })
    fetch('/analise/limiteFevereiroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuFevereiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
        }
    )}
    })
    fetch('/analise/limiteMarcoCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuMarco.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteAbrilCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuAbril.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteMaioCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuMaio.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteJunhoCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuJunho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteJulhoCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuJulho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteAgostoCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuAgosto.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteSetembroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuSetembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteOutubroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuOutubro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteNovembroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuNovembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteDezembroCpuServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                cpuDezembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteJaneiroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamJaneiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
            }
        )}
    })
    fetch('/analise/limiteFevereiroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamFevereiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
        }
    )}
    })
    fetch('/analise/limiteMarcoRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamMarco.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteAbrilRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamAbril.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteMaioRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamMaio.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteJunhoRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamJunho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteJulhoRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamJulho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteAgostoRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamAgosto.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteSetembroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamSetembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteOutubroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamOutubro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteNovembroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamNovembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteDezembroRamServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                RamDezembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteJaneiroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoJaneiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
            }
        )}
    })
    fetch('/analise/limiteFevereiroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoFevereiro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
        }
    )}
    })
    fetch('/analise/limiteMarcoDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoMarco.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteAbrilDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoAbril.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteMaioDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoMaio.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteJunhoDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoJunho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteJulhoDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoJulho.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteAgostoDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoAgosto.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteSetembroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoSetembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteOutubroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoOutubro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteNovembroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoNovembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    fetch('/analise/limiteDezembroDiscoServidor2').then(resposta => {
        if (resposta.ok) {
            resposta.json().then(resposta => {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`);
                DiscoDezembro.innerHTML = `${JSON.stringify(resposta)[5]}${JSON.stringify(resposta)[6]}`
                console.log(resposta[0][0])
    }
    )}
    })
    
}
function pegarDadosServidor3() {
    servidor = 3 ;
}
function pegarDadosServidor4() {
    servidor = 4 ;
}
function pegarDadosServidor5() {
    servidor = 5 ;
}
function pegarDadosServidor6() {
    servidor = 6 ;
}
function pegarDadosServidor7() {
    servidor = 7 ;
}
function pegarDadosServidor8() {
    servidor = 8 ;
}
function pegarDadosServidor9() {
    servidor = 9 ;
}
function pegarDadosServidor10() {
    servidor = 10 ;
}
function pegarDadosServidor11() {
    servidor = 11 ;
}
function pegarDadosServidor12() {
    servidor = 12 ;
}
function pegarDadosServidor13() {
    servidor = 13 ;
}
function pegarDadosServidor14() {
    servidor = 14 ;
}
function pegarDadosServidor15() {
    servidor = 15 ;
}
function pegarDadosServidor16() {
    servidor = 16 ;
}
function pegarDadosServidor17() {
    servidor = 17 ;
}
function pegarDadosServidor18() {
    servidor = 18 ;
}
function pegarDadosServidor19() {
    servidor = 19 ;
}
function pegarDadosServidor20() {
    servidor = 20 ;
}
function pegarDadosServidor21() {
    servidor = 21 ;
}
function pegarDadosServidor22() {
    servidor = 22 ;
}
function pegarDadosServidor23() {
    servidor = 23 ;
}
function pegarDadosServidor24() {
    servidor = 24 ;
}
function pegarDadosServidor25() {
    servidor = 25 ;
}
function pegarDadosServidor26() {
    servidor = 26 ;
}
function pegarDadosServidor27() {
    servidor = 27 ;
}
function pegarDadosServidor28() {
    servidor = 28 ;
}
function pegarDadosServidor29() {
    servidor = 29 ;
}
function pegarDadosServidor30() {
    servidor = 30 ;
}
function pegarDadosServidor31() {
    servidor = 31 ;
}
function pegarDadosServidor32() {
    servidor = 32 ;
}
function pegarDadosServidor33() {
    servidor = 33 ;
}
function pegarDadosServidor34() {
    servidor = 34 ;
}
function pegarDadosServidor35() {
    servidor = 35 ;
}
function pegarDadosServidor36() {
    servidor = 36 ;
}
function pegarDadosServidor37() {
    servidor = 37 ;
}
function pegarDadosServidor38() {
    servidor = 38 ;
}
function pegarDadosServidor39() {
    servidor = 39 ;
}
function pegarDadosServidor40() {
    servidor = 40 ;
}
function pegarDadosServidor41() {
    servidor = 41 ;
}
function pegarDadosServidor42() {
    servidor = 42 ;
}
function pegarDadosServidor43() {
    servidor = 43 ;
}
function pegarDadosServidor44() {
    servidor = 44 ;
}
function pegarDadosServidor45() {
    servidor = 45 ;
}
function pegarDadosServidor46() {
    servidor = 46 ;
}
function pegarDadosServidor47() {
    servidor = 47 ;
}
function pegarDadosServidor48() {
    servidor = 48 ;
}
function pegarDadosServidor49() {
    servidor = 49 ;
}
function pegarDadosServidor50() {
    servidor = 50 ;
}
function pegarDadosServidor50() {
    servidor = 50 ;
}
function pegarDadosServidor51() {
    servidor = 51 ;
}
function pegarDadosServidor52() {
    servidor = 52 ;
}
function pegarDadosServidor53() {
    servidor = 53 ;
}
function pegarDadosServidor54() {
    servidor = 54 ;
}
function pegarDadosServidor55() {
    servidor = 55 ;
}
function pegarDadosServidor56() {
    servidor = 56 ;
}

