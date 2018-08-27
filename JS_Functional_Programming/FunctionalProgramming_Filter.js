var animals = [
  {name: "FluffyKins", species: "rabbit"},
  {name: "Caro",       species: "dog"},
  {name: "Hamilton",   species: "dog"},
  {name: "Harold",     species: "fish"},
  {name: "Ursula",     species: "cat"},
  {name: "Jimmy",      species: "fish"},
]

/**How to do it with a standard for loop
var dogs =[]
for (var i = 0; i < animals.length; i++) {
  if (animals.species === dog) {
    dogs.push(animals[i])
  }
}
**/

var dogs = animals.filter(function(animal) {
  return animal.species === "dog"
})


/*********************************filter exampple*******************/


//as you can see from this, filter uses the function its passed in simply to decide whether or not include the element in the returned array and does not transform the element in any way

//Transforming the newly returned array is then your responsibility after the filter, perhaps by using a map or a forEach or however else you choose

array.prototype.filter = function(f) {
    var newArr = [];
    for(let i=0; i<this.length; i++) {
        if(f(this[i]) {
             newArr.push(this[i])
        }
    }
    return newArr;
}

/************************************************************/

//The variable watchList holds an array of objects with information on several movies.
// Use a combination of filter and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal to 8.0.
// Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.

//Solution below

var filteredList = watchList.filter(item => parseInt(item.imdbRating) >= 8.0).map(item => {
  return {title: item.Title, rating: item.imdbRating};
});


/*********************************************************/


//Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.

//Original
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});


//Solution below
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
// Add your code below this line
  for(let i = 0; i < s.length; i++) {
     if(callback(s[i])) {
       newArray.push(s[i]);
     }
   }
// Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
