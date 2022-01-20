'use strict';

'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startingIndex, mainIndex) {
    return [this.starterMenu[startingIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    startingIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Receivd! ${this.starterMenu[startingIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

// Nullish assignment operator ( Null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
/*
////////////////////////////
// The Nullish Coalescing Operator

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

/// Nullish: null & undefined ( NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
/////////////////////////

// Short circutting (&& and ||)
// Three properties of logical operators: Use ANY data type, return ANY data type, short-circutting

console.log('----- OR -----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Jonas' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');
console.log(0 && 'Jonas');
console.log(2 && 'Jonas');

/// Practical Example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

/*

////// Rest Pattern and Parameters

// 1. Destructuring

// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(1, 3, 4, 5);
add(3, 4, 5, 2, 5, 3, 5, 3, 5, 4);

const x = [23, 7, 6];
add(...x);

restaurant.orderPizza('mushroom', 'chicken', 'olives', 'spinach');
restaurant.orderPizza('mushroom');

//// The Spread and Rest syntax both looks exactly the same but they work in opposite ways depending on where they are used.
// The spread operator used where we would otherwise write values seperated by a comma.
// The Rest patter is basically used where we would otherwise write variables name seperated by commas
*/

/*

////////////////////////////////
//// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, 3, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnoochi'];
console.log(newMenu);

/// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

/// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//// Iterables: arrays, strings, maps, sets. NOT objects.
const str = 'Jonas';
const letters = [...str, ' ', 's'];
console.log(letters);
/// We can only use the spread operator when building an array or when we pass a value into a function.
console.log(...str);
// console.log(`${...str} Schmedtmann`); /// Multiple values seperated by a comma are usually only expected when we pass argument into a function or when we build a new array

/// Real World Example
const ingredients = [
  // prompt("Let's make your pasta! Ingredients 1?"),
  // prompt('Ingredients 2?'),
  // prompt('Ingredients 3?'),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

////////////////////////////////////
/*
restaurant.orderDelivery({
  time: '22:00',
  address: 'Via Del Sol, 21',
  startingIndex: 2,
  mainIndex: 2,
});

restaurant.orderDelivery({ address: 'Via Del Sol, 21', startingIndex: 1 });

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//// Default values
const { menu = [], starterMenu = (starters = []) } = restaurant;
console.log(menu, starterMenu);

//// Mutating values
let a = 119;
let b = 999;
const obj = { a: 27, b: 30, c: 14 };
({ a, b } = obj);
console.log(a, b);

//// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
/////////////////////////////

//// Destructuring Arrays
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// console.log(temp);

[main, secondary] = [secondary, main];
console.log(main, secondary);

/// Receive 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 5];
console.log(p, q, r);
*/
