# Promises 

Promises in JavaScript provide a way to handle **asynchronous operations** such as API calls, file I/O, cryptography, and timers.  
They represent a **value that may be available now, later, or never**.

## Concepts

### 1. What is a Promise?
- A **Promise** is an object representing the eventual **completion** or **failure** of an asynchronous operation.
- It can be in **one of three states**:
  - `pending`: initial state, operation not complete.
  - `fulfilled`: operation completed successfully (resolved).
  - `rejected`: operation failed (error).

### 2. Creating a Promise
```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) resolve("Task done");
        else reject("Task failed");
    }, 1000);
});
````

### 3. Consuming Promises

* Use `.then()` to handle `resolve`.
* Use `.catch()` to handle `reject`.
* Use `.finally()` to run code regardless of outcome.

```js
promise
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup done."));
```

### 4. Passing Data in Resolve/Reject

```js
new Promise((resolve) => {
    resolve({ name: "ProficiencyHub95", type: "startup" });
})
.then((user) => console.log(user));
```

### 5. Promise Chaining

```js
new Promise((resolve) => resolve(5))
.then((num) => num * 2)
.then((num) => num * 3)
.then((result) => console.log(result)); // 30
```

### 6. Handling Errors

```js
new Promise((resolve, reject) => reject("Something broke"))
.catch((err) => console.error(err))
.finally(() => console.log("Execution complete"));
```

### 7. Async / Await

* Syntactic sugar for promises.
* Must be used inside an `async` function.
* Wrap with `try/catch` for error handling.

```js
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
getData();
```

### 8. Fetch API with Promises

```js
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.error(err));
```

### 9. Combining Multiple Promises

```js
const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");

Promise.all([p1, p2]).then((values) => console.log(values)); // ["One", "Two"]

Promise.race([p1, p2]).then((value) => console.log(value)); // "One"
```

## Interview-Level Questions

1. What are the different states of a Promise?
2. Difference between callbacks and promises?
3. How does `.then()` chaining work internally?
4. What happens if you don’t use `.catch()` in a promise?
5. Difference between `Promise.all()`, `Promise.allSettled()`, `Promise.any()`, and `Promise.race()`?
6. How does async/await work behind the scenes?
7. Can `async/await` replace promises completely?
8. What is the difference between microtasks (promises) and macrotasks (setTimeout)?
9. Why do we need `.finally()` in promises?
10. What happens if you `return` inside a `.then()` vs. not returning?

## Summary

* Promises simplify asynchronous programming.
* `.then()`, `.catch()`, `.finally()` → handle results and errors.
* `async/await` → makes code look synchronous.
* `Promise.all()`, `Promise.race()` → handle multiple async operations.

