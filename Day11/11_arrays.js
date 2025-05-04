/*
Here, we will see more about arrays.
*/
const marvel = ["ironman", "spiderman", "captain america"]
const dc = ["batman", "superman", "flash"]

marvel.push(dc)

console.log("push operation")
console.log(marvel)

marvel.pop()

const allHeros = marvel.concat(dc)

console.log("\nconcat operation")
console.log(allHeros)

const newHeros = [...dc, ...marvel]

console.log("\nspread operation")
console.log(newHeros)

const myArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]], 11, 12]
const newArr = myArr.flat(Infinity)

console.log("\nflat operation")
console.log(newArr)

console.log()
console.log(Array.isArray("proficiencyhub95"))

console.log()
console.log(Array.from("proficiencyhub95"))

console.log()
console.log(Array.from({ username : "proficiencyhub95" }))

let stage1 = 10
let stage2 = 20
let stage3 = 30

console.log()
console.log(Array.of(stage1, stage2, stage3))