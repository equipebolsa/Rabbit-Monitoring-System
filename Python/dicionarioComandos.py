from argparse import Namespace
import psutil
import time


def temperatura(plataforma):
    temperaturaCPU = 0
    if (plataforma == "Windows"):
        import wmi
        w = wmi.WMI(namespace="root/OpenHardwareMonitor")
        temperaturaInformacao = w.Sensor()
        for sensor in temperaturaInformacao:
            if (sensor.SensorType == u'Temperature'):
                temperaturaCPU = sensor.Value
    else:
        temperaturasCPUS = psutil.sensors_temperatures()
        temperaturaCPU = temperaturasCPUS['coretemp'][0][1]

    return temperaturaCPU


def comando(metricaId,plat):
    if metricaId == 1:
        # CPU USADO  %
        return psutil.cpu_percent(interval=None, percpu=False)
    elif metricaId == 2:
        # DISCO USADO GB
        return round((psutil.disk_usage('/').used/1024**3),2)
    elif metricaId == 3:
        # RAM USADO  %
        return (psutil.virtual_memory().percent)
    elif metricaId == 4:
        # DISCO USADO %
        return (psutil.disk_usage("/").percent)
    elif metricaId == 5:
        # QUANTIDADE DE LEITURA POR SEGUNDO
        a = psutil.disk_io_counters().read_count
        time.sleep(1)
        b = psutil.disk_io_counters().read_count
        return (b-a)
    elif metricaId == 6:
        # QUANTIDADE DE ESCRITA POR SEGUNDO
        a = psutil.disk_io_counters().write_count
        time.sleep(1)
        b = psutil.disk_io_counters().write_count
        return (b-a)
    elif metricaId == 7:
        #  MEMORIA VIRTUAL %
        return psutil.swap_memory().percent
    elif metricaId == 8:
        # TEMPERATURA DA CPU °C
        temperatura = temperatura(plat)
        return psutil.swap_memory().percent
