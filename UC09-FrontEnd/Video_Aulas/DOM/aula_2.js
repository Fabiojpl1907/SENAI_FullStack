// obter elemento  por identificador -----------------------
// Sera inserido o conteudo na pagina HTML
// dentro do elemento identificado pelo "id"
// innerHTML posso colocar tags HTML
document.getElementById('aula1').innerHTML = "<b>Eu sou o conteudo 1 HTML do JS..</b>";
document.getElementById('aula2').innerHTML = "<b>Eu sou o conteudo 2 HTML do JS..</b>";
document.getElementById('aula3').innerHTML = "<b>Eu sou o conteudo 3 HTML do JS..</b>";

// para colocar texto puro -----------------------
// trata tags HTML como texto
document.getElementById('aula4').innerText = "Playlist Manipulação de DOM - Tutor Arthur Playlist Manipulação de DOM - Tutor Arthur"


// ajusta um tempo para fazer algo -----------------------

setTimeout( function() {
    document.getElementById('aula1').innerHTML = "<b>Passou 3 segundos...</b>";
}, 3000)

// setTimeout( o que ele faz , daqui a quando milisegundos  ) 

//funcao de call back : Uma função callback é uma função passada 
// a outra função como argumento, que é então invocado dentro da f
// unção externa para completar algum tipo de rotina ou ação.
// no caso funcao principal setTimeout() , função callback function()

// setTimeout invoca a função de callback uma única vez, após transcorrido o tempo determinado.


// setInterval
// invoca a função continuamente a cada intervalo de tempo definido

setInterval( function () { 
    document.getElementById('aula1').innerHTML = "<br><b>Passou 5 segundos...</b><br>";
} , 5000);

// O método setInterval invoca a função de callback indefinidamente, enquanto o timer estiver definido.

// Para interromper a ação de um método setInterval, ele deve ser previamente associado a uma variável, 
// e esta deverá ser passada como parâmetro para o método clearInterval, conforme o exemplo:

var cont = 0;
var timer = setInterval( function () { mostraContagem(); } , 5000);

function mostraContagem() {
  cont++;
  document.write('Contagem em '+cont');
  if (cont >= 5)
    clearInterval(timer);
}