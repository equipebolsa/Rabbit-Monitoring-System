
package com.mycompany.projeto.rabbit;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class ConnectionBD {

    private BasicDataSource datasource;

    // Exemplo de configuração utilizando H2
    // Obs. O código comentado é um exemplo de como se conectar ao mysql
    public ConnectionBD() {
        this.datasource = new BasicDataSource();

        this.datasource.setDriverClassName("com.mysql.jdbc.Driver");

        this.datasource.setUrl("jdbc:mysql://127.0.0.1:3306/bolsa?useTimezone=true&serverTimezone=UTC");
        
        // usuário utilizado em um container MySQL
        this.datasource.setUsername("aluno");
        
        // senha padrao utilizada no container MySQL
        this.datasource.setPassword("sptech");
    }

    public BasicDataSource getDatasource() {
        return datasource;
    }
}
