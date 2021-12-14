'use strict';
/*
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating new variable with same name as other scope's variable
      const firstName = 'Mayur';

      //Reassigning outer socpe's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Namrata';
calcAge(1987);
*/
/*
//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Namrata';
let job = 'coder';
const year = 1987;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  //   console.log(this);
};
calcAge(1987);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  //
};
calcAgeArrow(1986);

const namrata = {
  year: 1987,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};

namrata.calcAge();

const aratrika = {
  year: 2020,
};
aratrika.calcAge = namrata.calcAge;
aratrika.calcAge();

const f = namrata.calcAge;
f();
*/

/*
const namrata = {
  firstName: 'Namrata',
  year: 1987,
  calcAge: function () {
    // console.log(this);
    console.log(2021 - this.year);

    //SOLUTION 1
    // const self = this; // Self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //SOLUTION 2
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
namrata.greet();
namrata.calcAge();
*/

/*

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Namrata',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('me', me);

*/

//Primitive Type
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//Reference Type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica ={};

//Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
