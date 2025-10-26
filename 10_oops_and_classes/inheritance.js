class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)     //it lets a child class call things from its parent class.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof User)