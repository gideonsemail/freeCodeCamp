/*************Root Level Request Logger************/

//The challenge asks you to implement a root-level logger middleware.Let’s break it down into pieces:

//A) root-level logger middleware. :
//Basically it means that you should implement a “function” triggered by incoming requests regardless of the path the request is directed to. A “function” executed ‘during the travel’ of your request to the response.

//B)For every request, it should log in the console a string taking the following format: method path - ip. It means that you don’t need to be more specific ( app.post, app.delete, app.get, …), you can just use app.use

//C)Note: You shouldn’t use/json : it will execute the function only when the requests are directed to the /json path and you want to process all the requests.

app.use(function (req, res, next) {
  //have to declare the variable inside the function for some reason
  var result = req.method + ' ' + req.path + ' - ' + req.ip;
  console.log(result);
  next();
});

/*************CHain Middleware to create time server************/

//Middleware can be mounted at a specific route using app.METHOD(path, middlewareFunction).
//Middleware can also be chained inside route definition.

//In the route app.get('/now', ...) chain a middleware function and the final handler.
// In the middleware function you should add the current time to the request object in the req.time key. You can use new Date().toString().
// In the handler, respond with a JSON object, taking the structure {time: req.time}.


app.get('/now', function(req, res, next) {
req.time = new Date().toString()
next();
}, function(req, res) {
res.json(){time: req.time});
})



/*************Get Route Parameter input from Client************/

//Build an echo server, mounted at the route GET /:word/echo. //Respond with a JSON object, taking the structure {echo: word}. //You can find the word to be repeated at req.params.word.

//You can test your route from your browser's address bar, visiting some matching routes, e.g. your-app-rootpath/freecodecamp/echo

app.get('/:word/echo', function(req, res, next) {
res.json({echo: req.params.word});
next()
})
