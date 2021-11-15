package Banco_XYZ;

public class Cliente {

		// definição das caracteristicas do cliente 
		Integer agencia, conta ;
		String nome, cpf, nascimento, endereco, telefone, senha ;
		static Float saldo;
		
		// métodos para capturar informações 
		
		public void setAgencia(Integer agencia) {
	        this.agencia = agencia;
	    }
		
		public void setConta(Integer conta) {
	        this.conta = conta;
	    }
	
		public void setcpf(String cpf) {
	        this.cpf = cpf;
	    }
		
		public void setName(String nome) {
	        this.nome = nome;
	    }
		
		public void setNasc(String nascimento) {
	        this.nascimento = nascimento;
	    }
	
		public void setEnd(String endereco) {
	        this.endereco = endereco;
	    }
		
		public void setTel(String telefone) {
	        this.telefone = telefone;
	    }
		
		public void setSaldo(Float saldo) {
	        this.saldo = saldo;
	    }
		
		public void setPass(String senha) {
	        this.senha = senha;
	    }

		public void mostrar() {
			System.out.println("Bem vindo ao Banco XYZ\n");
			System.out.println("Agencia : " + this.agencia);
			System.out.println("Conta : " + this.conta);
			System.out.println("CPF : " + this.cpf);
			System.out.println("Nome : " + this.nome);
			System.out.println("Nascimento : " + this.nascimento);
			System.out.println("Endereço : " + this.endereco);
			System.out.println("Telefone : " + this.telefone);
			System.out.println("Saldo: " + this.saldo);			
			System.out.println("Senha : " + this.senha);
		}

}
