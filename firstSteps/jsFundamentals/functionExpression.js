
// let hello = function (user) {
//   return `Hello ${user}`;
// };

// alert(hello('Alex'));

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     return yes();
//   } else return no();
// };

// function showOk() {
//   alert('Ok ok')
// }

// function showNo() {
//   alert('No no');
// }

// ask('Answer is?', showOk, showNo);

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
//   "Do you agree?",
//   function () { alert("You agreed."); },
//   function () { alert("You canceled the execution."); }
// );

function welcome() {
  return message('Alex');
}

function message(user) {
  return `Welcome ${user}`
}

console.log(welcome());