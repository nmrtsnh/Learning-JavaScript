'use strict';

/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 3);

createBooking('LH123', undefined, 1000);

*/

/*

const flight = 'LH234';
const namrata = {
  name: 'Namrata Sinha',
  passport: 234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mrs ' + passenger.name;

  if (passenger.passport === 234567890) {
    alert('Checked In');
  } else {
    alert('Wrong Passport!');
  }
};

// checkIn(flight, namrata);
// console.log(flight);
// console.log(namrata);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(namrata);
checkIn(flight, namrata);
*/

/*
////////////////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('🖐');
};

//JS uses callback all the time
document.body.addEventListener('click', high5);
['Namrata', 'Mayur', 'Bhonu'].forEach(high5);
*/

/*
//////////////
const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Namrata');
greeterHey('Mayur');

greet('Hello')('Mayur');

const greetArr = greetings => name => console.log(`${greetings} ${name}`);

greetArr('Hello')('Namrata');
*/
/*

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} has booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, name` });
  },
};

lufthansa.book(635, 'Namrata Sinha');
lufthansa.book(413, 'Mayur Sinha');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does NOT Work
// book(23, 'Bhonu Sinha');

//CALL Method
book.call(eurowings, 23, 'Bhonu Sinha');
console.log(eurowings);

book.call(lufthansa, 214, 'Bhoni Sinha');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 25, 'Neha Sinha and Mayur Sinha');
console.log(swiss);

//Apply Method

const flightData = [23, 'Mayur Sinha'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Namrata Sinha');

const book23 = book.bind(eurowings, 23);
book23('Namrata Sinha');
book23('Mayur Sinha');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

  */

/*

//Partial Applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = value => value + value * rate;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT(23));

*/
/*
//Coding Challenge 1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
      )
    );
    console.log(answer);

    //Register Answer

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if ((type = 'string')) {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

*/

/*
const runcOnce = function () {
  console.log('This will never run again');
  const isPrivate = 43;
};
// console.log(isPrivate);

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 43;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

/*

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

/*

//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//Re-assigning f function
h();
f();

console.dir(f);

//Example 2

const boardingPassengers = function (n, wait) {
  //   const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardingPassengers(180, 3);
*/

/*
//Challenge 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

*/
