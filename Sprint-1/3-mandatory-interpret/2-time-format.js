const movieLength = 3600; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

//    6

// b) How many function calls are there?

//    Only one console.log 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//    MovieLength its whats left after sliping .

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//    It means how many minutes there are after subtract totalminutes to remainingseconds and convert to minutes 

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//    the hours minutes and seconds remaining of the movie . Maybe it can be RemainingOfMovie

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//    It works good but some times its weird the format only with one digit and not 2 like 1:0:0 it should be 01:01:01 but anyways it works perfect