//Add a click event handler inside of the DOMContentLoaded function for the element with id of getMessage.
//Solution
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      // Add your code below this line
      document.getElementsByClassName('message')[0].textContent="Here is the message";

      // Add your code above this line
    }
  });
</script>
