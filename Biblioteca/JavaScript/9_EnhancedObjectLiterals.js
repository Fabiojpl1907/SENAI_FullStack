// maneira classica de declarar objetos literais
// atribuir valores para propridades e métodos

var obj = {
    prop1: "Teste"
};

// outra maneira -mnreferenciado uma variavel 
var prop1 = "Teste";

var obj = {
    prop1: prop1
};

console.log(obj);

//atalho
var obj = {
    prop1
};
console.log(obj);

var obj ={
sum(a, b){
    return a + b;
}
};
console.log(obj);

// antes
var propName = "Teste";
var objeto = {};
objeto[propName] = "Valor"
console.log(objeto);

// agora 
var propName = "Teste";
var objeto = {
    [propName]: "Valor"
};
console.log(objeto);