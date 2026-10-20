let score = "aakash";

//console.log(typeof score);  //string
//console.log(typeof(score));  //string

let valueInNumber = Number(score); 
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); // NaN => not a number 

/* let score = "33"        output =>33
   let score = true/false  output =>1/0
   let score = null        output =>0  
   let score = "33abc"     output =>NaN 
   let score = undefined   output =>NaN
   let score = "aakash"    output =>NaN */

let isLoggedIn = "aakash";

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); // true

/* 1 => true  , 0 => false
  "" => false
  "aakash" => true */

let someNumber = 33;
let stringNumber = String(someNumber)
//console.log(stringNumber) // 33
//console.log( typeof stringNumber) // strring 



// *********************** Operations ***********************

let value =3;
let negvalue = -value;
//console.log(negvalue); //-3


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //2 ki power 3 
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " aakash";

let str3= str1 + str2;
//console.log(str3); output=> hello aakash

// console.log("1"+2);  //12
// console.log(1+"2");  //12
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32

// console.log(+true); //  1
// console.log(true+); //  error
// console.log(+"")    //0

let num1, num2 , num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
gameCounter++; //101
++gameCounter; // 101
// console.log(gameCounter);