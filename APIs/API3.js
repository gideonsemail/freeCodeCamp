//Add a forEach method to loop over the JSON data and create the HTML elements to display it.

Here is some example JSON
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload=function(){
        json=JSON.parse(req.responseText);
        var html = "";
        // Add your code below this line
        json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
//the sample json data below
        [
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]

        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML=html;
      };
    };
  });
</script>

/**********************************************************/

//When you're looping through these objects, you can use this imageLink property to display this image in an img element.
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload=function(){
        json=JSON.parse(req.responseText);
        var html = "";
        // Filter out data whose "id" key has a value of 1 via array filter method cat .
          json = json.filter(function(val) {
  return (val.id !== 1);
});
        // Add your code above this line
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // Add your code below this line
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";


          // Add your code above this line
          html += "</div><br>";
        });
        document.getElementsByClassName('message')[0].innerHTML=html;
      };
     };
  });
</script>
