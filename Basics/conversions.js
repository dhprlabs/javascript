/*
Here, we will be converting some datatypes to number to see the result
"33" => 33
"33abc" => NaN
null => 0
undefined => NaN
true => 1
*/
let score = "33abc"
let points = undefined
let anyBool = true
let obj = null
let convertNumber = Number (obj)

console.log(typeof convertNumber)
console.log(convertNumber)

/*
Here, we will be converting some datatypes to boolean to see the result
-23 => true
41 => true
0 => false
undefined => false
null => false
"" => false
"physics" => true
*/
let boolNum = 1
let someNum = 0
let empStr = ""
let someStr = "physics"
let someObj = null
let someValue = undefined
let validBoolNum = Boolean (someValue)

console.log(typeof validBoolNum)
console.log(validBoolNum)