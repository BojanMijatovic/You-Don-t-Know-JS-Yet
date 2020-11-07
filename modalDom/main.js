'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtnModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

//  close Modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// open Modal function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let btn of showModal) {
  btn.addEventListener('click', openModal)
}

closeBtnModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
  e.key === 'Escape' ? closeModal() : false;
})