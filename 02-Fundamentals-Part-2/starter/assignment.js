function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descIndia = describeCountry("India", 138, "Delhi");
// console.log(descIndia);

const descGermany = describeCountry("Germany", 83, "Berlin");
// console.log(descGermany);

const descFrance = describeCountry("France", 67, "Paris");
// console.log(descFrance);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percIndia = percentageOfWorld1(1393);

const percGermany = percentageOfWorld1(89);

const percFrance = percentageOfWorld1(67);
// console.log(percIndia, percGermany, percFrance);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percIndia1 = percentageOfWorld1(1393);

const percGermany1 = percentageOfWorld1(89);

const percFrance1 = percentageOfWorld1(67);
// console.log(percIndia1, percGermany1, percFrance1);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percIndia2 = percentageOfWorld3(1393);
const percGermany2 = percentageOfWorld3(89);
const percFrance2 = percentageOfWorld3(67);
// console.log(percIndia2, percGermany2, percFrance2);

const describePopulation = function (country, population) {
  const percWorld1 = percentageOfWorld1(population);
  return `${country} has ${population} million people which is about ${percWorld1}% of the world`;
};

// console.log(describePopulation("India", 1393));
// console.log(describePopulation("Germany", 89));
// console.log(describePopulation("France", 67));

/////// Assignment

/* Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
*/

const population = [1393, 89, 67, 60];

// console.log(population.length === 4);

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[population.length - 1]),
];
// console.log(percentages);

const neighbours = [
  "Denmark",
  "Poland",
  "Czech Republic",
  "Switzerland",
  "Austria",
];

neighbours.push("Utopia");
// console.log(neighbours);

neighbours.pop();
// console.log(neighbours);

if (!neighbours.includes("Germany")) {
  // console.log("Probably not a Central European Country");
}

const index = neighbours.indexOf("Poland");
// console.log(index);

neighbours[index] = "Republic of Sweden";
// console.log(neighbours);

///// LECTURE: Introduction to Objects
/*
1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
  country: "Germany",
  capital: "Berlin",
  language: "German",
  population: 89,
  neighbours: ["Denmark", "Poland", "Czech Republic", "Switzerland", "Austria"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital city called ${this.capital}`;
  },

  checkIsIsland: function () {
    return (this.island = this.neighbours.length === 0 ? true : false);
  },
};

// console.log(myCountry);
// console.log(myCountry.describe());
// console.log(myCountry.checkIsIsland());

//LECTURE: Dot vs. Bracket Notation

/*
1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
*/

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital city called ${myCountry.capital}`
// );

////LECTURE: Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicence: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriverLicence ? "a" : "no"} driver's licence`;
  },
};
//Jonas is a 46 year old teacher, and he has a driver's licence

// console.log(jonas.getSummary());

/*
1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property
*/

///LECTURE: Iteration: The for Loop
/*
1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

/// LECTURE: Looping Arrays, Breaking and Continuing

/*
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
*/

// Solution

// const populations = [1393, 89, 67, 60];

// const precentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   precentages2.push(percentageOfWorld1(populations[i]));
// }
// console.log(precentages2);

//// LECTURE: Looping Backwards and Loops in Loops

/*
1. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway ???
*/

//Solution

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let x = 0; x < listOfNeighbours.length; x++)
  for (let y = 0; y < listOfNeighbours[x].length; y++) {
    console.log(`neighbours: ${listOfNeighbours[x][y]}`);
  }

//// LECTURE: The while Loop

/*
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while loop
*/

//Solution
const populations = [1393, 89, 67, 60];

const precentages3 = [];

let i = 0;
while (i < populations.length) {
  precentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
// console.log(precentages3);
