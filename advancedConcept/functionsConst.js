'use strict';

const addUser = function (name, lastName) {
  return `${name} ${lastName}`;
}


const showUser = function () {
  const name = addUser('Alex', 'Red');
  return `Welcome ${name}`
}

console.log(showUser());