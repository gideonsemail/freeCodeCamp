//Using the same syntax, we can also add new key-value pairs to objects. We've created a foods object with three entries. Add three more entries: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// change code below this line
 foods.bananas = 13
 foods.grapes = 35
 foods.strawberries = 27
// change code above this line

console.log(foods);

//We've defined a function, checkInventory, which receives a scanned item as an argument.
// Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line

}
// change code below this line to test different cases:
console.log(checkInventory("apples"));

//Solution
return foods[scannedItem];


//We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument.
// Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

let users = {
  Alan: {
  age: 27,
  online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line


  // change code above this line
}

console.log(isEveryoneHere(users));

//Solution
if ("Alan", "Jeff", "Sarah", "Ryan" in users) {
  return true;
} else {
  return false;
}
