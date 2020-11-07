'use strict';

//   create random num 
let secretNum = Math.round(Math.random() * 20 + 1);
console.log(secretNum);

//  set score 
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


//  click on check btn 
document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum);

  if (!guessNum) {
    //  wrong input

    displayMessage('Insert real value');
  } else if (guessNum === secretNum) {
    //  if player wins
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNum !== secretNum) {
    if (score > 1) {
      displayMessage(guessNum > secretNum ? 'To high' : 'To low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost game');
      document.querySelector('.score').textContent = 0;
    }
  }

});


//  reset game 
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNum = Math.round(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  console.log(secretNum);
  displayMessage('Insert number');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
