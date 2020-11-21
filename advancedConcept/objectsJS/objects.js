'use strict';

const userName = 'pEteR';

const lowerName = userName.toLowerCase();
const name = lowerName[0].toUpperCase().concat(lowerName.slice(1))
console.log(name);


const plane = 'Here is new framework with new js';

const newStr = plane.replaceAll('new', 'test');
console.log(newStr);