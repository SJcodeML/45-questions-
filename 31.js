"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ["HR", "Manager", "Team leader", "Admin", "Executive"];
if (userNames.length === 0) {
    console.log("we need to find some users");
}
else {
    console.log("we have many users");
}
//making list empty:
userNames = [];
console.log(userNames);
// • Remove all of the usernames from your array, and make sure the correct message is printed.
if (userNames.length === 0) {
    console.log("The list is empty we have no users along with us , We need to find some users!");
}
