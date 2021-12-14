
// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return description;
// }

// const descFinland = describeCountry("Finland", 6, "Helsinki");
// const descPortugal = describeCountry("Portugal", 10, "Lisbon");
// const descGermany = describeCountry("Germany", 83, "Berlin");


// console.log(descFinland, descPortugal, descGermany);

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;

// }

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// };

// const percPortugal1 = percentageOfWorld1(10);
// const percChina1 = percentageOfWorld1(1441);
// const percUSA1 = percentageOfWorld1(332);

// console.log(percPortugal1, percChina1, percUSA1);

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const percPortugal1 = percentageOfWorld3(10);
// const percChina1 = percentageOfWorld3(1441);
// const percUSA1 = percentageOfWorld3(332);

// console.log(percPortugal1, percChina1, percUSA1);



// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;

// }

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population)
//     const description = `${country} has ${population} million people, which is about ${percentage} of the world`;
//     console.log(description);

// }
// describePopulation("Portugal", 10);
// describePopulation("China", 1441);
// describePopulation("USA", 332);

// const populations = [10, 1441, 332, 83];
// console.log(populations.length === 4);

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

// const neighbours = ["Denmark", "Poland", "CzechRepublic", "Switzerland"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop("Utopia");
// console.log(neighbours);

// if (neighbours.includes("Germany")) {
//     console.log("Germany is your neighbouring country")
// } else {
//     console.log("Probably not a central European country :D");
// }

// neighbours[(neighbours.indexOf("Poland"))] = "Republic of Poland";
// console.log(neighbours);


// const myCountry = {
//     country: "Germany",
//     capital: "Berlin",
//     language: "German",
//     population: 83,
//     neighbours: ["Poland", "Denmark", "CzechRepublic", "Switzerland"],

//     describe: function () {
//         console.log(`${this.country} has a ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)

//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;

//     }
// };

// // console.log(myCountry);

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neigbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry.population);

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// console.log("Voter number 1 is currently voting");

// for (let vot = 1; vot <= 50; vot++) {
//     console.log(`Voter number ${vot} is currently voting`);
// }


// const populations = [10, 1441, 332, 83];
// const percentage2 = [];

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentage2.push(perc);
// };
// console.log(percentage2);

// const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norwary", "Sweden", "Russia"]];

// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++)
//         console.log(`Neighbours: ${listOfNeighbours[i][y]}`)

// const populations = [10, 1441, 332, 83];
// const percentage3 = [];

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// let i = 0;
// while (i < populations.length) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentage3.push(perc);
//     i++;
// };
// console.log(percentage3);