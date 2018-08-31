//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//Solution
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase.(thats what the additional "g" is for.)
  //$1 and $2 represent the first and 2nd capture groups
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// test here
spinalCase('This Is Spinal Tap');

/*************************************************************/

//Translate the provided string to pig latin.
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.

//SOlution
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else if(str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");
