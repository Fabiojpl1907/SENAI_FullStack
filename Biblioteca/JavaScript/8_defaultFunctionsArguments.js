// garantir que valores dos argumento funcionam corretamente
// mesmo se esquecer um deles

// atribuir um valor padrão , caso nao seja passado
function mult(a = 1, b=1){
return a *b;
};
console.log( mult(3));
console.log( mult( undefined,4));
console.log( mult());

// referenciar a outro valor
function mult(a , b=a){
    return a * b;
    };
    console.log( mult(5));


//  valor definido por funcao
// lazy evaluation
// gerar id randomico 
function rand() {
    return Math.random() * 10;
};

function mult(a , b = rand()){
    return a * b;
    };
    console.log( mult(5));

