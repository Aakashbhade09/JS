// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //named IIFE  =>kyuki i function ka name hai
    console.log(`DB CONNECTED`);
})();   // ye semiclolan ye bata raha ki hame frist code end karna hai esha nhi karenge to niche vale code me error aayegi




((name) =>{
    console.log(`DB CONNECTED TWO ${name}`)
})('aakash')

/* note =>  agar 1 file me 1 se jyada iife likh rahe ho to hame har function Ke bad (;) 
semicolan use karna chahiye nhi to error aayegi  */