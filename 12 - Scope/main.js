let a = 10
const b = 20
var c = 30

console.log(`normal values in global scope : ${a}, ${b} & ${c}`);

var z = 20

if (true) {
    const x = 10
    let y = 20
    var z = 30
}

console.log();
console.log(`value of z : ${z}`);

let y = 200

if (true) {
    const x = 10
    let y = 20
    var z = 30

    console.log();
    console.log(`value of block scope of let keyword : ${y}`);
}

console.log();
console.log(`value of global scope of let keyword : ${y}`);