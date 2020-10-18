const users = []

function createUser(name, lastName) {
  return users.push({ name, lastName });
}

createUser('tom', 'a');
createUser('alex', '123');

console.log(users);

let date = new Date();
console.log(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
// console.log(`Something like this ${date.toLocaleString()}`);