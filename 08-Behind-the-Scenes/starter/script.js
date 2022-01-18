'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //// Creating new variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      const output = 'NEW OUTPUT';

      const str = `You're millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial); //// Var variables do not care about blocks.
    // console.log(add(2, 3)); /// Only works without strict mode.
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
