"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores 
// several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let transport = ["Alto", "Civics", "Honda"];
const messages = [
    "This is my first car. I have many memories with it.",
    "I don't like civics.",
    "I have never seen Honda."
];
transport.map((vehicle2, index) => {
    const message = messages[index];
    console.log(`${vehicle2} : ${message}`);
});
