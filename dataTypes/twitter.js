
const twitter = {
  users: [],
  addUser(userName, password) {
    return this.users.push({ userName: userName, password: password })
  }
}

twitter.addUser('alex', '123');
twitter.addUser('alex', '123');
twitter.addUser('alex', '123');
