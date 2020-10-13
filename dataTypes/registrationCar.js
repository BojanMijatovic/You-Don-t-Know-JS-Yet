
const cars = [];

// add car
const addCar = (car, model, year, plateNumber) => {
  return cars.push({ car, model, year, plateNumber })
}

addCar('ford', 'focus', 2014, 12554);
addCar('mercedes', 'a', 2018, 1269);
addCar('bmw', 'x-5', 2016, 124789);
addCar('bmw', 'x-5', 2016, 888);
addCar('bmw', 'x-5', 2016, 3);

//  show list 
const showCarsList = () => cars.map((car, id) => console.log(`${id + 1} ${car.car} model ${car.model} year ${car.year} plate number ${car.plateNumber}`));
// showCarsList();

// add new  plate number
const editCar = (carPlateNumber, newPlateNumber) => {
  const findCar = cars.findIndex(car => car.plateNumber == carPlateNumber);
  return cars[findCar].plateNumber = newPlateNumber;
}

editCar(124789, 142222);

//  find car by plate number
const findCarByPlate = (number) => {
  let filteredCars = cars.filter(car => car.plateNumber == number);
  return filteredCars.forEach(car => console.log(`${car.car} ${car.model} ${car.year} ${car.plateNumber}`));
}

findCarByPlate(3);
findCarByPlate(888);
findCarByPlate(12554);
console.log(cars);
