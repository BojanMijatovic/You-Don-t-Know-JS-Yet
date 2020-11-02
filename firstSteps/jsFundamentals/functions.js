
function logger() {
  console.log(`Hello my name is ....`);
}

//  calling  / running /  invoking function
// logger();


function createJuice(fruit) {
  return `This juice is from ${fruit}`;
}

const apple = createJuice('apple');
console.log(apple);

const orange = createJuice('orange');
console.log(orange);

//  function declaration
function calcAge(birthYear) {
  return 2020 - birthYear;
}

const age1 = calcAge(1987);
console.log(age1);

//  function expression
const calcAge2 = function (birthYear) {
  return 2020 - birthYear;
}

const age2 = calcAge2(1985);
console.log(age2);