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

let name = 'Bojan';
let lastName = 'Mijatovic';
let fullName = `${name} ${lastName}`;
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

console.log(typeof (5 - '1'));          //   number 4
console.log(typeof ('5' + 1));          //   string 51
console.log(typeof (1 + '5'));          //   string 15
console.log(false == 0);                //    true
console.log(null == undefined);    //    true
console.log(undefined == 0);        //    false