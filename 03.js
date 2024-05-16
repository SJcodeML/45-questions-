"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// // Answer no 3 :
// lower case(eah letter is in small letter)
let name = "Sidra jabin";
console.log("LowerCase : ", name.toLowerCase());
// Upper case(eah letter is in capital letter)
console.log("UpperCase : ", name.toUpperCase());
// Titlecase (capitalize each word)
const nameTitlecase = name.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
console.log("Titlecase:", nameTitlecase);
// So, when used together in the regular expression /\b\w/g, it matches the first letter of each word in a string.
// Another approach for title case by Sir Asharib;
// console.log(myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()); // Shows the name with the First Letter Big
