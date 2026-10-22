let a =50;
const b = 20;

if (true) {
    let a = 10
    const b = 20
   // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);


function one(){
    const username = "aakash";

    function Two(){
        const Website = "youtube";
        console.log(username);
    }

   // console.log(Website);

    //Two();
}

//one();


if(true){
    const username = "aakash";

    if(username === "aakash"){
        const Website = " Youtube";
        //console.log(username + Website);

    }
}

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)) //6

function addone(num){
    return num +1;
}



console.log(addTwo(5))  //error => Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num+2;
}

addTwo(5)