//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

//Original
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

//Solution 1

var word1 = arr[0].toLowerCase()
var word2 = arr[1].toLowerCase()
//lowercase string inputs for comparison purposes.

for (var i = 0; i < word2.length; i++) {
  //length of 2nd word is important because we iterating through its letters to see if they are in word1.
  var value = word1.indexOf(word2[i])
  //value holder for character
  if (value === -1) {
    //negative 1 is the result meaning if not contained in the word1.
    return false
  }
  return true
}

//Solution 2

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  //First we make the two strings in the array lowercase. test will hold what we are looking for in target.
  for (var i=0;i<test.length;i++) {
    //Then we loop through our test characters and if any of them is not found we return false.
    if (target.indexOf(test[i]) < 0)
      return false;
      //If they are all found, the loop will finish without returning anything and we get to return true.
  }
  return true;
 }


/*****************************************************************/

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//Original
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


//Solution
function chunkArrayInGroups(arr, size) {
      // Break it up.
      var arr2 = [];
      for (var i = 0; i < arr.length; i+=size) {
        //The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
        //Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
    	arr2.push(arr.slice(i , i+size));
      //Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
      }
      return arr2;
    }

    //Advanced SOliution
    function chunkArrayInGroups(arr, size) {
    if (arr.length <= size){
    return [arr];
  }
  else {
    return
    //Array smaller than size is returned nested.
     [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
     //For any array larger than size, it’s splited in two. First segment is nested and concatnated with second second segment which makes a recursive call.
  }
}
