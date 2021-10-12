
$(document).ready(function(){

    // Não permite entrada de dados diferente da definida na mascara
    // aplica uma mascara de apresentação aos dados entrados
    // Elas irão impedir que o usuário digite algum caractere não estipulado por você.
    
    // 0 -> pemite somente numeros
    // S -> somente letras maiusculas ou minusculas
    
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00)00000-0000');
    $('#dtNasc').mask('00/SSS/0000')
});


// Com jqery + jquery mask 
// as funções de validação abaixo 
// não são necessárias 

// function validarFormulario(){

//     return validarCpf() && validarTelefone();
//     return

// }

// function validarCpf(){


//     let cpf = document.querySelector('#cpf').value;
//     // valida se a entrada executada é condizente com os valores e formato esperados 
//     let regex = new RegExp("[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[.]?[\/-]?[0-9]{2}");
    
//     if(!regex.test(cpf)){
//         alert( 'CPF em formato inválido');

//         document.querySelector('#cpf').focus();
//         return false;
//     }
//     return true;
// };

// function validarTelefone(){

//     let tel = document.querySelector('#telefone').value;
//     // valida se a entrada executada é condizente com os valores esperados 
//     let regex = /[(]?[0]?[0-9]{2}[)]?[0-9]{5}[-]?[0-9]{4}/;
    
    
//     if(!regex.test(tel)){
//             alert('Telefone em formato inválido');
//             document.querySelector('#telefone').focus();
//             return false;
//     }

//    return true;

//
