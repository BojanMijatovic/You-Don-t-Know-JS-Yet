const num = 14.4e4;  //e add decimals
// console.log(num);

//const a = 2e2;
// console.log(a);
//const b = 1e2;
// console.log(b);
// console.log(a + b);

//  ----          precedence of the operators * / + -
const a = 44 + 3 * 2;
//console.log(a); // 50

// -- % symbol is used to represent the remainder operation

// --------- Strings ----------- //

// let name = 'Bojan';
let lastName = 'Mijatovic';
// let fullName = `${name} ${lastName}`;
// console.log(fullName);

let sentence = 'Here is my first sentence \n and here is second sentence :) ';
//console.log(sentence);

let backSlash = 'New sentence \"with backslash" ';
let newName = 'Bojan \"Mijatovic"';
// console.log(backSlash);
// console.log(newName);

// template literals 
// console.log(`Half off 100 is ${100 / 2} ----- \"all numbers here are strings"`);   


// ----- typeof operator-------

// console.log(typeof 3);        //    number
// console.log(typeof 'x');       //    string
// console.log(typeof []);        //    object
// console.log(typeof {});        //    object


// console.log("Aardvark" < "Zoroaster"); // true
// console.log('a' < 'A');  //false 
// console.log('a' > 'Z'); // true
// console.log('a' > 'B');  // true

//  ------ There is only one value in JavaScript that is not equal to itself, and that is
//NaN (“not a number”).
// console.log(NaN == NaN) // false is not equal to itself

// ------ Logical operators ------
//  && and   || or  ! not 

/*
In practice, you can
usually get by with knowing that of the operators we have seen so far,
|| has
the lowest precedence,
then comes &&,
then the comparison operators (>, ==,and so on), and then the rest.
This order has been chosen such that, in typical
expressions like the following one, as few parentheses as possible are necessary:
*/

// --------Automatic type conversion ------- // 

/*
However, when
 null or undefined
occurs on either side of the operator, it produces true only if both sides are one
of null or undefined.
console.log(null == undefined
  */

// console.log(null == undefined);    //    true       *
// console.log(typeof (5 - '1'));          //   number 4
// console.log(typeof ('5' + 1));           //   string 51
// console.log(typeof (1 + '5'));          //   string 15
// console.log(false == 0);                //    true
// console.log(undefined == 0);        //    false
// console.log(0 == null);                  //    false
// console.log(false == undefined);  //    false


//  ----- Variables --------  //

let mood = 'light';
console.log(mood);
mood = 'dark';
console.log(mood);

//  Conditional execution //

let product = 'pants';
let productPrice = 100;
if (productPrice < 100) {
  console.log(`${product} are cheap`);
} else {
  console.log(`${product} are expense`);
}

let age = 4;
if (age < 18) {
  console.log(`To young`);
} else if (age > 18 && age < 30) {
  console.log(`Best ages`);
} else {
  console.log(`You are grow person now :)`);
}

let name;
do {
  name = prompt('Enter your name here');
} while (!name);
console.log(`Your name is ${name}`);