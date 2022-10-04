import pymysql, matplotlib.pyplot as plt ,re,os, numpy as np, psutil,asyncio, time, collections 
from matplotlib.pyplot import figure
from matplotlib.animation import FuncAnimation
fig, (ax,ax1,ax2)= plt.subplots(1,3,gridspec_kw={'width_ratios': [0.5,0.5,0.5], 'height_ratios': [0.8]})

program_open_time=[]
cpu_y=[]
ram_y=[]
disk_y=[]
async def att_date() :
    program_open_time.append(os.popen('date').read().split()[4])

    await asyncio.sleep(1)
    


def config () :
    connection = pymysql.connect(host='localhost',
                             user='root',
                             password='akemih32',
                             database='dbProjetoBolsa')
    return connection.cursor(pymysql.cursors.DictCursor)



cursor = config() 




def select_data (component) : 
    if(component.lower() == "cpu") : 
        cursor.execute("SELECT * FROM tbDadosCpu ORDER BY dataCpu DESC LIMIT 20 ")
        return cursor.fetchall()

    elif(component.lower() == "ram") : 
        cursor.execute("SELECT idRam, capacidadeRam,espacoLivreRam, espacoUsadoRam, dataRam FROM tbRam ORDER BY dataRam DESC LIMIT 20")
        return cursor.fetchall() 

    elif(component.lower() == "disco") : 
        cursor.execute("SELECT idDisco, capacidadeDisco, espacoLivreDisco, espacoUsadoDisco, porcentagemUsoDisco, dataDisco FROM tbDisco ORDER BY dataDisco DESC  LIMIT 20")    
        return cursor.fetchall()

def psutil_data(arr, component) : 
    if(component.lower() == 'cpu') : 
        return  round(psutil.cpu_freq().current *
                         pow(2, 13) / psutil.cpu_freq().max, 2)
    elif(component.lower() == 'ram') : 
        return (round(psutil.virtual_memory().used / pow(1024,3),2) )
    elif(component.lower() == 'disk') : 
        return  (round(psutil.disk_usage('/').percent))

def animate (i) :

    asyncio.run(att_date())
    global program_open_time

    cursor.execute("SELECT * FROM tbDadosCpu ORDER BY dataCpu DESC LIMIT 20 ")
        
    cpu_full_data = cursor.fetchall()
    ram_full_data = select_data('ram')
    disk_full_data = select_data('disco')

    cpu_full_data = handle_data(cpu_full_data, 'freqAtualCpu')
    cpu_full_data = handle_data(cpu_full_data, 'temperaturaAtualCpu')


    ram_full_data = handle_data(ram_full_data,"espacoLivreRam")
    ram_full_data = handle_data(ram_full_data,"espacoUsadoRam")

    cpu_y.append(psutil_data(cpu_y, 'cpu'))
    ram_y.append(psutil_data(ram_y,'ram'))
    disk_y.append(psutil_data(disk_y, 'disk'))
    
    plotCharts(program_open_time, cpu_y,'cpu', 100)
    plotCharts(program_open_time,ram_y, 'ram',  ram_full_data[0]['capacidadeRam'] )
    plotCharts(program_open_time, disk_y, 'disk', 100)
    


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
    blue = '#6250e6'
    green ='#79e675'
    orange = '#f5b795'
    ax.tick_params(# ticks along the top edge are off
        labelbottom=False) 
    
    ax1.tick_params(# ticks along the top edge are off
        labelbottom=False) 
    ax2.tick_params(# ticks along the top edge are off
        labelbottom=False) 
    if(component.lower() == 'cpu'): 
        ax.set_ylim([0,limit])
        ax.set_ylabel("Uso % CPU")
        ax.set_title("USO CPU")
     
        ax.fill_between(x, 0, y,  color='#9086db')
        ax.plot(x,y,  color=blue)
        ax.xaxis.set_ticks_position('none')
         
    elif(component.lower() == 'ram'): 
      
        ax1.set_ylim([0,limit])
        ax1.set_ylabel("Uso % RAM")

        ax1.fill_between(x, 0, y,  color=green)
        ax1.set_title("USO RAM")

        ax1.plot(x,y, color='green', label='Ram')
        ax1.xaxis.set_ticks_position('none')
    elif(component.lower() == 'disk'): 
       
        ax2.set_ylim([0,limit])
        ax2.set_ylabel("Uso % Disco")

        ax2.set_title("USO DISCO")
        ax2.fill_between(x, 0, y,  color=orange)
  
        ax2.plot(x,y, color='orange')
        ax2.xaxis.set_ticks_position('none')
    label_font_size(ax)
    label_font_size(ax1)
    label_font_size(ax2)


ani = FuncAnimation(fig, animate, interval=1000)
plt.show()