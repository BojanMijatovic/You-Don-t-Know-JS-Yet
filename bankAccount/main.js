
const user = {
  name: 'Alex',
  lastName: 'Red',
  money: 200,
  activityStatus: [10, 22, 41, -32, 133, 64, -20, 200]
}

const appTitle = document.querySelector('.title');
const app = document.querySelector('.app');
const message = document.querySelector('.app h2');
const inputMoney = document.getElementById('income-money');
const inputMoneyBtn = document.querySelector('.incomeBtn');
const withdrawMoney = document.getElementById('withdraw-money');
const withdrawMoneyBtn = document.querySelector('.withdrawBtn');
const status = document.querySelector('.status');
const activityList = document.querySelector('.activity');

appTitle.textContent = `Here is new app for bank account`;
app.textContent = `Welcome ${user.name}`;
status.textContent = `Your total is ${user.money}$`;

//  show account activity
const showList = function (account) {
  activityList.innerHTML = '';
  account.activityStatus.forEach(transfer => {
    const singleTransfer = document.createElement('p');
    singleTransfer.textContent = `your transfer: ${transfer}$`;
    activityList.append(singleTransfer);
    app.append(activityList);
  })
}

showList(user);

//  calc total money
const totalMoney = user.activityStatus.reduce((prev, acc) => prev + acc, 0);
status.textContent = `Your total is ${totalMoney}$`;