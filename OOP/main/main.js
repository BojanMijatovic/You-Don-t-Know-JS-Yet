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

//  prototype
Person.prototype.addLastName = function(lastName) {
    this.lastName = lastName;
}

ted.addLastName('Felix');
console.log(ted);


Person.prototype.calcAge = function() {
    console.log(2021 - this.birth);
}
tom.calcAge();