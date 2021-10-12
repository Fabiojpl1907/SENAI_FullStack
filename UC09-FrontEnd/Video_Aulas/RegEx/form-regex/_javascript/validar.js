function validarFormulario(){

    // A função retornará verdadeiro somente se  ambos os campos 
    // forem preenchido corretamente 
    return validarCpf() && validarTelefone();
    return

}

function validarCpf(){

    // capturar na variavel o cpf digitado
    let cpf = document.querySelector('#cpf').value;
    
    // valida se a entrada executada é condizente com os valores e formato esperados 
    // criar variavel que possue o formato regex desejado
    let regex = new RegExp("[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[.]?[\/-]?[0-9]{2}");
    
    // testar se o cpf inserido cumpre o formato solicitao
    if(!regex.test(cpf)){
        alert( 'CPF em formato inválido');

        // da foco no elemento 
        //O elemento em foco é o elemento que receberá o teclado e eventos semelhantes por padrão
        document.querySelector('#cpf').focus();
        return false;
    }
    return true;
};

function validarTelefone(){

    let tel = document.querySelector('#telefone').value;
    // valida se a entrada executada é condizente com os valores e formato esperados 
    let regex = /[(][0-9]{2}[)][0-9]{5}[0-9]{4}/g;
    
    if(!regex.test(tel)){
            alert('Telefone em formato inválido');
            document.querySelector('#telefone').focus();
            return false;
    }

   return true;

};