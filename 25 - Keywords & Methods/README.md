# `this` Keyword, Call, Apply & Bind 

JavaScript provides powerful ways to control the value of `this`.  
This is especially important when working with objects, methods, event handlers, and functions.

## Concepts

### 1. `this` keyword
- Refers to the **execution context** (the object that is calling the function).
- Value depends on **how the function is called**, not where it is defined.

Examples:
```js
console.log(this); // in browser: `window`, in node: `{}`

function normalFunction() {
    console.log(this);
}
normalFunction(); // global object (window in browser, undefined in strict mode)

const obj = {
    name: "ProficiencyHub",
    printName: function() {
        console.log(this.name);
    }
};
obj.printName(); // "ProficiencyHub"
````

> Arrow functions **don’t have their own `this`**, they inherit from their surrounding scope:

```js
const arrowObj = {
    name: "Arrow Example",
    show: () => console.log(this.name)
};
arrowObj.show(); // undefined
```

### 2. `call()` Method

* Invokes a function with a **given `this` value** and arguments provided **individually**.

```js
function greet(city, country) {
    console.log(`Hello ${this.name} from ${city}, ${country}`);
}
const user = { name: "Dhairya" };
greet.call(user, "Ahmedabad", "India");
```

### 3. `apply()` Method

* Similar to `call()`, but arguments are passed as an **array**.

```js
greet.apply(user, ["Ahmedabad", "India"]);
```

### 4. `bind()` Method

* Returns a **new function** with permanently bound `this` value.
* Useful for event listeners and callbacks.

```js
const boundFunc = greet.bind(user, "Ahmedabad", "India");
boundFunc(); // Can be called later
```

## Key Differences

| Feature    | `call`            | `apply`           | `bind`                  |
| ---------- | ----------------- | ----------------- | ----------------------- |
| Invocation | Immediately calls | Immediately calls | Returns new function    |
| Arguments  | Comma separated   | Array             | Can be passed partially |

## Interview-Level Questions

1. What is the difference between `this` in **arrow functions** and **normal functions**?
2. How does `this` behave in **strict mode** vs **non-strict mode**?
3. Why do we need `bind()` when we already have `call()` and `apply()`?
4. How do you ensure the correct `this` value inside a callback or event handler?
5. What happens when you `bind()` a function multiple times?
6. Can you polyfill the `bind()` method?
7. How is `this` determined in:

   * Constructor functions?
   * Class methods?
   * Event listeners?

## Summary

* `this` → depends on call-site, not definition.
* `call()` → calls function immediately, args comma-separated.
* `apply()` → calls function immediately, args in array.
* `bind()` → returns a new function with bound `this`.