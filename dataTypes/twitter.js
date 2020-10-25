
const twitter = {
  users: [],

  //add user
  addUser() {
    const userName = prompt('Add user name');
    const password = prompt('enter password');
    const posts = [];
    // check if user exist
    const checkUser = this.users.findIndex(user => user.userName.toLowerCase() == userName.toLowerCase());

    if (checkUser > -1) {
      return console.log(`We have that user, enter new name`);
    }
    else if (userName.length < 1) {           // validation off user
      return console.log(`Please insert user name or we have that user`);
    } else if (password.length < 3) {       // validation off password
      return console.log(`Enter min 4 characters`);
    }
    return this.users.push({ userName, password, posts });
  },

  // show all users
  showUsers() {
    return this.users.map((user, id) => console.log(`${id + 1} ${user.userName}`))
  },

  //  find user
  findUsers(userToFind) {
    const usersList = this.users.filter(user => user.userName.toLowerCase().includes(userToFind.toLowerCase()));
    return usersList.map(user => console.log(`We have ${user.userName}`))
  },

  // remove user
  removeUser(userToRemove) {
    const userIndex = this.users.findIndex(user => user.userName == userToRemove);
    userIndex > -1 ? this.users.splice(userIndex, 1) : console.log(`We don't have that user to remove`);
  },

  // change user
  changeUserName() {
    let userToFind = prompt('Enter user name to find');
    const userIndex = this.users.findIndex(user => user.userName == userToFind);
    if (userIndex == -1) {
      return console.log(`We don't have that user`);
    } else {
      let newName = prompt('Enter new name');
      let newPassword = prompt('Enter new password')
      this.users[userIndex].userName = newName;             // change  user  name 
      this.users[userIndex].password = newPassword;      // change  user  password 
    }
  },

  //  add user post
  userAddPost() {
    const userName = prompt("Enter user name");
    const userIndex = this.users.findIndex(user => user.userName == userName);
    if (userIndex > -1) {
      const post = prompt('Add post');
      const usersPost = this.users[userIndex].posts;      // add post
      usersPost.push({ post });
    }
  }
}

// twitter.addUser();
// twitter.addUser();
// twitter.addUser();

// twitter.userAddPost();
// twitter.userAddPost();
// twitter.userAddPost();
// twitter.findUser('a')
// twitter.showUsers();
// twitter.removeUser('ted')
// twitter.changeUserName();

// twitter.userAddPost('a', '123');
// twitter.userAddPost('a', 'aaaaaaaaa');
console.log(twitter.users);
