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
