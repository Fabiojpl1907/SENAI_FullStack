// Funcao anonima 
var log = function(value){
    console.log(value);
}

log("teste");

// return obrigatorio
var sum = function(a,b){
    return a+b;
}
console.log( sum(5,6));

// Arrow function - funcao anonima - com return explicito
var soma = (a,b) => a + b;
console.log(soma(2,4));

// se tiver somente 1 argumento posso omitir o paretenses
var div = a => a / 2;
console.log(div(4));

// retorna objetos implicitos
var createObj = () => ( { test: 123});
console.log(createObj());

// crear objeto usando a funcao constutora
// var car = () => {
//     this.foo = "bar"
// };
// console.log( new car() );

// hoisting nao funciona com arrow function

var obj = {

    showContext: function showContext() {
        // this objet

        setTimeout( () => {
            this.log( "apos 100ms");
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext();

