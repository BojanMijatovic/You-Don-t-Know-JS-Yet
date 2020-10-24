
// const person = {
//   name: 'Nicolas',
//   age: 32
// }

// console.log(person['name']);         // same
// console.log(person.name);           // same here :)

// person['hobbies for play'] = ['react', 'js'];   // this works


const colors = ['blue', 'green', 'red', 'tan'];
// colors.length = 2;                                      // this is arr length


for (const [idEl, valueEl] of colors.entries()) {
  // console.log(` ${idEl + 1} ${valueEl}`);     // very easy to split out the key/value pairs inside a loop
}


// Conversion Methods
// const toStr = colors.toString();
// console.log(toStr.replace(',', ' '));
// console.log(colors);


//   Sort methods 

let values = [1, 3, 333, 4, 5, 66];

const sortNum = values.sort((a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1;
  } return 0
})

// console.log(sortNum);

// const sl = values.slice(1, 3);
// console.log(sl);
// console.log(values);
// values.slice(1, 4);
// console.log(values);

const a = [1, 2, 3, 4, 5, 6];

const b = a.splice(0, 2, 'add One', 'and Two');
// console.log(a);


// THE MAP TYPE 
/*Key/value pairs can be added after initialization with set(), queried with get() and has(), counted
with the size property, and removed with delete()and clear():*/

// const person = new Map();

// const addName = person.set('firstName', 'Jonas');
// const addLastName = person.set('lastName', 'Tomas');
// console.log(person);

// let clearLastName = person.delete('lastName');

// console.log(person);

const year = () => 'year';

// const addYear = person.set(year, 2020);

// console.log(person);

// const removeAll = () => person.clear();
// removeAll();
// console.log(person);

// console.log(b);
const addNums = [...b, 100, 101, 102, 103];

// console.log(addNums);

//  -------- OBJECTS

const person = {
  name: 'John',
  lastName: 'Doe',
  sayHello() {
    return `Hello ${this.name} ${this.lastName}`
  }
}

console.log(person);

Object.defineProperty(person, 'name', {
  writable: false,
  value: 'Test'
});

// console.log(person);

person.name = 'React';                            // not work because writable: false,


Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Here is new Value'
})

delete person.name;                                   // not work because configurable: false

person.name = 'This is  now new Value';     //  not work    because configurable: false




const book = {
  title: 'LOTR',
  year: 2015
}

Object.defineProperty(book, 'year', {
  get() {
    return this.year;
  },
  set(newEdition) {
    if (newEdition > this.year) {
      this.edition = newEdition;
    }
  }
})

console.log(book);


/*
 book.year = 2020;
cannot be written to and attempts to do so will be ignored. In strict mode, trying to write to a property
with only a getter throws an error.
*/

book.newEdition = 2018;

console.log(book);



