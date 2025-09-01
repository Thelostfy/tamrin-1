// let doostan = ["Saeed", "Armin", "Sara", "Niloofar"]

// function reversekalame(name){
//     let khiyar = [];
//     for (let i = 0; i < name.length; i++) {
//        khiyar.unshift(name[i]);

//     }
//         return khiyar.join("");
//      }
//      let havij = [];
//      for (let a = 0; a < doostan.length; a++) {
//         let x =reversekalame(doostan[a]);
//         console.log(x); 
//         havij.push(x);
//      }

// console.log(havij);







// very hardddd

// tamrin 2
let ghahermanha = ["Flash", "Superman", "Ironman", "Hulk", "Spiderman", "Antman", "DoctorStrange"];



// function length5(name) {

//     if (name.length >= 5) {
//          return name;
//           }
//          else
//             console.log();

// }

// let moz = [];
// for (let a = 0; a < ghahermanha.length; a++) {
//     let dokhtari = length5(ghahermanha[a]);
//     moz.push(dokhtari); 

// }
// console.log(moz);

// function printmorethan5(array) {
//     let output = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length >= 5) {
//             output.push(array[i])


//         }
//     }
//     return output;
// }


// console.log(printmorethan5(ghahermanha));









// tamrin 3

let letters = ["a", "b", "c", "d", "e", "f","g","h","i","j"];
// function jaygahzoj(element) {
//     let mashti = [];
//     for (let i = 0; i < element.length; i++) {
     
        
//     }
    

// }
// let mashti = [];
// for (let i = 0; i < letters.length; i++) {
//     let z = jaygahzoj(letters[i], i)
//     mashti.push(z)

// }
// console.log(mashti);
//  function esmndre(element){
//     let ramzmakhfi = [];
//     for (let i = 0; i < element.length; i++) {
//         if (i % 2 == 0) {
//             ramzmakhfi.push(element[i])
//         }
        
//     }
//     return ramzmakhfi;
//  }
// console.log(esmndre(letters));




//tamrin 4

let adadha = [4, 7, 12, 9, 21, 8, 15, 6, 3];




// for (let i = 0; i < adadha.length; i++) {
//     if (adadha[i] % 2 !== 0) {
//         jamefard += adadha[i]

//     }


// }
// console.log(jamefard);
// function sumjamefard(array){
//     let jamefard = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//           jamefard = array[i] + jamefard
//         }
        
//     }
//     return jamefard;
// }
// console.log(sumjamefard(adadha));




// tamrin 5



// function tarkib(array1 , array2) {
//     for (let a = 0; a < array1.length; a++) {
//         let pesar = array1[a];
//         let dokhtar = array2[a];
//         console.log(pesar + " " + dokhtar);
        
//     }

// }

// tarkib(pesarha , dokhtarha);




// for (let i = 0; i < pesarha.length; i++) {
//     let a = pesarha[i];
//     let b = dokhtarha[i];
//     console.log(a + " "+ b);
        
// }









// tamrin 6

let pesarha = ["Ali", "Reza", "Amir"];
let dokhtarha = ["Sara", "Niloofar", "Mina"];

function tarkibbaraxe(array1 , array2){
    for (let i = 0; i < array1.length; i++) {
     for (let j = array2.length - 1; j >= 0; j--)  {
                if (i === 0 && j === 2) { 
                console.log(array1[i], " ", array2[j]);
            }
            if (i === 1 && j === 1) { 
                console.log(array1[i], " ", array2[j]);
            }
            if (i === 2 && j === 0) {
                console.log(array1[i], " ", array2[j]);
            }
            
        }
        
    }
    return ;
 }


 console.log( tarkibbaraxe(pesarha , dokhtarha));
 


