/* 
Here, we will talk about scopes in javascript.
So, any code inside {} with functions, if-else statement is called scope.
Let's see with an example of let, const and var keywords.
*/
let a = 10
const b = 20
var c = 30

console.log(`normal values in global scope : ${a}, ${b} & ${c}`);

/*
In the above code, there is no problem with the 3 keywords.
But, when we write them inside a scope, conflict arises.
Hence, we prefer more use of let keyword than var.
*/
var z = 20

if (true) {
    const x = 10
    let y = 20
    var z = 30
}

console.log();
console.log(`value of z : ${z}`);

/*
So, there are basically 2 types of scope : global & block.
Values declared in global scope can be used in block scope but vice-versa is not possible.
One more thing, remember that the web console and this code which we are running with node have different global scope.
*/ 
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