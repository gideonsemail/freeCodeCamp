//In Express, routes takes the following structure: app.METHOD(PATH, HANDLER).
// METHOD is an http method in lowercase.
//PATH is a relative path on the server (it can be a string, or even a regular expression).
//HANDLER is a function that Express calls when the route is matched.

//Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object

app.get("/", function(req, res) {
  res.send("Hello Express")
})

/**************Serve an HTML Files**********************/

//You probably need to comment out the last challenge.
//To serve an index.html in a folder called “public” at the root domain you would do so like this:

  app.get("/", function(req, res) {
        res.sendFile( __dirname + "/public/index.html");
  });
//ES6 below
  app.get("/", (req, res) => {res.sendFile( __dirname + "/views/index.html"}

/*****************Middleware: Serve Static Assets******************/

app.use(express.static( __dirname + "/public"))


/*****************Serve JSON on a specific route********************/

app.get("/json", function(req, res) {
        res.json({"message": "Hello json"});
  });

/*****************.env file************************/

//Let's add an environment variable as a configuration option. //Store the variable MESSAGE_STYLE=uppercase in the .env file. //Then tell the GET /json route handler that you created in the last challenge to transform the response object’s message to uppercase if process.env.MESSAGE_STYLE equals uppercase.
// The response object should become {"message": "HELLO JSON"}.

//FOrum solution
//you have to go to the .env section on the left and paste the MESSAGE...thing
app.get('/json', function (req,res) {
  let data = {"message": "Hello json"};
    if(process.env.MESSAGE_STYLE==="uppercase"){
      data.message = data.message.toUpperCase();
    }
 return res.json(data);
});
