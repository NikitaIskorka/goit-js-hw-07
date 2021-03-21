const inputRef = document.querySelector('#validation-input');
const tresholdLength = inputRef.dataset.length;
console.log(tresholdLength);
inputRef.addEventListener('change', onFocusValidation);
function onFocusValidation(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.length === +tresholdLength) {
    inputRef.setAttribute('class', 'valid');
  } else if (event.currentTarget.value === '') {
    inputRef.classList.remove('.invalid');
  } else {
    inputRef.setAttribute('class', 'invalid');
  }
}
