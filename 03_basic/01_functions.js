

function sayMyName(){
    console.log("a");
    console.log("a");
    console.log("k");
    console.log("a");
    console.log("s");
    console.log("h");

}

//sayMyName();

/* function addTwoNumbers(num1 , num2){ //parametrs
    console.log(num1+num2);
} */

/* addTwoNumbers();  // NaN   //argument
addTwoNumbers(2,3); //5
addTwoNumbers(3,"4") //34
addTwoNumbers(3,"a") // 3a */

// const result = addTwoNumbers(3,5);

// console.log("result :", result); //undefined




/*function addTwoNumbers(num1 , num2){ //parametrs

    // let result = num1+ num2
    // return result;

    return num1+num2;
}

const result = addTwoNumbers(3,5);

console.log("result :", result); //8 */

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage("aaksh"));
//console.log(loginUserMessage());  // undefined just logged in 



/* function calculateCartPrice(...num1){  //(...) ye rest opreter hai 
    return num1;
} */

function calculateCartPrice(val1 , val2, ...num1){  //(...) ye rest opreter hai 
    return num1;
}

//console.log(calculateCartPrice(200, 400 ,500, 3900));  //val1 = 200 val2 = 400 num1=[500, 3900 ,...]


const user = {
    username: "aaksh",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user);
handleObject({
    username : "sam",
    price : 699
})

const myNewArray = [300, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([566, 5344,3343]));