"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function orderSize(size, message) {
    console.log(`You have ordered a tshirt sized : ${size} , having message on it " ${message} " ,\nIs this correct? should we confirm the order?`);
}
orderSize("large", "I love type script");
