//   start again with functions 
// function declaration

function showFruit(fruit, number) {
    return number > 1 ? `You have ${number} ${fruit}s` : `You have ${number} ${fruit}`;
};

//                                  here is arguments
console.log(showFruit('apple', 5));
console.log(showFruit('banana', 1));


function calcComments(comments) {
    return `We have ${comments} comments`
}

console.log(calcComments(4));

function fullName(firstName, lastName) {
    return `Hello my name is ${firstName} ${lastName}`
}

const names = fullName('Ted', 'Jonson');
console.log(names);
console.log(fullName('Alex', 'Red'));



//  function expression
const addSum = function(num1, num2) {
    return num1 + num2;
}

const total = addSum(4, 19);
console.log(total);

//  Arrow functions


//                    single  parameter
const calcAge = birthYear => 2021 - birthYear;
const age = calcAge(1987);
// console.log(age);

//                without parameters        
const test = () => 4 + 4;
const total1 = test();
// console.log(total1);


//  2 or more parameters
const getTotal = (add, total) => {
    return total += add;
}

const bankTotal = getTotal(100, 250);
console.log(bankTotal);




//  function call another function
function addDeposit(amount) {
    return amount * 2.4;
}

function calcTax(money, months) {
    const deposit = addDeposit(money);
    return `You have to return ${money / months}$ per month, and deposit is ${deposit}$`
}

const tax = calcTax(1400, 12);
console.log(tax);

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/


const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}
const dolphinsScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(65, 54, 49);

// console.log(dolphinsScore, koalasScore);

const checkWinner = (dScore, kScore) => {
    if (dScore > kScore) {
        return `Dolphins win ${dScore} vs ${kScore}`
    } else { kScore > dScore } {
        return `Koalas win ${kScore} vs ${dScore}`
    }
}

const winner = checkWinner(dolphinsScore, koalasScore);
console.log(winner);