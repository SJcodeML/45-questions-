// Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
//Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False

let car = 'subaru'; // Assigning the value 'subaru' to the variable car

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Evaluates whether the value of car is equal to 'subaru'

// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // Evaluates whether the value of car is equal to 'honda'

// Test 3
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // Evaluates whether the value of car is not equal to 'toyota'

// Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // Evaluates whether the value of car is equal to 'subaru' and of the same type (strict equality)

// Test 5
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // Evaluates whether the value of car is equal to 'Subaru' and of the same type

// Test 6
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // Evaluates whether the value of car is not equal to 'subaru' or not of the same type

// Test 7
console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda'); // Evaluates whether the value of car is not equal to 'honda' or not of the same type

// Test 8
console.log("Is car > 'toyota'? I predict False.");
console.log(car > 'toyota'); // Compares the value of car with 'toyota' based on their Unicode values

// Test 9
console.log("Is car < 'honda'? I predict True.");
console.log(car < 'honda'); // Compares the value of car with 'honda' based on their Unicode values

// Test 10
console.log("Is car.length == 6? I predict False.");
console.log(car.length == 6); // Evaluates whether the length of the value of car is equal to 6
