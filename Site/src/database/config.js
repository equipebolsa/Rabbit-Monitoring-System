var mysql = require("mysql2");
var sql = require('mssql');

// CONEXÃO DO SQL SERVER - AZURE (NUVEM)
var sqlServerConfig = {
    server: "serverrabbit.database.windows.net",
    database: "RabbitBanco",
    user: "rabbit",
    password: "RabMonSys@",
    timezone: "-00:00",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
    }
}

// CONEXÃO DO MYSQL WORKBENCH (LOCAL)
var mySqlConfig = {
    host: "localhost",
    database: "bolsa",
    user: "aluno",
    password: "sptech",
    timezone: "-00:00"
};


function select(queryMySQL, queryAzure = queryMySQL) {
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        return new Promise((resolve, reject) => {
            sql.connect(sqlServerConfig).then(_ => {
                return sql.query(queryAzure)
            }).then(resultados => {
                console.log(resultados);
                resolve(resultados.recordset);
            }).catch(azureErro => {
                console.log('ERRO AZURE: ', azureErro);

                var conexao = mysql.createConnection(mySqlConfig);
                conexao.connect();
                conexao.query(queryMySQL, function (erro, resultados) {
                    conexao.end();
                    if (erro) {
                        console.log('ERRO MYSQL: ', erro);
                        reject(erro);
                    }
                    console.log(resultados);
                    resolve(resultados);
                });

                conexao.on('error', function (erro) {
                    console.log("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
                });
            })

            sql.on('error', function (erro) {
                console.log("ERRO NO SQL SERVER (Azure): ", erro);
            });
        });
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.query(queryMySQL, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js")
        });
    }
}

function update(queryMySQL, queryAzure = queryMySQL) {
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        return new Promise(function (resolve, reject) {
            sql.connect(sqlServerConfig).then(() => {
                return new sql.Transaction()
            }).then(transaction => {
                transaction.begin().then(() => {
                    transaction.request().query(queryAzure).then(function (resultados) {
                        console.log(resultados);
                        var conexao = mysql.createConnection(mySqlConfig);
                        conexao.connect();
                        conexao.beginTransaction();
                        conexao.query(queryMySQL, function (erro, resultados) {
                            if (erro) {
                                console.log('MySQL revertido')
                                console.log('ERRO MYSQL: ', erro);
                                conexao.rollback()
                                conexao.end();
                                transaction.rollback().then(() => {
                                    console.log('Azure Revertida');
                                    reject(erro);
                                })
                            } else {
                                transaction.commit().then(() => {
                                    console.log('Azure Comitada');
                                    resolve(resultados);
                                    console.log('MySQL comitado')
                                    console.log(resultados);
                                    conexao.commit()
                                    conexao.end();
                                }).catch(err => {
                                    console.log('AZURE COMMIT ERROR: ', err);
                                })
                            }
                        });
                    }).catch(function (erro) {
                        console.log('ERRO AZURE: ', erro);
                        transaction.rollback().then(() => {
                            console.log('Azure Revertida');
                            reject(erro);
                        }).catch(err => {
                            console.log('AZURE COMMIT ERROR: ', err);
                        })
                    });
                })
            }).catch(function (erro) {
                console.log('AZURE ERRO: ', erro);
                reject(erro);
            });
        });
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.beginTransaction();
            conexao.query(queryMySQL, function (erro, resultados) {
                if (erro) {
                    console.log('MySQL revertido')
                    console.log('ERRO MYSQL: ', erro);
                    conexao.rollback()
                    conexao.end();
                    reject(erro);
                }
                console.log('MySQL comitado')
                console.log(resultados);
                conexao.commit()
                conexao.end();
                resolve(resultados);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js")
        });
    }
}




function sqlServer() {
    return new Promise(function (resolve, reject) {
        sql.connect(sqlServerConfig).then(function () {
            console.log("Conectado");
            resolve(true);
        }).catch(function () {
            console.log("Não Conectado");
            reject(false);

        });
    }).catch(function () { });
}

function mySql() {
    return new Promise(function (resolve, reject) {
        var pool = mysql.createPool(mySqlConfig);
        pool.query("SHOW DATABASES", function (err, rows, fields) {
            if (typeof rows === "undefined") {
                console.log("Não Conectado");
                reject(false);
            } else {
                console.log("Conectado");
                resolve(true);
            }

        });
    }).catch(function () { });
}








function executar(instrucao) {


    if (process.env.AMBIENTE_PROCESSO == "producao") {
        return new Promise(function (resolve, reject) {
            sql.connect(sqlServerConfig).then(function () {
                return sql.query(instrucao);
            }).then(function (resultados) {
                console.log(resultados);
                resolve(resultados.recordset);
            }).catch(function (erro) {
                reject(erro);
                console.log('ERRO: ', erro);
            });
            sql.on('error', function (erro) {
                return ("ERRO NO SQL SERVER (Azure): ", erro);
            });
        });
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.query(instrucao, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js")
        });
    }
}

module.exports = {
    executar,
    update,
    select
}