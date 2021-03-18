const ted = {
    name: 'ted',
    lastName: 'Alfonso',
    birthYear: 1987,
    friends: ['Tom', 'Alex', 'Peter'],
    calcAge: function() {
        return 2021 - this.birthYear;
    },
    testMode: function() {
        let test = `have`;
        if (this.haveDriverLicence) {
            return `${this.name} is ${this.calcAge()} years old and he ${test} driver licence`
        } else {
            test = `don't have`
            return `${this.name} is ${this.calcAge()} years old and he ${test} driver licence`
        }

    },
    haveDriverLicence: true
}

ted['hobby'] = 'coding';
ted['army'] = true;
console.log(ted);

// console.log(typeof ted['job']); 
//                              undefined
console.log(`${ted.name} has ${ted.friends.length} friends and his best friend is ${ted.friends[0]}`);

console.log(ted.testMode());


/*
    this keyword is point on object who is calling the method
*/

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
    weight: 78,
    height: 1.69,
    calcBmi: function() {
        return this.weight / this.height ** 2
    }
}


const john = {
    weight: 92,
    height: 1.95,
    calcBmi: function() {
        return this.weight / this.height ** 2
    }
}


const markBmi = mark.calcBmi();
const johnBmi = john.calcBmi();

if (markBmi > johnBmi) {
    console.log(`Mark have ${markBmi} and is higher from John ${johnBmi}`);
} else {
    console.log(`John have ${johnBmi} and is higher from Mark ${markBmi}`);
}