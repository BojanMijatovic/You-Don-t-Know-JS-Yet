'use strict';

// for (let i = 1; i <= 10; i++) {
//     console.log(`Let test this ${[i]}`);
// }

const newArr = ['name', 'lastName', 2021 - 1987, [1, 2, 3, 4, 5]];


const types = [];

for (let i = 0; i < newArr.length; i++) {
    console.log(`${newArr[i]}`);
    types.push(`${typeof newArr[i]}`)
}

console.log(types);