function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> 3 times .In the last line of the formatTimeDisplay function, you can see the word pad written three times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1 The last time the program calls pad, it is looking for the remainingSeconds. When you have 61 seconds, 60 of them make a full minute, and you have 1 second left over. That leftover 1 is what gets sent to num

//
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 01 .The function takes the number 1. Because the code says padStart(2, "0"), it says: "Hey, this needs to be 2 characters long!". So, it puts a 0 in front of the 1, making it "01".
