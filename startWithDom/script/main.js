'use strict';

//   create random num 
const secretNum = Math.round(Math.random() * 20 + 1);
console.log(secretNum);

//  set score 
let score = 20;


//  click on check btn 
document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum);

  if (!guessNum) {
    //  wrong input
    document.querySelector('.message').textContent = 'Insert real value';
  } else if (guessNum === secretNum) {
    //  if player wins
    document.querySelector('.message').textContent = 'Correct Number'
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guessNum > secretNum) {
    //  to high number
    if (score > 1) {
      document.querySelector('.message').textContent = 'To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost game';
      document.querySelector('.score').textContent = 0;
    }

  } else if (guessNum < secretNum) {
    //   to low number
    if (score > 1) {
      document.querySelector('.message').textContent = 'To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
