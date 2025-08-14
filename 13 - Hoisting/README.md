# Nested Scope & Hoisting

## Overview
This code demonstrates two important JavaScript concepts:
1. **Nested Scope** – How inner and outer functions can access variables.
2. **Hoisting** – How JavaScript moves declarations to the top before execution.

It also shows how these concepts apply to functions, conditionals, and loops.

## 1. Nested Scope

**Definition:**  
When functions are defined inside other functions, the inner function has access to variables from the outer function (lexical scoping).

### Example:
```javascript
function one() {
    const username = "proficinecyhub95";

    function two() {
        const website = "https://proficiencyhub.com";
        console.log(`inside two - ${username}`);
    }

    // console.log(website); Error: website is block-scoped to 'two'

    two();
}

one();
```

### Key Points:
- Inner functions can access **outer scope variables**.
- Outer functions **cannot** access variables declared inside inner functions.
- Works similarly in `if-else` and loops.

## 2. Hoisting

**Definition:**  
JavaScript moves declarations **to the top** of the scope **before execution**.

- **Function Declarations** are hoisted completely (definition + body).
- **Function Expressions** (using `const`, `let`, or `var`) are only hoisted **as variables** but **not initialized**, causing an error if used before definition.

### Example:
```javascript
console.log(`function - ${addOne(5)}`); // Works

function addOne(n) {
    return n + 1;
}

console.log(`function - ${addTwo(5)}`); // Error: Cannot access 'addTwo' before initialization

const addTwo = function(n) {
    return n + 2;
};
```

## Common Errors
1. Accessing inner function variables from the outer function → **ReferenceError**
2. Calling a `const` or `let` function expression before declaration → **ReferenceError: TDZ**

## Summary Table

| Feature | Function Declaration | Function Expression |
|---------|----------------------|---------------------|
| Hoisted |   Yes                |   Only variable (no definition) |
| Called Before Declaration |   Works |   Error |
| Best Use Case | Utility functions | Inline, callback, or conditional functions |

## Interview Questions
1. What is **lexical scope** in JavaScript?
2. Can a parent function access variables from its child function?
3. Explain **hoisting** in simple terms.
4. Why does a function expression throw an error if called before declaration?
5. What is the **Temporal Dead Zone (TDZ)**, and how does it relate to `let`/`const`?

## Output Example
```
inside two - proficinecyhub95

function - 6

ReferenceError: Cannot access 'addTwo' before initialization
```