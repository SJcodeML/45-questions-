//q no 17 :

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



const guest: string[] = [
    "Balaj",
    "Aisha",
    "Hanif",
    "Kaya",
    "Asim",
    "Rashida",
    "A.Subha",
    "Khadija",
    "Ahmed",
  ];


console.log("Due to the table problem , You can only invite 2 peoples");
console.log(guest);

while (guest.length > 2) {
  let reomoveGuest = guest.pop();
  console.log(
    `\n Dear ${reomoveGuest} due to the table arrangements problem I am not able to invite you `
  );
}

console.log(guest);

guest.map((item) => {
  console.log(`\n Dear ${item} You are still invited to the iftar party`);
});

while (guest.length > 0) {
  guest.pop();
  console.log(guest);
}