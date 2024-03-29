"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
const guest = ["Aisha", "Marium", "Zainab", "Misho", "A.Subha", "Khadija"];
guest.map(invite => {
    console.log(`Dear ${invite} , Hope you are well ,The Holy month Ramadan has begun and we have arranged 
    iftar party on 25th of march, You are invited in it `);
});
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(guest.slice(1, 4) + " " + " Cannot come due to his problems"); // .slice uses for multiple indexes
// make a variable of unattended peoples
const slicedGuest = guest.slice(1, 4);
console.log(slicedGuest);
// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
const replacement = ["\nHAnif", "\nAsim", "\nRashida,\n"];
const guestc = ["Aisha", "Marium", "Zainab", "Misho", "A.Subha", "Khadija"];
console.log("Original guest list:", guestc);
guestc.splice(1, 3, ...replacement);
console.log("Updated guest list:", guestc);
// invitation for the new added guest in the list because in the we have sent the invitation to the old guest already there is no use of sending them again
console.log(`Dear! ${replacement}Hope you are well ,The Holy month Ramadan has begun and we have arranged iftar party on 25th of march, You are invited in it `);
