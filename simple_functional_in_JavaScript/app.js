console.log('simple functional in JavaScript');


//function without parameter 

function wish() {
    console.log('Good Morning');
}

wish()

let wishFu = function () {
    console.log('Good Morning');
}

// console.log(wishFu);
wishFu()


//function with parameter

let wishMe = function ( message,name) {
    let msg = `${message} ${name}`;
    console.log(msg);
}

wishMe('Good Morning','Milind');


//function with return type


let sum =function (a,b) {
    let result = 2 * (a+b);
    // console.log(result);
    return result
}

 let output = sum(10,30);
 console.log(output);