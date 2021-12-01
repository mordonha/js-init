// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const para = document.querySelectorAll('p');

const sumPara = Array.prototype.reduce.call(para, (acc,item)=>{
  return acc + item.innerText.length;
}, 0);

console.log(sumPara);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createElem(tag, classes, contents){
  const elem = document.createElement(tag);
  classes ? elem.classList.add(classes) : null;
  contents ? elem.innerText = contents : null;

  return elem;

}

console.log(createElem('div', 'active', 'Isso é uma piada ruim!'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Title = createElem.bind(null, 'h1', 'titulo');
console.log(h1Title('Ei there!'));