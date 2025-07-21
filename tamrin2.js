// let ertefa = 5;

// for(let i = 1 ; i <= ertefa; i++){
//     console.log(`*`.repeat(i));
    
// }



//------------2

let rows = 5;

for (let i = rows; i >= 1; i--) {
    let line = "";

    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        line += "*";
    }

    console.log(line);
}
