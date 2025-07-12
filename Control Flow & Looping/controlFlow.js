// We will about control statements here.
// First we will start off with if-else statement.
// We know that if the condition is true then the statement block will be executed.
// We use comparision operators here like : ==, ===, >, <, >=, <=, != 
console.log("baisc if-else");

const temperature = 38
const score = 164

if (temperature <= 40) {
    console.log("we can go running");
} 
else {
    console.log("we can not go running");
}

if (score == "164") {
    console.log("we won");
}
if (score === "164") {
    console.log("we lost");
}

// There is a short-hand notation for if-else.
console.log();
console.log("short-hand if-else");

const balance = 1203.393

if (balance > 1000) console.log("your demat account is running");
else console.log("your demat account is not running");

// Now, let's see about nested if-else.
// Also, we will see the use of multiple conditions with && and || operator.
console.log();
console.log("nested if-else");

const points = 102
const guestUser = true
const userLoggedIn = false
const hasDebitCard = false
const userLoggedInFromEmail = true
const userLoggedInFromGoogle = true

if (points > 200) {
    console.log("epl winner !!");
}
else if (points > 150) {
    console.log("qualified for semi finals");
}
else if (points > 100) {
    console.log("qualified for quarter finals");
}
else {
    console.log("not qualified");
}

if (userLoggedInFromEmail || userLoggedInFromGoogle || guestUser) {
    console.log("user can access the website");
}

if (userLoggedIn && hasDebitCard) {
    console.log("user can buy courses");
}

// Now, we will see about switch case
console.log();
console.log("switch-case");

const month = 4

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
                
    default:
        console.log("invalid month");
        break;
}

// So, now we will see truthy and falsy values.
// Truthy values are assumed to be true.
// Falsy values are assumed to be false.
// Falsy values -> false, 0, -0, BigInt, "", undefined, null, NaN
// Truthy values -> " ", "0", 'false', [], {}, function(){}
console.log();
console.log("truthy & falsy values");

const userEmail = "sam@fb.co.in"
const emptyObj = {}

if (userEmail) {
    console.log("user has email");
}
else {
    console.log("user has no email");
}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator : (??) for null and undefined.
// This operator is used when we will use any database.
// Sometimes the response from the database can be null or undefined
console.log();
console.log("(??) operator");

let val;

val = 5 ?? 10
val = null ?? 20
val = null ?? 40 ?? 90

console.log(val);

// Terniary Operator () ? true : false for single line condition.
// It is used for short-hand of if-else.
console.log();
console.log("() ? true : false");

const price = 102
price >= 100 ? console.log("expensive") : console.log("cheap");