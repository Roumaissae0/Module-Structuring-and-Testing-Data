
// Function that checks if a credit card number is valid
function validateCreditCardNumber(cardNumber) {
  // Convert the input into a string so we can check each digit
  const cardStr = cardNumber.toString();

  // Check if the card has exactly 16 digits
  if (cardStr.length !== 16) {
    return false;
  }

  // Check if all characters are numbers
  if (!/^\d+$/.test(cardStr)) {
    return false;
  }

  // Return true only if all conditions are satisfied
  return true;
}

module.exports = validateCreditCardNumber;