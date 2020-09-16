// const num = 14.4e4;  //e add decimals
// console.log(num);

//const a = 2e2;
// console.log(a);
//const b = 1e2;
// console.log(b);
// console.log(a + b);

//  ----          precedence of the operators * / + -
// const a = 44 + 3 * 2;
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

// let mood = 'light';
// console.log(mood);
// mood = 'dark';
// console.log(mood);

// ------------ Conditional execution //

// let product = 'pants';
// let productPrice = 100;
// if (productPrice < 100) {
//   console.log(`${product} are cheap`);
// } else {
//   console.log(`${product} are expense`);
// }

// let age = 4;
// if (age < 18) {
//   console.log(`To young`);
// } else if (age > 18 && age < 30) {
//   console.log(`Best ages`);
// } else {
//   console.log(`You are grow person now :)`);
// }

// let name;
// do {
//   name = prompt('Enter your name here');
// } while (!name);
// console.log(`Your name is ${name}`);

//  ------- Loops -------- //

// let a = '';
// for (let i = 0; i < 7; i++) {
//   a += '#';
//   console.log(a);
// }


// FizzBuzz
// for (let i = 0; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`FizzBuzz ${i}`);
//   } else if (i % 5 == 0) {
//     console.log(`Buzz ${i}`);
//   } else if (i % 3 == 0) {
//     console.log(`Fizz ${i}`);
//   }
// }



/*

a ) Napisati if petlju tako da :
  ako je zbir prve dve promenljive pozitivan broj ispisati "Zbir prve dve je pozitivan broj ",
  u suprotnom ako je razlika prve dve promenljive pozitivan broj ispisati "Razlika prve dve je pozitivan broj"

b ) Napisati if petlju tako da :
  ako je proizvod prve i trece varijable broj veci od 15 i ako je druga varijabla negativna
  ispisati "Proizvod prve i trece je veci od 15 i druga varijable je negativna"
  u suprotnom ako je proizvod prve i trece varijable broj veci od 15 ili ako je druga varijabla pozitivna
  ispisati "Proizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna"

*/

// let x = 3, y = -4, z = x - y;
// if (x + y > 0) {
//   console.log(`Add is greater from zero`);
// } else (x - y > 0)
// console.log(`Sum is  greater from zero`);


// if (x + z > 15 && y < 0) {
//   console.log(`sum off first and third is bigger from 15`);
// } else (x + z && y > 0)
// console.log(`sum off first and third is bigger from 15 and second y is bigger from 0`);

/*
Zadatak 2

Napisati switch petlju tako da ako je zadata vrednost izmedju 1 i 5 ispisati:
"Zadata vrednost je izmedju 1 i 5 i zadata vrednost je (X)" Napomena (X) je pomenuta vrednost
Ukoliko je zadata vrednost izmedju 8 i 10 ispisati:
"Zadata vrednost je izmedju 8 i 10"
I u suprotnom ispisati zadata vrednost nije u navedenom opsegu


Zadatak 3

Napisati while petlju tako da se izvrsava sve dok zbir promenljivih x i y ne postane pozitivan broj
Napomena x = -7, y = 1, u while petlji u svakoj iteraciji uvecavati y za 1
*/

// let num = 12;

// switch (num) {
//   case 1: console.log(`num is ${num}`);
//     break;
//   case 2: console.log(`num is ${num}`);
//     break;
//   case 3: console.log(`num is ${num}`);
//     break;
//   case 4: console.log(`num is ${num}`);
//     break;
//   case 8:
//     console.log(`Num is ${num}`);
//     break;
//   case 9: console.log(`Num is ${num}`);
//   default: console.log(`Num is greater from 10`);
//     break;
// }


/*
Napisati while petlju tako da se izvrsava sve dok zbir promenljivih x i y ne postane pozitivan broj
Napomena x = -7, y = 1, u while petlji u svakoj iteraciji uvecavati y za 1

Zadatak 4

Napisati for petlju tako da broji od 1 do 10
i da se ispisuju samo brojevi koji su deljivi sa 2

*/
// let x = -7, y = 1, z = x - y;
// while (x + y < 0) {
//   // y = y += 1;
//   y++;
//   console.log(`Sum is now  ${y}`);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`i is ${i}`);
//   }
// }