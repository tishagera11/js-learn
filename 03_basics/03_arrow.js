const user = {
    username: "tisha",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) //this refers to the current context 
        console.log(this)
    }

}

//user.welcomeMessage()
//user.username = "aditi"   //aditi, welcome to website will be printed
//user.welcomeMessage()

console.log(this)           //it will be empty because there is no object in global scope
//in console there will be shown a window onbject

/*function chai(){
    let username = "hitesh"
    console.log(this)
}

chai()

const coffee = function(){
    let username = "hitesh"
    console.log(this.username)      //cant use 'this' inside a function
}*/


//arrow function
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
//without writing return because () is used 

//const addTwo = (num1, num2) => ({username: "Tisha"})      //for returning an object wrap in ()


 