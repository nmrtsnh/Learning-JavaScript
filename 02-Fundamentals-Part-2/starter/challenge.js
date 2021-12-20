//// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
*/

// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;

// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;

// const calcAverage1 = (avgDolphins) =>
//   (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

// const calcAverage2 = (avgKoalas) =>
//   (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// const checkWinner1 = function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphin wins (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No body wins");
//   }
// };

// console.log(checkWinner1(44, 23, 71, 102, 54, 49));

const avg1 = function calcAverage1(avgDolphins) {
  const average1 = avgDolphins / 3;

  return average1;
};

const avg2 = function calcAverage2(avgKoalas) {
  const average2 = avgKoalas / 3;
  return average2;
};

// console.log(avg1(200, 23, 71));
// console.log(avg2(65, 54, 49));

const checkWinnerNow = function checkWinner(avgDolphins, avgKoalas) {
  const avgD = avg1(avgDolphins);
  const avgK = avg2(avgKoalas);
  if (avgD >= 2 * avgK) {
    console.log(`Dolphin wins (${avgD} vs ${avgK})`);
  } else if (avgK >= 2 * avgD) {
    console.log(`Koalas wins (${avgK} vs ${avgD})`);
  }

  //   return avgD;
  //   return avgK;
};

// console.log(checkWinnerNow(44, 23, 71));

// console.log(checkWinnerNow(200, 54, 49));
