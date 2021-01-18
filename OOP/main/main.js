'use strict';

const Person = function(firstName, birth) {
    this.firstName = firstName;
    this.birth = birth;
}

const alex = new Person('Alex', 1984);
// console.log(alex);

const tom = new Person('Tom', 1987);
// console.log(tom);

const ted = new Person('Ted', 1980);
// console.log(ted);

// add   prototype   method
Person.prototype.addLastName = function(lastName) {
    this.lastName = lastName;
}

ted.addLastName('Felix');
console.log(ted);


Person.prototype.calcAge = function() {
    console.log(2021 - this.birth);
}
tom.calcAge();

console.log(Person.prototype);
console.log(ted.__proto__);
console.log(Person.prototype === ted.__proto__);


Person.prototype.addJob = function(job) {
    this.job = job;
    console.log(`${this.firstName} new job is ${this.job}`);
}

alex.addJob('web developer');
ted.addJob('mechanic');


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
console.log(max);

max.accelerate();
max.break();