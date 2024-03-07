// Java-script try...catch...finally statement 

// java-script try..catch... statement 
// {
    // try{
    //      body of try
    // }
    // catch{
    //     body of catch
    // }
// }

// {

//     const numerator = 100, denominator = 20;

//     try{
//         console.log(numerator/denominator);
//             // let a;
//             console.log(a);
//             console.log('helloo');
//     }

//     catch(error) {
//         console.log('An error  caught');
//         console.log('error messge :' + error);
//     }

// }


// Java-script  try...catch..finally example

{
    const numerator = 100 , denominator = 20;
    try{
        console.log(numerator/denominator);
        // console.log(a);
    }
    catch(error){
        console.log('An error caught');
        console.log('error messge :' + error );

    }
    finally{
        console.log('finally will execute every time');
    }
}