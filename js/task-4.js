/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  currentValue: document.querySelector('#value'),
};
console.log(refs.decrementBtn);
console.log(refs.incrementBtn);
let counterValue = 0;

console.dir(refs.currentValue);

refs.incrementBtn.addEventListener('click', onincrementBtnClick);

function onincrementBtnClick() {
  refs.currentValue.textContent = counterValue += 1;
}
refs.decrementBtn.addEventListener('click', ondecrementBtnClick);

function ondecrementBtnClick() {
  if (refs.currentValue.textContent > 0) {
    refs.currentValue.textContent = counterValue -= 1;
  }
}
