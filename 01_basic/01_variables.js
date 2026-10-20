const accountId  =144553;

let accountEmail = "aakash@google.com";
var accountPassward ="12345";

accountCity ="jabalpur"; // this is a bad way to write a variable

let accountState;

// accountId=3; //not allowed

console.log(accountId);
accountEmail="xyz@gmail.com";
accountPassward="4453";
accountCity="jaipur";

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail , accountId, accountPassward, accountCity , accountState]);