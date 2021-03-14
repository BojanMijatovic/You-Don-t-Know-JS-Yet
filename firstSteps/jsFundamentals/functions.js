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