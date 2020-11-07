'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtnModal = document.querySelector('.close-modal');

const showModal = document.querySelectorAll('.show-modal');

console.log(showModal);

for (let btn of showModal) {
  btn.addEventListener('click', function () {
    modal.classList.remove('hidden');
  })
}