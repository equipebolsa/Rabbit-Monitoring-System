from time import sleep

def executarMonitoramento(resposta,cursor,connection):
    while True:
        script = ""

        i = 1
        for row in resposta:
            script += f"""
def executar_{i}(fkServidor, fkComponente, fkMetrica):

    query = ("SELECT & FROM metrica WHERE idMetrica = %s")
    cursor.execute(query, fkMetrica)    

    resposta = cursor.fetchall() 
    isTupla = resposta[0][5]

    comando = resposta[0][2]    
    leitura = eval(comando)    

    if isTupla == 0:
        query = ("INSERT INTO leitura(horarioLeitura,valorLeitura,fkComponenteFisico,fkMetrica) VALUES(NOW() %s, %s, %s)")    
        val = (leitura,fkComponente,fkMetrica)
    else: 
        for row in leitura:
            query = ("INSERT INTO leitura(fkServidor, fkComponente, fkMetrica, horario, valorLido) VALUES(%s, %s, %s, now(), %s)")    
            val = (servidor, componente, metrica, row)  

    cursor.execute(query, val)
    connection.commit()
executar_{i}({row[2]}, {row[0]}, {row[1]})
    """
        i += 1
        if script: exec(script)

        sleep(5)
        print("Executando...")


