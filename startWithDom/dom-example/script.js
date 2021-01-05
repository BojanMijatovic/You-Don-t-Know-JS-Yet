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



//  one more way to remove single item from arr
const tools = document.querySelectorAll('.tool');
tools.forEach(tool => {
    const a = document.createElement('p');
    a.textContent = 'text';
    a.classList.add('hero');
    tool.append(a);
    a.addEventListener('click', function() {
        tool.remove();
    })
})



//  scroll to sections
const scrollBtn = document.querySelector('.scroll');

// scrollBtn.scrollIntoView({ behavior: 'smooth' });
// scrollBtn.addEventListener('click', window.scrollIntoView({ behavior: 'smooth' }));

scrollBtn.addEventListener('click', () => {
    const section = document.getElementById('one');
    section.scrollIntoView({ behavior: 'smooth' });
})