// rest operator ...

// permite voce tratar quantos argumentos forem passados 
// indepente de sabar quantos serão 

// uma função que soma tudo que for passado
// independente da qualtidade de argumentos
// transforma os argumentos em uma array
// posso trata com os metodos de array

function sum(...args){

    // aqui utilizado o metodo reduce
    // Chama a função de retorno de chamada especificada para todos os elementos em uma matriz. 
    // O valor de retorno da função de retorno de chamada é o resultado acumulado e 
    // é fornecido como um argumento na próxima chamada para a função de retorno de chamada.

    // aac -> valor acumulado
    // value -> valor da interação atual
    // 0 -> valor inicial
    return args.reduce( (acc,value) => acc + value, 0);
}

console.log( sum(1,2,3,4));


// cria a matriz somente com o restante dos argumento 
const soma = ( a, b, ...rest) => {

}

console.log( soma(1,2,3,4,5,6,7) );

// multiplicação

const mult = ( ...args) => args.reduce(  (acc,value) => acc * value, 1 );
console.log( mult( 1,2,3,4,5));


// Spread Operator ...  ---------------------------
// pega todos os itens de um array e transforma em paramentros para 2ª função
// pode ser usado em string , arrays, objetos literais  , objetos iteraveis

const soma1 = (...rest) => {
    return mult(...rest);
};

console.log( soma1(5,5,5,2,3));

// uso com string
const str = "Digital Inovattion One";

function logArgs(...args) {
    console.log(args);
};

// Transforma a string original em uma matriz
logArgs(...str);

// uso com array
const arr = [1,2,3,4];
logArgs(...arr);

// spread operator para construir arrays
19 min 36 seg