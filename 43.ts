// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array
//  to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}

// Original array of magician names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const originalMagicians: string[] = magicians.slice(); // Make a copy of the original array

// Array with "the Great" added to each magician's name
const greatMagicians: string[] = make_great(magicians.slice());

// Show the original array of magician names
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Show the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
