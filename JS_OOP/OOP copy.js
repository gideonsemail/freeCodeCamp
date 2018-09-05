//Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();





//Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

function Dog(name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}
let terrier = new Dog("Spot", "blue");



//Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Add your code below this line
let myHouse = new House(4);

myHouse instanceof House;//true
