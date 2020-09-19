
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

// const newX = function (x) {
//   let test = 1;       // local binding
//   return test + x;
// }

// console.log(newX(4));


//     ----  Function declaration ----
// function addNums(x, y) {
//   return x + y;
// }
/*
Function declarations are not part of the regular top-to-bottom
flow of control. They are conceptually moved to the top of their scope and can
be used by all the code in that scope.
*/
// console.log(addNums(4, 3));

//   ------ Arrow Functions
// const name = (user) => {
//   return console.log(`Welcome ${user}`);
// }

// name('Alex');

//  add default parameter
// const nums = (x, y = 4) => x + y;
// console.log(nums(2, 10));


// Closure 
/*
 In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

// const test = n => {
//   let a = n;
//   function returnN() {
//     return a;
//   }
//   return returnN();      //closure1
// }

// let b = test('word');
// console.log(b);


// const sumNums = (x) => {
//   function add(y) {
//     return x + y;
//   }
//   return add(5); // closure
// }
// const num = sumNums(4);
// console.log(num);

// ---------------- Practice 

// const math = (x, y) => Math.min(x, y);
// console.log(math(3, 1));

// const isEven = (x) => {
//   // if (x % 2 === 0) {
//   //   return true;
//   // } else return `Num ${x} is odd`;
//   if (x < 0) {
//     return `Num ${x} is negative`;
//   } else {
//     if (x % 2 === 0) {
//       return true;
//     }
//     else return `Num ${x} is odd`;
//   }
// }
// console.log(isEven(44));

// const calcYears = (yearNow, yearOffBirth) => {
//   if (yearNow - yearOffBirth > 18) {
//     return `You  are adult`;
//   } else {
//     return `You are underage`
//   }
// }
// console.log(calcYears(2020, 1987));

// const calcCarYear = (car) => {
//   if (car > 5) {
//     return `You have Oldtimer`
//   } else return `You have  newbie`;
// }
// console.log(calcCarYear(4));
// console.log(calcCarYear(8));


// const addUser = (name, lastName, age) => {
//   if (age < 20) {
//     return `${name} ${lastName} you are to young`
//   } else if (age < 30) {
//     return `${name} ${lastName} you are young`;
//   } else if (age > 30 && age < 45) {
//     return `${name} ${lastName} you are in best ages`;
//   } else return `You are old`;
// }

// console.log(addUser('Alex', 'Doe', 14));
// console.log(addUser('Alex', 'Doe', 24));
// console.log(addUser('Alex', 'Doe', 44));
// console.log(addUser('Alex', 'Doe', 74));

// let grade1 = prompt('grade 1');
// let grade2 = prompt('grade 2');
// let grade3 = prompt('grade 3');
// let total = (grade1 + grade2 + grade3) / 100;

// if (grade1 < 2 || grade2 < 2 || grade3 == 1) {
//   console.log(`You did not pass exams`);
// } else (total < 2.5)
// console.log(`You  have 2 with percent with total ${total}`);