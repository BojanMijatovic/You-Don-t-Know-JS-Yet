// Merging Objects

const a = {
  id: 'a'
}

let b = {
  id: 'b'
}


const test = Object.assign(a);
console.log(test);
console.log(a);

b = Object.assign(a);

console.log(test === a);
console.log(b === a);