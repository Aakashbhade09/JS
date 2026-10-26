class User {
    constructor(Username){
        this.Username = Username;
    }

    logMe(){
        console.log(`Username : ${this.Username}`);
    }

    static createID(){ //static lagane se iska  use har koi  nhi kar payega 
        return `123`;
    }
}


const aakash = new User("aakash")
//console.log(aakash.createID());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
//console.log(iphone.createId());  //error 