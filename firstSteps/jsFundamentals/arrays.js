let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles', ['react', 'js', 'next.js']];
shopping[0] = 'course'; //change item in array
// console.log(shopping);
// console.log(shopping[5][2]); // two dimensional array


let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  // console.log(sequence[i]);
  /*
    Start looping at item number 0 in the array.
    Stop looping at the item number equal to the length of the array. This works for an array of any length, but in this case it stops looping at item number 7 (this is good, as the last item — which we want the loop to include — is item 6).
  */
}

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let test = myData.split(',');
// console.log(myData);

/*
    Below the // number 1 comment are a number of strings, each one containing a product name and price separated by a colon. We'd like you to turn this into an array and store it in an array called products.

    On the same line as the // number 2 comment is the beginning of a for loop. In this line we currently have i <= 0, which is a conditional test that causes the for loop to only run once, because it is saying "stop when i is no longer less than or equal to 0", and i starts at 0. We'd like you to replace this with a conditional test that stops the loop when i is no longer less than the products array's length.

    Just below the // number 3 comment we want you to write a line of code that splits the current array item (name:price) into two separate items, one containing just the name and one containing just the price. If you are not sure how to do this, consult the Useful string methods article for some help, or even better, look at the Converting between strings and arrays section of this article.

    As part of the above line of code, you'll also want to convert the price from a string to a number. If you can't remember how to do this, check out the first strings article.
    There is a variable called total that is created and given a value of 0 at the top of the code. Inside the loop (below // number 4) we want you to add a line that adds the current item price to that total in each iteration of the loop, so that at the end of the code the correct total is printed onto the invoice. You might need an assignment operator to do this.
    We want you to change the line just below // number 5 so that the itemText variable is made equal to "current item name — $current item price", for example "Shoes — $23.99" in each case, so the correct information for each item is printed on the invoice. This is just simple string concatenation, which should be familiar to you.
*/

let products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];
for (let i = 0; i < products.length; i++) {
  let singleItem = products[i]
  let splitItem = singleItem.split(':')
  // console.log(splitItem[0]);
  // let priceItem = Number(splitItem[1]);
  // console.log(priceItem);
  let item = `${splitItem[0]} - price ${splitItem[1]}$`
  console.log(item);


  /*let subArray = products[i].split(':');
  let name = subArray[0];
  let price = Number(subArray[1]);
  total += price;
  let itemText = name + ' — $' + price;*/
}