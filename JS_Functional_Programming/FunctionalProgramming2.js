/Refactor (rewrite) the code so the global array bookList is not changed inside either function.
/ The add function should add the given bookName to the end of an array.
/The remove function should remove the given bookName from an array.
/Both functions should return an array, and any new parameters should be added before the bookName one.


// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Add your code below this line
function add (arr, bookName) {
  let localArray = [...arr];
  localArray.push(bookName);
  return localArray;
  // Add your code above this line
}
/**alternative Solution below
function add(arr, bookName) {
  arr = [...arr, bookName];
  return arr;
  **/

// Add your code below this line
//string.indexOf(searchvalue, start)
function remove(arr, bookName) {
  let array1 = arr.slice(0, arr.indexOf(bookName));
  let array2 = arr.slice(arr.indexOf(bookName) + 1);
  return array1.concat(array2);
}
    // Add your code above this line

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


//The watchList array holds objects with information on several movies. Use map to pull the title and rating from watchList and save the new array in the rating variable.
//The code in the editor currently uses a for loop to do this, replace the loop functionality with your map expression.

var watchList = [
                 {
                   "Title": "Inception",
                   "Year": "2010",
                 "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                },
                {
                   "Title": "Avatar",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

//Add your code below this line
var rating = [];
for(var i=0; i < watchList.length; i++) {
  rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}
//Add your code above this line

//My Solution
var rating = []
watchList.map(function(item) {
  return rating.push({title: item.Title, rating: item.imdbRating})
})

//solution in ES6
watchList.map((item) => ({title: item.Title, rating: item.imdbRating})
