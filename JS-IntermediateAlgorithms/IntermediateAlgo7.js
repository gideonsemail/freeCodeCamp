//Flatten a nested array. You must account for varying levels of nesting.

//If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have [4]] then instead of returning [4] you need to return 4. If you get [[[4]]] then the same, you want the 4. You can access it with arr[index1][index2] to go a level deeper.

// Basic Code Solution:
function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);
:rocket: Run Code

Code Explanation:
Create a new variable to keep flattened arrays.
Create a function that will add non array elements to the new variable, and for the ones that are array it loops through them to get the element.
It does that by using recursion, if the element is an array then call the function again with a layer of array deeper to check if it is an array or not. if it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.
Invoke the function, the first time you will always pass it an array, so it always fall in to the isArray branch
Return the flattened array.
Relevant Links
Array.push()
Array.forEach()

//:sunflower: Intermediate Code Solution:
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

flattenArray([1, [2], [3, [[4]]]]);
:rocket: Run Code

Code Explanation:
Use spread operator to concatenate each element of arr with an empty array
Use Array.some() method to find out if the new array contains an array still
If it does, use recursion call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
If it does not, return the flattened array

/*************************************************************/

//Return an English translated sentence of the passed binary string.

//The binary string will be space separated.
//This problem is very straight forward, you will get a string that will represent a sentence in binary code, and you need to translate that into words. There is not direct way to do this so you will have to translate twice.

//Solution
function binaryAgent(str) {
      // Separate the binary code by space.
      str = str.split(' ');
      var power;
      var decValue = 0;
      var sentence = '';

      // Check each binary number from the array.
      for (var s = 0; s < str.length; s++) {
        // Check each bit from binary number
        for (var t = 0; t < str[s].length; t++) {
          // This only takes into consideration the active ones.
          if (str[s][t] == 1) {
            // This is quivalent to 2 ** position
            power = Math.pow(2, +str[s].length - t - 1);
            decValue += power;

            // Record the decimal value by adding the number to the previous one.
          }
        }

        // After the binary number is converted to decimal, convert it to string and store
        sentence += (String.fromCharCode(decValue));

        // Reset decimal value for next binary number.
        decValue = 0;
      }

      return sentence;
    }

    // test here
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

    Code Explanation
For each of these binary strings, check for the ones and ignore the zeroes.
For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
Store the power into the power variable by adding it to any previous ones on the variable decValue. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to sentence along with any other text string already converted and stored.
Reset the variable decValue to avoid getting wrong decimals before continuing to the outer loop.
