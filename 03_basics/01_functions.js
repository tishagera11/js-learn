/*function addTwoNums(number1, number2){      //number1, number2 are parameters
    console.log(number1 + number2)
}

const result = addTwoNums(3,4)               //3,4 are arguements
console.log("result:" , result)
*/   

function addTwoNums(number1, number2){      //number1, number2 are parameters
    //let result = (number1 + number2)
    //return result
    return number1 + number2
}


function logInUserMessage(username){
    /*if(username === undefined){
        console.log("please enter a username")
    }*/
    return `${username} just logged in`
}

//console.log(logInUserMessage("Tisha"))
//console.log(logInUserMessage())


function calculateCartPrice(...num1){           //...num1 is acting as rest operator
    //rest operator acts like passing multiple vaue as one value i.e array
    return num1
}

console.log(calculateCartPrice(200,400,500))

const user = {
    username: "Tisha",
    price: 199
}

function handledObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handledObject(user)
handledObject({
    username:"sam",
    price:"399"
})
//we can directly pass the object inside a function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
//console.log(returnSecondValue([200,400, 500, 1000]))
//we are directly passing the aaray in the function