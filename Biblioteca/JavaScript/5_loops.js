console.log(`Trabalhando com Loops`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador"

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

// substituir os ifs por uma atribuição de variavel 
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

// loop while -----------------------------
// fazer enquanto estiver dentro da condição

let contador = 0; 
let destinoExiste = false;
while( contador <3){
    
    if( listaDeDestinos[contador]  == destino ){
        console.log("Destino disponível");
        destinoExiste = true
        break;   // sai do laço
    }

   contador++;   /// contador += 1;

};

console.log("Destino existe: ", destinoExiste);

// loop for --------------------------------------------------------------
// for(   inicia contador  ; condição de loop ; comando ao final do loop )

for( let i = 0 ; i < 3 ; i++){
    
    if( listaDeDestinos[i]  == destino ){
        console.log("Destino disponível");
        destinoExiste = true
        break;   // sai do laço
    }

};

console.log("Destino existe: ", destinoExiste);



// 1.
// Considerando o exemplo a seguir:
// const filmes = ['Meia-noite em Paris', 'Machete', 'Taxi Driver', 'Matrix']
// Assinale abaixo a estrutura de repetição correta que poderia listar os filmes da lista.

// for(let filme of filmes);

