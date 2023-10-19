"use strict";
let placesToVisit = [
    "Tokyo",
    "New York",
    "Machu Picchu",
    "Sydney",
    "Santorini"
];
// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());
// Show that the array is still in its original order
console.log("\nOriginal Order (Unchanged):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());
// Show that the array is still in its original order
console.log("\nOriginal Order (Unchanged):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show that its order has changed
console.log("\nReversed Order:");
console.log(placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
// Print the array to show that it's back to its original order
console.log("\nBack to Original Order:");
console.log(placesToVisit);
// Sort the array to store it in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);
// Sort the array to store it in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
// Print the array to show that its order has been changed
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
