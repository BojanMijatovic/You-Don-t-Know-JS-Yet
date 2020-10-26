

const Person = function (name, lastName, job) {
  this.name = name;
  this.lastName = lastName;
  this.job = job;
}
/*The first part of this example shows the typical use of a constructor—to create a new object via the
new operator.*/
let alex = new Person('Alex', 'Rust', 'freelance');

console.log(alex);

let fred = new Person('Fred', 'Smith', 'full stack');
console.log(fred);