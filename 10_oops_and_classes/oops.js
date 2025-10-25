const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        //console.log("got user details from databse")
        //console.log(`Username: ${this.username}`)
        console.log(this)
    }
}


//console.log(user.username)
//console.log(user.getUserDetails())

function person(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`welcome ${this.username}`)
    }

    //return this       //implicitly defined; not necessary to write 
}

const userOne = new person("hitesh", 12, true)
const userTwo = new person("chaiaurcode", 11, false)

console.log(userOne.constructor)
//constructor is reference of the same thing
//instanceOf - checks whther the refernce is same
console.log(userTwo)

//new keyword - a new empty object is created
//        - constructor function is called due to new and all the arguemtns are passed inside it
//        - all the aruguements gets injected into this keyword
//        - we get it inside the function
