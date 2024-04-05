"use strict";
// // Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that 
// collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the 
// function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
//  that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
//  Call the function three times, using a different number of arguments each time.
function takeOrder(...items) {
    console.log("sandwich Order");
    if (items.length === 0) {
        console.log("You havem't ordered anything yet ");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log(`${item}`);
        }
    }
    console.log(""); // Add a blank line for separation
}
takeOrder("ham", "cheese", "veggies");
takeOrder("sap");
takeOrder();
