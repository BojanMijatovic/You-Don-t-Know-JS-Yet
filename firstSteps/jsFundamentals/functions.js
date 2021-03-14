//   start again with functions 
// function declaration

function showFruit(fruit, number) {
    return number > 1 ? `You have ${number} ${fruit}s` : `You have ${number} ${fruit}`;
};

//                                  here is arguments
console.log(showFruit('apple', 5));
console.log(showFruit('banana', 1));