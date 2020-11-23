'use strict';

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet('Hi')('Alex')


const lufthansa = {
  airline: 'lufthansa',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked seat on ${flightNum} on ${this.airline} flight `);
    this.bookings.push({ flight: flightNum, company: this.airline, passengerName: name })
  }
}

console.log(lufthansa);

lufthansa.book('lh213', 'Alex');
lufthansa.book('lh4741531', 'Fred');

const eurowings = {
  airline: 'eurowings',
  bookings: []
}

//  const book is now regular function, this word is now undefined! its not a methd now 
const book = lufthansa.book;

console.log(book);

book.call(eurowings, '21312', 'Sara');

console.log(eurowings);