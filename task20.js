"use strict";
// Function to create a fruit object
function createFruit(name, color, quantity) {
    return { name, color, quantity };
}
// Create the fruit objects
const apple = createFruit('Apple', 'Red', 5);
const banana = createFruit('Banana', 'Yellow', 3);
const orange = createFruit('Orange', 'Orange', 4);
// Display the fruit objects
console.log(apple);
console.log(banana);
console.log(orange);
