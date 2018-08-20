//Reverse the provided string.
//Original
function reverseString(str) {
  return str;
}


//Solution
reverseString("hello");
function reverseString(str) {
  return str.split('').reverse().join('');
}

//Explanation: Our first step is to split the string by characters using split(''). Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.
//Using split() function will turn our string into an array of characters
//Next we chain the reverse() function, which takes our array of characters and reverses them.
//Finally, we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.



//Return the factorial of the provided integer.
function factorialize(num) {

    return num ;
  }
factorialize(5);

//Solution
//This one starts easily since 0! = 1, so you can go ahead and simply return 1 there.

//We can use that as an if in order to break the loop we’re going to create using a recursive function. It will check if the number you gave the function is 0 (which would be the end of your factorial chain). Functions “end” when they return anything. In fact, all functions without an explicit return statement will return undefined.

//Recursion refers to a function repeating (calling) itself. In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is num-1 (which initially translates to 4). The very function is going to run inside itself interesting, eh?

//Solution
function factorialize(num) {
    if (num === 0) { return 1; }
  return num * factorialize(num-1);
  }

factorialize(5);
