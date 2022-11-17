import psutil

def comando(name):
    if name == 'CPUPercent':
        return psutil.cpu_percent(interval=None, percpu=False)
    elif name == "RAMPercent":
        return (psutil.virtual_memory().percent)
    elif name == "DISCOUso":
        return round((psutil.disk_usage("/").used)/(1024**3),2)