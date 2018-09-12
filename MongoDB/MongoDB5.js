/*******************Chain Search Query Helpers to Narrow Search Results******/

//Find people who like "burrito".
//Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec().

//Solution(no idea how). See: https://forum.freecodecamp.org/t/mongodb-and-mongoose-chain-search-query-helpers-to-narrow-search-results/208604

var queryChain = function(done) {
  var foodToSearch = "burrito";
  Person.find({favoriteFoods:foodToSearch}).sort({name : "asc"}).limit(2).select("-age").exec((err, data) => {
     if(err)
       done(err);
    done(null, data);
  })
};
