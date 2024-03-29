"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
const guest = ["Aisha", "Marium", "Zainab", "Misho", "A.Subha", "Khadija"];
guest.map(invite => {
    console.log(`Dear ${invite} , Hope you are well ,The Holy month Ramadan has begun and we have arranged 
    iftar party on 25th of march, You are invited in it `);
});
const guestcannot = guest[2];
//console.log(guest[2]  + " " + " Cannot come due to his problems")
console.log(guestcannot + " " + " Cannot come due to his problems");
let newguest1 = "sfdfa";
guest[guest.indexOf(guestcannot)] = newguest1;
console.log(guest);
// //invitation for the new added guest in the list because in the we have sent the invitation to the old guest already there is no use of sending them again
console.log(`Dear ${newguest1} , Hope you are well ,The Holy month Ramadan has begun and we have arranged 
   iftar party on 25th of march, You are invited in it `);
// This is the end of question 15 we needed to solve q16:
//starting question no 16:
guest.map((biggertable => {
    console.log(`Dear ${biggertable} , We are so happy that we have found a new and bigger dining table .I just wanted to inform you that we will gonna have fun`);
}));
// console.log(guest)
console.log("first Index change named Balaj");
let newGuest2 = "Balaj";
const updatedGuestList = [newGuest2, ...guest];
console.log(guest);
//if you have odd numbers of guest in your list
console.log("Middle Index added named kaya");
let newMiddleGuest = "Kaya";
const middleIndex = Math.floor(guest.length / 2); // Calculate the middle index
guest.splice(middleIndex, 0, newMiddleGuest);
console.log(guest);
//LAst Index
console.log("Last Index changed named Ahmed");
let lastGuest = "Ahmed";
guest.push(lastGuest);
console.log(guest);
// We have already sent the message tp the old guest and we want to make an invitaion to the new guests .: Making a list of new guest then sending message to them 
let newGuestList = [newGuest2, newMiddleGuest, lastGuest];
newGuestList.map((item) => {
    console.log(`\n Dear ${item} ,Hope you are well ,The Holy month Ramadan has begun and we have arranged 
iftar party on 25th of march, You are invited in it`);
});
//q no 17 :
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Due to the table problem , You can only invite 2 peoples");
console.log(guest);
while (guest.length > 2) {
    let reomoveGuest = guest.pop();
    console.log(`\n Dear ${reomoveGuest} due to the table arrangements problem I am not able to invite you `);
}
console.log(guest);
guest.map(item => {
    console.log(`\n Dear ${item} You are still invited to the iftar party`);
});
while (guest.length > 0) {
    guest.pop();
    console.log(guest);
}
console.log(guest);
