
const newDate = new Date();
// console.log(newDate);

const time = newDate.toLocaleTimeString();
console.log(time);

const day = newDate.toLocaleDateString();
console.log(day);

const singleDay = newDate.getDate();
console.log(singleDay);

const month = newDate.getMonth() + 1;
console.log(month);

const m = newDate.toDateString();
console.log(m);

const w = m.split(' ');
console.log(w);

console.log(`Today is ${w[0]} ${singleDay}/${month} and time is ${time}`);