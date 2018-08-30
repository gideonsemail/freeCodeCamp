//Find the longest word in the string below
//Original
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Solution
function findLongestWordLength(str) {
//Take the string and convert it into an array of words.
  var words = str.split(' ');
//Declare a variable to keep track of the maximum length
  var maxLength = 0;
//loop from 0 to the length of the array of words.
  for (var i = 0; i < words.length; i++) {
//Then check for the longest word by comparing the current word to the previous one and storing the new longest word.
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  // At the end of the loop just return the number value of the variable maxLength.
  return maxLength;
}


//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Solution

function largestOfFour(arr) {
  //Create a variable to store the results as an array.
  var results = [];
  //Create an outer loop to iterate through the outer array.
  for (var n = 0; n < arr.length; n++) {
    //Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
    var largestNumber = arr[n][0];
    //Create said inner loop to work with the sub-arrays.
    for (var sb = 1; sb < arr[n].length; sb++) {
    // Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    //After the inner loop, save the largest number in the corresponding position inside of the results array.
    results[n] = largestNumber;
  }
//And finally return said array.
  return results;
}

//Solution: Declarative approach
function largestOfFour(arr) {
  //we map all items within the main array to a new array using  and return this array as the final result
  return arr.map(function(group){
    //within each inner array, we reduce its contents down to a single value using .reduce()
    return group.reduce(function(prev, current) {
      //the callback function passed to the reduce method takes the previous value and the current value and compares the two values
      //if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item
      return (current > prev) ? current : prev;
    });
  });
}
