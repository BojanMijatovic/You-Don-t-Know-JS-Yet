class Car {
    constructor(model, type, speed) {
        this.model = model;
        this.type = type;
        this.speed = speed;
    }

    showModel() {
        return console.log(`${this.model} have type ${this.type}  and max speed is ${this.speed}`);
    }

    accelerate(val) {
        this.speed = this.speed + val;
        return console.log(`Your speed now is ${this.speed}`);
    }

    break (val) {
        this.speed = this.speed - val;
        return console.log(`Your speed now is ${this.speed}`);
    }
}

const bmw = new Car('bmw', 'x5', 100);
bmw.showModel();
bmw.accelerate(40);
bmw.break(20);
console.log(bmw);


//  new class
class Bmw extends Car {
    constructor(model, type, speed, gearBox, doors) {
        super(model, type, speed);
        this.gearBox = gearBox;
        this.doors = doors;
    }
    showInfoModel() {
        return console.log(`${this.model} type ${this.type},max speed is ${this.speed} km/h with gear box ${this.gearBox} levels`);
    }
}


const zx3 = new Bmw('bmw', 'zx3', 200, 5, 5);

zx3.showInfoModel();
zx3.accelerate(20);