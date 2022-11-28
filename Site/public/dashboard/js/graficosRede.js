function  plotarGraficoBytesRecv(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Dados Download (KB)',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '')
        labels1.push(horario);
        dados1.datasets[0].data.push(registro.bytesRecv);
    }
    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("bytesRecvChart").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarBytesRecv(dados1, myChart, id), 2000);
}


function atualizarBytesRecv(dados, myChart, id) {

    fetch(`/dadosRede/tempoRealBytesRecv/${id}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
                if (novoRegistro[0].horarioLeitura == dados.labels[dados.labels.length - 1]) {
                } else {
                    var registro = novoRegistro[0];
                    var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '');
                    dados.labels.shift();   
                    dados.labels.push(horario);

                    dados.datasets[0].data.shift();
                    dados.datasets[0].data.push(novoRegistro[0].bytesRecv);

                    myChart.update();
                }
                proximaAtualizacao = setTimeout(() => atualizarBytesRecv(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarBytesRecv(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

