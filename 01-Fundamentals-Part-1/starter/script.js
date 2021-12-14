/*
let javaScript = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("23");

let firstName = "Jonas";
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Marketer";
let myCurrentJob = "Programmer";
*/

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javaScriptIsFun = "YES!"
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(typeof year);

// year = 1997;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1992;

// var job = "programmer";
// job = "teacher";

// lastName = "Sinha";
// console.log(lastName);

// Math Operators
/*
const now = 2020;
const ageMayur = now - 1986;
const ageNamrata = now - 1987;
console.log(ageMayur, ageNamrata);

console.log(ageMayur * 2, ageMayur / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Namrata";
const lastName = "Sinha";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageMayur > ageNamrata); // >, <, >=, <=
console.log(ageNamrata >= 32);

const isNamrataAge = ageNamrata >= 35;

console.log(now - 1986 > now - 1987);
*/
/*
const now = 2020;
const ageMayur = now - 1986;
const ageNamrata = now - 1987;

console.log(now - 1986 > now - 1987);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageMayur + ageNamrata) / 2;
console.log(ageMayur, ageNamrata, averageAge);
*/


/*
const firstName = "Namrata";
const job = "Coder";
const birthYear = 1989;
const year = 2021;

const namrata = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(namrata);

const namrataNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(namrataNew);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);
*/
/*
const age = 15;

if (age >= 18) {
    console.log("Sarah is getting her liecence");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah has still ${yearsLeft} for her driving licence`)
        ;
}

const birthYear = 1989;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};

console.log(century);
*/
/*
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"))
console.log(typeof NaN)
console.log(String(23), 23)

// type coercion
console.log("I'm " + 23 + " years old")
console.log("23" - "10" - "3")
console.log("23" * "2")
console.log("23" > "18")

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

// 5 falsy values : 0, "", undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
    console.log("Don't spend all");
} else {
    console.log("Get a job");
}

let height = 0;
if (height) {
    console.log("height is defined");
} else {
    console.log("height is undefined");
}
*/
/*
const age = "18";
if (age === 18) console.log("You just become an adult (strict)");
if (age == 18) console.log("You just become an adult (loose)");

const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number")
} else if (favourite === 7) {
    console.log("7 is also a cool number")
} else if (favourite === 9) {
    console.log("9 is also a cool number")
} else {
    console.log("neither 23, nor 7 or 9 is avaialbel");
}

if (favourite !== 23) console.log("Why not 23?");
*/

/*
const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive")
// }

const isTired = false; //c
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}
*/
/*
const day = "saturday";

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Recod videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day")
}


if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day");
}
*/

//expression
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = "23 is bigger";
// }

// const me = "Namrata";
// console.log(`I'm ${2037 - 1987} years old ${me}`);

// Ternary Operator
// const age = 15;

// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

// const drink = age > 18 ? "wine" : "water";
// console.log(drink);

// console.log(`I like to drink ${age > 18 ? "wine" : "water"}`);

