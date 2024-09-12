//JavaScript is "Dynamically typed language" because all type checks are being performed during Runtime .

// Primitive - 7 types: String, Number, Boolean, Null, undefined, Symbol,BigInt
/*String - string             Represents a sequence of characters. No specific range limit, but practical limits depend on memory and system resources.
number - number                Represents both integers and floating-point numbers.
boolean - boolean             Represents true or false.
null - object                  Represents the intentional absence of any object or value. It has only one possible value: null.
undefined - undefined         Represents a variable that has been declared but hasn't been assigned a value.
BigInt- bigint                 Represents large integers that cannot be represented by the Number type.  The range is practically unlimited and depends on available memory.
Symbol - symbol                Represents a unique and immutable value. No specific range limit.
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;      //undefined

const id = Symbol('123')            //values might be same but symbols can nver be the same
const anotherId = Symbol('123')
console.log(id === anotherId);


const bigNumber = 345564789654133698426n          //bigInt used for very large numbers

// Reference (Non primitive)
// Arrays, Objects, Functions
/*
Non-Primitive ( reference type ):
- Array => object 
- Object => object
- Function => Object Function
*/


const heros = ["shaktiman", "naagraj", "doga"];     //arrays
let myObj = {
    name: "Tisha",
    age: 22,
}


const myFunction = function () {                    //function
    console.log("Hello World!");

}
console.log(typeof myFunction);


//HEAPS AND STACKS

//Stack(Primitive), Heap(Non primitive)
//Stack provies copy of the value
//Heap provides the original value and make changes in the original value only

let myYoutubeName = "TheBakingDelights"         //string(stack is being used)
let anotherName = myYoutubeName
anotherName = "BakingDelightsByTisha"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {                         //object (heap is being used)
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "tisha@google.com"

console.log(userOne.email);
console.log(userTwo.email);
