"use strict";
// // Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
// and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A 
// dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence
//  such as Any of these animals would make a great pet!
Object.defineProperty(exports, "__esModule", { value: true });
let animals1 = ["Cat", "Dog", "Rabbit"];
let messages1 = [
    "I really like kittens and cats",
    "I don't like dogs at all",
    "Awwwwwwwwww! Rabbits are cute"
];
animals1.forEach((animal, index) => {
    console.log(`${animal}: ${messages1[index]}`);
});
console.log("Dogs are known for their loyalty and playful nature, making them popular companions for people of all ages. Cats are independent and curious animals that often form strong bonds with their owners. Rabbits are gentle and social creatures that can make wonderful pets with proper care and attention.");
