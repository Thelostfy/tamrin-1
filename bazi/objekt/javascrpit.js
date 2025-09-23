// let person = {
//     name: "Ali",
//     age: 25,
//     city: "isfahan"
// };
// console.log(person);



// person.age = 18;

// console.log(person);


// person.email = "aliisfahani@gmail.com";
// console.log(person);


//------------------------------------

// let stu = {
//     name: "mmd",
//     grad: [20,10,15],
//     address: {
//         city: "isfahan",
//         street: "jolfa"
//     }
// };


// // let x = stu.address
// console.log(stu.address);
// stu.address.city = "tabriz";
// console.log(stu.address);




//----------------------------------------------



// let book = {
//     title: "Heir of fire",
//     author: "arian salehi",
//     tags: ["Romance","Mystery" ,"Fantasy"]

// }

// book.tags.unshift("Horror");
// let x = book.tags.length;
// console.log(x);




//---------------------------------------------------


// let cars = [
//     { brand: "irankhodro",
//         model: "peride",
//         year: 97
//     }
// ]

// cars.push({brand:"bmw",model:"bmw 520d",year: 1972});
// let x = cars[1];
// console.log(x);


//-------------------------------------------------------------


// let company = {
//     name: "futcher developer",
//     employees: [{name:"mohamad",roll:["web developer"],skill:["fast type"]},
//          {name:"parmida",roll: ["virastar"],skill: ["clever"]},
//           { name:"sara",roll:["frooshande"],skill:["fane bayan"]}]
// };
// company.employees.push({name:"amir",roll: ["sarparast"], skill: ["tahlil dade"]})
// // console.log(company);

// company.employees[0].skill.push("editor");




// let y = [];
// for (let i = 0; i < company.employees.length; i++) {
//     y.push(company.employees[i].name);

// }

// console.log(y);


//---------------------------------------




let library = {
    name: "ketab khane markazi",
    books: [
        {NameOfBook:`Harry Potter and the Sorcerer's Stone`,
             author: `j.k rowling`,
             genres: [`fantsy fiction`,`Children's Literature `],
             borrowedBy: [{Fullname: `ali keyghobadi`,MemberId: 15, FromHistory: 9/18/2025}]},

        {NameOfBook:`The God of the Woods`,
            author: `Liz Moore`,
            genres:[`Mystry`, `Domestic Fiction`],
            borrowedBy: [{Fullname: `arian salehi`, MemberId: 14, FromHistory: `7/16/2025`}]},

        {NameOfBook: `Wolf Hall`,
            author: `Hilary Mantel`,
             genres: [`Novel`, `Historical Fiction`],
             borrowedBy: [{Fullname: `Ali mohammadi`, MemberId: 22, FromHistory: `9/25/2025`}]}
    ]
};

library.books.push({NameOfBook: `Heir of fire`, author: `arian salehi`,genres: ["Romance","Mystery" ,"Fantasy"] ,borrowedBy: [{Fullname: `pariya abedi`,MemberId: 2, FromHistory: `6/13/2024`}]});


library.books[1].genres.push(`Thriller`);
// console.log(library);



let x = [];
for (let i = 0; i < library.books.length; i++) {
    let havij = library.books[i].borrowedBy;
    for (let j = 0; j < havij.length; j++) {
        x.push(havij[j].Fullname);
          
    }
    
}


console.log(x);
