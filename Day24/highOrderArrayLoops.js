// for-of loop
// ["", "", ""]
// [{}, {}, {}]
const nums = [1, 2, 3, 4, 5]
const greetings = ["hi", "hello", "nice to meet you"]

for (const n of nums) {
    console.log(n);
}

console.log();

for (const greet of greetings) {
    console.log(greet);
}

console.log();

// maps
const map = new Map()
 
map.set("IN", "India")
map.set("US", "United States of America")
map.set("CN", "China")
map.set("UK", "United Kingdom")

console.log(map);
console.log();

for (const key of map) {
    console.log(key);
}

console.log();

// important syntax to iterate on a map
for (const [key, value] of map) {
    console.log(key + " := " + value);
}

console.log();

// for-in loop
const myObj = {
    game1: "gta-v",
    game2: "spiderman",
    game3: "valorant"
}

for (const key in myObj) {
    console.log(key + " - " + myObj[key]);
}

console.log();

const arr = [34, 54, 92, 78, 12, 39]

for (const key in arr) {
    console.log(key + " -> " + arr[key]);
}

console.log();

// in-built array loops
// callback functions
const ary = ["js", "rust", "cpp", "c", "go"]

ary.forEach( function (val) {
    console.log(val);
} )

console.log();

ary.forEach( (val) => {
    console.log(val);
} )

console.log();

// declare a function and pass its reference
function printMe(item) {
    console.log(item);
}

ary.forEach(printMe);

console.log();

// additional parameters with forEach callback function
ary.forEach( (val, index, arr) => {
    console.log(val, index, arr);
} )

console.log();

// examples 
const queryResult = [
    {
        language: "java",
        extension: "java"
    },
    {
        language: "c++",
        extension: "cpp"
    }, 
    {
        language: "python",
        extension: "py"
    }
]

queryResult.forEach( (item) => {
    console.log(`language : ${item.language}, extension : ${item.extension}`);
} )