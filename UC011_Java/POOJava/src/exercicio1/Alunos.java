package exercicio1;

public class Alunos {
	
	// atributos 
	private int matricula  = 123;
	private String nome = "Jose"; 
	private double nota1;
	private double nota2;
	
	
	// metodo
	public void media( double n1 , double n2 ) {
		
	}
	
	public void media2( ) {
		
		double media;
		
		media = ( this.nota1 + this.nota2)/2;
		System.out.println("Media é :" + media);
		
			
		}
	
	// get e Set
	
	public void setMatricula(int matricula) {
			this.matricula = matricula;
		}
	
	
		public void setNome(String nome) {
			this.nome = nome;
		}
	
	
		public void setNota1(double nota1) {
			this.nota1 = nota1;
		}
	
	
		public void setNota2(double nota2) {
			this.nota2 = nota2;
		}





}
