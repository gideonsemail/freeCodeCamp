/*************Using Model Find**************/

// `Model.findOne()` behaves like `.find()`, but it returns **only one**
// document, even if there are more. It is especially useful when searching by properties that you have declared as unique.
// Find just one person which has a certain food in her favorites, using `Model.findOne() -> Person`.
// Use the function argument `food` as search key

//SOlution
var findOneByFood = function(food, done) {
  Person.findOne({favoriteFoods: food}, function (err, data) {
    if(err) {
      return done(err);
    }
     return done(null, data);
  })
};

/*************Using Model FindOne**************/


/** 7) Use `Model.findById()` */
// When saving a document, mongodb automatically add the field `_id`, and set it to a unique alphanumeric key. Searching by `_id` is an extremely frequent operation, so `moongose` provides a dedicated method for it.
//Find the (only!!) person having a certain Id using `Model.findById() -> Person`.
// Use the function argument 'personId' as search key.

//Original
var findPersonById = function(personId, done) {

  done(null/*, data*/);

};

//Solution
var findPersonById = function(personId, done) {
  Person.findById(personId, function (err, data) {
    if(err) {
      return done(err);
    }
     return done(null, data);
  done(null, data);
  })
};
