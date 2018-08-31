//We have defined a function, mixedNumbers, which we are passing an array as an argument.
//Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
//Original
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));
//Solution
function mixedNumbers(arr) {
    arr.unshift("I", 2, "three")
    arr.push(7, "VIII", 9);
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));


//We have defined a function, popShift, which takes an array as an argument and returns a new array.
//Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.
//Original
function popShift(arr) {

  return [shifted, popped];
}
// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Solution
function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//We've defined a function, sumOfTen, which takes an array as an argument and returns the sum of that array's elements. Modify the function, using splice(), so that it returns a value of 10.
function sumOfTen(arr) {
  // change code below this line

  // change code above this line
  return arr.reduce((a, b) => a + b);
}
// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));


//Solution
  arr.splice(1,2);//changed this line

//We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument.
//Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
//original
function htmlColorNames(arr) {
  // change code below this line

  // change code above this line
  return arr;
}
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));


//Solution
    arr.splice(0,2, "DarkSalmon", "BlanchedAlmond")



//We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.

function forecast(arr) {
  // change code below this line
  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Solution
 return arr.slice(2, 4);//Start counting from the beginning of the index.
