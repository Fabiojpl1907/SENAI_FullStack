package exercicio2;

public class Aposentar {

	public static void main(String[] args) {
		
		
		Jogador jogador = new Jogador();
		
		jogador.setNome("Nobody");
		jogador.setPosicao("a");
		jogador.setIdade(29);
		
		jogador.getNome();
		
		System.out.println(jogador.getNome());
		
		jogador.quandoAposenta();
		

	}

}
