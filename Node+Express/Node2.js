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

/*************Root Level Request Logger************/

//Middleware can be mounted at a specific route using app.METHOD(path, middlewareFunction).
//Middleware can also be chained inside route definition.
