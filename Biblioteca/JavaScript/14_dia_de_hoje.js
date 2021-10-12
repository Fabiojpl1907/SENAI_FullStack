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
