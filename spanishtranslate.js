//original

<div id="myelement">Old Text</div>

function changeContent () {
    var myelement = document.getElementById("myelement");
    myelement.innerHTML= "New Text";
}

window.onload = changeContent

//my mycode

<div class="banner-title">Who Keeps Calling Me?</div>
<h2 class="banner-content">Enter a number to find the owner, contact details, and more.</h2>

const english = document.querySelector(".banner-title");
const english2 = document.querySelector(".banner-content");

function translate () {
    english.innerHTML = "¿Quién me llama?";
    english2.innerHTML = "Ingrese un número para encontrar el propietario, los detalles de contacto y más."
}

window.onload = translate
//mouse event?
english.addEventListener("mousemove", translate)

//oroiginal HTML code

<div class="banner-header">
<span class="logo"></span><h1 class="banner-title">Who's Calling Me?</h1><h2 class="banner-content">Enter a number to find the owner, contact details, and more.</h2>
</div>

//outer html
<div class="banner-header">
<span class="logo"></span><h1 class="banner-title">Who's Calling Me?</h1><h2 class="banner-content">Enter a number to find the owner, contact details, and more.</h2>
</div>
