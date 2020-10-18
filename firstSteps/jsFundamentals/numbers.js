

let intNum = 55;
// console.log(typeof (intNum));

/*Because storing floating-point values uses twice as much memory as storing integer values,
ECMAScript always looks for ways to convert values into integers. */

// let num = 0.4;
// let num1 = .4;  // not recommended

//  ----  NaN

/*any operation involving NaN always returns NaN (for instance, NaN /10),
which can be problematic in the case of multistep computations. Second,
NaN is not equal to any value, including NaN.
*/

// console.log(NaN == NaN);   // false
// console.log(0 / 0);               // NaN

//  ----   Number Conversions

/*
There are three functions to convert nonnumeric values into numbers:
the Number()
casting function,
the parseInt() function,
and the parseFloat() function.
*/

let numFromBoolean = Number(Boolean(true));
let numFromString = Number('123');

// console.log(numFromBoolean);
// console.log(numFromString);
// console.log(Number(null));       // returns 0

let str = '-2';
// console.log(parseInt(str));         // returns -2
let str1 = '123ccc';
// console.log(parseInt(str1));           // returns 123

let num1 = 2;
let num2 = 20;
let num3 = num1-- + num2;
console.log(num1);
let num4 = num1 + num2;
console.log(num3); // 22
console.log(num4); // 21

