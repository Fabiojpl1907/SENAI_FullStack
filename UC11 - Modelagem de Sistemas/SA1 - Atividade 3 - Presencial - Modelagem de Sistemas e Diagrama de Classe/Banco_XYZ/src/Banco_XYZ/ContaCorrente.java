package Banco_XYZ;

public class ContaCorrente {
	
	Integer numero_doc_cc, agencia_cc,conta_cc,tipo_cc; 
	Float valor_cc, saldo_cc;
	String data_ocorrencia_cc; 
	
	
	// metodos para capturar as informações
	
	public void setNumdoc(Integer numero_doc) {
        this.numero_doc_cc = numero_doc;
    }
	
	public void setAgenciacc(Integer agencia) {
        this.agencia_cc = agencia;
    }

	public void setContacc(Integer conta) {
        this.conta_cc = conta;
    }

	public void setValor(Float valor) {
        this.valor_cc = valor;
    }
	
	public void setSaldo(Float saldo_cc) {
        this.saldo_cc = saldo_cc;
    }
	
	public void setTipo(Integer tipo) {
        this.tipo_cc = tipo;
    }
	
	public void setData(String data_ocorrencia) {
        this.data_ocorrencia_cc = data_ocorrencia;
    }

	public void AtualizarSaldo() {
		
		this.saldo_cc = this.saldo_cc + this.valor_cc;
		System.out.println("\nMovimento tipo : " + tipo_cc + " no valor de : " + valor_cc);
		System.out.println("Saldo Conta Corrente Atualizado : " + saldo_cc);
		// linha abaixo atualiza saldo do cadastro de cliente
		Cliente.saldo = saldo_cc;
		System.out.println("\nSaldo Cliente Atualizado : " + Cliente.saldo);
		
	}	
		
	public void RegistrarOcorrencia(){
		System.out.println("\nOcorrência Registrada em " + data_ocorrencia_cc);
	}	
	
	// metodo criadoa para testar se tudo esta funcionado e os valores 
	// estão sendo tratados como esperado 
	public void mostrarcc() {
		System.out.println("\nDados de sua conta\n");
		System.out.println("Agencia : " + agencia_cc);
		System.out.println("Conta : " + conta_cc);
		System.out.println("Documento : " + numero_doc_cc);
		System.out.println("Valor  : " + valor_cc);
		System.out.println("Transação tipo : " + tipo_cc);
		System.out.println("Saldo Atual : " + saldo_cc);
		System.out.println("Data  : " + data_ocorrencia_cc);
	}	
	
}
