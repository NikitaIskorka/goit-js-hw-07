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

// const inputRef = document.querySelector('#controls>input');
// const renderBtn = document.querySelector('[data-action="render"]');
// const destroyBtn = document.querySelector('[data-action="destroy"]');
// const markupContainer = document.querySelector('#boxes');

// inputRef.addEventListener(
//   'input',
//   event => console.log(event.currentTarget.value),
//   renderBtn.addEventListener('click', createBoxes),
// );
// function createBoxes() {}
// const renderedMarkup = document.createElement('div');
// renderedMarkup.style.background = 'tomato';

// renderedMarkup.setAttribute('width', '30px');
// renderedMarkup.setAttribute('heigth', '30px');
// markupContainer.appendChild(renderedMarkup);
// console.log(rergderedMarkup);
// console.dir(renderedMarkup);
