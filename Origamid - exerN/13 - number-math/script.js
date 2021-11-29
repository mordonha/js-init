// Retorne um número aleatório
// entre 1050 e 2000

const randomNum = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(randomNum);


// Retorne o maior número da lista abaixo
const numeros = '4, 908, 20, 8, 9';
const arrayNumbers = numeros.split(', ');
console.log(Math.max(...arrayNumbers)); // novo trick -> 'spread' = estou parametrizando cada elemento do array para a função



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function priceClean(preco){
  preco = +preco.toUpperCase().replace('R$ ', '').trim().replace(',','.');
  preco = +preco.toFixed(2);

  return preco;
}

var sumPrice = 0;
listaPrecos.forEach(item =>{
  sumPrice = sumPrice + priceClean(item);
  
})

console.log(sumPrice);