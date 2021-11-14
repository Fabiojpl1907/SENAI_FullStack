package Banco_XYZ;


public class BancoXYZ {

	public static void main(String[] args) {
			
		//Cliente
		// instanciando a entidade cliente ( criando novo cliente ) 
        Cliente c1 = new Cliente();
        
        // fornencendo os dados do cliente C1 
        c1.setAgencia(1111);
        c1.setConta(7777);
        c1.setcpf("123.456.788-90");
        c1.setName("José da Silva");
        c1.setNasc("15/06/1995");
        c1.setEnd("Av. dos Autonomistas 234");
        c1.setTel("(11)9123-456");
        c1.setSaldo(100.00F); // Por padrão, o Java assume valores decimais como double. Pra especificar que é um 'float', coloque aquele 'f' ao final.
        c1.setPass("abc#1234");
      
 
        // mostrando dados do cliente 
        c1.mostrar();
		
		

	}

}
