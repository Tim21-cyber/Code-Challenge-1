function calculateChaiIngredients() {
    const water = 200 * numberOfCups; // 200 ml of water per cup
    const milk = 50 * numberOfCups; // 50 ml of milk per cup
    const teaLeaves = 1 * numberOfCups; // 1 tsp of tea leaves per cup
    const sugar = 2 * numberOfCups; // 2 tsp of sugar per cup

    console.log(`\nTo make ${numberOfCups} cup${numberOfCups !== 1 ? 's' : ''} of chai, you will need:`);
    console.log(`- Water: ${water} ml`);
    console.log(`- Milk: ${milk} ml`);
    console.log(`- Tea leaves: ${teaLeaves} tsp${teaLeaves !== 1 ? 's' : ''}`);
    console.log(`- Sugar: ${sugar} tsp${sugar !== 1 ? 's' : ''}`);
    console.log("\nEnjoy your chai Bora!");
}