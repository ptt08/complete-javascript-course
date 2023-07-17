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


// Type conversion
const inputYear = '1992';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('John'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old!');
console.log('23' - '10' - 3);
console.log('23' * '3');

let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Hello'));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(''));

const money = 100;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('Height is DEFINED!');
} else {
    console.log('Height is UNDEFINED');
}

const age = 18;
if (age === 18) console.log('You just became an adult! (strict)');

if (age == 18) console.log('You just became an adult! (loose)');

const favorite = Number(prompt("What's your favorite number?"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favorite !== 23) console.log('Why not 23?');

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(shouldDrive) {
//     console.log('You are able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('You are able to drive!');
} else {
    console.log('Someone else should drive...');
}

const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Prepare meals for the week');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Play videogames');
    case 'saturday':
    case 'sunday':
        console.log('Relax at home');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Prepare meals for the week');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Play videogames');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Relax at home');
} else {
    console.log('Not a valid day!');
}

*/