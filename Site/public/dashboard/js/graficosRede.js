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

function  plotarGraficoBytesSent(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Dados Upload (KB)',
            data: [],
            borderColor: 'rgb(19, 237, 114)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '')
        labels1.push(horario);
        dados1.datasets[0].data.push(registro.bytesSent);
    }
    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("bytesSendChart").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarBytesSent(dados1, myChart, id), 2000);
}

function  plotarGraficPacoteSent(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Pacotes Enviados',
            data: [],
            borderColor: 'rgb(237, 154, 7)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '')
        labels1.push(horario);
        dados1.datasets[0].data.push(registro.packetsSent);
    }
    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("packageSendChart").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarPacketsSent(dados1, myChart, id), 2000);
}

function  plotarGraficPacoteRecv(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Pacotes Recebidos',
            data: [],
            borderColor: "#ED4537",
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '')
        labels1.push(horario);
        dados1.datasets[0].data.push(registro.packetsRecv);
    }
    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("packageRecvChart").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarPacketsRecv(dados1, myChart, id), 2000);
}


function atualizarBytesRecv(dados, myChart, id) {
    fetch(`/dadosRede/listarDadosRedeTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
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


function atualizarBytesSent(dados, myChart, id) {
    fetch(`/dadosRede/listarDadosRedeTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
                if (novoRegistro[0].horarioLeitura == dados.labels[dados.labels.length - 1]) {
                } else {
                    var registro = novoRegistro[0];
                    var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '');
                    dados.labels.shift();   
                    dados.labels.push(horario);

                    dados.datasets[0].data.shift();
                    dados.datasets[0].data.push(novoRegistro[0].bytesSent);

                    myChart.update();
                }
                proximaAtualizacao = setTimeout(() => atualizarBytesSent(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarBytesSent(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function atualizarPacketsSent(dados, myChart, id) {
    fetch(`/dadosRede/listarDadosRedeTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
                if (novoRegistro[0].horarioLeitura == dados.labels[dados.labels.length - 1]) {
                } else {
                    var registro = novoRegistro[0];
                    var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '');
                    dados.labels.shift();   
                    dados.labels.push(horario);

                    dados.datasets[0].data.shift();
                    dados.datasets[0].data.push(novoRegistro[0].packetsSent);

                    myChart.update();
                }
                proximaAtualizacao = setTimeout(() => atualizarPacketsSent(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarPacketsSent(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function atualizarPacketsRecv(dados, myChart, id) {
    fetch(`/dadosRede/listarDadosRedeTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
                if (novoRegistro[0].horarioLeitura == dados.labels[dados.labels.length - 1]) {
                } else {
                    var registro = novoRegistro[0];
                    var horario = registro.horarioLeitura.replace(/T/, ' ').replace(/\..+/, '');
                    dados.labels.shift();   
                    dados.labels.push(horario);

                    dados.datasets[0].data.shift();
                    dados.datasets[0].data.push(novoRegistro[0].packetsRecv);

                    myChart.update();
                }
                proximaAtualizacao = setTimeout(() => atualizarPacketsRecv(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarPacketsRecv(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}