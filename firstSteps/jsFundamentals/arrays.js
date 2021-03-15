const friend1 = 'Michel';
const friend2 = 'Alex';
const friend3 = 'Ted';

const friends = ['MIchel', 'Alex', 'Ted'];
// console.log(friends, friends[0], friends.length);


const job = 'junior front-end developer'
const jonas = ['Jonas', 'Tinder', job, 2021 - 1987, friends];
// console.log(jonas);


//  add element on end of array
friends.push('Freddy');

//  add element on start of array
friends.unshift('Rachel');

//  remove last element of array
const lastFriend = friends.pop();
console.log(lastFriend);

// remove first element on array
const firstFriend = friends.shift();

//  find index of element in array
const elementIndex = friends.indexOf('Ted');
// console.log(elementIndex);

//  includes method return boolean value is element in array
const isElement = friends.includes('Tom');
console.log(isElement);