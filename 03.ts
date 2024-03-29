// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// // Answer no 3 :

// lower case(eah letter is in small letter)
let name:string = "Sidra jabin";
console.log("LowerCase : " , name.toLowerCase()) 

// Upper case(eah letter is in capital letter)
console.log("UpperCase : " , name.toUpperCase())

// Titlecase (capitalize each word)
const nameTitlecase: string =name.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
console.log("Titlecase:", nameTitlecase);