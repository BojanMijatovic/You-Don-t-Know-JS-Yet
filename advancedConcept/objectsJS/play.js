
import arr from './functionalPrograming.js';

// arr.forEach(item => console.log(`${item}`));

const type = (arg) => console.log(typeof (arg));

// type(arr);

let a = 1;

const showIsFunc = (arg) => {
  if (typeof (arg) === 'function') {
    return arg;
  }
  return console.log(`${arg} is ${typeof (arg)}`);
}

// showIsFunc(type);


const someReturn = () => `This is awesome`
let n = someReturn();
console.log(n);

// const user = {
//   name: 'alex',
//   lastName: 'red'
// }

// for (const item in user) {
//   // if (user.hasOwnProperty(item)) {
//   //   const element = user[item];
//   //   console.log(element);
//   // }
//   // console.log(item);
//   console.log(`Key ${item}`);
//   console.log(`Value ${user[item]}`);
// }


// arr.forEach(num => {
//   if (num % 2 == 0) {
//     console.log(`num ${num} is even`);
//   }
// })

// arr.forEach(num => num % 2 == 0 ? console.log(`num ${num} is even`) : console.log(`Num ${num} is odd`));



// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const isNum = arr.every(num => typeof (num) === 'number');
// console.log(isNum);

// for (let num of arr) {
//   console.log(`Num = ${num * 2}`);
// }



// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 
// const isEven = arr.some(num => num > 2);
// console.log(isEven);