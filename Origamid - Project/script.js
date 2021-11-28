/*
// Retorne no console todas as imagens do site

const imgList = document.getElementsByTagName('img'); //HTMLCollection é 'ao vivo'.
//const imgList = document.querySelectorAll('.img') // NodeList é estatica
console.log(imgList);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgListStart = document.querySelectorAll('img[src^="img/image"]'); //nodeList estatica; não atualizavel
console.log(imgListStart);

// Selecione todos os links internos (onde o href começa com #)

const allInternLinks = document.querySelectorAll('[href^="#"]');
console.log(allInternLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const animals = document.querySelector('.animais-descricao');
const h2Desc = animals.querySelector('h2');
console.log(animals);
console.log(h2Desc);

// Selecione o último p do site
const lastP = document.getElementsByTagName('p')
console.log(lastP[lastP.length - 1]);

// Mostre no console cada parágrado do site
const eachParagraph = document.getElementsByTagName('p'); //HTMLcollection não tem forEach, mas muda com o DOM
const paraArray = Array.from(eachParagraph);
paraArray.forEach(item => console.log(item));


// Mostre o texto dos parágrafos no console
paraArray.forEach(item => console.log(item.innerText));


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => console.log(item, index));

let i = 0;
imgs.forEach( () => console.log(i++));

imgs.forEach(() => i++);

// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('nav > ul > li');
menuItens.forEach(item => item.classList.add('active'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item) => item.classList.remove('active'));

menuItens[0].classList.add('active');

// Verifique se as imagens possuem o atributo alt
const imgAlt = document.querySelectorAll('img');
imgAlt.forEach(function(item){
  if(item.hasAttribute('alt')) console.log('Tem alt!');
})

// Modifique o href do link externo no menu
const linkOut = document.querySelector('a[href^="https://"]');
linkOut.setAttribute('href','https://www.google.com/')

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const innerLink = document.querySelectorAll('a[href^="#"]');

function handleLink(e){
  e.preventDefault();

  innerLink.forEach((item) => {
    item.classList.remove('active');
  });

  e.currentTarget.classList.add('active');
}

innerLink.forEach(item => { item.addEventListener('click', handleLink) });

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElem = document.querySelectorAll('body *');

function handleElem(e){
  console.log(e.currentTarget);
}

allElem.forEach(item => {
  item.addEventListener('click', handleElem);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleElemNew(e){
  e.currentTarget.remove();
}

allElem.forEach(item => {
  item.addEventListener('click', handleElemNew);
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function  handlePress(e){
  console.log(e.key);
  if(e.key === 't'){
    document.documentElement.classList.toggle('htmlHigher');
  }
}

window.addEventListener('keypress', handlePress);

// Duplique o menu e adicione ele em copy

const menuSite = document.querySelector('.menu');
const cloneMenu = menuSite.cloneNode(true);

const copySite = document.querySelector('.copy');
copySite.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const faqSite = document.querySelector('.faq-lista');
console.log(faqSite.children[0]); //htmlCollection array-alike

// Selecione o DD referente ao primeiro DT
const firstDt = faqSite.children[0];
console.log(firstDt.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
faqSite.innerHTML = animals.innerHTML;

*/