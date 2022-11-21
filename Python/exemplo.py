
conn2 = pymssql.connect("serverrabbit.database.windows.net", "rabbit", "RabMonSys@", "RabbitBanco")
cursor2 = conn2.cursor(as_dict=True)
quey = ("INSERT INTO leitura(horarioLeitura,valorLeitura,fkComponenteFisico,fkMetrica) VALUES(current_timestamp,%s,%s,%s)")
val = (str(leitura),str(2),str(1))
cursor2.execute(quey,val)
conn2.commit()


Ethernet
	ethernet
	speed
	mtu

WIFI
	wifi 
	speed
	mtu

DADOSREDE
	fkWifi
	fkEthernet
	bytes_sent
	bytyes_recv 
	packets_sent
	packtes_recv
	errin
	errout

