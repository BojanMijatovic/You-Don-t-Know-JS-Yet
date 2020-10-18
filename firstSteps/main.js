


let byValue = [];
// console.log(byValue);

byValue = 1;
// console.log(byValue);

/*When an argument is passed by value, the value is copied into a local variable (a named argument
and, in ECMAScript, a slot in the arguments object). When an argument is passed by reference, the
location of the value in memory is stored into a local variable, which means that changes to the local
variable are reflected outside of the function.
*/

function changeName(obj) {
  return obj.name = 'Ted';
}

const a = new Object();

// console.log(a);

// changeName(a);

// console.log(a);


var color = "blue";
function changeColor() {
  let anotherColor = "red";
  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    return color = tempColor;

    // color, anotherColor, and tempColor are all accessible here
  }
  // color and anotherColor are accessible here, but not tempColor
  return swapColors();
}
// only color is accessible here
console.log(changeColor());