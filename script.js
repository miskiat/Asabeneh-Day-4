//Exercises: Level 1
//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const userInput = prompt("Enter your age:");
let age = userInput;
if (age < 18) {
  console.log(`You are left with ${18 - age} years to drive`);
} else {
  console.log("You are old enough to drive");
}
//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const compareValue = prompt("Enter your age:");
let myAge = 18;
let yourAge = compareValue;
if (myAge > yourAge) {
  console.log("I'm older than you");
} else {
  console.log("You're older tham me");
}
//3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else
let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less b");
}
//ternary operator
a > b ? console.log("a is greater than b") : console.log("a is less than b");

//4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
//input = prompt("Enter a number");
//num = input;
//if (number % 2 == 0) {
//console.log;
//`/${num}is an even number`;
//} else {
//console.log(`${num} is an odd number`);
//}

//Exercises: Level 2
//1.Write a code which can give grades to students according to theirs scores:
//80 - 100, A;
//70 - 89, B;
//60 - 69, C;
//50 - 59, D;
//0 - 49, F;

let score = prompt("Enter score");
let s = score;
switch (true) {
  case s <= 49:
    console.log("F");
    break;
  case s >= 50 && s <= 59:
    console.log("D");
    break;
  case s >= 60 && s <= 69:
    console.log("C");
    break;
  case s >= 70 && s <= 89:
    console.log("B");
    break;
  case s >= 80 && s <= 100:
    console.log("A");
    break;
  default:
    console.log("invalid");
}

//2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer

let dayUserInput = prompt("what season is it");
weather = dayUserInput;
switch (weather) {
  case "September":
  case "October":
  case "November":
    console.log("The season is Autumn");
    break;

  case "December":
  case "January":
  case "February":
    console.log("The season is WInter");
    break;

  case "March":
  case "April":
  case "May":
    console.log("The season is Spring");
    break;

  case "June":
  case "July":
  case "August":
    console.log("The season is Summer");
    break;
  default:
    console.log("Check the season");
}
//3.Check if a day is weekend day or a working day. Your script will take day as an input.
//What is the day  today? Saturday
//Saturday is a weekend.

//What is the day today? saturDaY
//Saturday is a weekend.

//What is the day today? Friday
//Friday is a working day.

//What is the day today? FrIDAy
//Friday is a working day.

dayInput = prompt("Enter is the day today?");
day = dayInput.toLowerCase();

if (day == "monday") {
  console.log("Monday is a weekday");
} else if (day == "tuesday") {
  console.log("Tuesday is a weekday");
} else if (day == "wednesday") {
  console.log("Wednesday is a weekday");
} else if (day == "thursday") {
  console.log("Thursday is a weekday");
} else if (day == "friday") {
  console.log("Friday is a weekday");
} else {
  console.log("It is not a day");
}

//Exercises: Level 3
//Write a program which tells the number of days in a month.
//Enter a month: January
//January has 31 days.

//Enter a month: JANUARY
//January has 31 day

//Enter a month: February
//February has 28 days.

//Enter a month: FEbruary
//February has 28 days.
//Write a program which tells the number of days in a month, now consider leap year.
monthInput = prompt("Enter a month:");
month = monthInput.toLowerCase();

switch (month) {
  case "january":
    console.log("January has 31 days");
    break;
  case "february":
    console.log("February has 28 days");
    break;
  case "march":
    console.log("March has 31 days");
    break;
  case "april":
    console.log("April has 30 days");
    break;
  case "may":
    console.log("May has 31 days");
    break;
  case "june":
    console.log("June has 30 days");
    break;
  case "july":
    console.log("July has 31 days");
    break;
  case "august":
    console.log("August has 31 days");
    break;
  case "september":
    console.log("September has 30 days");
    break;
  case "october":
    console.log("October has 30 days");
    break;
  case "november":
    console.log("November has 30 days");
    break;
  case "december":
    console.log("December has 31 days");
    break;
  default:
    console.log("Month");
}
