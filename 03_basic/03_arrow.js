const user = {
    userName : "aakash",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to my site `);
        console.log(this)
    }
}

// user.welcomeMessage();
// user.userName ="sam";
// user.welcomeMessage();


// this ka matlab current context
//console.log(this)  //{}


/* function chai(){
    let userName = "aakash"
    console.log(this.userName)   //undefined  =>this object ke ander hi work kar raha hai function me nhi
}

chai(); */



/* const chai = function(){
    let userName ="aakash";
    console.log(this.userName)  //undefined
}

chai(); */


const chai =() =>{
    let userName ="aakash";
    console.log(this.userName);  //undefined 
}

//chai();


// const addTwo =(num1, num2)=>{
//     return num1+num2;    //explicit return 
// }


// const addTwo =(num1, num2)=> num1+num2;  //9  implicit return

//const addTwo =(num1, num2)=> (num1+num2);  //9  implicit return


const addTwo = (num1, num2) => ({username: "aakash"})

console.log(addTwo(4,5));



