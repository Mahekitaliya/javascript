//basic function ==

function add(a, b){
    return a+b;
}

console.log(add(10,15));
let z = add(10 , 15);
console.log(z);



//anonymous function / function as exprestion ==


let prouct = function(x , y){
    return x*y;
}

console.log(prouct(12 , 16));


//IIFE ==

//dafination

// (function  hello()
// {
//     console.log("hello word");
// })();


let x = (function hello(a , b){
    return (a+ b);

})(10 , 15);
console.log(x);



let y = (function hello(a , b){
    return (a+ b);

})("10" , 15);
console.log(y);



let u = (function hello(a , b){
    return (a+ b);

})("10" , "15");
console.log(u);


// arrow function

let add = (a, b) => {
    return a+b;
}


//  arrow  single line statement

let add = (a , b) => a+b;
console.log(12,65);



// function constructor

let hello = newmfunction("a" , "b" , "return a/b");
console.log(hello(12,13));





