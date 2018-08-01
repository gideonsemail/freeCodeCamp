//Bracket notation to get characters from strings
var firstName = "Charles"
you can get the value of the first letter of the string by using firstName[0]
//get its length by
firstName.length

//To modify the end of a array, use "push" and "pop"
//To modify the beginning of an array use ".shift" and ".unshift"

//pop example
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4

//shift example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

/**Quiz: Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.**/
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();  // I changed this line
}



//Basic JavaScript: Replacing If Else Chains with Switch
//Switch Statements
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
     answer = "apple";
     break;
    case "b":
     answer = "bird";
     break;
    case "c":
     answer = "cat";
     break;
    default:
     answer = "stuff";
     break;
  }
  // Only change code above this line
 return answer;
}
// Change this value to test
switchOfStuff(1);


//Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
     answer = "Low";
     break;
    case 4:
    case 5:
    case 6:
    answer = "Mid";
     break;
    case 7:
    case 8:
    case 9:
    answer = "High";
  }
  return answer;
}
// Change this value to test
sequentialSizes(1);

//More Switch statements below
function chainToSwitch(val) {
  var answer = "";

  switch (val) {
    case "bob":
     answer = "Marley";
     break;
    case 99:
     answer = "Missed me by this much!";
     break;
    case 7:
     answer = "Ate Nine";
     break;
  }
  return answer;
}
// Change this value to test
chainToSwitch(7);


/*************
Basic JavaScript: Counting Cards
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table**/
var count = 0;
function cc(card) {
  // Only change code below this line
    switch(card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
       count++;
       break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
  if (count >= 1) {
   return count + " Bet"
} else if (count < 1) {
    return count + " Hold"
}
}
// Add/remove calls to test your function.
cc(2); cc(3); cc(7); cc('K'); cc('A');
