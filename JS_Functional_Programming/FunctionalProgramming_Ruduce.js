//Steve Griffith YT tutiral on reduce examples below

}Let numbers = [12, 34, 56, 78, 91];
//find the sum of all numbers

//Takes the callback function, and the initial value(which is “0” in this case)
let sum = Numbers.reduce(function(passedIn, item) {
Return passedIn + item;
}, 0);


//Example 2
//Find the first alphabetical movie(movie with lower ASCII value)
let movies = [“star Wars”, “Jaws”, “Captain America”, “Alien”…]

let first = movies.reduce(function(current, item) {
//ternary operator below. if current is less than item, return current, else return item
return (current < item) ? current: item;
//random ASCII character
}, “u0434”);


/*********************************************************************/

//The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.

//Find avg rating IMDB rating for all Chris Nolan movies. Find his subset of movies.
let cNolanMovies = watchList.filter( item => item.Director === "Christopher Nolan");

//get ther ratings for those movies.We now map the objects in the array to single values. Instead of having an array containing 4 objects with a lot of information we don’t need, we map it to single values (numbers, not strings) representing the imdbRating number. take each element (object) and return only the “imdbRating” value of that element BUT as a number and not a string.
let movieRatings = cNolanMovies.map(item => Number(item.imdbRating));

//Now we have an array that looks like this: [8.8, 8.6, 9.0, 8.3]
//Just use .reduce((total, sum) => total + sum) to add them all up! What we see in the parentheses is just the notation for using reduce().
let averageRating = movieRatings.reduce( (total, sum) => total + sum/movieRatings.length;
