const user = {
    _email: 'tisha@tg.com',
    _password: "abc",
//_email when used with get & set is automatically works on email thing 
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this,_email = value
    }
}

const tea = Object.create(user)
console.log(tea.email)