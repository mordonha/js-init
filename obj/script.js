// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome


var myProfile = {
  myname: 'Paulo Marcos',
  surname: 'Ordonha da Silva',
  age: 27,
  race: 'Preta',
  height: 1.78,
  weight: 63,
  job: 'Tags and Tracking Analyst II',

  myId(){
    return console.log(`${this.myname} ${this.surname}`);
  }
}

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var dog = {
  race: 'labrador',
  color: 'black',
  age: 10,

  latir(value){
    if(value === 'homem'){
      return console.log('AU AU AU');
    }
  }
}