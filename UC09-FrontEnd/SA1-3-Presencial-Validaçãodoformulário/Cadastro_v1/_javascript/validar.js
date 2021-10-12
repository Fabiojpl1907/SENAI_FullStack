// validar nome
function validar_nome() {

  $('input[name="nome"]').mask('SSSSSSSSSSSSSSSS');

  let value = document.getElementById("nome").value;

  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Nome não informado');
    document.form.nome.focus();
    return false;
  }
  return true;
}

//Validar CPF
function validar_cpf() {
  
  $('input[name="cpf"]').mask('000.000.000-00');
  
  let value = document.getElementById("cpf").value;
  
  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('CPF não informado');
    document.form.cpf.focus();
    return false;
  }
  return true;
}

//Validar email
function validar_mail() {
  
  $('input[name="mail"]');
  
  let value = document.getElementById("mail").value;
  
  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('E-Mail não informado');
    document.form.mail.focus();
    return false;
  }
  return true;
}

// validar data de nascimento 
function validar_nasc() {
  
  $('input[name="nasc"]');
  
  let value = document.getElementById("nasc").value;
  
  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Data Nascimento não informada');
    document.form.cpf.focus();
    return false;
  }
  return true;
}


//Validar salario
function validar_sal() {
  
  $('input[name="sal"]').mask('#.##0,00');
  
  let value = document.getElementById("sal").value;
  
  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Salário não informado');
    document.form.sal.focus();
    return false;
  }
  return true;
}

//Validar sexo - radio
function validar_sex() {
  
  var isChecked = jQuery("input[name=sex]:checked").val();

  if (!isChecked) {
      alert('Sexo não informado');
      return false;
  }
  return true;
}

//Validar time - select 
function validar_time() {
  
  if ($('#time').val().trim() === '') {
    alert('Time não selecionado');
    return false;
  }
  return true;
}

//Validar plano - radio
function validar_plano() {
  
  var isChecked = jQuery("input[name=plano]:checked").val();

  if (!isChecked) {
      alert('Plano não informado');
      return false;
  }
  return true;
}


//Validar premier - radio
function validar_premier() {

  var isChecked = jQuery("input[name=premiun]:checked").val();

  if (!isChecked) {
      alert('Premier não informado');
      return false;
  }
  return true;

}

//calcular total 
function total() {
  
  var total = parseFloat(document.getElementById("plano").value) + parseFloat(document.getElementById("premiun").value)
  
  total = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
  document.getElementById("total").innerHTML = total
}


//Validação com JSON
//Confere se usuário digitado é igual ao válido do JSON
function confere_user()
{
  let user_json = '{"user": "Usuario"}';
  let v_user = JSON.parse(user_json);
  if(v_user.user == document.form.user.value)
    return true;
  else
    {
    alert("Usuário não confere");
    document.form.user.focus();
    return false;
    }
}


function confere_pwd()
{
  let pwd_json = '{"pwd": "Abc$123"}';
  let v_pwd = JSON.parse(pwd_json);
  if(v_pwd.pwd == document.form.pwd.value)
    return true;
  else
    {
    alert("Senha não confere");
    document.form.pwd.focus();
    return false;
    }
}


function validar_tudo() {
  // se um deles for inválido, retorna false e o form não é submetido
  if (validar_nome() && validar_cpf() && validar_mail() && validar_nasc() && validar_sal()
          && validar_sex() && validar_time() && validar_plano() && validar_premier() && confere_user()
          && confere_pwd())
            {
            document.getElementById('assinar').removeAttribute('disabled'); // ativar botap assinar
            alert("Tudo certo. Proximo passo Assinar");;
          }
        else
          {
          return false;
          }
}

// dia de hoje 
var hoje = new Date();

var dia     = hoje.getDate();           // 1-31
var dia_sem = hoje.getDay();            // 0-6 (zero=domingo)
var mes     = hoje.getMonth();          // 0-11 (zero=janeiro)
var ano4    = hoje.getFullYear();       // 4 dígitos

var dias = new Array(
  'domingo','segunda','terça','quarta','quinta','sexta','sábado'
 );

 var nomemes = new Array(
  'Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'
 );

var dia = dias[hoje.getDay()] + ' :   ' + dia + ' / ' + nomemes[hoje.getMonth()] + ' / ' + ano4;

// document.getElementById("datahoje").value = dia; -> para colocar em buttom
document.getElementById("datahoje").innerHTML= dia;


// temporizador --------------------------------------

setInterval(timer, 10)

var hour = 0;
var minute = 0;
var second = 0;
var millisecond = 0;


function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
   
  if( hour < 10 ){
    document.getElementById('hour').innerText = "0"+ hour;
  }else {
    document.getElementById('hour').innerText = hour;
  };

  if( minute < 10 ){
    document.getElementById('minute').innerText = "0"+ minute;
  }else {
    document.getElementById('minute').innerText = minute;
  };


  if( second < 10 ){
    document.getElementById('second').innerText = "0"+ second;
  }else {
    document.getElementById('second').innerText = second;
  };
  
}
