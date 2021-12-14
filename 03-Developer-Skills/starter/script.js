// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM
// WE work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, Calculate the temerature altitude. Keep in mind that sometimes there might be sensor errors".

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//Understanding the problem
// What is temperature altitude? Answer- Difference between max temp and minimum temp.
//How to compute max and minimu temp?
//What's sensor? and what to do?

//Breaking the problem into sub-problems
//How to ignore errors?
//Find max value in temp array
//Find min value in temp array
//Subtract min from max(amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp < min) min = curTemp;
//     if (curTemp > max) max = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//PROBLEM 2
//Function should now receive two arrays of temperature

//Understanding the temperature
//With 2 arrays, should we implement functionalility twice? No, just merge two arrays

//Breaking into sub-problems
//Merge two arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp < min) min = curTemp;
//     if (curTemp > max) max = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// Debugging with Console and Breakpoints//
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // C) FIX
//     // value: Number(prompt("Degress Celsius")),
//     value: 10,
//   };

//   // B) FIND
//   console.table(measurement);
//   //   console.log(measurement.value);
//   const kelvin = measurement.value + 270;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// // USING A DEBUGGER
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp < min) min = curTemp;
//     if (curTemp > max) max = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeBug);

//Understanding the Problem
// How to calculate maximum temperature?

// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."

// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!

// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]

// 1- Understanding the problems
// - Array transformed to string seperated by ...
// - What is the X days? Answer: (index+1)

// 2- Breaking up into sub-problems
// - Transform array into String
// - Transform each element to String with celsius
// - String needs to contain day (index+1)
// - Add ... between elements and start and end of the string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} °C in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);
printForecast(data2);
