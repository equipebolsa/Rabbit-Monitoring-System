/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projeto.rabbit;

//import com.github.britooo.looca.api.core.Looca;
//import com.github.britooo.looca.api.group.discos.Disco;
//import com.github.britooo.looca.api.group.discos.DiscoGrupo;
//import com.github.britooo.looca.api.group.memoria.Memoria;
//import com.github.britooo.looca.api.group.processador.Processador;
//import com.github.britooo.looca.api.group.processos.ProcessoGrupo;
//import com.github.britooo.looca.api.group.servicos.ServicoGrupo;
//import com.github.britooo.looca.api.group.sistema.Sistema;
//import com.github.britooo.looca.api.group.temperatura.Temperatura;
//import java.util.List;
//import java.util.Timer;
//import java.util.TimerTask;
//
///**
// *
// * @author blacklherme
// */
//public class App {
//    public static void main(String[] args) {
//        Looca looca = new Looca();
//        int delay = 3000;
//        int interval = 1000;
//        Timer timer = new Timer();
//        Monitoramento limpar = new Monitoramento();
//
//        Sistema sistema = looca.getSistema();
//        Memoria memoria = looca.getMemoria();
//        Processador processador = looca.getProcessador();
//        Temperatura temperatura = looca.getTemperatura();
//        DiscoGrupo grupoDeDiscos = looca.getGrupoDeDiscos();
//        ServicoGrupo servico = looca.getGrupoDeServicos();
//        ProcessoGrupo processosGroup = looca.getGrupoDeProcessos();
//        
//        timer.scheduleAtFixedRate(new TimerTask(){
//            public void run() {
//                System.out.println(temperatura);
//                System.out.println("-".repeat(30));
//                System.out.println(memoria);
//             
//                System.out.println("-".repeat(30));
//                System.out.println(processador.getUso());
//                System.out.println("-".repeat(30));
//                List<Disco> discos = grupoDeDiscos.getDiscos();
//                for (Disco disco : discos) {
//                    System.out.println(disco);
//                }
//                for (int i = 0; i < 5; i++) {
//                    System.out.println();
//                }
//            }
//        }, delay, interval); 
//
//        System.out.println(sistema);
//        System.out.println("-".repeat(30));
//        System.out.println(memoria);
//        System.out.println("-".repeat(30));
//        System.out.println(processador);
//        System.out.println("-".repeat(30));
//        System.out.println(temperatura);
//        System.out.println("-".repeat(30));
//        List<Disco> discos = grupoDeDiscos.getDiscos();
//        for (Disco disco : discos) {
//            System.out.println(disco);
//        }
//        System.out.println("-".repeat(30));
//        List<Servico> servicos = servico.getServicos();
//        for (Servico servico1 : servicos) {
//            System.out.println(servico1);
//        }
//        System.out.println("-".repeat(30));
//        System.out.println(processosGroup);     
//    }
//}
