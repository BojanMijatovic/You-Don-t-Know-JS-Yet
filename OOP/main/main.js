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
    getInfoModel() {
        return console.log(`${this.model} type ${this.type},max speed is ${this.speed} km/h with gear box ${this.gearBox} levels`);
    }
}


const zx3 = new Bmw('bmw', 'zx3', 200, 5, 5);

zx3.getInfoModel();
zx3.accelerate(20);


class ElX5 extends Bmw {
    constructor(model, type, speed, gearBox, doors, battery, diskBreaks) {
        super(model, type, speed, gearBox, doors);
        this.battery = battery;
        this.diskBreaks = diskBreaks;
    }

    accelerate(val) {
        this.speed += val;
        this.battery--;
        return console.log(`On accelerate ${val}km/h your battery is ${this.battery}% speed now is ${this.speed}km/h`);
    }
}

const x5 = new ElX5('bmw', 'zx3', 100, 6, 5, 100, 4);
x5.accelerate(30);
console.log(x5);