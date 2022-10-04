import pandas as pd 
import numpy as np 
import matplotlib.pyplot as plt 
from sklearn.linear_model import LinearRegression
import datetime 

def design_bar() : 
    return  print('=' * 50 )

def config() : 
    return pd.read_csv('processador.csv')
df = config() 

def chart_config(ax, xlabel, ylabel, title) : 
    ax.set_xlabel(xlabel)
    ax.set_ylabel(ylabel)
    ax.set_title(title)




def temperature_per_frequence() :
    #explicacao: 
    # reshape = remode la os dados sem alterar seu valor, so muda a ordem 
    #o reshape esta sendo usado para cada novo valor ele add novo vetor

    #.fit falo os dados que serao utilizados para esse calculo, utilizo na funcao linearRegression() 

    fig, ax = plt.subplots() 

    x = df['Frequência'].values.reshape(-1,1)
    y = df['Temperatura'].values.reshape(-1,1) 
    regressao_linear = LinearRegression()
    regressao_linear.fit(x,y)
    
    #depois do modelo ter sido "limpo" pelo fit, usa-se o predict para encontrar o padrao, a linha. 
    #predict e perigoso, usar com cautela
    y_previsao = regressao_linear.predict(x)
    chart_config(ax,'Frequência','Temperatura','Temperatura por frequência')

    ax.scatter(x,y, alpha=0.4)
    ax.plot(x,y_previsao, color='orange',linewidth=5.0 )
    plt.show()


def frequence_per_time() : 
    data = df.sort_values(by=['id'],ascending=False).iloc[0:20]

    data_timestamp = pd.to_datetime(data['Data'],  format='%Y-%m-%d %H:%M:%S').tolist()
    for i in range(len(data_timestamp)) : 
        data_timestamp[i] =  data_timestamp[i].minute + data_timestamp[i].second
    x = np.array(data_timestamp).reshape(-1,1)
    y = np.array(data['Frequência']).reshape(-1,1) 

    reg_l = LinearRegression() 
    reg_l.fit(x,y)
    y_prev = reg_l.predict(x)
    fig, ax = plt.subplots() 
    ax.plot(data_timestamp,data['Frequência'], color='blue')
    ax.plot(data_timestamp, y_prev, color='green', linewidth=5.0)
    chart_config(ax, 'Segundos', 'Frequência', 'Frequência por temp')
    plt.show()

def avg_frequence_weekend_day() : 
    
    #os dados do banco, normalmente, são de um dia só que a máquina fica ligada.
    #irei popular com mais
    
    fig, ax = plt.subplots() 
    y = df[['Frequência', 'Data']]

    date = df['Data']
    date = pd.to_datetime(date,  format='%Y-%m-%d %H:%M:%S').tolist()
    
    y['Data'] = get_weekend_day(date)  
    ax.bar(y['Data'],y['Frequência'].mean())
    plt.show()    

def get_weekend_day(data):
    arr=[]
    for i in data:
        arr.append(i.strftime('%A'))
    return arr



def main() : 
    print("""
        Análise de dados da CPU.
        1) Temperatura por frequência com regressão Linear
        2) Correlação por dia da semana
        3) Frequência por tempo com regressão linear
        0) Sair
        ... 
    """)
    select = int(input()) 
    
    if select == 1 : 
        temperature_per_frequence()
        main()
    elif select == 2 : 
        avg_frequence_weekend_day()
        main()
    elif select == 3  :
        frequence_per_time()
        main()
    elif select == 0 : 
        print ("Tchau... ")
        exit()
    else : 
        print ("Valor inválido")
        main()
main() 
