const userEmail = "t@gmail.com"

if(userEmail){
    console.log("Got user email")
} else{
    console.log("dont have user email")
}

//falsy value
/*
false, 0, -0, BigIny - 0n, "", null, undefined, NaN

//truthy values
"0", 'false', " ", [], {}, function(){}
*/

const NuserEmail = []

if(NuserEmail.length === 0){        //checking empty array
    console.log("Array is empty")
}

const emptyObj = {}         //checking empty object
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined
//if error comes then how to work
//if we dont want null as answer so we use it to add flag value

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10      
//val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20

console.log(val1)

//terniary opeartor

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")
