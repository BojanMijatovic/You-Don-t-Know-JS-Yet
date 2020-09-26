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

const user = {};
user.name = 'John';
user.surName = 'Smith';
user.name = 'Alex';
delete user.name;
console.log(user);


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

