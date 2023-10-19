"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}
// Creating a large shirt with the default message
make_shirt();
// Creating a medium shirt with the default message
make_shirt("medium");
// Creating a shirt of any size with a different message
make_shirt("small", "I love JavaScript too!");
