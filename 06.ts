// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name 
// is displayed. Then print the name after striping the white spaces.

// Storing the person's name with whitespace characters
let name: string = "\t\n SIDRA \t\n";
// let name: string ="          SIDRA\n";

// Printing the name with whitespace
console.log("Name with whitespace:");
console.log(name);

// Stripping the whitespace from the name
let strippedName: string = name.trim();

// Printing the name after stripping the whitespace
console.log("\nName after stripping whitespace:");
console.log(strippedName);








