interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow arbitrary key-value pairs
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
  const car: Car = { manufacturer, model };

  for (const [key, value] of options) {
    car[key] = value;
  }

  return car;
}
// Example usage:
let myCar = createCar('Toyota', 'sunroof');
console.log(myCar);


