///Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
  return str;
}
titleCase("I'm a little tea pot");

//Solution
function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";

  // Step 2. Split the string into an array of strings
  str = str.split(' ');
  // str = "i'm a little tea pot".split(' ');
  // str = ["i'm", "a", "little", "tea", "pot"];
//All together
str = str.toLowerCase().split(' ')

  // Step 3. Create the FOR loop
  for (var i = 0; i < str.length; i++) {
    //str[i].charAt(0).toUpperCase() which will uppercase the index 0 character of the current string
    //str[i].slice(1) which will extract from index 1 to the end of the string.
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  /* Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   str[0] = "I"                            + "'m";
                   str[0] = "I'm";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                   str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                   str[1] = "A"                            + "";
                   str[1] = "A";
  ...
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                   str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                   str[4] = "P"                           + "ot";
                   str[4] = "Pot";
    End of the FOR Loop*/
  }

  // Step 4. Return the output
  return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}


/*****************************************************************/

//Using the MAP METHOD
//We will lowercase and split the string as seen in the previous example before applying the map() method.

function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase() // str = "i'm a little tea pot";

  // Step 2. Split the string into an array of strings
           .split(' ') // str = ["i'm", "a", "little", "tea", "pot"];

  // Step 3. Map over the array
           .map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
    /* Map process
    1st word: "i'm"    => (word.charAt(0).toUpperCase() + word.slice(1));
                          "i'm".charAt(0).toUpperCase() + "i'm".slice(1);
                                "I"                     +     "'m";
                          return "I'm";
    2nd word: "a"      => (word.charAt(0).toUpperCase() + word.slice(1));
                          "a".charAt(0).toUpperCase()   + "".slice(1);
                                "A"                     +     "";
                          return "A";
  ...
    5th word: "pot"    => (word.charAt(0).toUpperCase() + word.slice(1));
                          "pot".charAt(0).toUpperCase() + "pot".slice(1);
                                "P"                     +     "ot";
                          return "Pot";
    End of the map() method */
});

 // Step 4. Return the output
 return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

titleCase("I'm a little tea pot");

//Full SOliution

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
titleCase("I'm a little tea pot");

/**********************************************************************/

//REPLACE Method
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    /* Map process
    1st word: "i'm" => word.replace(word[0], word[0].toUpperCase());
                       "i'm".replace("i", "I");
                       return word => "I'm"
    ...
    5th word: "pot" => word.replace(word[0], word[0].toUpperCase());
                       "pot".replace("p", "P");
                       return word => "Pot"*/
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
titleCase("I'm a little tea pot");
