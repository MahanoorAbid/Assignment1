"use strict";
// Define the Magician class
class Magician {
    constructor(name) {
        this.name = name;
    }
}
// Create an array of Magician objects
const magicians = [
    new Magician("Harry Houdini"),
    new Magician("David Copperfield"),
    new Magician("Penn Jillette"),
    new Magician("Teller"),
];
// Function to make the magicians great
function make_great(magicians) {
    magicians.forEach((magician) => {
        magician.name = `the Great ${magician.name}`;
    });
}
// Function to display the magicians
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician.name);
    });
}
// Call make_great() to modify the array of magicians
make_great(magicians);
// Call show_magicians() to display the modified list
show_magicians(magicians);
