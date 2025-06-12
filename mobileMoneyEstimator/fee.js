function estimateTransactionFee() {
    // This function estimates the transaction fee for a mobile money transfer.
    const amountToSend = Number(prompt("Enter the amount of money you want to send (in KES):"));

    const feePercentage = 0.015; 
    let transactionFee = amountToSend * feePercentage;

    // Apply minimum and maximum fee limits
    if (transactionFee < 10) {
        transactionFee = 10; // Minimum fee
        } else if (transactionFee > 70) {
        transactionFee = 70; // Maximum fee
    }

    const totalAmount = amountToSend + transactionFee;

    console.log(`Transaction Fee: KES ${transactionFee.toFixed(2)}`);
    console.log(`Total Amount Debited: KES ${totalAmount.toFixed(2)}`);

}

// Call the function to execute the fee estimation
estimateTransactionFee(console.log);