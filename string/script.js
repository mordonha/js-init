// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

function Stringly(stringOne){

  this.sumAll = function(){
    var sumTax = 0,
      sumPay = 0;

    stringOne.forEach(elem => {
      const clearNumber = +elem.valor.replace('R$ ', '');

      if(elem.descricao.includes('Taxa')){
        sumTax = sumTax + clearNumber;
      } else if(elem.descricao.includes('Recebimento')){
        sumPay = sumPay + clearNumber;
      }

    });

    console.log(sumTax);
    console.log(sumPay)

  }
}

var testeTrans = new Stringly(transacoes);
testeTrans.sumAll();

// Retorne uma  array com a lista abaixo
let transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

Stringly.prototype.splitVector = function(item){
  item = item.split(';');
  console.log(item);
}
var teste67 = new Stringly();
teste67.splitVector(transportes);


// Substitua todos os span's por a's
let html = `<ul>
              <li><span>Sobre</span></li>
              <li><span>Produtos</span></li>
              <li><span>Contato</span></li>
            </ul>`;
html = html.split('span').join("a href='#'");
console.log(html);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length-1));


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

Stringly.prototype.clearAll = function(itemVet){
  var sumTeste = 0;

  itemVet.forEach(item => {
    item = item.toUpperCase().trim();

    console.log(item);

    if(item.includes('TAXA') == true){
      sumTeste = sumTeste + 1;
    }
  });
console.log(sumTeste);

}

var teste = new Stringly();
teste.clearAll(transacoes2);

