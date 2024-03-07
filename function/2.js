//basic function ==

// function add(a, b){
//     return a+b;
// }

// console.log(add(10,15));
// let z = add(10 , 15);
// console.log(z);



//anonymous function / function as exprestion ==


// let prouct = function(x , y){
//     return x*y;
// }

// console.log(prouct(12 , 16));


//IIFE ==

//dafination

// (function  hello()
// {
//     console.log("hello word");
// })();


// let x = (function hello(a , b){
//     return (a+ b);

// })(10 , 15);
// console.log(x);



// let y = (function hello(a , b){
//     return (a+ b);

// })("10" , 15);
// console.log(y);



// let u = (function hello(a , b){
//     return (a+ b);

// })("10" , "15");
// console.log(u);


// arrow function

// let add = (a, b) => {
//     return a+b;
// }


//  arrow  single line statement

// let add = (a , b) => a+b;
// console.log(12,65);



// function constructor

// let hello = newmfunction("a" , "b" , "return a/b");
// console.log(hello(12,13));


// Function are Object
// function myFunction(a,b) {
//     return arguments.length; 
// }

// let text = myFunction(4,3);
// console.log(text);


// function myFunction(a, b) {
//     return a * b;
// }

// let text = myFunction(4,3).toString();  

// console.log(text);



// function Rest Parameters

// function sum(...args) {
//     let sum = 0;
// for (let arg of args) 
//                 sum += arg;
// return sum;
// }

// let x = sum(4, 9);
// console.log(x);



function add(...args){
    let sum = 0;
    for(let i= 0 ; i<args.length ; i++)
        sum = sum + args[i];

        return sum;
}

console.log(add(16, 16));

// Generator Function

function* generate() {
    yield 1;
    yield 2;
    return 3;
}   
let generator = generate();
console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value);

// this Keyword

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
                    return this.firstName + " " + this.lastName;
        }
};  







