// site util 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array


const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

console.log(listaDeDestinos);

// adicionar elemento na listaDeDestinos
listaDeDestinos.push('Curitiba')

console.log(listaDeDestinos);

// remover elemento de um array
// indicar a partir de qual elemento
// indicar quantos elemento a retirar
// do elemto 1 e so um elemento
// lembrando que array inica em elemento Zero
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

// tirar o ultimo elemto da lista
listaDeDestinos.pop()
console.log(listaDeDestinos);

// exibir um elemento especifico do array
console.log(listaDeDestinos[0]);

// exibir tamanho da lista
console.log(listaDeDestinos.length);

// inverter a apresentação do array
console.log(listaDeDestinos.reverse());

// exibir em formato texto
console.log(listaDeDestinos.toString());

// exibir determindo elemento da string
console.log(listaDeDestinos.toString()[0]);

// exibir em formato texto com o separdaor que quero
console.log(listaDeDestinos.join(" / "));

console.log("Dicionario-----------------------");

var fruta = { nome:"maçã" , cor:"vermelha"};
console.log(fruta.cor);

var frutas = [{nome:"maçã" , cor:"vermelha"}, { nome:"pera" , cor:"amarela"}  ];
console.log(frutas[1].nome);


// 1. 
// Analise o código abaixo e selecione a alternativa que possui 
// as formas possíveis de se remover o item "acerola" alterando o array "frutas":

// const frutas = ["melancia", "laranja", "acerola"];

// II  - frutas.pop();
// III - frutas.splice(2, 1);


// 2.
// Assinale a alternativa que possui o valor retornado pela função flat:
// const frutas = ["amora", ["laranja", ["melancia"], "acerola"]];
// console.log(frutas.flat(2));

// ["amora", "laranja", "melancia", "acerola"]
