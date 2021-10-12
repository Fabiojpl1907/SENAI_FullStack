// site util 

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);


const idadeComprador = 15;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

if( idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);  // posso remover pacote vendido
}else{
    console.log("Comprador menor de idade. Não posso vender ");
}


// operadores logico
// >  maior
// <  menor
// <= maior ou igual
// >= menor ou igual
// == igualdade

// if encadeado
console.log("Ifs encadeado --------------------------------");

const estaAcompanhado = true;

if( idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);  // posso remover pacote vendido
}else if(estaAcompanhado){
        console.log("Comprador esta acompanhado");
        listaDeDestinos.splice(1,1);  // posso remover pacote vendido
    }else{ 
    console.log("Comprador menor de idade. Não posso vender ");
}


// operador logico encadeado
console.log("operador encadeado \n--------------------------------");

// operadores logicos
// || ou
// && e


if( idadeComprador >= 18  || estaAcompanhado ){
    console.log("Comprador maior de idade ou acompanhado");
    listaDeDestinos.splice(1,1);  // posso remover pacote vendido
}else{ 
    console.log("Comprador menor de idade. Não posso vender ");
}