const accountId = 144553  //can't changed the value
let accountEmail = "hitesh@google.com" //let locally access 
var accountPassword = "12345" //you can globally access
accountCity = "Jaipur"  //correct but not recommended
let accountState;  //print undifened...

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])