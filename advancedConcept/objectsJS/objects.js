'use strict';



const userName = 'pEteR';

const lowerName = userName.toLowerCase();
// const name = lowerName[0].toUpperCase().concat(lowerName.slice(1))
// console.log(name);


const plane = 'Here is new framework with new js';

const newStr = plane.replaceAll('new', 'test');
console.log(newStr);


const name = 'new sir alan ford';

const capitalizeName = function (str) {
  const newName = str.split(' ');
  const test = [];
  for (const n of newName) {
    test.push(n[0].toUpperCase() + n.slice(1));
  }
  return test.join(' ');
}
console.log(capitalizeName(name));