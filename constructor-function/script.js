// Transforme o objeto abaixo em uma Constructor Function
function Pessoa (name, age){
  this.nome = name;
  this.idade = age;

  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

var vector = [];
var nameList = ['joao','maria','bruno'];
var ageList = [20,25,15];

for(let i = 0; i < nameList.length; i++){
  vector[i] = new Pessoa(nameList[i], ageList[i])
}



// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

