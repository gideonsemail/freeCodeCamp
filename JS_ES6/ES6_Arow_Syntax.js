//Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};

//Shorter Arrow function version
const myConcat = (arr1, arr2) => arr1.concat(arr2);
//test
console.log(myConcat([1, 2], [3, 4, 5]));


/*****************************************************************/


//Use arrow function syntax to compute the square of only the positive integers (fractions are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.

//Original Below
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr;
  return squaredIntegers;
};

//Solution below. Are you fucking kidding me?
//Uses the operator filter() and map() functions to square all positive integers in a given array.
const squareList = (arr) => {
      "use strict";
      const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
      return squaredIntegers;
    };

// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
