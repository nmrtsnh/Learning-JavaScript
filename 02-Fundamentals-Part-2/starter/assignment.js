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
