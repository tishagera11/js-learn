//let myName = "tisha     "
//let mychannel ="thebakingdelights"

//console.log(myName.truelength);

let myHeors = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.tisha = function(){
    console.log(`tisha is present in all objects`)
}

Array.prototype.heyTisha = function(){
    console.log(`Tisha says hello`)
}
//heroPower.tisha()

myHeors.tisha()
myHeors.heyTisha()
//heroPower.heyTisha()

//inheritence

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:teachingSupport
}

Teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUsername = "chaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"tisha".trueLength()
"icetea".trueLength()
