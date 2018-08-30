//MAP METHOD: transform every item in the array according to some logic

[1,2].map(it => it * 2) //[2,4]
[1,2].map(it => ({ it: it * 2}) //[{ 1:2 }, { 2:4 }]

/*****************************************************************/

//Filter: select only the elements in an array that meet certain criteria

//The normal filter method uses a callback function as the 1st parameter. The callback function normally has 1 to 3 arguments, with the 1st argument representing the current element being iterated over.

//filter uses the function its passed in simply to decide whether or not include the element in the returned array and does not transform the element in any way

//Transforming the newly returned array is then your responsibility after the filter, perhaps by using a map or a forEach or however else you choose

//Example 1
var s = [23, 65, 98, 5];

console.log(s.filter(function(item){
  return item % 2 === 1;
}); // displays [23, 65, 5]


//Example 2
[1,2].filter(it => !==2) //[1]

//Example 3
var animals = [
  {name: "FluffyKins", species: "rabbit"},
  {name: "Caro",       species: "dog"},
  {name: "Harold",     species: "fish"},
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

/*****************************************************************/

//Reduce Method: take all of one thing, and give me back one of something(a single value)

//Example 1
//Return an array consisting of the largest number from each provided sub-array.

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr) {
  //we map all items within the main array to a new array and return this array as the final result
  return arr.map(function(group){
    //within each inner array, we reduce its contents down to a single value using .reduce()
    return group.reduce(function(prev, current) {
      //the callback function passed to the reduce method takes the previous value and the current value and compares the two values

      //if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item
      return (current > prev) ? current : prev;
    });
  });
}


//Example 2
//find the sum of all numbers
Let numbers = [12, 34, 56, 78, 91];

//Takes the callback function, and the initial value(which is “0” in this case)
let sum = Numbers.reduce(function(passedIn, item) {
Return passedIn + item;
}, 0);

/*****************************************************************/

//Find and Find index

let arr = ["a","b","c"]
arr.find(k => k=="b"); //"b"

let arr = [2,4,6,8,9,10,12]

//Example 2
function isOdd(i) {
  return i % 2 !==0
}
//Use the find method to pass in out isOdd() function on the arr array
arr.find(isOdd)//9

//Instead of returning the value, findIndex() returns the index of the first element in the array that satisfies the given test.If the test is not satisfied, -1 is returned

let arr = ['a','b','c'];
arr.findIndex(k => k=='b');
// 1

/*****************************************************************/

//Some Method
//The some method works with arrays to check if any element passes a particular test. It returns a Boolean value – true if any of the values meet the criteria, false if not.

//check if any element in the numbersarray is less than 10:
var numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true

/*************************************************************/
