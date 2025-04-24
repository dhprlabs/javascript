const accountId = 7622910192
let accountEmail = "proficiencyhub@mail.com"
var accountPassword = "1995"
accountCity = "Liverpool"

console.log(accountId);

accountEmail = "proficiencyhub95@cloud.com"
accountPassword = "78012"
accountCity = "Manchester"

let accountState

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer to use let & const instead of var.
Because of the issue in early javascript of block scope & functional scope.
*/