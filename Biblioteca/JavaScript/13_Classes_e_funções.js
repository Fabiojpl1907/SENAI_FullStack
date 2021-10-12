// ES6 - Classes


// criar um objeto : Livro

const Livro = {
nome: 'React Native',
editora: 'Casa do Código',
paginas: 185,
anunciar: function() {
    console.log(`Alura indica o livro ${this.nome} !`);
}
}

Livro.anunciar();

// criar uma estrurura para gear varios livros 
// cada um com suas caracteristicas 

// em formato de função 
// antes do ES6
// função construtora de um objeto

const Livro1 = function(nome, editora, paginas){
    gNome = nome,
    gEditora= editora,
    gPaginas = paginas

    this.getNome = function(){
        return gNome;
    }

    this.getEditora = function(){
        return gEditora;
    }

    this.getPaginas = function(){
        return gPaginas;
    }
}
 
    const GraphQL = new Livro1( 'GraphQL', 'Casa do Codigo', 143);
    console.log( GraphQL.getNome());
    console.log( GraphQL.getEditora());
    console.log( GraphQL.getPaginas());

    // por baixo dos panos 

    // quando faço
    var rua = 'Ruas da Felicidade';

        // O que o javascriot faz , é criar (instanciar) um novo 
        // objeto do tipo string 
        // o qual ira herdar todas as caracteristicas/metodos de um 
        // objeto string
        // -> var rua = new String(nome); 
    
    console.log(`Tamanho da String : ${rua.length}`);
    console.log(`Valor da String : ${rua.toString()}`);


    // com ES6
    // prototipo - como as coisas funcional em java script
    // uso de classes
    // classes são estruturas que usamos para criar objetos
class LivroC {
    constructor(nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    // criar metodos que irao definir os comportamentos do objeto

    anunciarTitulo(){
        console.log(`Título: ${this.nome}`);
    }

    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} 
                      e tem ${this.paginas} páginas`);
    }
}

var Nodejs = new LivroC( "Primeiros passos NOdesjs", "Casa do Código", 100);
console.log(Nodejs);
Nodejs.anunciarTitulo();
Nodejs.descreverTitulo();


// classes não são içadas ( hoisted)
// primeiro declara e depois chama
// outras linguagens tem classes  

// function nomeadas são hoisting
// posso primeiro chamar 
// e depois desenvolver as funçãos 


// heranças

class LivroColecao extends LivroC {
    constructor( nome, nomeColecao){
        // quero herdar somente o nome 
        super(nome);
        this.nomeColecao = nomeColecao;
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`);
    }
};

var Logica = new LivroColecao("Lógica de programacao", "Comece a programar");
console.log( Logica);
console.log(`\n`);
Logica.descreverColecao();
