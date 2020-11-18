'use strict';

const restaurant = {
  name: 'Adriana',
  location: 'Bul... , Novi Sad , Serbia',
  categories: ['pizza', 'vegetarian', 'burgers'],
  mainMenu: ['pizza', 'pasta', 'breakfast'],
  starterMenu: ['lunch', 'beer', 'juice'],
  orderFood(menuIndex, startMenuIndex) {
    return [this.mainMenu[menuIndex], this.starterMenu[startMenuIndex]]
  }
}
//  -------------------------------destructuring arrays
// const [pizza, , burgers] = restaurant.categories;

let [first, second] = restaurant.categories;

[first, second] = [second, first];

const [order1, order2] = restaurant.orderFood(0, 0);
// console.log(order1, order2);

const beerShop = {
  type: ['lager', 'ipa', 'red', 'black'],
  vine: ['black', 'white'],
  orderDrink(beerOrder, vineOrder) {
    return [this.type[beerOrder], this.vine[vineOrder]]
  }
}

// const [beer, vine] = beerShop.orderDrink(2, 1);

// console.log(`You order ${beer} beer and ${vine} vine`);


//  ------------------------  destructuring objects
// const person = {
//   name: 'Alex',
//   lastName: 'Red',
//   age: 32,
//   job: 'developer',
//   hobby: ['airsoft', 'mma', 'projects'],
//   technologies: {
//     start: 'react',
//     work: 'javascript'
//   }
// }

// const { name, lastName, technologies: frameworks, job, age } = person;
// console.log(name, frameworks);
// console.log(typeof (age));

// const { type, vine } = beerShop;
// console.log(type, vine);

// const { name: firstName } = person;

// console.log(firstName);

// const { technologies } = person;
// console.log(technologies);


//  -------------------spread operator

// console.log(newAr);
// console.log(arr);

// const { hobby } = person;

// const addReact = ['react', ...person.hobby];
// console.log(person);

// console.log(addReact);


// console.log(letterName);

// console.log(newPerson);
// console.log(person);


//    -------------- rest operator

const [a, b, ...next] = [1, 2, 3, 4, 5];
// console.log(a, b);

const [pizza, ...otherFood] = restaurant.categories;

// console.log(pizza);


// const person = {
//   name: 'Alex',
//   lastName: 'Red',
//   age: 32,
//   job: 'developer',
//   hobby: ['airsoft', 'mma', 'projects'],
//   technologies: {
//     start: 'react',
//     work: 'javascript'
//   }
// }

// const { technologies, ...others } = person;
// console.log(technologies);

const add = function (...numbers) {
  let zero = 0;
  for (let num of numbers) {
    zero += num;
  }
  console.log(zero);
}

// add(2, 1);
// add(2, 3, 4);
// add(2, 3, 4, 1, 1, 1);



const beerNum = beerShop.type.length || 0;
// console.log(beerNum); 

//  ---------------- destructing arr and obj

const arr = ['react', 'redux', 'next.js'];

// const [react, redux] = arr;
// console.log(react);


const person = {
  name: 'Alex',
  lastName: 'Swan'
}

const { name: firstName } = person;
// console.log(firstName);


//   ---------------- spread operator 

const newArr = [1, 2, 3];
const addArr = [...newArr, 4, 5, 6];
// console.log(addArr);

const addFramework = [...arr, 'html', 'css', 'vanillaJs'];
// console.log(addFramework);

//  ------------- rest operator 
const [, , nextJs, ...other] = addFramework;
console.log(nextJs);


//  practice
const sumNums = function (...numbers) {
  let a = 0;
  numbers.forEach(number => a += number);
  return console.log(a);
}


// sumNums(2, 3)
// sumNums(2, 3, 10)
// sumNums(2, 3, 10, 20)

const totalArr = [...addArr, ...addFramework, ...newArr];
// console.log(totalArr);

const [, , , , , , react, ...rest] = totalArr;

console.log(react);