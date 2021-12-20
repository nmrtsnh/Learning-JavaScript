function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descIndia = describeCountry("India", 138, "Delhi");
console.log(descIndia);

const descGermany = describeCountry("Germany", 83, "Berlin");
console.log(descGermany);

const descFrance = describeCountry("France", 67, "Paris");
console.log(descFrance);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percIndia = percentageOfWorld1(1393);
console.log(percIndia);

const percGermany = percentageOfWorld1(89);
console.log(percGermany);

const percFrance = percentageOfWorld1(67);
console.log(percFrance);

const percentageOfWorld2 = function (country, population) {
  return (population / 7900) * 100;
};

const percIndia1 = percentageOfWorld1(1393);
console.log(percIndia1);

const percGermany1 = percentageOfWorld1(89);
console.log(percGermany1);

const percFrance1 = percentageOfWorld1(67);
console.log(percFrance1);
