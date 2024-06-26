// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the 
// array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const greatMagicians: string[] = make_great(magicians);

function make_great(magicians:string[]): string[] {
    const greatMagicians:string[]=[];
    for (let magic of magicians){
        greatMagicians.push(`The Great ${magic}`);
    }
    
    
    return  greatMagicians;

}

function show_magicians(greatMagicians: string[]): void {
    for (let magician of greatMagicians) {
        console.log(magician);
    }
}

// Example usage:
show_magicians(greatMagicians);
