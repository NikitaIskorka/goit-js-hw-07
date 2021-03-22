/* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
 и изменяет инлайн-стиль span#text обновляя свойство font-size.
 В результате при перетаскивании ползунка будет меняться размер текста. */

const sliderRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
sliderRef.addEventListener('input', onSlideFontSizeControl);
function onSlideFontSizeControl(event) {
  textRef.style.fontSize = event.currentTarget.value + 'px';
}
/* const inputRef = document.querySelector('#controls>input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const markupContainer = document.querySelector('#boxes');
console.log(inputRef);
console.log(renderBtn);
console.log(destroyBtn);
console.log(markupContainer);
const boxesArray = [];
const inputNumber = 6;
inputRef.addEventListener('input', event => {
  console.log(event.currentTarget.value);
});

for (let i = 0; i < inputNumber; i += 1) {
  const boxElement = document.createElement('div');

  boxElement.style.width = i * 10 + 30 + 'px';
  boxElement.style.height = i * 10 + 30 + 'px';
  boxElement.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
    0,
    255,
  )}, ${getRandom(0, 255)})`;

  function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  boxesArray.push(boxElement);
}
console.log(boxesArray);
markupContainer.append(...boxesArray);
 */
