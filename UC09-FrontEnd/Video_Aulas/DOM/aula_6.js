// Query selector
// Mais generico
// pode selecionar por ID, class , name 
// so mudar o elemento

// Query selector traz o elemento 
// Query selector all traz array

// Query Selector -------------------------------------------
// Nota : getelement é 2 x mais rápido que QuerySelector

// com ID
document.querySelector('#QS_I5').innerHTML = "<b>Conteudo da ID </b>";

document.querySelector('#QS_I9').innerHTML = "<b>Conteudo da ID na div</b>";

// com tag
// pega a primeira ocorrencia da tag
document.querySelector('p').innerHTML = "<b>Conteudo da tag p </b>";

document.querySelector('div').innerHTML = "<b>Conteudo da tag div</b>";

// com classe
document.querySelector('.QS_C3').innerHTML = "<b>Conteudo da classe 3</b>";

document.querySelector('.QS_C9').innerText = "<b>Conteudo da classe 9</b>";

// Query Selector All-------------------------------------------
document.querySelectorAll('#setor')[1].innerHTML = "<b>Query Selector All por ID...</b>";
document.querySelectorAll('.secao')[2].innerHTML = "<b>Query Selector All por classe ...</b>";
