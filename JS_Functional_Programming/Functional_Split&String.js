//Sort method
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

//Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

//Original
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line

  // Add your code above this line
}
nonMutatingSort(globalArray);

//SOlution
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  var myArray = arr.concat();

  return myArray.sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);


/*************************************************************/

//Use the split method inside the splitify function to split str into an array of words.
// The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

//Original
function splitify(str) {
  // Add your code below this line

  // Add your code above this line
}
splitify("Hello World,I-am code");

//SOlution
function splitify(str) {
  // Add your code below this line
  //For example you can use a regex that match any non a-z character
  return str.split(/\s|\W/)

  // Add your code above this line
}
splitify("Hello World,I-am code");
