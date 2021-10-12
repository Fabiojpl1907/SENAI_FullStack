
// Use o index.html existente na pasta javascript

// funcao soma que recebe 2 parametros 
// n1 e n2 
function soma(n1,n2){
return n1 + n2;
}

console.log( soma(5,7));


// trocar parte de uma string
function troca( frase, nome, novoNome){
    return frase.replace( nome, novoNome);

}
console.log( troca("Vai Japão" , "Japão", "Brasil"));

// apresentar solcitação de uma infomação na pagina
// e validar informação ( idade ) 
var idade = prompt("Qual sua idade ?");
console.log(validarIdade(idade));

function validarIdade(idade){

    if( idade > 18 ){
        validar = true;
    }else{
        validar = false;
    }

    return validar
}



// Inserir um elemento dentro da pagina HTML
function clikou(){

    // alert("Obrigado por clicar");
    // posso inserir qualuer elemento, inclusive codigos HTML
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";

}

// abrir outra pagina
// ao clicar sobre um elemento na pagina HTML
function redirecionar(){
    window.open("https://www.uol.com.br/");
    window.location.href = "https://g1.globo.com/";
}

//onmouse over  
// on mouse out
function trocar(elemento){
    //document.getElementById("mousemover").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML ="Obrigado por passar o mouse"

};

function voltar(elemento){
    // document.getElementById("mousemover").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML ="Passe o mouse aqui"
 };

 // funcao a ser carregada quando o body é carregado
 function load(){
    alert("Página Carregada")
 };

 // coletar valor conforme o usuário faz a seleção
 function change(elemento){
     console.log(elemento.value); // pega o valor do elemento
     alert(elemento.value);
 };


//  exercicio 1
//  Você precisa criar uma tela na qual possua uma espécie de vitrine com vários objetos, 
//  cada objeto é um jogo de tabuleiro. A imagem do objeto é a capa da embalagem do jogo. 
//  Ao passar o mouse, a pessoa consegue ver o verso da embalagem, 
//  mas ao tirar o mouse volta para a capa da embalagem. 
//  Ao clicar, a pessoa pode ver fotos do conteúdo do jogo. 
//  Sendo assim, qual opção abaixo é mais adequada para o desenvolvimento da vitrine?

// solução
// <button id="eldritch_horror" onclick="detalhes(this)" onmouseover="mousesobre(this)" onmouseout="mousefora(this)">Eldritch Horror</button>

// Exercicio 2
// Você está programando a tela de um jogo. 
// Existem 3 opções de personagens para você escolher e eles são de raças diferentes, 
// sendo um humano, um elfo e um orc. Sempre que você selecionar um personagem, 
// uma tag <p> deve escrever os poderes específicos de cada raça. 
// Sendo assim, avalie as alternativas abaixo e selecione a mais coerente para essa funcionalidade:

// Solução
// <select onchange="mostrarPoderes(this)"><option value="Humano"></option><option value="Elfo"></option><option value="Orc"></option></select>












\