const  userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
    
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


/*
 false == 0 //true
 false == '' //true
 0 == '' //true
*/

// Nullish Coalescing Operator (??): null undefined

let val1;
let val2;
let val3;

val1 = 5 ?? 10
console.log(val1) // 5

val2 = null ?? 10
console.log(val2) //10

val3=undefined ?? 15;
console.log(val3)  //15



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
