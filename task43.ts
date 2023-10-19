function orderSandwich(...items: string[]): void {
  console.log("Sandwich summary:");
  for (const item of items) {
    console.log(`- ${item}`);
  }
  console.log("Enjoy your sandwich!\n");
}

// Call the function three times with different arguments
orderSandwich("Ham", "Cheese");
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
orderSandwich("Peanut Butter", "Jelly", "Banana");
