# Functions 

This code demonstrates different aspects of **functions** in JavaScript, including:

- Basic function declaration and invocation
- Rest parameters (`...`)
- Passing arrays and objects to functions
- Returning values
- Default parameters
- Conditional checks in functions

## Concepts Covered

### 1. **Basic Functions**
Functions are reusable blocks of code that perform a specific task.

```javascript
function sayMyName() {
    console.log("walter white :)");
    console.log("jessy pinkman :)");
}
sayMyName();
```
- No parameters
- Executes the same statements every time it’s called

### 2. **Parameters vs Arguments**
- **Parameters**: Variables listed inside the function definition.
- **Arguments**: Values passed to the function when calling it.

```javascript
function twoSum(n1, n2) { // n1, n2 are parameters
    console.log(n1 + n2);
}
twoSum(4, 5); // 4, 5 are arguments
```

### 3. **Return Statement**
If you want to **return a value** instead of just printing it:

```javascript
function newSum(n1, n2) {
    return n1 + n2;
}
let result = newSum(3, 4); // 7
```

### 4. **Rest Parameters (`...`)**
When you don’t know how many arguments will be passed, use rest parameters:

```javascript
function calcCartItems(...items) {
    return items;
}
console.log(calcCartItems(3400, 4940, 640, 230, 500));
```
- Returns an array of all arguments passed
- Can only be the **last parameter** in the function definition

### 5. **Mixing Fixed and Rest Parameters**
You can have fixed parameters first, then a rest parameter:

```javascript
function cartItems(n1, n2, ...n) {
    return n;
}
console.log(cartItems(3400, 4940, 640, 230, 500));
// Output: [640, 230, 500]
```

### 6. **Functions with Arrays**
Passing an array to a function:

```javascript
function printArray(anyArr) {
    console.log(anyArr);
}
const myArr = [1200, 2300, 3900, 8900, 5600];
printArray(myArr);
```

### 7. **Functions with Objects**
Passing an object to a function:

```javascript
function printObject(anyObj) {
    console.log(`username : ${anyObj.username}`);
    console.log(`priority : ${anyObj.priority}`);
    console.log(`owner : ${anyObj.owner}`);
    console.log(`isLoggedIn : ${anyObj.isLoggedIn}`);
}
const homeUser = {
    username: "proficiencyhub",
    priority: "home",
    owner: true,
    isLoggedIn: true
};
printObject(homeUser);
```

### 8. **Default Parameters**
If no value is passed, a default can be set:

```javascript
function logIn(name = "new user") {
    if (!name) {
        console.log("undefined datatype received");
        return;
    }
    console.log(`user ${name} logged in !!`);
}
logIn("proficiencyhub95"); // user proficiencyhub95 logged in !!
logIn(); // user new user logged in !!
```

## Output Walkthrough

Example key outputs from the script:
```
simple function
walter white :)
jessy pinkman :)

using restful operator
[3400, 4940, 640, 230, 500]

[640, 230, 500]

username : proficiencyhub
priority : home
owner : true
isLoggedIn : true

7

user proficiencyhub95 logged in !!
undefined datatype received
user new user logged in !!
```

## Interview Questions

1. **What’s the difference between `...` spread operator and rest parameters?**
   - Spread: Expands arrays/objects into individual elements.
   - Rest: Collects multiple arguments into an array.

2. **Why can rest parameters only be the last parameter in a function?**
   - Because JS needs to know where the "rest" stops; otherwise, it can’t determine how to group arguments.

3. **What happens if you `return` without a value in a function?**
   - It returns `undefined`.

4. **What’s the difference between function declaration and function expression?**
   - Declaration is hoisted, expression is not.

5. **Can default parameters be non-primitive values like arrays or objects?**
   - Yes, but beware of reference sharing issues.

6. **How are objects passed to functions in JavaScript: by value or by reference?**
   - By reference.

7. **What’s the difference between parameters and arguments?**
   - Parameters are placeholders in the function definition, arguments are the actual values passed.

## Key Takeaways
- Use rest parameters to handle unknown argument counts.
- Functions can take arrays and objects directly.
- Always use `return` when you need a value back.
- Default parameters make your functions more robust.
- Use meaningful names for better readability.