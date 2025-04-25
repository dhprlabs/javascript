/*
Here, we will see about various variables like let, const, var.
We prefer to use let & const instead of var.
Reason is the issue in early javascript of block scope & functional scope.
*/

const accountId = 7622910192
let accountEmail = "proficiencyhub@mail.com"
var accountPassword = "1995"
accountCity = "Liverpool"

console.log(accountId);

accountEmail = "proficiencyhub95@cloud.com"
accountPassword = "78012"
accountCity = "Manchester"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])