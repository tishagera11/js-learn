//const tinderUser = new Object()           //singleton object
const tinderUser = {}                       //non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullename :{
            firstname: "tisha",
            lastname: "gera"
        }
    }
}
console.log(regularUser.fullname.userfullename.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "a", 2:"b"}
//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)          //assign combines all the objects and make a new one
const obj3 = {...obj1, ...obj2}

console.log(obj3)

const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "g@gmail.com"
    }
]

console.log(users[0].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//destructuring 

const course ={
    coursename: "jsinhindi",
    price: "999",
    courseInstructor: "Tisha"
}

const {courseInstructor: instructor} = course       //destructor
console.log(instructor)

//api

//json
/*{
    "name": "tisha"
    "coursename": "js in hindi"

}*/

