//The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  /**deleted the eat function.
  eat: function() {
    console.log("nom nom nom");
  }**/
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  /**deleted the eat function.
  eat: function() {
    console.log("nom nom nom");
  }**/
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  //added lines below
  eat: function() {
    console.log("nom nom nom");
  }
};

//This and the next challenge will cover how to reuse Animal's methods inside Bird and Dog without defining them again. It uses a technique called inheritance.
//Use Object.create to make two instances of Animal named duck and beagle.
//STEP 1
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // I changed this line
let beagle = Object.create(Animal.prototype); // I changed this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"


//STEP 2: set the prototype of the subtype (or child)—in this case, Dog—to be an instance of Animal. (Could also do the same for Bird.)
//Modify the code so that instances of Dog inherit from Animal.
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype)//added this line

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
