let myDate = new Date()
console.log(myDate.toString())                  //gives date in string fromat
console.log(myDate.toDateString())              //only gives the date
console.log(myDate.toLocaleString())            //gives date with time in different format
console.log(typeof myDate)


let myCreatedDate = new Date(2025, 0, 23)       //for getiing a specific date // months start with 0 in js
/*let myCreatedDate = new Date(2025, 0, 23, 5, 3)    //it gives time also 
let myCreatedDate = new Date("2025-01-27")          //different formats of the date
let myCreatedDate = new Date("01-27-2025") */
console.log(myCreatedDate.toDateString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)                    //gives values in mili seconds
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))        //gives value in seconds instead of miliseconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())             //prints month of that date
console.log(newDate.getMonth() + 1)         //prints month + 1 of that date becuase minth starts with 0 in js
console.log(newDate.getDay())               //pritns the day of the week


newDate.toLocaleString('default', {     //to print date with anything you want 
    weekday: "long"
})



