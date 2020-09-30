// copy by reference (two variables reference the same array)

let hobbies = ['coding', 'hike'];

let newItem = hobbies;
newItem.push('react');

console.log(newItem);
console.log(hobbies); a