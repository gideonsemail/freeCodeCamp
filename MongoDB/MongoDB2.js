/*************Using Model Create**************/

// Sometimes you need to create many Instances of your Models,
// e.g. when seeding a database with initial data. `Model.create()`
// takes an array of objects like [{name: 'John', ...}, {...}, ...],
// as the 1st argument, and saves them all in the db.
// Create many people using `Model.create()`, using the function argument
// 'arrayOfPeople'.

//Original
var createManyPeople = function(arrayOfPeople, done) {
  //Code goes here
    if(err) {
      done(err);
    } else {
      done(null, data)
    }
  })
}

//Solution
var createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople, (err, data) => {
    if(err) {
      done(err);
    } else {
      done(null, data)
    }
  })
}


/*************Using Model Find**************/

//Find all the people having a given name, using Model.find() -> [Person]
//In its simplest usage, Model.find() accepts a query document (a JSON object ) as the first argument, then a callback. It returns an array of matches.
//It supports an extremely wide range of search options. Check it in the docs.
// Use the function argument personName as search key.
//Original
var findPeopleByName = function(name: personName, done) {
//Code goes here:
    return done(null, data);
    })
};


//Solution
var findPeopleByName = function(name: personName, done) {
    Person.find({name:personName}, function (err, data) {
    if(err){
      return done(err);
    }
    return done(null, data);
    })
};
