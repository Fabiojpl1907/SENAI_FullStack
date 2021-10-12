// criar objeto json
// usar crase , não é apostrofe
// virgula separa objetos
let json = ` {

    "funcionario":[
        {
            "nome":"Fabio José",
            "idade": 61,
            "telefone":"99999-9999"
        }, 
        {
            "nome":"Elizabeth",
            "idade": 40,
            "telefone":"98888-9999"
        },
        {
            "nome":"Edson",
            "idade": 51,
            "telefone":"97777-9999"
        },
        {
            "nome":"Raphael",
            "idade": 31,
            "telefone":"96666-9999"
        }
    ]

}`;

// converter o JSON em um objeto javascript
// para trabalhar no codigo java
let obj_funcionario = JSON.parse(json); 

// linha para veitifcar no browse se o objeto foi criado corretamente
// no Chrome ver em F12 > console
console.log(obj_funcionario);

// laço para ler e preenchaer todos os funcionarios 

for( let i=0 ; obj_funcionario.funcionario.length; i++){
// criar estrutura da tabela
// Criar linha da tabela
var linha = document.createElement("tr");

// criar celulas/colunas da tabela 
var cel_nome = document.createElement("td");
var cel_idade = document.createElement("td");
var cel_telefone = document.createElement("td");

// valores das celulas
// linha é "pai"
// adicionando filhos "celulas"
linha.appendChild(cel_nome).innerHTML = obj_funcionario.funcionario[i].nome;
linha.appendChild(cel_idade).innerHTML = obj_funcionario.funcionario[i].idade;
linha.appendChild(cel_telefone).innerHTML = obj_funcionario.funcionario[i].telefone;

// criando linha dentro do lelento pai tbody
document.querySelector("tbody").appendChild(linha);

}