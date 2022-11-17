function plotarGraficoCPU(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Porcetagem da CPU (%)',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '')
        labels1.push(horario);
        dados1.datasets[0].data.push(registro.valorLeitura);
    }
    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("cpuChart").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoCPU(dados1, myChart, id), 2000);
}
function plotarGraficoRAM(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Memória Disponivel (%)',
            data: [],
            borderColor: 'rgb(19, 237, 114)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '')
        labels1.push(horario);
        dados1.datasets[0].data.push(registro.valorLeitura);
    }
    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("ram").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoRAM(dados1, myChart, id), 2000);
}

function plotarGraficoDISCO(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Memória Usada (GB)',
            data: [],
            borderColor: 'rgb(237, 154, 7)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '')
        labels1.push(horario);
        dados1.datasets[0].data.push(registro.valorLeitura);
    }
    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("hdd").getContext("2d");
    let myChart = new Chart(ctx, config);
}


function atualizarGraficoCPU(dados, myChart, id) {

    fetch(`/leituras/tempo-realCPU/${id}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {

                if (novoRegistro[0].horarioLeitura == dados.labels[dados.labels.length - 1]) {
                } else {
                    var registro = novoRegistro[0];
                    var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '');
                    dados.labels.shift();
                    dados.labels.push(horario);

                    dados.datasets[0].data.shift();
                    dados.datasets[0].data.push(novoRegistro[0].valorLeitura);

                    myChart.update();
                }
                proximaAtualizacao = setTimeout(() => atualizarGraficoCPU(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarGraficoCPU(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}



function atualizarGraficoRAM(dados, myChart, id) {

    fetch(`/leituras/tempo-realRAM/${id}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {

                if (novoRegistro[0].horarioLeitura == dados.labels[dados.labels.length - 1]) {
                } else {
                    var registro = novoRegistro[0];
                    var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '');
                    dados.labels.shift();
                    dados.labels.push(horario);

                    dados.datasets[0].data.shift();
                    dados.datasets[0].data.push(novoRegistro[0].valorLeitura);

                    myChart.update();
                }
                proximaAtualizacao = setTimeout(() => atualizarGraficoRAM(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarGraficoRAM(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}



