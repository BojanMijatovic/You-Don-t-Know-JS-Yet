'use strict';

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



// const btn = document.querySelector('button');                                            //  button
// btn.addEventListener('click', lufthansa.buyPlanes.bind(lufthansa))          // click is on btn so that is this


// const addTax = (rate, value) => rate + rate * value;
// const addVat = addTax.bind(null, 0.23);
const addVat = () => (rate, value) => rate + rate * value;
// console.log(addVat(null)(0.1, 100));
// console.log(addVat(null)(0.15, 200));



//  -------------- practice bind
const mainObj = {
  addFramework(addName, lastName, framework) {
    return `${this.name = addName} ${this.lastName = lastName} work on framework ${this.framework = framework}`
  },
  addExperience(years) {
    return `${this.name} have ${this.years = years} years off experience in ${this.framework}`;
  }
}

// console.log(mainObj.addFramework('Tom', 'Scot', 'react'));
// console.log(mainObj.addExperience(4));
// console.log(mainObj);

//  bind function
const addFramework = mainObj.addFramework;
const addExperience = mainObj.addExperience;

const alex = {}

const alexFramework = addFramework.bind(alex);
const alexExperience = addExperience.bind(alex);
// console.log(alexFramework('Alex', 'Piston', 'angular'));
// console.log(alexExperience(2));
// console.log(alex);


const ted = {};

const addTedFramework = addFramework.bind(ted);
const tedExperience = addExperience.bind(ted);
// console.log(addTedFramework('Ted', 'Jonson', 'Vue'));
// console.log(tedExperience('3+'));



const newUser = {
  addNewUser(name, lastName) {
    return `${this.name = name}  ${this.lastName = lastName}`
  }
}

const addNewUser = newUser.addNewUser;

const tom = {}

const addTom = addNewUser.bind(tom);
// console.log(addTom('Tom', 'Sanders'));
// console.log(tom);

const fred = {}

const addFred = addNewUser.bind(fred);
// console.log(addFred('Fred', 'Luton'));


//  call method

const frameworks = {
  frontend: [],
  addFrontend(add) {
    return this.frontend.push(add)
  }
}

const newFramework = frameworks.addFrontend;

const framework = {
  frontend: [],
  showAll() {
    return ` You have on frontend frameworks ${this.frontend}`
  }
}

const addAngular = newFramework.call(framework, 'angular');
const addReact = newFramework.call(framework, 'react');
const addVue = newFramework.call(framework, 'vue');

console.log(framework);
console.log(framework.showAll());



const btn = document.querySelector('button');


let num = 2;

// framework.addNewFramework = function () {
//   // console.log(`${this}  from framework`);
//   console.log(framework, this);
//   console.log(`${num++}`);
//   console.log(this.frontend.push('new test'));
//   console.log(this.frontend);
// }

// btn.addEventListener('click', framework.addNewFramework.bind(framework));

// const person = {
//   name: 'Alex'
// }



// person.addLastName = () => {
//   this.lastName = 'Test';
//   console.log(person);
//   console.log(this);
// };

// console.log(this);

// person.addLastName = function () {
//   this.lastName = 'From here';
//   this.year = 30;
//   console.log(person);
//   console.log(this);
// }

// btn.addEventListener('click', person.addLastName);


// console.log(person);



// const secure = function () {
//   let number = 0;
//   return function () {
//     number++;
//     console.log(`number is ${number}`);
//   }
// }

// const a = secure();
// a();
// a();
// a();
// a();

// console.dir(a)


// let a;

// const b = function () {
//   let c = 4;
//   a = function () {
//     console.log(c * 2);
//   }
//   console.log(a);
// }

// b();
// a();


//  closure
(function () {
  const h = document.querySelector('h1');
  h.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    h.style.color = 'blue';
  })
})();