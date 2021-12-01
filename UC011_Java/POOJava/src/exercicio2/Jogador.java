package exercicio2;

public class Jogador {
	
	// atributos
	private int id_jogador;
	private String nome;
	private int idade;
	private String posicao;
	private String nacionalidade;
	private double altura;
	private double peso;
	
	// Get e Set 
	// metodo que configura e metodo que retorna atributos 
	public int getId_jogador() {
		return id_jogador;
	}
	public void setId_jogador(int id_jogador) {
		this.id_jogador = id_jogador;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}
	
	public String getPosicao() {
		return posicao;
	}
	public void setPosicao(String posicao) {
		this.posicao = posicao;
	}
	
	public String getNacionalidade() {
		return nacionalidade;
	}
	public void setNacionalidade(String nacionalidade) {
		this.nacionalidade = nacionalidade;
	}
	
	public double getAltura() {
		return altura;
	}
	public void setAltura(double altura) {
		this.altura = altura;
	}
	
	public double getPeso() {
		return peso;
	}
	public void setPeso(double peso) {
		this.peso = peso;
	}
	
	// metodos 
	public void quandoAposenta() {
		
		int tempoRestante = 0;
		
		if( this.posicao == "d") {
			tempoRestante = 40 - this.idade;
		} else if( this.posicao == "m") {
			tempoRestante = 38 - this.idade;
		} else {
			tempoRestante = 35 - this.idade;
		}
		
		System.out.println("Posicao : " + this.posicao);
		System.out.println("Falta "   + tempoRestante +" anos para se aposentar"    );
		
		
	}

}
