'use strict';

// const bookingArr = []


// const createBooking = function (flightNumber, numberPassengers = 1, price = 150 * numberPassengers) {

//   const booking = {
//     flightNumber,
//     numberPassengers,
//     price
//   }
//   bookingArr.push(booking);
//   console.log(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 3);


const firstLetterUp = function (str) {
  return str[0].toUpperCase().concat(str.slice(1));
}


const userName = function (name) {
  return name;
}

const name = userName('bob');
const secondName = ('ted');

console.log(firstLetterUp(name));
console.log(firstLetterUp(secondName));