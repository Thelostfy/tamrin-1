let button = document.getElementById("Addbutton");
let text = document.getElementById("TextLine");

let todoList = ["item1", "item2"];

let displayitems = () => {
    let complateUsertext = document.getElementById("userText");
    complateUsertext.innerHTML = '';


    for (let i = 0; i < todoList.length; i++) {


        let createDivElement = document.createElement(`div`)
    createDivElement.className = `USerCLass`;
 
    let CheckboxInput = document.createElement("input");
    CheckboxInput.type =  "checkbox";
    CheckboxInput.id = i;   
     createDivElement.appendChild(CheckboxInput);

     
    let CreateLabel = document.createElement("label");
     CreateLabel.htmlFor = i;
     CreateLabel.textContent = todoList[i];
     createDivElement.appendChild(CreateLabel);
 

     let removeIcon = document.createElement(`button`);
        removeIcon.className = 'removeStyle';
        removeIcon.textContent = "❌";
        removeIcon.addEventListener("click" , function() {
         let x = confirm(`are you sure?`);
            if (x === true) {
                 todoList.splice(i , 1);
                 displayitems();
             }
             
     })
 
     createDivElement.appendChild(removeIcon);
 
 
     
 
        // userSaveArray.push(createDivElement);
     complateUsertext.appendChild(createDivElement);
     
}
    
    }
    
button.addEventListener("click" , function () {
    if (text.value === "") {
        alert(`yechizin benevis`)
        return;
     };
     if (todoList.includes(text.value)) {
        alert(`tekrari`);
        return;
     };
    todoList.push(text.value);
        displayitems();    
        text.value = "";

});

document.addEventListener("DOMContentLoaded" , () => {
    displayitems();
});