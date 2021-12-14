// Values and Variables

const country = "Germany";
const continent = "Europe";
let population = 83.24;
const isIsland = false;
language = "German";
const description = `${country} is in ${continent}, and its ${population} million people speak ${language} `;
// console.log(description);

// console.log(population / 2);
population++;
// console.log(population / 2);
// population = 13;

let FinlandPopulation = 6;
let averagePopulation = 33;

// console.log(population > FinlandPopulation);
// console.log(population < averagePopulation);

// console.log(country);
// console.log(continent);
// console.log(population);

// Data Types

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//'Portugal's population is above average'. Otherwise, log a string like'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

if (population > averagePopulation) {
  console.log(`${continent}'s population is above average`);
} else {
  console.log(
    `${continent}'s population is ${population} million below average`
  );
}
/*
'9' - '5'; = 4
'19' - '13' + '17'; = 617
'19' - '13' + 17; = 23
'123' < 57; = false
5 + 6 + '4' + 9 - 4 - 2; = 1143
*/

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
