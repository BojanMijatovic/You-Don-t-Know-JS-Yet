
const round = function (x) {
  return x * x;
}

// console.log(round(4));


const createRecipes = function (ingredient) {
  const addPercentIngridient = function (amount) {
    if (ingredient > 1) {
      amount++;
    }
    console.log(`You have ${amount} ${ingredient}`);
  }
  addPercentIngridient(2);
}


// createRecipes('tomato');
// createRecipes('onion');

const addNums = function (x) {
  const addNew = function (y) {
    return x + y;
  }
  return addNew(4);
}

console.log(addNums(10));