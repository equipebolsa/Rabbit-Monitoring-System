function plotarGraficoCpuPercent(resposta, id) {
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
    setTimeout(() => atualizarGraficoCpuPercent(dados1, myChart, id), 2000);
}

function plotarGraficoDiscoGb(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Memória Disco (GB)',
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
    var ctx = document.getElementById("hddGB").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoDiscoGb(dados1, myChart, id), 2000);
}




function plotarGraficoRamPercent(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Memória Principal (%)',
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
    var ctx = document.getElementById("ram").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoRamPercent(dados1, myChart, id), 2000);
}


function plotarGraficoDiscoPercent(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Memória Disco (%)',
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
    var ctx = document.getElementById("hddPercent").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoDiscoPercent(dados1, myChart, id), 2000);
}


function atualizarGraficoCpuPercent(dados, myChart, id) {

    fetch(`/leituras/leiturasCpuPercentTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
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
                proximaAtualizacao = setTimeout(() => atualizarGraficoCpuPercent(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarGraficoCpuPercent(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function atualizarGraficoDiscoPercent(dados, myChart, id) {

    fetch(`/leituras/leiturasDiscoPercentTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
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
                    proximaAtualizacao = setTimeout(() => atualizarGraficoDiscoPercent(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarGraficoDiscoPercent(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function atualizarGraficoRamPercent(dados, myChart, id) {

    fetch(`/leituras/leiturasRamPercentTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
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
                    proximaAtualizacao = setTimeout(() => atualizarGraficoRamPercent(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() => atualizarGraficoRamPercent(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function atualizarGraficoDiscoGb(dados, myChart, id) {

    fetch(`/leituras/leiturasDiscoGbTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
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
                    proximaAtualizacao = setTimeout(() =>  atualizarGraficoDiscoGb(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() =>  atualizarGraficoDiscoGb(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoLeituraSegundo(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Memória Principal (%)',
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
    var ctx = document.getElementById("hddRead").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoLeituraSegundo(dados1, myChart, id), 2000);
}


function atualizarGraficoLeituraSegundo(dados, myChart, id) {

    fetch(`/leituras/leiturasLeituraTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
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
                    proximaAtualizacao = setTimeout(() =>  atualizarGraficoLeituraSegundo(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() =>  atualizarGraficoLeituraSegundo(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}




function plotarGraficoEscritaSegundo(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Memória Principal (%)',
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
    var ctx = document.getElementById("hddWrite").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoEscritaSegundo(dados1, myChart, id), 2000);
}


function atualizarGraficoEscritaSegundo(dados, myChart, id) {

    fetch(`/leituras/leiturasEscritaTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
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
                    proximaAtualizacao = setTimeout(() =>  atualizarGraficoEscritaSegundo(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() =>  atualizarGraficoEscritaSegundo(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}




function plotarGraficoSwapPercent(resposta, id) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Memória Principal (%)',
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
    var ctx = document.getElementById("swap").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoSwapPercent(dados1, myChart, id), 2000);
}


function atualizarGraficoSwapPercent(dados, myChart, id) {

    fetch(`/leituras/leiturasSwapPercentTempoReal/${id}`, { cache: 'no-store' }).then(function (response) {
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
                    proximaAtualizacao = setTimeout(() =>  atualizarGraficoSwapPercent(dados, myChart, id), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            proximaAtualizacao = setTimeout(() =>  atualizarGraficoSwapPercent(dados, myChart, id), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

