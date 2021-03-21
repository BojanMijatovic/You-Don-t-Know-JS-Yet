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

// console.log(types);

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86];
const tips = [];
const totals = [];

const calcTip = function(bill) {
    return bill * .2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}

// console.log(tips);


// for (let i = bills.length - 1; 0 <= i; i--) {
//     console.log(bills[i]);
// }

const facebookPages = [{
    title: "1. FC Pauli",
    fans: 2011,
    posts: [{
            title: "Loss in first game",
            content: "long text",
            likes: 12,
            comments: [{
                    text: "what a bad game!",
                },
                {
                    text: "trainers fault!",
                },
            ],
        },
        {
            title: "90 minutes thriller",
            content: "long text 1231",
            likes: 132,
            comments: [{
                    text: "amazing game",
                },
                {
                    text: "great to see you winning",
                },
                {
                    text: "90 minutes standing",
                },
            ],
        },
    ],
}, ];


const addFan = function(newFan) {
    // const newFans = fans += newFan;
    // return newFans;
    facebookPages[0].fans += newFan;
}



// addFan(4, facebookPages[0].fans);

addFan(5);
addFan(155);



const addLike = (like) => {
    facebookPages[0].posts[0].likes += like;
}

addLike(20);

// console.log(facebookPages[0]);

console.log(facebookPages);

const addNewLike = function(like) {
    return facebookPages[0].posts[1].likes += like;
}

const showLike = () => `Now we have ${addNewLike(40)} new likes`;

// console.log(showLike());


const numbers = [43, 343, 213, 98, 2, 78];

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i] * 2;
    console.log(`New numbers are ${num}`);

}
// reverse 
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(`Number ${numbers[i]}`);
}

const addNum = function(num) {
    numbers.push(num);
}

addNum(4);
addNum(448);

console.log(numbers);


const convertToKM = (mile) => mile * 1.609;

const m1 = convertToKM(1);
console.log(m1);

const showPost = (post) => `Post with title ${post.title} have ${post.likes} likes`;

console.log(showPost(facebookPages[0].posts[0]));


const expenses = [];

const addExpense = (title, amount, expenses) => {
    let expense = { title: title, amount: amount }
    return expenses.push(expense);
}

addExpense('bread', 4, expenses);
addExpense('beer', 8, expenses);

console.log(expenses);


for (let i = 0; i < expenses.length; i++) {
    console.log(`You have ${expenses[i].title} for ${expenses[i].amount}$`);
}


let hotelRooms = 100;

const freeRoms = (checkRoom) => {
    // let free = hotelRooms -= checkRoom;
    // return `Now you have ${free} rooms`;
    return `Now you have ${hotelRooms -= checkRoom} rooms`
}

const checkRoom = freeRoms(4);
const checkRoom1 = freeRoms(24);
const checkRoom2 = freeRoms(50);
console.log(checkRoom);
console.log(checkRoom1);

console.log(checkRoom2);

console.log(freeRoms(10));