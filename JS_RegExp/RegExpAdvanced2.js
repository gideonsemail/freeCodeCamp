/*******************Whitespace*****************************/

//You can search for whitespace using \s
//Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);


//You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace. Search for non-whitespace using \S
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

/*******************Upper and Lower Bound Matches*********************/

//Specify Upper and Lower Number of Matches. For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.
//Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no"
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

//To only specify the lower number of patterns, keep the first number followed by a comma.
//Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

//Change the regex timRegex to match the word "Timber" only when it has four letter m's.
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

/*****************************************************************/

//You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

//Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

/****************************Search and Replace***********************/

//Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey".

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Changed this line
let replaceText = "okey-dokey"; // Changed this line

let result = huhText.replace(fixRegex, replaceText);
