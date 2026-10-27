class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }


    // get and set me variable apne ap method me convert ho jata hai 

    get password(){
        return `${this._password}aakash`
    }

    set password(value){
        this._password = value; //this.password  nhi likhte kyuki esha karne se constructro or set dono password set karne galte hai
    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const  aakash = new User("aakash@.ai" , "abc")
console.log(aakash.password)
console.log(aakash.email)