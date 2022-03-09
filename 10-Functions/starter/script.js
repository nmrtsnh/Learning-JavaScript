'use strict';

/*
const bookings = [];

const createBookings = function (
  flightNum,
  numPassenger = 1,
  price = 100 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings('LH123');
createBookings('LH123', 4, 50);
createBookings('LH123', 5);
createBookings('LH123', undefined, 10);
*/

/*

const flight = 'LH234';
const namrata = {
  name: 'Namrata Sinha',
  passport: 2347893849,
};

const checkedIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Ms ' + passenger.name;

  if (passenger.passport === 2347893849) {
    alert('Checked In');
  } else alert('Wrong Passport');
};

// checkedIn(flight, namrata);
// console.log(flight);
// console.log(namrata);

// // Is the same as doing
// const flightNum = flight;
// const passenger = namrata;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(namrata);
checkedIn(flight, namrata);
*/

/*
// Function accepting callback function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);

  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JavaScript uses callback all the time

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Adam', 'Martha', 'Jonas'].forEach(high5);
*/

/*
//// Functions returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Namrata');
greetHey('Mayur');

greet('Hello')('Namrata');

// Arrow Function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hey')('Namrata');
*/

/*
/// The Call and Apply method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked flight on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Namrata Sinha');
lufthansa.book(125, 'Mayur Sinha');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'ER',
  bookings: [],
};
const book = lufthansa.book;

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 67, 'Mary Copper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 787, 'Namrata Sinha');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
*/
