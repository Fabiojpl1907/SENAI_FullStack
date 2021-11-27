package classes;

import java.sql.*;
import java.sql.DriverManager;

public class ConectaBD {
	public String usuario="root"; 
	public String senha="MySQL2@2!";
	
	public Connection Conectar() throws Exception 
	{
			Class.forName("com.mysql.jdbc.Driver");
			String url = "jdbc:mysql://localhost/contasbanco";
	        java.sql.Connection conn = DriverManager.getConnection(url, usuario, senha);
	        return conn;
	}
}
