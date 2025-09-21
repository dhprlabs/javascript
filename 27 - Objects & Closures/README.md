# Objects & Closures 

This project demonstrates **Objects** and **Closures** in JavaScript with examples, explanations, and interview-level questions.

## Objects in JavaScript
Objects in JS are collections of key-value pairs. Keys are **strings or symbols**, and values can be anything (primitive, object, function).

### Common Operations:
1. **Defining Objects**
   ```js
   const obj = {
       name: "ProficiencyHub",
       power: "AI"
   };
   ```

2. **Property Descriptors**
   Every property in JavaScript has attributes:

   * `value`
   * `writable`
   * `enumerable`
   * `configurable`

   ```js
   const mathDes = Object.getOwnPropertyDescriptor(Math, "PI");
   console.log(mathDes);
   ```

3. **Modifying Descriptors**

   ```js
   Object.defineProperty(obj, "power", {
       writable: false,
       enumerable: false
   });
   ```

4. **Iterating Objects**

   ```js
   for (let [key, value] of Object.entries(obj)) {
       console.log(`${key}: ${value}`);
   }
   ```

## Closures in JavaScript

A **closure** is the combination of a function and its **lexical environment** (scope chain).
It lets an inner function access variables from an outer function, even after the outer function has returned.

### Example:

```js
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc(); // "Mozilla"
```

### Key Concepts:

1. **Lexical Scope** → Functions remember the environment they were created in.
2. **Closure Use Cases**:

   * Data privacy
   * Function factories
   * Event handlers
   * Callback functions

## Real-World Example

Changing background color using closure:

```js
function changeBg(color) {
    return function() {
        document.body.style.backgroundColor = color;
    };
}
document.getElementById("orange").onclick = changeBg("orange");
document.getElementById("green").onclick = changeBg("green");
```

## Interview Questions

### Objects

1. What are property descriptors in JavaScript?
2. Difference between `Object.defineProperty()` and normal property assignment?
3. Why is `Math.PI` immutable by default?
4. What’s the difference between enumerable, writable, and configurable?
5. Can functions be object properties? How?

### Closures

1. What is a closure?
2. Why are closures important?
3. Explain lexical scoping in JavaScript.
4. Give real-world use cases of closures.
5. What happens if closures hold too many variables? (Memory leaks)
6. How are closures used in event handlers?

