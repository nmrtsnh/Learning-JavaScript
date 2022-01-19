'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //// Creating new variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      const output = 'NEW OUTPUT';

      const str = `You're millenial, ${firstName}`;
      //   console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    // console.log(millenial); //// Var variables do not care about blocks.
    // console.log(add(2, 3)); /// Only works without strict mode.
    // console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

//Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
// console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  //   console.log('All Products deleted');
}

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
*/
/*
// The THIS keyword in Practice

console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAge1Arrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet(); // An arrow function does not get it's own this keyword.
/// As a best practice, you should never use arrouw function as a method.
*/

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    /// Solution 1
    // const self = this; //Self or That
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);

    // };

    /// Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

//// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 4, 5);

var addArrow = () => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
