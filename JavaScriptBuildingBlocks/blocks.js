
/*
Using if..else, write the code which gets a number via prompt and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.

In this task we assume that the input is always a number.
*/

// let num = parseInt(prompt('enter num'));
// console.log(num);
// if (num > 1) {
//   console.log(`Num ${num} is greater from zero`);
// } else if (num < 0) {
//   console.log(`Num ${num} is less then zero`);
// } else {
//   console.log(`Num is zero`);
// }

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/


let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : ' '; 