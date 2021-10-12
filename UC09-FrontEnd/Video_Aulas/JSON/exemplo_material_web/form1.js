
var bt;
var div;

var form_init = () => {
  bt = document.getElementById("create_form_bt");
  div = document.getElementById("custom_form_div");

  bt.onclick = create_form;
}


//

var create_form = () => {
  var form = document.getElementById("custom_form");
  if (!form) {
    var form = document.createElement("form");
    form.setAttribute("id", "custom_form");
    div.appendChild(form);
  }
  else {
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
  }

  append_br(form);

  append_span(form, "Nome:&nbsp;");
  append_text_input(form, "name", 50, 50);
  append_br(form, 2);

  append_span(form, "Apelido:&nbsp;");
  append_text_input(form, "nick", 20, 20);

  append_span(form, "&nbsp;&nbsp;Modalidade:&nbsp;");
  append_select(form, "sport", [
    {value:1, text:"Natação"},
    {value:2, text:"Judô"},
    {value:3, text:"Ballet"},
    {value:4, text:"Futsal"},
  ], 4);
  append_br(form, 2);

  var fs1 = append_fieldset(form, "Disponibilidade:");
  append_checkbox(fs1, "disp_1", "Manhãs");
  append_br(fs1);
  append_checkbox(fs1, "disp_2", "Tardes");
  append_br(fs1);
  append_checkbox(fs1, "disp_3", "Noite");
  append_br(form);

  var fs2 = append_fieldset(form, "Gênero:");
  append_radio(fs2, "gender", 1, "Masculino");
  append_radio(fs2, "gender", 2, "Feminino");
  append_br(form);


  var fs3 = append_fieldset(form, "Curriculum Vitae:");
  append_textarea(fs3, "resume", 60,5);

  append_br(form);
  append_submit(form, "Enviar", verify_form);
}
     

var verify_form = () => {

	  var obj_form = {
            name: "",
            nick: "",
            sport_id: 0,
            schedule: [],
            gender: 0,
            resume: ""
          }

	

          var el_name = document.getElementById("name");
          if (el_name.value == "")
            return null;
          obj_form.name = el_name.value;

          var el_nick = document.getElementById("nick");
          obj_form.nick = el_nick.value;

          var el_sport = document.getElementById("sport");
          obj_form.sport_id = el_sport.value;

          var el_disp_1 = document.getElementById("disp_1");
          if (el_disp_1)
            obj_form.schedule.push(1);

	 var el_disp_2 = document.getElementById("disp_2");
          if (el_disp_2)
            obj_form.schedule.push(2);

          var el_disp_3 = document.getElementById("disp_3");
          if (el_disp_3)
            obj_form.schedule.push(3);

          if (obj_form.schedule.length ==0)
            return null;

          var el_gender = document.getElementsByName("gender");
          for (var i=0; i< el_gender.length; i++) {
            if (el_gender[i].checked) {
              obj_form.gender = el_gender[i].value;
              break;
            }
          }

          if (obj_form.gender == 0)
            return null;

          var el_resume = document.getElementById("resume");
          if (el_resume.value == "")
            return null;
          obj_form.resume = el_resume.value;

          console.log(obj_form);

          var json = JSON.stringify(obj_form);
          console.log(json);

	  document.write("<h1>Dados em Json</h1>");
	  document.write(json);	

          return json;
         }


