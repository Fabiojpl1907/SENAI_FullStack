// ao carregar o html o script é executado 

// appendChild ----------------------------------------
// anexar um filho

// Dentro da estrutura da lista
// criar um item da lista <li> e nó de texto

// criar 2 elementos 
var elemento = document.createElement( 'li');
var texto = document.createTextNode('Item da lista adicionado');

// apendar / anexar o elemento "texto" ao elemento <li>
// <li> é o pai
// texto é o filho
elemento.appendChild(texto);

// a variavel "elemento" passa a ter esta estrutura
// <li>
//      ->
//          texto


// recuperar o elemento lista <ul>
// apendar / anexar o elemento <li> ao final da lista
// no momento como a lista esta vazia , o primeiro elemento ser [0]
// lista é tratada como vetor e todo vetor em js inicia em zero

// apontando para a primeira posição da lista
// a partir do nome da Tag
// var lista = document.getElementsByTagName('ul')[0];
var lista = document.getElementsByName('lista1')[0];

lista.appendChild(elemento);

// a variavel "lista" passa a ter esta estrutura
// <ul>
//     ->
//      <li>
//           ->
//              texto


// insetBefore ----------------------------------------
// inserir apos 

// apontar para lista 
var lista2 = document.getElementsByName('lista2')[0];

// apontar para o elelnto <li> dentro do elemento "lista2"
var itens = lista2.getElementsByTagName('li');

// criar novo item a lista
// novo elemento <li> 
var elemento2  = document.createElement('li');

// inserindo texto no elemento <li> criado no comando acima
elemento2.textContent = 'Lista 2 Novo item ';

// inserir o item de lista criado na lsita já existem
// em uma posição definida
// ao inserir entre elementos já existentente, estes são empurrados para baixo
lista2.insertBefore( elemento2, itens[2]);


// removeChild ----------------------------------------
// remover um filho

// remover um item da lista <li> 
lista2.removeChild( itens[3]);