const readline = require(`readline-sync`);
//1
let number = Number(readline.question("Enter a number: "));
let number1 = Number(readline.question("Enter a number: "));
let newSum = number + number1;
console.log(`Your sum is ${newSum.toFixed( 2)}`);
//2
let number2 = Number(readline.question("Enter a number: "));
let number3 = Number(readline.question("Enter a number: "));
let NewSum = number2 - number3;
console.log(`Your sum is ${NewSum.toFixed( 2)}`);
//3
let number4 = Number(readline.question("Enter a number: "));
let number5 = Number(readline.question("Enter a number: "));
let newSUm = number4 * number5;
console.log(`Your sum is ${newSUm.toFixed( 2)}`);
//4
let number6 = Number(readline.question("Enter a number: "));
let number7 = Number(readline.question("Enter a number: "));
let newSuM = number6 / number7;
console.log(`Your sum is ${newSuM.toFixed( 2)}`);
//5
let number8 = Number(readline.question("Enter a number: "));
let number9 = Number(readline.question("Enter a number: "));
let nEwSum = number8 % number9;
console.log(`Your sum is ${nEwSum.toFixed( 2)}`);
//6
let firstName = Number(readline.question("First name: "));
let MidName = Number(readline.question("Middle Name: "));
let LastName = Number(readline.question("LastName: "));
console.log(`Hello ${firstName} ${MidName} ${LastName}`);
//7
let Title = Number(readline.question("Your title: "));
let lastName = Number(readline.question("Your last name: "));
let Suffix = Number(readline.question("Your suffix: "));
console.log(`Hello ${Title} ${lastName} ${Suffix}`);
//8
let StreetNumber = Number(readline.question("Your Street Number: "));
let StreetName = Number(readline.question("Your Street Name: "));
let StreetType = Number(readline.question("Your Street Type: "));
let City = Number(readline.question("Your City Name: "));
let State = Number(readline.question("Your State Name: "));
let ZipCode = Number(readline.question("Your Zip Code: "));
console.log(`Hello ${StreetNumber} ${StreetName} ${StreetType} ${City} ${State} ${ZipCode}`);