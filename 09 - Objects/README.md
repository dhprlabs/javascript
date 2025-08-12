# Objects 

This document is a detailed guide to **JavaScript objects**, covering:
- Basics and syntax
- Access methods
- Symbols as keys
- Freezing objects
- Adding methods with `this`
- Nested objects
- Object creation methods
- Merging objects
- Object utility methods
- Interview-level concepts & questions

## 1. Introduction to Objects

In JavaScript, **objects** are collections of key–value pairs where:
- Keys (also called properties) are **strings** or **symbols**.
- Values can be any data type: numbers, strings, booleans, arrays, functions, or even other objects.

Objects are used to store **structured data**.

```js
const myObj = {
    name: "Proficiency Hub",
    age: 19,
    isLoggedIn: true,
    mail: "proficiencyhub@gmail.com",
    lastSession: ["Monday", "Saturday"],
    "field": "Robotics" // key can be a string with quotes
};
````

## 2. Accessing Object Properties

There are **two** ways to access properties:

### **Dot Notation**

```js
console.log(myObj.name); // Proficiency Hub
```

### **Bracket Notation**

```js
console.log(myObj["lastSession"]); // ["Monday", "Saturday"]
console.log(myObj["field"]); // Robotics
```

**When to use Bracket Notation:**
- Keys have spaces or special characters
- Keys are dynamic (variable-based)
- Keys are symbols

## 3. Symbols as Object Keys

Symbols create **unique and non-enumerable** keys.

```js
const mySym = Symbol("moving");

const anotherObj = {
    name: "Proficiency Hub",
    mySym: "moving",      // normal property
    [mySym]: "moving",    // symbol key
    age: 19
};

console.log(anotherObj["mySym"]); // "moving"
console.log(anotherObj[mySym]);   // "moving"
```

**Key differences:**

* `mySym` (without brackets) → treated as a **string key**
* `[mySym]` (with brackets) → treated as a **symbol key**

## 4. Freezing Objects

`Object.freeze()` **prevents modifications**:

* No adding/removing properties
* No changing existing values

```js
Object.freeze(anotherObj);
anotherObj.age = 14; // No effect
console.log(anotherObj.age); // 19
```

## 5. Adding Methods to Objects

Objects can store **functions** as properties (methods).

```js
const tempObj = {
    name: "Mike",
    age: 10,
    isLoggedIn: true
};

tempObj.greetingOne = function() {
    console.log("Hey, there");
};

tempObj.greetingTwo = function() {
    console.log(`Hey, ${this.name}`);
};

tempObj.greetingOne(); // Hey, there
tempObj.greetingTwo(); // Hey, Mike
```

**Why `this` is important:**

* Refers to the **current object** where the method is called.
* Allows dynamic access to properties.

## 6. Nested Objects

Objects can have **objects inside objects**:

```js
const facebookUser = {
    username: "user95",
    personal: {
        firstName: "Mark",
        lastName: "Cuban"
    }
};

console.log(facebookUser.personal.firstName); // Mark
```

Use **optional chaining** (`?.`) to avoid errors if a property is `undefined`:

```js
console.log(facebookUser.personal?.firstName); // Mark
```

## 7. Creating Objects

### Using Object Literal

```js
const obj = {};
```

### Using `new Object()`

```js
const newUser = new Object();
newUser.name = "Proficiency Hub";
newUser.age = 19;
```

## 8. Merging Objects

### **`Object.assign()`**

```js
const obj3 = Object.assign({}, obj1, obj2);
```

### **Spread Operator**

```js
const obj4 = { ...obj1, ...obj2 };
```

## 9. Useful Object Methods

```js
Object.keys(obj)       // Returns array of keys
Object.values(obj)     // Returns array of values
Object.entries(obj)    // Returns array of [key, value] pairs
obj.hasOwnProperty(k)  // Checks if key exists in object
```

## 10. Interview-Level Concepts

### **Difference between `Object.freeze()` and `Object.seal()`**

* `freeze` → No add/remove/change allowed
* `seal` → Can change values, but can't add/remove keys

### **Difference between `for...in` and `Object.keys()`**

* `for...in` → Iterates over **enumerable** properties (including prototype chain)
* `Object.keys()` → Own enumerable properties only

### **Shallow vs Deep Copy**

* **Shallow Copy** → Copies only first level (nested objects still reference same memory)
* **Deep Copy** → Full independent copy (e.g., `structuredClone(obj)` in modern JS)

### **Difference between `this` in Arrow Functions vs Normal Functions**

* Arrow functions do **not** bind `this`; they take it from their lexical scope.
* Methods using arrow functions can behave unexpectedly with `this`.

## 11. Common Interview Questions

1. **How do you add a Symbol as a key in an object?**
2. **What happens when you try to modify a frozen object?**
3. **Explain the difference between `Object.freeze()` and `Object.seal()`.**
4. **How to check if an object has a specific property?**
5. **What’s the difference between dot notation and bracket notation?**
6. **How do you merge two objects without modifying the originals?**
7. **What’s the difference between shallow copy and deep copy in JavaScript objects?**
8. **Explain how `this` works in object methods.**
9. **What is optional chaining and when to use it?**
10. **Why is a symbol key not accessible via `Object.keys()`?**

## 12. Best Practices

* Prefer **dot notation** unless key is dynamic or not a valid identifier.
* Use `const` for object references to avoid reassignment.
* Use **spread syntax** over `Object.assign()` for cleaner merging.
* Use optional chaining to prevent runtime errors on missing properties.
* Freeze/seal objects only when immutability is required.