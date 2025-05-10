/*
Here, we will more about functions.
Assume you are making a shopping website and the user is adding items in its cart.
You don't know that how many items the user will add.
Hence, what should we do about the function's arguments ?
Let's see here.
*/
function cartPrice(n) {
    return n
}

let result = cartPrice(450)

console.log("simple function");
console.log(result);

/*
So, here in order to achieve the goal, we will use ()...) operator.
Sometimes, it is called as spread or restful operator.
Here, we will call it restful operator.
*/
function calcCartItems(...items) {
    return items
}

let price = calcCartItems(3400, 4940, 640, 230, 500)

console.log();
console.log("using restful operator");
console.log(price);

function cartItems(n1, n2, ...n) {
    return n
}

let item = cartItems(3400, 4940, 640, 230, 500)

console.log();
console.log("using restful operator");
console.log(item);

/*
Let us see functions with arrays and objects.
*/
const myArr = [1200, 2300, 3900, 8900, 5600]

const homeUser = {
    username: "proficiencyhub",
    priority: "home",
    owner: true,
    isLoggedIn: true
}

function printArray(anyArr) {
    console.log();
    console.log(anyArr);
}

function printObject(anyObj) {
    console.log();
    console.log(`username : ${anyObj.username}`);
    console.log(`priority : ${anyObj.priority}`);
    console.log(`owner : ${anyObj.owner}`);
    console.log(`isLoggedIn : ${anyObj.isLoggedIn}`);
}

printArray(myArr)
printObject(homeUser)

printArray([230, 450, 950])
printObject({username: "user", priority: "normal", owner: false, isLoggedIn: false})