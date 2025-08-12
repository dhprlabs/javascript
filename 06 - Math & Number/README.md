# Number & Math 

This document covers **important concepts, methods, and tricks** related to Numbers and the Math object in JavaScript.  
It is designed for quick revision and interview preparation.

## 1. Number Basics

### Primitive Numbers
- Declared directly as literals.

- Example:
    ```javascript
    const score = 400;
    ```

### Number Object
- Created using the `Number` constructor.

- Allows access to more built-in methods.
    ```javascript
    const balance = new Number(100);
    ```

## 2. Useful Number Methods

### 2.1 `toString()`
- Converts a number into a string.

- Can be used with `.length` to get string length.

- Example:
    ```javascript
    balance.toString().length; // 3
    ```

### 2.2 `toFixed(n)`
- Returns a **string** with number rounded to `n` decimal places.

- Example:
    ```javascript
    balance.toFixed(1); // "100.0"
    ```

### 2.3 `toPrecision(n)`
- Formats number to `n` **significant digits**.

- Example:
    ```javascript
    (123.8966).toPrecision(4); // "123.9"
    ```

### 2.4 `toLocaleString([locale])`
- Formats number according to the given locale.

- Default (US):
    ```javascript
    (1000000).toLocaleString(); // "1,000,000"
    ```

- Indian format:
    ```javascript
    (1000000).toLocaleString('en-IN'); // "10,00,000"
    ```

### 2.5 `Number()` Conversion
- Converts various data types into a number.
    ```javascript
    Number("33");      // 33
    Number("33abc");   // NaN
    Number(true);      // 1
    Number(false);     // 0
    ```

### 2.6 Other Conversion Methods
- `parseInt(string, [radix])` → Converts string to integer.
    ```javascript
    parseInt("42px"); // 42
    ```

- `parseFloat(string)` → Converts string to floating point number.
    ```javascript
    parseFloat("42.5px"); // 42.5
    ```

## 3. Math Object Basics

`Math` is a built-in object providing mathematical constants and functions.

## 4. Common Math Methods

| Method | Description | Example |
|--------|-------------|---------|
| `Math.abs(x)` | Absolute value | `Math.abs(-4) → 4` |
| `Math.round(x)` | Round to nearest integer | `Math.round(4.6) → 5` |
| `Math.ceil(x)` | Round **up** | `Math.ceil(4.2) → 5` |
| `Math.floor(x)` | Round **down** | `Math.floor(4.9) → 4` |
| `Math.min(...values)` | Minimum value | `Math.min(4, 3, 6, 8) → 3` |
| `Math.max(...values)` | Maximum value | `Math.max(4, 3, 6, 8) → 8` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(16) → 4` |
| `Math.pow(a, b)` | Power | `Math.pow(2, 3) → 8` |
| `Math.trunc(x)` | Remove decimals | `Math.trunc(4.9) → 4` |

## 5. Random Numbers

### 5.1 Basic Random
- Returns number between `0` and `1`:
    ```javascript
    Math.random(); // e.g., 0.527
    ```

### 5.2 Scaling
- Example: Between `1` and `10`:
    ```javascript
    Math.floor(Math.random() * 10) + 1;
    ```

### 5.3 Custom Range
- Formula:
    ```javascript
    Math.floor(Math.random() * (max - min + 1)) + min;
    ```
    
- Example: Between `10` and `20`:
    ```javascript
    Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    ```

## 6. Special Number Values

| Value | Description |
|-------|-------------|
| `NaN` | Not a Number — result of invalid number operation |
| `Infinity` | Positive infinity |
| `-Infinity` | Negative infinity |

Examples:
```javascript
typeof NaN; // "number"
1 / 0; // Infinity
-1 / 0; // -Infinity
