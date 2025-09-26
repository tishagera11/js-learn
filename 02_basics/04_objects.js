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
//const obj3 = {obj1, obj2}     //object inside an object will be printed

//const obj3 = Object.assign({}, obj1, obj2)          //assign combines all the objects and make a new one
//{} optional parameter - it makes sures {} is source ans else are target
const obj3 = {...obj1, ...obj2}     //spread operator - it also gives all the objects combined in 1 object

console.log(obj3)

const users = [         // on=bjects in an array
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
console.log(Object.keys(tinderUser))        // returns keys of the object
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))     //makes key & value pair in an array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))        //checks whether is it has some value or not 


//destructuring 

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Tisha"
}

//course.courseInstructor
const {courseInstructor: instructor} = course       //destructor
//because courseInstructor is a big name, we can give a new name i.e instructor and then use it later
console.log(instructor)

//api - jab bhi apna kaam kisi aur ko dena hota h that's called api
//we receive response in json form

//json form
/*{
    "name": "tisha"
    "coursename": "js in hindi"

}*/



