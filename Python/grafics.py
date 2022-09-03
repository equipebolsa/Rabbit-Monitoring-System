import pymysql, matplotlib.pyplot as plt ,re,os, numpy as np    
from matplotlib.pyplot import figure



fig, (ax,ax1,ax2)= plt.subplots(1,3,gridspec_kw={'width_ratios': [0.5,0.5,0.5], 'height_ratios': [0.8]})


def currentDate() : 
    return   os.popen('date').read().split()[4]

def config () :
    connection = pymysql.connect(host='localhost',
                             user='root',
                             password='akemih32',
                             database='dbProjetoBolsa')
    return connection.cursor(pymysql.cursors.DictCursor)



cursor = config() 




def select_data (component) : 
    if(component.lower() == "cpu") : 
        cursor.execute("SELECT * FROM tbDadosCpu ORDER BY dataCpu LIMIT 20 ")
        return cursor.fetchall()

    elif(component.lower() == "ram") : 
        cursor.execute("SELECT idRam, capacidadeRam,espacoLivreRam, espacoUsadoRam, dataRam FROM tbRam ORDER BY dataRam LIMIT 20")
        return cursor.fetchall() 

    elif(component.lower() == "disco") : 
        cursor.execute("SELECT idDisco, capacidadeDisco, espacoLivreDisco, espacoUsadoDisco, porcentagemUsoDisco, dataDisco FROM tbDisco ORDER BY dataDisco LIMIT 20")    
        return cursor.fetchall()

def main () : 
    cpu_full_data =  select_data('cpu')
    ram_full_data = select_data('ram')
    disk_full_data = select_data('disco')

    cpu_full_data = handle_data(cpu_full_data, 'freqAtualCpu')
    cpu_full_data = handle_data(cpu_full_data, 'temperaturaAtualCpu')


    ram_full_data = handle_data(ram_full_data,"espacoLivreRam")
    ram_full_data = handle_data(ram_full_data,"espacoUsadoRam")


    cpu_x = get_data(cpu_full_data, 'dataCpu')
    cpu_y = get_data(cpu_full_data, 'freqAtualCpu' )

    ram_x = get_data(ram_full_data,'dataRam')
    ram_y = get_data(ram_full_data, 'espacoUsadoRam')

    disk_x = get_data(disk_full_data, 'dataDisco')
    disk_y = get_data(disk_full_data, 'porcentagemUsoDisco')

    plotCharts(cpu_x, cpu_y, 'cpu', 100)

    plotCharts(ram_x,ram_y, 'ram',  ram_full_data[0]['capacidadeRam'])

    plotCharts(disk_x, disk_y, 'disk', 100)

    plt.show()
    
def get_data(arr, item): 
    new_arr = []
    for i in arr: 
        new_arr.append(i.get(item))
    return new_arr

def handle_data(arr,dict_item) :
    for i in range(len(arr)) : 
        arr[i][dict_item] = float(arr[i][dict_item])
    return arr 


def label_font_size(ax): 
    for label in (ax.get_xticklabels() + ax.get_yticklabels()):
	    label.set_fontsize(7)


def plotCharts(x,y, component, limit) : 


    if(component.lower() == 'cpu'): 
        ax.set_ylim([0,limit])
        ax.set_ylabel("Uso % CPU")
        ax.set_title("USO CPU")
        ax.set_xlabel("Hora")
        ax.grid('on')
        ax.fill_between(x, 0, y, alpha=.3, color='blue')
        ax.plot(x,y, alpha=.3, color='blue')

    elif(component.lower() == 'ram'): 
        ax1.set_ylim([0,limit])
        ax1.set_ylabel("Uso % CPU")
        ax1.set_xlabel("Hora")
        ax1.fill_between(x, 0, y, alpha=.3, color='green')
        ax1.set_title("USO RAM")


        #tentativa de inserir gráficos de Pizza, acabou ficando visualmente ruim
        #para testar, adicione ax3 no fig, coloque, ao inves de 3, 4 e descomenta o codigo abaixo

        # labels = ['Restante',"Utilizado"]
        
        # pie_y  = sum(y) / len(y)
        # sizes= [limit,pie_y]
        # print(limit, pie_y)
        # explode = (0,0.1)
        # ax3.set_title("USO RAM")
        # ax3.pie(sizes,labels=labels,explode=explode, autopct='%1.f%%')
        # ax3.axis('equal')

        # ax3.plot()
        ax1.grid('on')
        ax1.plot(x,y, color='green', label='Ram')
        
    elif(component.lower() == 'disk'): 
        ax2.set_ylim([0,limit])
        ax2.set_ylabel("Uso % Disco")
        ax2.set_xlabel("Hora")
        ax2.set_title("USO DISCO")
        ax2.fill_between(x, 0, y, alpha=.4, color='orange')
        ax2.grid('on')
        ax2.plot(x,y, color='orange')
    label_font_size(ax)
    label_font_size(ax1)
    label_font_size(ax2)

main()