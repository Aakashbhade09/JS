// singleton (03 file me object literals the ye singleton hai )
// Object.create

//const tinderUser = new Object() //{}  empty object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aakash",
            lastname: "bhade"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} //sparde karna 
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
//console.log(typeof users) //objecct

// console.log(tinderUser);

console.log(Object.keys(tinderUser));  //key ka ak array return karta hai  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //value ka ak array return karta hai [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
// console.log(tinderUser.hasOwnProperty('isLogged'));  //false


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aakash"
}

// course.courseInstructor 

const  {courseInstructor :  instructor} = course;  // isko destructuring bolte hai

//console.log(courseInstructor);  // better way to access 
console.log(instructor); // hamne yaha {courseInstructor :  instructor} courseInstructor ko  instructor name seuse kar liya 


// api ke data return karne ke formate 

//json

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }



//array format (yaha array ke ander  object hai )
[
    {},
    {},
    {}
]