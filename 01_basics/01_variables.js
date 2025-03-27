const accountId = 144553        
let accountEmail = "tishagera2002@gmail.com"
var accountPassword = "12345"       
accountCity = "Jaipur"      //it is possible to delare variable without let and const also but is not recommended
let accountState;       //value not defined 

// accountId = 2 // not allowed
// const = cannot be changed 
// let = can be reassigned 

accountEmail = "hc@hc.com"
accountPassword = "212121212"
accountCity = " Bengalore"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountPassword, accountCity, accountState])      
//console.table gives all the mentioned values in tabular form


