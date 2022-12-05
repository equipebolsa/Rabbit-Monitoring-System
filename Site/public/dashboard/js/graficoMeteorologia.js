function plotarGraficoTemperatura(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Tempo real',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
            var registro = resposta[i];
            var horario = registro.horaClima.replace(/T/, ' ').replace(/\..+/, '')
            labels1.push(horario);
            dados1.datasets[0].data.push(registro.temperatura);
        
    }
    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("tempAtual").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoTemperatura(dados1, myChart, id), 900000);

}
function atualizarGraficoTemperatura(dados, myChart, id) {

    fetch(`/leituras/leiturasTemperatura/${id}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {

                if (novoRegistro[0].horaClima == dados.labels[dados.labels.length - 1]) {
                } else {
                    var registro = novoRegistro[0];
                    var horario = registro.horaClima.replace(/T/, ' ').replace(/\..+/, '');
                    dados.labels.shift();
                    dados.labels.push(horario);

                    dados.datasets[0].data.shift();
                    dados.datasets[0].data.push(novoRegistro[0].valorLeitura);

                    myChart.update();
                }
                proximaAtualizacao = setTimeout(() => atualizarGraficoTemperatura(dados, myChart, id), 900000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarGraficoTemperatura(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}
