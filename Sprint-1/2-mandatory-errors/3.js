const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// I think that the problem should be that its a number and not letters

console.log(last4Digits)
// It gives me this error; TypeError: cardNumber.slice is not a function
// the slice it only can be used in text and not number 
// I have to make it string so it can work.
