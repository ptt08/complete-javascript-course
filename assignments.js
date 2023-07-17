// Values and variables
const country = "Japan";
const continent = "Asia";
let population = 126;

// console.log(country);
// console.log(continent);
// console.log(population);

// Data types
const isIsland = true;

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

// let, const and var
const language = "japanese";

// Basic operators
// console.log(population / 2);
// population++;
// console.log(population);

// let finlandPopulation = 6;
// console.log(population > finlandPopulation)

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// If / else statements
// if (population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33 - population} million below average`);
// }

// type coercion
// console.log('9' - '5'); // 4 number
// console.log('19' - '13' + '17'); // 617 string
// console.log('19' - '13' + 17); // 23 number
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143 number

// const numNeighbours = Number(prompt('How many neighbour contries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// }

// Logical operators
// if (language === 'Japanese' && population > 50 && isIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// Switch statement
// switch(language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers!');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D')
// }

// Ternary operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);