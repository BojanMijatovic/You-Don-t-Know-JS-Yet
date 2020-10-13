

const calc = {
  start: 0,

  //  add cash
  addDeposit(add) {
    return console.log(`You now have ${this.start += add}$`);
  },

  //  remove cash
  removeDeposit(remove) {
    if (remove > this.start) {
      return console.log(`Sorry you do not have that money you have ${this.start}`);
    } else {
      return console.log(`You just spend ${remove}$ you have more ${this.start -= remove}$`);
    }
  },

  // clear all
  clearDeposit() {
    return console.log(`You now have 0$ on account ${this.start = 0}`);
  }
}

const add = calc.addDeposit(41);
const add1 = calc.addDeposit(70);
console.log(calc.start);
const re1 = calc.removeDeposit(200)
const re = calc.removeDeposit(4);
console.log(calc.start);
const z = calc.clearDeposit()
// console.log(calc);