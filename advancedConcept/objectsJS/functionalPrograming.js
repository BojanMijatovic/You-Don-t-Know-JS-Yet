
// let suspect = who.name;
// console.log(suspect);
// console.log(who);
// who.name = 'Green';
//  all property's are strings
// console.log(typeof (who.name));   //  string :)
/*
 work on the v8 and JavaScriptCore JS engines for a living. I enjoy doing this, this is fun. I do other things, too (like build some fun OBS Studio plugins)
 */

// let a = 0.1;
// let b = 0.447;
// let c = a + b;
// console.log(typeof (c.toFixed(1)));


//Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
const usFirst = (str) => {
  let f = str[0].toUpperCase();
  return `${f}${str.slice(1)}`;
}

console.log(usFirst('alex'));

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
const checkSpam = str => str.includes('viagra') || str.includes('xxx') ? true : false;

console.log(checkSpam('vasas viagra'));
console.log(checkSpam('vxxxx xxx'));
console.log(checkSpam('sads'));