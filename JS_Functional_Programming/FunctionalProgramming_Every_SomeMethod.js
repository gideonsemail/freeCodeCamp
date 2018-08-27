//Use the every method inside the checkPositive function to check if every element in arr is positive.
// The function should return a Boolean value.

//Original
function checkPositive(arr) {
  // Add your code below this line

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

//Solution
function checkPositive(arr) {
let result = arr.every(function(isPositive)  {
       return isPositive >= 0;
    });
    return result
}
//Solution 2
return arr.every(function(currentValue){
return currentValue > 0;
});

/*************************************************************/

//Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

//Original
function checkPositive(arr) {
  // Add your code below this line

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

//Solution
function checkPositive(arr) {
  // Add your code below this line
  return arr.some(function(isPositive) {
    return isPositive >= 0
  })
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
