//Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

//Original
function sentensify(str) {
  // Add your code below this line

  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

//SOlution
function sentensify(str) {
  // Add your code below this line

  return str.split(/\W/).join(" ")

  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

/*************************************************************/

//Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

//SOlution 1
function urlSlug(title) {
  var newTitle = title.split(/\W+/);
  var filterTitle = newTitle.filter(function(x) {
    return /\S/.test(x);
  })
  return filterTitle.join("-").toLowerCase()
}

//Solution 2
function urlSlug(title) {
return title.toLowerCase().split(" ").filter(function(item){
    return item;
}).join("-");

}
