
package com.mycompany.projeto.rabbit;

import org.apache.commons.dbcp2.BasicDataSource;

public class ConnectionBD {

    private final BasicDataSource datasource;

    public ConnectionBD() {
        this.datasource = new BasicDataSource();
        datasource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        datasource.setUrl("jdbc:sqlserver://serverrabbit.database.windows.net:1433;encrypt=true;databaseName=RabbitBanco;user=rabbit;password=RabMonSys@");
        datasource.setUsername("rabbit");
        datasource.setPassword("RabMonSys@");
    }

    public BasicDataSource getDatasource() {
        return datasource;
    }
}
