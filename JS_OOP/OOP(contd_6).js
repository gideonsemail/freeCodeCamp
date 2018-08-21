//Closure: The simplest way to make properties private is by creating a variable within the constructor function. This way, it can only be accessed and changed by methods also within the constructor function.
//Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight.

function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}
