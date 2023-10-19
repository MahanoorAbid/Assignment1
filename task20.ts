// Define a TypeScript interface for the fruit object
interface Fruit {
  name: string;
  color: string;
  quantity: number;
}

// Function to create a fruit object
function createFruit(name: string, color: string, quantity: number): Fruit {
  return { name, color, quantity };
}

// Create the fruit objects
const apple: Fruit = createFruit('Apple', 'Red', 5);
const banana: Fruit = createFruit('Banana', 'Yellow', 3);
const orange: Fruit = createFruit('Orange', 'Orange', 4);

// Display the fruit objects
console.log(apple);
console.log(banana);
console.log(orange);
