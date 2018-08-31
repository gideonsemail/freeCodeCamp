//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
//Remove all elements from the initial array that are of the same value as these arguments.

//Hint:To convert arguments into an array use this code var args = Array.prototype.slice.call(arguments); The arguments object is an object that stores all of the values passed to the function

function destroyer(arr) {
  //Create an array of arguments using Array.prototype.slice.call() and store it in the variable args. We’ll use this to check against arr.
  var args = Array.prototype.slice.call(arguments);

//Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to args. This second loop will iterate through args .
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      //Within the second loop create an if statement, checking strictly === that the current val of arr[i] is equal to args[j].
      if (arr[i] === args[j]) {
        //If the value at the current index is equal in both arrays, use delete to remove it from arr.
        delete arr[i];
        //Outside of the nested loops: return the modified array using the Boolean object as a filter for any null’s created by the delete operator.
      }
    }
  }
  return arr.filter(Boolean);
}


/*************************************************************/

//Write an algorithm that will take an array for the first argument and return an array with all the objects that matches all the properties and values in the Object passed as second parameter.

function whatIsInAName(collection, source) {

  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      //We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        //We return false if the above if statement is correct. Otherwise, we return true;
        return false;
      }
    }
    return true;
  });
}
