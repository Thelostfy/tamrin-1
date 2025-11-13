// shroo az aval  neveshtan

let AddButton = document.getElementById("Addbutton");
let TextLineInput = document.getElementById("TextLine");

let ToDoListArray = [{ tag: "hamoom beram", isFinished: false }, { tag: "hamoom beram", isFinished: false }]

let DisplayItem = () => {

    let UserToDoDiv = document.getElementById("userToDo");
    UserToDoDiv.innerHTML = '';

    for (let i = 0; i < ToDoListArray.length; i++) {

        // create div
        let NewDiv = document.createElement("div");
        NewDiv.className = "userdivclasss";

        //create checkbox
        let inputCheckBox = document.createElement("input");
        inputCheckBox.type = "checkbox";
        inputCheckBox.id = i;
        inputCheckBox.checked = ToDoListArray[i].isFinished;
        inputCheckBox.addEventListener("click", function () {
            ToDoListArray[i].isFinished = inputCheckBox.checked;
        });
        NewDiv.appendChild(inputCheckBox);
        //create label
        let Label = document.createElement("label");
        Label.textContent = ToDoListArray[i].tag;
        Label.htmlFor = i;
        NewDiv.appendChild(Label);

        UserToDoDiv.appendChild(NewDiv);
        // create removeIcon
        let removeButton = document.createElement('button');
        removeButton.className = 'removeStyle';
        removeButton.textContent = "❌";
        removeButton.addEventListener("click", () => {
            let taeid = confirm(`are you sure?`);
            if (taeid === true) {
                ToDoListArray.splice(i, 1);
                DisplayItem();
            }
            localStorage.setItem("userData", JSON.stringify(ToDoListArray));


        })
        NewDiv.appendChild(removeButton);
    }

}
AddButton.addEventListener("click", () => {
    if (TextLineInput.value === "") {
        alert(`yechizi benevis`)
        return;
    };

    let isfinded = ToDoListArray.find(x => x.tag.toUpperCase() === TextLineInput.value.toUpperCase());
    if (isfinded) {
        alert(`tekrariye`);
        return;
    }
    ToDoListArray.push({ tag: TextLineInput.value, isFinished: false });
    DisplayItem();
    localStorage.setItem("userData", JSON.stringify(ToDoListArray));
    TextLineInput.value = "";

})
document.addEventListener("DOMContentLoaded", function () {
    let savedData = localStorage.getItem("userData");
    if (savedData) {
        ToDoListArray = JSON.parse(savedData);
        DisplayItem();
    }})