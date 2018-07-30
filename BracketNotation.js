//Dot notation
//Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;      // My answer
var shirtValue = testObj.shirt;    // My answer

//The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

//Use the playerNumber variable to look up player 16 in testObj using bracket notation. Then assign that name to the player variable.

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

//You can add new properties to existing JavaScript objects the same way you would modify them.

var myDog = {
  "name": "Happy Coder",
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof";

//We can also delete properties from objects like this:
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,

};
 delete myDog.tails;

//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
 function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}
phoneticLookup("charlie");

//Testing Objects for Properties
//Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

//Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if(myObj.hasOwnProperty(checkProp))
  return myObj[checkProp];
  else
  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");
