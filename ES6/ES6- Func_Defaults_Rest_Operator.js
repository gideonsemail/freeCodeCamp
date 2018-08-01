//Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {//added " = 1" onto value
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN

/*****************************************************************/

//Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters.
//Original
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();

//Solution
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

/*****************************************************************/

//Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // added ...arr1 in the brackets.
})();
console.log(arr2);
