/*
    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the value by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.
*/

const groceries = new Map([
  ['tomato', 44],
  ['apples', 47],
  ['onions', 22]
]);

console.log(groceries.get('tomato'));
console.log(groceries.set('guns', 100));
console.log(groceries.delete('onions'));
console.log(groceries);
for (item of groceries.keys()) {
  // console.log(item);
}

for (amount of groceries.values()) {
  // console.log(amount);
}


const user = {
  name: 'John',
  age: 34
}

let john = new Map(Object.entries(user));

console.log(john.get('name'));