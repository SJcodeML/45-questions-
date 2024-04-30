"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.
// ANSWER Number :12
//Approach no 1:
const names3 = ["Alice", "Bob", "Charlie", "David"];
names3.map(name => {
    console.log(`Hello ${name}, I hope you're having a great day!`);
});
