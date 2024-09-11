const accountId = 144553
let accountEmail = "tishagera2002@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121212"
accountCity = " Bengalore"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountPassword, accountCity, accountState])


