"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getOrdinalEnding(number) {
    if (number === 1)
        return 'st';
    if (number === 2)
        return 'nd';
    if (number === 3)
        return 'rd';
    return 'th';
}
for (const number of numbers) {
    const ordinalEnding = getOrdinalEnding(number);
    console.log(`${number}${ordinalEnding}`);
}
