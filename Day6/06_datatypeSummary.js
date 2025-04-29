/*
Here, we will briefly see about datatypes in javascript.
There are mainly 2 datatypes : primitive and non-primitive / refrence.

Primitive => String, Number, Boolean, null, undefined, Symbol, BigInt
Non-Primitive => Array, Objects, Functions   
*/
const score = 10
const newScore = 39.2339
const isLoggedIn = false
const outsideTemp = null
const bigNum = 93048203909281238n

let userEmail; 

const collegeId = Symbol('342')
const homeId = Symbol('342')

console.log(collegeId === homeId);

/* All non-primitive types have object as their return type */
const fields = ["aerospace", "electronics", "instrument", "computer"]

let playerObj = {
    name: "kaizer",
    age: 15,
    type: "mage"
}

const basicFunction = function () {
    console.log("hey, there");
}

function newFunction() {
    console.log("hello, there");
}

console.table([typeof fields, typeof playerObj, typeof newFunction]);