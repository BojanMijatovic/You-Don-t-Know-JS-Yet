
const allLinks = document.querySelectorAll('.__items');
const btn = document.querySelector('.add-item');
const remove = document.querySelector('.remove');
const title = document.querySelector('h1');
console.log(allLinks);


btn.addEventListener('click', () => {
  const item = document.createElement('div');
  item.classList.add('new');
  item.textContent = 'Here is new item';
  document.body.append(item);
})

//  toggle nav
remove.addEventListener('click', () => {
  allLinks.forEach(i => {
    i.classList.toggle('display') ? remove.textContent = 'add nav' : remove.textContent = 'remove nav';
  })
})


//  remove single item
// allLinks.forEach(item => {
//   item.addEventListener('click', () => {
//     item.remove();
//   })
// })