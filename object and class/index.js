// ----------------------- Object -------------------------------------------------
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
    
   
// };

// console.log(person);
// console.log(person.lastName);
// console.log(person.firstName);
// console.log(person.age);

// key [" "]
// console.log(person["firstName"]);



// let a = lastName;
// console.log(person["a"]);



// Add property----
// person.gender = "male";
// person.address = {
//     line : " 200,shayamdham ",
//     city : " surat",
//     state : "gujrat"
// }
// person.hobise = ['reading','music','dancing','playing'];
// console.log(person["hobise"]["2"]);

// ---------------------------------call method---------------------------------------

// class person{
//     constructor(name){
//         this.name  = name;

//     }
//     display  = function(){
//         return "hello" + this.name;

//     }
// };

// let obj = new person('john');


// console.log(obj.name);
// console.log(obj.display());

//  -------------------- call method ----------------------


// let person = {
//     print: function(city){
//         return this.name + " " +this.surname + "\n" + city;

//     }
// };

// let viru = {
//     name:"virat",
//     surname:"kohli"
//     }

//     console.log(person.print.call(viru , "surat"));

// --------------------- apply method -------------------------

// let person = {
//     print: function(city){
//         return this.name + "  " + this.surname + " is visit in " + city;
//     }
// };
//  let viru = {
//     name: "virat",
//     surname: "kohli"
//  }
//  console.log(person.print.apply(viru,['surar']));


// --------------bind method ---------------------


//  let person = {
//         name : "rohit",
//         surname : "sharma",
//         print: function(city){
//             return this.name + "  " + this.surname + " is visit in " + city;
//         }
//     };
//      let viru = {
//         name: "virat",
//         surname: "kohli"
//      }

//      console.log(person.print());
//      console.log(person.print.apply(viru,['surar']);


    
    
