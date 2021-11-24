/** MDN Exercise about manipulation documents */


//Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const noOrderList = document.querySelector('ul');
const input = document.querySelector('input[type=text]');
const butt = document.querySelector('button');

//Create a function that will run in response to the button being clicked.
//Inside the function body, start off by storing the current value of the input element in a variable.
//Next, empty the input element by setting its value to an empty string — ''.


function clickButt(){
  let currentText = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const spanElem = document.createElement('span');
  const buttElem = document.createElement('button');


  listItem.appendChild(spanElem);
  spanElem.textContent = currentText;
  listItem.appendChild(buttElem);
  buttElem.textContent = 'Delete'
  noOrderList.appendChild(listItem);

  buttElem.onclick = function(){
    noOrderList.removeChild(listItem);
  }

  input.focus();

}

butt.addEventListener('click', clickButt);
