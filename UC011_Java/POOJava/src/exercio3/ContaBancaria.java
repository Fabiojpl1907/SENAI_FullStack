package exercio3;

public class ContaBancaria {
	
	
	private int numeroConta;
	private String titular;
	private double saldo;
	
	
	// construtor 
	// inicializar valores 
	
	public ContaBancaria( int n,String  t ,double s ) {
		
		this.numeroConta = n;
		this.titular = t;
		this.saldo = s;
		
	}
	
		
	public double getSaldo() {
		return this.saldo;
	}
	
	
	public String getTitular() {
		return this.titular;
	}
	
	
	public void saca( double valor) {
		
		if( this.saldo >= valor ) { 
			
			this.saldo -=  valor; 
			
		} else {
			System.out.println("Sem saldo suficiente para o saque");
		}

		
	}
	
	public void deposita( double valor) {
		
		this.saldo +=  valor; 
		
	}
	
	public void transfere( double valor, ContaBancaria  contaDestino ) {
		
		this.saca(valor);
		contaDestino.deposita(valor);
		
	}

}
