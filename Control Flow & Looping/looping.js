// for loop
console.log("basic for-loop :");

for (let i = 0; i < 5; i++) {
    const el = i;
    console.log(el + 1);
}

// nested for loop
console.log();
console.log("nested for-loop :");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`(${i + 1}, ${j + 1})`);
    }
}

// for each loop
console.log();
console.log("for-each loop :");

let array = [34, 84, 67]

array.forEach(element => {
    console.log(`values : ${(element * 0.5) + 5}`);
});

// break and continue
console.log();
console.log("break and continue :");

for (let index = 0; index < 10; index++) {
    if (index > 5) {
        break;
    }
    if (index % 2 == 0) {
        console.log("even");
        continue;
    }
    else {
        console.log("odd");
    }
}

// while loop
console.log();
console.log("while loop :");

idx = 0

while (idx <= 10) {
    if (idx % 2 == 0) {
        console.log(idx);
        idx++;
    }
    else {
        idx++;
    }
}

let a = ["flash", "superman", "batman"]
i = 0

while (i < a.length) {
    console.log(a[i]);
    i++;
}

// do-while loop
console.log();
console.log("do-while loop :");

let score = 12

do {
    console.log(score);
    score++
} while (score <= 10);

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