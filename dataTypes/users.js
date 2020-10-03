const users = [];

const createUsers = (userName, userLastName) => {
  let user = { userName, userLastName }
  return users.push(user);
}

createUsers('Alex', 'Scoot');
createUsers('Brad', 'Travis');
createUsers('Ted', 'Luck');
console.log(users);

const showUsers = (users) => {
  return users.map((user, id) => `ID-${id} ${user.userName} last name ${user.userLastName}`)
}

console.log(showUsers(users));

const findUserByName = (users, name) => {
  return users.filter(user => user.userName.toLowerCase() == name.toLowerCase())
}

console.log(findUserByName(users, 'BRaD'));


const removeUser = (users, name) => {
  let indexUser = users.findIndex(user => user.userName.toLowerCase() == name.toLowerCase());
  if (indexUser > -1) {
    users.splice(indexUser, 1)
  }
}

removeUser(users, 'brad');
console.log(users);