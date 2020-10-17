/*Strings are immutable in ECMAScript, meaning that once they are created, their values cannot
change. To change the string held by a variable, the original string must be destroyed and the variable
filled with another string containing a new value*/

let js = 'java';
js = js + `script`;
// console.log(js);

// toString()

let num = true + 1;
let toStr = num.toString();
console.log(toStr);


let str = 'hello world';

function capitalize(a) {
    return `${a[0].toUpperCase()}${a.slice(1)}`; // first letter to upper case
}

// console.log(capitalize(str));