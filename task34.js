"use strict";
function printAnimalsInfo() {
    const animals = ["Dog", "Cat", "Rabbit"];
    for (const animal of animals) {
        console.log(`A ${animal.toLowerCase()} would make a great pet.`);
    }
    console.log("Any of these animals would make a great pet!");
}
printAnimalsInfo();
