"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
//• Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let favoPlaces = ["Makkah", "Madina", "Jordan", "Egypt", "Iran", "Iraq", "China", "Japan", "Toronto"];
// • Print your array in its original order.
console.log(favoPlaces);
//• Print your array in alphabetical order without modifying the actual list.
const sortedPlaces = [...favoPlaces].sort();
console.log(sortedPlaces);
// • Show that your array is still in its original order by printing it.
console.log(favoPlaces);
////• Print your array in reverse alphabetical order without changing the order of the original list.Reverse the order alphabetically and it will also not modify the original list ,will make new list to print
const reversedCopy = [...favoPlaces].sort().reverse();
console.log(reversedCopy);
// • Show that your array is still in its original order by printing it again.
console.log(favoPlaces);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
favoPlaces.reverse();
console.log("Reversed order:", favoPlaces);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
favoPlaces.reverse();
console.log("Again reversed:", favoPlaces);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favoPlaces.sort();
console.log(favoPlaces);
//// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favoPlaces.reverse();
console.log(favoPlaces);
