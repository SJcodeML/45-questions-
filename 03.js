"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
// // Answer no 3 :
// lower case(eah letter is in small letter)
let name = "Sidra jabin";
console.log("LowerCase : ", name.toLowerCase());
// Upper case(eah letter is in capital letter)
console.log("UpperCase : ", name.toUpperCase());
// Titlecase (capitalize each word)
const nameTitlecase = name.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
console.log("Titlecase:", nameTitlecase);
