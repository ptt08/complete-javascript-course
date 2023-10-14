'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const lucca = new Person('Lucca', 2002);
console.log(lucca);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const john = new Person('John', 1992);
const matilda = new Person('Matilda', 2000);
console.log(john, matilda);

console.log(john instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

lucca.calcAge();

console.log(lucca.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(lucca));

Person.prototype.species = 'Homo Sapiens';
console.log(lucca.species, matilda.species);

console.log(lucca.hasOwnProperty('firstName'));
console.log(lucca.hasOwnProperty('species'));

console.log(lucca.__proto__);
// Object.prototype (top of prototype chain)
console.log(lucca.__proto__.__proto__);
console.log(lucca.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor.__proto__);

const arr = [1, 23, 3, 4, 5, 6, 7, 4, 3, 2, 1]; // new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
