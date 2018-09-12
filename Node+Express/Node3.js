/*************Get Client Parameter input from Client************/

//Build an API endpoint, mounted at GET /name.
//Respond with a JSON document, taking the structure { name: 'firstname lastname'}.
//The first and last name parameters should be encoded in a query string e.g. ?first=firstname&last=lastname.

//TIP: In the following exercise we are going to receive data from a POST request, at the same /name route path. If you want you can use the method:
 app.route(path).get(handler).post(handler).

//This syntax allows you to chain different verb handlers on the same path route. You can save a bit of typing, and have cleaner code.

//Solution
app.route('/name').get((req, res) => {
  let first = req.query.first
  let last = req.query.last;
  let jsonObj = { name: `${first} ${last}` };
  res.send(jsonObj);
}).post();


/*************Use body-parser for POST Requests************/

//In this exercise we will use an urlencoded body.
//The middleware to handle url encoded data is returned by bodyParser.urlencoded({extended: false}).
// Pass to app.use() the function returned by the previous method call.

//Solution
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({extended: false}));


/*************Get Data from POST Requests************/

//Mount a POST handler at the path /name. It’s the same path as before. We have prepared a form in the html frontpage.
//If the body-parser is configured correctly, you should find the parameters in the object req.body
//Respond with the same JSON object as before: {name: 'firstname lastname'}. Test if your endpoint works using the html form we provided in the app frontpage.

app.post('/name', (req, res) => {
  let name = req.body.first + ' ' + req.body.last;
  res.send({name: name});
});
