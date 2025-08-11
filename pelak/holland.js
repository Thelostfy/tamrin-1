let alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L",
                     "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let adadchance = ["1","2","3","4","5","6","7","8","9","0"]

let jahroof = document.getElementById(`adad`)

let firstTwoNumbers = adadchance[Math.floor(Math.random() * adadchance.length)] 
                    + adadchance[Math.floor(Math.random() * adadchance.length)];
let firstTwoLetters = alphabetArray[Math.floor(Math.random() * alphabetArray.length)] 
                    + alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
let centerjam =alphabetArray[Math.floor(Math.random() * alphabetArray.length)] 
                    + adadchance[Math.floor(Math.random() * adadchance.length)];


let result = `${firstTwoLetters}-${centerjam}-${firstTwoNumbers}`;
console.log(result);


if(jahroof){
  jahroof.textContent = result;
}