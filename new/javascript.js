let button = document.getElementById("Addbutton");
let text = document.getElementById("TextLine");
let complateUsertext = document.getElementById("userText");
let i = 0;




button.addEventListener("click" , function () {


    
   let createDivElement = document.createElement(`div`)
   createDivElement.className = `USerCLass`;

   let CheckboxInput = document.createElement("input");
   CheckboxInput.type =  "checkbox";
   CheckboxInput.id = i;   
    createDivElement.appendChild(CheckboxInput);
    
   let CreateLabel = document.createElement("label");
    CreateLabel.htmlFor = "text";
    CreateLabel.textContent = text.value;
    createDivElement.appendChild(CreateLabel);

    let removeIcon = document.createElement(`button`);
    removeIcon.className = 'removeStyle';
    removeIcon.textContent = "❌";
    removeIcon.addEventListener("click" , function() {
        let x = confirm(`are you sure?`)
        if (x === true) {
            createDivElement.remove();
        }
       
    })

    createDivElement.appendChild(removeIcon);


    


    complateUsertext.appendChild(createDivElement);

        text.value = "";
    i++;

})