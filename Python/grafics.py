import pymysql  

def config () : 
    connection = pymysql.connect(host='localhost',
                             user='root',
                             password='akemih32',
                             database='dbProjetoBolsa')
    return connection.cursor()
cursor = config() 

def select_data (component) : 
    if(component.lower() == "cpu") : 
        cursor.execute("SELECT * FROM tbDadosCpu")
        return cursor.fetchall()

    elif(component.lower() == "ram") : 
        cursor.execute("SELECT idRam, espacoLivreRam, espacoUsadoRam, dataRam FROM tbRam")
        return cursor.fetchall() 

    elif(component.lower() == "disco") : 
        cursor.execute("SELECT idDisco, espacoLivreDisco, espacoUsadoDisco, dataDisco FROM tbDisco")    
        return cursor.fetchall()

def intermediare (cpu, ram, disk) : 
    cpu_full_data =  select_data('cpu')
    ram_full_data = select_data('ram')
    disk_full_data = select_data('disco')

    assign_values(cpu,  algoritm_order(cpu,cpu_full_data,'id',0))
    assign_values(cpu,  algoritm_order(cpu,cpu_full_data,'currentFreq',1))
    assign_values(cpu,  algoritm_order(cpu,cpu_full_data,'temperature',2))
    assign_values(cpu,  algoritm_order(cpu,cpu_full_data,'date',3))
    print(cpu)

def assign_values(var, algoritm) : 
    var = algoritm

def algoritm_order(newData, oldData, element, index) : 
    for i in range(len(oldData)) : 
        newData[element].append(oldData[i][index])
    return newData

def create_dict() : 
    dict_cpu = {"id" : [] , "currentFreq" : [] , "temperature" : [] , "date" : [] }

    dict_ram = {"id" : [] , "free" : [] , "usage" : [] , "date" : [] }


    dict_disk = {"id" : [] , "free" : [] , "usage" : [] , "date" : [] }

    intermediare(dict_cpu, dict_ram, dict_disk)



create_dict()