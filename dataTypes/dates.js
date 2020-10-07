let today = () => {
  let date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

const user = 'Alex';
const addUser = (user, date) => `New user ${user} is created ${date}`;

console.log(addUser(user, today()));


const admin = {
  name: 'Ilion',
  lastName: 'Musk',
  age: 44,
  idol: true
}


let jsonUser = JSON.stringify(admin);

console.log(jsonUser);

const returnObj = JSON.parse(jsonUser);
console.log(returnObj);

