let button = document.getElementById("Addbutton");
let text = document.getElementById("TextLine");
let divtext = document.getElementById("userText");


text.addEventListener("input"  , function() {
    button.addEventListener("click" , function () {
        
    })
})
button.addEventListener("click" , function () {
    let createelement = document.createElement("div");
createelement.id = "adddiv";
createelement.textContent = text.value;
divtext.appendChild(createelement);
text.value = "";

})