# Scopes & `let`, `const`, `var`

## Overview
In JavaScript, **scope** refers to the current context of code execution, determining the accessibility of variables.  
Code inside `{}` such as functions, loops, or `if-else` blocks creates **block scope**.

This code explains:
- Difference between **global scope** and **block scope**
- How `let`, `const`, and `var` behave in different scopes
- Why `let` is preferred over `var`

## Key Concepts

### 1. Global Scope
Variables declared outside any block (`{}`) are in the **global scope** and can be accessed anywhere in the code.

```javascript
let a = 10;
const b = 20;
var c = 30;

console.log(`normal values in global scope : ${a}, ${b} & ${c}`);
```
All variables print correctly here.

### 2. Block Scope vs Global Scope
- **Block Scope**: Variables declared with `let` or `const` inside `{}` are not accessible outside the block.
- **Global Scope**: Variables declared with `var` inside `{}` are **still accessible** outside (function-scoped, not block-scoped).

```javascript
var z = 20;

if (true) {
    const x = 10;
    let y = 20;
    var z = 30; // Overwrites global z
}

console.log(`value of z : ${z}`); // Output: 30
```
This is why `var` is less preferred — it can cause accidental overwrites.

### 3. Accessing Variables from Different Scopes
- Variables in **global scope** are accessible inside blocks.
- Variables in **block scope** are **not** accessible globally.

```javascript
let y = 200;

if (true) {
    const x = 10;
    let y = 20; // Block scope variable
    console.log(`value of block scope of let keyword : ${y}`); // 20
}

console.log(`value of global scope of let keyword : ${y}`); // 200
```

## Node.js vs Browser Console
- **Node.js** and **browser console** have different **global objects** (`global` vs `window`).
- This can affect variable access in certain situations.

## Summary Table

| Keyword | Scope Type | Hoisting | Re-declaration Allowed? | Re-assignment Allowed? |
|---------|-----------|----------|--------------------------|------------------------|
| `var`   | Function  | Yes      | Yes                      | Yes                    |
| `let`   | Block     | Yes (TDZ)| No                       | Yes                    |
| `const` | Block     | Yes (TDZ)| No                       | No                     |

## Interview Questions
1. What’s the difference between **block scope** and **global scope**?
2. Why is `var` considered unsafe for declaring variables?
3. What happens if you declare a `var` variable inside a block?
4. Can a `const` variable be re-assigned?
5. What’s the **temporal dead zone (TDZ)** in JavaScript?

## Output Example
```
normal values in global scope : 10, 20 & 30

value of z : 30

value of block scope of let keyword : 20

value of global scope of let keyword : 200
```