// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minute = time.slice(3, 5);

  let period = "am";
  let displayHours = hours;

 if (hours === 12) {
    period = "pm";
  } else if (hours > 12) {
    displayHours = hours - 12;
    period = "pm";
  } else if (hours === 0) {
    // 3. Handle Midnight
    displayHours = 12;
  }


const formattedHours = displayHours.toString().padStart(2, "0");

  return `${formattedHours}:${minutes} ${period}`;
}


console.assert(formatAs12HourClock("08:30") === "08:30 am", "Error at 08:30");

console.assert(formatAs12HourClock("23:45") === "11:45 pm", "Error at 23:45");

console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Error at 12:00");

console.assert(formatAs12HourClock("00:15") === "12:15 am", "Error at 00:15");

console.log("If you see no error messages above, all tests passed!");