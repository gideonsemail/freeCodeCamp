//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.
//Original
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


//Solution
function findElement(arr, func) {
  let num = 0;

  for(var i = 0; i < arr.length; i++) {
    //The num variable is being passed into the function, so we set it to each index in our array.
    num = arr[i];
    //The pre-defined function already checks each number for us, so if it is “true”, we return that num.
    if (func(num)) {
      return num;
    }
  }
  //If none of the numbers in the array pass the function’s test, we return undefined.
  return undefined;
}

//Solution 2
function findElement(arr, func) {
  return arr.find(func)
}
