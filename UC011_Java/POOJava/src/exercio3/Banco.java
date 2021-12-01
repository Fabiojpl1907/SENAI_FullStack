package exercio3;

public class Banco {

	public static void main(String[] args) {
		
		ContaBancaria contaA = new  ContaBancaria( 123, "Fábio" , 100.50);
		ContaBancaria contaB = new  ContaBancaria( 456, "Elizabeth" , 1000);
		
		contaB.saca(500000);
	
	System.out.printf("Titular : " +  contaB.getTitular() +  "   R$  " +  contaB.getSaldo() + "\n");
		
		contaA.deposita(50);
		
		System.out.println( "R$  " + contaA.getSaldo() );
		
		contaB.transfere( 100 , contaA);
		
		System.out.println( "Saldo pós transferencia" );
		
		System.out.printf("Titular : " +  contaB.getTitular() +  "   R$  " +  contaB.getSaldo() + "\n");
		System.out.printf("Titular : " +  contaA.getTitular() +  "   R$  " +  contaA.getSaldo() + "\n");
	}

}
