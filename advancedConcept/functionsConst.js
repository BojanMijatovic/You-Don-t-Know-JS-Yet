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


// lufthansa.book('lh213', 'Alex');
// lufthansa.book('lh4741531', 'Fred');

const eurowings = {
  airline: 'eurowings',
  bookings: []
}


const serbiaairlines = {
  airline: 'serbiaairlines',
  bookings: []
}


//  const book is now regular function, this word is now undefined! its not a method now 
const book = lufthansa.book;

// console.log(book);

// book.call(eurowings, '21312', 'Sara');



//  bind 

// const eurowingsBook = book.bind(eurowings);
// const serbianBook = book.bind(serbiaairlines);
// console.log(eurowingsBook);

// eurowingsBook('213', 'Tom');
// serbianBook('first123', 'Test');

// console.log(serbiaairlines);
// console.log(eurowings);

lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);                                                  // point on button
  this.planes++;
  // console.log(this.planes);
}



const btn = document.querySelector('button');                                            //  button
btn.addEventListener('click', lufthansa.buyPlanes.bind(lufthansa))          // click is on btn so that is this


// const addTax = (rate, value) => rate + rate * value;
// const addVat = addTax.bind(null, 0.23);



const addVat = () => (rate, value) => rate + rate * value;
// console.log(addVat(null)(0.1, 100));
// console.log(addVat(null)(0.15, 200));


const mainObj = {
  addFramework(addName, lastName, framework) {
    return `${this.name = addName} ${this.lastName = lastName} work on framework ${this.framework = framework}`
  }
}

console.log(mainObj.addFramework('Tom', 'Scot', 'react'));
console.log(mainObj);


const addFramework = mainObj.addFramework;


const alex = {}

const alexFramework = addFramework.bind(alex);
console.log(alexFramework('Alex', 'Piston', 'angular'));
console.log(alex);

