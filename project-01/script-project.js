const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

// função para criação de classe em conteúdo textual sobre os animais (sections)
function activeTab(index){
  tabContent.forEach((item) => {
    item.classList.remove('active');
  });

  tabContent[index].classList.add('active');
}

//função de evento para cada click em imagem, relacionando ao indice da lista descritiva dos animais
tabMenu.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeTab(index);
  })
});