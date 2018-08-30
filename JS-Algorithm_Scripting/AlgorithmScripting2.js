//Check if a string (first argument, str) ends with the given target string (second argument, target).

//Original
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");

//Solution
function confirmEnding(str, target) {
  var answer;
  for (var i = target.length-1; j = str.length-1; i >= 0; i--) {
    if (target[i]!==str[j]){
      answer = false;
    } else answer =true;
    j--;
  }

  return answer;
}

confirmEnding("Bastian", "n");


/*****************************************************************/


//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

//Original
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}
repeatStringNumTimes("abc", 3);


//Solution 1
function repeatStringNumTimes(str, num) {
  //Create an empty string variable to store the repeated word.
  var accumulatedStr = '';
  //Use a while loop or for loop to repeat code as many times as needed according to num
  while (num > 0) {
    //Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
    accumulatedStr += str;
    num--;
  }
//At the end of the loop, return the variable for the repeated word.
  return accumulatedStr;
}


//Intermediate Code Solution: Recursion
function repeatStringNumTimes(str, num) {
  //We check if num is negative and return an empty string if true.
  if(num < 0)
    return "";
    //Then we check if it’s equal to 1 and in that case we return the string itself.
  if(num === 1)
    return str;
  else
  //If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another.. until eventually num is 1. And return that whole process.
    return str + repeatStringNumTimes(str, num - 1);
}
