const user = {
  name: 'Alex',
  age: 34
}

//  add properties
user.isAdmin = false;
// remove properties
delete user.isAdmin;
//  add properties two words
user['love hiking'] = true;
// remove properties two words
delete user['love hiking'];
console.log(user);

// computed properties.
let hobby = prompt('What you love to doo?');
user.hobby = hobby;
console.log(user);
// computed properties same
let num = prompt('add num');
user.numCount = num;
console.log(user);