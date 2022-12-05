package com.mycompany.utilitario;



import java.util.ArrayList;
import java.util.List;
import oshi.SystemInfo;
import oshi.hardware.*;


public class NetConnection {


 
    public static List<Long> networkInterface()  {
        HardwareAbstractionLayer hal = new SystemInfo().getHardware();
        List<Long> resultado = new ArrayList<>();
        for (int i = 0; i < hal.getNetworkIFs().size(); i++) {
            if (hal.getNetworkIFs().get(i).getIfAlias().equals("Wi-Fi")) {
                Long net_in_1 = (hal.getNetworkIFs().get(i).getBytesRecv());
                Long net_out_1 = ((hal.getNetworkIFs().get(i).getBytesSent()));

                Long net_in_2 = (hal.getNetworkIFs().get(i).getBytesRecv());
                Long net_out_2 = ((hal.getNetworkIFs().get(i).getBytesSent()));
                Long net_in = ((net_in_2 - net_in_1)/1024);
                Long net_out = ((net_out_2 - net_out_1)/1024);
                //System.out.println("DOWNLOAD: "+net_in+" UPLOAD: "+net_out);

              

                
                Long net_in_packets_1 = ((hal.getNetworkIFs().get(i).getPacketsRecv()));
                Long net_out_packets_1 = ((hal.getNetworkIFs().get(i).getPacketsSent()));
                Long net_in_packets_2 = ((hal.getNetworkIFs().get(i).getPacketsRecv()));
                Long net_out_packets_2 = ((hal.getNetworkIFs().get(i).getPacketsSent()));
                Long net_in_packets = net_in_packets_2 - net_in_packets_1;
                Long net_out_packets = net_out_packets_2 - net_out_packets_1;

                resultado.add(net_in);
                resultado.add(net_out);
                resultado.add(net_in_packets);
                resultado.add(net_out_packets);
                //System.out.println("Pacote Recebidos: "+net_in_packets+" Pacote Enviados: "+net_out_packets);
                
            }
        }
        return resultado;
    }
}
