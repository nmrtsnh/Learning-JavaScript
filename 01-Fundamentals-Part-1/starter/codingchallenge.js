//////////////////////////////////////////

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) 
(mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall
*/

// Solution //

const weightofMark = 78;
const heightOfMark = 1.69;

// const checkBMIofMark = weightofMark / heightOfMark ** 2;
const BMIofMark = weightofMark / (heightOfMark * heightOfMark);
// console.log(BMIofMark);

const weightofJohn = 92;
const heightofJohn = 1.95;

// const checkBMIofJohn = weightofJohn / heightofJohn ** 2;
const BMIofJohn = weightofJohn / (heightofJohn * heightofJohn);
// console.log(BMIofJohn);

const markHigherBMI = BMIofMark > BMIofJohn;
// console.log(markHigherBMI);

//Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement �
*/

/// Solution

/*
if (BMIofMark > BMIofJohn) {
  console.log(`Mark's BMI ${BMIofMark} is higher than John's ${BMIofJohn}`);
} else {
  console.log(`John's BMI ${BMIofJOHN} is higher than Mark's ${BMIofMark}`);
}
*/

//Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/// Solution

/*
//For Data 1

const DolphinsScore1 = 96;
const DolphinsScore2 = 108;
const DolphinsScore3 = 89;

const dolphinsAverageScore =
  (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
console.log(dolphinsAverageScore);

const KoalasScore1 = 88;
const KoalasScore2 = 91;
const KoalasScore3 = 110;

const koalasAverageScore = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
console.log(koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore) {
  console.log("The Winner is Dolphins");
} else if (koalasAverageScore > dolphinsAverageScore) {
  console.log("The Winner is Koalas");
} else {
  console.log("The match is draw");
}
*/

/*
// Bonus 2
let minimumScore = 100;
const DolphinsScore1 = 97;
const DolphinsScore2 = 112;
const DolphinsScore3 = 101;

const dolphinsAverageScore =
  (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
console.log(dolphinsAverageScore);

const KoalasScore1 = 109;
const KoalasScore2 = 95;
const KoalasScore3 = 123;

const koalasAverageScore = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
console.log(koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && minimumScore) {
  console.log("The Winner is Dolphins");
} else if (koalasAverageScore > dolphinsAverageScore && minimumScore) {
  console.log("The Winner is Koalas");
} else {
  console.log("The match is draw");
}
*/

/*
let minimumScore = 100;
const DolphinsScore1 = 97;
const DolphinsScore2 = 112;
const DolphinsScore3 = 101;

const dolphinsAverageScore =
  (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
console.log(dolphinsAverageScore);

const KoalasScore1 = 109;
const KoalasScore2 = 95;
const KoalasScore3 = 106;

const koalasAverageScore = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
console.log(koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && minimumScore) {
  console.log("The Winner is Dolphins");
} else if (koalasAverageScore > dolphinsAverageScore && minimumScore) {
  console.log("The Winner is Koalas");
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= minimumScore &&
  koalasAverageScore >= 100
) {
  console.log("Both team wins");
} else {
  console.log("Nobody wins the trophy");
}

const day = "monday";

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}
*/

//Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/

/// Solution

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

// console.log(
//   `The bill was ${bill}, tip was ${tip} and the total value ${bill + tip}`
// );
