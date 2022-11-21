/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projeto.rabbit;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.processos.ProcessoGrupo;
import com.github.britooo.looca.api.group.servicos.ServicoGrupo;
import com.github.britooo.looca.api.group.sistema.Sistema;
import com.github.britooo.looca.api.group.temperatura.Temperatura;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author blacklherme
 */
public class TelaDeMonitoramento extends javax.swing.JFrame {

    ConnectionBD config = new ConnectionBD();
    JdbcTemplate con = new JdbcTemplate(config.getDatasource());

    Looca looca = new Looca();
    Sistema sistema = looca.getSistema();
    Memoria memoria = looca.getMemoria();
    Processador processador = looca.getProcessador();

    Temperatura temperatura = looca.getTemperatura();
    DiscoGrupo grupoDeDiscos = looca.getGrupoDeDiscos();
    ServicoGrupo servico = looca.getGrupoDeServicos();
    ProcessoGrupo processosGroup = looca.getGrupoDeProcessos();

    /**
     * Creates new form NewJFrame
     */
    public TelaDeMonitoramento() {
        initComponents();
        Double total = looca.getMemoria().getTotal() / Math.pow(1024.0, 3.0);
        Double uso = looca.getMemoria().getEmUso() / Math.pow(1024.0, 3.0);
        Double disponivel = looca.getMemoria().getDisponivel() / Math.pow(1024.0, 3.0);

        StringBuilder createStatement = new StringBuilder();
        StringBuilder createDisco = new StringBuilder();
        //tabela da temperatura da cpu e memória ram
//        createStatement.append("CREATE TABLE if not exists cpuMem (");
//        createStatement.append("id INT PRIMARY KEY AUTO_INCREMENT,");
//        createStatement.append("temperatura VARCHAR(255),");
//        createStatement.append("memUso VARCHAR(255),");
//        createStatement.append("memDisp VARCHAR(255),");
//        createStatement.append("memTotal VARCHAR(255)");
//        createStatement.append(")");

        //tabela do disco
//        createDisco.append("CREATE TABLE if not exists disco (");
//        createDisco.append("idDisco INT PRIMARY KEY AUTO_INCREMENT,");
//        createDisco.append("discoo VARCHAR(255)");
//        createDisco.append(")");
//
//        con.execute(createStatement.toString());
//        con.execute(createDisco.toString());
//
//        String insertStatement = "INSERT INTO cpuMem VALUES (null, ?, ?, ?, ?)";
//        String insertDisco = "INSERT INTO disco VALUES (null, ?)";

        varCpu.setText("a");
        varUsoRam.setText(String.format("%.2f GB", uso));
        varDispRam.setText(String.format("%.2f GB", disponivel));
        varTotalRam.setText(String.format("%.2f GB", total));
        varDisco.setText(looca.getGrupoDeDiscos().getDiscos().toString());

//        con.update(insertStatement, looca.getTemperatura().getTemperatura().toString(), String.format("%.2f GB", uso), String.format("%.2f GB", disponivel), String.format("%.2f GB", total));
//        con.update(insertDisco, looca.getGrupoDeDiscos().getDiscos().toString());

        int delay = 5000;
        int interval = 1000;
        Timer timer = new Timer();

        timer.scheduleAtFixedRate(new TimerTask() {

            public void run() {

                    
                   
                Double total = looca.getMemoria().getTotal() / Math.pow(1024.0, 3.0);
                Double uso = looca.getMemoria().getEmUso() / Math.pow(1024.0, 3.0);
                Double disponivel = looca.getMemoria().getDisponivel() / Math.pow(1024.0, 3.0);

                StringBuilder createStatement = new StringBuilder();
                StringBuilder createDisco = new StringBuilder();
               
                //tabela da temperatura da cpu e memória ram
                createStatement.append("CREATE TABLE if not exists monitoramento (");
                createStatement.append("id INT PRIMARY KEY AUTO_INCREMENT,");
                createStatement.append("temperatura VARCHAR(255),");
                createStatement.append("memUso VARCHAR(255),");
                createStatement.append("memDisp VARCHAR(255),");
                createStatement.append("memTotal VARCHAR(255)");
                createStatement.append(")");

                //tabela do disco
                createDisco.append("CREATE TABLE if not exists disco (");
                createDisco.append("idDisco INT PRIMARY KEY AUTO_INCREMENT,");
                createDisco.append("discoo VARCHAR(255)");
                createDisco.append(")");

                con.execute(createStatement.toString());
                con.execute(createDisco.toString());

                String insertStatement = "INSERT INTO monitoramento VALUES (null, ?, ?, ?, ?)";
                String insertDisco = "INSERT INTO disco VALUES (null, ?)";

                varCpu.setText(looca.getTemperatura().getTemperatura().toString());
                varUsoRam.setText(String.format("%.2f GB", uso));
                varDispRam.setText(String.format("%.2f GB", disponivel));
                varTotalRam.setText(String.format("%.2f GB", total));
                varDisco.setText(looca.getGrupoDeDiscos().getDiscos().toString());

                con.update(insertStatement, looca.getTemperatura().getTemperatura().toString(), String.format("%.2f GB", uso), String.format("%.2f GB", disponivel), String.format("%.2f GB", total));
                con.update(insertDisco, looca.getGrupoDeDiscos().getDiscos().toString());
            }
        }, delay, interval);
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        titulo = new javax.swing.JLabel();
        tempCpu = new javax.swing.JLabel();
        varCpu = new javax.swing.JLabel();
        memRam = new javax.swing.JLabel();
        usoRam = new javax.swing.JLabel();
        dispRam = new javax.swing.JLabel();
        totalRam = new javax.swing.JLabel();
        varUsoRam = new javax.swing.JLabel();
        varDispRam = new javax.swing.JLabel();
        varTotalRam = new javax.swing.JLabel();
        disco = new javax.swing.JLabel();
        varDisco = new java.awt.TextArea();
        buttonProcesso = new javax.swing.JButton();
        buttonSair = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setUndecorated(true);
        setResizable(false);

        titulo.setFont(new java.awt.Font("Sitka Display", 1, 36)); // NOI18N
        titulo.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        titulo.setText("Monitoramento");

        tempCpu.setText("Temperatura CPU:");

        varCpu.setText("0,0");

        memRam.setText("Memoria RAM");

        usoRam.setText("Uso total:");

        dispRam.setText("Disponível:");

        totalRam.setText("Total:");

        varUsoRam.setText("0,0");

        varDispRam.setText("0,0");

        varTotalRam.setText("0,0");

        disco.setText("Disco:");

        buttonProcesso.setBackground(new java.awt.Color(58, 65, 84));
        buttonProcesso.setFont(new java.awt.Font("Segoe UI", 0, 11)); // NOI18N
        buttonProcesso.setForeground(new java.awt.Color(255, 255, 255));
        buttonProcesso.setText("Ver processos");
        buttonProcesso.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        buttonProcesso.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonProcessoActionPerformed(evt);
            }
        });

        buttonSair.setBackground(new java.awt.Color(217, 81, 51));
        buttonSair.setFont(new java.awt.Font("Segoe UI", 0, 11)); // NOI18N
        buttonSair.setForeground(new java.awt.Color(255, 255, 255));
        buttonSair.setText("Sair");
        buttonSair.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        buttonSair.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonSairActionPerformed(evt);
            }
        });

        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/logo.png"))); // NOI18N

        jLabel2.setText("---------------------------------");

        jLabel4.setText("---------------------------------");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(disco)
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addComponent(titulo, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(memRam)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(dispRam)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(varDispRam))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(totalRam)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(varTotalRam))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(tempCpu)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(varCpu))
                            .addComponent(jLabel2)
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                    .addComponent(jLabel3)
                                    .addComponent(usoRam))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(varUsoRam))
                            .addComponent(jLabel4)
                            .addComponent(varDisco, javax.swing.GroupLayout.PREFERRED_SIZE, 250, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createSequentialGroup()
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 172, Short.MAX_VALUE)
                                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 120, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(layout.createSequentialGroup()
                                .addGap(25, 25, 25)
                                .addComponent(buttonProcesso)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(buttonSair, javax.swing.GroupLayout.PREFERRED_SIZE, 99, javax.swing.GroupLayout.PREFERRED_SIZE)))))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(20, 20, 20)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(titulo)
                        .addGap(23, 23, 23)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(tempCpu)
                            .addComponent(varCpu))
                        .addGap(0, 0, 0)
                        .addComponent(jLabel2)
                        .addGap(0, 0, 0)
                        .addComponent(memRam)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel3)
                        .addGap(3, 3, 3)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(usoRam)
                            .addComponent(varUsoRam))
                        .addGap(13, 13, 13)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(dispRam)
                            .addComponent(varDispRam))
                        .addGap(13, 13, 13)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(totalRam)
                            .addComponent(varTotalRam))
                        .addGap(0, 0, 0)
                        .addComponent(jLabel4))
                    .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 144, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(disco)
                        .addGap(21, 21, 21)
                        .addComponent(varDisco, javax.swing.GroupLayout.PREFERRED_SIZE, 273, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(buttonSair, javax.swing.GroupLayout.PREFERRED_SIZE, 47, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(buttonProcesso, javax.swing.GroupLayout.PREFERRED_SIZE, 47, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addGap(20, 20, 20))
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void buttonProcessoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonProcessoActionPerformed
        TelaProcessos tela = new TelaProcessos();
        tela.setVisible(true);
        this.dispose();
    }//GEN-LAST:event_buttonProcessoActionPerformed

    private void buttonSairActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonSairActionPerformed
        Login tela = new Login();
        tela.setVisible(true);
        this.dispose();
    }//GEN-LAST:event_buttonSairActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(TelaDeMonitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(TelaDeMonitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(TelaDeMonitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(TelaDeMonitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new TelaDeMonitoramento().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton buttonProcesso;
    private javax.swing.JButton buttonSair;
    private javax.swing.JLabel disco;
    private javax.swing.JLabel dispRam;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel memRam;
    private javax.swing.JLabel tempCpu;
    private javax.swing.JLabel titulo;
    private javax.swing.JLabel totalRam;
    private javax.swing.JLabel usoRam;
    private javax.swing.JLabel varCpu;
    private java.awt.TextArea varDisco;
    private javax.swing.JLabel varDispRam;
    private javax.swing.JLabel varTotalRam;
    private javax.swing.JLabel varUsoRam;
    // End of variables declaration//GEN-END:variables
}
