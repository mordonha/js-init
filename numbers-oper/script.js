// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var a = '34s',
  b = 3;

var somaNum = a*b
console.log(somaNum, a/a);

// Somar a string '200' com o número 50 e retornar 250
var string = '200';
console.log(+string + 50 );

// Incremente o número 5 e retorne o seu valor incrementado
var c = 5;
c++;
console.log(c);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois);