"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the 
// array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    const greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Example usage:
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
