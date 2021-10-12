// Formulario a ser preenchido

var bt;
var div;

// Funçao que cria formulario na tela------------------------
// programacao funcional
var form_init = () => {

// resgastando elemntos do HTML
// obotão pelo id="craete_for_bt"
// o div id=" custom_form_div"
bt = document.getElementById("create_form_bt");
div = document.getElementById("custom_form_div");

// dando ação de click para o botão
bt.onclick = create_form;
}

// criação automática da tag FORM, que o formulário do HTML em javascript
var create_form = () => {
// Busca o id="custom form"  não existendo ( não existe ), ele cria     
var form = document.getElementById("custom_form");
if (!form) {
var form = document.createElement("form");
// pode sar imagem setAttribute("src", "./vvvv.jpg")
form.setAttribute("id", "custom_form");
// vai jogar o formulario dentro da div "custom_form_div" do html   
div.appendChild(form);
}
// caso exista remove item por item 
else {
while (form.firstChild) { 
form.removeChild(form.firstChild);
}
}



// Montado questões ---------------------------------------------------
// imprime em tela quebra de linha
append_br(form); 

// imprime em HTML
//  &nbsp imprime "espaço em branco"
append_span(form, "Nome:&nbsp;");

// entrada de nome
// imptime uma caixa de input tipo texto
// minimo 10 caracteres maximo 80
append_text_input(form, "name", 80, 80);

// entrada de apelido
append_span(form, "&nbsp&nbsp&nbspApelido:&nbsp;");
append_text_input(form, "nick", 2, 20);

// CPF
append_br(form, 2);
append_span(form, "CPF:&nbsp;");
append_text_input(form, "cpf", 14, 14);

// data de nascimento
// Dia de nascimento
append_br(form, 2);
append_span(form, "Data de Nascimento:&nbsp &nbsp;");
append_span(form, "&nbsp Dia:&nbsp;");
append_text_input(form, "day", 2, 2);

// Mes de nascimento
append_span(form, " &nbsp&nbspMês:&nbsp;");
append_text_input(form, "month", 2, 2);

// Ano de nascimento
append_span(form, "&nbsp &nbspAno:&nbsp;");
append_text_input(form, "year", 4, 4);


// Time do coração
// usa lista -> select
// opção inicial sera o valor apresentado em : ], 1);
append_br(form, 2);
append_span(form, "&nbsp;&nbsp;Time do Coraçao:&nbsp;");
append_select(form, "team_id", [
    {value:1, text:"São Paulo"},
    {value:2, text:"Corithians"},
    {value:3, text:"Palmeiras"},
    {value:4, text:"Milan"},
], 1);

// Esporte de interesse
// Escolher vários : Checkbox
append_br(form, 2);
var fs1 = append_fieldset(form, "Esportes de Interesse:");
    append_checkbox(fs1, "sport_1", "Futebol &nbsp &nbsp");

    append_checkbox(fs1, "sport_2", "Vôley &nbsp&nbsp");

    append_checkbox(fs1, "sport_3", "Basquete &nbsp&nbsp");

    append_checkbox(fs1, "sport_4", "Futsal &nbsp&nbsp");

    append_checkbox(fs1, "sport_5", "Automobilismo &nbsp&nbsp");

    append_checkbox(fs1, "sport_6", "Artes Marciais &nbsp&nbsp");

    append_checkbox(fs1, "sport_7", "Natação");

    append_br(form);

append_br(form,1);
// Botão de enviar dados
// antes de enviar testa se os daos dos formularios foram preenchidos  
append_submit(form, "Enviar", verify_form);

}
// Montado questões Fim ---------------------------------------------------


// função que verifica se os campos estão preenchidos
var validos = () => {
    if(document.getElementById("name").value=="") return false;
    if(document.getElementById("nick").value=="") return false;
    if(document.getElementById("day").value=="") return false;
    if(document.getElementById("month").value=="")	return false;
    if(document.getElementById("year").value=="")	return false;
    if(document.getElementById("cpf").value=="")	return false;
    if(document.getElementById("team_id").value=="")	return false;   
}     
 
// emite menssagem se falta campo a ser preenchido    
// estrutura dados para o JSON
var verify_form = () => {

    if( validos()==false)
    {
        alert("Dados incompletos");
        return;
    }

    // criar objeto JSON que contera os dados 
    var obj_form = {
        name: "",
        nickname: "",
        cpf: "",
        birth_date: "",
        team_id: "",		
        sport: []  
    }

    // Preencher objeto JSON com os dados colhidos no formulário
    // nome
    var campo_nome = document.getElementById("name");
    if (campo_nome.value == "")
    return null;
    obj_form.name = campo_nome.value;

    // apelido
    var campo_apelido = document.getElementById("nickname");
    obj_form.nickname = campo_apelido.value;

    // cpf
    var campo_cpf = document.getElementById("cpf");
    obj_form.cpf = campo_cpf.value;

    // data nascimento
    var campo_dia = document.getElementById("day");
    var campo_mes = document.getElementById("month");
    var campo_ano = document.getElementById("year");

    // construcao da informação data de nascimento
    obj_form.birth_date =  campo_ano.value +"/" + campo_mes.value + "/" + campo_dia.value ;

    // Time do coração
    var campo_team_id = document.getElementById("team_id");
    obj_form.team_id = campo_team_id.value;

   
    // Esportes selecionados
    var campo_disp_1 = document.getElementById("sport_1").checked;
    if (campo_disp_1)
    // populando array sport: []
    obj_form.sport.push(1);

    var campo_disp_2 = document.getElementById("sport_2").checked;
    if (campo_disp_2)
    obj_form.sport.push(2);

    var campo_disp_3 = document.getElementById("sport_3").checked;
    if (campo_disp_3)
    obj_form.sport.push(3);

    var campo_disp_4 = document.getElementById("sport_4").checked;
    if (campo_disp_4)
    obj_form.sport.push(4);

    var campo_disp_5 = document.getElementById("sport_5").checked;
    if (campo_disp_5)
    obj_form.sport.push(5);

    var campo_disp_6 = document.getElementById("sport_6").checked;
    if (campo_disp_6)
    obj_form.sport.push(6);

    var campo_disp_7 = document.getElementById("sport_7").checked;
    if (campo_disp_7)
    obj_form.sport.push(7);
        
            
    // enviar Jason
    console.log(obj_form);

    var json = JSON.stringify(obj_form);
    console.log(json);

    document.write("<h1>Dados em Json</h1>");
    document.write(json);	

    return json;
}

