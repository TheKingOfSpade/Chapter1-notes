const readLine = require(`readline-sync`);
const readline = require("readline-sync");
//11
let answer = readLine.question("Do you want to quit? y or n: ");
while (answer != "y" && answer != "n"){
    console.log("invalid choice");
    answer = readLine.question("Enter y or n: ");
}
console.log(`You types ${answer}`);
//12
let answer1 = readLine.question("Do you want to quit? y or n: ");
while (answer1 != "Y" && answer1 != "y" && answer1 != "N" && answer1 != "n"){
    console.log("invalid choice");
    answer1 = readLine.question("Enter y or n: ");
}
console.log(`You types ${answer1}`);
//13
let answer2 = readLine.question(" A, B, or C?: ");
while (answer2 != "A" && answer2 != "B" && answer2 != "C"){
    console.log("invalid choice");
    answer2 = readLine.question("Enter y or n: ");
}
console.log(`You types ${answer2}`);
//14
let answer3 = readLine.question(" 1, 2, or 3?: ");
while (answer3 != "1" && answer3 != "2" && answer3 != "3"){
    console.log("invalid choice");
    answer3 = readLine.question("Enter y or n: ");
}
console.log(`You types ${answer3}`);
//15
let answer4 = readLine.question(" 1, 2, or 3?: ");
while (answer4 != "0" && answer4 != "1" && answer4 != "2" && answer4 != "3" && answer4 != "4" && answer4 != "5" &&
answer4 != "6" && answer4 != "7" && answer4 != "8" && answer4 != "9" && answer4 != "10"){
    console.log("invalid choice");
    answer4 = readLine.question("Choose a number between 0 and 10: ");
}
console.log(`You types ${answer4}`);
//16
let number = Number(readline.question("Enter a positive number: "));
if (number>0){
    console.log(`Positive number`)}
if (number < 0) {
}
    console.log("Not a positive number");
//17
let number1 = Number(readline.question("Enter a negative number: "));
if (number1<0){
    console.log(`Negative number`)}
if (number1 > 0) {
}
console.log("Not a negative number");
//18
