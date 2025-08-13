# Arrow Functions & `this` Keyword

This script demonstrates the behavior of the `this` keyword in JavaScript with regular functions, object methods, and arrow functions. It also covers variations of arrow function syntax and usage.

## Topics Covered
1. **`this` keyword in object methods**
2. **Changing object properties and its effect on methods**
3. **`this` keyword in global scope**
4. **`this` keyword in regular functions**
5. **`this` keyword in arrow functions**
6. **Arrow function syntax variations**
7. **Returning objects from arrow functions**

## Code Explanation

### 1. `this` Keyword in Object Methods
```javascript
const user = {
    username: "proficiencyhub95",
    websiteName: "https://proficiencyhub.com",

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to ${this.websiteName}`);
        console.log();
        console.log(this);
        console.log();
    }
};
```
- Inside an **object method**, `this` refers to the object itself.
- Changing `username` updates the method output.

### 2. Changing Object Properties
```javascript
user.welcomeMessage();
user.username = "spacesurfer";
user.welcomeMessage();
```
- First call uses `"proficiencyhub95"`.
- Second call uses `"spacesurfer"`.

### 3. `this` in Global Scope
```javascript
console.log(`result of normal 'this' keyword : ${this}`);
```
- In **Node.js**, `this` is an empty object `{}`.
- In **browser console**, `this` refers to the `window` object.

### 4. `this` in Regular Functions
```javascript
function myJob() {
    let user = "gemini";

    console.log(this);
    console.log(`using 'this' keyword in function : ${this.user}`);
}
myJob();
```
- In regular functions (non-strict mode), `this` refers to the **global object**.
- In **strict mode**, `this` is `undefined`.

### 5. `this` in Arrow Functions
```javascript
const myUser = () => {
    let user = "gemini";
    console.log(this);
    console.log(`using 'this' keyword in arrow function : ${this.user}`);
};
myUser();
```
- Arrow functions **do not have their own `this`**.
- They inherit `this` from their surrounding lexical scope.

### 6. Arrow Function Syntax Variations
```javascript
const one = (n1, n2) => { return n1 + n2 }; // With return
const two = (n1, n2) => n1 + n2;            // Implicit return
const three = (n1, n2) => (n1 + n2);        // Implicit return with parentheses
```

### 7. Returning Objects from Arrow Functions
```javascript
const four = () => ({ name: "jaden", color: "red" });
```
- To return an object, wrap it in parentheses.

## 🖥 Example Output
```
proficiencyhub95, welcome to https://proficiencyhub.com
{ username: 'proficiencyhub95', websiteName: 'https://proficiencyhub.com', welcomeMessage: [Function: welcomeMessage] }

spacesurfer, welcome to https://proficiencyhub.com
{ username: 'spacesurfer', websiteName: 'https://proficiencyhub.com', welcomeMessage: [Function: welcomeMessage] }

result of normal 'this' keyword : [object Object]

<global object or {} depending on environment>
using 'this' keyword in function : undefined

{}
using 'this' keyword in arrow function : undefined

7
7
7

{ name: 'jaden', color: 'red' }
```

## Interview Questions
1. What does the `this` keyword refer to inside an object method?
2. How does the behavior of `this` differ in regular functions vs arrow functions?
3. Why do arrow functions not have their own `this`?
4. How do you return an object from an arrow function without syntax errors?
5. What happens if you call a method after changing an object’s property?
6. How is `this` different in Node.js vs browser environment?
7. Can you use `this` inside an arrow function in an object? Why or why not?

## Key Takeaways
- `this` in **object methods** → refers to the object.
- `this` in **regular functions** → global object or `undefined` (strict mode).
- `this` in **arrow functions** → inherits from outer scope.
- Arrow functions are ideal for short, concise callbacks but not for object methods that use `this`.
- Wrap objects in parentheses when returning from an arrow function.
