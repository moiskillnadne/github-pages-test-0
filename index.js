const counter = document.querySelector('#counter');
const button = document.querySelector('#button');

let counterValue = 0

button.addEventListener('click', () => {
  counterValue += 1
  counter.innerHTML = counterValue
})