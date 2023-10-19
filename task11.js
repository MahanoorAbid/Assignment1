"use strict";
//Array
let array_name = ["Noor", "Alina", "Amna"];
function generateMessage(name) {
    return `Hello, ${name}! Hope you're having a great day.`;
}
function printPersonalizedMessages(names) {
    for (const name of names) {
        const message = generateMessage(name);
        console.log(message);
    }
}
printPersonalizedMessages(array_name);
