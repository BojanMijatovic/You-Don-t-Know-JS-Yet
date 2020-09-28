const who = {
  name: 'Mrs White'
}

const suspect = who.name;
console.log(suspect);
who.name = 'Green'
console.log(suspect);
// references