mongodb://gideon123:Focus123@ds251622.mlab.com:51622/freecodecampgid

//Create a person having this prototype :
- Person Prototype -
name : string [required]
age : number
favoriteFoods : array of strings (*)
//Use the mongoose basic schema types.

//Solution
var Schema = mongoose.Schema;
var personSchema = new Schema({
name:{
  type:String,
  required:true},
  age: Number,
  favoriteFoods:[]
});

//To use our schema definition, we need to convert our personSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
var Person = mongoose.model('Person', personSchema);


/*************Create and Save a Record of a Model**************/


//Create a document instance using the Person constructor you build before.
//Pass to the constructor an object having the fields name, age, and favoriteFoods. Their types must be conformant to the ones in the Person Schema.
//Then call the method document.save() on the returned document instance. Pass to it a callback using the Node convention.

// This is a common pattern, all the following CRUD methods take a callback function like this as the last argument.

//Example
person.save(function(err, data) {
// ...do your stuff here...
});

//Solution
 var createAndSavePerson = function(done) {
   var person = new Person(
     {
       name: 'Ben',
       age:23,
       favoriteFoods: ['tuna', 'bread']
    })
    person.save((err, data) => {
      if(err) return done(err)
      return done(null, data)
    })
 }
