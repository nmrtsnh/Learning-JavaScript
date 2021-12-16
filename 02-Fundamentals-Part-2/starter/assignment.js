function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
  return description;
}

const description1 = describeCountry("Germany", 83, "Berlin");
console.log(description1);

const description2 = describeCountry("India", 1380, "Delhi");
console.log(description2);

const description3 = describeCountry("France", 67, "Paris");
console.log(description3);

function percentageOfWorld1(population) {
  const percentage = (population / 7900) * 100;

  return percentage;
}
const percOfGermany = percentageOfWorld1(83);
console.log(percOfGermany);

const percOfIndia = percentageOfWorld1(1380);
console.log(percOfIndia);

const percOfFrance = percentageOfWorld1(67);
console.log(percOfFrance);

const percentageOfWorld2 = function (population) {
  const percentage1 = (population / 7900) * 100;

  return percentage1;
};

const percOfGermany1 = percentageOfWorld2(83);
console.log(percOfGermany1);

const percOfIndia1 = percentageOfWorld2(1380);
console.log(percOfIndia1);

const percOfFrance1 = percentageOfWorld2(67);
console.log(percOfFrance1);
