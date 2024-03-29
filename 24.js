"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// // • Test whether an item is not in a array
// Tests for equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // True
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana'); // False
// Tests using the lower case function
let color = 'RED';
console.log("Is color.toLowerCase() == 'red'? I predict True.");
console.log(color.toLowerCase() == 'red'); // True
console.log("Is color.toLowerCase() == 'blue'? I predict False.");
console.log(color.toLowerCase() == 'blue'); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2); // False
console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2); // True
console.log("Is num1 > num2? I predict False.");
console.log(num1 > num2); // False
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2); // True
console.log("Is num1 >= num2? I predict False.");
console.log(num1 >= num2); // False
console.log("Is num1 <= num2? I predict True.");
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
let isSunny = true;
let isWarm = true;
console.log("Is it sunny AND warm? I predict True.");
console.log(isSunny && isWarm); // True
console.log("Is it sunny OR warm? I predict True.");
console.log(isSunny || isWarm); // True
let isRainy = false;
let isCold = false;
console.log("Is it rainy AND cold? I predict False.");
console.log(isRainy && isCold); // False
console.log("Is it rainy OR cold? I predict False.");
console.log(isRainy || isCold); // False
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
let searchFruit = 'banana';
console.log(`Is ${searchFruit} in the fruits array? I predict True.`);
console.log(fruits.includes(searchFruit)); // True
searchFruit = 'grape';
console.log(`Is ${searchFruit} in the fruits array? I predict False.`);
console.log(fruits.includes(searchFruit)); // False
// Test whether an item is not in an array
let animals = ['cat', 'dog', 'rabbit'];
let searchAnimal = 'elephant';
console.log(`Is ${searchAnimal} not in the animals array? I predict True.`);
console.log(!animals.includes(searchAnimal)); // True
searchAnimal = 'rabbit';
console.log(`Is ${searchAnimal} not in the animals array? I predict False.`);
console.log(!animals.includes(searchAnimal)); // False
