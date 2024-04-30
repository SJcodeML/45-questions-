"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
/////In TypeScript, specifying the return type of a function is optional. If a function does not return any value, you can explicitly specify the return type as void to indicate that.
/////The void type in TypeScript represents the absence of any type. When a function's return type is void, it means the function does not return any value or it returns undefined.
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`You've ordered a ${size} sized shirt with the message: "${message}".`);
}
// Calling the function with default parameters
make_shirt(); // Default: large shirt with message "I love TypeScript"
make_shirt('medium'); // Medium shirt with default message "I love TypeScript"
make_shirt('small', 'Hello, world!'); // Small shirt with custom message
