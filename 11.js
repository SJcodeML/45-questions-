"use strict";
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the 
// list, one at a time.
Object.defineProperty(exports, "__esModule", { value: true });
//ANSWER NUMBER :11
// Store the names of a few friends in an array called names
const names = ["Alice", "Bob", "Charlie", "David"];
// Print each person's name by accessing each element in the list, one at a time
names.forEach(name => {
    console.log(name);
});
// The arrow function takes one parameter, name, which represents each element of the names array as the forEach method iterates over it.
