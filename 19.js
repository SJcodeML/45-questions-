"use strict";
// // Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are 
// inviting to dinner.
const invitedGuest = ["Aisha", "Marium", "Zainab", "Misho", "A.Subha", "Khadija"];
invitedGuest.map(invite => {
    console.log(`Dear ${invite} , Hope you are well ,The Holy month Ramadan has begun and we have arranged iftar party on 25th of march, You are invited in it `);
});
// console.log(invitedGuest.length , "People are invited to the dinner")
console.log(`${invitedGuest.length} people are invited to the dinner `);
