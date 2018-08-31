//We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments.
//The function is supposed to return a new array made up of num copies of arr.
//We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
//original
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

//Solution
    newArr.push([...arr]);


//We have defined a function spreadOut that returns the variable sentence, modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = // change this line
  return sentence;
}
// do not change code below this line
console.log(spreadOut());

//Solution
let sentence = ['learning', ...fragment, 'is', 'fun'];


//indexOf() can be incredibly useful for quickly checking for the presence of an element on an array.
// We have defined a function, quickCheck, that takes an array and an element as arguments.
//Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

//Solution
function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}
// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//Solution
function quickCheck(arr, elem) {
  // change code below this line
  if(arr.indexOf(elem) !== -1) {
    return true
  } else {
    return false
  };
}

//We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array.
//elem represents an element that may or may not be present on one or more of the arrays nested within arr.
//Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

//original
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  // change code above this line
  return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//Solution
function filteredArray(arr, elem) {
  let newArr = [];
  //iterate through the elements of the array
  for (let i = 0; i < arr.length; i++) {
//check for any array nested within arr containing elem has been removed. You want to return the arrays that are NOT present
    if (arr[i].indexOf(elem) === -1) {
//return a filtered version of the passed array
      newArr.push(arr[i])    }
  }
  return newArr;
}

//We have defined a variable, myNestedArray, set equal to an array.
 //Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has
//exactly five levels of depth (remember, the outer-most array is level 1).
//Somewhere on the third level, include the string 'deep',
// on the fourth level, include the string 'deeper',
// and on the fifth level, include the string 'deepest'.

let myNestedArray =
  [ // change code below this line. top most array.
   [2],// an array within an array, 2 levels of depth
    [['deep']],// An array nested 3 levels deep
     [[['deeper'], [true]],// 2 arrays nested 4 levels deep
      [[['deepest']]]]// an array nested 5 levels deep
];
