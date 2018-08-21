//A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

//Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  eat: function() {
    console.log("woof woof");
  },
  describe: function() {
    console.log("It's a big scary dog");
  }
};


//An object inherits its prototype directly from the constructor function that created it.
//Use isPrototypeOf to check the prototype of beagle.
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle)



//Modify the code to show the correct prototype chain.
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
