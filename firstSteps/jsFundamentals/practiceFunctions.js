
// let scareDentist = prompt('Do you scare dentist?');

// switch (scareDentist) {
//   case 'no':
//     console.log(`You are very brave`);
//     break;
//   default:
//     console.log(`Me too`);
//     break;
// }

// let insertNum = prompt('Insert num lower from 26');
// let num = parseInt(insertNum);

// if (num % 5 == 0) {
//   switch (num) {
//     case 5:
//       console.log(`You add num ${insertNum}`);
//       break;
//     case 10:
//       console.log(`You add num ${insertNum}`);
//       break;
//     case 15:
//       console.log(`You add num ${insertNum}`);
//       break;
//     case 20:
//       console.log(`You add num ${insertNum}`);
//       break;
//   }
// } else if (num <= 1 || num > 20) {
//   console.log(`Add real value`);
// } else console.log(`Add`);

// let word = prompt('Insert some word');
// console.log(`You word ${word} have ${word.length} letters`);

const gradeCalc = (studentScore, possibleScore) => {
  totalScore = (studentScore / possibleScore) * 100;
  if (totalScore >= 75) {
    return console.log(`You have score ${totalScore} and C`);
  } else if (totalScore > 50 && totalScore < 75) {
    return console.log(`You have score ${totalScore} and B`);
  }
}

gradeCalc(15, 20);
gradeCalc(13, 20);