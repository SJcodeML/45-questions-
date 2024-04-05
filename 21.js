"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
let california = {
    country: "United States",
    capital: "",
    population: "",
    officialLanguage: "",
};
let france = {
    country: "",
    capital: "",
    population: "",
    officialLanguage: "French",
};
let Shangha = {
    country: "China",
    capital: "",
    population: "1.412 billion",
    officialLanguage: " "
};
let countries3 = [california, france, Shangha];
console.log(countries3);
console.log(`Its my wish to go ${california.country} . I know ${france.officialLanguage} as well .Population of ${Shangha.country} is ${Shangha.population} `);
