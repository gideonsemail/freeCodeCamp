//JavaScript While Loops
//Push the numbers 0 through 4 to myArray using a while loop.

var myArray = [];
var i = 0;
while (i <= 4) {
  myArray.push(i);
  i++;
}

/*****************************************************************/

//Use a for loop to work to push the values 1 through 5 onto myArray.
var myArray = [];
for (var i = 1; i < 6; i++) {
    myArray.push(i);
}
//myArray should equal [1,2,3,4,5]

//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
// total = 20

/*****************Nested Loops**********************************/

//Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

function multiplyAll(arr) {
 var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++)  {
      product *= arr[i][j];
    }
  }
  return product;
}
// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

/*****************While Loops****************/
//Before, modify this while loop so the code runs at least once
var myArray = [];
var i = 10;

while (i < 5) {
  myArray.push(i);
  i++;
}
//Changed to do...while loop below
var myArray = [];
var i = 10;

 do {
   myArray.push(i);
   i++;
 } while (i < 5);
