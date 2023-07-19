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

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

// const years = new Array(1991, 1984, 2002, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'John';
const john = [firstName, 'Doe', 2037 - 1991, 'teacher', friends];
console.log(john);
console.log(john.length)

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

const john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 2037 - 2000,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
};
console.log(john);

console.log(john.lastName);
console.log(john['lastName']);

const nameKey = 'Name';
console.log(john['first' + nameKey]);
console.log(john['last' + nameKey]);

const interestedIn = prompt('What do you want to know about John? Choose between firstName, lastName, age, job and friends');

if (john[interestedIn]) {
    console.log(john[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

john.location = 'Japan';
john['twitter'] = '@johndoe';
console.log(john);

// Challenge
// "John has 3 friends, and his best friend is called Michael"

const message = `${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[0]}`;

console.log(message);
*/

const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 2003,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(john.calcAge());

console.log(john.age);
console.log(john.age);
console.log(john.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(john.getSummary());