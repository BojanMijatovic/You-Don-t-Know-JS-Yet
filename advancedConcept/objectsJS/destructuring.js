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


//  destructuring objects
const person = {
  name: 'Alex',
  lastName: 'Red',
  age: 32,
  job: 'developer',
  hobby: ['airsoft', 'mma', 'projects'],
  technologies: {
    start: 'react',
    work: 'javascript'
  }
}

// const { name, lastName, technologies: frameworks, job, age } = person;
// console.log(name, frameworks);
// console.log(typeof (age));

// const { type, vine } = beerShop;
// console.log(type, vine);

// const { name: firstName } = person;

// console.log(firstName);

// const { technologies } = person;
// console.log(technologies);


//  spread operator

const arr = [1, 2, 334, 44, 5, 67, 532];

const newAr = [213, 111, 1, ...arr,];
console.log(newAr);
console.log(arr);

// const { hobby } = person;

const addReact = ['react', ...person.hobby];
console.log(person);

console.log(addReact);


const name = 'Alex';

const letterName = [...name];
console.log(letterName);