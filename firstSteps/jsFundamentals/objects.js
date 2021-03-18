const ted = {
    name: 'ted',
    lastName: 'Alfonso',
    birthYear: 1987,
    friends: ['Tom', 'Alex', 'Peter'],
    calcAge: function() {
        return 2021 - this.birthYear;
    }
}

ted['hobby'] = 'coding';
ted['army'] = true;
console.log(ted);

// console.log(typeof ted['job']); 
//                              undefined
console.log(`${ted.name} has ${ted.friends.length} friends and his best friend is ${ted.friends[0]}`);



/*
    this keyword is point on object who is calling the method
*/