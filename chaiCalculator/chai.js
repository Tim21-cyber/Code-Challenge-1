function calculateChaiIngredients(callback) {
  const numberOfCups = Number(prompt("Enter the number of chai cups you want to make:"));

  const water = 200 * numberOfCups; // in ml
  const milk = 50 * numberOfCups; // in ml
  const teaLeaves = 1 * numberOfCups; // in tablespoons
  const sugar = 2 * numberOfCups; // in teaspoons

  console.log(`\nTo make ${numberOfCups} cup${numberOfCups !== 1 ? 's' : ''} of Kenyan Chai, you will need:`);
  console.log(`${water} ml of water`);
  console.log(`${milk} ml of milk`);
  console.log(`Tea leaves (Majani): ${teaLeaves} tablespoon${teaLeaves !== 1 ? 's' : ''}`);
  console.log(`Sugar (Sukari): ${sugar} teaspoon${sugar !== 1 ? 's' : ''}`);
  console.log("\nEnjoy your Chai Bora!");
}

// Call the function to execute the chai ingredient calculation
calculateChaiIngredients();