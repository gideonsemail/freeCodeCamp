//As you have seen, behavior is shared through inheritance. However, For unrelated objects, it's better to use mixins.
//Create a mixin named glideMixin that defines a method named glide.
// Then use the glideMixin to give both bird and boat the ability to glide.

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
let glideMixin = function(object) {
  object.glide = function() {
    console.log("glide, ni@@a!");
  }
}

glideMixin(bird);
glideMixin(boat);


//A common pattern in JavaScript is to execute a function as soon as it is declared.Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
//Original
function makeNest() {
  console.log("A cozy nest is ready");
}
makeNest();

//Solution
(function() {
console.log("yeah");
}) ();


//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
//Original
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

//Solution

let funModule = (function() {
  return {
   isCuteMixin: function(obj) {
    obj.isCute = function() {
     return true;
  };
},
singMixin: function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
   };
  }
 }
}) ();
