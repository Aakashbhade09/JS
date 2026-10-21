// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "aakash",
    "full name": "aakash bhade",
    [mySym]: "mykey1", //   worng way mySym: "mykey1"
    age: 18,
    location: "Jabalpur",
    email: "aakash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "aakash@chatgpt.com";
//Object.freeze(JsUser)  //value ko lock karne ka tarika ab value change nhi kar skte
JsUser.email = "aakash@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting);  //[Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());