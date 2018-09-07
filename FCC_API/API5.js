req=new XMLHttpRequest();
//Here the open method initializes the request as a "POST" to the given URL of the external resource, and uses the true Boolean to make it asynchronous.
req.open("POST",url,true);
//The setRequestHeader method sets the value of an HTTP request header, which contains information about the sender and the request.
//It must be called after the open method, but before the send method. The two parameters are the name of the header and the value to set as the body of that header.
req.setRequestHeader('Content-Type','text/plain');
//Next, the onreadystatechange event listener handles a change in the state of the request.
//A readyState of 4 means the operation is complete, and a status of 200 means it was a successful request. The document's HTML can be updated.
req.onreadystatechange=function(){
  if(req.readyState==4 && req.status==200){
    //Finally, the send method sends the request with the userName value, which was given by the user in the input field.
    document.getElementsByClassName('message')[0].innerHTML=req.responseText;
  }
};
req.send(userName);


//Update the code to create and send a "POST" request. Then enter your name in input box and click "Send Message". Your AJAX function will replace "Reply from Server will be here." with the reply of the server. In this case, it is your name appended with " loves cats".
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('sendMessage').onclick=function(){

      var userName=document.getElementById('name').value;
      // Add your code below this line
      req=new XMLHttpRequest();
req.open("POST",url,true);
req.setRequestHeader('Content-Type','text/plain');
req.onreadystatechange=function(){
  if(req.readyState==4 && req.status==200){
    document.getElementsByClassName('message')[0].innerHTML=req.responseText;
  }
};
req.send(userName);

      // Add your code above this line
    };
  });
</script>
