# Arrays

This guide explains:
- Array basics and operations
- Adding/removing elements
- Combining arrays
- Flattening arrays
- Creating arrays from different sources
- Slice vs Splice
- Concat vs Spread
- Interview-level concepts & questions

## 1. Introduction to Arrays

Arrays are **ordered collections** of elements stored under a single variable name.  
They can contain **mixed data types**: strings, numbers, objects, arrays, etc.

```javascript
let names = ["mike", "harvard", "louis"];
let codes = [223, 392, 128, 901, 475, 837, 172];
let codeNames = [39, "hello", 129, "world", 94];
```

## 2. Array Properties and Methods

### **Length of an Array**
```javascript
console.log(codes.length); // 7
```

### **Check if Element Exists**
```javascript
codes.includes(901); // true
```

## 3. Adding and Removing Elements

### **push()**
Adds elements at the **end**.
```javascript
names.push("jessica");
```

### **pop()**
Removes the **last element**.
```javascript
codes.pop();
```

### **unshift()**
Adds elements at the **beginning**.
```javascript
codeNames.unshift(90);
```

### **shift()**
Removes the **first element**.
```javascript
codeNames.shift();
```

## 4. join() Method

Converts an array into a **comma-separated string**.

```javascript
const newCodes = codes.join();
console.log(newCodes);        // "223,392,128,901,475,837"
console.log(typeof newCodes); // string
```

## 5. slice() vs splice()

### **slice(start, end)**
- Returns a **shallow copy** of selected elements.
- **Does not modify** the original array.

```javascript
const arr = [1, 2, 3, 4, 5];
const sliceArr = arr.slice(1, 3); // [2, 3]
console.log(arr); // [1, 2, 3, 4, 5]
```

### **splice(start, deleteCount)**
- **Modifies** the original array by removing/replacing elements.
- Returns the removed elements.

```javascript
const spliceArr = arr.splice(1, 3); // removes [2, 3, 4]
console.log(arr); // [1, 5]
```

## 6. Combining Arrays

### **push() with another array**
Pushes the entire array as **one element**:
```javascript
const marvel = ["ironman", "spiderman", "captain america"];
const dc = ["batman", "superman", "flash"];

marvel.push(dc);
console.log(marvel);
// ["ironman", "spiderman", "captain america", ["batman", "superman", "flash"]]
```

### **concat()**
Returns a **new array** combining elements:
```javascript
const allHeros = marvel.concat(dc);
```

### **Spread Operator (`...`)**
Spreads array elements individually:
```javascript
const newHeros = [...dc, ...marvel];
```

## 7. Flattening Arrays

`flat(depth)` removes nesting from arrays.

```javascript
const myArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]], 11];
const newArr = myArr.flat(Infinity);
```

## 8. Array Utility Methods

### **Array.isArray()**
Checks if value is an array:
```javascript
Array.isArray("proficiencyhub95"); // false
```

### **Array.from()**
Creates arrays from iterables or array-like objects:
```javascript
Array.from("proficiencyhub95");
// ['p','r','o','f',...]
```
For non-iterable objects:
```javascript
Array.from({ username: "proficiencyhub95" }); // []
```

### **Array.of()**
Creates arrays from arguments:
```javascript
let stage1 = 10, stage2 = 20, stage3 = 30;
Array.of(stage1, stage2, stage3); // [10, 20, 30]
```

## 9. Interview-Level Concepts

### **slice() vs splice()**
| Feature         | slice()           | splice()         |
|----------------|------------------|-----------------|
| Modifies array |   No             |   Yes          |
| Return value   | New array copy    | Removed elements|
| Use case       | Extract data      | Remove/replace  |

### **concat() vs spread (`...`)**
- Both return **new arrays**.
- Spread is shorter and more flexible.
- Concat can take multiple arrays/values as arguments.

### **Array.from() vs Array.of()**
- `Array.from()` → Converts iterable/array-like to an array.
- `Array.of()` → Creates an array from given arguments.

### **Shallow Copy**
Methods like `slice()`, `concat()`, and spread **do not deep clone** nested arrays.

### **Flattening Depth**
- `flat(1)` → Flattens only one level.
- `flat(Infinity)` → Fully flattens.

## 10. Common Interview Questions

1. Difference between **slice()** and **splice()**?
2. How do you merge two arrays without modifying the originals?
3. What is the difference between **concat()** and **spread**?
4. How to check if a variable is an array in JavaScript?
5. Explain the difference between **Array.from()** and **Array.of()**.
6. How to flatten an array with unlimited depth?
7. How to remove duplicates from an array?
8. Why is `join()` useful and what does it return?
9. What happens when you `push()` an array into another array?
10. How to convert a string into an array of characters?

---

## 11. Best Practices
- Use `slice()` for non-destructive extraction.
- Prefer spread over concat for readability.
- Use `Array.isArray()` before array operations.
- Avoid deep nesting when possible to reduce need for `flat(Infinity)`.
- Be aware of **shallow copy** limitations when working with nested arrays.