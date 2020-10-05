
const amount = [deposit = 0];

amount.push(3, 22, 1, 11, 2,)

const sumAll = amount.reduce((acc, current) => acc += current, 0)
console.log(sumAll);

//  destructing obj
const user = {
  name: 'Alex',
  lastName: 'Smith',
  age: 37
}

const { name, lastName, age } = user;
console.log(`${name} have ${age} years old`);

const movie = {
  name: 'Batman',
  year: 2019,
  budget: 100
}

const { name: n, y, budget } = movie;
console.log(`${n} have budget ${budget}$`);

/*
    name property into the variable name.
    years property into the variable age.
    isAdmin property into the variable isAdmin (false, if no such property)
*/

const newUser = {
  name: 'Ted',
  lastName: 'Red'
}

const { name: fName, lastName: lName, isAdmin = false } = newUser;
console.log(`new user ${fName} ${lName} ${isAdmin ? 'Welcome admin' : 'Is not admin'}`);