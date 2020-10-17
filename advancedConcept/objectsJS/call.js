
const obj = {
  num: 2
}

const obj2 = {
  num: 5
}

// const addThis = (a) => console.log(this.num + a);

const addThis = function (a) {
  return console.log(this.num + a);
}

// addThis.call(obj, 3);


// const arr = [1, 2, 3];

// addThis.apply(obj, arr);

const b = addThis.bind(obj);

b(4);

console.log(strict);