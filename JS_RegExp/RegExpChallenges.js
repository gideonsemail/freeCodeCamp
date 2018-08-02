//You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

//1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
//2) Username letters can be lowercase and uppercase.
//3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);


//Solution
let userCheck = /[a-zA-Z][a-zA-Z]+[0-9]*/

/*****************************************************************/

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
//Original
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

//Solution
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/ // Change this line

let result = pwRegex.test(sampleWord);

//Explained
/(?=\w{5,}) //string, at least 5 characters long
(?=\D*\d{2})/; // \d{2} = (digit, two please)

/****************Whitespaces challenge******************************/

//Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

//Original
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

//Solution

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Exaplanation below
let result = hello.replace(wsRegex, ''); // Change this line

^\s+|\s+$/g
//Explanation: Take 1 or more white spaces (\s+) till the end of the string ($), and replace them with an empty string.
//The above two regexes were united with an an alternation mark | and we added a /g at the end to execute the substitution globally (repeated times).
