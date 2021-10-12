// Criando o : ByteBank

// criar clientes
// nome / cpf / Saldo / agencia
// criar um "template" -> class
// campos ou atributos ou propriedades

class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
};

// cria o cliente e coloca em uma variavel para podermos acessar o que foi criado
// criar um objeto a apartir do "molde""
// criar ou instanciar" 

const Cliente1 = new Cliente();
const Cliente2 = new Cliente();

Cliente1.nome = "Ricardo";
Cliente1.cpf = 33344455567;
Cliente1.agencia = 0001;
Cliente1.saldo = 0;

Cliente2.nome = "Fabio Jose";
Cliente2.cpf = 11144455567;
Cliente2.agencia = 0001;
Cliente2.saldo = 0;

console.log(Cliente1, Cliente2);

// ao alterar a class , todos objetos são alterados 



