// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function People(nome, sobrenome, idade){
  this.name = nome;
  this.supername = sobrenome
  this.age = idade;
}

People.prototype.nameComplete = function(){
  return `${this.name} ${this.supername}`;
}


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

console.log(li.constructor.name);
console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
console.log(li.value.constructor.name);
console.log(li.hidden.constructor.name);
console.log(li.offsetLeft.constructor.name);
//console.log(li.click().constructor.name); // método não defino - retorno vazio -> sem construtor

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name);
