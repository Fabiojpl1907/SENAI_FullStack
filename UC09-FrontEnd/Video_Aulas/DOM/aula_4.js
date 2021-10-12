// traz elementos em formato vetor

document.getElementsByClassName('classe')[1].innerHTML = "<b>Contudo do Inner...</b>";
document.getElementsByClassName('classe')[2].innerText = "<b>Contudo do Inner...</b>";


// set com Arrow Function
// possui uma sintaxe mais curta quando comparada a 
// uma expressão de função

setTimeout(() => {
    document.getElementsByClassName('classe')[0].innerHTML = "<b>Timer = 3 segundos...</b>";
}, 3000);