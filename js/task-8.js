/* Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку 
Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes. */

const inputRef = document.querySelector('#controls>input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const markupContainer = document.querySelector('#boxes');

const boxesArray = [];

inputRef.addEventListener('change', event => {
  renderBtn.addEventListener(
    'click',
    makeRandomColorBoxesMarkup(event.currentTarget.value),
  );
});
destroyBtn.addEventListener('click', clearRandomColorBoxesMarkup);

function makeRandomColorBoxesMarkup(event) {
  for (let i = 0; i < event; i += 1) {
    const boxElement = document.createElement('div');
    boxElement.classList.add('random-boxes-js');
    boxElement.style.width = i * 10 + 30 + 'px';
    boxElement.style.height = i * 10 + 30 + 'px';
    boxElement.style.backgroundColor = `rgb(${getRandom(0, 255)},
     ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

    function getRandom(min, max) {
      return Math.ceil(Math.random() * (max - min) + min);
    }
    boxesArray.push(boxElement);
  }
  markupContainer.append(...boxesArray);
}
function clearRandomColorBoxesMarkup() {
  markupContainer.innerHTML = '';
  inputRef.value = '';
}
