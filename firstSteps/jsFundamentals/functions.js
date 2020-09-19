
// const round = function (x) {
//   return x * x;
// }

// console.log(round(4));


// const createRecipes = function (ingredient) {
//   const addPercentIngridient = function (amount) {
//     if (ingredient > 1) {
//       amount++;
//     }
//     console.log(`You have ${amount} ${ingredient}`);
//   }
//   addPercentIngridient(2);
// }


// createRecipes('tomato');
// createRecipes('onion');

// const addNums = function (x) {
//   const addNew = function (y) {
//     return x + y;
//   }
//   return addNew(4);
// }

// console.log(addNums(10));

const newX = function (x) {
  let test = 1;       // local binding
  return test + x;
}

// console.log(newX(4));


//     ----  Function declaration ----
function addNums(x, y) {
  return x + y;
}
/*
Function declarations are not part of the regular top-to-bottom
flow of control. They are conceptually moved to the top of their scope and can
be used by all the code in that scope.
*/
// console.log(addNums(4, 3));

//   ------ Arrow Functions
const name = (user) => {
  return console.log(`Welcome ${user}`);
}

// name('Alex');

//  add default parameter
// const nums = (x, y = 4) => x + y;
// console.log(nums(2, 10));


// Closure 
/*
 In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

const test = n => {
  let a = n;
  function returnN() {
    return a;
  }
  return returnN();      //closure1
}

let b = test('word');
console.log(b);


const sumNums = (x) => {
  function add(y) {
    return x + y;
  }
  return add(5); // closure
}
const num = sumNums(4);
console.log(num);