# IIFE (Immediately Invoked Function Expression)

## Overview
**IIFE** stands for **Immediately Invoked Function Expression**.  
It’s a JavaScript function that is **declared and executed immediately** after creation.

We use IIFE to:
- Avoid polluting the **global scope**.
- Execute code **once** without creating reusable functions.
- Create private scopes for variables.

## Syntax
```javascript
(function functionName() {
    // code here
})();
````

* Wrap function in parentheses **()`...`** → makes it an expression.
* Add `()` after it to **immediately invoke** the function.
* A semicolon `;` is required if multiple IIFEs are used one after another.

## Code Example

```javascript
// Named IIFE
(function coffee() {
    console.log("coffee prepared :)");
})();

// Unnamed Arrow Function IIFE
(() => { 
    console.log("snacks prepared :)");
})();

// IIFE with Parameters
((item) => { 
    console.log(`${item} prepared :)`);
})("drinks");
```

## Types of IIFE

### 1. **Named IIFE**

* Has a function name.
* Mostly used for debugging or better readability.

```javascript
(function coffee() {
    console.log("coffee prepared :)");
})();
```

### 2. **Unnamed IIFE (Arrow Function)**

* Shorter syntax.
* Often used for quick execution.

```javascript
(() => {
    console.log("snacks prepared :)");
})();
```

### 3. **IIFE with Parameters**

* Accepts arguments during invocation.

```javascript
((item) => {
    console.log(`${item} prepared :)`);
})("drinks");
```

## Why the Semicolon?

If you don’t put a semicolon after an IIFE and another IIFE follows,
JavaScript might think you’re trying to chain calls, causing a **syntax error**.

Example:

```javascript
(function a(){})()
(function b(){})()
// Error without semicolon
```

## Advantages of IIFE

1. **Avoids Global Scope Pollution** – Variables inside IIFE are private.
2. **Executes Immediately** – No need to call separately.
3. **Encapsulation** – Keeps code isolated.

## Output

```
coffee prepared :)
snacks prepared :)
drinks prepared :)
```

## Interview Questions

1. What is an IIFE and why is it used?
2. What is the difference between a named and unnamed IIFE?
3. Why do we need parentheses around the function in an IIFE?
4. What happens if you don’t use a semicolon before an IIFE?
5. Can an IIFE take parameters? Give an example.
