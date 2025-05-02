/*
Here, we will learn about dates in javascript.
There are several ways and methods for dates in javascript.
*/
let dt = new Date()
let newDt = new Date(2027, 6, 27, 11, 11)
let anotherDt = new Date("2025-03-20")
let timeStamp = Date.now()

console.log("date class methods")
console.log(dt)
console.log(dt.toString())
console.log(dt.toDateString())
console.log(dt.toISOString())
console.log(dt.toJSON())
console.log(dt.toLocaleDateString())
console.log(dt.toLocaleString())

console.log("\nnew date")
console.log(newDt.toDateString())
console.log(newDt.toLocaleString())

console.log("\ntimestamp and milliseconds conversion")
console.log(timeStamp)
console.log(anotherDt.getTime())
console.log(timeStamp - anotherDt);