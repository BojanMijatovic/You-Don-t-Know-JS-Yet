// Write a JavaScript function to check whether a string is blank or not
function is_Blank(str) {
  if (str.length === 0) {
    return true;
  } return false;
}
// console.log(is_Blank(''));
// console.log(is_Blank('abc'))

// Write a JavaScript function to capitalize the first letter of a string
function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1, str.length)}`
}
// console.log(capitalize('js string exercises'));

// Write a JavaScript function to split a string and convert it into an array of words
function string_to_array(str) {
  return str.trim().split(' ')
}
// console.log(string_to_array("Robin Singh"));

// Write a JavaScript function to parameterize a string "robin-singh-from-usa"
function string_parameterize(str) {
  str = str.toLowerCase();
  return str.replace(' ', '-');
}
// console.log(string_parameterize("Robin Singh"));

//reverse string
function rev(para) {
  return para.split('').reverse().join('');
}
// console.log(rev('daaa'));

// palindrome 
function palindrome(str) {
  if (str === str.split('').reverse().join('')) {
    return `${str} is palindrome`
  } return `${str} in not palindrome`
}
// console.log(palindrome('dad'));
// console.log(palindrome('test'));




/*
Function starting with…

    "get…" – return a value,
    "calc…" – calculate something,
    "create…" – create something,
    "check…" – check something and return a boolean, etc.

    showMessage(..)     // shows a message
    getAge(..)          // returns the age (gets it somehow)
    calcSum(..)         // calculates a sum and returns the result
    createForm(..)      // creates a form (and usually returns it)
    checkPermission(..) // checks a permission, returns true/false
*/