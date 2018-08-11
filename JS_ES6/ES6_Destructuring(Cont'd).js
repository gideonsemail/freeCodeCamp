//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
//Solution
let a = 8, b = 6;
(() => {
  "use strict";
 [a, b] = [b,a]; //added this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

/*********************************************************/

//Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
//Original

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  arr = list // change this

  return arr;
}
const arr = removeFirstTwo(source);

//Solution
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [,,...arr] = source; // changed this line

  return arr;
}
const arr = removeFirstTwo(source);

//test below
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
