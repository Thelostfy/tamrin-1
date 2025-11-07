let button = document.getElementById("Addbutton");
let text = document.getElementById("TextLine");

let todoList = [{titel: "hamoom beram", isFinished: false},{titel: "mesvak bezanam", isFinished: true}];

let displayitems = () => {
    let complateUsertext = document.getElementById("userText");
    complateUsertext.innerHTML = '';


    for (let i = 0; i < todoList.length; i++) {


        let createDivElement = document.createElement(`div`)
    createDivElement.className = `USerCLass`;
 
    let CheckboxInput = document.createElement("input");
    CheckboxInput.type =  "checkbox";
    CheckboxInput.id = i;   
    CheckboxInput.addEventListener("click", function(){
        todoList[i].isFinished = CheckboxInput.checked;
    })
        CheckboxInput.checked = todoList[i].isFinished;
     createDivElement.appendChild(CheckboxInput);

     
    let CreateLabel = document.createElement("label");
     CreateLabel.htmlFor = i;
     CreateLabel.textContent = todoList[i].titel;
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
 
 
     
     localStorage.setItem(`USERText` , JSON.stringify(todoList));
        // userSaveArray.push(createDivElement);
     complateUsertext.appendChild(createDivElement);
     
}
    
    }
    
button.addEventListener("click" , function () {
    if (text.value === "") {
        alert(`yechizin benevis`)
        return;
     };
    //  if (todoList.includes(text.value)) {
    //     alert(`tekrari`);
    //     return;
    //  };
    let isfinded = todoList.find(x => x.titel.toUpperCase() === text.value.toUpperCase());
     if (isfinded) {
        alert(`tekrari`);
        return;
     }
    todoList.push({titel: text.value ,isFinished: false});
        displayitems();    
        text.value = "";
     localStorage.setItem(`USERText` , JSON.stringify(todoList));
});

document.addEventListener("DOMContentLoaded" , () => {
    // // alert(todoList.isFinished);
    // let saved = localStorage.getItem("USERText");
    // if (saved){
    //     todoList = JSON.parse(saved)
    // }
    // alert(JSON.stringify(todoList[i].titel));
    displayitems();
});