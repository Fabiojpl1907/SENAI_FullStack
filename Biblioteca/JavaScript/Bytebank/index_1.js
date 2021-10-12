// Criando o : ByteBank

// criar clientes
// nome / cpf / Saldo / agencia
// criar um "template" -> class
// campos ou atributos ou propriedades

class Cliente{
    nome;
    cpf;
    rg;
};

class ContaCorrente{
    agencia;
    // fazendo saldo ficar privado.
    // somente visto dentro da classe
    #saldo = 0;

    // metodo de saque
    // this representa a conta sobre a qual estou atuando
    
    sacar(valorSaque){
        if( valorSaque > 0){
            if(this.#saldo >= valorSaque ) this.#saldo -= valorSaque;
            console.log(this.#saldo);
        }
    }

    depositar(valor){
        if( valor > 0){
            this.#saldo += valor;
            console.log(this.#saldo);
        }
    }
}

// cria o cliente e coloca em uma variavel para podermos acessar o que foi criado
// criar um objeto a apartir do "molde""
// criar ou instanciar" 

const Cliente1 = new Cliente();
Cliente1.nome = "Ricardo";
Cliente1.cpf = 33344455567;

const Cliente2 = new Cliente();
Cliente2.nome = "Fabio Jose";
Cliente2.cpf = 11144455567;


// criar contas correntes
const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;

ContaCorrenteRicardo.sacar(50)
ContaCorrenteRicardo.depositar(100)

// console.log(ContaCorrenteRicardo.#saldo);





