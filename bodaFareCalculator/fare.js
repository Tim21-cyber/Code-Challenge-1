function calculateBodaFare() {
    const distanceInKm = Number(prompt("Enter the distance in kilometers:"));
    const baseFare = 50; // Base fare in shillings
    const chargePerKm = 15; // Fare per kilometer in shillings
    const totalFare = baseFare + (chargePerKm * distanceInKm);

    console.log(`\nBoda Boda Fare Calculator`);
    console.log(`Distance: ${distanceInKm} km`);
    console.log(`Base Fare: KES ${baseFare}`);
    console.log(`Distance Charge: KES ${chargePerKm * distanceInKm}`);
    console.log(`Total Estimated Fare: KES ${totalFare}`);
    console.log('\nHave a safe ride!');
}