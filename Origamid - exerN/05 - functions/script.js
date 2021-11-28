
// Dclaração de função com callback function
addEventListener('click', function(){
  return console.log("Oi!");
});

// Crie uma função para verificar se um valor é Truthy

function validateTrue(value){
  if(!!value){
    return console.log("O valor é verdadeiro!");
  } else {
    return console.log("O valor é falso")
  }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function squarePer(side){
  return side * 4;
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function completeName(name, surname){
  return console.log(`${name} ${surname}`);
}

// Crie uma função que verifica se um número é par

function isPair(number){
  if(typeof +number !== 'number'){
    return console.log('Digite um numero!')
  } else if(number % 2 === 0) {
    console.log("É par!");
  } else {
    return console.log("Não é par!")
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function typeData(value){
  return console.log(typeof value);
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  console.log("Paulo Marcos Ordonha");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
