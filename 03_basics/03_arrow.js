const user = {
    username: "tisha",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}

//user.welcomeMessage()
//user.username = "aditi"
//user.welcomeMessage()

console.log(this)           //it will be empty because there is no onbject in global scope
//in console there will be shown a window onbject

/*function chai(){
    let username = "hitesh"
    console.log(this)
}

chai()

const coffee = function(){
    let username = "hitesh"
    console.log(this.username)
}*/

const coffee = () => {          //arrow function
    let username = "hitesh"
    console.log(this.username)
}

//using arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))

//implicit return

const addTwo = (num1, num2) => (num1 + num2)        //without curly braces syntax

//const addTwo = (num1, num2) => ({username: "Tisha"})      //for returning an object


 