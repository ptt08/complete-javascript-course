// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*

const x = '21';

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(2002));

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// What is temp amplitude? - Difference between highest and lowest temp
// How to compute max and min temperatures?
// What's a sensor error and what to do?

// 2) Breaking up into sub-problems
// How to ignore errors?
// Find max value in temp array
// Find min value in temp array
// Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude([3, 7, 'error', 9]);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = [...t1, ...t2];

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 7, 5], [1, 3, 6]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = [...t1, ...t2];

  let max = 0;
  let min = 0;
  for (let i = 0; i <= temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 7, 5], [1, 3, 6]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  let message = '...';
  for (let i = 0; i < arr.length; i++) {
    message += ` ${arr[i]}C in ${i + 1} days ...`;
  }

  console.log(message);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
