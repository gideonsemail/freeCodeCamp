//GEOLOCATION DATA.
//Add the example code inside the script tags to check a user's current location and insert it into the HTML.

//First, it checks if the navigator.geolocation object exists.
if (navigator.geolocation){
  //If it does, the getCurrentPosition method on that object is called, which initiates an asynchronous request for the user's position.
  navigator.geolocation.getCurrentPosition(function(position) {
    //If the request is successful, the callback function in the method runs.
    document.getElementById('data').innerHTML="latitude: "+ position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    //This function accesses the position object's values for latitude and longitude using dot notation and updates the HTML.
  });
}

<script>
  // Add your code below this line
  if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: "+ position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}

  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
