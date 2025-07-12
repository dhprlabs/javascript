/*
- Let's learn about IIFE (Immediate Invoked Function Expression).
- Due to global scope variable declaration problem, we use IIFE.
- It's work is to immediately call the function after its declaration.
- Also we need to apply semicolon at the second parenthesis in order to stop the interpreter.
- If we don't do that, then it will give error.
- There are named and unnamed IIFE.
*/
(function coffee() {
    console.log("coffee prepared :)");
})();

(() => { 
    console.log("snacks prepared :)");
})();

((item) => { 
    console.log(`${item} prepared :)`);
})("drinks");
