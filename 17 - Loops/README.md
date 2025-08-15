# Loops & Iteration Methods

This guide covers **all major looping constructs in JavaScript**, their syntax, use-cases, and subtle differences — along with some **interview-level questions**.

## 1. Basic `for` Loop

- **Syntax**:
```js
for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}
```
- **Use Case**: When you know the **exact number of iterations** in advance.

## 2. Nested `for` Loop
Used for **matrix-like** or **multi-level** iteration.
```js
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`(${i + 1}, ${j + 1})`);
    }
}
```

## 3. `forEach()` Loop
- Works **only on arrays**.
- Executes a **callback function** for each element.
- Cannot be **stopped** using `break` or `continue`.
```js
const arr = [34, 84, 67];
arr.forEach(el => console.log((el * 0.5) + 5));
```

## 4. `break` & `continue`
- **`break`**: Exits the loop immediately.
- **`continue`**: Skips the current iteration.
```js
for (let i = 0; i < 10; i++) {
    if (i > 5) break;
    if (i % 2 === 0) continue;
    console.log("odd", i);
}
```

## 5. `while` Loop
Runs **while the condition is true**.
```js
let idx = 0;
while (idx <= 10) {
    console.log(idx);
    idx++;
}
```

## 6. `do...while` Loop
- Executes **at least once**, even if condition is false initially.
```js
let score = 12;
do {
    console.log(score);
    score++;
} while (score <= 10);
```

## 7. `for...of` Loop
- Works with **iterables** (arrays, strings, Maps, Sets).
```js
const greetings = ["hi", "hello", "hey"];
for (const greet of greetings) {
    console.log(greet);
}
```

## 8. Iterating over `Map`
```js
const map = new Map();
map.set("IN", "India").set("US", "United States");

for (const [key, value] of map) {
    console.log(`${key} := ${value}`);
}
```

## 9. `for...in` Loop
- Iterates over **enumerable property keys** (works on objects and arrays).
```js
const myObj = { game1: "gta-v", game2: "spiderman" };
for (const key in myObj) {
    console.log(key, myObj[key]);
}
```

## 10. Advanced `forEach()` Usage
```js
const ary = ["js", "rust", "cpp"];
ary.forEach((val, index, arr) => {
    console.log(val, index, arr);
});
```

## Summary Table

| Loop Type     | Works On          | Can Break? | Best For |
|---------------|-------------------|------------|----------|
| for           | arrays, strings    | yes         | Known iteration count |
| while         | any condition      | yes         | Unknown iteration count |
| do...while    | any condition      | yes         | At least one execution |
| for...of      | iterables          | yes         | Cleaner array/Map/Set iteration |
| for...in      | objects, arrays    | yes         | Object key iteration |
| forEach       | arrays only        | no         | Functional iteration |

## Interview Questions

1. **What is the difference between `for...of` and `for...in` in JavaScript?**
2. **Can you use `break` inside a `forEach`? Why or why not?**
3. **When would you prefer `while` over `for`?**
4. **How does `do...while` differ from `while` in terms of execution?**
5. **What happens if you modify an array while iterating with `for...of`?**
6. **How does iteration order differ between `Map` and `Object`?**
7. **Why should you avoid using `for...in` on arrays in some cases?**
8. **Can you iterate over a string using `for...of`? Give an example.**
9. **How would you simulate a `break` in a `forEach`?**
10. **What is the performance difference between `for` and `forEach` in large datasets?**

## Key Notes
- Choose the loop **based on data structure and need for control flow**.
- Avoid `for...in` for arrays if index order matters.
- Use `Map` for predictable iteration order when working with key-value pairs.
