function calculateBodaFare() {
    const distanceInKm = Number(prompt("Enter the distance in kilometers:"));
    const baseFare = 50; // Base fare in shillings
    const chargePerKm = 15; // Fare per kilometer in shillings
    const totalFare = baseFare + (chargePerKm * distanceInKm);

    console.log(`Total estimated boda boda fare for ${distanceInKm} km is: KES ${totalFare}`);
    
}

    // Call the callback function with the total fare
    calculateBodaFare(console.log);
