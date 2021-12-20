function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descIndia = describeCountry("India", 138, "Delhi");
console.log(descIndia);

const descGermany = describeCountry("Germany", 83, "Berlin");
console.log(descGermany);

const descFrance = describeCountry("France", 67, "Paris");
console.log(descFrance);
