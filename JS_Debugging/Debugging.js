//Fix the two pair errors in the code.
//Original
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//Solution. Had to add parentheses to previous and current args)
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);


//Fix the code so the variable result is set to the value returned from calling the function getNine.
//Original
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);

//Solution
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();//added paretheses to getNine
console.log(result);

/****************************************************************/

//Arguments passed in the wrong onrder to a function
//The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);//original was raiseToPower(exp, base). 3 raised to the 2nd power instead of vice versa to equal 8.
console.log(power);

/****************************************************************/

//Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console
//Original
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 1; i <= len; i++) {
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}
countToFive();

//Solution
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 0; i < len; i++) {
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}
countToFive();
