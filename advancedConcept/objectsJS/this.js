
// const calc = {
//   num: 5,
//   read() {
//     return this.num
//   },
//   sum() {
//     return this.num + this.num
//   },
//   multiply() {
//     return this.num * this.num
//   }
// }

// console.log(calc.read());
// console.log(calc.sum());
// console.log(calc.multiply());


//  ----- Notes object

// const notes = {
//   note: '',
//   addNote(newNote) {
//     this.note = newNote
//   },
//   showNote() {
//     return this.note;
//   },
//   removeNote() {
//     delete this.note
//   }
// }

// notes.addNote('lorem is my new Note')
// console.log(notes.showNote());
// notes.removeNote();
// notes.addNote('Here is new note')
// console.log(notes.showNote());



// ------Constructor Functions


// function Car(name, type) {
//   this.name = name;
//   this.type = type;
//   this.showCar = function () {
//     return `${this.name} ${this.type}`
//   }
// }

// let volvo = new Car('volvo', 'mt-400');
// console.log(volvo);
// console.log(volvo.showCar());


// function User(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
//   this.showUser = function () {
//     return `${this.name} ${this.lastName}`
//   }
// }

// const user = new User('Alex', 'Smith');
// console.log(user.showUser());

// function Calculator() {
//   this.num1 = parseInt(prompt('num1'));
//   this.num2 = parseInt(prompt('num2'));
//   this.sumNums = function () {
//     return `${this.num1 + this.num2}`
//   }
// }

// const sum = new Calculator();
// console.log(sum.sumNums());