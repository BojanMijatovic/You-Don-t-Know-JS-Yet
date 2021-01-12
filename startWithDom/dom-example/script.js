const form = document.querySelector('#form');
const usersList = document.querySelector('.users');
let users = [];




const showUser = () => {
    usersList.innerHTML = '';
    users.map((user, id) => {

        //  create single user

        const showUser = document.createElement('div');
        const userName = document.createElement('p');
        userName.textContent = user.name;
        const userId = document.createElement('p');
        userId.textContent = id;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';

        showUser.classList.add('showUser');
        showUser.append(userName, userId, removeBtn);

        //  remove single item
        console.log(user);

        usersList.append(showUser);


    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    users.push({ name: e.target.elements.addName.value, id: '' })
    e.target.elements.addName.value = '';
    showUser();

})





//  e.target.elements.fromForm.value