
/*  
   first test 
   GNF576746573fhdg4737dh4;Greenfield
  
    Extract the three-letter station code and store it in a new variable.
    Find the character index number of the semicolon.
    Extract the human-readable station name using the semicolon character index number as a reference point, and store it in a new variable.
    Concatenate the two new variables and a string literal to make the final string.
    Change the value of the result variable to equal to the final string, not the input.
*/

let test = 'MAN675847583748sjt567654;Manchester Piccadilly';
let firstLetter = test.slice(0, 3);
let indexSemiColum = test.indexOf(';');
let sliceStation = test.slice(indexSemiColum + 1);
let finalString = `${firstLetter}:${sliceStation}`;
console.log(finalString);

/*
    Retrieve the length of the quote, and store it in a variable called quoteLength.
    Find the index position where substring appears in quote, and store that value in a  variable called index.
    Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called revisedQuote.
*/
let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';

let quoteLength = quote.length;
let index = quote.indexOf('.');
revisedQuote = quote.slice(index + 1);
console.log(revisedQuote);
quote = quote.slice(0, index + 1);

/*
    Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
    In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
    There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called finalQuote.
*/

let fixedQuote = quote.toLowerCase();
let upLetter = fixedQuote.replace(fixedQuote[0], fixedQuote[0].toUpperCase());
let food = upLetter.replace('green eggs and ham', 'tomato')

console.log(upLetter);
console.log(food);


/*
    Change it from a regular string literal into a template literal.
    Replace the four asterisks with four template literal placeholders. These should be:
        The name of the theorem.
        The two number values we have.
        The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.
*/
let a = 5;
let b = 8;
let theorem = 'Pythagorean theorem';
let myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${a * b}.`;
console.log(myString);