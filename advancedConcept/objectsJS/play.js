

// Rock Paper Scissors JavaScript Game
let computer = '';

const game = Math.floor(Math.random() * 9) + 1;

const player = prompt('Chose rock or paper or scissors');


if (game > 0 && game < 4) {
  computer = 'rock'
} else if (game > 3 && game < 7) {
  computer = 'paper'
} else if (game > 6 && game < 10) {
  computer = 'scissors'
}

const calcGame = (comp, human) => {
  if (comp == human) {
    return console.log(`Draw`);
  } else if (comp == 'rock' && human == 'paper') {
    return console.log(`Human wins`);
  } else if (comp == 'scissors' && human == 'paper') {
    return console.log(`Comp wins`);
  } else if (comp == 'paper' && human == 'scissors') {
    return console.log(`Human wins`);
  } else if (comp == 'paper' && human == 'rock') {
    return console.log(`Comp wins`);
  }
}


console.log(computer);
console.log(game);
console.log(player);

calcGame(computer, player);