// REGEX  Regular Expessions

// site util : https://www.regular-expressions.info/refquick.html

// Expressões Regulares, que em resumo nos ajudam a encontrar padrões em texto de uma forma muito mais completa.
// As Regex procuram padrões


const frase = 'Frase que começa com um palavra e tem outra palavra no final';
const fraseAtualizada = frase.replace(/palavra/g, '********') ;
console.log(fraseAtualizada) ;// "Frase que começa com um ******** e tem outra ******** no final"

// Porém, se você quiser algo mais abrangente com caracteres especiais e tudo mais, 
// onde a ordem não importe, será necessário definir um range de caracteres:

// [A-Z0-9!-]

// E ainda no exemplo anterior, 
// para pegar mais de um caracter é necessário declarar quantas ocorrências você procura:

// [A-Z0-9!-]{3}

// Também é possível simplificar, para capturar somente caracteres alfa numéricos você pode usar:

// \w

// Já para capturar caracteres referentes a digitos você pode usar:

// \d

// E caso você queira capturar grupos dentro de um match de regex para poder trabalhar melhor como veremos nos próximos exemplos, podemos utilizar os parenteses:

// (\d{4})-(\d{4})

// Existem outros casos como utilizar a "?" para alguma parte da regex ser opcional, 
// os marcadores de começo "^" e fim "$"

// colocando CPF em padrão visual reconhecido
const cpf = "12484287771";
const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
console.log(cpfFormatado);

// exemplo em HTML 

// <div style="max-width: 50%; margin: 50px auto;">
//   <input class="form-control" type="text" id="cpf" value="123.456.789-10" />
// </div>

// <script>
//  const $campoCPF = document.querySelector('#cpf')

//  $campoCPF.addEventListener('focusin', (event) => {
//    $valorDoCPF = event.target.value;
//    $campoCPF.value = $valorDoCPF.replace(/[.-]/g, "")
//  })
  
//  $campoCPF.addEventListener('focusout', () => {
//    $valorDoCPF = event.target.value;
//    $campoCPF.value = $valorDoCPF.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
//  })
// </script>


