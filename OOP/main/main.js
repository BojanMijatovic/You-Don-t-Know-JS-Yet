'use strict';

// const Person = function(firstName, birth) {
//     this.firstName = firstName;
//     this.birth = birth;
// }

// const alex = new Person('Alex', 1984);
// console.log(alex);

// const tom = new Person('Tom', 1987);
// console.log(tom);

// const ted = new Person('Ted', 1980);
// console.log(ted);

// add   prototype   method
// Person.prototype.addLastName = function(lastName) {
//     this.lastName = lastName;
// }

// ted.addLastName('Felix');
// console.log(ted);


// Person.prototype.calcAge = function() {
//         console.log(2021 - this.birth);
//     }
// tom.calcAge();

// console.log(Person.prototype);
// console.log(ted.__proto__);
// console.log(Person.prototype === ted.__proto__);


// Person.prototype.addJob = function(job) {
//     this.job = job;
//     console.log(`${this.firstName} new job is ${this.job}`);
// }

// alex.addJob('web developer');
// ted.addJob('mechanic');


const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`Speed now is ${this.speed}`);
}

Car.prototype.break = function() {
    this.speed -= 5;
    console.log(`Speed now is ${this.speed}`);
}


const max = new Car('audi', 100);
// console.log(max);

// max.accelerate();
// max.break();


//  class declaration ES6
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    }

    calcAge(year) {
        return year - this.birthYear
    };

    get age() {
        return 2021 - this.birthYear;
    }
}

const fillip = new Person('fillip', 2010);
console.log(fillip);
console.log(fillip.calcAge(2021));
console.log(fillip.age);

const acc = {
    owner: 'Alex',
    movements: [1312, 13, 111, 33],

    // getter
    get latest() {
        return this.movements.splice(this.movements.length - 1)
    },

    set latest(movement) {
        this.movements.push((movement))
    }
}

console.log(acc.latest);



const PersonProto = {
    calcAge() {
        return 2021 - this.birthYear
    }
}

const steven = Object.create(PersonProto);
steven.firstName = 'steven';
steven.birthYear = 1987;
console.log(steven.calcAge());

console.log(steven.__proto__);