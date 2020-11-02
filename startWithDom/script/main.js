'use strict';

const secretNum = Math.round(Math.random() * 20 + 1);

console.log(secretNum);

document.querySelector('.number').textContent = secretNum;


document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum);

  if (!guessNum) {
    document.querySelector('.message').textContent = 'Insert real value';
  } else if (guessNum === secretNum) {
    document.querySelector('.message').textContent = 'Correct Number'
  }
});
