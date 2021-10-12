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

// imprime em tela 2 x quebra de linha
append_br(form, 2);

// entrada de apelido
append_span(form, "Apelido:&nbsp;");
append_text_input(form, "nick", 2, 20);

// data de nascimento
// Dia de nascimento
append_br(form, 2);
append_span(form, "Dia de Nascimento:&nbsp;");
append_text_input(form, "day", 2, 2);

// Mes de nascimento
append_br(form, 2);
append_span(form, "Mês de Nascimento:&nbsp;");
append_text_input(form, "month", 2, 2);

// Ano de nascimento
append_br(form, 2);
append_span(form, "Ano de Nascimento:&nbsp;");
append_text_input(form, "year", 4, 4);

// CPF
append_br(form, 2);
append_span(form, "CPF:&nbsp;");
append_text_input(form, "cpf", 14, 14);

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

// botão de enviar
append_br(form,3);
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
 
    
var verify_form = () => {

    if( validos()==false)
    {
        alert("Dados incompletos");
        return;
    }

    var obj_form = {
        name: "",
        nickname: "",
        cpf: "",
        birth_date: "",
        team_id: "",		
        sport: []  
    }

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

