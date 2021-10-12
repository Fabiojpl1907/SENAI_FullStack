// hasAttribute, verifica se tem um atributo. 
// se o elemento selecionado tem uma class / id / etc
// se sim retorna "True" se não retorna false

document.write(
    document.getElementById('iqualquer').hasAttribute('id')
);

document.write(
    document.querySelector('.dqualquer').hasAttribute('id')
);


// getAttribute, pegamos o atributo atual 
document.write(document.getElementById('iqualquer').getAttribute('class'));

// outro formato
// coloco o elemento que tenha o id xxx na variavel 
var atributo = document.getElementById('iqualquer');
// verifico o atributo class do elemento na variavel
document.write( atributo.getAttribute('class'));


// setAttribute, altera ou aplica um atributo
// selecionando o elemento
var atributo = document.getElementById('iqualquer');

// aplicando estilo
// preciso informar o que estou ajustando , no caso style
// e o que estou ajustando 
atributo.setAttribute('style' , 'background: #ccc');

