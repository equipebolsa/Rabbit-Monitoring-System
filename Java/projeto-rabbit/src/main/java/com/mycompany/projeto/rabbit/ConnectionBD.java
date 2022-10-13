/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projeto.rabbit;


import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;
/**
 *
 * @author blacklherme
 */
public class ConnectionBD {




    private BasicDataSource datasource;

    // Exemplo de configuração utilizando H2
    // Obs. O código comentado é um exemplo de como se conectar ao mysql
    public ConnectionBD() {
        this.datasource = new BasicDataSource();

        this.datasource.setDriverClassName("com.mysql.jdbc.Driver");

        this.datasource.setUrl("jdbc:mysql://127.0.0.1:3306/monitoramentoJava");
        
        // usuário utilizado em um container MySQL
        this.datasource.setUsername("root");
        
        // senha padrao utilizada no container MySQL
        this.datasource.setPassword("O@kami261004");
    }

    public BasicDataSource getDatasource() {
        return datasource;
    }
}
