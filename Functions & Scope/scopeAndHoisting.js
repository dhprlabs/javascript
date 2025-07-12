/*
- We will see today about nested scope.
- Also, later we will see about the stack formed when function is called and its scoping.
- Same as functions, it is applied to if-else and loops.
*/
function one() {
    const username = "proficinecyhub95"

    function two() {
        const website = "https://proficiencyhub.com"
        console.log(`inside two - ${username}`);
    }

    /*
    console.log(website);
    - This statement is wrong and will give errors.
    - Also, the below function call won't be executed due to it.
    */
    
    two()
}

one()

/*
- Now let's see a concept call hoisting.
- First we will declare a function and an expression.
- Then we will call them in the line before their declaration.
- You will find that the function call is executed.
- But there is an error in the expression call.
*/
console.log();
console.log(`function - ${addOne(5)}`);

function addOne(n) {
    return n + 1
}

console.log();
console.log(`function - ${addTwo(5)}`);

const addTwo = function(n) {
    return n + 2
}