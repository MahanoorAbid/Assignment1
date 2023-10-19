"use strict";
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    for (const [key, value] of options) {
        car[key] = value;
    }
    return car;
}
// Example usage:
let myCar = createCar('Toyota', 'sunroof');
console.log(myCar);
