{}      //curly braces with functions, if else is called scope



if(true){
    let a = 10
    const b = 20
    var c = 30
}


function one(){
    const username = "Tisha"

    function two(){                     //nested function can access the parent function and its variable
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)

    two()
}
//one()

if(true){
    const username = "tisha"
    if(username === "tisha"){
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website)
}

//console.log(username)

//+++++++++ interesting ++++++++++
addone(5)
function addone(num){
    return num + 1
}


addTwo(5)               //this is error because function is declared inside a variable
const addTwo = fuction (num){
    return num + 2
}
