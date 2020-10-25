
const twitter = {
  users: [],

  //add user
  addUser() {
    let userName = prompt('Add user name');
    let password = prompt('enter password');
    if (userName.length <= 0) {           // validation off user
      return console.log(`Please insert user name`);
    } else if (password.length < 3) {    // validation off password
      return console.log(`Enter min 4 characters`);
    }
    return this.users.push({ userName, password })
  },

  // show all users
  showUsers() {
    return this.users.map((user, id) => console.log(`${id + 1} ${user.userName}`))
  },

  //  find user
  findUser(userToFind) {
    const usersList = this.users.filter(user => user.userName.toLowerCase().includes(userToFind.toLowerCase()));
    return usersList.map(user => console.log(`We have ${user.userName}`))
  },

  // remove user
  removeUser(userToRemove) {
    const userIndex = this.users.findIndex(user => user.userName == userToRemove);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1)
    }
  },

  // change user
  changeUserName(userToFind, newName, newPassword) {
    const userIndex = this.users.findIndex(user => user.userName == userToFind);
    if (userIndex > -1) {
      this.users[userIndex].userName = newName;
      this.users[userIndex].password = newPassword;
    }
  }
}

twitter.addUser();
twitter.addUser();


twitter.addUser();

// twitter.findUser('a')
// twitter.showUsers();

// twitter.removeUser('ted')
console.log(twitter);

twitter.changeUserName('a', 'new', 'dsadsd');

console.log(twitter);