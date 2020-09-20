
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

// let num1 = 4;
// let num2 = 5;
// let num3 = 1.4;
// let num4 = 17.3;

// let addNum = num1 + num2;
// let subNums = num4 - num3;
// let finalResult = addNum * subNums;

// console.log(finalResult.toFixed(2));

// let evenOddResult = finalResult % 2 == 0;
// console.log(evenOddResult);


// let myDate = '13' + '4';
// console.log(myDate.length);

// let text = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
// let substring = 'green eggs and ham';
// let index = text.indexOf(substring);
// let revisedQuote = text.trim();
// console.log(revisedQuote);
// console.log(index);

/*
    Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
    In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
    There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called finalQuote.
*/

let quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here
// Make first character upper case, make rest lower case
let fixedQuote = quote.slice(0, 1).toUpperCase() + quote.slice(1).toLowerCase();

console.log(fixedQuote);
// Replace "green eggs and ham" with "broccoli and blood sausage"
fixedQuote = fixedQuote.replace("green eggs and ham", "broccoli and blood sausage");
// Concatenate fixedQuote with a full stop.
let finalQuote = fixedQuote + ".";
