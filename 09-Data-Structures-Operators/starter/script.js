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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 0, mainIndex = 1, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];
const badArr = [1, 2, 3, 4, arr[0], arr[1], arr[2]];
console.log(badArr);

const newArr = [1, 2, 3, 4, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnoochi'];
console.log(newMenu);
//The spread operator takes all the elements from the array and it also doesn't create new variables and as a consequences we can only use it in a places where we would otherwise write values seperated by commas.

// Two important usecases of spread operator
// 1. To create shallow copies of arrays.
// 2. To merge two arrays together

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arryas
const menuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuCopy);

// Iterables: arrays, strings, map, sets, NOT object
const str = 'Jonas';
const letters = [...str, ' ', 's'];
console.log(letters);
// We can still only use the spread operator when building an array or when we pass values into a function.

const ingredients = [
  prompt("Let's make your pasta! Ingredient1?"),
  prompt('ingredient2?'),
  prompt('ingredient3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);
/*
/////////////////////////
// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 24',
  starterIndex: 2,
  mainIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 24',
  time: '20:00',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Values
let a = 111;
let b = 222;
const obj = { a: 25, b: 26, c: 27 };
({ a, b } = obj);
console.log(a, b);

// Nested Object

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
/////////////////////////////////
/// Destructuring Arrays
// For arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.

const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
