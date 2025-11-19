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
        if (button.innerText !== "") return;

        let [satr, soton] = button.value.split(',');
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

        if (XO[satr][0] !== "" && XO[satr][0] === XO[satr][1] && XO[satr][1] === XO[satr][2]) {
            alert(`Player ${button.innerText} wins!`);
        }
        if (XO[0][soton] !== "" && XO[0][soton] === XO[1][soton] && XO[1][soton] === XO[2][soton]) {
            alert(`Player ${button.innerText} wins!`);

        }
        if (XO[0][0] !== "" && XO[0][0] === XO[1][1] && XO[1][1] === XO[2][2]) {
            alert(`Player ${button.innerText} wins!`);

        }
        if (XO[0][2] !== "" && XO[0][2] === XO[1][1] && XO[1][1] === XO[2][0]) {
            alert(`Player ${button.innerText} wins!`);

        }


localStorage.setItem("BAZIhayeghabli" , JSON.stringify(XO))
        i++;

    })

}