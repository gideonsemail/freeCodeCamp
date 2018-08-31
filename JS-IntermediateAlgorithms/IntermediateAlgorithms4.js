//Perform a search and replace on the sentence using the arguments provided and return the new sentence.

//First argument is the sentence to perform the search and replace on.

//Second argument is the word that you will be replacing (before).

//Third argument is what you will be replacing the second argument with (after).

//Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

//Solution
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*************************************************************/

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


//SOlution
function pairElement(str) {
      // Return each strand as an array of two elements, the original and the pair.
      var paired = [];
      //The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.

      //Since we have to the original and the pair, I decided to take all four cases instead of the base two.

      // Function to check with strand to pair.
      var search = function(char) {
        switch (char) {
          case 'A':
            paired.push(['A', 'T']);
            break;
          case 'T':
            paired.push(['T', 'A']);
            break;
          case 'C':
            paired.push(['C', 'G']);
            break;
          case 'G':
            paired.push(['G', 'C']);
            break;
        }
      };

      // Loops through the input and pair.
      //Create an empty array and use the search function to push the right values to the array and return them.
      for (var i = 0; i < str.length; i++) {
        search(str[i]);
      }

      return paired;
    }

    // test here
    pairElement("GCG");
