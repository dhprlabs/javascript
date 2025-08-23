# Timing Functions & Asynchronous Concepts

## Introduction
JavaScript is **single-threaded** and uses the **event loop** to handle asynchronous operations. Functions like `setTimeout`, `setInterval`, Promises, and `async/await` help manage delayed or non-blocking operations.

## Timing Functions

### **1. setTimeout()**
Executes a function **once** after a specified delay.
```js
setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);
````

### **2. clearTimeout()**

Cancels a `setTimeout` before it executes.

```js
const timerId = setTimeout(() => console.log("Won't run"), 3000);
clearTimeout(timerId);
```

### **3. setInterval()**

Executes a function **repeatedly** after a fixed time interval.

```js
const id = setInterval(() => console.log("Repeats every 2s"), 2000);
```

### **4. clearInterval()**

Stops a running interval.

```js
clearInterval(id);
```

## **DOM Manipulation with Timeouts**

You can dynamically update elements using `querySelector` and timing functions.
Example:

```js
setTimeout(() => {
  document.querySelector(".heading").innerHTML = "Updated!";
}, 5000);
```

## **Asynchronous JavaScript**

### **Event Loop Concept**

* JS is synchronous by default but handles async operations using the event loop.
* Functions like `setTimeout` are executed **after** synchronous code finishes.

Example:

```js
console.log("first");
setTimeout(() => console.log("second"), 2000);
console.log("third");
// Output: first, third, second
```

### **Promises**

A **Promise** represents a future value.

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved"), 2000);
});
myPromise.then(console.log);
```

### **async / await**

`async` functions always return a promise.
`await` pauses execution until a promise is resolved.

```js
async function fetchData() {
  console.log("Fetching data...");
  const result = await new Promise(resolve => 
      setTimeout(() => resolve("Data received"), 2000)
  );
  console.log(result);
}
fetchData();
```

### **Combining Events, Timeouts & Async**

You can:

* Start a timeout
* Cancel it via button click
* Start an interval that repeatedly logs data
* Fetch data asynchronously using async/await

## **Event Loop Visual Flow**

1. Synchronous code executes first.
2. Timers (setTimeout/setInterval) are moved to the callback queue.
3. Event loop checks the call stack → executes pending callbacks.

## **Interview-Level Questions**

1. Difference between **setTimeout** and **setInterval**?
2. How does the **event loop** handle asynchronous tasks?
3. Can you explain the difference between **microtasks** (Promises) and **macrotasks** (timeouts)?
4. Difference between `async/await` and `then/catch`?
5. What happens if you call `await` outside an `async` function?
6. How to cancel a timer or interval? Why is it important?
7. Explain what happens when you call `clearTimeout` or `clearInterval` after execution.
8. What is the difference between `Promise.all` and `Promise.race`?
9. Why is JS called single-threaded, and how does it handle async operations?
10. What happens if you use a blocking loop (`while(true)`) with timeouts?
