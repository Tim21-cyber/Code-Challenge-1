function calculateChaiIngredients() {
    const water = 200 * numberOfCups; // 200 ml of water per cup
    const milk = 50 * numberOfCups; // 50 ml of milk per cup
    const teaLeaves = 1 * numberOfCups; // 1 tsp of tea leaves per cup
    const sugar = 2 * numberOfCups; // 2 tsp of sugar per cup

    console.log(`To make ${numberOfCups} cups of chai, you need:`);
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${teaLeaves} tsp of tea leaves`);
    console.log(`${sugar} tsp of sugar`);
}