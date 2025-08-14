# Comparison Operators & Type Coercion

## Overview
JavaScript has two main types of equality checks:

1. **Loose Equality (`==`)**
   - Compares values **after type conversion**.
   - Example: `"1" == 1` → `true` (string is converted to number before comparison).

2. **Strict Equality (`===`)**
   - Compares **value and type**.
   - Example: `"1" === 1` → `false` (string vs number).

## Relational Comparisons
Operators like `>`, `<`, `>=`, `<=` try to **convert both operands** to numbers before comparing.

Example:
```javascript
"1" > 1   // false → both converted to numbers: 1 > 1 → false
"1" >= 1  // true  → 1 >= 1 → true
```

## Special Cases with `null` and `undefined`
JavaScript treats `null` and `undefined` differently in equality checks:

| Comparison         | Result   | Reason |
|--------------------|----------|--------|
| `null == 0`        | false    | Loose equality does **not** convert null to 0. |
| `null >= 0`        | true     | Relational comparison converts null → 0. |
| `null > 0`         | false    | 0 > 0 is false. |
| `undefined == null`| true     | Loose equality treats them as equal only to each other. |

## Example Outputs
```javascript
2 >= 1        // true
2 == 1        // false
"1" == 1      // true
"1" > 1       // false
null >= 0     // true
null == 0     // false
"1" === 1     // false
1 === 1       // true
```

## Key Takeaways
1. **Prefer `===`** for predictable comparisons — avoids type coercion issues.
2. `null` and `undefined` behave oddly in comparisons:
   - Only equal to each other with `==`.
   - Convert to `NaN` or `0` in relational checks.
3. Strings are converted to numbers in relational comparisons.
4. `==` can give unexpected results — especially with falsy values like `0`, `""`, `null`, and `undefined`.

## Interview Questions
1. What is the difference between `==` and `===`?
2. Why does `"1" == 1` return `true` but `"1" === 1` return `false`?
3. Explain why `null >= 0` is `true` but `null == 0` is `false`.
4. How does JavaScript handle type conversion in relational operators?
5. Which operator would you use to avoid type coercion bugs, and why?
