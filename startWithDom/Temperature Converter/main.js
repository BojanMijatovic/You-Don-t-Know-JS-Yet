
let kelvin = document.getElementById('kelvin');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


const convertKelvin = function () {
  let kelvinValue = parseInt(kelvin.value);
  return result.textContent = `Result is ${kelvinValue - 273.15} Celsius`
}

btn.addEventListener('click', convertKelvin);