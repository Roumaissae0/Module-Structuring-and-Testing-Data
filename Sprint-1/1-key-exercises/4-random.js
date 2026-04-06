const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Num represent a number minimum 1 and maximum 100
// Math.floor makes any number decimal go down like 1,99 the result is 1 not 2.
// Math.random it gives me a random number between 1 and 100
// at the end add a + minimum (that is 1) it means that its not 1 to 99 its 1 to 100.

console.log(num);