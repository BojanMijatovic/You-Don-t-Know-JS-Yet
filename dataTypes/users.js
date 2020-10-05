const users = [];

//  create user
const createUsers = (userName, userLastName) => {
  let user = { userName, userLastName }
  return users.push(user);
}

createUsers('Alex', 'Scoot');
createUsers('Brad', 'Travis');
createUsers('Ted', 'Luck');


//  show list off users
const showUsers = users => users.map((user, id) => `ID-${id} ${user.userName} last name ${user.userLastName}`);

// console.log(showUsers(users));

// find by name
const findUserByName = (users, name) => users.filter(user => user.userName.toLowerCase().includes(name));

console.log(findUserByName(users, 'e'));


//  remove user
const removeUser = (users, name) => {
  let indexUser = users.findIndex(user => user.userName.toLowerCase() == name.toLowerCase());
  if (indexUser > -1) {
    users.splice(indexUser, 1)
  }
}

removeUser(users, 'brad');
createUsers('Donald', 'Duck');
createUsers('Fred', 'Lucas');

// let num = 1;
//  for of loop
// for (const user of users) {
//   console.log(`${num++} ${user.userName}`);
// }

console.log(users);