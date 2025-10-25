//promise is object which represents eventual completion or failure
//promise gets complete in future
//three states of promises: pending, fulfilled & rejected

const promiseOne = new Promise(function(resolve, reject){   //promise syntax
    //do an async task
    // DB calls, crypotography, network call
    setTimeout(function(){
        console.log('async task is complete')
        resolve()       //it is a method; resolve is used to connect with .then
    }, 1000);
})

//promise consumption
promiseOne.then(function(){
//.then is connected with 'resolve'
    console.log("promise consumed");
})



new Promise(function (resolve, reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve()
        
    }, 1000);
}).then(function(){
    console.log("async 2 resolved")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})        
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "tisha", password: "123"})
        }else {
            reject('ERROR : something went wrong')      //reject is equal to error
        }
    }, 1000);
})

promiseFour
.then( (user) => {
    console.log(user)
    return user.username
})
.then( (username) => {
    console.log(username);
    
})
.catch( (error) => {
    console.log(error)
}).finally( () => console.log( "the promise is either resolved or rejected "))


const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username : "javascript", password: "123"})
        } else {
            reject('error : js went wrong')
        }
    },1000)
})


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()


async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error){
        console.log("E: ", error)
    }
}

//getAllUsers()

//by using fetch, then and catch
//fetch method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then((data) => {   //for handling above then data
    console.log(data)
})
.catch((error) => console.log(error))