const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb : "ruby",
    swift: "swift by apple"
}

//for in loop

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);

}


const programming = ["js" , "rb" , "py" , "java" ,"cpp"]

for (const key in programming) {
   //console.log(programming[key]);
    
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
   // console.log(key);
}

//note => map  iterable nhi hai is par for in loop nhi lagegi