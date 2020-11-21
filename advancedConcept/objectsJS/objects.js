'use strict';
// const user = {
//   name: 'Alex',
//   age: 34
// }

// //  add properties
// user.isAdmin = false;
//   remove properties
// delete user.isAdmin;
//    add properties two words
// user['love hiking'] = true;
// // remove properties two words
// delete user['love hiking'];
// console.log(user);

// // computed properties.
// let hobby = prompt('What you love to doo?');
// user.hobby = hobby;
// console.log(user);
// // computed properties same
// let num = prompt('add num');
// user.numCount = num;
// console.log(user);


/*
    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
*/

// const user = {};
// user.name = 'John';
// user.surName = 'Smith';
// user.name = 'Alex';
// delete user.name;
// console.log(user);


/*Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
*/
// let schedule = {};
// schedule["8:30"] = "get up";

// function isEmpty(obj) {
//   if (('8:30' in obj)) {
//     return false;
//   } else return true;
// }

// console.log(isEmpty(schedule));

// const bankUser = {
//   name: '',
//   lastName: '',
//   id: 0,
//   deposit: 0
// }

// const createNewBankUser = (name, lastName, id, deposit) => {
//   bankUser.name = name;
//   bankUser.lastName = lastName,
//     bankUser.id = Math.floor(Math.random() * id) + 100,
//     bankUser.deposit = deposit
// }

// createNewBankUser('Alex', 'Tesla', 4, 200);
// const addDeposit = addAmount => bankUser.deposit += addAmount;



// const removeDeposit = (amount) => {
//   if (bankUser.deposit == 0 || bankUser.deposit < amount) {
//     return console.log(`You are low with deposit`);
//   } else {
//     bankUser.deposit -= amount;
//     return console.log(`Now you have on account ${bankUser.deposit}$`);
//   }
// }
// addDeposit(200);
// removeDeposit(20);
// addDeposit(500);

// removeDeposit(500);

// console.log(bankUser);

// const  student = {
//   name: "David Rays",
//   class: "VI",
//   rollo: 12
// };

/*
1. Write a JavaScript program to list the properties of a JavaScript object.
Sample Output: name, class, rollo
2. Write a JavaScript program to delete the rollo property from the following object. Also print the object before or after deleting the property.
*/

// for (info in student) {
//   console.log(info);
// }

// const deleteRollo = () => delete student.rollo;
// deleteRollo();
// console.log(student);

// let a = {};
// let b = {};
// console.log(a === b);

// a = b;
// a.name = 'test';

// console.log(a.name);
// console.log(b.name);
// console.log(a === b);


// const food = ['pizza', 'burger', 'pasta'];
// const drinks = ['beer', 'soda', 'juice'];

// const allMenu = [...food, ...drinks];
// for (const item of allMenu) {
//   console.log(item);
// }


// const hours = {
//   mon: {
//     open: 10,
//     close: 22
//   },
//   thu: {
//     open: 14,
//     close: 22
//   },
//   open() {
//     return `We open ${this.mon?.open}`;
//   }
// }


// console.log(hours.open?.() ?? `No such thing`);


// console.log(Object.keys(hours));

const technologies = [{ name: 'alex' },
{ name: 'ted' },
{ name: 'freddy' }
];

// for (const { name } of technologies) {
//   console.log(Object.values(name));
// }



// const order = [1, 2, 3, 4, 5, 6, 5, 5, 6, 6];

// const newArr = new Set(order);
// console.log(newArr);

// const test = {
//   name: 'Red'
// }

// newArr.add(test);
// console.log(newArr);



const arr = new Set(technologies);

// arr.forEach(name => console.log(`${name.name}`))

for (const { name } of arr) {
  console.log(`My name is ${name[0].toUpperCase().concat(name.slice(1))}`);
}