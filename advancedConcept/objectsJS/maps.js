/*
    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the value by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.
*/

const users = new Map();
users.set('alex', 110);
users.set('john', 20);
users.set('ted', 50);


//  show one 
const showValueUser = user => users.get(user);
console.log(showValueUser('ted'));

// show all
const showAll = user => {
  for (user of users.keys()) {
    console.log(user);
  }
}
showAll(users);

//  remove all 
const removeAll = () => users.clear();
removeAll();
console.log(users);

/*
Set – is a collection of unique values.
Methods and properties:
    new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
    set.add(value) – adds a value (does nothing if value exists), returns the set itself.
    set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    set.has(value) – returns true if the value exists in the set, otherwise false.
    set.clear() – removes everything from the set.
    set.size – is the elements count.
*/ 