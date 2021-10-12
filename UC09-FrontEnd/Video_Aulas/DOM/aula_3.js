// traz uma arvore de elementos
// traz vetor de elementos
// primeira posicao do vetor é Zero (0) 
// preciso indicar qual posição estou tratando 
document.getElementsByName('Divisao')[0].innerHTML = "<b>Div por nome no JS...</b>";
document.getElementsByName('Divisao')[2].innerHTML = "<b>Texto da div por nome no JS...</b>";

// settimout
setTimeout( function(){
    document.getElementsByName('Divisao')[1].innerHTML = "<h3>Já Passou 3 segundos...</h3>";
},3000);