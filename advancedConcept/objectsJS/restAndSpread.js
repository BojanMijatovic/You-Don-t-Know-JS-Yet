
//  rest param
const addNums = (...nums) => {
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
}

console.log(addNums(2, 3, 4));

const spread = [13, 33];
console.log(spread);

const newArr = [...spread, 2, 2, 2];     // copy of spread array
newArr.push(1);
console.log(newArr);


const showFullName = (name, ...lastName) => console.log(`Hello my name is ${name} \, ${lastName}`);


showFullName('Alex', 'Ted', 'Second', 'from Ger');