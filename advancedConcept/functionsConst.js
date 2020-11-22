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

const addNums = function (num1, num2) {
  return `${num1 + num2}`;
}

const multiplyNums = function (multi, fu) {
  return fu(2, 2) * multi;
}



console.log(multiplyNums(3, addNums));