
//  closure
const newUser = () => {
  let user = 'Max';
  const call = () => {
    return console.log(user);
  }
  return call;
}

newUser()();

const adNum = () => {
  let a = 2;

  let c = (b) => {
    return b + a;
  }
  return c(3);
}

console.log(adNum());

const user = (name) => {
  let addName = (lastName) => {
    return console.log(`${name} ${lastName}`);
  }
  return addName('Test')
}

user('Ted')
