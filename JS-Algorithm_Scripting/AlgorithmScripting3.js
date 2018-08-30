//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

//Original
function truncateString(str, num) {
  // Clear out that junk in your trunk

    return str;
  }


//Solution
function truncateString(str, num) {

  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}

//First we start off with a simple if statement to determine one of three outcomes…
//If our string length is greater than the num we want to truncate at, and our truncate point is at least three characters or more into the string, we return a slice of our string starting at character 0, and ending at num - 3. We then append our '...' to the end of the string.

//However, if our string length is greater than the num but num is within the first three characters, we don’t have to count our dots as characters. Therefore, we return the same string as above, with one difference: The endpoint of our slice is now just num.

//Finally, if none of the above situations are true, it means our string length is less than our truncation num. Therefore, we can just return the string.

//Advanced Code Solution: 2
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num : num) + '...';
  }
}


//First we need an if-statement to test if the length of the full string passed in as the first argument already fits within the size limit passed in as the second argument. If so we can just return the string that was passed in.

if (str.length <= num) return str;

//If our if statement above fails, we move to the else, where we are going to return a “slice” of the string.
// Here we pass 0 as the starting point for our slice. To determine the endpoint, we use a ternary operator: num > 3 ? num - 3 : num. In our ternary, if num is larger than 3, we must factor in the three dots to our total length, and thus we end our slice at num-3. If num is less than or equal to 3, our slice gets an end variable of just num. Finally, the '...' is appended to the end of our new string and is returned.
