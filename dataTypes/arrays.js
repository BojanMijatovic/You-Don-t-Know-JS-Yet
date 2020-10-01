// copy by reference (two variables reference the same array)
const arr = ['js', 'react'];
// console.log(arr);
// arr.splice(0, 2, 'next.js');
// console.log(arr);

arr.forEach(item => console.log(`I must learn ${item}`));
arr.push('react', 'redux', 'native');
arr.splice(1, 1);
// console.log(arr);
let test = arr.indexOf('native');  // return position off item in array
// console.log(test);

const accounts = [
  { userID: 1, name: 'Alex' },
  { userID: 2, name: 'Alfonso' },
  { userID: 3, name: 'Ted' },
  { userID: 4, name: 'Bryan' }
]

const findAccount = accounts.find(id => id.userID == 3);
// console.log(findAccount);

const findByName = accounts.filter(user => user.name.toLowerCase().includes('a'));
// console.log(findByName);

const mapAccount = accounts.map(user => `${user.name} have id ${user.userID}`);
// console.log(mapAccount);

let name = 'bojan';
let upperName = name.toUpperCase().split('').join('');
// console.log(upperName);

const money = [2, 4, 5, 55, 6];
const total = money.reduce((acc, current) => acc + current, 0);
// console.log(total);

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

const word = (str) => {
  // split word - map to create first letter upper case , join in one word
  return str.split('-').map((word, i) => i == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

// console.log(word('background-color'));
// console.log(word('list-style-image'));

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them

let newArr = [1, 4, 6, 77, 2, 3,];

const filterArr = newArr.filter(num => num > 1 && num <= 4);
console.log(filterArr);