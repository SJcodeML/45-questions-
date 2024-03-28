"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
////////// • Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
//////// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let  current_users: string[] = ["Sidra" , "Ibrahim" , "Balaj" , "Nigar" , "Razia"]
// let new_users : string[] = ["Sidra" , "sundus" , "Aisha" ,"Balaj", "Marium"]
// for(let user of new_users){
//     if(user === current_users ){}
// }
// List of current usernames
const current_users = ["john", "alice", "bob", "emma", "michael"];
// List of new usernames
const new_users = ["jane", "emily", "michael", "BOB", "sam"];
// Loop through new_users to check for uniqueness
for (let user of new_users) {
    // Check if the username exists in current_users (case-insensitive comparison)
    if (current_users.some(current_user => current_user.toLowerCase() === user.toLowerCase())) {
        console.log(`The username "${user}" is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username "${user}" is available.`);
    }
}
