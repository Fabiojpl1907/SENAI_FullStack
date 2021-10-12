// Traz elementos em formato vetor

document.getElementsByTagName('h1')[1].innerHTML = "Elemento por tag name h1";
document.getElementsByTagName('p')[1].innerHTML = "Elemento por tag name p";
document.getElementsByTagName('div')[2].innerHTML = "Elemento por tag name div";

setTimeout(() => {
document.getElementsByTagName('h1')[0].innerHTML = "Já ";
document.getElementsByTagName('p')[0].innerHTML = "passou";
document.getElementsByTagName('div')[0].innerHTML = "3 segundos";

}, 3000);