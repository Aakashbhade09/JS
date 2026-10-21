const name = "aakash";
const repoCount = "10";

//console.log(name + repoCount + " value");

//backticks

console.log(`hello my name is ${name }  and my repo count is ${repoCount}`);

const gameName = new String ("aakash-hc-ac");

// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2))

// console.log(gameName.indexOf('a')) //0  
// console.log(gameName.indexOf('t')) //-1

const newString = gameName.substring(0,4); // 4 in not include 
console.log(newString);


const anotherString = gameName.slice(-5 , 2);
console.log(anotherString);

const newStringOne = "   aakash   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // staring and ending space remove kar deta hai 

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20' , '-'));

console.log(url.includes("hitesh")); //true
console.log(url.includes("aakash")); //false

console.log(gameName.split('-')); // string covert into arry  output=> [ 'aakash' 'hc' 'ac']