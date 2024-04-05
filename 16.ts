// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//starting question no 16:

const guest: string[] = [
  "Aisha",
  "Hanif",
  "Asim",
  "Rashida",
  "A.Subha",
  "Khadija",
];
console.log("Great News! We have found a bigger table");

// console.log(guest)
console.log("first Index change named Balaj");
let newGuest2: string = "Balaj";
guest.unshift(newGuest2);
console.log(guest);

//if you have odd numbers of guest in your list
console.log("Middle Index added named kaya");
let newMiddleGuest: string = "Kaya";
const middleIndex: number = Math.floor(guest.length / 2); // Calculate the middle index
guest.splice(middleIndex, 0, newMiddleGuest);
console.log(guest);

//LAst Index
console.log("Last Index changed named Ahmed");
let lastGuest: string = "Ahmed";
guest.push(lastGuest);
console.log(guest);

// We have already sent the message tp the old guest and we want to make an invitaion to the new guests .: Making a list of new guest then sending message to them
let newGuestList: string[] = [newGuest2, newMiddleGuest, lastGuest];
newGuestList.map((item) => {
  console.log(`\n Dear ${item} ,Hope you are well ,The Holy month Ramadan has begun and we have arranged 
iftar party on 25th of march, You are invited in it`);
});
