const friend1 = 'Michel';
const friend2 = 'Alex';
const friend3 = 'Ted';

const friends = ['MIchel', 'Alex', 'Ted'];
// console.log(friends, friends[0], friends.length);


const job = 'junior front-end developer'
const jonas = ['Jonas', 'Tinder', job, 2021 - 1987, friends];
// console.log(jonas);


//  add element on end of array
friends.push('Freddy');

//  add element on start of array
friends.unshift('Rachel');

//  remove last element of array
const lastFriend = friends.pop();
console.log(lastFriend);

// remove first element on array
const firstFriend = friends.shift();

//  find index of element in array
const elementIndex = friends.indexOf('Ted');
// console.log(elementIndex);

//  includes method return boolean value is element in array
const isElement = friends.includes('Tom');
console.log(isElement);


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
*/

const calcTip = (bill) => {
    if (bill > 49 && bill < 301) {
        return bill * 0.15
    } else {
        return bill * .2
    }
}

// const firstTip = calcTip(125);
// const secondTip = calcTip(555);
// const thirdTip = calcTip(44);

const bills = [];
bills.push(calcTip(125), calcTip(555), calcTip(44));
console.log(bills);