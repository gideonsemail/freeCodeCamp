//Here's a review of what each piece is doing.
//The JavaScript has a number of properties and methods that are used to transfer data.

// First, an instance of the XMLHttpRequest object is created and saved in the req variable.
req=new XMLHttpRequest();
//Next, the open method initializes a request - this example is requesting data from an API, therefore is a "GET" request.
//The second argument for open is the URL of the API you are requesting data from.
//The third argument is a Boolean value where true makes it an asynchronous request.
req.open("GET",'/json/cats.json',true);
//The send method sends the request.
req.send();
//Finally, the onload event handler parses the returned data and applies the JSON.stringify method to convert the JavaScript object into a string.
req.onload=function(){
  json=JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
};


//Remember how to access data in arrays and objects. Arrays use bracket notation to access a specific index of an item. Objects use either bracket or dot notation to access the value of a given property.
// Here's an example that prints the "altText" of the first cat photo - note that the parsed JSON data in the editor is saved in a variable called json:

console.log(json[0].altText);
// Prints "A white cat wearing a green helmet shaped melon on its head."

[{
  "id":0,
  "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
  "altText":"A white cat wearing a green, helmet shaped melon on its head.",
  "codeNames":["Juggernaut","Mrs. Wallace","Buttercup"]},
  {"id":1,"imageLink":"https://s3.amazonaws.com/freecodecamp/grumpy-cat.jpg","altText":"A white cat with blue eyes, looking very grumpy. ","codeNames":["Oscar","Scrooge","Tyrion"]},
  {"id":2,"imageLink":"https://s3.amazonaws.com/freecodecamp/mischievous-cat.jpg","altText":"A ginger cat with one eye closed and mouth in a grin-like expression. Looking very mischievous. ","codeNames":["The Doctor","Loki","Joker"]}
]

//For the cat with the "id" of 2, print to the console the second value in the codeNames array. //You should use bracket and dot notation on the object (which is saved in the variable json) to access the value.

//Solution
console.log(json[2].codeNames[1])
"Loki"
