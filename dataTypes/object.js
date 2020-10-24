
// const person = {
//   name: 'Nicolas',
//   age: 32
// }

// console.log(person['name']);         // same
// console.log(person.name);           // same here :)

// person['hobbies for play'] = ['react', 'js'];   // this works


const colors = ['blue', 'green', 'red', 'tan'];
// colors.length = 2;                                      // this is arr length


for (const [idEl, valueEl] of colors.entries()) {
  // console.log(` ${idEl + 1} ${valueEl}`);     // very easy to split out the key/value pairs inside a loop
}


// Conversion Methods
// const toStr = colors.toString();
// console.log(toStr.replace(',', ' '));
// console.log(colors);


//   Sort methods 

let values = [1, 3, 333, 4, 5, 66];

const sortNum = values.sort((a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1;
  } return 0
})

// console.log(sortNum);

// const sl = values.slice(1, 3);
// console.log(sl);
// console.log(values);
// values.slice(1, 4);
// console.log(values);

const a = [1, 2, 3, 4, 5, 6];

const b = a.splice(0, 2, 'add One', 'and Two');
// console.log(a);


// THE MAP TYPE 
/*Key/value pairs can be added after initialization with set(), queried with get() and has(), counted
with the size property, and removed with delete()and clear():*/

const person = new Map;

const addName = person.set('firstName', 'Jonas');

console.log(person);
