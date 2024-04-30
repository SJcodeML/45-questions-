"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//version 1 printing green condition will become true
let alien = "Green";
if (alien === "Green") {
    console.log(alien + ": Congrats you are in green color ,you have earned 5 points yipee!!:)");
}
else if (alien === "yellow") {
    console.log(alien + ": you have earned 10 points");
}
else if (alien === "red") {
    console.log(alien + ": you have earned 15 points");
}
//version 2 yellow version will become true
let alien2 = "Yellow";
if (alien2 === "green") {
    console.log(alien2 + ": You have earned 5 points");
}
else if (alien2 === "Yellow") {
    console.log(alien2 + ": Congrats you are in yellow color ,you have earned 10 points yipee!!:) ");
}
else if (alien2 === "red") {
    console.log(alien2 + ": you have earned 15 points");
}
//Version 3 red will come true
let alien3 = "Red";
if (alien3 === "green") {
    console.log(alien3 + ": you have earned 5 points");
}
else if (alien3 === "yellow") {
    console.log(alien3 + ": you have eraned 10 points");
}
else if (alien3 === "Red") {
    console.log(alien3 + ": Congrats you are in red color ,you have earned 15 points yipee!!:)");
}
