class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUppercase()    //_email is a private property 
    }

    set email(value){
        this._email    //setter never return anything
    }

    get password(){
        return `${this._password}tisha`
    }
    set password(value){
        this._password = value
    }

}

const tisha = new User("t@tisha.com", "abc")
console.log(tisha.password)