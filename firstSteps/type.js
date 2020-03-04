'use strict'

let a = '22';
// console.log(a);  // String 

let b = Number(a);
// console.log(b); // Number 22

//  implicit conversion
let c = a * 2;
// console.log(c); // Number 22

//  Hoisting 
function foo() {
  var a = 1;
  function bar() {
    var b = 2;
    function baz() {
      var c = 3;
      // console.log(a , b, c); // 1 2 3 
    }
    baz();
    // console.log(a, b); //1 2
  }
  bar();
  // console.log(a);  // 1
}
foo();

function test() {
  a = 1;
  // console.log(a);
}
test();
// console.log(a = 2);  // bad practice


//  Closure
function makeOne(x) {
  var x = 1;
  function add(y) {
    return x + y;
  }
  return add;
}

var plusOne = makeOne();
// console.log(plusOne(2)); // num 2 is call on y var 


const closure1 = (x) => {
  var x = 2;
  const test = (y) => {
    return x + y;
  }
  return test;
}

var test1 = closure1();
// console.log(test1(8)); // num 8 is on return 2 + 8


const work = (xHome) => {
  xHome = `home`;
  const free = (y) => `${y} from ${xHome}`;
  return free;
}

const testing = work();
console.log(testing('work'));

