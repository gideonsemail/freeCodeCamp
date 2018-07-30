//**Setup:We have an array of objects representing different people in our contacts lists.
//A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.***/

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    }
];
/***The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
//If both are true, then return the "value" of that property.
//If name does not correspond to any contacts then return "No such contact"
//If prop does not correspond to any valid properties of a contact found to match name then return "No such property"***/

function lookUpProfile(name, prop){

//The for loop runs, starting at the first object in the contacts list.
for (i = 0; i < contacts.length; i++) {
//If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
if (name === contacts[i].firstName) {
//Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.
  if (contacts[i].hasOwnProperty(prop)) {
//If the first if statement fails, the for loop continues on to the next object in the contacts list.
//If the second if statement fails, No such property is returned.
    return contacts[i][prop];
  } else {
    return "No such property";
  }
}
//If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.
return "No such contact";
}
// Change these values to test your function
lookUpProfile("Akira", "likes");
