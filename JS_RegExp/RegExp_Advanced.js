//Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);


//Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Changed this line

/*******************Beginning and End*****************************/

//Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Changed this line
let result = calRegex.test(rickyAndCal);

//You can search the end of strings using the dollar sign character $ at the end of the regex.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line

/*******************Strings(non)*****************************/

//These shortcut character classes are also known as shorthand character classes.
//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_]
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line

/*******************Count Digits(non)*****************************/

//The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;

//You can also search for non-digits using a similar shortcut that uses an uppercase D instead.The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9],

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;
