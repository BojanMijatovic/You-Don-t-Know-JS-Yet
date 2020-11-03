'use strict';

//   create random num 
const secretNum = Math.round(Math.random() * 20 + 1);
console.log(secretNum);

//  set score 
let score = 20;

document.querySelector('.number').textContent = secretNum;


//  click on check btn 
document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum);

  if (!guessNum) {
    document.querySelector('.message').textContent = 'Insert real value';
  } else if (guessNum === secretNum) {
    document.querySelector('.message').textContent = 'Correct Number'
  } else if (guessNum > secretNum) {
    document.querySelector('.message').textContent = 'To high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessNum < secretNum) {
    document.querySelector('.message').textContent = 'To Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
