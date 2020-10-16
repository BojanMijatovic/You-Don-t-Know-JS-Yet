
class User {
  constructor(name) {
    this.name = name;
  }
  welcome() {
    return `Welcome ${this.name}`;
  }
}

const alex = new User('alex');

console.log(alex.welcome());


class Car {
  constructor(model, year, color, gears) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.gears = gears;
  }

  showCar() {
    return `You have ${this.model}`
  }
}

const bmw = new Car('bmw');
console.log(bmw.showCar());


class Js {

  constructor(name) {
    this.name = name;
  }

  showName() {
    return `${this.name}`
  }
}


const a = new Js('javas');
console.log(a.showName());
console.log(Js);