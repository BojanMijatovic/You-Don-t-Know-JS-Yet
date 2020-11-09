
const billAmount = document.getElementById('bill__amount');
const percentBill = document.getElementById('percent__tip');
const tipAmount = document.querySelector('.tip__amount');
const total = document.querySelector('.total');
const calc = document.querySelector('button');



calc.addEventListener('click', function () {
  const amount = (billAmount.value / 100) * percentBill.value;
  console.log(amount);
  tipAmount.textContent = amount;
  const bill = parseInt(billAmount.value);
  console.log(bill);
  total.textContent = bill + amount;
})

