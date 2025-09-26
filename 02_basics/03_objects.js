//singleton         
//Object.create                     //another way of creating object
//object literals

const mySym = Symbol("key1")        //declaring symbol //sybol is also a datatype in js

const JsUser = {                    //creating object
    name: "Tisha",
    "full name": "Tisha Gera",      //can't be accessed through dot notation
    [mySym]: "mykey1",               //syntax for declaring symbol
    age: 22,
    location: "Delhi",
    email: "tish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

console.log(JsUser.email)               //accessing values of object//this is not a professional way to do
console.log(JsUser["email"])            //professional way of accesing values
console.log(JsUser["full name"])        //if the key is declared within "" then this is the way to access it

JsUser.email = "tisha@chatgpt.com"      //values can be changed like this 
//Object.freeze(JsUser)                 //no more changes can be done on the object as it is freezed 
JsUser.email= "tisha@microsoft.com"
console.log(JsUser)

JsUser.greeting = function() {      //syntax to declare a function in an object
    console.log("hello JS user");
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function() {
    console.log(`hello JS user,${this.name}`);      //to access any element in the same object we use this
}
console.log(JsUser.greetingTwo())