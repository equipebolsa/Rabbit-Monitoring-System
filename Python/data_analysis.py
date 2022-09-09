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
    chart_configs(ax,'Frequência','Temperatura','Temperatura por frequência')

    ax.scatter(x,y, alpha=0.4)
    ax.plot(x,y_previsao, color='green',linewidth=5.0 )
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


def chart_configs(ax, xlabel, ylabel, title) : 
    ax.set_xlabel(xlabel)
    ax.set_ylabel(ylabel)
    ax.set_title(title)

def main() : 
    #descomenta a que voce quer ver
    
    #regressao linear - tmeperatura por frequencia
    #temperature_per_frequence()
    #correlacao por dia da semana - media de frequencia
    avg_frequence_weekend_day()
main() 