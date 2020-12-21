const loginForm = document.querySelector('.login');
const form = document.getElementById('form');
const messages = document.querySelector('.messages');
const showBtn = document.querySelector('.show');
const displayBtn = document.querySelector('.displayBtn');


// show form
showBtn.addEventListener('click', () => {
  displayBtn.classList.add('login');
  loginForm.classList.remove('login');
  loginForm.classList.add('showLogin');
})


//  form name and pin
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const pin = document.getElementById('pin');

  if (name.value == '' || Number(pin.value) == false) {
    messages.innerHTML = `<div class="fail"> Insert real values <br>
    </div>`;
  } else {
    messages.innerHTML = `<div class="success"> Welcome: ${name.value} your pin is ${pin.value}</div>`;
    name.value = '';
    pin.value = '';
  }
})


