// Remova o primeiro valor de comidas e coloque em uma variável
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const firstMeal = comidas.shift();
console.log(firstMeal);

// Remova o último valor de comidas e coloque em uma variável
const lastMeal = comidas.pop();
console.log(lastMeal);

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);


// Arrume os estudantes em ordem alfabética
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

estudantes.sort();
console.log(estudantes);

// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

// Verifique se Joana faz parte dos estudantes
const isThere = estudantes.includes('Joana');
console.log(!!isThere);
// Verifique se Juliana faz parte dos estudantes
const isThere2 = estudantes.includes('Juliana');
console.log(!!isThere2);

// Substitua section por ul e div com li,
// utilizando split e join
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`


html = html.split('section').join('ul').split('div').join('li');
console.log(html);

// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

const carrosAux = carros.slice();
carros.pop();
console.log(carros);
console.log(carrosAux);
