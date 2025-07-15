// function CreateFullName(name1,name2) {
//     return name1 +" "+ name2;

// }

// let name = CreateFullName(`arian`,`salehi`);
// console.log(name);



// --------------------tamrin 2
// function email(name){
//     if(name.includes("@"))
//         return true;
//     else
//         return false;

        
// }
// let gmail = email('hassanQ@gmale.com')
// let y =email('hassanQ_male.com')
// console.log(gmail,y);


// gol kashtam :)

// -------------------tamrin 3

// function getFirstThreeChars(name ) {
//      return name.slice(0 , 3);
    
// }
// let x = getFirstThreeChars(`javascript`)
// console.log(x);


// ------------------------------tamrin 4

// function replaceBadWithGood(jomle){
//      return jomle.replaceAll(`bad` , `good`);
     

// }
// let x = replaceBadWithGood(`this is is a bad day`);
// console.log(x);


// -------------------------tamrin 5
// function repeatString(name){
//      return name.repeat(3);
     
// }
// let y = repeatString(`Hi`)
// let x = repeatString(`سلام`)
// console.log(x,y);


// // --------------------------tamrin 6
// function getAgeCategory(age){
//      if(age >= 18)
//           return' بزرگسال';
//         else
//         return `نابالغ`;
     
          
// }
// let x = getAgeCategory(18)
// let y = getAgeCategory(14)
// console.log(x , y);


// ----------------------------tamrin 7

// function score(nomre){
//      if(nomre <= 0 || nomre >= 100)
//           return 'invalid number'
        
//     else if (nomre < 90 || nomre < 100)
//         return `A`
//     else if( nomre < 80 || nomre > 89)
//      return `B`
//     else if( nomre < 70 || nomre > 79)
//      return `C`
//     else if( nomre < 60 || nomre > 69)
//      return `D`
//     else if( nomre < 0 || nomre > 60)
//      return `F`
//         else
//         return `voojood nadrad`;


// }
// let b = score(-1)
// console.log(b);
// let v = score(98)
// console.log(v);

// -----------------------------tamrin 8
// function checkPasswordStrength(password){
//     if(password.length >= 8)
//         return `ghavi`
//     else
//     return `zaiif`
    
        
    
// }
// let a = checkPasswordStrength(`arian133192`)
// let b = checkPasswordStrength(`batman`)
// console.log(a , b);


// // -----------------tamrin 9 
// function checkEvenOdd(number){
//     if( number % 2 === 0)
//         return `zoj`;
//     else 
//     return `fard`;
    
        
// }
// checkEvenOdd(5)
// checkEvenOdd(6)

// ---------------tamrin 10
// function describeTemperature(celsius) {
//   if (celsius < 0) {
//     return "freezing";
//   } else if (celsius <= 15) {
//     return "cold";
//   } else if (celsius <= 25) {
//     return "mild";
//   } else if (celsius <= 35) {
//     return "warm";
//   } else {
//     return "hot";
//   }
// }
// console.log(describeTemperature(-5));  
// console.log(describeTemperature(30));  
// console.log(describeTemperature(10));  
// console.log(describeTemperature(20));  
// console.log(describeTemperature(40));

// // // ------------------ tamrin 11
// function login(user , password) {
//     if(user===`admin` && password=== `secret123`)
//         return `sahih`;
//     else
//     return `ghalat`;
    
        
    
// }
// let a = login(`user` , `password`)
// let b = login(`admin` , `secret123`)
// console.log(a , b );


// -----------------tamrin 12
// function getDiscountPercentage(takhfif) {
//   if (takhfif >= 100)
//     return 20;
//    else if (takhfif >= 50) 
//     return 10;
//    else if (takhfif >= 25) 
//     return 5;
//    else 
//     return 0;
  
// }
// console.log(getDiscountPercentage(120)); 
// console.log(getDiscountPercentage(75));  
// console.log(getDiscountPercentage(30));  
// console.log(getDiscountPercentage(10));  

// // tamrin 13
// function roozshomar(rooz){
//     if(rooz === `shanbe`|| rooz === `yekshanbe`)
//         return `weekend`;
//     else
//     return `rooz kari`;
    
        
// }

// console.log(roozshomar(`shanbe`));
// console.log(roozshomar(`jome`));

// tamrin 14
// function getRange(number) {
//   if (number >= 1 && number <= 33) 
//     return "پایین";
//    else if (number >= 34 && number <= 66) 
//     return "متوسط";
//    else if (number >= 67 && number <= 100) 
//     return "بالا";
//    else 
//     return "خارج از محدوده";
  
// }

// console.log(getRange(25));  
// console.log(getRange(50));  
// console.log(getRange(90));  
// console.log(getRange(150));  

// tamrin 15 





// tamrin 16
function canVote(age, isCitizen) {
  if (age >= 18 && isCitizen) 
    return "می‌تواند رأی دهد";
   else 
    return "نمی‌تواند رأی دهد";
  
}
console.log(canVote(20, true));  
console.log(canVote(16, true));  
console.log(canVote(25, false));
