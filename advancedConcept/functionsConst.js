
function first() {
  const a = 'Hello';

  function second() {
    const b = 'user';
    return b;
  }

  return console.log(`${a} ${second()} ${third()}`);
}


function third() {
  const c = 'Alex';
  return c;
}

first();


//   this word
const person = {
  name: 'Alex',
  showAge: () => console.log(this),
  show() {
    console.log(this);
  }
}

// person.showAge();
// person.show();

const matilda = {
  year: 2017
}