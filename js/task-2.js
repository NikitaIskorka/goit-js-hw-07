/*  Напиши скрипт, который для каждого элемента массива 
ingredients создаст отдельный li, после чего вставит все li 
за одну операцию в список ul.ingredients. 
Для создания DOM - узлов используй document.createElement(). */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListContainer = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const ingredientsListElement = document.createElement('li');
  ingredientsListElement.textContent = ingredient;
  return ingredientsListElement;
});
ingredientsListContainer.append(...ingredientsList);
