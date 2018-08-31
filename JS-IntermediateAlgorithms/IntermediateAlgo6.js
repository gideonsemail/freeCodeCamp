//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

//The range will be an array of two numbers that will not necessarily be in numerical order.

//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

//DOlution
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);

Code Explanation:
The first, basic solution requires over 2,000 loops to calculate the test case smallestCommons([1,13]), and over 4 million loops to calculate smallestCommons([1,25]). This solution evaluates smallestCommons([1,13]) in around 20 loops and smallestCommons([1,25]) in 40, by using a more efficient algorithm.
Make an empty array range.
All numbers between the given range are pushed to range using a for loop.
The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples.

/*************************************************************/

//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

//Basically while the second argument is not true, you will have to remove the first element from the left of the array that was passed as the first argument.

Basic Code Solution:
function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
:rocket: Run Code

Code Explanation:
Create a for loop to check each element.
Then check for the function given if true then stop, otherwise remove that element.
return the array.
Relevant Links
For Loops
More about for loops


//:sunflower: Intermediate Code Solution:
function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
:rocket: Run Code

Code Explanation:
Use ES6 findIndex() function to find the index of the element that passes the condition
Slice the array from the found index until the end
There is one edge case! if the condition is not met against any of the elements ‘findIndex’ will return -1 which messes up the input to slice(). In this case use a simple conditional operator to return false instead of -1. And the ternary operator (?  :slight_smile: returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.
