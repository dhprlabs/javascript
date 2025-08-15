# JavaScript Array Iteration Methods

This document covers **forEach**, **filter**, **map**, **chaining**, and **reduce** functions in JavaScript, with conceptual explanations and examples.

## 1. forEach()

- **Purpose:** Iterates over each element in an array and executes a provided callback function.
- **Important:** `forEach()` **does not return** a new array. If you assign its output to a variable, you will get `undefined`.

**Example Use Case:**
```js
const coding = ["c", "cpp", "go", "rust"];
coding.forEach((lang) => console.log(lang));
```

**Key Points:**
- Use it for **side effects** (logging, pushing to another array).
- If you need to transform data, use `map()` instead.

## 2. filter()

- **Purpose:** Returns a **new array** containing only the elements that pass the given test.
- **Syntax:** 
```js
array.filter((element, index, array) => condition);
```

**Example Use Case:**
```js
const nums = [1, 2, 3, 4, 5];
const greaterThanTwo = nums.filter(num => num > 2);
```

**Key Points:**
- Returns a new array without modifying the original.
- Can replace some `forEach()` + `push()` logic.

## 3. map()

- **Purpose:** Returns a **new array** where each element is the result of applying a function to the original array elements.
- **Example:**
```js
const numbers = [10, 20, 30];
const decreased = numbers.map(n => n - 5);
```

**Key Points:**
- Always returns an array of the same length.
- Used for **transformation**, not filtering.

## 4. Chaining

- **Purpose:** Apply multiple array operations in a sequence.
- **Example:**
```js
const result = [1, 2, 3, 4]
  .map(n => n * 10)   // multiply
  .map(n => n + 5)    // add 5
  .filter(n => n > 25); // filter
```

**Key Points:**
- Operations are applied **in order**.
- Improves readability when transformations are sequential.

## 5. reduce()

- **Purpose:** Executes a reducer function on each element of the array, resulting in a **single output value**.
- **Syntax:**
```js
array.reduce((accumulator, currentValue, index, array) => { ... }, initialValue);
```

**Example:**
```js
const vals = [3, 8, 2];
const sum = vals.reduce((acc, curr) => acc + curr, 2);
```

**Parameters:**
- **Accumulator**: Value carried over between iterations.
- **Current Value**: Current element of the array.
- **Initial Value**: Starting value of the accumulator.

## Interview Questions

1. **What is the difference between `forEach` and `map`?**
   - `forEach` → No return, used for side effects.
   - `map` → Returns a new transformed array.

2. **When should you use `filter` over `map`?**
   - Use `filter` when you want to **remove elements** based on a condition.
   - Use `map` when you want to **transform** all elements.

3. **What does `reduce()` do?**
   - Reduces an array to a **single value** by accumulating results.

4. **Can you break out of `forEach` early?**
   - No, `forEach` cannot be stopped mid-way. Use `for...of` or `some()` instead.

5. **What happens if you omit the initial value in `reduce()`?**
   - The first element of the array is used as the initial accumulator value.

6. **Explain chaining and its benefits.**
   - Method chaining applies multiple operations in a clean, readable sequence without intermediate variables.

## Quick Summary Table

| Method   | Returns | Purpose                           |
|----------|---------|-----------------------------------|
| forEach  | void    | Run code for each element         |
| filter   | Array   | Keep elements that pass condition |
| map      | Array   | Transform each element            |
| reduce   | Any     | Accumulate to a single value      |