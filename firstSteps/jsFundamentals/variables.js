
/*
Don't confuse a variable that exists but has no defined value with a variable that doesn't exist at all — they are very different things.*/

let myName = 'Alex';
let myAge = 33;

console.log(myName);

/*
  1. Create four variables that contain numbers. Call the variables something sensible.
  2. Add the first two variables together and store the result in another variable.
  3.  Subtract the fourth variable from the third and store the result in another variable.
   4. Multiply the results from the last two steps together, storing the result in a variable called finalResult. The product 5. should be 48. If it isn't, you'll have to adjust some of the initial input values.
     6. Finally, write a calculation that checks whether finalResult is an even number. Store the result in a variable called evenOddResult.
*/

let num1 = 4;
let num2 = 5;
let num3 = 1.4;
let num4 = 17.3;

let addNum = num1 + num2;
let subNums = num4 - num3;
let finalResult = addNum * subNums;

console.log(finalResult.toFixed(2));

let evenOddResult = finalResult % 2 == 0;
console.log(evenOddResult);


let myDate = '13' + '4';
console.log(myDate);