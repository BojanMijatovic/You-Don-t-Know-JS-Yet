const who = {
  name: 'Mrs White'
}

// let suspect = who.name;
// console.log(suspect);
// console.log(who);
// who.name = 'Green';
//  all property's are strings
// console.log(typeof (who.name));   //  string :)

const _ = {};

if (_.name == undefined) {
  _.name = 'new value';
}
console.log(_);

_.set = function (obj, prop, value) {
  return obj[prop] = value;
}

_.set(_, 'name', 'default');

console.log(_);