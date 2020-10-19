/*Strings are immutable in ECMAScript, meaning that once they are created, their values cannot
change. To change the string held by a variable, the original string must be destroyed and the variable
filled with another string containing a new value*/

let js = 'java';
js = js + `script`;
// console.log(js);

// toString()
let num = true + 1;
let toStr = num.toString();                                 // returns 2

let str = 'hello world';
function capitalize(a) {
    return `${a[0].toUpperCase()}${a.slice(1)}`; // first letter to upper case
}

// console.log(capitalize(str));


//  ---- String-Manipulation Methods

const str1 = 'hello';
//  concat
const newStr = str1.concat(' world');                   // returns 'hello world'

/*ECMAScript provides three methods for creating string values from a substring: slice(), substr(),
and substring(). All three methods return a substring of the string they act on, and all accept either
one or two arguments. The first argument is the position where capture of the substring begins; the
second argument, if used, indicates where the operation should stop.
 For slice() and substring(),
this second argument is the position before which capture is stopped (all characters up to this point
are included except the character at that point). For substr(),
the second argument is the number
of characters to return. If the second argument is omitted in any case, it is assumed that the ending
position is the length of the string.
 */

let strValue = newStr.slice(5);                             // returns 'world'  
let newValue = newStr.slice(0, 6);                        // returns 'hello'

//    ----    String Location Methods
// indexOf()
// lastIndexOf()

let a = 'lorem ipsum';
let position = a.indexOf('m')
// console.log(position);


let message = "foobarbaz";

if (message.includes('bar')) {
    let num = message.indexOf('bar');
    let cut = message.slice(num);                                     //  returns barbaz
}


