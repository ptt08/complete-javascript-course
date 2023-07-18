'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 4343;

function logger() {
    console.log('My name is John');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);
console.log(fruitProcessor(5, 0));
*/


// Function declaration
function calcAge1(birthYear) {
    return 2038 - birthYear;
}

const age1 = calcAge1(1998);

// Function expression
const calcAge2 = function (birthYear) {
    return 2038 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);