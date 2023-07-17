/*
let js = "amazing";
// if (js === 'amazing') alert('Hello World!');
console.log(69 + 420);

let message = "Hello World!";
console.log(message);

// Good
let myFirstJob = "Programmer"
let myCurrentJob = "Teacher"

// Bad
let job1 = "programmer"
let jo2 = "teacher"

let age = 30;
age++;
console.log(age);

// Cannot reassign value of const
// const birthYear = 1991;
// birthYear = 2000;

// Cannot create empty const
// const job;

var job = 'programmer';
job = 'singer';

// Math operators
const currentYear = 2085;
const ageJohn = currentYear - 1992;
const ageMariah = currentYear - 2023;
console.log(ageJohn, ageMariah);

console.log(ageJohn * 2, ageMariah / 10, 2**3)

const firstName = "John";
const lastName = "Doe";
console.log(firstName + ' ' + lastName)
// console.log(`${firstName} ${lastName}`)

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJohn > ageMariah)

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const currentYear = 2085;
const ageJohn = currentYear - 1992;
const ageMariah = currentYear - 2023;

const averageAge = (ageJohn + ageMariah) / 2
console.log(averageAge);

const firstName = 'John';
const job = 'teacher';
const birthYear = 2000;
const year = 2027;

const john = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

const johnNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(johnNew);

console.log(`Just a regular string....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

*/

const age = 15;

if (age >= 18) {
    console.log('You can start your driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2000;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);