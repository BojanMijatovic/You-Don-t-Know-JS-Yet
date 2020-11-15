
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
// const person = {
//   name: 'Alex',
//   showAge: () => console.log(this),
//   show() {
//     console.log(this);
//   }
// }

// person.showAge();
// person.show();

const matilda = {
  year: 2017,
  name: 'Test'
}


const a = {
  name: 'A',
  show() {
    console.log(this);
  },
  newObj: {
    newName: 'B',
    showB() {
      console.log(this);
    },
    showArr: () => {
      console.log(this);
    }
  }
}

// a.show();                    // show A obj
// a.newObj.showB();    // show newObj
// a.newObj.showArr();  // show  window obj


const person = {
  name: 'Alex',
  year: 20,

  showAge: function () {

    console.log(this.year);
    let addAge = () => {
      console.log(this.year + 20);
    }

    return addAge();
  }
}

person.showAge();