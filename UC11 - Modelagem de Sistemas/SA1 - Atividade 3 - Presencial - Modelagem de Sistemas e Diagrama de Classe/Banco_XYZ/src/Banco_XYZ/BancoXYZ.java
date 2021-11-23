package Banco_XYZ;


public class BancoXYZ {

	public static void main(String[] args) {
			
		//Cliente
		// instanciando a entidade cliente ( criando novo cliente -> c1 ) 
        Cliente c1 = new Cliente();
        
        // fornencendo os dados do cliente C1 
        c1.setAgencia(100);
        c1.setConta(34567);
        c1.setcpf("123.456.788-90");
        c1.setName("José da Silva");
        c1.setNasc("15/06/1995");
        c1.setEnd("Av. dos Autonomistas 234");
        c1.setTel("(11)9123-456");
        c1.setSaldo(100.00F); // Por padrão, o Java assume valores decimais como double. Pra especificar que é um 'float', coloque aquele 'f' ao final.
        c1.setPass("abc#1234");
      
 
        // mostrando dados do cliente 
        c1.mostrar();
		
        // criando ( instanciando ) nova conta corrente -> cc1
        ContaCorrente cc1 = new ContaCorrente();
        
        // Movimentando conta correntee
        
        cc1.setNumdoc(23456789);
        cc1.setAgenciacc(100);
        cc1.setContacc(34567);
        cc1.setValor(50.00F);
        cc1.setSaldo(c1.saldo);
        cc1.setTipo(1);
        cc1.setData("20/10/2021");
        
        // mostrar utulizado para verificar se todos os registro ocorreram corretamente
        // cc1.mostrarcc();
        
        // atualizar saldo       
        cc1.AtualizarSaldo(); 
        
        // mensagem de registro de ocorrencia
        cc1.RegistrarOcorrencia();
        
       
	}



}
