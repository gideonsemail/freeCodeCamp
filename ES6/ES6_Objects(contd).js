//Use simple fields with object literals to create and return a Person object.
//original
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};

//Solution
const createPerson = (name, age, gender) => {
  "use strict";
   (name, age, gender);
};
//test
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

/***********************************************************/

//Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

//Original
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

//Solution

const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// test
bicycle.setGear(3);
console.log(bicycle.gear);
