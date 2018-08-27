//Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.

//Original
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line

  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


//solution
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line

  var newArray = anim.slice(beginSlice,endSlice);
  return newArray;

  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


/*********************************************************************/

//Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.
//original
function nonMutatingConcat(original, attach) {
  // Add your code below this line

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

//Solution
function nonMutatingConcat(original, attach) {
  // Add your code below this line
  return original.concat(attach);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

/*********************************************************************/

//Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.

//originalfunction nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.push(newItem);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

//Solution
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.concat(newItem);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
