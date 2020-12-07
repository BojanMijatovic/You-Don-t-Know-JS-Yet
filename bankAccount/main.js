
const user = {
  name: 'Alex',
  lastName: 'Red',
  money: 200,
  activityStatus: [10, 22, 41, -32, 133, 64, -20, 200]
}

const appTitle = document.querySelector('.title');
const app = document.querySelector('.app');
const message = document.querySelector('.app h3');
const inputMoney = document.getElementById('income-money');
const inputMoneyBtn = document.querySelector('.incomeBtn');
const withdrawMoney = document.getElementById('withdraw-money');
const withdrawMoneyBtn = document.querySelector('.withdrawBtn');
const status = document.querySelector('.status');
const activityList = document.querySelector('.activity');

appTitle.textContent = `Here is new app for bank account`;
message.textContent = `Welcome ${user.name}`;
message.classList.add('color');

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


//  add deposit
inputMoneyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const deposit = Number(inputMoney.value);
  console.log(deposit);
  user.activityStatus.push(deposit);
  totalMoney(user);
  showList(user);
  inputMoney.value = '';
})

//  show total money
const totalMoney = function (account) {
  showList(user);
  const total = account.activityStatus.reduce((prev, acc) => prev + acc, account.money);
  status.textContent = `Now you have ${total}$`;
}

totalMoney(user);