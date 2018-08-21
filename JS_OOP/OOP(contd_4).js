//Fix the code so duck.constructor and beagle.constructor return their respective constructors.

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line

Bird.prototype.constructor = Bird;//added this line
Dog.prototype.constructor = Dog;//added this line


let duck = new Bird();
let beagle = new Dog();



//Add Methods After Inheritance
//Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
// Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};


function Dog() { }
// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("Woof!");
}
// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"




//Override Inherited Methods
//Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird."
}
// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());
