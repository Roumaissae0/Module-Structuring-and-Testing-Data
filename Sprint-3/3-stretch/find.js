function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// The index variable starts at 0 and increases by 1 (index++) on each loop iteration until it finds the character or reaches the end of the string.

// b) What is the if statement used to check
// The if statement checks whether the current character in the string (str[index]) is equal to the character we are searching for (char).

// c) Why is index++ being used?
// Index++ is used to move to the next position in the string. Without it, the loop would never progress and would run forever.

// d) What is the condition index < str.length used for?
// This condition ensures that the loop only runs while the index is within the bounds of the string, preventing access to invalid positions.