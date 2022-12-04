import psutil
import time
import os
import csv
import pandas as pd

cpu = []
ram = []
final = []

headerList = ['cpu','ram']

while True:

    cpu.append(str(psutil.cpu_percent(interval=None)))
    ram.append(str(psutil.virtual_memory().percent))

    with open('./cpu.csv', 'w', newline='') as file:
        writer = csv.writer(file, delimiter=' ')
        writer.writerows(['Cpu'])
        writer.writerows(cpu)

    with open('./ram.csv', 'w', newline='') as file:
        writer = csv.writer(file, delimiter=' ')
        writer.writerows(['Ram'])
        writer.writerows(ram)

    cpuCsv = ['cpu.csv']
    
    for i in range(len(cpuCsv)):
        final.append([cpu[i-1],ram[i-1]])

    with open('./tudoJunto.csv', 'w', newline='') as file:
        writer = csv.writer(file, delimiter=',')
        writer.writerows(final)
    
    csvFinal = pd.read_csv("tudoJunto.csv")
    csvFinal.to_csv("csvFinal.csv", index=False,encoding='utf-8', header=headerList)

    print("Monitorando")

    time.sleep(1)
    os.system('cls')