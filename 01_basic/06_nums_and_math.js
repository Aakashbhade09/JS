const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString()) // string me covert ho jayega or typeof string aayeg 
// console.log(balance.toFixed(2)) // 100.00

const othernumber = 123.8966;

// console.log(othernumber.toPrecision(3)); // 124   

/*
+++++++++++++toprecision+++++++++++++

othernumber = 23.455   // 23.5
othernumber = 23.515 // 23.5
othernumber = 23.555 // 23.6

console.log(othernumber.toPrecision(3)); 23.5
*/

const hundreds = 100000;
//console.log(hundreds.toLocaleString('en-IN')); //1,00,000

// ++++++++++++++++++++++Maths++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4 
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random());  // ye hamesha 0 se 1 ke bich value deta hai
console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1); 

const min = 1
const max = 6

console.log(Math.floor(Math.random()* (max-min+1))+min);  // ye hamesha 1 se 6 ke bich hi value deha jaie ludo game me 