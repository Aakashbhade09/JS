let score = "aakash";

console.log(typeof score);  //string
console.log(typeof(score));  //string

let valueInNumber = Number(score); 
console.log(typeof valueInNumber); //number
console.log(valueInNumber); // NaN => not a number 

// let score = "33"        output =>33
// let score = true/false  output =>1/0
// let score = null        output =>0  
// let score = "33abc"     output =>NaN 
// let score = undefined   output =>NaN
// let score = "aakash"    output =>NaN 

let isLoggedIn = "aakash";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true  , 0 => false
// "" => false
// "aakash" => true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber) // 33
console.log( typeof stringNumber) // strring 