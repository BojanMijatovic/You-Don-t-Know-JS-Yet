
const btn = document.querySelector('button');
const app = document.querySelector('.app');


btn.addEventListener('click', function () {
  const randomNum = Math.trunc(Math.random() * 10000) + 1;
  app.style.backgroundColor = `#${randomNum}`;
})  