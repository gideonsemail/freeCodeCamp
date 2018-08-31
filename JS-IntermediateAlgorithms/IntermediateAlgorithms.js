//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

//Original

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

//The Math.max() function returns the largest of zero or more numbers.
//Math.max(value1, value2, ...)

//Solution 1

function sumAll(arr) {
  //First create a variable to store the max number between two.
    var max = Math.max(arr[0], arr[1]);
    //The same as before for the Smallest number.
    var min = Math.min(arr[0], arr[1]);
    //We create a temporary variable to add the numbers.
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);

//Advanced Code Solution:
function sumAll(arr) {
  //Creating a variable sum to store the sum of the elements.
    var sum = 0;
    //Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
    //Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);

/*************************************************************/

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays

//Dylan Solution

function diff(arr1, arr2) {
  var holderArray = [];
  for (var i=0; i<arr1.length; i++) {
    //if element is NOT contained, then push it.
    if (arr2.indexOf(arr1[i])=== -1) {
      holderArray.push(arr1[i]);
    }
  }
  for (var j=0; j<arr2.length; j++) {
    //now check if element NOT contained in other array
    if (arr1.indexOf(arr2[j])=== -1) {
      holderArray.push(arr2[j]);
  }
}
return holderArray;


//FCC Solution
function diffArray(arr1, arr2) {
      var newArr = [];

      function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
        for (var i=0;i<first.length;i++) {
          if (second.indexOf(first[i]) === -1) {
            // Pushing the elements unique to first to newArr
            newArr.push(first[i]);
          }
        }
      }

      onlyInFirst(arr1, arr2);
      onlyInFirst(arr2, arr1);

      return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
