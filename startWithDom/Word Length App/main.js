
const btn = document.querySelector('.btn');
const textValue = document.getElementById('text');
const result = document.querySelector('.result');
const remove = document.querySelector('.remove');


btn.addEventListener('click', function () {
  const value = textValue.value.trim();
  result.classList.add('show__text');
  result.textContent = `You have word with length ${value.length}`;
})


remove.addEventListener('click', function () {
  textValue.value = '';
  result.textContent = '';
  result.classList.remove('show__text');
})