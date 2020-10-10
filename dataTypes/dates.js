const today = () => {
  let date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
const user = 'Alex';
const addUser = (user, date) => `New user ${user} is created ${date}`;
console.log(addUser(user, today()));

//   more simpler approach
const newDate = new Date();
console.log(newDate.toLocaleDateString(), newDate.toLocaleTimeString());







