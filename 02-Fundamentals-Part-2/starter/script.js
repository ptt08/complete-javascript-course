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

// Arrow function
const calcAge3 = birthYear => 2038 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2038 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'John'));
console.log(yearsUntilRetirement(2000, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    // return retirement > 0 ? retirement : -1;

    if(retirement > 0) {
        return retirement;
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        return -1;
        console.log(`${firstName} has already retired`);
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1992, 'John'));
console.log(yearsUntilRetirement(1950, 'Mike'));