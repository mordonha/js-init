// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var vector = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

vector.forEach(function(item){
  console.log(`O brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++ ){
  if(frutas[i] === 'Pera'){
    break; 
  } else {
    console.log(`${frutas[i]}`); 
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var lastFruit = frutas[frutas.length - 1];
