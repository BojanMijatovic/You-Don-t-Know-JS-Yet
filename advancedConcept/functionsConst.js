

const showDay = function () {
  const date = new Date();
  const day = date.getDate();      // const a = date.toLocaleDateString(); or same with Locale Date String
  const showDay = document.createElement('p');
  // month 
  const month = date.getMonth();
  // year
  const year = date.getFullYear();
  // time
  const time = date.toLocaleTimeString();

  showDay.textContent = `Today is ${day}/${month}/${year} and time is ${time} `;
  document.body.append(showDay);
}

showDay();