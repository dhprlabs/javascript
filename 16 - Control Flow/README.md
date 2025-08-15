# Control Statements

This module covers various **control flow statements** in JavaScript, including:

- `if-else` statements
- Short-hand if-else
- Nested if-else
- Logical operators (`&&` and `||`)
- `switch-case`
- Truthy & Falsy values
- Nullish Coalescing Operator (`??`)
- Ternary Operator (`condition ? true : false`)

## **1. If-Else Statement**
- Executes a block of code if the condition is `true`.
- Uses comparison operators:  
  `==, ===, >, <, >=, <=, !=`

**Example:**
```javascript
const temperature = 38;

if (temperature <= 40) {
    console.log("we can go running");
} else {
    console.log("we can not go running");
}
```

## **2. Short-hand If-Else**
For single-line conditions, you can omit curly braces.

```javascript
const balance = 1203.393;
if (balance > 1000) console.log("your demat account is running");
else console.log("your demat account is not running");
```

## **3. Nested If-Else & Logical Operators**
- Use `&&` (AND) and `||` (OR) for multiple conditions.

```javascript
if (points > 200) {
    console.log("epl winner !!");
} else if (points > 150) {
    console.log("qualified for semi finals");
} else if (points > 100) {
    console.log("qualified for quarter finals");
} else {
    console.log("not qualified");
}

if (userLoggedInFromEmail || userLoggedInFromGoogle || guestUser) {
    console.log("user can access the website");
}
```

## **4. Switch Case**
Used when you have multiple fixed condition checks.

```javascript
const month = 4;

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("invalid month");
}
```

## **5. Truthy & Falsy Values**
- **Falsy values** → `false, 0, -0, BigInt(0), "", undefined, null, NaN`
- **Truthy values** → `" "`, `"0"`, `'false'`, `[]`, `{}`, `function(){}`

```javascript
const userEmail = "sam@fb.co.in";
if (userEmail) {
    console.log("user has email");
} else {
    console.log("user has no email");
}
```

## **6. Nullish Coalescing Operator (`??`)**
- Used to provide a default value only if the left-hand side is `null` or `undefined`.

```javascript
let val = null ?? 20; // Output: 20
val = null ?? 40 ?? 90; // Output: 40
```

## **7. Ternary Operator**
Short-hand for `if-else` in a single line.

```javascript
const price = 102;
price >= 100 ? console.log("expensive") : console.log("cheap");
```

## **Interview Questions**
1. What’s the difference between `==` and `===` in JavaScript?
2. Explain truthy and falsy values with examples.
3. What is the difference between `null` and `undefined`?
4. How does the Nullish Coalescing Operator (`??`) work?
5. When should you use `switch-case` instead of multiple `if-else` statements?
6. Difference between `&&` and `||` operators in condition checks?
7. Can `if` statements be written without curly braces?
8. What’s the main difference between a ternary operator and if-else?
9. How does JavaScript handle type coercion in comparisons?
10. What are potential pitfalls of using `==` for equality checks?