// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array
//  to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Make a shallow copy of the original array
const copiedMagicians: string[] = magicians.slice();

// Call the make_great function with the copied array
const greatMagicians: string[] = make_great(copiedMagicians);

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magic of magicians) {
        greatMagicians.push(`The Great ${magic}`);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Example usage:
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);