// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const courses = document.querySelectorAll('.curso');
const coursesArray = Array.from(courses);

const coursesObj = coursesArray.map((course) => {
 const title = course.querySelector('h1').innerText;
 const desc = course.querySelector('p').innerText;
 const classes = +course.querySelector('.aulas').innerText;
 const hours = +course.querySelector('.horas').innerText;

  return {
    title,
    desc,
    classes,
    hours
  }; 
});

console.log(coursesObj);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 1252, 322, 33];

const larger = numeros.reduce((acc, item) => {
  return acc < item ? item : acc;
});

console.log(larger);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const bassInclude = instrumentos.some((item) => {
  return item === 'Baixo';
});

console.log('Baixo consta na lista de instrumentos? ' + bassInclude);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalPay = compras.reduce((acc, item) => {
  return acc + (+item.preco.slice(3).replace(',','.'));
}, 0);

console.log(totalPay);