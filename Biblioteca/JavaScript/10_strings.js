// metodos essenciais

// site de referencia : https://levelup.gitconnected.com/essential-javascript-string-methods-f1841dad1961

// comprimento da string - lenght
var str = "jgdkjfhgjkh bgfirwgqhv"
console.log( str.length);

// remover espaços em branco do início e do final - trim()
var str = "   jdgs  jkg  fk  ja   "
console.log(str.trim());

// includes() a função determina se uma substring está contida 
// em uma string maior e retorna trueou false. 
// Isso tem muitos aplicativos, mas um caso de uso comum é 
// para correspondência de string para pesquisa / análise.

var autor = "Alberto Filho Silva";
var pesq1 = "Alberto";
var pesq2 = "Amanda";

console.log( autor.includes( pesq1 ));
console.log( autor.includes( pesq2 ));


// indexOf() A função retorna o índice da substring dentro da string. 
// Se a substring não estiver contida na string original, 
// ela retornará -1.
var autor = "Alberto Filho Silva";
var pesq1 = "Filho";
var pesq2 = "Amanda";

console.log( autor.indexOf( pesq1 ));
console.log( autor.indexOf( pesq2 ));

// toUpperCase()função retorna uma string 
// com todas as letras maiúsculas.

var str = "iurcbiihuq3vio"
console.log( str.toUpperCase());

// toLowerCase()função retorna uma string 
// com todas as letras minúsculas.
var str = "JDKHCVKLJWBLuq3vio"
console.log( str.toLowerCase());

// replace () - Substitui strings por novos valores
var str1 = "Fábio José"
var str2 = "Lima"
console.log( str1.replace("José", str2));

// slice()método extrairá uma seção de uma string com base 
// no índice fornecido e a retornará como uma nova string. 
// Isso é útil quando você conhece a estrutura de uma string e 
// deseja recuperar uma determinada parte, 
// ou pode ser usado com o indexOf, onde você pode encontrar 
// o índice da primeira ocorrência de uma substring e usá-lo 
// como referência ponto para fatiar.
var str1 = "Input do usuário:  Bom dia aos colegas "
console.log(str1.slice(19)); //Bom dia aos colegas


//split () - Converte string em uma matriz de strings
// split()pega um no separator qual você deseja separar a string 
// e retorna uma matriz de strings. 
// Isso é útil quando você sabe que sua string usa um 
// determinado caractere para separar dados ou se deseja operar 
// em substrings específicas individualmente.
var str3 =  "A raposa marrom pulou sobre o cao dormindo"
var palavras = str3.split(" ");
var contaPalavras = palavras.length;
console.log(palavras);
console.log(contaPalavras);

// repeat () - Repete uma string um número especificado de vezes
var str = "Bom Dia ";
console.log(str.repeat(5));

// charAt () - Retorna o caractere em uma posição
var str5 = "Quando for para lá, vá pela calçada";
console.log( "Posicao 11: " , str5.charAt(11) );