/*
Functions are used to perform repetative task.
When calling a function, we need to add () after its name.
Here is a simple & basic function. 
*/
function sayMyName() {
    console.log("walter white :)");
    console.log("jessy pinkman :)");
}

console.log("simple function");
sayMyName()

/*
Let's define another function.
When we define input values in function defination, there are parameters.
We we call the function and pass the values, they are arguments.
*/
function twoSum(n1, n2) {
    console.log(n1 + n2);
}

function newSum(n1, n2) {
    return n1 + n2
}

let result = newSum(3, 4)

console.log();
console.log(result);

twoSum(4, 5)

/*
Lastly, let's add some condition to our function and make it error tolerant.
*/
function logIn(name="new user") {
    if (!name) {
        console.log("undefined datatype received");
        return  
    } 
    else {
        console.log(`user ${name} logged in !!`);
    }
}

console.log();

logIn("proficiencyhub95")
logIn("")
logIn()