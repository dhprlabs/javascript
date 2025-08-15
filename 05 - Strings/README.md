# Strings

## Overview
Strings in JavaScript are **primitive values**, but when we use string methods, JavaScript **wraps them in a String object** temporarily.  
There are **two main ways** to create strings:
1. **String literal** → `let str = "hello";`
2. **String object** → `let str = new String("hello");` (rarely preferred)

## String Creation Examples
```javascript
let channelName = "proficiencyhub95";
let repoCnt = 5;

// Not preferable (string concatenation)
console.log("hey my channel name is : " + channelName + " and my repo count is : " + repoCnt);

// Preferable (Template Literals)
console.log(`hey my channel name is : ${channelName} and my repo count is : ${repoCnt}`);

let playerState = new String('moving'); // String object
console.log(playerState.__proto__);     // String prototype methods
```

## Common String Methods

| Method | Description | Example |
|--------|-------------|---------|
| `length` | Returns string length | `"hello".length` → `5` |
| `toUpperCase()` | Converts to uppercase | `"abc".toUpperCase()` → `"ABC"` |
| `substring(start, end)` | Extracts substring (no negative index) | `"moving".substring(0,3)` → `"mov"` |
| `slice(start, end)` | Extracts substring (supports negative index) | `"moving".slice(-1)` → `"g"` |
| `trim()` | Removes whitespace from both ends | `"   steady   ".trim()` → `"steady"` |
| `split(separator)` | Splits string into array | `"le-mans-2025".split('-')` → `["le", "mans", "2025"]` |

## Locale-Aware String Comparison
JavaScript provides `localeCompare()` for culturally correct comparisons.

```javascript
const areEqual = (str1, str2, locale = "en-US") => {
    return str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;
};

areEqual("ß", "ss", "de"); // true in German locale
areEqual("ı", "I", "tr");  // true in Turkish locale
```
**Why use it?** → Useful when sorting/searching strings in multiple languages.

## Key Points to Remember
1. **Template literals** are more readable and handle variable interpolation.
2. `new String()` creates an object, not a primitive — avoid unless necessary.
3. `slice()` allows negative indices; `substring()` does not.
4. `trim()` only removes whitespace, not other characters.
5. `localeCompare()` helps with **internationalization**.

## Interview-Level Questions
1. What is the difference between a string primitive and a String object?
2. Why are template literals preferred over string concatenation?
3. Difference between `slice()` and `substring()` in JavaScript?
4. What does `localeCompare()` do, and when would you use it?
5. How does JavaScript temporarily provide methods on primitive strings?
6. What happens when you compare `"ß"` and `"ss"` in German locale using `localeCompare()`?
7. Can `trim()` remove special characters? Why or why not?
8. Why might `"ı" === "I"` be false but `localeCompare("ı", "I", "tr")` be true?