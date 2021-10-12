function enquanto(){


    vetor = new Array(8)

    for(var i=1; i<=8; i++){
        
        vetor[i] = document.getElementById("id"+ i).value;
     }


    var texto1 = "<table border=1><tr><td>Nome:</td><td>" + (vetor[1])+ "</td><tr><td>Apelido:</td><td> " + (vetor[2])+ "</td><tr><td>Dia Nascimento:</td><td> " + (vetor[3])+ "</td><tr><td>Mes Nascimento:</td><td> " + (vetor[4])+ "</td><tr><td>Ano Nascimento:</td><td> " + (vetor[5])+ "</td><tr><td>CPF:</td><td> " + (vetor[6])+ "</td><tr><td>Time do Coracao :</td><td> "  + (vetor[7])+ "</td><tr><td>Esportes de Interesse:</td><td> " + (vetor[8]) +"</td></tr></table>";

    var texto2 ="<br><br>"+ "Agradecemos o preenchimento de nosso formulário" 

    document.getElementById("demo1").innerHTML = texto1; 
    document.getElementById("grato").innerHTML = texto2; 
}