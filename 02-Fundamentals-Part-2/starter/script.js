// "use strict";

// // let hasDriversLicence = false;
// // const passTest = true;

// // if (passTest) hasDriversLicence = true;
// // if (hasDriversLicence) console.log("I can drive");


// // function logger() {
// //     console.log("My name is Namrata");
// // }

// // // calling // running // invoking function 
// // logger();

// // function fruitProcessor(apples, oranges) {
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(2, 3);
// // console.log(appleOrangeJuice);

// // Function Declaration
// // function calcAge1(birthYear) {
// //     return 2037 - birthYear;
// // }

// // const age1 = calcAge1(1987);

// // // Function expression

// // const calcAge2 = function (birthYear) {
// //     return 2037 - birthYear
// // }

// // const age2 = calcAge2(1987);
// // console.log(age1, age2);

// // Arrow Function
// // const calcAge3 = birthYear => 2021 - birthYear;
// // const age3 = calcAge3(1987);
// // console.log(age3);

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //     const age = 2021 - birthYear;
// //     const retirement = 65 - age;
// //     // return retirement;
// //     return `${firstName} retires in ${retirement} years`;

// // }

// // console.log(yearsUntilRetirement(1987, "Namrata"));


// // function cutFruitPieces(fruit) {
// //     return fruit * 4;
// // }
// // function fruitProcessor(apples, oranges) {
// //     const applePieces = cutFruitPieces(apples);
// //     const orangePieces = cutFruitPieces(oranges);
// //     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
// //     return juice;
// // }

// // console.log(fruitProcessor(3, 3));

// // const calcAge = function (birthYear) {
// //     return 2021 - birthYear;
// // }
// // const yearsUntilRetirement = function (birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         console.log(`${firstName} retires in ${retirement} years`
// //         )
// //         return retirement;
// //     } else {
// //         console.log(`${firstName} has already retired`);
// //         return -1;
// //     }
// // }

// // console.log(yearsUntilRetirement(1987, "Namrata"));
// // console.log(yearsUntilRetirement(1950, "Mike"));

// // const friend1 = "Michael";
// // const friend2 = "Steven";
// // const friend3 = "Peter";

// // const friends = ["Michael", "Steven", "Peter"];
// // console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// // console.log(friends[0]);
// // console.log(friends[2]);

// // console.log(friends.length);
// // console.log(friends.length - 1);

// // friends[2] = "Jay";
// // console.log(friends);
// // // friends = ["Bob", "Alice"];

// // const firstName = "Namrata";
// // const namrata = [firstName, "Sinha", 2021 - 1987, "Coder", friends];
// // console.log(namrata);

// //Exercise
// // const calcAge = function (birthYear) {
// //     return 2021 - birthYear;
// // }

// // const years = [1990, 1967, 2002, 2010, 2018];

// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // const age3 = calcAge(years[years.length - 1]);
// // console.log(age1, age2, age3);

// // const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// // console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];

// // Add Elements
// const newLength = friends.push("Jay");
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// // Remove Elements
// friends.pop();//Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//     console.log("You have a friend called Steven");
// }

// DOT VS BRACKET NOTATION//

// const namrata = {
//     firstName: "Namrata",
//     lastName: "Sinha",
//     age: 2021 - 1989,
//     job: "Coder",
//     friends: ["Mayur", "Nonu", "Bhonu"]
// };
// console.log(namrata);

// console.log(namrata.lastName);
// console.log(namrata["lastName"]);

// const nameKey = "Name";
// console.log(namrata["first" + nameKey]);
// console.log(namrata["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Namrata? Choose between firstName, lastName, age, job, and friends");

// if (namrata[interestedIn]) {
//     console.log(namrata[interestedIn]);
// } else {
//     console.log("Wrong request!Choose between firstName, lastName, age, job, and friends");
// }

// namrata.location = "Germany";
// namrata["twitter"] = "@namratasinha";
// console.log(namrata);

// console.log(`${namrata.firstName} has ${namrata.friends.length} friends, and his best friend is called ${namrata.friends[0]}`)

// OBJECT METHOD//

// const namrata = {
//     firstName: "Namrata",
//     lastName: "Sinha",
//     birthYear: 1989,
//     job: "Coder",
//     friends: ["Mayur,", "Nonu", "Bhonu"],
//     hasDriversLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2021 - birthYear;
//     // }

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2021 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicence ? "a" : "no"} driver's licence`
//     }
// };


// console.log(namrata.calcAge());
// // console.log(namrata["calcAge"](1989));

// console.log(namrata.calcAge());
// console.log(namrata.calcAge());
// console.log(namrata.calcAge());
// console.log(namrata.calcAge());

// console.log(namrata.getSummary());

// ITERATION: THE FOR LOOP//

// console.log("Lifting weight repition 1");
// console.log("Lifting weight repition 2");
// console.log("Lifting weight repition 3");
// console.log("Lifting weight repition 4");
// console.log("Lifting weight repition 5");
// console.log("Lifting weight repition 6");
// console.log("Lifting weight repition 7");
// console.log("Lifting weight repition 8");
// console.log("Lifting weight repition 9");
// console.log("Lifting weight repition 10");

// For Loop keeps running while condition is true//

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repition ${rep}`);
// }

// LOOPING ARRAYS, BREAKING, AND CONTINUING//

// const namrata = [
//     "Namrata",
//     "Sinha",
//     2021 - 1989,
//     "Coder",
//     ["Mayur", "Nonu", "Bhonu"],
//     true
// ];

// const types = [];

// for (let i = 0; i < namrata.length; i++) {
//     console.log(namrata[i], typeof namrata[i]);

//     //Filling Types Array//
//     // types[i] = typeof namrata[i];
//     types.push(typeof namrata[i]);
// }

// console.log(types);

// const years = [1986, 1988, 1987, 1989];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);

// }
// console.log(ages);

// // CONTINUE AND BREAK//
// console.log("----CONTINUE----");
// for (let i = 0; i < namrata.length; i++) {
//     if (typeof namrata[i] !== "string") continue;

//     console.log(namrata[i], typeof namrata[i]);
// }

// console.log("----BREAK WITH NUMBER----")
// for (let i = 0; i < namrata.length; i++) {
//     if (typeof namrata[i] === "number") break;

//     console.log(namrata[i], typeof namrata[i]);
// }

// Looping Backwards and Loops in Loops//

// const namrata = [
//     "Namrata",
//     "Sinha",
//     2021 - 1989,
//     "Coder",
//     ["Mayur", "Nonu", "Bhonu"],
//     true
// ];

// for (let i = namrata.length - 1; i >= 0; i--) {
//     console.log(i, namrata[i]);
// }

// for (let exercise = 1; exercise < 5; exercise++) {
//     console.log(`-----Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`exercise ${exercise} = Lifting weight repition ${rep}`);
//     };
// }

// for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repition ${rep}`);
// };

// WHILE LOOP//

// let rep = 1;
// while (rep <= 5) {
//     // console.log(`While= Lifting weight repition ${rep} `);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;


// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log("Loop is about to end");
// }