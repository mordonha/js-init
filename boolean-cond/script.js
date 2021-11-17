// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var myAge = 27,
  parentAge = 57;

if(myAge > parentAge){
  console.log("É maior");
} else if(myAge < parentAge){
    console.log("É menor");
  } else {
  console.log("É Igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // ultimo verdadeiro ou o primeiro falso
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo; //undefined
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log(!!(brasil >= china));

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); //this
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { 
  console.log('Gato' && 'Cão'); //ultima verdadeira
} else {
  console.log('Falso');
}