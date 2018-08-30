//You are given two arrays and an index.

//Use the array methods slice and splice to copy each element of the first array into the second array, in order.

//Begin inserting elements at index n of the second array.

//Return the resulting array. The input arrays should remain the same after the function runs.

//Solution
function frankenSplice(arr1, arr2, n) {

   let NewArr = arr2.slice()
    NewArr.splice(n, 0, ...arr1);
    return NewArr
  }

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Tip: if you use array.slice() with no arguments or array.slice(0), it creates a copy of the array.

/*****************************************************************/

//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

/*****************************************************************/

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

//For example, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

//Original
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);


//Solution 1

function getIndexToIns(arr, num) {
  //First I sort the array using .sort(callbackFuntion) to sort it by lowest to highest, from left to right.
  arr.sort(function(a, b) {
    return a - b;
  });
//Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}


//Solution 2

function getIndexToIns(arr, num) {
  //counter variablef or results
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    //if it returns negative, it is smaller.
    if arr[i]-num < 0 {
      count = count + 1;
    }
  }
  return count;
}

getIndexToIns([40, 60], 50);
