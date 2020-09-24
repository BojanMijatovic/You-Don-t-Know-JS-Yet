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

console.log(string_parameterize("Robin Singh"));