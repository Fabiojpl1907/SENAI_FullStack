console.log("Trabalhando com variaveis");

// JS é case sensitive

// idade = 29;   
// escopo global

// boa pratica - sempre declarar a variavel
const idade ;   // declara variavel
idade = 29;     // atribui valor a variavel 
   


const nome = "Fabio";   // declara constante e atribui valor 
let ano = 2021;         // declara uma variavel  

ano = ano + 1  // re-atribuir 


// nao fazer 
// mes = "Janeiro";

// Operacoes aritmeticas----------------------------------------

console.log("Operacoes aritmeticas");

console.log( (10+8)*2 );

// concatenar
console.log("ano : " + 2020);


// Conversão de tipos----------------------------------------

console.log("Conversão de Tipos");


console.log("ano : " + 2020);

// conversao

    // o "+" concatena ou soma , vai depender do contexto

    //concatena
    console.log("2" + "2");

    //soma
    console.log(parseInt("2") + parseInt("2"));


// interpreta como numero
// fracamente tipado
console.log("10" / "3");
console.log("Dez" / "3"); // retorna NaN - not a number
