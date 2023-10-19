let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Printing the names of each by using a for loop

console.log("Pizza Names:");
for (const pizza of favoritePizzas) 
{
  console.log(pizza);
}

// Printing a sentence for each pizza using the name of the pizza
console.log("\nPizza Preferences:");
for (const pizza of favoritePizzas)
 {
  console.log(`I like ${pizza} pizza.`);
}

// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
