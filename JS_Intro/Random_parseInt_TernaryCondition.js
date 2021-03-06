//Random numbers

//Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

/*****************************************************************/

//pareseInt to convert strings to numbers
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

/*****************************************************************/

//Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either true or false.

function checkEqual(a, b) {
   return a === b ? true : false;
}
checkEqual(1, 2);

/*****************************************************************/

//Multiple conditions
function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}
checkSign(10);
