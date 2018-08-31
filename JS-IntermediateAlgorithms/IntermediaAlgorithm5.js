//You will create a program that will find the missing letter from a string and return it. If there is no missing letter, the program should return undefined. There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used. Also, the letters are always provided in order so there is no need to sort them.

//SOlution
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /*Code of encountered character is stored in code.
    var code = str.charCodeAt(i);*/

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      //If a character is missing, the missing character is found and the final string is returned.
      return String.fromCharCode(code - 1);
    }
  }//undefined is returned if there is no missing character in the string.
  return undefined;
}

// test here
fearNotLetter("abce");

/*************************************************************/

//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.


//SOlution
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}


//SOlution 2
function uniteUnique(arr1, arr2, arr3) {
 var newArr;
 //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;
}

/*************************************************************/

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

//SOlutoin
function convertHTML(str) {
      // Split by character to avoid problems.

      var temp = str.split('');

      // Since we are only checking for a few HTML elements I used a switch

      for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
          case '<':
            temp[i] = '&lt;';
            break;
          case '&':
            temp[i] = '&amp;';
            break;
          case '>':
            temp[i] = '&gt;';
            break;
          case '"':
            temp[i] = '&quot;';
            break;
          case "'":
            temp[i] = "&apos;";
            break;
        }
      }

      temp = temp.join('');
      return temp;
    }

    //test here
    convertHTML("Dolce & Gabbana");



//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

//SOlution
function sumFibs(num) {
  //Create a variable to keep record of the current and previous numbers along with the result that will be returned.
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    //Use a while loop to make sure we do not go over the number given as parameter.
    while (currNumber <= num) {
      //We use the modulo operand to check if the current number is odd or even. If it is even, add it to the result.
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        //Complete the Fibonacci circle by rotating getting the next number and swapping values after.

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

//Intermediate SOlution

function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}


/*************************************************************/

//Sum all the prime numbers up to and including the provided number.

//A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

//The provided number may not be a prime.

//SOlution
function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes(10);

Code Explanation:
Create a function that generates the numbers from 1 to num and check if they are prime along the way.
Declare the variables that will be needed.
Start with 2, if it has not been marked and added to the sieve array then it is a prime and we add it to the prime array.
Add the others to the sieve array.
Return the primes
Loop through the returned array and add all the elements to then return the final value.
