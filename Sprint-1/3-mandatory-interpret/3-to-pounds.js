const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 2. const penceStringWithoutTrailingP = penceString.substring : it stars from 0 that is 3 and ends with penceString.length thats is all the text minus  the last letter that is p 
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart : we take the reponse of the line 3 and if is less than 3 characters we add 0 till is 3 character.
// 4. const pounds = paddedPenceNumberString.substring : it takes only the 0 that is  the pound part and leaves the pences the las 2 characters. it separate them .
// 5. const pence = paddedPenceNumberString : it does like the answer 4 but on the contrary it takes only the pences and leaves the pound .