function setUsername(username){
    //complex Db calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(username)
    
    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@facebook.com", "123")
console.log(chai)