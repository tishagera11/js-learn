class User{
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createId(){      //Belongs to the class, not objects
        return `123`
    }
}

const hitesh =new User("hitesh")
//console.log(hitesh.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)     //it lets a child class call things from its parent class.
        this.email = email
    }
}

const iphone = new Teacher ("iphone", "i@phone.com")
console.log(iphone.createId())