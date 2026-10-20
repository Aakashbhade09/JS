//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.table(typeof myFunction); //function
console.table(typeof myObj);  //object
console.table(typeof heros);  //object
console.table(typeof BigNUmber);  //undefind 

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++

/*
**********************Memory**********************
stack => primitive data type ke liye 
yaha value copy di jati hai 

heap  => non-primitive data type  ke liye  
yaha direct refrence diya jata hai 

exmple se niche explain kiya hai 
*/

let myYoutubename ="aakashbhadedotcom"

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(anothername);
console.log(myYoutubename);  


let userOne ={
    email:"aakashgoogle.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email ="user@google.com";

console.log(userOne)
console.log(userOne)