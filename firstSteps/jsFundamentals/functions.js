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