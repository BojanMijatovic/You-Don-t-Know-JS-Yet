
const cars = [];

// add car
const addCar = (car, model, year, plateNumber) => {
  return cars.push({ car, model, year, plateNumber })
}

addCar('ford', 'focus', 2014, 101);
addCar('mercedes', 'a', 2018, 500);
addCar('bmw', 'x-5', 2016, 900);
addCar('bmw', 'x-5', 2016, 232);
addCar('bmw', 'x-5', 2016, 333);

//  show list 
const showCarsList = () => cars.map((car, id) => console.log(`${id + 1} ${car.car} model ${car.model} year ${car.year} plate number ${car.plateNumber}`));
// showCarsList();

// add new  plate number
const editCar = (carPlateNumber, newPlateNumber) => {
  if (newPlateNumber < 100 || newPlateNumber > 1000) {
    return console.log(`Please insert 6 digits new plate number`);
  } else {
    const findCar = cars.findIndex(car => car.plateNumber == carPlateNumber);
    return cars[findCar].plateNumber = newPlateNumber;
  }

}
editCar(500, 222);
editCar(900, 142);
console.log(cars);

//  find car by plate number
const findCarByPlate = (number) => {
  const filteredCars = cars.filter(car => car.plateNumber == number);
  return filteredCars.forEach(car => console.log(`Find car ${car.car} ${car.model} ${car.year} ${car.plateNumber}`));
}

findCarByPlate(222);
findCarByPlate(3334);
// findCarByPlate(12554);



//  remove car
const removeCar = (carNumber) => {
  const carIndex = cars.findIndex(car => car.plateNumber == carNumber);
  if (carIndex > -1) {
    cars.splice(carIndex, 1);
  }
}

// removeCar(12554);
// removeCar(888);
// removeCar(3);
// console.log(cars);

