let buttons = document.getElementsByTagName("button")
let i = 0;
let XO = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

for (const button of buttons) {

    button.addEventListener("click", () => {
        // alert(`you click on ${button.value}`)
        let [satr, soton] = button.value.split('-');
        // let satr = [satrarray , sotonarray][0];
        // let soton = [satrarray , sotonarray][1];
        satr = Number(satr);
        soton = Number(soton);


        if (i % 2 === 0) {
            button.innerText = "X"
            XO[satr][soton] = button.innerText;
            button.style.backgroundColor = `Red`;
            button.style.color = `white`;
        }
        if (i % 2 !== 0) {
            button.innerText = "O";
            XO[satr][soton] = button.innerText;
            button.style.backgroundColor = `blue`;
            button.style.color = `white`;
        }




        i++;
    })

}